# Requirements Document

## Introduction

VEKTRAI is an AI Engineering Consulting company focused on helping students in the Middle East (Saudi Arabia, Qatar, UAE) build and present their AI projects professionally. This project aims to create a modern, multilingual, professional website that showcases the company's services, builds trust through portfolio and team presentation, and provides easy contact mechanisms. The website will be hosted on GitHub Pages with a custom domain (vektrai.com) and support three languages: English, Arabic, and French.

## Requirements

### Requirement 1: Website Structure and Navigation

**User Story:** As a visitor, I want to easily navigate through different sections of the website, so that I can quickly find the information I need about VEKTRAI's services.

#### Acceptance Criteria

1. WHEN the website loads THEN the system SHALL display a responsive navigation bar with logo and links to all main pages (Home, About, Services, Portfolio, Contact, FAQ)
2. WHEN a user clicks on a navigation link THEN the system SHALL navigate to the corresponding page with smooth scrolling behavior
3. WHEN a user scrolls down the page THEN the navigation bar SHALL become sticky and remain visible at the top
4. WHEN the website is viewed on mobile devices THEN the system SHALL display a hamburger menu that expands to show navigation links
5. WHEN a user is on any page THEN the system SHALL display a footer with company information and quick links

### Requirement 2: Multilingual Support

**User Story:** As a student from the Middle East, I want to view the website in my preferred language (English, Arabic, or French), so that I can understand the services more clearly.

#### Acceptance Criteria

1. WHEN the website loads THEN the system SHALL display a language switcher in the navigation bar with options for English, Arabic, and French
2. WHEN a user selects a language THEN the system SHALL display all content in the selected language
3. WHEN Arabic is selected THEN the system SHALL apply right-to-left (RTL) text direction
4. WHEN a language is changed THEN the system SHALL persist the language preference across page navigation
5. IF a language is selected THEN the system SHALL update all page elements including navigation, content, and forms

### Requirement 3: Home Page Content

**User Story:** As a potential client, I want to see an engaging home page that explains what VEKTRAI offers, so that I can quickly understand if their services match my needs.

#### Acceptance Criteria

1. WHEN the home page loads THEN the system SHALL display a hero banner with company tagline and a prominent CTA button
2. WHEN the home page is viewed THEN the system SHALL display a "Why Choose Us" section with three feature cards (Mentorship, Expertise, Reports)
3. WHEN the home page is scrolled THEN the system SHALL display an "Our Projects" section showing a grid or carousel of featured projects
4. WHEN the home page is viewed THEN the system SHALL display a testimonials section with at least three student reviews
5. WHEN the home page is scrolled to the bottom THEN the system SHALL display a CTA section with a link to the Contact page

### Requirement 4: About Page Content

**User Story:** As a visitor, I want to learn about VEKTRAI's team and mission, so that I can build trust and understand their expertise.

#### Acceptance Criteria

1. WHEN the about page loads THEN the system SHALL display a company introduction paragraph
2. WHEN the about page is viewed THEN the system SHALL display a "Our Team" grid with 3-4 team members including names, roles, and language flags
3. WHEN the about page is scrolled THEN the system SHALL display "Our Mission" and "Vision" statements
4. WHEN the about page is viewed THEN the system SHALL display an animated timeline showing VEKTRAI's growth
5. IF a team member card is hovered THEN the system SHALL apply a subtle animation effect

### Requirement 5: Services Page Content

**User Story:** As a student, I want to see detailed information about available services and pricing, so that I can choose the right package for my project.

#### Acceptance Criteria

1. WHEN the services page loads THEN the system SHALL display service cards for AI Project Development, NLP & ML Assistance, Report and Presentation Support, and Personal AI Project Mentorship
2. WHEN a service card is viewed THEN the system SHALL display an icon, title, short description, and "Contact Us" button
3. WHEN the services page is scrolled THEN the system SHALL display a pricing section with three tiers (Freemium $0, Standard $199, Premium $399)
4. WHEN a pricing tier is viewed THEN the system SHALL display the tier name, description, and price
5. WHEN a "Contact Us" button is clicked THEN the system SHALL navigate to the contact page

### Requirement 6: Portfolio Page Content

**User Story:** As a potential client, I want to see examples of previous projects, so that I can evaluate VEKTRAI's capabilities and expertise.

#### Acceptance Criteria

