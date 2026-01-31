# How to Push to GitHub

## Option 1: Using Personal Access Token (Easiest)

1. **Create a token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: `vestima-website`
   - Select scope: ✅ **repo** (full control)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Push using the token:**
   ```bash
   cd /Users/ravi/Downloads/websote
   git push -u origin main
   ```
   When prompted:
   - Username: `ravivestima`
   - Password: **Paste your token** (not your GitHub password)

## Option 2: Using SSH (More Secure)

1. **Check if you have SSH key:**
   ```bash
   ls -la ~/.ssh
   ```

2. **If no SSH key, create one:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. **Add SSH key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste the key and save

4. **Change remote to SSH:**
   ```bash
   cd /Users/ravi/Downloads/websote
   git remote set-url origin git@github.com:ravivestima/vestima-website.git
   git push -u origin main
   ```

## Option 3: Use GitHub Desktop App

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. File → Add Local Repository → Select `/Users/ravi/Downloads/websote`
4. Click "Publish repository"

---

**After pushing, continue with GitHub Pages setup!**

