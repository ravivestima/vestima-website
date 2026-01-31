# Vestima Coming Soon Page

A beautiful, modern coming soon page for vestima.in with GitHub Pages hosting support.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful gradient animations
- ⏱️ Live countdown timer
- 📧 Email notification form
- 🔒 HTTPS support via GitHub Pages
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible design

## Setup Instructions

### 1. Push to GitHub

1. Create a new repository on GitHub (e.g., `vestima-coming-soon`)
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Coming soon page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **main** branch (or **master** if that's your default branch)
5. Select **/ (root)** folder
6. Click **Save**

### 3. Configure Custom Domain

1. In the same **Pages** settings, scroll to **Custom domain**
2. Enter `vestima.in` and click **Save**
3. GitHub will automatically create a CNAME file (we've already included one)

### 4. DNS Configuration

You need to configure DNS records for your domain. Add the following records in your domain registrar's DNS settings:

#### For vestima.in (Apex domain):
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

#### For www.vestima.in (Subdomain):
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

**Note:** 
- Replace `YOUR_USERNAME` with your actual GitHub username
- Alternatively, you can point www to vestima.in using a CNAME record:
  ```
  Type: CNAME
  Name: www
  Value: vestima.in
  TTL: 3600
  ```
  This will make www.vestima.in redirect to vestima.in automatically.

### 5. Enable HTTPS (Automatic)

GitHub Pages automatically enables HTTPS for custom domains. After DNS propagation (can take up to 24 hours), GitHub will:
- Detect your custom domain
- Issue an SSL certificate
- Enable HTTPS automatically

You can force HTTPS by checking **Enforce HTTPS** in the Pages settings (this option appears after DNS is configured).

### 6. Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate. You can check propagation status using tools like:
- https://www.whatsmydns.net
- https://dnschecker.org

## Customization

### Change Countdown Date

Edit `script.js` and modify the target date:
```javascript
const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 3); // Change 3 to your desired months
```

### Update Colors

Edit `styles.css` and modify the CSS variables in `:root`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Add Social Media Links

Edit `index.html` and update the social links section:
```html
<div class="social-links">
    <a href="https://twitter.com/vestima" class="social-link">Twitter</a>
    <a href="https://linkedin.com/company/vestima" class="social-link">LinkedIn</a>
    <!-- Add more links -->
</div>
```

### Email Notification Backend

Currently, the email form just shows a success message. To actually collect emails, you can:

1. Use a service like Formspree, Netlify Forms, or EmailJS
2. Set up your own backend API
3. Use GitHub Issues API (for simple use cases)

## Files Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Countdown and form handling
├── CNAME              # Custom domain configuration
├── .nojekyll          # Disable Jekyll processing
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Notes

- The page uses HTTPS automatically via GitHub Pages
- No external dependencies except Google Fonts
- All code is client-side only
- Email validation is done client-side (add server-side validation for production)

## Troubleshooting

### Domain not working?
- Check DNS propagation status
- Verify CNAME file exists in your repository
- Ensure GitHub Pages is enabled
- Wait up to 24 hours for DNS propagation

### HTTPS not enabled?
- DNS must be fully propagated first
- Check "Enforce HTTPS" in GitHub Pages settings
- Clear browser cache

### Countdown not showing?
- Check browser console for JavaScript errors
- Ensure script.js is loaded correctly

## License

This project is open source and available for use.

## Support

For issues or questions, please open an issue on GitHub.

