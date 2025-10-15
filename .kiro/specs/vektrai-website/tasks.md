# Implementation Plan

- [x] 1. Set up project structure and base files





  - Create directory structure: assets/css, assets/js, assets/images, assets/logo
  - Create CNAME file with "vektrai.com"
  - Create base HTML template with common head elements and meta tags
  - _Requirements: 12.1, 11.1, 11.2_

- [x] 2. Implement CSS foundation and design system




  - [x] 2.1 Create CSS variables for color scheme and typography


    - Define color variables (dark navy #0B132B, #1C2541, gold accents)
    - Define font families (Montserrat, Lato, Playfair Display)
    - Define spacing scale and breakpoints
    - _Requirements: 9.1, 9.2, 9.3_
  
  - [x] 2.2 Implement CSS reset and base styles


    - Write CSS reset for consistent cross-browser rendering
    - Create base typography styles
    - Implement responsive container classes
    - _Requirements: 10.3, 9.3_
  
  - [x] 2.3 Create reusable component styles


    - Write button styles (primary, outline, hover effects)
    - Create card component styles with hover effects
    - Implement form input styles
    - Add transition and animation utilities
    - _Requirements: 9.4, 9.5_
-

- [x] 3. Build navigation component



  - [x] 3.1 Create navigation HTML structure

    - Write navbar HTML with logo, menu items, and language switcher
    - Add mobile hamburger menu button
    - Include data-lang-key attributes for translations
    - _Requirements: 1.1, 2.1_
  

  - [x] 3.2 Implement navigation CSS

    - Style desktop navigation layout
    - Create sticky navbar styles
    - Write mobile responsive styles with hamburger menu
    - Add active page highlighting styles
    - _Requirements: 1.3, 1.4, 10.2_
  

  - [x] 3.3 Add navigation JavaScript functionality

    - Implement sticky navbar on scroll
    - Create mobile menu toggle function
    - Add smooth scroll behavior for anchor links
    - Highlight active page in navigation
    - _Requirements: 1.2, 1.3, 1.4_

- [x] 4. Build footer component





  - Create footer HTML structure with company info and links
  - Style footer with responsive grid layout
  - Add footer to all page templates
  - _Requirements: 1.5_

- [x] 5. Implement multilingual system






  - [x] 5.1 Create translation data structure

    - Write translations object with en, ar, fr keys
    - Add all navigation translations
    - Add all common UI element translations
    - _Requirements: 2.1, 2.2_
  

  - [x] 5.2 Implement language switching functionality

    - Write function to update all elements with data-lang-key attributes
    - Create language switcher click handlers
    - Implement localStorage for language persistence
    - Add RTL direction toggle for Arabic
    - _Requirements: 2.2, 2.3, 2.4, 2.5_

- [x] 6. Build home page




  - [x] 6.1 Create hero section


    - Write hero HTML structure with title, subtitle, and CTA
    - Style hero with gradient background and centered content
    - Add responsive styles for mobile
    - _Requirements: 3.1, 9.2, 10.2_
  
  - [x] 6.2 Implement "Why Choose Us" section


    - Create three feature cards HTML (Mentorship, Expertise, Reports)
    - Style feature cards with icons and hover effects
    - Add responsive grid layout
    - Integrate AOS animations
    - _Requirements: 3.2, 9.5, 10.1_
  
  - [x] 6.3 Create "Our Projects" section


    - Build project grid/carousel HTML structure
    - Style project cards with images and overlays
    - Add responsive layout for mobile
    - _Requirements: 3.3, 10.3_
  
  - [x] 6.4 Build testimonials section


    - Create testimonials HTML with three student reviews
    - Style testimonials with quote styling (Playfair Display)
    - Add responsive layout
    - _Requirements: 3.4, 9.3_
  
  - [x] 6.5 Add CTA section


    - Create CTA section HTML with link to contact page
    - Style CTA with prominent button
    - _Requirements: 3.5_

- [x] 7. Build about page




  - [x] 7.1 Create company introduction section


    - Write introduction HTML with company description
    - Style introduction section with proper typography
    - Add translations for introduction content
    - _Requirements: 4.1_
  
  - [x] 7.2 Implement team section


    - Create team grid HTML with 3-4 team member cards
    - Style team cards with circular images and language flags
    - Add hover effects on team cards
    - Integrate AOS animations
    - _Requirements: 4.2, 4.5, 10.1_
  
  - [x] 7.3 Create mission and vision section


    - Write mission and vision HTML structure
    - Style mission and vision with emphasis styling
    - _Requirements: 4.3_
  
  - [x] 7.4 Build timeline section


    - Create timeline HTML structure
    - Style timeline with animated elements
    - Add AOS animations for timeline items
    - _Requirements: 4.4, 10.5_

- [x] 8. Build services page




  - [x] 8.1 Create service cards


    - Write HTML for four service cards (AI Project Development, NLP & ML, Reports, Mentorship)
    - Style service cards with icons, titles, descriptions
    - Add "Contact Us" buttons to each card
    - Implement responsive grid layout
    - _Requirements: 5.1, 5.2, 5.4, 10.3_
  
  - [x] 8.2 Implement pricing section


    - Create pricing cards HTML for three tiers (Freemium, Standard, Premium)
    - Style pricing cards with tier details and prices
    - Add responsive layout for pricing grid
    - Highlight recommended tier
    - _Requirements: 5.3, 5.4_

- [x] 9. Build portfolio page




  - [x] 9.1 Create project grid


    - Write HTML for 6-8 project cards with images and info
    - Style project cards with image overlays
    - Add technology tags to each project
    - Implement responsive grid (3 columns desktop, 2 tablet, 1 mobile)
    - _Requirements: 6.1, 6.2, 6.5, 10.3_
  
  - [x] 9.2 Implement modal component


    - Create modal HTML structure with backdrop and content area
    - Style modal with centered overlay and close button
    - Add smooth fade-in animation
    - _Requirements: 6.3, 6.4_
  
  - [x] 9.3 Add modal functionality


    - Write JavaScript to open modal on project card click
    - Implement modal close on backdrop click and close button
    - Populate modal with project data dynamically
    - Add keyboard ESC key to close modal
    - _Requirements: 6.3, 6.4_

- [x] 10. Build contact page




  - [x] 10.1 Create contact form HTML


    - Write form HTML with name, email, language, and message fields
    - Add Formspree action URL
    - Include form labels with data-lang-key attributes
    - Add required attributes to fields
    - _Requirements: 7.1, 7.6_
  
  - [x] 10.2 Style contact form


    - Create form layout styles
    - Style input fields and textarea
    - Add button styles
    - Implement responsive form layout
    - _Requirements: 7.1, 10.2_
  
  - [x] 10.3 Implement form validation and submission


    - Write client-side validation for required fields
    - Implement email format validation
    - Create form submission handler with fetch API
    - Add success and error message display
    - _Requirements: 7.2, 7.3, 7.6_
  
  - [x] 10.4 Add additional contact methods

    - Create WhatsApp button link
    - Add email link
    - Style contact method buttons
    - _Requirements: 7.4, 7.5_

- [x] 11. Build FAQ page




  - [x] 11.1 Create FAQ accordion structure


    - Write HTML for 6-8 FAQ items with questions and answers
    - Add data-lang-key attributes for translations
    - Include chevron icons for expand/collapse indicators
    - _Requirements: 8.1, 8.4_
  
  - [x] 11.2 Style FAQ accordion


    - Create accordion item styles
    - Style expanded and collapsed states
    - Add icon rotation animation
    - Implement smooth height transition
    - _Requirements: 8.5_
  
  - [x] 11.3 Implement accordion functionality


    - Write JavaScript to toggle accordion items
    - Implement single-item expansion (close others when opening)
    - Add smooth height animation
    - Rotate chevron icon on expand/collapse
    - _Requirements: 8.2, 8.3, 8.5_

- [x] 12. Add animations and interactions




  - [x] 12.1 Integrate AOS library


    - Add AOS library via CDN
    - Initialize AOS with configuration
    - Add data-aos attributes to animated elements
    - Test animations on scroll
    - _Requirements: 10.5_
  

  - [x] 12.2 Implement smooth scroll

    - Write smooth scroll function for anchor links
    - Add smooth scroll to navigation links
    - _Requirements: 1.2_
  

  - [x] 12.3 Add hover effects

    - Implement card hover effects (scale and shadow)
    - Add button hover transitions
    - Test all interactive elements
    - _Requirements: 9.4, 9.5_
-

- [x] 13. Implement SEO optimization



  - [x] 13.1 Add meta tags to all pages


    - Write unique title tags for each page
    - Create meta descriptions for each page
    - Add OpenGraph tags for social sharing
    - Include viewport and charset meta tags
    - _Requirements: 11.1, 11.2, 11.4_
  
  - [x] 13.2 Create sitemap.xml


    - Write sitemap.xml with all page URLs
    - Include lastmod and priority tags
    - _Requirements: 11.3_
  
  - [x] 13.3 Optimize semantic HTML


    - Ensure proper heading hierarchy on all pages
    - Add alt text to all images
    - Use semantic HTML5 elements
    - _Requirements: 11.5_

- [x] 14. Add external resources and assets




  - [x] 14.1 Integrate Google Fonts


    - Add Google Fonts link for Montserrat, Lato, Playfair Display
    - Apply fonts in CSS
    - _Requirements: 9.3_
  
  - [x] 14.2 Add Font Awesome icons


    - Include Font Awesome CDN link
    - Add icons to feature cards, service cards, and UI elements
    - _Requirements: 1.1, 5.1_
  
  - [x] 14.3 Add placeholder images


    - Create or source placeholder images for team members
    - Add placeholder images for portfolio projects
    - Add hero background image
    - Optimize all images for web
    - _Requirements: 6.1, 4.2, 3.1_

- [x] 15. Implement responsive design refinements







  - [x] 15.1 Test and fix mobile layout
    - Test all pages on mobile viewport (375px, 414px)
    - Adjust padding and spacing for mobile
    - Fix any layout issues
    - _Requirements: 10.2, 10.3_

  
  - [x] 15.2 Test and fix tablet layout

    - Test all pages on tablet viewport (768px, 834px)
    - Adjust grid columns for tablet
    - Fix any layout issues
    - _Requirements: 10.3_
  

  - [x] 15.3 Test and fix desktop layout

    - Test all pages on desktop viewports (1024px, 1366px, 1920px)
    - Ensure proper section padding
    - Verify all elements scale correctly
    - _Requirements: 10.1, 10.3_

- [x] 16. Add all translations




  - [x] 16.1 Complete English translations


    - Add all English text for all pages
    - Verify all data-lang-key attributes have translations
    - _Requirements: 2.1, 2.2_
  
  - [x] 16.2 Complete Arabic translations


    - Add all Arabic text for all pages
    - Test RTL layout with Arabic content
    - Verify Arabic text displays correctly
    - _Requirements: 2.2, 2.3_
  
  - [x] 16.3 Complete French translations


    - Add all French text for all pages
    - Verify all French text displays correctly
    - _Requirements: 2.2_
-

- [x] 17. Create deployment configuration



  - [x] 17.1 Verify CNAME file


    - Ensure CNAME file contains "vektrai.com"
    - _Requirements: 12.1_
  
  - [x] 17.2 Test all asset paths


    - Verify all CSS, JS, and image paths are correct
    - Ensure paths work with GitHub Pages structure
    - _Requirements: 12.2_
  
  - [x] 17.3 Create README.md


    - Write README with project description
    - Add setup and deployment instructions
    - Include DNS configuration guide
    - _Requirements: 12.3, 12.5_

- [x] 18. Final testing and quality assurance





  - [x] 18.1 Cross-browser testing


    - Test on Chrome, Firefox, Safari, Edge
    - Fix any browser-specific issues
    - _Requirements: 1.1, 10.3_
  

  - [x] 18.2 Test all interactive features

    - Test navigation on all pages
    - Test language switching
    - Test contact form submission
    - Test portfolio modal
    - Test FAQ accordion
    - _Requirements: 1.2, 2.2, 7.2, 6.3, 8.2_
  

  - [x] 18.3 Validate HTML and CSS

    - Run HTML validator on all pages
    - Run CSS validator
    - Fix any validation errors
    - _Requirements: 11.5_
  

  - [x] 18.4 Performance optimization

    - Optimize image file sizes
    - Minify CSS and JavaScript (optional for initial launch)
    - Test page load speed
    - _Requirements: 10.4_
  

  - [x] 18.5 Accessibility testing

    - Test keyboard navigation
    - Verify color contrast ratios
    - Test with screen reader
    - Add ARIA labels where needed
    - _Requirements: 11.5_
