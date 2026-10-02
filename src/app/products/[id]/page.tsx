import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getProductById } from '@/lib/productStore'
import { getWhatsAppLink } from '@/lib/siteConfig'

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const isOutOfStock = product.stock <= 0 || product.status === 'Out of Stock'

  return (
    <main className="min-h-screen bg-white px-4 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[28px] border border-gold/20 bg-white p-6 shadow-[0_18px_50px_rgba(212,175,55,0.08)] md:p-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-[#fffaf0]">
            <div className="relative h-[420px] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex w-fit rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a5e00]">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold text-[#111827] md:text-5xl">{product.name}</h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-3xl font-bold text-[#111827]">₹{product.price.toLocaleString('en-IN')}</p>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isOutOfStock ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {isOutOfStock ? 'Out of Stock' : product.status}
              </span>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

            <div className="mt-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a5e00]">Availability</p>
              <p className="text-lg font-semibold text-slate-700">{product.stock} pieces available</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {isOutOfStock ? (
                <span className="inline-flex items-center justify-center rounded-lg bg-slate-200 px-5 py-3 text-base font-semibold text-slate-500">
                  Out of Stock
                </span>
              ) : (
                <Link href={`/products/${product.id}/order`} className="inline-flex items-center justify-center rounded-lg bg-gold px-5 py-3 text-base font-semibold text-[#1f1b13] transition-all duration-300 hover:bg-[#d4a900]">
                  Order Now
                </Link>
              )}

              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gold bg-white px-5 py-3 text-base font-semibold text-[#8a5e00] transition-all duration-300 hover:bg-gold hover:text-[#111827]"
              >
                Get More Info
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-gold/20 bg-[#fffaf0] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-[#111827]">Specifications</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {product.specifications.map((specification) => (
              <li key={specification} className="flex items-start gap-3 rounded-xl border border-gold/15 bg-white p-3 text-slate-700">
                <span className="mt-1 text-lg text-[#8a5e00]">◆</span>
                <span>{specification}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
