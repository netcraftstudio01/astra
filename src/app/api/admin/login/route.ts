import { NextResponse } from 'next/server'
import { ADMIN_PASSWORD, getAdminCookie } from '@/lib/adminAuth'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set(getAdminCookie())
  return response
}