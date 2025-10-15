# Design Document

## Overview

The VEKTRAI website is a static, multilingual website built with vanilla HTML5, CSS3, and JavaScript. It will be hosted on GitHub Pages and accessible via the custom domain vektrai.com. The design emphasizes professionalism, elegance, and trust-building through a clean UI with smooth animations, a dark navy and gold color palette, and responsive layouts that work seamlessly across all devices.

The website consists of six main pages (Home, About, Services, Portfolio, Contact, FAQ) with shared navigation and footer components. Multilingual support is implemented through JavaScript-based content switching, allowing users to toggle between English, Arabic, and French without page reloads.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Pages Hosting                     │
│                      (vektrai.com)                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Static HTML Pages                         │
│  ├── index.html (Home)                                       │
│  ├── about.html                                              │
│  ├── services.html                                           │
│  ├── portfolio.html                                          │
│  ├── contact.html                                            │
│  └── faq.html                                                │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
┌───────────────────────────┐   ┌──────────────────────────┐
│   CSS Styling Layer       │   │  JavaScript Layer        │
│   - style.css             │   │  - script.js             │
│   - Responsive design     │   │  - Interactivity         │
│   - Animations            │   │  - Language switching    │
└───────────────────────────┘   └──────────────────────────┘
                                            │
                                            ▼
                              ┌──────────────────────────┐
                              │  External Services       │
                              │  - Formspree (forms)     │
                              │  - Google Fonts          │
                              │  - Font Awesome (icons)  │
                              │  - AOS (animations)      │
                              └──────────────────────────┘
```

### Directory Structure

```
/vektrai-website
│
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── contact.html
├── faq.html
├── CNAME
├── sitemap.xml
│
└── assets/
    ├── logo/
    │   └── vektrai-logo.png
    ├── images/
    │   ├── hero-bg.jpg
    │   ├── team/
    │   └── portfolio/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## Components and Interfaces

### 1. Navigation Component

**Purpose:** Provides consistent navigation across all pages with language switching capability.

**Structure:**
```html
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="nav-brand">
      <img src="/assets/logo/vektrai-logo.png" alt="VEKTRAI Logo">
    </div>
    <button class="nav-toggle" id="navToggle">☰</button>
    <ul class="nav-menu" id="navMenu">
      <li><a href="index.html" data-lang-key="nav-home">Home</a></li>
      <li><a href="about.html" data-lang-key="nav-about">About</a></li>
      <li><a href="services.html" data-lang-key="nav-services">Services</a></li>
      <li><a href="portfolio.html" data-lang-key="nav-portfolio">Portfolio</a></li>
      <li><a href="contact.html" data-lang-key="nav-contact">Contact</a></li>
      <li><a href="faq.html" data-lang-key="nav-faq">FAQ</a></li>
    </ul>
    <div class="language-switcher">
      <button class="lang-btn" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="ar">AR</button>
      <button class="lang-btn" data-lang="fr">FR</button>
    </div>
  </div>
</nav>
```

**Behavior:**
- Sticky positioning after scrolling 100px
- Mobile hamburger menu for screens < 768px
- Active page highlighting
- Language switcher triggers content update

### 2. Footer Component

**Purpose:** Provides consistent footer information and links across all pages.

**Structure:**
```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4 data-lang-key="footer-about">About VEKTRAI</h4>
        <p data-lang-key="footer-description">AI Engineering Consulting for Students</p>
      </div>
      <div class="footer-col">
        <h4 data-lang-key="footer-quick-links">Quick Links</h4>
        <ul>
          <li><a href="services.html" data-lang-key="nav-services">Services</a></li>
          <li><a href="portfolio.html" data-lang-key="nav-portfolio">Portfolio</a></li>
          <li><a href="contact.html" data-lang-key="nav-contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-lang-key="footer-contact">Contact</h4>
        <p>Email: info@vektrai.com</p>
        <p>WhatsApp: +966 XXX XXX XXX</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 VEKTRAI. All rights reserved.</p>
    </div>
  </div>
</footer>
```

### 3. Hero Section Component

**Purpose:** Creates an engaging first impression on the home page.

**Design:**
- Full viewport height (100vh)
- Gradient background: `linear-gradient(135deg, #0B132B, #1C2541)`
- Centered content with tagline and CTA
- Subtle parallax effect on scroll

**Structure:**
```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title" data-lang-key="hero-title">
      AI Engineering Consulting for Students
    </h1>
    <p class="hero-subtitle" data-lang-key="hero-subtitle">
      Professional guidance for your AI projects in the Middle East
    </p>
    <a href="portfolio.html" class="btn btn-primary" data-lang-key="hero-cta">
      Explore Our Work
    </a>
  </div>
</section>
```

