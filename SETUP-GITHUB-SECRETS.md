# Setup GitHub Secrets - Step by Step

## 🔐 Your FTP Credentials

Based on your CoreFTP configuration:

- **FTP Server:** `ftp.baghmaracampers.com`
- **FTP Username:** `zedral_web@zedral.com`
- **FTP Password:** `0qxSz@iWK%gV`
- **Port:** `21`
- **SSL:** No (plain FTP)
- **Passive Mode:** Yes

## 📋 Add Secrets to GitHub

### Step 1: Go to GitHub Secrets Page

Click this link: https://github.com/kshitijsince2004/zedral_web/settings/secrets/actions

Or manually:
1. Go to your repository
2. Click "Settings" (top menu)
3. Click "Secrets and variables" → "Actions" (left sidebar)

### Step 2: Add Each Secret

Click "New repository secret" button and add these 5 secrets:

#### Secret 1: FTP_SERVER
- **Name:** `FTP_SERVER`
- **Value:** `ftp.baghmaracampers.com`
- Click "Add secret"

#### Secret 2: FTP_USERNAME
- **Name:** `FTP_USERNAME`
- **Value:** `zedral_web@zedral.com`
- Click "Add secret"

#### Secret 3: FTP_PASSWORD
- **Name:** `FTP_PASSWORD`
- **Value:** `0qxSz@iWK%gV`
- Click "Add secret"

#### Secret 4: VITE_SITE_URL
- **Name:** `VITE_SITE_URL`
- **Value:** `https://zedral.com` (or your actual domain)
- Click "Add secret"

#### Secret 5: VITE_GA_MEASUREMENT_ID
- **Name:** `VITE_GA_MEASUREMENT_ID`
- **Value:** `G-4ZXR36HYGL`
- Click "Add secret"

### Step 3: Verify Secrets

After adding all 5 secrets, you should see them listed (values will be hidden).

### Step 4: Test Deployment

Once secrets are added:

1. Go to: https://github.com/kshitijsince2004/zedral_web/actions
2. Click "Deploy to cPanel (LFTP)"
3. Click "Run workflow" → "Run workflow"
4. Wait 2-3 minutes
5. Check if deployment succeeds!

## ✅ Expected Result

After adding secrets, the next push to GitHub will automatically:
1. Build your project
2. Connect to `ftp.baghmaracampers.com`
3. Upload files to `/public_html/`
4. Your website updates!

## 🔒 Security Note

After deployment works, you should:
1. Delete this file (contains password)
2. Delete the CoreFTP file from public folder
3. Change your FTP password in cPanel (optional but recommended)

## 🆘 If It Still Fails

The password contains special characters (`@`, `%`). If deployment fails:
1. Try changing FTP password in cPanel to something simpler (no special chars)
2. Update the `FTP_PASSWORD` secret with new password
3. Try deployment again

---

**Ready to add secrets?** Follow the steps above and your auto-deployment will work!
