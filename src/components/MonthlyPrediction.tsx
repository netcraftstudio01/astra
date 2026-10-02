'use client'

import { useEffect, useState } from 'react'
import type { MonthlyPrediction as MonthlyPredictionData } from '@/lib/monthlyPrediction'

export default function MonthlyPrediction() {
  const [prediction, setPrediction] = useState<MonthlyPredictionData | null>(null)

  useEffect(() => {
    fetch('/api/prediction')
      .then((response) => response.ok ? response.json() : null)
      .then((data) => setPrediction(data))
      .catch(() => setPrediction(null))
  }, [])

  if (!prediction) return null

  return (
    <section id="monthly-prediction" className="py-20 px-4 bg-[#fff8e5]">
      <div className="max-w-5xl mx-auto">
        <p className="text-center uppercase tracking-[0.3em] text-sm text-[#a67400] mb-4">Celestial guidance</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Monthly Prediction</h2>
        <p className="text-slate-600 text-center mb-12 text-lg">{prediction.month} · {prediction.title}</p>

        <div className="card-glass rounded-lg p-8 md:p-10">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">{prediction.introduction}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {prediction.predictions.map((item) => (
              <div key={item} className="border-l-4 border-[#FEBD14] bg-white/70 p-5 rounded-r-lg">
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-[#FEBD14]/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <p className="text-slate-700"><span className="font-semibold text-[#a67400]">Lucky signs:</span> {prediction.luckySigns}</p>
            <p className="text-slate-700"><span className="font-semibold text-[#a67400]">Lucky numbers:</span> {prediction.luckyNumbers}</p>
          </div>
        </div>
      </div>
    </section>
  )
}