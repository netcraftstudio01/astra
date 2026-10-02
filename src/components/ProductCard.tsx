import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '@/lib/productStore'
import { getWhatsAppLink } from '@/lib/siteConfig'

export default function ProductCard({ product }: { product: Product }) {
  const isOutOfStock = product.stock <= 0 || product.status === 'Out of Stock'

  return (
    <article className="card-glass group overflow-hidden rounded-2xl border border-gold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)]">
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#fff7d9] via-white to-[#f9f0d1]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a5e00]">
            {product.category}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${isOutOfStock ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
            {isOutOfStock ? 'Out of Stock' : product.status}
          </span>
        </div>

        <Link href={`/products/${product.id}`} className="block text-2xl font-bold text-[#111827] transition-colors hover:text-[#8a5e00]">
          {product.name}
        </Link>

        <p className="text-sm leading-6 text-slate-600">{product.description}</p>

        <div className="flex items-center justify-between gap-3 border-t border-[#f3d86a]/60 pt-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a5e00]">Price</p>
            <p className="text-2xl font-bold text-[#111827]">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a5e00]">Stock</p>
            <p className="text-base font-semibold text-slate-700">{product.stock} left</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          {isOutOfStock ? (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-lg bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500">
              Out of Stock
            </span>
          ) : (
            <Link href={`/products/${product.id}/order`} className="inline-flex flex-1 items-center justify-center rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-[#1f1b13] transition-all duration-300 hover:bg-[#d4a900]">
              Order Now
            </Link>
          )}

          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-gold bg-white px-4 py-3 text-sm font-semibold text-[#8a5e00] transition-all duration-300 hover:bg-gold hover:text-[#111827]"
          >
            Get More Info
          </a>
        </div>
      </div>
    </article>
  )
}
