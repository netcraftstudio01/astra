# Deployment Guide for Karthik Astrology Website

This guide covers deployment options for your Next.js astrology website.

## Quick Start (Development)

```bash
cd "d:\Netcraft Studio\Karthik Astrology"
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Deployment Options

### 1. **Vercel (Recommended)**

Vercel is the official Next.js hosting platform and offers seamless deployment.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables
5. Deploy with one click

Benefits:
- Zero configuration needed for Next.js
- Automatic deployments on push
- Built-in analytics
- Free tier available

### 2. **Netlify**

Deploy on Netlify with a static export:

```bash
npm run build
```

Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. **Docker (Self-Hosted)**

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t karthik-astrology .
docker run -p 3000:3000 karthik-astrology
```

### 4. **Traditional VPS/Dedicated Server**

Requirements:
- Node.js 16+
- npm or yarn
- Nginx/Apache as reverse proxy
- SSL certificate (Let's Encrypt)

Steps:
1. SSH into server
2. Clone repository
3. Install Node.js
4. Run `npm install`
5. Set up environment variables
6. Build with `npm run build`
7. Use PM2 for process management

```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start npm -- start

# Monitor
pm2 monitor
```

## Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_CONTACT_PHONE=your_phone
NEXT_PUBLIC_CONTACT_ADDRESS=your_address

# Optional: Email service configuration
SENDGRID_API_KEY=your_sendgrid_key
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_USER_ID=your_emailjs_user_id
```

## Performance Optimization

### Image Optimization
Replace emoji with optimized images in future versions:

```tsx
import Image from 'next/image'

<Image
  src="/images/gemstone.jpg"
  alt="Ruby Gemstone"
  width={400}
  height={300}
/>
```

### SEO Enhancements

Already included:
- Metadata in layout
- robots.ts for SEO
- sitemap.ts for search engines

Consider adding:
- Schema.org structured data
- Open Graph meta tags
- Twitter Card meta tags

### Caching Strategy

Add cache headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 'no-store' },
      ],
    },
    {
      source: '/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600' },
      ],
    },
  ]
}
```

## Monitoring & Analytics

### Vercel Analytics (Built-in)
- Automatically tracks Core Web Vitals
- Performance metrics
- Deployment analytics

### Google Analytics
Add to your `layout.tsx`:

```tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</script>
```

## SSL Certificate

### For Vercel/Netlify
- Automatic HTTPS
- No additional configuration needed

### For Self-Hosted (Let's Encrypt)
```bash
sudo certbot certonly --standalone -d karthikastrology.com
```

## Domain Setup

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Point nameservers to your hosting provider:
   - Vercel: Use provided nameservers
   - Others: Update DNS records to point to server IP
3. Add SSL certificate
4. Configure email records (MX records)

## Backup & Recovery

- Enable automatic backups on your hosting provider
- Backup database regularly
- Keep git repository updated
- Test recovery procedures periodically

## Security Checklist

- [ ] Environment variables are secure (not in git)
- [ ] API routes are protected/authenticated
- [ ] Database queries use parameterized statements
- [ ] HTTPS is enabled
- [ ] CORS is properly configured
- [ ] Rate limiting implemented
- [ ] Contact form has anti-spam protection
- [ ] Regular security audits

## Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Memory Issues
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Node.js Docs: https://nodejs.org/docs
