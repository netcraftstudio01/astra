# Karthik Astrology Website

A professional astrology website built with Next.js, React, TypeScript, and Tailwind CSS. Features comprehensive astrology services including birth charts, horoscopes, numerology, gemstone consultation, and Vastu guidance.

## Features

- **Professional Services**
  - Birth Chart Reading & Natal Chart Analysis
  - Horoscope Consultation (Daily, Monthly, Yearly)
  - Number Prasanam (Spiritual Divination)
  - Numerology Consultation
  - Gemologist Services
  - Vastu Consultation

- **Gemstone Directory**
  - 9 Major Gemstones with planetary associations
  - Benefits and properties of each gemstone
  - Sourcing and authentication information

- **Modern Design**
  - Dark theme with gold accents
  - Fully responsive (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Glass-morphism effects
  - Gradient text effects

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "d:\Netcraft Studio\Karthik Astrology"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with header and footer
│   ├── page.tsx          # Main home page with all sections
│   └── globals.css       # Global styles and Tailwind CSS
├── components/
│   ├── Header.tsx        # Navigation header with mobile menu
│   ├── Footer.tsx        # Footer with links and contact info
│   ├── ServiceCard.tsx   # Reusable service card component
│   └── GemstoneCard.tsx  # Reusable gemstone card component
```

## Sections

1. **Hero Section** - Welcome message with call-to-action buttons
2. **Services Section** - 6 main services with detailed information
3. **Gemstones Section** - 9 precious gemstones with benefits
4. **About Section** - Business information and credentials
5. **Contact Section** - Contact form and information

## Customization

### Update Contact Information
Edit the footer and contact section in `src/app/page.tsx`:
- Email
- Phone number
- Location

### Customize Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  'gold': '#D4AF37',      // Primary accent
  'deep-purple': '#2D1B4E', // Secondary background
  'midnight': '#0F0A1E',    // Primary background
  'sage': '#9B8C7C',       // Tertiary accent
}
```

### Add More Gemstones
Add more `<GemstoneCard />` components in the Gemstones section of `src/app/page.tsx`

### Add More Services
Add more `<ServiceCard />` components in the Services section

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library

## Services Included

### 1. Birth Chart Reading (Natal Chart)
Comprehensive analysis of your birth chart including planetary positions, house placements, and life insights.

### 2. Horoscope Consultation
Daily, monthly, and yearly predictions with lucky timings and compatibility readings.

### 3. Number Prasanam
Divine numerical divination for quick spiritual guidance on specific questions.

### 4. Numerology
Life path analysis using the power of numbers for destiny understanding.

### 5. Gemologist Consultation
Expert guidance on selecting authentic gemstones based on astrological needs.

### 6. Vastu Consultation
Ancient spatial harmony principles for homes and workplaces.

## Gemstones Available

- Ruby (Sun)
- Pearl (Moon)
- Emerald (Mercury)
- Yellow Sapphire (Jupiter)
- Blue Sapphire (Saturn)
- Red Coral (Mars)
- Diamond (Venus)
- Hessonite (Rahu)
- Cat's Eye (Ketu)

## License

All rights reserved © 2024 Karthik Astrology

## Contact

- Email: info@karthikastrology.com
- Phone: +91 (000) 000-0000

---

**Note:** Remember to update contact information, images, and specific details before deploying to production.
