# GitHub to cPanel Auto-Deployment

Automatically deploy your website to cPanel whenever you push to GitHub.

## 🎯 How It Works

1. You push code to GitHub
2. GitHub Actions builds your project
3. Built files automatically upload to cPanel via FTP
4. Your website updates instantly

## 📋 Prerequisites

- GitHub repository
- cPanel hosting account
- FTP credentials from cPanel

---

## Method 1: GitHub Actions + FTP (Recommended)

### Step 1: Get FTP Credentials from cPanel

1. Login to cPanel
2. Go to "FTP Accounts"
3. Note down or create FTP account:
   - **FTP Server:** ftp.yourdomain.com
   - **Username:** your-ftp-username
   - **Password:** your-ftp-password
   - **Port:** 21

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add these secrets:

   - **Name:** `FTP_SERVER`
     **Value:** `ftp.yourdomain.com`

   - **Name:** `FTP_USERNAME`
     **Value:** Your FTP username

   - **Name:** `FTP_PASSWORD`
     **Value:** Your FTP password

   - **Name:** `VITE_SITE_URL`
     **Value:** `https://yourdomain.com`

   - **Name:** `VITE_GA_MEASUREMENT_ID`
     **Value:** `G-4ZXR36HYGL`

### Step 3: Create GitHub Actions Workflow

Create this file: `.github/workflows/deploy-cpanel.yml`

```yaml
name: Deploy to cPanel

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
      env:
        VITE_SITE_URL: ${{ secrets.VITE_SITE_URL }}
        VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
      
    - name: Deploy to cPanel via FTP
      uses: SamKirkland/FTP-Deploy-Action@4.3.3
      with:
        server: ${{ secrets.FTP_SERVER }}
        username: ${{ secrets.FTP_USERNAME }}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./dist/
        server-dir: /public_html/
        dangerous-clean-slate: false
```

### Step 4: Push Workflow to GitHub

```bash
cd zedral_web

# Create workflow directory
mkdir -p .github/workflows

# Create the workflow file (copy content above)
# Then commit and push

git add .github/workflows/deploy-cpanel.yml
git commit -m "Add auto-deployment workflow"
git push
```

### Step 5: Test Deployment

1. Go to your GitHub repository
2. Click "Actions" tab
3. You should see "Deploy to cPanel" workflow running
4. Wait for it to complete (2-5 minutes)
5. Check your website - it should be updated!

---

## Method 2: GitHub Actions + SSH (More Secure)

If your cPanel supports SSH access, this is more secure than FTP.

### Step 1: Generate SSH Key

On your local machine:

```bash
ssh-keygen -t rsa -b 4096 -C "github-deploy"
# Save as: github_deploy_key
# No passphrase (press Enter twice)
```

This creates:
- `github_deploy_key` (private key)
- `github_deploy_key.pub` (public key)

### Step 2: Add Public Key to cPanel

1. Login to cPanel
2. Go to "SSH Access" → "Manage SSH Keys"
3. Click "Import Key"
4. Paste content of `github_deploy_key.pub`
5. Authorize the key

### Step 3: Add Private Key to GitHub

1. Go to GitHub repository → Settings → Secrets
2. Add new secret:
   - **Name:** `SSH_PRIVATE_KEY`
   - **Value:** Content of `github_deploy_key` file

3. Add other secrets:
   - `SSH_HOST`: Your cPanel server IP or hostname
   - `SSH_USERNAME`: Your cPanel username
   - `SSH_PORT`: Usually 22

### Step 4: Create SSH Deployment Workflow

Create `.github/workflows/deploy-cpanel-ssh.yml`:

```yaml
name: Deploy to cPanel via SSH

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
      env:
        VITE_SITE_URL: ${{ secrets.VITE_SITE_URL }}
        VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
      
    - name: Deploy to cPanel via SSH
      uses: easingthemes/ssh-deploy@main
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        REMOTE_HOST: ${{ secrets.SSH_HOST }}
        REMOTE_USER: ${{ secrets.SSH_USERNAME }}
        REMOTE_PORT: ${{ secrets.SSH_PORT }}
        SOURCE: "dist/"
        TARGET: "/home/username/public_html/"
        EXCLUDE: "/node_modules/, /.git/"
```

---

## Method 3: Using cPanel Git Version Control

Some cPanel hosts support Git integration directly.

### Step 1: Enable Git in cPanel

1. Login to cPanel
2. Go to "Git Version Control"
3. Click "Create"
4. Enter:
   - Repository URL: Your GitHub repo URL
   - Repository Path: `/home/username/repositories/your-repo`
   - Click "Create"

