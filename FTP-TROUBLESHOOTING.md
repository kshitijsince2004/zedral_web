# FTP Deployment Troubleshooting

## 🔴 Current Issue: "max-retries exceeded"

This error means GitHub Actions cannot connect to your FTP server.

## 🔍 Common Causes

### 1. Incorrect FTP Credentials
- Wrong FTP server address
- Wrong username or password
- Wrong port number

### 2. FTP Server Configuration
- Server requires FTPS (FTP over SSL)
- Server blocks GitHub's IP addresses
- Passive mode not enabled
- Firewall blocking connection

### 3. Path Issues
- Wrong server directory path
- Permissions not set correctly

## ✅ How to Fix

### Step 1: Verify Your FTP Credentials

1. **Test with FileZilla or WinSCP first**
   - Download FileZilla: https://filezilla-project.org/
   - Try connecting with your credentials
   - Note the exact settings that work

2. **Check these details:**
   - Host: Should it be `ftp.yourdomain.com` or just `yourdomain.com`?
   - Port: Usually 21 (FTP) or 22 (SFTP)
   - Protocol: FTP, FTPS, or SFTP?
   - Encryption: Explicit FTP over TLS, Implicit FTP over TLS, or None?

### Step 2: Update GitHub Secrets

Based on what works in FileZilla, update your secrets:

Go to: https://github.com/kshitijsince2004/zedral_web/settings/secrets/actions

**Common FTP Server Formats:**
- `ftp.yourdomain.com`
- `yourdomain.com`
- `ftp://yourdomain.com`
- IP address like `123.456.789.0`

**Check with your hosting provider:**
- cPanel → FTP Accounts → Look for "FTP Server" or "Hostname"

### Step 3: Test Connection

Run the "Test FTP Connection" workflow:

1. Go to: https://github.com/kshitijsince2004/zedral_web/actions
2. Click "Test FTP Connection"
3. Click "Run workflow"
4. Check the logs for connection details

### Step 4: Try Alternative Methods

I've created multiple deployment workflows. Try them in this order:

1. **deploy-cpanel-winscp.yml** (Most reliable)
   - Uses better LFTP settings
   - Handles SSL properly
   - More retries

2. **deploy-cpanel-ncftp.yml** (Alternative)
   - Different FTP client
   - Good for restrictive servers

3. **deploy-cpanel-lftp.yml** (Current)
   - Original LFTP method
   - May need credential fixes

To enable a different workflow:
1. Edit the workflow file
2. Change `on: workflow_dispatch:` to:
   ```yaml
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   ```

## 📋 Checklist

- [ ] Test FTP connection with FileZilla/WinSCP
- [ ] Verify FTP server address is correct
- [ ] Verify username is correct
- [ ] Verify password is correct
- [ ] Check if server requires FTPS/SSL
- [ ] Verify port number (21 for FTP, 22 for SFTP)
- [ ] Check server path is `/public_html/` or `/public_html/yourdomain.com/`
- [ ] Ensure FTP account has write permissions
- [ ] Run "Test FTP Connection" workflow
- [ ] Try alternative deployment workflows

## 🆘 Still Not Working?

### Option 1: Contact Your Hosting Provider

Ask them:
1. What is the correct FTP server address?
2. What port should I use?
3. Does the server support FTP or FTPS?
4. Are there any IP restrictions?
5. Is passive mode enabled?

### Option 2: Use Alternative Deployment

Instead of FTP, consider:

**A. Deploy to Vercel (Easiest)**
```bash
npm install -g vercel
vercel --prod
```

**B. Deploy to Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**C. Manual cPanel Upload**
1. Run `npm run build`
2. Upload `dist/` folder via cPanel File Manager
3. Set up Git Version Control in cPanel

See `GITHUB-DEPLOYMENT.md` for Vercel/Netlify setup.

## 🔧 Debug Information Needed

If you need help, provide:
1. Your hosting provider name
2. FileZilla connection settings that work
3. Error logs from GitHub Actions
4. FTP server address format

## 💡 Pro Tip

Most cPanel hosts work better with:
- **Protocol:** FTPS (FTP over TLS)
- **Mode:** Passive
- **Port:** 21
- **Server:** `ftp.yourdomain.com`

## 📚 Additional Resources

- **FileZilla Download:** https://filezilla-project.org/
- **cPanel FTP Docs:** Check your hosting provider's documentation
- **GitHub Actions Logs:** https://github.com/kshitijsince2004/zedral_web/actions

---

**Next Steps:**
1. Test FTP with FileZilla
2. Update GitHub secrets with correct credentials
3. Run "Test FTP Connection" workflow
4. Try alternative deployment workflows
