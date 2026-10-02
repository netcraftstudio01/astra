/**
 * Type definitions for the Karthik Astrology website
 */

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  details: string[]
}

export interface Gemstone {
  id: string
  name: string
  color: string
  planet: string
  benefits: string[]
  image: string
  price?: number
  availability?: 'In Stock' | 'Limited' | 'Out of Stock'
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
  timestamp?: Date
}

export interface Consultation {
  id: string
  type: 'birth-chart' | 'horoscope' | 'numerology' | 'gemologist' | 'vastu' | 'prasanam'
  clientName: string
  clientEmail: string
  date: Date
  duration: number // in minutes
  notes?: string
  completed: boolean
}

export interface AstrologyReading {
  type: string
  date: Date
  planetaryPositions?: Record<string, string>
  houses?: Record<string, string>
  predictions?: string[]
  recommendations?: string[]
}
