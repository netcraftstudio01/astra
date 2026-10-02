import { promises as fs } from 'fs'
import path from 'path'

export interface MonthlyPrediction {
  month: string
  title: string
  introduction: string
  predictions: string[]
  luckySigns: string
  luckyNumbers: string
  updatedAt: string
}

const predictionPath = path.join(process.cwd(), 'data', 'monthly-prediction.json')

export async function readMonthlyPrediction(): Promise<MonthlyPrediction> {
  const content = await fs.readFile(predictionPath, 'utf8')
  return JSON.parse(content) as MonthlyPrediction
}

export async function writeMonthlyPrediction(prediction: MonthlyPrediction) {
  await fs.writeFile(predictionPath, `${JSON.stringify(prediction, null, 2)}\n`, 'utf8')
}