### 4. Feature Cards Component

**Purpose:** Displays key benefits and services in an easily scannable format.

**Design:**
- Grid layout (3 columns on desktop, 1 on mobile)
- Icon + Title + Description
- Hover effects: scale(1.03) + shadow
- AOS animations on scroll

**Structure:**
```html
<div class="feature-card" data-aos="fade-up">
  <div class="feature-icon">
    <i class="fas fa-user-graduate"></i>
  </div>
  <h3 class="feature-title" data-lang-key="feature-mentorship-title">
    Expert Mentorship
  </h3>
  <p class="feature-description" data-lang-key="feature-mentorship-desc">
    One-on-one guidance from AI engineering experts
  </p>
</div>
```

### 5. Project Card Component

**Purpose:** Displays portfolio projects with modal popup functionality.

**Design:**
- Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Image thumbnail with overlay on hover
- Technology tags
- Click opens modal with full details

**Structure:**
```html
<div class="project-card" data-project-id="1">
  <div class="project-image">
    <img src="/assets/images/portfolio/project1.jpg" alt="Project 1">
    <div class="project-overlay">
      <button class="btn-view-project">View Details</button>
    </div>
  </div>
  <div class="project-info">
    <h3 class="project-title">NLP Sentiment Analysis</h3>
    <p class="project-description">Arabic sentiment analysis using BERT</p>
    <div class="project-tags">
      <span class="tag">BERT</span>
      <span class="tag">Python</span>
      <span class="tag">FastAPI</span>
    </div>
  </div>
</div>
```

### 6. Modal Component

**Purpose:** Displays detailed project information in an overlay.

**Design:**
- Centered overlay with backdrop
- Close button and click-outside-to-close
- Scrollable content for long descriptions
- Smooth fade-in animation

**Structure:**
```html
<div class="modal" id="projectModal">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <div class="modal-body">
      <img src="" alt="" class="modal-image">
      <h2 class="modal-title"></h2>
      <p class="modal-description"></p>
      <div class="modal-tags"></div>
      <div class="modal-details"></div>
    </div>
  </div>
</div>
```

### 7. Contact Form Component

**Purpose:** Allows users to submit inquiries via Formspree.

**Design:**
- Clean, accessible form layout
- Input validation
- Success/error message display
- Formspree integration

**Structure:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form" id="contactForm">
  <div class="form-group">
    <label for="name" data-lang-key="form-name">Full Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email" data-lang-key="form-email">Email Address</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="language" data-lang-key="form-language">Preferred Language</label>
    <select id="language" name="language">
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="fr">Français</option>
    </select>
  </div>
  <div class="form-group">
    <label for="message" data-lang-key="form-message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary" data-lang-key="form-submit">
    Send Message
  </button>
</form>
```

### 8. Accordion Component (FAQ)

**Purpose:** Displays FAQ items with expand/collapse functionality.

**Design:**
- Single-item expansion (collapse others when one opens)
- Smooth height transition
- Icon rotation on expand
- Keyboard accessible

**Structure:**
```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <span data-lang-key="faq-q1">What kind of projects do you support?</span>
      <i class="fas fa-chevron-down"></i>
    </button>
    <div class="accordion-content">
      <p data-lang-key="faq-a1">
        We support all types of AI projects including NLP, computer vision, ML models, and more.
      </p>
    </div>
  </div>
</div>
```

### 9. Pricing Cards Component

**Purpose:** Displays service tiers with pricing information.

**Design:**
- 3-column grid (1 column on mobile)
- Highlighted "recommended" tier
- Clear pricing and feature lists
- CTA button for each tier

**Structure:**
```html
<div class="pricing-grid">
  <div class="pricing-card">
    <h3 class="pricing-title" data-lang-key="pricing-free-title">Freemium</h3>
    <p class="pricing-description" data-lang-key="pricing-free-desc">
      Initial consultation and feedback on your project idea
    </p>
    <div class="pricing-price">
      <span class="price-amount">$0</span>
    </div>
    <a href="contact.html" class="btn btn-outline" data-lang-key="pricing-cta">
      Get Started
    </a>
  </div>
  <!-- Standard and Premium cards follow same structure -->
