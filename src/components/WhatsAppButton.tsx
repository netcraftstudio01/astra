import { WHATSAPP_BASE_URL } from '@/lib/siteConfig'

const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hello Shree Karthik Science of Astrology')}`

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="whatsapp-float"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M16 3.2a12.7 12.7 0 0 0-10.9 19L3.4 29l6.9-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.4c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1 1.1-4-.3-.4A10.7 10.7 0 1 1 16 26.6Zm5.9-8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" />
      </svg>
    </a>
  )
}
