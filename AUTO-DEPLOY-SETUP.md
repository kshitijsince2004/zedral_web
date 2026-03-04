# Auto-Deploy Setup - Quick Guide

Set up automatic deployment from GitHub to cPanel in 5 minutes.

## 🚀 Quick Setup (5 Steps)

### Step 1: Get FTP Credentials (1 min)

1. Login to cPanel
2. Go to "FTP Accounts"
3. Note down:
   - FTP Server: `ftp.yourdomain.com`
   - Username: `your-username`
   - Password: `your-password`

### Step 2: Add Secrets to GitHub (2 min)

1. Go to your GitHub repository
2. Click: Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add these 5 secrets:

   | Name | Value |
   |------|-------|
   | `FTP_SERVER` | `ftp.yourdomain.com` |
   | `FTP_USERNAME` | Your FTP username |
   | `FTP_PASSWORD` | Your FTP password |
   | `VITE_SITE_URL` | `https://yourdomain.com` |
   | `VITE_GA_MEASUREMENT_ID` | `G-4ZXR36HYGL` |

### Step 3: Push Workflow to GitHub (1 min)

The workflow file is already created at `.github/workflows/deploy-cpanel.yml`

```bash
cd zedral_web
git add .github/workflows/deploy-cpanel.yml
git commit -m "Add auto-deployment workflow"
git push
```

### Step 4: Watch It Deploy (1 min)

1. Go to GitHub repository
2. Click "Actions" tab
3. See "Deploy to cPanel" running
4. Wait 2-3 minutes

### Step 5: Verify (30 sec)

Visit your website - it should be live!

## ✅ Done!

Now every push to `main` branch automatically deploys to cPanel.

## 🔄 How to Use

```bash
# Make changes
git add .
git commit -m "Update homepage"
git push

# Automatically deploys! 🎉
```

## 🆘 Troubleshooting

**Build fails?**
- Check GitHub Actions logs
- Verify secrets are correct

**FTP connection fails?**
- Test FTP credentials with FileZilla
- Check server path is `/public_html/`

**Files not updating?**
- Clear browser cache
- Check FTP user has write permissions

## 📚 Need More Details?

See `GITHUB-TO-CPANEL-AUTO-DEPLOY.md` for complete documentation.

---

**Happy Auto-Deploying! 🚀**