### Step 2: Set Up Deployment Script

Create `deploy.sh` in your repository:

```bash
#!/bin/bash

# Navigate to repository
cd /home/username/repositories/your-repo

# Pull latest changes
git pull origin main

# Install dependencies
npm ci

# Build project
npm run build

# Copy to public_html
rsync -av --delete dist/ /home/username/public_html/

echo "Deployment complete!"
```

### Step 3: Set Up Webhook

1. In cPanel Git Version Control, copy webhook URL
2. Go to GitHub repository → Settings → Webhooks
3. Add webhook:
   - Payload URL: Your cPanel webhook URL
   - Content type: application/json
   - Events: Just the push event
4. Save

Now every push triggers the deployment!

---

## 🔧 Advanced Configuration

### Deploy Only on Tag/Release

Modify workflow to deploy only on version tags:

```yaml
on:
  push:
    tags:
      - 'v*'
```

Then deploy with:
```bash
git tag v1.0.0
git push origin v1.0.0
```

### Deploy to Staging and Production

Create separate workflows for different branches:

**Staging:** `.github/workflows/deploy-staging.yml`
```yaml
on:
  push:
    branches: [ develop ]
```

**Production:** `.github/workflows/deploy-production.yml`
```yaml
on:
  push:
    branches: [ main ]
```

### Slack/Discord Notifications

Add notification step to workflow:

```yaml
- name: Notify Slack
  if: always()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

---

## 📊 Monitoring Deployments

### View Deployment Status

1. Go to GitHub repository
2. Click "Actions" tab
3. See all deployment runs
4. Click any run to see logs

### Deployment Badge

Add to your README.md:

```markdown
![Deploy Status](https://github.com/username/repo/workflows/Deploy%20to%20cPanel/badge.svg)
```

---

## 🆘 Troubleshooting

### Build Fails

**Check:**
- Node.js version in workflow matches local
- All dependencies in package.json
- Environment variables are set

**Solution:**
```bash
# Test build locally
npm run build

# Check workflow logs in GitHub Actions
```

### FTP Connection Fails

**Check:**
- FTP credentials are correct
- FTP server allows connections from GitHub IPs
- Port 21 is open

**Solution:**
- Test FTP credentials with FileZilla
- Contact hosting support to whitelist GitHub IPs
- Try passive FTP mode

### Files Not Updating

**Check:**
- `server-dir` path is correct (usually `/public_html/`)
- FTP user has write permissions
- Cache is cleared

**Solution:**
```yaml
# Add cache busting
- name: Clear cache
  run: |
    echo "VITE_BUILD_TIME=$(date +%s)" >> $GITHUB_ENV
```

### SSH Connection Fails

**Check:**
- SSH is enabled in cPanel
- Private key format is correct
- Host and port are correct

**Solution:**
- Test SSH connection manually
- Regenerate SSH keys
- Check cPanel SSH settings

---

## 🔒 Security Best Practices

1. **Never commit credentials** - Always use GitHub Secrets
2. **Use SSH over FTP** when possible
3. **Limit FTP user permissions** - Only access to public_html
4. **Rotate credentials** regularly
5. **Enable 2FA** on GitHub account
6. **Review workflow logs** for sensitive data

---

## 📝 Complete Setup Checklist

- [ ] Push code to GitHub
- [ ] Get FTP/SSH credentials from cPanel
- [ ] Add secrets to GitHub repository
- [ ] Create workflow file
- [ ] Push workflow to GitHub
- [ ] Test deployment
- [ ] Verify website updates
- [ ] Set up notifications (optional)
- [ ] Add deployment badge (optional)

---

## 🎉 You're Done!

Now every time you push to GitHub:
1. Code is automatically built
2. Files are deployed to cPanel
3. Website updates instantly

No manual uploads needed! 🚀

---

## 📚 Additional Resources

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **FTP Deploy Action:** https://github.com/SamKirkland/FTP-Deploy-Action
- **SSH Deploy Action:** https://github.com/easingthemes/ssh-deploy
- **cPanel Git Docs:** Check your hosting provider's documentation

---

## 💡 Pro Tips

1. **Test in staging first** - Use separate branch for testing
2. **Use deployment previews** - Deploy to subdomain first
3. **Monitor build times** - Optimize if builds take too long
4. **Set up rollback** - Keep previous version backup
5. **Use caching** - Speed up builds with npm cache

---

**Your auto-deployment is ready!** Push to GitHub and watch the magic happen. ✨
