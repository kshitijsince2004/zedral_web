# cPanel Deployment Guide

## Prerequisites

Before deploying to cPanel, ensure you have:
- cPanel hosting account with File Manager access
- FTP credentials (optional, but recommended)
- Your domain configured in cPanel
- Node.js installed locally to build the project

## Step-by-Step Deployment Process

### Step 1: Pre-Deployment Configuration

1. **Update Domain URLs** (Critical!)
   
   Replace `https://zedral.com/` with your actual domain in these files:
   
   - `public/sitemap.xml` - Update all `<loc>` tags
   - `public/robots.txt` - Update Sitemap URL
   - `src/components/SEO.tsx` - Update default url prop
   - `index.html` - Update og:url, twitter:url, canonical tags

2. **Set Environment Variables**
   
   Create `.env.production` file in the root directory:
   ```env
   VITE_SITE_URL=https://yourdomain.com
   VITE_GA_MEASUREMENT_ID=G-4ZXR36HYGL
   ```

### Step 2: Build Your Application

1. **Install Dependencies** (if not already done)
   ```bash
   npm install
   ```

2. **Create Production Build**
   ```bash
   npm run build
   ```
   
   This creates a `dist/` folder with all your production files.

3. **Verify Build**
   ```bash
   npm run preview
   ```
   
   Test locally at http://localhost:4173 to ensure everything works.

### Step 3: Upload to cPanel

#### Option A: Using File Manager (Easiest)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel URL
   - Enter your credentials

2. **Navigate to File Manager**
   - Find "File Manager" in cPanel dashboard
   - Click to open

3. **Go to Public Directory**
   - Navigate to `public_html/` (or your domain's root folder)
   - If deploying to subdomain, go to that folder

4. **Clear Existing Files** (if any)
   - Select all files in the directory
   - Click "Delete"
   - Confirm deletion

5. **Upload Build Files**
   - Click "Upload" button
   - Select all files from your local `dist/` folder
   - Upload them to `public_html/`
   
   **Important:** Upload the CONTENTS of the `dist/` folder, not the folder itself!
   
   Your structure should look like:
   ```
   public_html/
   ├── index.html
   ├── assets/
   ├── .htaccess
   ├── favicon.ico
   ├── og-image.png
   └── ... (other files)
   ```

6. **Verify .htaccess File**
   
   Make sure `.htaccess` is uploaded. If not visible, enable "Show Hidden Files" in File Manager settings.

#### Option B: Using FTP (Recommended for Large Files)

1. **Get FTP Credentials**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Connect Using FTP Client**
   
   Use FileZilla, WinSCP, or any FTP client:
   - Host: ftp.yourdomain.com (or provided hostname)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Upload Files**
   - Navigate to `public_html/` on remote server
   - Select all files from your local `dist/` folder
   - Drag and drop to upload
   - Wait for upload to complete

### Step 4: Configure .htaccess for React Router

Your project already has an `.htaccess` file. Verify it contains:

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

This ensures React Router works correctly with direct URL access.

### Step 5: Configure SSL (HTTPS)

1. **In cPanel, go to "SSL/TLS Status"**
2. **Enable AutoSSL** (if available)
   - Most cPanel hosts offer free Let's Encrypt SSL
   - Click "Run AutoSSL"
   
3. **Or Install SSL Certificate Manually**
   - Go to "SSL/TLS" section
   - Install certificate for your domain

4. **Force HTTPS** (Add to .htaccess if needed)
   ```apache
   # Force HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### Step 6: Verify Deployment

1. **Visit Your Website**
   - Go to https://yourdomain.com
   - Check all pages load correctly
   - Test navigation between pages

2. **Test Routes**
   - Visit direct URLs like `/contact`, `/careers`
   - Ensure they load without 404 errors

3. **Check Console**
   - Open browser DevTools (F12)
   - Look for any errors in Console tab
   - Verify all assets load correctly

4. **Test Forms**
   - Try contact form submission
   - Test email signup in hero section

## Post-Deployment Checklist

### Immediate Tasks

- [ ] Visit your live site and test all pages
- [ ] Check Google Analytics Realtime
- [ ] Test all forms and interactive elements
- [ ] Verify images load correctly
- [ ] Test on mobile devices

### SEO & Social Media

- [ ] Test social sharing previews:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/

- [ ] Submit to Google Search Console:
  - Add property at https://search.google.com/search-console
  - Verify ownership
  - Submit sitemap: https://yourdomain.com/sitemap.xml

- [ ] Submit to Bing Webmaster Tools:
  - Add site at https://www.bing.com/webmasters
  - Verify ownership
  - Submit sitemap

### Performance

- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Verify Core Web Vitals
- [ ] Test page load speed

## Updating Your Site

When you need to update your website:

1. **Make Changes Locally**
   - Edit your code
   - Test locally with `npm run dev`

2. **Rebuild**
   ```bash
   npm run build
   ```

3. **Upload New Files**
   - Use File Manager or FTP
   - Upload only changed files (or all files from `dist/`)
   - Overwrite existing files

4. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or clear cache in browser settings

## Troubleshooting

### Issue: 404 Errors on Page Refresh

**Solution:** Verify `.htaccess` file is uploaded and contains the rewrite rules above.

### Issue: Images Not Loading

**Solution:** 
- Check file paths are correct
- Ensure images are in the `assets/` folder
- Verify file permissions (should be 644 for files, 755 for folders)

### Issue: Blank White Page

**Solution:**
- Check browser console for errors
- Verify all files uploaded correctly
- Check if `index.html` is in the root of `public_html/`

### Issue: CSS Not Loading

**Solution:**
- Clear browser cache
- Check if `assets/` folder uploaded correctly
- Verify file permissions

### Issue: Routes Don't Work

**Solution:**
- Ensure `.htaccess` is present and configured
- Check if mod_rewrite is enabled (contact hosting support)
- Verify RewriteBase matches your directory structure

### Issue: SSL Certificate Errors

**Solution:**
- Wait 24 hours for SSL to propagate
- Contact hosting support to enable SSL
- Verify domain DNS is pointing correctly

## File Permissions

Set correct permissions in cPanel File Manager:

- **Folders:** 755 (drwxr-xr-x)
- **Files:** 644 (-rw-r--r--)
- **.htaccess:** 644 (-rw-r--r--)

To change permissions:
1. Right-click file/folder
2. Select "Change Permissions"
3. Set appropriate values

## Performance Optimization

### Enable Gzip Compression

Add to `.htaccess`:

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Enable Browser Caching

Add to `.htaccess`:

```apache
# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

## Security Headers

Add to `.htaccess` for better security:

```apache
# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## Backup Strategy

1. **Before Each Update:**
   - Download current `public_html/` folder
   - Keep local backup of previous build

2. **Regular Backups:**
   - Use cPanel's backup feature
   - Schedule automatic backups if available

## Support Resources

- **cPanel Documentation:** https://docs.cpanel.net/
- **Your Hosting Provider's Support:** Contact for server-specific issues
- **React Router Docs:** https://reactrouter.com/

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## Deployment Checklist Summary

1. ✅ Update all domain URLs in code
2. ✅ Create `.env.production` file
3. ✅ Run `npm run build`
4. ✅ Upload `dist/` contents to `public_html/`
5. ✅ Verify `.htaccess` is uploaded
6. ✅ Enable SSL certificate
7. ✅ Test website thoroughly
8. ✅ Submit sitemap to search engines
9. ✅ Monitor analytics and performance

---

**Your website is ready for cPanel deployment!** Follow the steps above carefully, and you'll have your site live in no time.

For any issues, check the Troubleshooting section or contact your hosting provider's support team.
