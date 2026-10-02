import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const ADMIN_PASSWORD = 'Karthik Astrology'
const SESSION_COOKIE = 'karthik_admin_session'

function sessionToken() {
  return createHmac('sha256', ADMIN_PASSWORD).update('monthly-prediction-admin').digest('hex')
}

export function isAdminAuthenticated() {
  const provided = cookies().get(SESSION_COOKIE)?.value
  const expected = sessionToken()

  if (!provided || provided.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(provided), Buffer.from(expected))
}

export function getAdminCookie() {
  return {
    name: SESSION_COOKIE,
    value: sessionToken(),
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  }
}