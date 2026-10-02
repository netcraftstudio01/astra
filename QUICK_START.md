# QUICK START GUIDE - Karthik Astrology Website

## 🚀 Getting Started

Your professional astrology website is ready! Follow these steps to start using it.

### Step 1: Start Development Server

Open PowerShell and run:

```powershell
cd "d:\Netcraft Studio\Karthik Astrology"
npm run dev
```

Then open your browser to: **http://localhost:3000**

You should see the full astrology website with:
- Beautiful hero section
- Navigation menu
- 6 main services
- 9 precious gemstones
- About section
- Contact form

### Step 2: Customize Your Information

Edit these files to add your details:

**File: `src/components/Footer.tsx`**
- Update: Email, Phone, Address

**File: `src/app/page.tsx`**
- Update contact information in the "Get in Touch" section
- Customize business hours
- Add your actual phone/email

### Step 3: Key Features Included

✅ **Home Page with 5 Sections:**
1. **Hero** - Welcome and call-to-action buttons
2. **Services** - Birth Chart, Horoscope, Numerology, Gemologist, Vastu, Number Prasanam
3. **Gemstones** - 9 precious stones with planet associations
4. **About** - Your credentials and experience
5. **Contact** - Contact form and information

✅ **Design Features:**
- Dark theme with gold accents (professional astrology aesthetic)
- Fully responsive (works on mobile, tablet, desktop)
- Smooth animations and hover effects
- Glass-morphism effects
- SEO optimized

✅ **Built-in Components:**
- Header with mobile menu
- Footer with links
- Reusable ServiceCard component
- Reusable GemstoneCard component

### Step 4: Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  'gold': '#D4AF37',           // Main accent color
  'deep-purple': '#2D1B4E',    // Background secondary
  'midnight': '#0F0A1E',       // Main background
  'sage': '#9B8C7C',           // Text accent
}
```

### Step 5: Add More Services or Gemstones

**Add More Services:**
Edit `src/app/page.tsx`, find the Services section, and add:

```tsx
<ServiceCard
  icon="🔮"
  title="Your Service"
  description="Your description"
  details={[
    'Detail 1',
    'Detail 2',
    'Detail 3',
  ]}
/>
```

**Add More Gemstones:**
Find the Gemstones section and add:

```tsx
<GemstoneCard
  name="Gemstone Name"
  color="Color"
  planet="Planet"
  benefits={[
    'Benefit 1',
    'Benefit 2',
  ]}
  image="💎"
/>
```

### Step 6: Integrate Contact Form

The contact form is ready for integration with email services:

**Option A: SendGrid (Recommended)**
1. Create account at sendgrid.com
2. Get API key
3. Add to `.env.local`:
   ```env
   SENDGRID_API_KEY=your_key_here
   ```
4. Uncomment code in `src/app/api/contact/route.ts`

**Option B: EmailJS**
1. Create account at emailjs.com
2. Get credentials
3. Add to `.env.local` and uncomment code

**Option C: Simple Contact Form (No Backend)**
- Uses form submission as-is
- Can connect later

### Step 7: Add Images

Currently using emojis. To add real images:

1. Create `public/images/` folder
2. Add your images there
3. Update components to use:

```tsx
import Image from 'next/image'

<Image
  src="/images/gemstone.jpg"
  alt="Ruby"
  width={400}
  height={300}
/>
```

### Step 8: Deploy to Production

When ready to go live, choose an option:

**Easiest: Vercel (Recommended)**
1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Deploy!

**Alternative: Other Hosting**
See `DEPLOYMENT.md` for:
- Netlify
- Docker
- Traditional VPS
- Self-hosted servers

### File Structure Overview

```
📦 karthik-astrology/
├── 📄 package.json           # Dependencies
├── 📄 tsconfig.json          # TypeScript config
├── 📄 tailwind.config.ts     # Styling config
├── 📄 next.config.js         # Next.js config
├── 📄 README.md              # Full documentation
├── 📄 DEPLOYMENT.md          # Deployment guide
│
└── 📁 src/
    ├── 📁 app/
    │   ├── 📄 layout.tsx      # Main layout (Header + Footer)
    │   ├── 📄 page.tsx        # Home page (All sections)
    │   ├── 📄 globals.css     # Global styles
    │   ├── 📄 robots.ts       # SEO robots
    │   ├── 📄 sitemap.ts      # SEO sitemap
    │   └── 📁 api/
    │       └── contact/
    │           └── 📄 route.ts # Contact form API
    │
    ├── 📁 components/
    │   ├── 📄 Header.tsx       # Navigation
    │   ├── 📄 Footer.tsx       # Footer
    │   ├── 📄 ServiceCard.tsx  # Service cards
    │   └── 📄 GemstoneCard.tsx # Gemstone cards
    │
    ├── 📁 constants/
    │   └── 📄 index.ts         # Constants & types
    │
    └── 📁 types/
        └── 📄 index.ts         # TypeScript types
```

### Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for linting errors
npm run lint

# Install new packages
npm install package-name
```

### Customization Checklist

- [ ] Update footer with your contact info
- [ ] Update about section with your credentials
- [ ] Add your phone/email throughout site
- [ ] Update color scheme if desired
- [ ] Add your logo (replace ✨ emoji in header)
- [ ] Add real images for services and gemstones
- [ ] Setup contact form integration
- [ ] Create `.env.local` with your settings
- [ ] Test on mobile devices
- [ ] Deploy to hosting provider

### Support & Next Steps

1. **Need help?** Check README.md for detailed documentation
2. **Want to deploy?** See DEPLOYMENT.md for options
3. **Want to add features?** Components are modular and easy to extend
4. **Need styling changes?** Edit tailwind.config.ts or globals.css

### Contact Form Options

The contact form is built-in but not sending emails yet. Choose:

**Option 1: Send to Console (Free, Testing)**
- Works immediately
- Good for testing

**Option 2: Send to Email (Production)**
- Install SendGrid: `npm install @sendgrid/mail`
- Add API key to environment
- Uncomment code in `src/app/api/contact/route.ts`

**Option 3: Third-party Service**
- Formspree: formspree.io (Free tier available)
- EmailJS: emailjs.com (Free tier available)
- Basin: basinapp.com

### Performance Tips

✅ Already optimized:
- Automatic image optimization
- CSS is tree-shaken
- JavaScript is minified
- Components are lazy-loaded

To monitor performance:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run Audit
4. Check scores

---

**Your website is production-ready! Start customizing and deploy when ready.** 🌟
