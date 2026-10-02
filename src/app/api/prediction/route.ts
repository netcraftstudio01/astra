import { NextResponse } from 'next/server'
import { readMonthlyPrediction } from '@/lib/monthlyPrediction'

export async function GET() {
  try {
    return NextResponse.json(await readMonthlyPrediction())
  } catch {
    return NextResponse.json({ error: 'Monthly prediction is unavailable.' }, { status: 500 })
  }
}