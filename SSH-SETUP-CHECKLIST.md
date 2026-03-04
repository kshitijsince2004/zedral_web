# SSH Deployment - Quick Setup Checklist

## ✅ Pre-Setup Information

**Project Details (Already Configured):**
- ✅ Framework: React + Vite
- ✅ Build Command: `npm run build`
- ✅ Build Output: `dist/`
- ✅ Main Branch: `main`

## 📋 What You Need to Provide

### From Your Hosting Provider:

- [ ] **SSH Host:** `________________` (e.g., `ftp.baghmaracampers.com`)
- [ ] **SSH Username:** `________________` (likely `zedral_web` or `zedral_web@zedral.com`)
- [ ] **SSH Port:** `22` (default) or `________________`
- [ ] **Deploy Path:** `________________` (e.g., `/home/zedral_web/public_html`)
- [ ] **SSH Access Enabled:** Yes / No (check in cPanel → SSH Access)

### How to Find These:

1. **Login to cPanel**
2. **SSH Host:** Usually your domain or server hostname
3. **SSH Username:** Your cPanel username (same as FTP username)
4. **SSH Port:** Usually 22 (check with hosting provider if unsure)
5. **Deploy Path:** Usually `/home/[username]/public_html`

## 🚀 Setup Steps (15-20 minutes)

### Step 1: Generate SSH Keys (2 min)

On your local machine:

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f github_deploy_key
```

Press Enter twice (no passphrase)

This creates:
- `github_deploy_key` (private - for GitHub)
- `github_deploy_key.pub` (public - for cPanel)

### Step 2: Add Public Key to cPanel (5 min)

**Method A: cPanel SSH Manager**
1. cPanel → SSH Access → Manage SSH Keys
2. Import Key → Paste `github_deploy_key.pub` content
3. Authorize the key

**Method B: Terminal**
```bash
# SSH into your server
ssh username@hostname

# Add public key
mkdir -p ~/.ssh
cat >> ~/.ssh/authorized_keys
# Paste public key content, press Ctrl+D
chmod 600 ~/.ssh/authorized_keys
```

### Step 3: Test SSH Connection (2 min)

```bash
ssh -i github_deploy_key -p 22 username@hostname
```

If successful, you'll see a shell prompt. Type `exit` to disconnect.

### Step 4: Add GitHub Secrets (3 min)

Go to: https://github.com/kshitijsince2004/zedral_web/settings/secrets/actions

Add these 7 secrets:

| Secret Name | Value |
|-------------|-------|
| `SSH_PRIVATE_KEY` | Content of `github_deploy_key` file |
| `SSH_HOST` | Your SSH hostname |
| `SSH_USERNAME` | Your cPanel username |
| `SSH_PORT` | `22` (or your port) |
| `DEPLOY_PATH` | `/home/username/public_html` |
| `VITE_SITE_URL` | `https://zedral.com` |
| `VITE_GA_MEASUREMENT_ID` | `G-4ZXR36HYGL` |

### Step 5: Test Deployment (5 min)

1. Go to: https://github.com/kshitijsince2004/zedral_web/actions
2. Click "Deploy to cPanel (SSH)"
3. Click "Run workflow" → "Run workflow"
4. Wait 2-3 minutes
5. Check your website!

## ✅ Success Indicators

- [ ] SSH connection test successful
- [ ] GitHub workflow runs without errors
- [ ] Website updates after push
- [ ] Deployment takes ~2 minutes

## 🆘 If SSH is Not Available

Some hosting providers don't support SSH on shared hosting.

**Alternative Options:**

1. **Upgrade hosting plan** (if SSH available on higher tiers)
2. **Use Vercel** (free, easier, recommended)
   - Go to https://vercel.com
   - Import GitHub repository
   - Auto-deploys on every push
   - Free SSL, CDN, better performance

3. **Contact hosting provider** to enable SSH

## 📊 Deployment Flow

```
Developer Push → GitHub Actions → Build → SSH Transfer → Live Site
                     (~1 min)      (~1 min)    (~30 sec)
```

## 🔒 Security

- ✅ Private key encrypted in GitHub
- ✅ SSH connection encrypted
- ✅ No credentials in code
- ✅ Keys can be rotated anytime

## 📞 Next Steps

1. **Get SSH credentials** from your hosting provider
2. **Follow Step 1-5** above
3. **Test deployment**
4. **Enjoy automated deployments!**

---

**Need help?** See `SSH-DEPLOYMENT-SETUP.md` for detailed instructions.
