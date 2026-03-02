# Deployment Guide

## Pre-Deployment Checklist

### Required Updates
- [ ] Update domain URL in `public/sitemap.xml`
- [ ] Update domain URL in `public/robots.txt`
- [ ] Update domain URL in `src/components/SEO.tsx` (default props)
- [ ] Create and add proper OG image at `public/og-image.png` (1200x630px)
- [ ] Update `VITE_SITE_URL` in environment variables

### Optional Updates
- [ ] Compress images (especially hero-illustration.png - 1.28 MB)
- [ ] Convert images to WebP format
- [ ] Update favicon.ico with your logo

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables** (in Vercel Dashboard)
   - `VITE_SITE_URL`: Your production domain
   - `VITE_GA_MEASUREMENT_ID`: G-4ZXR36HYGL

4. **Custom Domain**
   - Go to Vercel Dashboard > Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

3. **Set Environment Variables** (in Netlify Dashboard)
   - Go to Site settings > Environment variables
   - Add `VITE_SITE_URL` and `VITE_GA_MEASUREMENT_ID`

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload**
   - Upload contents of `dist/` folder to your web server
   - Ensure `.htaccess` or server config handles SPA routing

3. **Apache .htaccess** (if needed)
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Post-Deployment Steps

### 1. Update URLs (Critical)
Replace `https://zedral.com/` with your actual domain in:
- `public/sitemap.xml` (all `<loc>` tags)
- `public/robots.txt` (Sitemap line)
- `src/components/SEO.tsx` (default url prop)
- `index.html` (og:url, twitter:url, canonical)

### 2. Submit to Search Engines
- **Google Search Console**: https://search.google.com/search-console
  - Add property
  - Verify ownership
  - Submit sitemap: https://yourdomain.com/sitemap.xml
  
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
  - Add site
  - Verify ownership
  - Submit sitemap

### 3. Test Everything
- [ ] Visit your live site
- [ ] Test all pages load correctly
- [ ] Check Google Analytics Realtime
- [ ] Test contact form submission
- [ ] Test email signup
- [ ] Verify social sharing previews:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/

### 4. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Verify Core Web Vitals
- [ ] Test on mobile devices

### 5. Monitor
- [ ] Check Google Analytics daily (first week)
- [ ] Monitor Google Search Console for errors
- [ ] Check for broken links
- [ ] Monitor page load times

## Environment Variables

Create `.env.local` for local development:
```env
VITE_SITE_URL=http://localhost:8081
VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
```

Production environment variables (set in hosting platform):
```env
VITE_SITE_URL=https://yourdomain.com
VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
```

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Test Build
```bash
npm run build && npm run preview
```

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Routes Don't Work
- Ensure SPA routing is configured on server
- Check vercel.json or netlify.toml is present
- Verify rewrites/redirects are working

### Analytics Not Tracking
- Check Measurement ID is correct
- Wait 24-48 hours for data to appear
- Test in Realtime view
- Check browser console for errors

### Images Not Loading
- Verify images are in public/ or src/assets/
- Check file paths are correct
- Ensure images are included in build

## Security Headers

Already configured in vercel.json and netlify.toml:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## Performance Optimization

### Before First Deploy
1. Compress hero-illustration.png (1.28 MB → 200 KB)
2. Compress other large images
3. Create proper OG image (1200x630px)

### After Deploy
1. Enable CDN (Vercel/Netlify do this automatically)
2. Monitor Core Web Vitals
3. Optimize based on Lighthouse recommendations

## Support

If you encounter issues:
1. Check build logs in hosting platform
2. Test build locally: `npm run build && npm run preview`
3. Check browser console for errors
4. Verify environment variables are set

## Quick Deploy Commands

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod
```

**Build Only:**
```bash
npm run build
```

---

**Your site is ready to deploy!** Just follow the steps above for your chosen platform.
