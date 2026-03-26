# Zedral - Operational Efficiency Intelligence

Advanced operational intelligence platform for manufacturing and industrial environments.

> [!TIP]
> **New to Zedral?** Read our [About Zedral](ABOUT_ZEDRAL.md) overview for a full explanation of the platform, vision, and core features.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit: http://localhost:8080/

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Deployment

### Quick Deploy

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

See `DEPLOYMENT.md` for detailed instructions.

## ⚙️ Configuration

### Before Deploying

1. **Update Domain URLs** - Replace `https://zedral.com/` in:
   - `public/sitemap.xml`
   - `public/robots.txt`
   - `src/components/SEO.tsx`
   - `index.html`

2. **Create OG Image** - Add 1200x630px image at `public/og-image.png`

3. **Compress Images** - Especially `hero-illustration.png` (1.28 MB)

### Environment Variables

Copy `.env.example` to `.env.local` and update:
```env
VITE_SITE_URL=https://yourdomain.com
VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
```

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router 6
- **Analytics:** Google Analytics 4
- **SEO:** React Helmet Async
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion

## 📊 Features

- ✅ SEO optimized (sitemap, meta tags, structured data)
- ✅ Google Analytics 4 integrated
- ✅ Responsive design
- ✅ Performance optimized (lazy loading, code splitting)
- ✅ Accessibility compliant
- ✅ Type-safe with TypeScript
- ✅ Production ready

## 📁 Project Structure

```
zedral_web/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   ├── robots.txt           # Search engine rules
│   └── og-image.png         # Social media preview
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── SEO.tsx         # SEO component
│   ├── pages/              # Page components
│   ├── utils/
│   │   └── analytics.ts    # GA4 utilities
│   ├── hooks/              # Custom hooks
│   └── lib/                # Utilities
├── index.html              # Entry HTML
├── vite.config.ts          # Vite configuration
├── vercel.json             # Vercel config
├── netlify.toml            # Netlify config
└── DEPLOYMENT.md           # Deployment guide
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📈 Post-Deployment

1. **Submit Sitemap**
   - Google Search Console: https://search.google.com/search-console
   - Submit: https://yourdomain.com/sitemap.xml

2. **Verify Analytics**
   - Check GA4 Realtime: https://analytics.google.com/

3. **Test Social Sharing**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

4. **Performance Check**
   - PageSpeed: https://pagespeed.web.dev/
   - Lighthouse: Chrome DevTools

## 🐛 Troubleshooting

**Build fails?**
- Check Node.js version (18+)
- Clear cache: `rm -rf node_modules && npm install`

**Routes don't work?**
- Ensure SPA routing is configured (vercel.json/netlify.toml)

**Analytics not tracking?**
- Wait 24-48 hours for data
- Check Measurement ID is correct
- Test in Realtime view

## 📝 License

Private - All rights reserved

## 🤝 Support

For issues or questions, contact the development team.

---

**Ready to deploy!** Follow `DEPLOYMENT.md` for step-by-step instructions.
