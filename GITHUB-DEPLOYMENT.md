# GitHub Deployment Guide

Deploy your website directly from GitHub using one of these methods:

## 🚀 Quick Comparison

| Platform | Best For | Setup Time | Custom Domain | SSL |
|----------|----------|------------|---------------|-----|
| **Vercel** | React/Vite apps | 2 min | ✅ Free | ✅ Auto |
| **Netlify** | Static sites | 2 min | ✅ Free | ✅ Auto |
| **GitHub Pages** | Simple projects | 5 min | ✅ Free | ✅ Auto |

**Recommended: Vercel** (easiest for React + Vite)

---

## Method 1: Vercel (Recommended) ⭐

### Why Vercel?
- Zero configuration for Vite projects
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- Preview deployments for pull requests

### Step-by-Step Setup

#### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
cd zedral_web
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel Website (Easiest)**

1. Go to https://vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Import Project"
5. Select your repository
6. Vercel auto-detects Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Add Environment Variables:
   - `VITE_SITE_URL`: `https://your-domain.vercel.app` (update after deployment)
   - `VITE_GA_MEASUREMENT_ID`: `G-4ZXR36HYGL`
8. Click "Deploy"
9. Wait 2-3 minutes ⏱️
10. Your site is live! 🎉

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name? (press enter)
# - Directory? ./ (press enter)
# - Override settings? No

# Deploy to production
vercel --prod
```

#### 3. Add Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed:
   - **A Record**: Point to Vercel's IP
   - **CNAME**: Point to `cname.vercel-dns.com`
5. Wait for DNS propagation (5-30 minutes)

#### 4. Configure Environment Variables

1. Go to Project Settings → Environment Variables
2. Add:
   ```
   VITE_SITE_URL=https://yourdomain.com
   VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
   ```
3. Redeploy to apply changes

#### 5. Automatic Deployments

✅ Already configured! Every push to `main` branch auto-deploys.

**Preview Deployments:**
- Every pull request gets a unique preview URL
- Test changes before merging

---

## Method 2: Netlify

### Step-by-Step Setup

#### 1. Push Code to GitHub (same as above)

#### 2. Deploy to Netlify

**Option A: Using Netlify Website**

1. Go to https://netlify.com
2. Click "Sign Up" → "GitHub"
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub" and authorize
5. Select your repository
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Wait 2-3 minutes
9. Your site is live!

**Option B: Using Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

#### 3. Add Custom Domain

1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records:
   - **CNAME**: Point to your Netlify subdomain
5. SSL auto-configures

#### 4. Environment Variables

1. Go to Site Settings → Environment Variables
2. Add:
   ```
   VITE_SITE_URL=https://yourdomain.com
   VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
   ```
3. Trigger redeploy

---

## Method 3: GitHub Pages

### Step-by-Step Setup

#### 1. Install gh-pages Package

```bash
cd zedral_web
npm install --save-dev gh-pages
```

#### 2. Update package.json

Add these scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Add homepage field (replace with your username/repo):

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

#### 3. Update vite.config.ts

Add base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})
```

#### 4. Deploy

```bash
# Push to GitHub first
git add .
git commit -m "Configure for GitHub Pages"
git push

# Deploy
npm run deploy
```

#### 5. Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" → "Pages"
3. Source: Select `gh-pages` branch
4. Click "Save"
5. Wait 2-3 minutes
6. Visit: `https://yourusername.github.io/your-repo-name`

#### 6. Custom Domain (Optional)

1. In GitHub Pages settings, add custom domain
2. Create `CNAME` file in `public/` folder:
   ```
   yourdomain.com
   ```
3. Update DNS:
   - **A Records** (point to GitHub IPs):
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME** (www): `yourusername.github.io`
4. Redeploy: `npm run deploy`

---

## 🔄 Automatic Deployments with GitHub Actions

### For Vercel/Netlify
Already automatic! Push to GitHub = auto-deploy.

### For GitHub Pages

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      env:
        VITE_SITE_URL: https://yourdomain.com
        VITE_GA_MEASUREMENT_ID: G-4ZXR36HYGL
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Now every push to `main` auto-deploys!

---

## 📋 Pre-Deployment Checklist

Before deploying, update these files:

### 1. Update Domain URLs

Replace `https://zedral.com/` with your actual domain:

- [ ] `public/sitemap.xml`
- [ ] `public/robots.txt`
- [ ] `src/components/SEO.tsx`
- [ ] `index.html`

### 2. Environment Variables

Create `.env.production`:

```env
VITE_SITE_URL=https://yourdomain.com
VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
```

### 3. Optimize Images (Optional)

- [ ] Compress `hero-illustration.png` (currently 1.28 MB)
- [ ] Create proper OG image (1200x630px)

---

## 🎯 Recommended Workflow

### Initial Setup
1. Push code to GitHub
2. Deploy to Vercel (easiest)
3. Add custom domain
4. Configure environment variables

### Daily Development
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys
5. Check preview URL

### Production Updates
1. Merge to `main` branch
2. Auto-deploys to production
3. Monitor analytics

---

## 🔧 Configuration Files

Your project already has:

✅ `vercel.json` - Vercel configuration
✅ `netlify.toml` - Netlify configuration
✅ `.htaccess` - For traditional hosting

No additional configuration needed!

---

## 🆘 Troubleshooting

### Build Fails on Vercel/Netlify

**Check:**
- Node.js version (should be 18+)
- All dependencies in `package.json`
- No TypeScript errors: `npm run lint`

**Solution:**
```bash
# Test build locally
npm run build

# If it works locally, check platform logs
```

### Routes Don't Work (404 on refresh)

**Vercel/Netlify:** Already configured in `vercel.json` and `netlify.toml`

**GitHub Pages:** Ensure `base` is set in `vite.config.ts`

### Environment Variables Not Working

**Solution:**
1. Add variables in platform dashboard
2. Trigger manual redeploy
3. Check variable names start with `VITE_`

### Custom Domain Not Working

**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS records with: https://dnschecker.org/
3. Verify SSL certificate is active

---

## 📊 Post-Deployment

### Immediate Tasks

- [ ] Visit your live site
- [ ] Test all pages and navigation
- [ ] Check Google Analytics Realtime
- [ ] Test forms and interactive elements
- [ ] Verify on mobile devices

### SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test social sharing:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/

### Performance

- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Monitor Core Web Vitals

---

## 🎉 Quick Start Commands

### Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Netlify Dashboard:** https://app.netlify.com/
- **GitHub Pages Docs:** https://pages.github.com/
- **Google Search Console:** https://search.google.com/search-console
- **PageSpeed Insights:** https://pagespeed.web.dev/

---

## 💡 Pro Tips

1. **Use Vercel for React apps** - Best performance and DX
2. **Enable preview deployments** - Test before production
3. **Set up branch deployments** - Staging environment
4. **Monitor analytics** - Track deployment impact
5. **Use environment variables** - Never commit secrets

---

**Your website is ready to deploy from GitHub!** 

Choose your platform and follow the steps above. Vercel is recommended for the easiest setup with React + Vite.

Need help? Check the troubleshooting section or platform documentation.
