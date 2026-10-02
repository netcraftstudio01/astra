import { promises as fs } from 'fs'
import path from 'path'

export type ProductStatus = 'Available' | 'Out of Stock'

export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  stock: number
  status: ProductStatus
  image: string
  specifications: string[]
  createdAt: string
  updatedAt: string
}

const productPath = path.join(process.cwd(), 'data', 'products.json')

const defaultProducts: Product[] = [
  {
    id: 'ruby-gemstone',
    name: 'Ruby Gemstone',
    category: 'Ruby',
    description: 'Premium natural ruby gemstone with vivid red brilliance and powerful energy.',
    price: 28500,
    stock: 6,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab534?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Natural ruby', 'Fine cut', 'Certified quality', 'Suitable for astrological use'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'pearl-gemstone',
    name: 'Pearl Gemstone',
    category: 'Pearl',
    description: 'Lustrous pearl gemstone known for calming energy and emotional balance.',
    price: 18500,
    stock: 8,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Natural freshwater pearl', 'Polished finish', 'Elegant shine', 'Comfortable for daily wear'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'emerald-gemstone',
    name: 'Emerald Gemstone',
    category: 'Emerald',
    description: 'Elegant emerald gemstone that enhances communication, wisdom, and clarity.',
    price: 32000,
    stock: 4,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Vivid green tone', 'Premium cut', 'High clarity', 'Astrological gemstone'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'yellow-sapphire',
    name: 'Yellow Sapphire',
    category: 'Yellow Sapphire',
    description: 'Bright yellow sapphire prized for prosperity, wisdom, and positive fortune.',
    price: 42000,
    stock: 3,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Natural yellow sapphire', 'Rich golden shade', 'Premium finish', 'Recommended for Jupiter'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'blue-sapphire',
    name: 'Blue Sapphire',
    category: 'Blue Sapphire',
    description: 'Rare blue sapphire gemstone with a premium royal blue finish and powerful energy.',
    price: 52000,
    stock: 2,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab534?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Deep blue hue', 'Excellent brilliance', 'strong astrological value', 'Carefully selected stone'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'diamond-gemstone',
    name: 'Diamond Gemstone',
    category: 'Diamond',
    description: 'Sparkling diamond gemstone celebrated for luxury, elegance, and prosperity.',
    price: 61000,
    stock: 1,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    specifications: ['High clarity diamond', 'Precision cut', 'Classic brilliance', 'Premium luxury choice'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export async function readProducts(): Promise<Product[]> {
  try {
    const content = await fs.readFile(productPath, 'utf8')
    const parsed = JSON.parse(content) as Product[]
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultProducts
  } catch {
    await fs.mkdir(path.dirname(productPath), { recursive: true })
    await fs.writeFile(productPath, `${JSON.stringify(defaultProducts, null, 2)}\n`, 'utf8')
    return defaultProducts
  }
}

export async function writeProducts(products: Product[]) {
  await fs.mkdir(path.dirname(productPath), { recursive: true })
  await fs.writeFile(productPath, `${JSON.stringify(products, null, 2)}\n`, 'utf8')
}

export async function getProductById(id: string) {
  const products = await readProducts()
  return products.find((product) => product.id === id) ?? null
}
