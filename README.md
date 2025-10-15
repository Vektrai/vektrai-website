# VEKTRAI - AI Engineering Consulting

A modern, multilingual website for VEKTRAI, an AI Engineering Consulting company focused on helping students in the Middle East build and present their AI projects professionally.

## 🌐 Live Website

Visit us at: [https://vektrai.com](https://vektrai.com)

## 📋 Project Overview

VEKTRAI provides professional AI engineering consulting services to students in Saudi Arabia, Qatar, and the UAE. Our website showcases our services, portfolio, team, and provides easy contact mechanisms for potential clients.

### Key Features

- **Multilingual Support**: Full support for English, Arabic (RTL), and French
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Dark navy and gold color scheme with smooth animations
- **Portfolio Showcase**: Interactive project gallery with detailed modal views
- **Contact Integration**: Formspree-powered contact form and WhatsApp integration
- **SEO Optimized**: Proper meta tags, sitemap, and semantic HTML structure

## 🛠️ Technology Stack

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern layouts using Flexbox and Grid, custom animations
- **Vanilla JavaScript**: No frameworks for optimal performance
- **External Libraries**:
  - [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
  - [Font Awesome](https://fontawesome.com/) - Icon library
  - [Google Fonts](https://fonts.google.com/) - Montserrat, Lato, Playfair Display
- **Form Handling**: [Formspree](https://formspree.io/) for contact form submissions
- **Hosting**: GitHub Pages with custom domain

## 📁 Project Structure

```
vektrai-website/
│
├── index.html              # Home page
├── about.html              # About page with team info
├── services.html           # Services and pricing
├── portfolio.html          # Project portfolio
├── contact.html            # Contact form
├── faq.html                # Frequently asked questions
├── CNAME                   # Custom domain configuration
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
│
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   ├── script.js       # Main JavaScript file
    │   └── portfolio-modal.js  # Portfolio modal functionality
    ├── images/
    │   ├── hero-bg.jpg     # Hero section background
    │   ├── portfolio/      # Portfolio project images
    │   └── team/           # Team member photos
    └── logo/
        └── vektrai-logo.png  # Company logo
```

## 🚀 Setup and Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git installed on your machine
- A text editor (VS Code, Sublime Text, etc.)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vektrai-website.git
   cd vektrai-website
   ```

2. **Open in browser**
   
   Simply open any HTML file in your browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

3. **Use a local server (recommended)**
   
   For better development experience, use a local server:
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using VS Code:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **Access the website**
   
   Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 🌍 Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `vektrai-website` (or any name you prefer)
   - Do not initialize with README (we already have one)

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vektrai-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at `https://YOUR_USERNAME.github.io/vektrai-website/`

### Custom Domain Configuration

To use the custom domain `vektrai.com`:

1. **Verify CNAME file**
   
   The repository already includes a `CNAME` file with the content:
   ```
   vektrai.com
   ```

2. **Configure DNS settings**
   
   Log in to your domain registrar (e.g., GoDaddy, Namecheap, Google Domains) and add the following DNS records:

   **For apex domain (vektrai.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **For www subdomain (www.vektrai.com):**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

3. **Enable HTTPS**
   - Go to repository Settings > Pages
   - Check "Enforce HTTPS"
   - Wait for the SSL certificate to be provisioned (may take a few minutes)

4. **Verify deployment**
   - DNS propagation can take up to 48 hours (usually much faster)
   - Check your site at `https://vektrai.com`
   - Verify that `https://www.vektrai.com` redirects properly

### Updating the Website

To make changes and deploy updates:

```bash
# Make your changes to the files
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## 🔧 Configuration

### Contact Form Setup

The contact form uses Formspree. To configure it:

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### WhatsApp Integration

Update the WhatsApp number in `contact.html` and footer sections:

```html
<a href="https://wa.me/966XXXXXXXXX" target="_blank">
```

Replace `966XXXXXXXXX` with your actual WhatsApp number (country code + number, no spaces or special characters).

### Language Translations

All translations are stored in `assets/js/script.js` in the `translations` object. To add or modify translations:

1. Open `assets/js/script.js`
2. Find the `translations` object
3. Add or modify entries for `en`, `ar`, or `fr` languages
4. Ensure all `data-lang-key` attributes in HTML files have corresponding translations

## 🎨 Customization

### Colors

The color scheme is defined in CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-dark: #0B132B;
    --secondary-dark: #1C2541;
    --accent-gold: #D4AF37;
    --text-light: #FFFFFF;
    --text-gray: #B0B0B0;
}
```

### Fonts

The website uses three Google Fonts:
- **Montserrat**: Headings and navigation
- **Lato**: Body text
- **Playfair Display**: Quotes and testimonials

To change fonts, update the Google Fonts link in the `<head>` section of each HTML file and modify the CSS font-family declarations.

### Images

Replace placeholder images in:
- `assets/images/portfolio/` - Portfolio project images
- `assets/images/team/` - Team member photos
- `assets/logo/` - Company logo
- `assets/images/hero-bg.jpg` - Hero section background

Recommended image sizes:
- Portfolio images: 800x600px
- Team photos: 400x400px (square)
- Logo: 200x60px (transparent PNG)
- Hero background: 1920x1080px

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## ♿ Accessibility

The website follows WCAG 2.1 Level AA guidelines:
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast ratios
- ARIA labels where appropriate

## 📊 Performance

Optimized for fast loading:
- Minimal external dependencies
- Optimized images
- Efficient CSS and JavaScript
- Lazy loading for images (via AOS)
- No heavy frameworks

## 🐛 Troubleshooting

### Site not loading after deployment
- Check that GitHub Pages is enabled in repository settings
- Verify the CNAME file contains the correct domain
- Wait for DNS propagation (up to 48 hours)
- Clear browser cache

### Images not displaying
- Verify image paths use absolute paths starting with `/assets/`
- Check that image files exist in the correct directories
- Ensure image file names match exactly (case-sensitive)

### Contact form not working
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure form fields have proper `name` attributes

### Language switching not working
- Check browser console for JavaScript errors
- Verify all `data-lang-key` attributes have translations
- Clear browser cache and localStorage

## 📄 License

© 2025 VEKTRAI. All rights reserved.

## 📞 Support

For questions or support:
- Email: info@vektrai.com
- WhatsApp: +966 XXX XXX XXX
- Website: [https://vektrai.com](https://vektrai.com)

---

**Built with ❤️ for students in the Middle East**
