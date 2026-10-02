import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { MonthlyPrediction, readMonthlyPrediction, writeMonthlyPrediction } from '@/lib/monthlyPrediction'

export async function GET() {
  if (!isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  return NextResponse.json(await readMonthlyPrediction())
}

export async function PUT(request: Request) {
  if (!isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  const payload = await request.json() as MonthlyPrediction
  if (!payload.month || !payload.title || !payload.introduction || !Array.isArray(payload.predictions)) {
    return NextResponse.json({ error: 'Please complete all prediction fields.' }, { status: 400 })
  }

  const prediction = { ...payload, updatedAt: new Date().toISOString() }
  await writeMonthlyPrediction(prediction)
  return NextResponse.json(prediction)
}