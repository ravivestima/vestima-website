# Add Deploy Key with Write Access

## Steps:

1. **Copy your SSH public key:**
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFTcV8SRSRByMQbHGp1DvrXVn00STB005/u+Tk8c79MI ravivestima@github
   ```

2. **Go to your repository settings:**
   - Visit: https://github.com/ravivestima/vestima-website/settings/keys

3. **Add deploy key:**
   - Click **"Add deploy key"**
   - Title: `vestima-website-write`
   - Key: Paste the SSH key above
   - ✅ **CHECK "Allow write access"** (this is important!)
   - Click **"Add key"**

4. **After adding, come back and we'll push the code!**

---

**Alternative:** If you want to use your personal SSH key instead:
- Go to: https://github.com/settings/keys
- Add the same key as a personal SSH key
- Then we can push directly

