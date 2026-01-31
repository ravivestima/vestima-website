# Quick Setup Guide

## Step-by-Step Instructions

### ✅ Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `vestima-coming-soon` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** check "Add a README file" or any other options
5. Click **"Create repository"**

### ✅ Step 2: Push Files to GitHub

After creating the repository, GitHub will show you commands. Use these instead:

```bash
cd /Users/ravi/Downloads/websote
git init
git add .
git commit -m "Initial commit: Coming soon page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### ✅ Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Select **main** branch
   - Select **/ (root)** folder
5. Click **Save**

### ✅ Step 4: Add Custom Domain

1. Still in **Pages** settings
2. Scroll to **Custom domain** section
3. Enter: `vestima.in`
4. Click **Save**
5. Check **"Enforce HTTPS"** (this will appear after DNS is configured)

### ✅ Step 5: Configure DNS

Go to your domain registrar (where you bought vestima.in) and add these DNS records:

#### For vestima.in:
Add 4 A records:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### For www.vestima.in:
Add 1 CNAME record:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```
(Replace YOUR_USERNAME with your GitHub username)

### ✅ Step 6: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Check status at: https://www.whatsmydns.net
- Once DNS propagates, GitHub will automatically enable HTTPS

## Need Help?

If you get stuck at any step, let me know and I'll help you!

