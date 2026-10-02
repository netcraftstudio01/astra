import { promises as fs } from 'fs'
import path from 'path'

export type OrderStatus = 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'

export interface Order {
  id: string
  productId: string
  productName: string
  productPrice: number
  customerName: string
  phone: string
  email: string
  address: string
  quantity: number
  message?: string
  totalPrice: number
  status: OrderStatus
  createdAt: string
}

const orderPath = path.join(process.cwd(), 'data', 'orders.json')

export async function readOrders(): Promise<Order[]> {
  try {
    const content = await fs.readFile(orderPath, 'utf8')
    const parsed = JSON.parse(content) as Order[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    await fs.mkdir(path.dirname(orderPath), { recursive: true })
    await fs.writeFile(orderPath, '[]\n', 'utf8')
    return []
  }
}

export async function writeOrders(orders: Order[]) {
  await fs.mkdir(path.dirname(orderPath), { recursive: true })
  await fs.writeFile(orderPath, `${JSON.stringify(orders, null, 2)}\n`, 'utf8')
}
