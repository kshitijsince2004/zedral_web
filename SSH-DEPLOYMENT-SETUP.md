# SSH Deployment Setup Guide

## 🎯 Overview

This guide sets up automated deployment from GitHub to cPanel using SSH (much more reliable than FTP).

## 📋 Project Details

- **Framework:** React + Vite
- **Build Command:** `npm run build`
- **Build Output:** `dist/`
- **Main Branch:** `main`

## 🔑 Step 1: Generate SSH Key Pair

Run these commands on your local machine:

```bash
# Generate SSH key pair
ssh-keygen -t ed25519 -C "github-deploy@zedral.com" -f github_deploy_key

# This creates two files:
# - github_deploy_key (private key - for GitHub)
# - github_deploy_key.pub (public key - for cPanel)
```

**Important:** Don't set a passphrase (press Enter when asked)

## 🖥️ Step 2: Add Public Key to cPanel

### Option A: Using cPanel SSH Manager

1. Login to cPanel
2. Go to "SSH Access" → "Manage SSH Keys"
3. Click "Import Key"
4. Paste the content of `github_deploy_key.pub`
5. Click "Import"
6. Find the imported key and click "Authorize"

### Option B: Manual Method

1. Login to cPanel → Terminal (or SSH)
2. Run these commands:

```bash
# Create .ssh directory if it doesn't exist
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Add the public key
cat >> ~/.ssh/authorized_keys << 'EOF'
[PASTE YOUR PUBLIC KEY HERE]
EOF

# Set correct permissions
chmod 600 ~/.ssh/authorized_keys
```

## 🔐 Step 3: Add Secrets to GitHub

Go to: https://github.com/kshitijsince2004/zedral_web/settings/secrets/actions

Click "New repository secret" and add these:

### Secret 1: SSH_PRIVATE_KEY
- **Name:** `SSH_PRIVATE_KEY`
- **Value:** Content of `github_deploy_key` file (entire file, including BEGIN and END lines)

### Secret 2: SSH_HOST
- **Name:** `SSH_HOST`
- **Value:** Your SSH hostname (e.g., `ftp.baghmaracampers.com` or `server123.yourhost.com`)

### Secret 3: SSH_USERNAME
- **Name:** `SSH_USERNAME`
- **Value:** Your cPanel username (likely `zedral_web@zedral.com` or just `zedral_web`)

### Secret 4: SSH_PORT
- **Name:** `SSH_PORT`
- **Value:** `22` (or your custom SSH port)

### Secret 5: DEPLOY_PATH
- **Name:** `DEPLOY_PATH`
- **Value:** `/home/zedral_web/public_html` (adjust based on your cPanel structure)

### Secret 6: VITE_SITE_URL
- **Name:** `VITE_SITE_URL`
- **Value:** `https://zedral.com`

### Secret 7: VITE_GA_MEASUREMENT_ID
- **Name:** `VITE_GA_MEASUREMENT_ID`
- **Value:** `G-4ZXR36HYGL`

## ✅ Step 4: Test SSH Connection

Before deploying, test the SSH connection:

```bash
ssh -i github_deploy_key -p 22 zedral_web@ftp.baghmaracampers.com

# If successful, you'll see a shell prompt
# Type 'exit' to disconnect
```

## 🚀 Step 5: Deploy!

Once secrets are added, the workflow will run automatically on every push to `main`.

Or manually trigger it:
1. Go to: https://github.com/kshitijsince2004/zedral_web/actions
2. Click "Deploy to cPanel (SSH)"
3. Click "Run workflow"

## 🔍 Troubleshooting

### SSH Connection Refused
- Check if SSH is enabled in cPanel
- Verify SSH port (might not be 22)
- Contact hosting provider

### Permission Denied
- Ensure public key is in `~/.ssh/authorized_keys`
- Check file permissions: `chmod 600 ~/.ssh/authorized_keys`
- Verify username is correct

### SSH Not Available
- Contact your hosting provider to enable SSH
- Some shared hosting plans don't support SSH
- Alternative: Use Vercel (recommended)

## 📊 Deployment Process

```
Push to GitHub → GitHub Actions → Build Project → SSH Transfer → Live Site
```

**Timeline:**
- Build: ~1 minute
- Transfer: ~30 seconds
- Total: ~2 minutes

## 🔒 Security Notes

- Private key is encrypted in GitHub Secrets
- SSH connection is encrypted
- No credentials in code repository
- Keys can be rotated anytime

## 📞 Need Help?

If SSH is not available on your hosting:
1. Contact hosting provider to enable it
2. Or use Vercel (free, easier, faster)

---

**Ready to deploy!** Follow the steps above and your auto-deployment will be live.
