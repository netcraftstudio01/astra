import { NextResponse } from 'next/server'

import { isAdminAuthenticated } from '@/lib/adminAuth'
import { Order, readOrders, writeOrders } from '@/lib/orderStore'
import { ProductStatus, readProducts, writeProducts } from '@/lib/productStore'

export async function GET() {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const orders = await readOrders()
  return NextResponse.json(orders)
}

export async function POST(request: Request) {
  const payload = await request.json()
  const { productId, productName, productPrice, customerName, phone, email, address, quantity, message } = payload

  if (!productId || !customerName || !phone || !email || !address) {
    return NextResponse.json({ error: 'Please complete all required order details.' }, { status: 400 })
  }

  const numericQuantity = Number(quantity || 0)
  if (!Number.isInteger(numericQuantity) || numericQuantity <= 0) {
    return NextResponse.json({ error: 'Please enter a valid order quantity.' }, { status: 400 })
  }

  const products = await readProducts()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return NextResponse.json({ error: 'Selected product was not found.' }, { status: 404 })
  }

  if (product.stock <= 0 || product.status === 'Out of Stock') {
    return NextResponse.json({ error: 'This product is currently out of stock.' }, { status: 400 })
  }

  if (numericQuantity > product.stock) {
    return NextResponse.json({ error: 'Requested quantity exceeds available stock.' }, { status: 400 })
  }

  const validPrice = Number(productPrice || product.price)
  if (!Number.isFinite(validPrice) || validPrice <= 0) {
    return NextResponse.json({ error: 'Invalid product price.' }, { status: 400 })
  }

  const orders = await readOrders()
  const newOrder: Order = {
    id: `${Date.now()}-${String(customerName).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    productId: product.id,
    productName: productName || product.name,
    productPrice: validPrice,
    customerName: String(customerName).trim(),
    phone: String(phone).trim(),
    email: String(email).trim(),
    address: String(address).trim(),
    quantity: numericQuantity,
    message: message ? String(message).trim() : '',
    totalPrice: validPrice * numericQuantity,
    status: 'Pending',
    createdAt: new Date().toISOString(),
  }

  orders.unshift(newOrder)
  await writeOrders(orders)

  const updatedProducts = products.map((item) => {
    if (item.id !== product.id) return item
    const stock = Math.max(0, item.stock - numericQuantity)
    const status: ProductStatus = stock > 0 ? 'Available' : 'Out of Stock'

    return {
      ...item,
      stock,
      status,
      updatedAt: new Date().toISOString(),
    }
  })

  await writeProducts(updatedProducts)

  return NextResponse.json(newOrder)
}

export async function PUT(request: Request) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const payload = await request.json()
  const { id, status } = payload

  if (!id || !status) {
    return NextResponse.json({ error: 'Order ID and status are required.' }, { status: 400 })
  }

  const orders = await readOrders()
  const orderIndex = orders.findIndex((order) => order.id === id)

  if (orderIndex === -1) {
    return NextResponse.json({ error: 'Order not found.' }, { status: 404 })
  }

  const validStatuses = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid order status.' }, { status: 400 })
  }

  orders[orderIndex] = { ...orders[orderIndex], status }
  await writeOrders(orders)

  return NextResponse.json(orders[orderIndex])
}