</div>
```

### 10. Team Member Card Component

**Purpose:** Displays team member information on About page.

**Design:**
- Grid layout with profile images
- Name, role, and language flags
- Hover effect reveals additional info
- Circular profile images

**Structure:**
```html
<div class="team-card" data-aos="fade-up">
  <div class="team-image">
    <img src="/assets/images/team/member1.jpg" alt="Team Member">
  </div>
  <h3 class="team-name">Dr. Ahmed Al-Rashid</h3>
  <p class="team-role" data-lang-key="team-role-1">AI Engineering Lead</p>
  <div class="team-languages">
    <span class="flag">🇬🇧</span>
    <span class="flag">🇸🇦</span>
    <span class="flag">🇫🇷</span>
  </div>
</div>
```

## Data Models

### Language Translation Object

The multilingual content is managed through a JavaScript object that maps language keys to translations:

```javascript
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'hero-title': 'AI Engineering Consulting for Students',
    'hero-subtitle': 'Professional guidance for your AI projects in the Middle East',
    'hero-cta': 'Explore Our Work',
    // ... more translations
  },
  ar: {
    'nav-home': 'الرئيسية',
    'nav-about': 'من نحن',
    'nav-services': 'الخدمات',
    'nav-portfolio': 'المشاريع',
    'nav-contact': 'اتصل بنا',
    'nav-faq': 'الأسئلة الشائعة',
    'hero-title': 'استشارات هندسة الذكاء الاصطناعي للطلاب',
    'hero-subtitle': 'إرشاد احترافي لمشاريع الذكاء الاصطناعي في الشرق الأوسط',
    'hero-cta': 'استكشف أعمالنا',
    // ... more translations
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'hero-title': 'Conseil en ingénierie IA pour étudiants',
    'hero-subtitle': 'Accompagnement professionnel pour vos projets IA au Moyen-Orient',
    'hero-cta': 'Découvrir nos projets',
    // ... more translations
  }
};
```

### Project Data Object

Portfolio projects are stored as JavaScript objects for modal population:

```javascript
const projects = [
  {
    id: 1,
    title: 'NLP Sentiment Analysis',
    description: 'Arabic sentiment analysis using BERT model',
    image: '/assets/images/portfolio/project1.jpg',
    tags: ['BERT', 'Python', 'FastAPI', 'Arabic NLP'],
    details: 'Full project description with technical details...',
    client: 'University Student - Saudi Arabia',
    year: '2024'
  },
  // ... more projects
];
```

### FAQ Data Object

FAQ items are stored as JavaScript objects for accordion generation:

```javascript
const faqItems = [
  {
    id: 1,
    question: {
      en: 'What kind of projects do you support?',
      ar: 'ما نوع المشاريع التي تدعمونها؟',
      fr: 'Quels types de projets soutenez-vous?'
    },
    answer: {
      en: 'We support all types of AI projects including NLP, computer vision, ML models, and more.',
      ar: 'ندعم جميع أنواع مشاريع الذكاء الاصطناعي بما في ذلك معالجة اللغة الطبيعية والرؤية الحاسوبية ونماذج التعلم الآلي والمزيد.',
      fr: 'Nous soutenons tous les types de projets IA, y compris le NLP, la vision par ordinateur, les modèles ML, et plus encore.'
    }
  },
  // ... more FAQ items
];
```

## Error Handling

### Form Submission Errors

**Scenario:** Formspree API fails or network error occurs

**Handling:**
```javascript
async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showMessage('success', 'Message sent successfully!');
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    showMessage('error', 'Failed to send message. Please try again or contact us via email.');
    console.error('Form error:', error);
  }
}
```

### Image Loading Errors

**Scenario:** Portfolio or team images fail to load

**Handling:**
```javascript
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.src = '/assets/images/placeholder.jpg';
    this.alt = 'Image not available';
  });
});
```

### Language Switching Errors

**Scenario:** Translation key not found

**Handling:**
```javascript
function getTranslation(key, lang) {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  // Fallback to English
  if (translations['en'] && translations['en'][key]) {
    return translations['en'][key];
  }
  // Return key if no translation found
  return key;
}
```

### External Library Loading Errors

**Scenario:** AOS or Font Awesome fails to load

**Handling:**
```javascript
// Graceful degradation - check if AOS is loaded
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    once: true
  });
} else {
  console.warn('AOS library not loaded - animations disabled');
}
```

## Testing Strategy

### 1. Manual Testing Checklist

**Navigation Testing:**
- [ ] All navigation links work on every page
- [ ] Sticky navbar activates after scrolling
- [ ] Mobile hamburger menu opens and closes
- [ ] Active page is highlighted in navigation
- [ ] Language switcher changes content correctly

**Responsive Design Testing:**
- [ ] Test on desktop (1920px, 1366px, 1024px)
- [ ] Test on tablet (768px, 834px)
- [ ] Test on mobile (375px, 414px, 390px)
- [ ] All images scale properly
- [ ] Text remains readable at all sizes
- [ ] No horizontal scrolling on any device

**Form Testing:**
- [ ] All form fields validate correctly
- [ ] Required fields prevent submission when empty
- [ ] Email validation works
- [ ] Form submits successfully to Formspree
- [ ] Success message displays after submission
- [ ] Error message displays on failure

**Multilingual Testing:**
- [ ] All content translates correctly
- [ ] Arabic displays RTL properly
- [ ] Language preference persists across pages
- [ ] No missing translations
- [ ] Special characters display correctly

**Interactive Elements Testing:**
- [ ] Portfolio modal opens and closes
- [ ] FAQ accordion expands and collapses
- [ ] Hover effects work on all cards
- [ ] Smooth scroll navigation works
- [ ] AOS animations trigger on scroll

### 2. Browser Compatibility Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### 3. Performance Testing

**Metrics to verify:**
- Page load time < 3 seconds
- First Contentful Paint < 1.5 seconds
- Largest Contentful Paint < 2.5 seconds
- Cumulative Layout Shift < 0.1
- Time to Interactive < 3.5 seconds

**Tools:**
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- WebPageTest

### 4. SEO Testing

**Checklist:**
- [ ] All pages have unique title tags
- [ ] All pages have meta descriptions
- [ ] OpenGraph tags present on all pages
- [ ] Images have alt text
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] sitemap.xml is accessible
- [ ] robots.txt is configured
- [ ] HTTPS is enabled

**Tools:**
- Google Search Console
- SEO analyzer tools
- Structured data testing tool

### 5. Accessibility Testing

**Checklist:**
- [ ] All images have alt text
- [ ] Form labels are properly associated
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] ARIA labels used where appropriate
- [ ] Screen reader friendly

**Tools:**
- WAVE browser extension
- axe DevTools
- Lighthouse accessibility audit

### 6. Deployment Testing

**Pre-deployment:**
- [ ] CNAME file contains correct domain
- [ ] All asset paths are relative or absolute
- [ ] No broken links
- [ ] All external resources load via HTTPS

**Post-deployment:**
- [ ] Website accessible at vektrai.com
- [ ] www.vektrai.com redirects properly
- [ ] HTTPS certificate is valid
- [ ] All pages load correctly
- [ ] Contact form works in production
- [ ] DNS propagation complete

## Design Decisions and Rationales

### 1. Vanilla JavaScript over Framework

**Decision:** Use vanilla JavaScript instead of React/Vue/Angular

**Rationale:**
- Simpler deployment to GitHub Pages (no build process)
- Faster page load times (no framework overhead)
- Easier maintenance for small team
- Sufficient for static content with limited interactivity
- Better SEO out of the box

### 2. Client-Side Language Switching

**Decision:** Implement multilingual support via JavaScript rather than separate HTML files

**Rationale:**
- Single source of truth for structure
- Easier to maintain and update
- Instant language switching without page reload
- Smaller overall file size
- Simpler deployment process

### 3. Formspree for Contact Form

**Decision:** Use Formspree instead of custom backend

**Rationale:**
- No backend infrastructure needed
- Free tier sufficient for expected traffic
- Spam protection included
- Easy integration with static site
- Reliable email delivery

### 4. AOS for Animations

**Decision:** Use AOS library for scroll animations

**Rationale:**
- Lightweight (< 10KB)
- Easy to implement with data attributes
- Smooth, professional animations
- Good browser support
- Minimal JavaScript required

### 5. CSS Grid and Flexbox

**Decision:** Use modern CSS layout methods instead of Bootstrap

**Rationale:**
- More control over design
- Smaller file size (no framework CSS)
- Better performance
- Easier to customize
- Native browser support is excellent

### 6. Dark Navy and Gold Theme

**Decision:** Use dark navy (#0B132B, #1C2541) with gold accents

**Rationale:**
- Professional and elegant appearance
- Good contrast for readability
- Stands out from typical blue/white tech sites
- Gold conveys premium quality
- Works well with Middle Eastern aesthetic preferences

### 7. Single-Page Modal for Portfolio

**Decision:** Use modal popups instead of separate project pages

**Rationale:**
- Faster user experience (no page load)
- Easier to maintain (one HTML file)
- Better for browsing multiple projects
- Cleaner URL structure
- Simpler navigation flow