1. WHEN the portfolio page loads THEN the system SHALL display a grid of 6-8 project cards
2. WHEN a project card is viewed THEN the system SHALL display an image thumbnail, title, short description, and technology tags
3. WHEN a project card is clicked THEN the system SHALL open a modal popup with detailed project information
4. WHEN a modal is open THEN the system SHALL allow users to close it by clicking outside or on a close button
5. WHEN the portfolio page is viewed on mobile THEN the system SHALL display projects in a single-column responsive layout

### Requirement 7: Contact Form and Communication

**User Story:** As a student needing help, I want to easily contact VEKTRAI through multiple channels, so that I can get assistance with my project.

#### Acceptance Criteria

1. WHEN the contact page loads THEN the system SHALL display a contact form with fields for name, email, language preference, and message
2. WHEN a user submits the contact form THEN the system SHALL send the form data to Formspree endpoint
3. WHEN the form is successfully submitted THEN the system SHALL display a success message to the user
4. WHEN the contact page is viewed THEN the system SHALL display a WhatsApp button link for direct messaging
5. WHEN the contact page is viewed THEN the system SHALL display an email link for direct email communication
6. IF any required form field is empty THEN the system SHALL prevent submission and display validation errors

### Requirement 8: FAQ Page Content

**User Story:** As a visitor, I want to find answers to common questions, so that I can get information quickly without contacting support.

#### Acceptance Criteria

1. WHEN the FAQ page loads THEN the system SHALL display an accordion list with 6-8 common questions
2. WHEN a question is clicked THEN the system SHALL expand to show the answer
3. WHEN another question is clicked THEN the system SHALL collapse the previous answer and expand the new one
4. WHEN the FAQ page is viewed THEN the system SHALL include questions about project types, academic reports, Arabic support, pricing, and student guidance
5. IF a question is expanded THEN the system SHALL display a visual indicator (arrow or icon rotation)

### Requirement 9: Visual Design and Branding

**User Story:** As a visitor, I want to experience a professional and elegant design, so that I feel confident in VEKTRAI's expertise and professionalism.

#### Acceptance Criteria

1. WHEN any page loads THEN the system SHALL apply a dark navy and gold color theme
2. WHEN the hero section is displayed THEN the system SHALL show a gradient background from #0B132B to #1C2541
3. WHEN text is displayed THEN the system SHALL use Montserrat for headings, Lato for body text, and Playfair Display for quotes
4. WHEN interactive elements are hovered THEN the system SHALL apply smooth transitions (0.3s ease)
5. WHEN cards are hovered THEN the system SHALL apply subtle shadow and scale(1.03) effects
6. WHEN the page is viewed THEN the system SHALL display the VEKTRAI logo from /assets/logo/ directory

### Requirement 10: Responsive Design and Performance

**User Story:** As a mobile user, I want the website to work seamlessly on my device, so that I can access information on the go.

#### Acceptance Criteria

1. WHEN the website is viewed on desktop THEN the system SHALL apply 100px section padding
2. WHEN the website is viewed on mobile THEN the system SHALL apply 50px section padding
3. WHEN the website is viewed on any device THEN the system SHALL display content in a responsive layout using Flexbox/Grid
4. WHEN images are loaded THEN the system SHALL optimize loading for fast performance
5. WHEN the page is scrolled THEN the system SHALL trigger AOS (Animate On Scroll) animations

### Requirement 11: SEO and Discoverability

**User Story:** As a student searching for AI project help, I want to find VEKTRAI through search engines, so that I can discover their services.

#### Acceptance Criteria

1. WHEN any page is loaded THEN the system SHALL include proper meta tags for SEO
2. WHEN the website is shared on social media THEN the system SHALL display OpenGraph meta tags with appropriate title, description, and image
3. WHEN search engines crawl the site THEN the system SHALL provide a sitemap.xml file
4. WHEN each page loads THEN the system SHALL include descriptive title tags and meta descriptions
5. WHEN the website is deployed THEN the system SHALL include proper semantic HTML5 structure

### Requirement 12: GitHub Pages Deployment

**User Story:** As the website owner, I want the website to be deployed on GitHub Pages with a custom domain, so that it's accessible at vektrai.com.

#### Acceptance Criteria

1. WHEN the repository is created THEN the system SHALL include a CNAME file with content "vektrai.com"
2. WHEN the website is deployed THEN the system SHALL be accessible via GitHub Pages
3. WHEN DNS is configured THEN the system SHALL be accessible at vektrai.com and www.vektrai.com
4. WHEN the repository is updated THEN the system SHALL automatically redeploy the website
5. IF the custom domain is configured THEN the system SHALL serve the website over HTTPS
