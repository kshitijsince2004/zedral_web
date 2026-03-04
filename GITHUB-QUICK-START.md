# GitHub Deployment - Quick Start

## 🚀 Deploy in 3 Steps (5 minutes)

### Step 1: Push to GitHub (2 min)

```bash
cd zedral_web

# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (2 min)

1. Go to https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Import Project"
4. Select your repository
5. Click "Deploy" (Vercel auto-detects Vite settings)
6. Wait 2 minutes ⏱️
7. Done! 🎉

### Step 3: Configure (1 min)

In Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add:
   - `VITE_SITE_URL`: Your Vercel URL (or custom domain)
   - `VITE_GA_MEASUREMENT_ID`: `G-4ZXR36HYGL`
3. Redeploy

## ✅ That's It!

Your site is live and auto-deploys on every push to GitHub.


## 🔄 Alternative: Netlify

Same process, just use https://netlify.com instead of Vercel.

## 📝 Before Deploying

Update domain URLs in these files:
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/SEO.tsx`
- `index.html`

## 🆘 Need Help?

See `GITHUB-DEPLOYMENT.md` for detailed instructions.

---

**Recommended: Vercel** (easiest for React + Vite)

Every push to `main` = automatic deployment! 🚀
