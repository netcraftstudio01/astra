export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919655375550'

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppLink(productName: string) {
  const text = `Hello, I would like to get more information about the ${productName}. Please share the details, price, availability, and other information.`
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`
}
