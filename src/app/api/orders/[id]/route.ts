import { NextResponse } from 'next/server'

import { isAdminAuthenticated } from '@/lib/adminAuth'
import { readOrders, writeOrders } from '@/lib/orderStore'

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const payload = await request.json()
  const { status } = payload
  const validStatuses = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid order status.' }, { status: 400 })
  }

  const orders = await readOrders()
  const orderIndex = orders.findIndex((order) => order.id === params.id)

  if (orderIndex === -1) {
    return NextResponse.json({ error: 'Order not found.' }, { status: 404 })
  }

  orders[orderIndex] = { ...orders[orderIndex], status }
  await writeOrders(orders)

  return NextResponse.json(orders[orderIndex])
}
