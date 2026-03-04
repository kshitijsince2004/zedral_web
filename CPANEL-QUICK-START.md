# cPanel Deployment - Quick Start Guide

## 🚀 Deploy in 5 Steps

### 1️⃣ Update Your Domain (5 minutes)

Replace `https://zedral.com/` with your actual domain in:
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/SEO.tsx`
- `index.html`

### 2️⃣ Build Your Site (2 minutes)

```bash
npm install
npm run build
```

This creates a `dist/` folder with your production files.

### 3️⃣ Upload to cPanel (10 minutes)

**Using File Manager:**
1. Login to cPanel
2. Open File Manager
3. Go to `public_html/` folder
4. Delete existing files (if any)
5. Upload ALL files from your `dist/` folder
6. Make sure `.htaccess` is uploaded (enable "Show Hidden Files")

**Using FTP (Alternative):**
1. Connect with FTP client (FileZilla, WinSCP)
2. Navigate to `public_html/`
3. Upload all files from `dist/` folder

### 4️⃣ Enable SSL (5 minutes)

1. In cPanel, go to "SSL/TLS Status"
2. Click "Run AutoSSL" (free Let's Encrypt)
3. Wait for certificate to install
4. After SSL is active, edit `.htaccess` and uncomment these lines:
   ```apache
   # RewriteCond %{HTTPS} off
   # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
   Remove the `#` to enable HTTPS redirect.

### 5️⃣ Test Your Site (5 minutes)

- Visit https://yourdomain.com
- Test all pages and navigation
- Check contact form
- Open browser console (F12) - no errors should appear

## ✅ That's It!

Your website is now live on cPanel.

## 📋 Post-Deployment (Optional)

- Submit sitemap to Google Search Console
- Test social media sharing
- Run Lighthouse audit for performance
- Monitor Google Analytics

## 🔄 Updating Your Site

When you make changes:

```bash
npm run build
```

Then upload new files from `dist/` to `public_html/` (overwrite existing).

## 🆘 Common Issues

**404 on page refresh?**
→ Make sure `.htaccess` is uploaded

**Images not loading?**
→ Check if `assets/` folder uploaded correctly

**Blank page?**
→ Check browser console for errors, verify all files uploaded

**SSL errors?**
→ Wait 24 hours for SSL to propagate, or contact hosting support

## 📚 Need More Details?

See `CPANEL-DEPLOYMENT.md` for complete documentation.

---

**Happy Deploying! 🎉**
