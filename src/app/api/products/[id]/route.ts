import { NextResponse } from 'next/server'

import { isAdminAuthenticated } from '@/lib/adminAuth'
import { Product, getProductById, readProducts, writeProducts } from '@/lib/productStore'

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const product = await getProductById(params.id)

  if (!product) {
    return NextResponse.json({ error: 'Product not found.' }, { status: 404 })
  }

  return NextResponse.json(product)
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const payload = await request.json()
  const { name, description, price, category, stock, status, image, specifications } = payload

  if (!name || !description || !category || !price || !image) {
    return NextResponse.json({ error: 'Please complete all required product fields.' }, { status: 400 })
  }

  const numericPrice = Number(price)
  const numericStock = Number(stock || 0)
  const validStatus = status === 'Out of Stock' ? 'Out of Stock' : 'Available'

  if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
    return NextResponse.json({ error: 'Please enter a valid product price.' }, { status: 400 })
  }

  if (!Number.isInteger(numericStock) || numericStock < 0) {
    return NextResponse.json({ error: 'Please enter a valid stock quantity.' }, { status: 400 })
  }

  const products = await readProducts()
  const existingIndex = products.findIndex((product) => product.id === params.id)

  if (existingIndex === -1) {
    return NextResponse.json({ error: 'Product not found.' }, { status: 404 })
  }

  const updatedProduct: Product = {
    ...products[existingIndex],
    name: String(name).trim(),
    category: String(category).trim(),
    description: String(description).trim(),
    price: numericPrice,
    stock: numericStock,
    status: validStatus,
    image: String(image).trim(),
    specifications: Array.isArray(specifications)
      ? specifications.map((item: string) => String(item).trim()).filter(Boolean)
      : products[existingIndex].specifications,
    updatedAt: new Date().toISOString(),
  }

  products[existingIndex] = updatedProduct
  await writeProducts(products)

  return NextResponse.json(updatedProduct)
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } },
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const products = await readProducts()
  const filteredProducts = products.filter((product) => product.id !== params.id)

  if (filteredProducts.length === products.length) {
    return NextResponse.json({ error: 'Product not found.' }, { status: 404 })
  }

  await writeProducts(filteredProducts)
  return NextResponse.json({ success: true })
}
