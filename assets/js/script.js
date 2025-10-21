/* ===================================
   VEKTRAI Website - Main JavaScript
   =================================== */

// ===================================
// Navigation Functionality
// ===================================

// Sticky Navbar on Scroll
function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (!navToggle || !navMenu) return;
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Update aria-expanded for accessibility
    const isExpanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Highlight Active Page in Navigation
function highlightActivePage() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    // Remove active class from all links
    link.classList.remove('active');
    
    // Add active class to current page link
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === '/' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ===================================
// FAQ Accordion Functionality
// ===================================

function initFAQAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length === 0) return;
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const itemHeader = item.querySelector('.accordion-header');
        if (itemHeader) {
          itemHeader.setAttribute('aria-expanded', 'false');
        }
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        accordionItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
    
    // Keyboard accessibility - Enter and Space keys
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// ===================================
// Initialize All Functions
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation features
  initStickyNavbar();
  initMobileMenu();
  initSmoothScroll();
  highlightActivePage();
  
  // Initialize language switcher
  initLanguageSwitcher();
  
  // Initialize FAQ accordion
  initFAQAccordion();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize AOS (Animate On Scroll) if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }
});

// ===================================
// Multilingual Support
// ===================================

const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    
    // Home Page - Hero Section
    'hero-title': 'Expert AI Engineering Solutions',
    'hero-subtitle': 'Professional guidance for your AI projects in the Middle East',
    'hero-cta': 'Explore Our Work',
    
    // Home Page - Why Choose Us
    'why-choose-title': 'Why Choose VEKTRAI',
    'why-choose-subtitle': 'We provide comprehensive support for your AI journey',
    'feature-mentorship-title': 'Expert Mentorship',
    'feature-mentorship-desc': 'Personalized guidance from AI engineering experts, tailored to your project goals',
    'feature-expertise-title': 'Technical Expertise',
    'feature-expertise-desc': 'Deep knowledge in NLP, ML, computer vision, and cutting-edge AI technologies',
    'feature-reports-title': 'Professional Reports',
    'feature-reports-desc': 'Professional-grade documentation and presentations that meet the highest technical standards',
    
    // Home Page - Projects
    'projects-title': 'Our Projects',
    'projects-subtitle': 'Explore Our Successful Client Projects',
    'project1-title': 'NLP Sentiment Analysis',
    'project1-desc': 'Arabic sentiment analysis using BERT model',
    'project2-title': 'Computer Vision System',
    'project2-desc': 'Object detection for smart city applications',
    'project3-title': 'ML Prediction Model',
    'project3-desc': 'Predictive analytics for healthcare data',
    'view-all-projects': 'View All Projects',
    
    // Home Page - Testimonials
    'testimonials-title': 'Client Success Stories',
    'testimonials-subtitle': 'Hear from clients who achieved success with our guidance',
    'testimonial1-text': 'VEKTRAI helped me transform my basic idea into a professional AI project. Their mentorship was invaluable for my graduation project.',
    'testimonial1-name': 'Ahmed Al-Rashid',
    'testimonial1-info': 'King Saud University',
    'testimonial2-text': 'The team\'s expertise in Arabic NLP was exactly what I needed. They guided me through every step and my project received top marks.',
    'testimonial2-name': 'Fatima Al-Mansoori',
    'testimonial2-info': 'AI Engineering Graduate',
    'testimonial3-text': 'Professional, knowledgeable, and patient. VEKTRAI made complex ML concepts easy to understand and implement in my research.',
    'testimonial3-name': 'Omar Al-Thani',
    'testimonial3-info': 'Qatar University',
    
    // Home Page - CTA
    'cta-title': 'Ready to Start Your AI Project?',
    'cta-subtitle': 'Get expert guidance and bring your AI ideas to life with professional support',
    'cta-button': 'Contact Us Today',
    
    // Footer
    'footer-about': 'About VEKTRAI',
    'footer-description': 'Professional AI Engineering Consulting and Solutions in the Middle East',
    'footer-quick-links': 'Quick Links',
    'footer-contact': 'Contact',
    'footer-rights': 'All rights reserved',
    
    // Services Page
    'services-title': 'Our Services',
    'services-subtitle': 'Comprehensive AI consulting services tailored to your needs',
    'service1-title': 'AI Project Development',
    'service1-desc': 'End-to-end support for building your AI project from concept to implementation. We help you design, develop, and deploy professional AI solutions that meet academic standards.',
    'service2-title': 'NLP & ML Assistance',
    'service2-desc': 'Expert guidance in Natural Language Processing and Machine Learning. Specialized support for Arabic NLP, sentiment analysis, text classification, and predictive modeling.',
    'service3-title': 'Report & Presentation Support',
    'service3-desc': 'Professional documentation and presentation creation for your AI projects. Academic-quality reports, technical documentation, and compelling presentations.',
    'service4-title': 'Personal AI Project Mentorship',
    'service4-desc': 'One-on-one mentorship from AI experts throughout your project journey. Personalized guidance, code reviews, and strategic advice to ensure your success.',
    
    // Pricing Section
    'pricing-title': 'Pricing Plans',
    'pricing-subtitle': 'Choose the plan that fits your needs',
    'pricing-recommended': 'Recommended',
    'pricing-cta': 'Get Started',
    
    'pricing-free-tier': 'Freemium',
    'pricing-free-desc': 'Initial consultation and feedback on your project idea',
    'pricing-free-feature1': '30-minute consultation',
    'pricing-free-feature2': 'Project idea evaluation',
    'pricing-free-feature3': 'Basic guidance',
    'pricing-free-feature4': 'Email support',
    
    'pricing-standard-tier': 'Standard',
    'pricing-standard-desc': 'Complete project support with expert guidance',
    'pricing-standard-feature1': 'Full project development support',
    'pricing-standard-feature2': 'Code review and optimization',
    'pricing-standard-feature3': 'Technical documentation',
    'pricing-standard-feature4': 'Weekly mentorship sessions',
    'pricing-standard-feature5': 'Email & chat support',
    
    'pricing-premium-tier': 'Premium',
    'pricing-premium-desc': 'Comprehensive support with priority access',
    'pricing-premium-feature1': 'Everything in Standard',
    'pricing-premium-feature2': 'Priority support (24/7)',
    'pricing-premium-feature3': 'Professional presentation creation',
    'pricing-premium-feature4': 'Academic report writing',
    'pricing-premium-feature5': 'Unlimited revisions',
    'pricing-premium-feature6': 'Video call sessions',
    
    // Common UI Elements
    'btn-learn-more': 'Learn More',
    'btn-get-started': 'Get Started',
    'btn-contact-us': 'Contact Us',
    'btn-view-details': 'View Details',
    'view-details': 'View Details',
    'btn-close': 'Close',
    'btn-submit': 'Submit',
    'btn-send': 'Send Message',
    'btn-read-more': 'Read More',
    
    // Common Labels
    'label-name': 'Name',
    'label-email': 'Email',
    'label-phone': 'Phone',
    'label-message': 'Message',
    'label-subject': 'Subject',
    'label-language': 'Language',
    'label-required': 'Required',
    
    // Common Messages
    'msg-loading': 'Loading...',
    'msg-success': 'Success!',
    'msg-error': 'Error occurred',
    'msg-thank-you': 'Thank you for your message',
    'msg-will-contact': 'We will contact you soon',
    
    // Common Placeholders
    'placeholder-name': 'Enter your name',
    'placeholder-email': 'Enter your email',
    'placeholder-phone': 'Enter your phone number',
    'placeholder-message': 'Tell us about your project or question',
    'placeholder-search': 'Search...',
    
    // Contact Page
    'contact-title': 'Get In Touch',
    'contact-subtitle': 'Have a question or need help with your AI project? We\'re here to help!',
    'contact-form-title': 'Send Us a Message',
    'contact-methods-title': 'Other Ways to Reach Us',
    'contact-whatsapp-title': 'WhatsApp',
    'contact-whatsapp-desc': 'Chat with us directly for quick responses',
    'contact-email-title': 'Email',
    'contact-email-desc': 'Send us an email and we\'ll respond within 24 hours',
    'btn-whatsapp': 'Message on WhatsApp',
    'btn-email': 'Email Us',
    'msg-sending': 'Sending...',
    'msg-form-success': 'Thank you! Your message has been sent successfully. We will get back to you soon.',
    'msg-form-error': 'Failed to send message. Please try again or contact us via email or WhatsApp.',
    'error-required': 'This field is required',
    'error-email-invalid': 'Please enter a valid email address',
    'error-form-validation': 'Please fix the errors above',
    
    // Accessibility
    'aria-menu': 'Main menu',
    'aria-close-menu': 'Close menu',
    'aria-open-menu': 'Open menu',
    'aria-language-switcher': 'Language switcher',
    
    // About Page - Company Introduction
    'about-intro-title': 'About VEKTRAI',
    'about-intro-text': 'VEKTRAI is a leading AI Engineering Consulting company dedicated to empowering students across the Middle East—particularly in Saudi Arabia, Qatar, and the UAE—to excel in their artificial intelligence projects. We understand the challenges students face when working on complex AI assignments, graduation projects, and research papers. Our mission is to bridge the gap between academic requirements and real-world AI implementation by providing expert mentorship, technical guidance, and professional documentation support.',
    'about-intro-text2': 'With deep expertise in Natural Language Processing, Machine Learning, Computer Vision, and emerging AI technologies, we help students transform their ideas into polished, professional projects that meet the highest academic standards. Whether you\'re building an Arabic NLP system, developing a predictive ML model, or creating a computer vision application, VEKTRAI is your trusted partner in achieving academic excellence.',
    
    // About Page - Team Section
    'team-title': 'Our Expert Team',
    'team-subtitle': 'Meet the AI experts dedicated to your success',
    'team-member1-name': 'Dr. Ahmed Al-Rashid',
    'team-member1-role': 'AI Engineering Lead',
    'team-member1-bio': 'PhD in AI with 10+ years of experience in NLP and Machine Learning. Specialized in Arabic language processing.',
    'team-member2-name': 'Dr. Fatima Al-Mansoori',
    'team-member2-role': 'Computer Vision Specialist',
    'team-member2-bio': 'Expert in deep learning and computer vision applications. Published researcher with focus on real-world AI solutions.',
    'team-member3-name': 'Omar Al-Thani',
    'team-member3-role': 'ML Solutions Architect',
    'team-member3-bio': 'Specialized in building scalable ML systems and predictive analytics. Passionate about mentoring students.',
    'team-member4-name': 'Sarah Al-Khalifa',
    'team-member4-role': 'Data Science Consultant',
    'team-member4-bio': 'Expert in data analysis, statistical modeling, and AI project documentation. Helps students present their work professionally.',
    
    // About Page - Mission and Vision
    'mission-title': 'Our Mission',
    'mission-text': 'To empower students across the Middle East with expert AI engineering guidance, bridging the gap between academic requirements and real-world implementation. We are committed to providing personalized mentorship, technical excellence, and professional documentation support that enables students to excel in their AI projects and achieve academic success.',
    'vision-title': 'Our Vision',
    'vision-text': 'To become the leading AI education partner in the Middle East, recognized for transforming students into confident AI practitioners. We envision a future where every student has access to world-class AI expertise, enabling them to contribute meaningfully to the region\'s technological advancement and innovation ecosystem.',
    
    // About Page - Timeline
    'timeline-title': 'Our Journey',
    'timeline-subtitle': 'Growing together with our students',
    'timeline-year1': '2022',
    'timeline-title1': 'Foundation',
    'timeline-desc1': 'VEKTRAI was founded with a vision to bridge the gap between academic AI education and real-world implementation in the Middle East. Started with a small team of passionate AI experts.',
    'timeline-year2': '2023',
    'timeline-title2': 'First 100 Students',
    'timeline-desc2': 'Reached a milestone of helping 100 students across Saudi Arabia, UAE, and Qatar successfully complete their AI projects. Expanded our team to include specialists in NLP, Computer Vision, and ML.',
    'timeline-year3': '2024',
    'timeline-title3': 'Regional Recognition',
    'timeline-desc3': 'Became recognized as a leading AI consulting partner for students in the region. Launched specialized programs for Arabic NLP projects and established partnerships with major universities.',
    'timeline-year4': '2025',
    'timeline-title4': 'Innovation & Growth',
    'timeline-desc4': 'Continuing to innovate with new mentorship programs, advanced AI project support, and expanding our reach to empower even more students across the Middle East to achieve excellence in AI.',
    
    // Portfolio Page
    'portfolio-title': 'Our Portfolio',
    'portfolio-subtitle': 'Explore Our Successful Client Projects',
    'portfolio-project1-title': 'Arabic NLP Sentiment Analysis',
    'portfolio-project1-desc': 'Advanced sentiment analysis system for Arabic text using BERT transformer model',
    'portfolio-project2-title': 'Smart City Object Detection',
    'portfolio-project2-desc': 'Real-time object detection system for smart city traffic management',
    'portfolio-project3-title': 'Healthcare Prediction Model',
    'portfolio-project3-desc': 'Machine learning model for predicting patient outcomes using clinical data',
    'portfolio-project4-title': 'Multilingual AI Chatbot',
    'portfolio-project4-desc': 'Intelligent chatbot supporting Arabic, English, and French conversations',
    'portfolio-project5-title': 'E-commerce Recommendation Engine',
    'portfolio-project5-desc': 'Personalized product recommendation system using collaborative filtering',
    'portfolio-project6-title': 'Medical Image Classification',
    'portfolio-project6-desc': 'Deep learning model for classifying medical images and detecting anomalies',
    'portfolio-project7-title': 'Financial Time Series Forecasting',
    'portfolio-project7-desc': 'LSTM-based model for predicting stock prices and market trends',
    'portfolio-project8-title': 'Arabic Speech Recognition System',
    'portfolio-project8-desc': 'Voice-to-text system optimized for Arabic dialects and accents',
    
    // FAQ Page
    'faq-title': 'Frequently Asked Questions',
    'faq-subtitle': 'Find answers to common questions about our AI consulting services',
    'faq-q1': 'What kind of AI projects do you support?',
    'faq-a1': 'We support all types of AI projects including Natural Language Processing (NLP), Computer Vision, Machine Learning models, Deep Learning applications, and more. We have specialized expertise in Arabic NLP, sentiment analysis, text classification, object detection, image classification, predictive modeling, and recommendation systems. Whether you\'re working on a graduation project, research paper, or academic assignment, we can help.',
    'faq-q2': 'Do you help with academic reports and presentations?',
    'faq-a2': 'Yes! We provide comprehensive support for academic documentation including project reports, technical documentation, research papers, and presentation slides. Our team ensures that all documentation meets university standards and academic requirements. We help you present your work professionally with clear explanations, proper citations, and compelling visuals.',
    'faq-q3': 'Do you provide support in Arabic?',
    'faq-a3': 'Absolutely! We provide full support in Arabic, English, and French. Our team includes native Arabic speakers with deep expertise in Arabic NLP and language processing. We can communicate with you in your preferred language and help you build AI projects that work with Arabic text, speech, and data. We understand the unique challenges of working with Arabic in AI applications.',
    'faq-q4': 'What are your pricing plans?',
    'faq-a4': 'We offer three pricing tiers: Freemium ($0) for initial consultation and project idea evaluation, Standard ($199) for complete project development support with weekly mentorship sessions, and Premium ($399) for comprehensive support with priority access, professional presentations, and unlimited revisions. Visit our Services page to see detailed features for each plan and choose the one that best fits your needs.',
    'faq-q5': 'How long does it take to complete a project?',
    'faq-a5': 'Project timelines vary depending on complexity and scope. A typical AI project takes 4-8 weeks from initial consultation to final delivery. Simple projects like basic ML models may take 2-4 weeks, while complex projects involving multiple components or advanced techniques may take 8-12 weeks. During our initial consultation, we\'ll assess your project requirements and provide a realistic timeline tailored to your academic deadlines.',
    'faq-q6': 'Do you provide guidance for students at all levels?',
    'faq-a6': 'Yes! We work with students at all academic levels - from undergraduate students working on course projects to graduate students conducting advanced research. Our mentorship approach is tailored to your current knowledge level and learning goals. We explain concepts clearly, provide hands-on guidance, and ensure you understand the work so you can confidently present and defend your project.',
    'faq-q7': 'What programming languages and tools do you work with?',
    'faq-a7': 'We primarily work with Python, which is the industry standard for AI and machine learning. We have expertise in popular frameworks and libraries including TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face Transformers, OpenCV, NLTK, spaCy, and more. We also work with tools like Jupyter Notebooks, Google Colab, and various cloud platforms. If your project requires specific tools or languages, we can accommodate most requirements.',
    'faq-q8': 'How do I get started?',
    'faq-a8': 'Getting started is easy! Simply contact us through our Contact page, WhatsApp, or email. Tell us about your project idea, academic requirements, and timeline. We\'ll schedule a free initial consultation to discuss your needs, answer your questions, and recommend the best approach. After that, you can choose a pricing plan and we\'ll begin working together on your AI project. We\'re here to help you succeed!'
  },
  ar: {
    // Navigation
    'nav-home': 'الرئيسية',
    'nav-about': 'من نحن',
    'nav-services': 'الخدمات',
    'nav-portfolio': 'المشاريع',
    'nav-contact': 'اتصل بنا',
    'nav-faq': 'الأسئلة الشائعة',
    
    // Home Page - Hero Section
    'hero-title': 'استشارات هندسة الذكاء الاصطناعي للطلاب',
    'hero-subtitle': 'إرشاد احترافي لمشاريع الذكاء الاصطناعي في الشرق الأوسط',
    'hero-cta': 'استكشف أعمالنا',
    
    // Home Page - Why Choose Us
    'why-choose-title': 'لماذا تختار فكتراي',
    'why-choose-subtitle': 'نقدم دعماً شاملاً لرحلتك في الذكاء الاصطناعي',
    'feature-mentorship-title': 'إرشاد من الخبراء',
    'feature-mentorship-desc': 'توجيه فردي من خبراء هندسة الذكاء الاصطناعي الذين يفهمون احتياجاتك الأكاديمية',
    'feature-expertise-title': 'خبرة تقنية',
    'feature-expertise-desc': 'معرفة عميقة في معالجة اللغة الطبيعية والتعلم الآلي والرؤية الحاسوبية وأحدث تقنيات الذكاء الاصطناعي',
    'feature-reports-title': 'تقارير احترافية',
    'feature-reports-desc': 'توثيق وعروض تقديمية بجودة أكاديمية تلبي معايير الجامعات',
    
    // Home Page - Projects
    'projects-title': 'مشاريعنا',
    'projects-subtitle': 'استكشف بعض مشاريع الذكاء الاصطناعي الناجحة التي ساعدنا الطلاب في بنائها',
    'project1-title': 'تحليل المشاعر بمعالجة اللغة الطبيعية',
    'project1-desc': 'تحليل المشاعر العربية باستخدام نموذج BERT',
    'project2-title': 'نظام الرؤية الحاسوبية',
    'project2-desc': 'كشف الأشياء لتطبيقات المدن الذكية',
    'project3-title': 'نموذج التنبؤ بالتعلم الآلي',
    'project3-desc': 'التحليلات التنبؤية لبيانات الرعاية الصحية',
    'view-all-projects': 'عرض جميع المشاريع',
    
    // Home Page - Testimonials
    'testimonials-title': 'ماذا يقول طلابنا',
    'testimonials-subtitle': 'استمع إلى الطلاب الذين حققوا النجاح بتوجيهنا',
    'testimonial1-text': 'ساعدتني فكتراي في تحويل فكرتي الأساسية إلى مشروع ذكاء اصطناعي احترافي. كان إرشادهم لا يقدر بثمن لمشروع تخرجي.',
    'testimonial1-name': 'أحمد الراشد',
    'testimonial1-info': 'طالب علوم الحاسب، جامعة الملك سعود',
    'testimonial2-text': 'خبرة الفريق في معالجة اللغة العربية الطبيعية كانت بالضبط ما احتاجه. أرشدوني في كل خطوة وحصل مشروعي على أعلى الدرجات.',
    'testimonial2-name': 'فاطمة المنصوري',
    'testimonial2-info': 'طالبة هندسة الذكاء الاصطناعي، جامعة الإمارات',
    'testimonial3-text': 'محترفون، ذوو معرفة، وصبورون. جعلت فكتراي مفاهيم التعلم الآلي المعقدة سهلة الفهم والتطبيق في بحثي.',
    'testimonial3-name': 'عمر الثاني',
    'testimonial3-info': 'طالب علوم البيانات، جامعة قطر',
    
    // Home Page - CTA
    'cta-title': 'هل أنت مستعد لبدء مشروع الذكاء الاصطناعي الخاص بك؟',
    'cta-subtitle': 'احصل على إرشاد الخبراء وحقق أفكارك في الذكاء الاصطناعي بدعم احترافي',
    'cta-button': 'اتصل بنا اليوم',
    
    // Footer
    'footer-about': 'عن فكتراي',
    'footer-description': 'استشارات هندسة الذكاء الاصطناعي للطلاب في الشرق الأوسط',
    'footer-quick-links': 'روابط سريعة',
    'footer-contact': 'اتصل بنا',
    'footer-rights': 'جميع الحقوق محفوظة',
    
    // Services Page
    'services-title': 'خدماتنا',
    'services-subtitle': 'خدمات استشارية شاملة للذكاء الاصطناعي مصممة للطلاب',
    'service1-title': 'تطوير مشاريع الذكاء الاصطناعي',
    'service1-desc': 'دعم شامل لبناء مشروع الذكاء الاصطناعي الخاص بك من الفكرة إلى التنفيذ. نساعدك في تصميم وتطوير ونشر حلول الذكاء الاصطناعي الاحترافية التي تلبي المعايير الأكاديمية.',
    'service2-title': 'مساعدة في معالجة اللغة الطبيعية والتعلم الآلي',
    'service2-desc': 'إرشاد خبير في معالجة اللغة الطبيعية والتعلم الآلي. دعم متخصص لمعالجة اللغة العربية الطبيعية، وتحليل المشاعر، وتصنيف النصوص، والنمذجة التنبؤية.',
    'service3-title': 'دعم التقارير والعروض التقديمية',
    'service3-desc': 'إنشاء توثيق وعروض تقديمية احترافية لمشاريع الذكاء الاصطناعي الخاصة بك. تقارير بجودة أكاديمية، وتوثيق تقني، وعروض تقديمية مقنعة.',
    'service4-title': 'إرشاد شخصي لمشاريع الذكاء الاصطناعي',
    'service4-desc': 'إرشاد فردي من خبراء الذكاء الاصطناعي طوال رحلة مشروعك. توجيه شخصي، ومراجعات للكود، ونصائح استراتيجية لضمان نجاحك.',
    
    // Pricing Section
    'pricing-title': 'خطط الأسعار',
    'pricing-subtitle': 'اختر الخطة التي تناسب احتياجاتك',
    'pricing-recommended': 'موصى به',
    'pricing-cta': 'ابدأ الآن',
    
    'pricing-free-tier': 'مجاني',
    'pricing-free-desc': 'استشارة أولية وملاحظات على فكرة مشروعك',
    'pricing-free-feature1': 'استشارة لمدة 30 دقيقة',
    'pricing-free-feature2': 'تقييم فكرة المشروع',
    'pricing-free-feature3': 'إرشاد أساسي',
    'pricing-free-feature4': 'دعم عبر البريد الإلكتروني',
    
    'pricing-standard-tier': 'قياسي',
    'pricing-standard-desc': 'دعم كامل للمشروع مع إرشاد من الخبراء',
    'pricing-standard-feature1': 'دعم كامل لتطوير المشروع',
    'pricing-standard-feature2': 'مراجعة وتحسين الكود',
    'pricing-standard-feature3': 'توثيق تقني',
    'pricing-standard-feature4': 'جلسات إرشاد أسبوعية',
    'pricing-standard-feature5': 'دعم عبر البريد الإلكتروني والدردشة',
    
    'pricing-premium-tier': 'متميز',
    'pricing-premium-desc': 'دعم شامل مع وصول ذو أولوية',
    'pricing-premium-feature1': 'كل ما في الخطة القياسية',
    'pricing-premium-feature2': 'دعم ذو أولوية (24/7)',
    'pricing-premium-feature3': 'إنشاء عروض تقديمية احترافية',
    'pricing-premium-feature4': 'كتابة تقارير أكاديمية',
    'pricing-premium-feature5': 'مراجعات غير محدودة',
    'pricing-premium-feature6': 'جلسات مكالمات فيديو',
    
    // Common UI Elements
    'btn-learn-more': 'اعرف المزيد',
    'btn-get-started': 'ابدأ الآن',
    'btn-contact-us': 'اتصل بنا',
    'btn-view-details': 'عرض التفاصيل',
    'view-details': 'عرض التفاصيل',
    'btn-close': 'إغلاق',
    'btn-submit': 'إرسال',
    'btn-send': 'إرسال الرسالة',
    'btn-read-more': 'اقرأ المزيد',
    
    // Common Labels
    'label-name': 'الاسم',
    'label-email': 'البريد الإلكتروني',
    'label-phone': 'الهاتف',
    'label-message': 'الرسالة',
    'label-subject': 'الموضوع',
    'label-language': 'اللغة',
    'label-required': 'مطلوب',
    
    // Common Messages
    'msg-loading': 'جاري التحميل...',
    'msg-success': 'نجح!',
    'msg-error': 'حدث خطأ',
    'msg-thank-you': 'شكراً لرسالتك',
    'msg-will-contact': 'سنتواصل معك قريباً',
    
    // Common Placeholders
    'placeholder-name': 'أدخل اسمك',
    'placeholder-email': 'أدخل بريدك الإلكتروني',
    'placeholder-phone': 'أدخل رقم هاتفك',
    'placeholder-message': 'أخبرنا عن مشروعك أو سؤالك',
    'placeholder-search': 'بحث...',
    
    // Contact Page
    'contact-title': 'تواصل معنا',
    'contact-subtitle': 'هل لديك سؤال أو تحتاج مساعدة في مشروع الذكاء الاصطناعي؟ نحن هنا للمساعدة!',
    'contact-form-title': 'أرسل لنا رسالة',
    'contact-methods-title': 'طرق أخرى للتواصل معنا',
    'contact-whatsapp-title': 'واتساب',
    'contact-whatsapp-desc': 'تحدث معنا مباشرة للحصول على ردود سريعة',
    'contact-email-title': 'البريد الإلكتروني',
    'contact-email-desc': 'أرسل لنا بريداً إلكترونياً وسنرد خلال 24 ساعة',
    'btn-whatsapp': 'راسلنا على واتساب',
    'btn-email': 'راسلنا عبر البريد',
    'msg-sending': 'جاري الإرسال...',
    'msg-form-success': 'شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
    'msg-form-error': 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا عبر البريد الإلكتروني أو واتساب.',
    'error-required': 'هذا الحقل مطلوب',
    'error-email-invalid': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    'error-form-validation': 'يرجى إصلاح الأخطاء أعلاه',
    
    // Accessibility
    'aria-menu': 'القائمة الرئيسية',
    'aria-close-menu': 'إغلاق القائمة',
    'aria-open-menu': 'فتح القائمة',
    'aria-language-switcher': 'مبدل اللغة',
    
    // About Page - Company Introduction
    'about-intro-title': 'عن فكتراي',
    'about-intro-text': 'فكتراي هي شركة استشارات هندسة الذكاء الاصطناعي الرائدة المكرسة لتمكين الطلاب في جميع أنحاء الشرق الأوسط - وخاصة في المملكة العربية السعودية وقطر والإمارات العربية المتحدة - للتفوق في مشاريع الذكاء الاصطناعي الخاصة بهم. نحن نفهم التحديات التي يواجهها الطلاب عند العمل على مهام الذكاء الاصطناعي المعقدة ومشاريع التخرج والأوراق البحثية. مهمتنا هي سد الفجوة بين المتطلبات الأكاديمية وتطبيق الذكاء الاصطناعي في العالم الحقيقي من خلال توفير الإرشاد من الخبراء والتوجيه التقني ودعم التوثيق المهني.',
    'about-intro-text2': 'مع خبرة عميقة في معالجة اللغة الطبيعية والتعلم الآلي والرؤية الحاسوبية وتقنيات الذكاء الاصطناعي الناشئة، نساعد الطلاب على تحويل أفكارهم إلى مشاريع مصقولة واحترافية تلبي أعلى المعايير الأكاديمية. سواء كنت تبني نظام معالجة اللغة الطبيعية العربية، أو تطور نموذج تعلم آلي تنبؤي، أو تنشئ تطبيق رؤية حاسوبية، فإن فكتراي هي شريكك الموثوق في تحقيق التميز الأكاديمي.',
    
    // About Page - Team Section
    'team-title': 'فريقنا من الخبراء',
    'team-subtitle': 'تعرف على خبراء الذكاء الاصطناعي المكرسين لنجاحك',
    'team-member1-name': 'د. أحمد الراشد',
    'team-member1-role': 'قائد هندسة الذكاء الاصطناعي',
    'team-member1-bio': 'دكتوراه في الذكاء الاصطناعي مع أكثر من 10 سنوات من الخبرة في معالجة اللغة الطبيعية والتعلم الآلي. متخصص في معالجة اللغة العربية.',
    'team-member2-name': 'د. فاطمة المنصوري',
    'team-member2-role': 'أخصائية الرؤية الحاسوبية',
    'team-member2-bio': 'خبيرة في التعلم العميق وتطبيقات الرؤية الحاسوبية. باحثة منشورة مع التركيز على حلول الذكاء الاصطناعي في العالم الحقيقي.',
    'team-member3-name': 'عمر الثاني',
    'team-member3-role': 'مهندس حلول التعلم الآلي',
    'team-member3-bio': 'متخصص في بناء أنظمة التعلم الآلي القابلة للتطوير والتحليلات التنبؤية. شغوف بتوجيه الطلاب.',
    'team-member4-name': 'سارة الخليفة',
    'team-member4-role': 'مستشارة علوم البيانات',
    'team-member4-bio': 'خبيرة في تحليل البيانات والنمذجة الإحصائية وتوثيق مشاريع الذكاء الاصطناعي. تساعد الطلاب على تقديم أعمالهم بشكل احترافي.',
    
    // About Page - Mission and Vision
    'mission-title': 'مهمتنا',
    'mission-text': 'تمكين الطلاب في جميع أنحاء الشرق الأوسط من خلال التوجيه الخبير في هندسة الذكاء الاصطناعي، وسد الفجوة بين المتطلبات الأكاديمية والتطبيق في العالم الحقيقي. نحن ملتزمون بتوفير الإرشاد الشخصي والتميز التقني ودعم التوثيق المهني الذي يمكّن الطلاب من التفوق في مشاريع الذكاء الاصطناعي وتحقيق النجاح الأكاديمي.',
    'vision-title': 'رؤيتنا',
    'vision-text': 'أن نصبح الشريك الرائد في تعليم الذكاء الاصطناعي في الشرق الأوسط، معترف به لتحويل الطلاب إلى ممارسين واثقين في الذكاء الاصطناعي. نتصور مستقبلاً حيث يتمتع كل طالب بإمكانية الوصول إلى خبرة الذكاء الاصطناعي على مستوى عالمي، مما يمكنهم من المساهمة بشكل هادف في التقدم التكنولوجي للمنطقة ونظام الابتكار.',
    
    // About Page - Timeline
    'timeline-title': 'رحلتنا',
    'timeline-subtitle': 'ننمو معاً مع طلابنا',
    'timeline-year1': '٢٠٢٢',
    'timeline-title1': 'التأسيس',
    'timeline-desc1': 'تأسست فكتراي برؤية لسد الفجوة بين التعليم الأكاديمي للذكاء الاصطناعي والتطبيق في العالم الحقيقي في الشرق الأوسط. بدأنا بفريق صغير من خبراء الذكاء الاصطناعي المتحمسين.',
    'timeline-year2': '٢٠٢٣',
    'timeline-title2': 'أول 100 طالب',
    'timeline-desc2': 'وصلنا إلى معلم مساعدة 100 طالب في المملكة العربية السعودية والإمارات وقطر لإكمال مشاريع الذكاء الاصطناعي بنجاح. وسعنا فريقنا ليشمل متخصصين في معالجة اللغة الطبيعية والرؤية الحاسوبية والتعلم الآلي.',
    'timeline-year3': '٢٠٢٤',
    'timeline-title3': 'الاعتراف الإقليمي',
    'timeline-desc3': 'أصبحنا معترفاً بنا كشريك استشاري رائد في الذكاء الاصطناعي للطلاب في المنطقة. أطلقنا برامج متخصصة لمشاريع معالجة اللغة العربية الطبيعية وأنشأنا شراكات مع الجامعات الكبرى.',
    'timeline-year4': '٢٠٢٥',
    'timeline-title4': 'الابتكار والنمو',
    'timeline-desc4': 'نواصل الابتكار ببرامج إرشاد جديدة ودعم متقدم لمشاريع الذكاء الاصطناعي، ونوسع نطاقنا لتمكين المزيد من الطلاب في جميع أنحاء الشرق الأوسط لتحقيق التميز في الذكاء الاصطناعي.',
    
    // Portfolio Page
    'portfolio-title': 'معرض أعمالنا',
    'portfolio-subtitle': 'استكشف مشاريع الذكاء الاصطناعي الناجحة التي ساعدنا الطلاب في بنائها',
    'portfolio-project1-title': 'تحليل المشاعر بمعالجة اللغة الطبيعية العربية',
    'portfolio-project1-desc': 'نظام متقدم لتحليل المشاعر للنصوص العربية باستخدام نموذج BERT',
    'portfolio-project2-title': 'كشف الأشياء للمدن الذكية',
    'portfolio-project2-desc': 'نظام كشف الأشياء في الوقت الفعلي لإدارة حركة المرور في المدن الذكية',
    'portfolio-project3-title': 'نموذج التنبؤ بالرعاية الصحية',
    'portfolio-project3-desc': 'نموذج تعلم آلي للتنبؤ بنتائج المرضى باستخدام البيانات السريرية',
    'portfolio-project4-title': 'روبوت محادثة ذكي متعدد اللغات',
    'portfolio-project4-desc': 'روبوت محادثة ذكي يدعم المحادثات بالعربية والإنجليزية والفرنسية',
    'portfolio-project5-title': 'محرك توصيات التجارة الإلكترونية',
    'portfolio-project5-desc': 'نظام توصيات منتجات مخصص باستخدام التصفية التعاونية',
    'portfolio-project6-title': 'تصنيف الصور الطبية',
    'portfolio-project6-desc': 'نموذج تعلم عميق لتصنيف الصور الطبية واكتشاف الشذوذات',
    'portfolio-project7-title': 'التنبؤ بالسلاسل الزمنية المالية',
    'portfolio-project7-desc': 'نموذج قائم على LSTM للتنبؤ بأسعار الأسهم واتجاهات السوق',
    'portfolio-project8-title': 'نظام التعرف على الكلام العربي',
    'portfolio-project8-desc': 'نظام تحويل الصوت إلى نص محسّن للهجات واللكنات العربية',
    
    // FAQ Page
    'faq-title': 'الأسئلة الشائعة',
    'faq-subtitle': 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا الاستشارية في الذكاء الاصطناعي',
    'faq-q1': 'ما نوع مشاريع الذكاء الاصطناعي التي تدعمونها؟',
    'faq-a1': 'ندعم جميع أنواع مشاريع الذكاء الاصطناعي بما في ذلك معالجة اللغة الطبيعية (NLP)، والرؤية الحاسوبية، ونماذج التعلم الآلي، وتطبيقات التعلم العميق، والمزيد. لدينا خبرة متخصصة في معالجة اللغة العربية الطبيعية، وتحليل المشاعر، وتصنيف النصوص، وكشف الأشياء، وتصنيف الصور، والنمذجة التنبؤية، وأنظمة التوصيات. سواء كنت تعمل على مشروع تخرج، أو ورقة بحثية، أو مهمة أكاديمية، يمكننا المساعدة.',
    'faq-q2': 'هل تساعدون في التقارير الأكاديمية والعروض التقديمية؟',
    'faq-a2': 'نعم! نقدم دعماً شاملاً للتوثيق الأكاديمي بما في ذلك تقارير المشاريع، والتوثيق التقني، والأوراق البحثية، وشرائح العروض التقديمية. يضمن فريقنا أن جميع الوثائق تلبي معايير الجامعة والمتطلبات الأكاديمية. نساعدك على تقديم عملك بشكل احترافي مع شروحات واضحة، واستشهادات مناسبة، ومرئيات مقنعة.',
    'faq-q3': 'هل تقدمون الدعم باللغة العربية؟',
    'faq-a3': 'بالتأكيد! نقدم دعماً كاملاً باللغة العربية والإنجليزية والفرنسية. يضم فريقنا متحدثين أصليين للعربية مع خبرة عميقة في معالجة اللغة العربية الطبيعية ومعالجة اللغة. يمكننا التواصل معك بلغتك المفضلة ومساعدتك في بناء مشاريع الذكاء الاصطناعي التي تعمل مع النصوص والكلام والبيانات العربية. نحن نفهم التحديات الفريدة للعمل مع اللغة العربية في تطبيقات الذكاء الاصطناعي.',
    'faq-q4': 'ما هي خطط الأسعار الخاصة بكم؟',
    'faq-a4': 'نقدم ثلاث مستويات تسعير: مجاني (0 دولار) للاستشارة الأولية وتقييم فكرة المشروع، قياسي (199 دولار) لدعم تطوير المشروع الكامل مع جلسات إرشاد أسبوعية، ومتميز (399 دولار) للدعم الشامل مع وصول ذو أولوية، وعروض تقديمية احترافية، ومراجعات غير محدودة. قم بزيارة صفحة الخدمات لدينا لرؤية الميزات التفصيلية لكل خطة واختيار الخطة التي تناسب احتياجاتك بشكل أفضل.',
    'faq-q5': 'كم من الوقت يستغرق إكمال المشروع؟',
    'faq-a5': 'تختلف الجداول الزمنية للمشروع حسب التعقيد والنطاق. يستغرق مشروع الذكاء الاصطناعي النموذجي من 4 إلى 8 أسابيع من الاستشارة الأولية إلى التسليم النهائي. قد تستغرق المشاريع البسيطة مثل نماذج التعلم الآلي الأساسية من 2 إلى 4 أسابيع، بينما قد تستغرق المشاريع المعقدة التي تتضمن مكونات متعددة أو تقنيات متقدمة من 8 إلى 12 أسبوعاً. خلال استشارتنا الأولية، سنقيم متطلبات مشروعك ونقدم جدولاً زمنياً واقعياً مصمماً خصيصاً لمواعيدك الأكاديمية النهائية.',
    'faq-q6': 'هل تقدمون التوجيه للطلاب في جميع المستويات؟',
    'faq-a6': 'نعم! نعمل مع الطلاب في جميع المستويات الأكاديمية - من طلاب البكالوريوس الذين يعملون على مشاريع الدورات إلى طلاب الدراسات العليا الذين يجرون أبحاثاً متقدمة. نهج الإرشاد لدينا مصمم خصيصاً لمستوى معرفتك الحالي وأهداف التعلم الخاصة بك. نشرح المفاهيم بوضوح، ونقدم إرشاداً عملياً، ونضمن أنك تفهم العمل حتى تتمكن من تقديم مشروعك والدفاع عنه بثقة.',
    'faq-q7': 'ما هي لغات البرمجة والأدوات التي تعملون بها؟',
    'faq-a7': 'نعمل بشكل أساسي مع Python، وهي المعيار الصناعي للذكاء الاصطناعي والتعلم الآلي. لدينا خبرة في الأطر والمكتبات الشائعة بما في ذلك TensorFlow و PyTorch و Scikit-learn و Keras و Hugging Face Transformers و OpenCV و NLTK و spaCy والمزيد. نعمل أيضاً مع أدوات مثل Jupyter Notebooks و Google Colab ومنصات السحابة المختلفة. إذا كان مشروعك يتطلب أدوات أو لغات محددة، يمكننا استيعاب معظم المتطلبات.',
    'faq-q8': 'كيف أبدأ؟',
    'faq-a8': 'البدء سهل! ببساطة اتصل بنا من خلال صفحة الاتصال أو واتساب أو البريد الإلكتروني. أخبرنا عن فكرة مشروعك والمتطلبات الأكاديمية والجدول الزمني. سنحدد موعداً لاستشارة أولية مجانية لمناقشة احتياجاتك والإجابة على أسئلتك والتوصية بأفضل نهج. بعد ذلك، يمكنك اختيار خطة تسعير وسنبدأ العمل معاً على مشروع الذكاء الاصطناعي الخاص بك. نحن هنا لمساعدتك على النجاح!'
  },
  fr: {
    // Navigation
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    
    // Home Page - Hero Section
    'hero-title': 'Conseil en ingénierie IA pour étudiants',
    'hero-subtitle': 'Accompagnement professionnel pour vos projets IA au Moyen-Orient',
    'hero-cta': 'Découvrir nos projets',
    
    // Home Page - Why Choose Us
    'why-choose-title': 'Pourquoi choisir VEKTRAI',
    'why-choose-subtitle': 'Nous offrons un soutien complet pour votre parcours en IA',
    'feature-mentorship-title': 'Mentorat d\'experts',
    'feature-mentorship-desc': 'Accompagnement individuel par des experts en ingénierie IA qui comprennent vos besoins académiques',
    'feature-expertise-title': 'Expertise technique',
    'feature-expertise-desc': 'Connaissance approfondie en NLP, ML, vision par ordinateur et technologies IA de pointe',
    'feature-reports-title': 'Rapports professionnels',
    'feature-reports-desc': 'Documentation et présentations de qualité académique conformes aux normes universitaires',
    
    // Home Page - Projects
    'projects-title': 'Nos projets',
    'projects-subtitle': 'Découvrez quelques projets IA réussis que nous avons aidé les étudiants à construire',
    'project1-title': 'Analyse de sentiment NLP',
    'project1-desc': 'Analyse de sentiment arabe utilisant le modèle BERT',
    'project2-title': 'Système de vision par ordinateur',
    'project2-desc': 'Détection d\'objets pour applications de ville intelligente',
    'project3-title': 'Modèle de prédiction ML',
    'project3-desc': 'Analyse prédictive pour données de santé',
    'view-all-projects': 'Voir tous les projets',
    
    // Home Page - Testimonials
    'testimonials-title': 'Ce que disent nos étudiants',
    'testimonials-subtitle': 'Écoutez les étudiants qui ont réussi avec notre accompagnement',
    'testimonial1-text': 'VEKTRAI m\'a aidé à transformer mon idée de base en un projet IA professionnel. Leur mentorat a été inestimable pour mon projet de fin d\'études.',
    'testimonial1-name': 'Ahmed Al-Rashid',
    'testimonial1-info': 'Étudiant en informatique, Université King Saud',
    'testimonial2-text': 'L\'expertise de l\'équipe en NLP arabe était exactement ce dont j\'avais besoin. Ils m\'ont guidé à chaque étape et mon projet a reçu les meilleures notes.',
    'testimonial2-name': 'Fatima Al-Mansoori',
    'testimonial2-info': 'Étudiante en ingénierie IA, Université des EAU',
    'testimonial3-text': 'Professionnels, compétents et patients. VEKTRAI a rendu les concepts ML complexes faciles à comprendre et à mettre en œuvre dans ma recherche.',
    'testimonial3-name': 'Omar Al-Thani',
    'testimonial3-info': 'Étudiant en science des données, Université du Qatar',
    
    // Home Page - CTA
    'cta-title': 'Prêt à démarrer votre projet IA?',
    'cta-subtitle': 'Obtenez des conseils d\'experts et donnez vie à vos idées IA avec un soutien professionnel',
    'cta-button': 'Contactez-nous aujourd\'hui',
    
    // Footer
    'footer-about': 'À propos de VEKTRAI',
    'footer-description': 'Conseil en ingénierie IA pour étudiants au Moyen-Orient',
    'footer-quick-links': 'Liens rapides',
    'footer-contact': 'Contact',
    'footer-rights': 'Tous droits réservés',
    
    // Services Page
    'services-title': 'Nos Services',
    'services-subtitle': 'Services de conseil en IA complets adaptés aux étudiants',
    'service1-title': 'Développement de projets IA',
    'service1-desc': 'Support de bout en bout pour construire votre projet IA du concept à la mise en œuvre. Nous vous aidons à concevoir, développer et déployer des solutions IA professionnelles qui répondent aux normes académiques.',
    'service2-title': 'Assistance NLP et ML',
    'service2-desc': 'Conseils d\'experts en traitement du langage naturel et apprentissage automatique. Support spécialisé pour le NLP arabe, l\'analyse de sentiment, la classification de texte et la modélisation prédictive.',
    'service3-title': 'Support de rapports et présentations',
    'service3-desc': 'Création de documentation et de présentations professionnelles pour vos projets IA. Rapports de qualité académique, documentation technique et présentations convaincantes.',
    'service4-title': 'Mentorat personnel de projet IA',
    'service4-desc': 'Mentorat individuel par des experts en IA tout au long de votre parcours de projet. Conseils personnalisés, revues de code et conseils stratégiques pour assurer votre succès.',
    
    // Pricing Section
    'pricing-title': 'Plans tarifaires',
    'pricing-subtitle': 'Choisissez le plan qui correspond à vos besoins',
    'pricing-recommended': 'Recommandé',
    'pricing-cta': 'Commencer',
    
    'pricing-free-tier': 'Gratuit',
    'pricing-free-desc': 'Consultation initiale et retour sur votre idée de projet',
    'pricing-free-feature1': 'Consultation de 30 minutes',
    'pricing-free-feature2': 'Évaluation de l\'idée de projet',
    'pricing-free-feature3': 'Conseils de base',
    'pricing-free-feature4': 'Support par email',
    
    'pricing-standard-tier': 'Standard',
    'pricing-standard-desc': 'Support complet du projet avec conseils d\'experts',
    'pricing-standard-feature1': 'Support complet du développement',
    'pricing-standard-feature2': 'Revue et optimisation du code',
    'pricing-standard-feature3': 'Documentation technique',
    'pricing-standard-feature4': 'Sessions de mentorat hebdomadaires',
    'pricing-standard-feature5': 'Support email et chat',
    
    'pricing-premium-tier': 'Premium',
    'pricing-premium-desc': 'Support complet avec accès prioritaire',
    'pricing-premium-feature1': 'Tout ce qui est dans Standard',
    'pricing-premium-feature2': 'Support prioritaire (24/7)',
    'pricing-premium-feature3': 'Création de présentations professionnelles',
    'pricing-premium-feature4': 'Rédaction de rapports académiques',
    'pricing-premium-feature5': 'Révisions illimitées',
    'pricing-premium-feature6': 'Sessions d\'appel vidéo',
    
    // Common UI Elements
    'btn-learn-more': 'En savoir plus',
    'btn-get-started': 'Commencer',
    'btn-contact-us': 'Nous contacter',
    'btn-view-details': 'Voir les détails',
    'view-details': 'Voir les détails',
    'btn-close': 'Fermer',
    'btn-submit': 'Soumettre',
    'btn-send': 'Envoyer le message',
    'btn-read-more': 'Lire la suite',
    
    // Common Labels
    'label-name': 'Nom',
    'label-email': 'Email',
    'label-phone': 'Téléphone',
    'label-message': 'Message',
    'label-subject': 'Sujet',
    'label-language': 'Langue',
    'label-required': 'Requis',
    
    // Common Messages
    'msg-loading': 'Chargement...',
    'msg-success': 'Succès!',
    'msg-error': 'Erreur survenue',
    'msg-thank-you': 'Merci pour votre message',
    'msg-will-contact': 'Nous vous contactons bientôt',
    
    // Common Placeholders
    'placeholder-name': 'Entrez votre nom',
    'placeholder-email': 'Entrez votre email',
    'placeholder-phone': 'Entrez votre numéro de téléphone',
    'placeholder-message': 'Parlez-nous de votre projet ou question',
    'placeholder-search': 'Rechercher...',
    
    // Contact Page
    'contact-title': 'Contactez-nous',
    'contact-subtitle': 'Vous avez une question ou besoin d\'aide pour votre projet IA? Nous sommes là pour vous aider!',
    'contact-form-title': 'Envoyez-nous un message',
    'contact-methods-title': 'Autres moyens de nous joindre',
    'contact-whatsapp-title': 'WhatsApp',
    'contact-whatsapp-desc': 'Discutez avec nous directement pour des réponses rapides',
    'contact-email-title': 'Email',
    'contact-email-desc': 'Envoyez-nous un email et nous répondrons dans les 24 heures',
    'btn-whatsapp': 'Message sur WhatsApp',
    'btn-email': 'Envoyez-nous un email',
    'msg-sending': 'Envoi en cours...',
    'msg-form-success': 'Merci! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.',
    'msg-form-error': 'Échec de l\'envoi du message. Veuillez réessayer ou nous contacter par email ou WhatsApp.',
    'error-required': 'Ce champ est requis',
    'error-email-invalid': 'Veuillez entrer une adresse email valide',
    'error-form-validation': 'Veuillez corriger les erreurs ci-dessus',
    
    // Accessibility
    'aria-menu': 'Menu principal',
    'aria-close-menu': 'Fermer le menu',
    'aria-open-menu': 'Ouvrir le menu',
    'aria-language-switcher': 'Sélecteur de langue',
    
    // About Page - Company Introduction
    'about-intro-title': 'À propos de VEKTRAI',
    'about-intro-text': 'VEKTRAI est une entreprise de conseil en ingénierie IA de premier plan dédiée à l\'autonomisation des étudiants du Moyen-Orient - en particulier en Arabie saoudite, au Qatar et aux Émirats arabes unis - pour exceller dans leurs projets d\'intelligence artificielle. Nous comprenons les défis auxquels les étudiants sont confrontés lorsqu\'ils travaillent sur des devoirs IA complexes, des projets de fin d\'études et des articles de recherche. Notre mission est de combler le fossé entre les exigences académiques et la mise en œuvre de l\'IA dans le monde réel en fournissant un mentorat d\'experts, des conseils techniques et un soutien à la documentation professionnelle.',
    'about-intro-text2': 'Avec une expertise approfondie en traitement du langage naturel, apprentissage automatique, vision par ordinateur et technologies IA émergentes, nous aidons les étudiants à transformer leurs idées en projets professionnels et soignés qui répondent aux normes académiques les plus élevées. Que vous construisiez un système NLP arabe, développiez un modèle ML prédictif ou créiez une application de vision par ordinateur, VEKTRAI est votre partenaire de confiance pour atteindre l\'excellence académique.',
    
    // About Page - Team Section
    'team-title': 'Notre équipe d\'experts',
    'team-subtitle': 'Rencontrez les experts en IA dédiés à votre succès',
    'team-member1-name': 'Dr. Ahmed Al-Rashid',
    'team-member1-role': 'Responsable ingénierie IA',
    'team-member1-bio': 'Doctorat en IA avec plus de 10 ans d\'expérience en NLP et apprentissage automatique. Spécialisé dans le traitement de la langue arabe.',
    'team-member2-name': 'Dr. Fatima Al-Mansoori',
    'team-member2-role': 'Spécialiste vision par ordinateur',
    'team-member2-bio': 'Experte en apprentissage profond et applications de vision par ordinateur. Chercheuse publiée axée sur les solutions IA du monde réel.',
    'team-member3-name': 'Omar Al-Thani',
    'team-member3-role': 'Architecte solutions ML',
    'team-member3-bio': 'Spécialisé dans la construction de systèmes ML évolutifs et l\'analyse prédictive. Passionné par le mentorat des étudiants.',
    'team-member4-name': 'Sarah Al-Khalifa',
    'team-member4-role': 'Consultante en science des données',
    'team-member4-bio': 'Experte en analyse de données, modélisation statistique et documentation de projets IA. Aide les étudiants à présenter leur travail professionnellement.',
    
    // About Page - Mission and Vision
    'mission-title': 'Notre mission',
    'mission-text': 'Autonomiser les étudiants du Moyen-Orient avec des conseils d\'experts en ingénierie IA, comblant le fossé entre les exigences académiques et la mise en œuvre dans le monde réel. Nous nous engageons à fournir un mentorat personnalisé, l\'excellence technique et un soutien à la documentation professionnelle qui permet aux étudiants d\'exceller dans leurs projets IA et d\'atteindre le succès académique.',
    'vision-title': 'Notre vision',
    'vision-text': 'Devenir le partenaire éducatif IA de premier plan au Moyen-Orient, reconnu pour transformer les étudiants en praticiens IA confiants. Nous envisageons un avenir où chaque étudiant a accès à une expertise IA de classe mondiale, leur permettant de contribuer de manière significative à l\'avancement technologique de la région et à l\'écosystème d\'innovation.',
    
    // About Page - Timeline
    'timeline-title': 'Notre parcours',
    'timeline-subtitle': 'Grandir ensemble avec nos étudiants',
    'timeline-year1': '2022',
    'timeline-title1': 'Fondation',
    'timeline-desc1': 'VEKTRAI a été fondée avec la vision de combler le fossé entre l\'éducation académique en IA et la mise en œuvre dans le monde réel au Moyen-Orient. Commencé avec une petite équipe d\'experts IA passionnés.',
    'timeline-year2': '2023',
    'timeline-title2': 'Premiers 100 étudiants',
    'timeline-desc2': 'Atteint le jalon d\'aider 100 étudiants en Arabie saoudite, aux EAU et au Qatar à terminer avec succès leurs projets IA. Élargi notre équipe pour inclure des spécialistes en NLP, vision par ordinateur et ML.',
    'timeline-year3': '2024',
    'timeline-title3': 'Reconnaissance régionale',
    'timeline-desc3': 'Reconnu comme partenaire de conseil IA de premier plan pour les étudiants de la région. Lancé des programmes spécialisés pour les projets NLP arabes et établi des partenariats avec les grandes universités.',
    'timeline-year4': '2025',
    'timeline-title4': 'Innovation et croissance',
    'timeline-desc4': 'Continuer à innover avec de nouveaux programmes de mentorat, un soutien avancé aux projets IA, et élargir notre portée pour autonomiser encore plus d\'étudiants au Moyen-Orient à atteindre l\'excellence en IA.',
    
    // Portfolio Page
    'portfolio-title': 'Notre Portfolio',
    'portfolio-subtitle': 'Découvrez les projets IA réussis que nous avons aidé les étudiants à construire',
    'portfolio-project1-title': 'Analyse de sentiment NLP arabe',
    'portfolio-project1-desc': 'Système avancé d\'analyse de sentiment pour texte arabe utilisant le modèle transformateur BERT',
    'portfolio-project2-title': 'Détection d\'objets pour ville intelligente',
    'portfolio-project2-desc': 'Système de détection d\'objets en temps réel pour la gestion du trafic urbain intelligent',
    'portfolio-project3-title': 'Modèle de prédiction en santé',
    'portfolio-project3-desc': 'Modèle d\'apprentissage automatique pour prédire les résultats des patients à partir de données cliniques',
    'portfolio-project4-title': 'Chatbot IA multilingue',
    'portfolio-project4-desc': 'Chatbot intelligent supportant les conversations en arabe, anglais et français',
    'portfolio-project5-title': 'Moteur de recommandation e-commerce',
    'portfolio-project5-desc': 'Système de recommandation de produits personnalisé utilisant le filtrage collaboratif',
    'portfolio-project6-title': 'Classification d\'images médicales',
    'portfolio-project6-desc': 'Modèle d\'apprentissage profond pour classifier les images médicales et détecter les anomalies',
    'portfolio-project7-title': 'Prévision de séries temporelles financières',
    'portfolio-project7-desc': 'Modèle basé sur LSTM pour prédire les prix des actions et les tendances du marché',
    'portfolio-project8-title': 'Système de reconnaissance vocale arabe',
    'portfolio-project8-desc': 'Système de conversion voix-texte optimisé pour les dialectes et accents arabes',
    
    // FAQ Page
    'faq-title': 'Questions Fréquemment Posées',
    'faq-subtitle': 'Trouvez des réponses aux questions courantes sur nos services de conseil en IA',
    'faq-q1': 'Quels types de projets IA soutenez-vous?',
    'faq-a1': 'Nous soutenons tous les types de projets IA, y compris le traitement du langage naturel (NLP), la vision par ordinateur, les modèles d\'apprentissage automatique, les applications d\'apprentissage profond, et plus encore. Nous avons une expertise spécialisée en NLP arabe, analyse de sentiment, classification de texte, détection d\'objets, classification d\'images, modélisation prédictive et systèmes de recommandation. Que vous travailliez sur un projet de fin d\'études, un article de recherche ou un devoir académique, nous pouvons vous aider.',
    'faq-q2': 'Aidez-vous avec les rapports académiques et les présentations?',
    'faq-a2': 'Oui! Nous fournissons un soutien complet pour la documentation académique, y compris les rapports de projet, la documentation technique, les articles de recherche et les diapositives de présentation. Notre équipe s\'assure que toute la documentation répond aux normes universitaires et aux exigences académiques. Nous vous aidons à présenter votre travail professionnellement avec des explications claires, des citations appropriées et des visuels convaincants.',
    'faq-q3': 'Fournissez-vous un support en arabe?',
    'faq-a3': 'Absolument! Nous fournissons un support complet en arabe, anglais et français. Notre équipe comprend des locuteurs natifs arabes avec une expertise approfondie en NLP arabe et traitement du langage. Nous pouvons communiquer avec vous dans votre langue préférée et vous aider à construire des projets IA qui fonctionnent avec du texte, de la parole et des données arabes. Nous comprenons les défis uniques du travail avec l\'arabe dans les applications IA.',
    'faq-q4': 'Quels sont vos plans tarifaires?',
    'faq-a4': 'Nous proposons trois niveaux tarifaires: Freemium (0$) pour la consultation initiale et l\'évaluation de l\'idée de projet, Standard (199$) pour un support complet de développement de projet avec des sessions de mentorat hebdomadaires, et Premium (399$) pour un support complet avec accès prioritaire, présentations professionnelles et révisions illimitées. Visitez notre page Services pour voir les fonctionnalités détaillées de chaque plan et choisir celui qui correspond le mieux à vos besoins.',
    'faq-q5': 'Combien de temps faut-il pour terminer un projet?',
    'faq-a5': 'Les délais de projet varient en fonction de la complexité et de la portée. Un projet IA typique prend 4 à 8 semaines de la consultation initiale à la livraison finale. Les projets simples comme les modèles ML de base peuvent prendre 2 à 4 semaines, tandis que les projets complexes impliquant plusieurs composants ou techniques avancées peuvent prendre 8 à 12 semaines. Lors de notre consultation initiale, nous évaluerons les exigences de votre projet et fournirons un calendrier réaliste adapté à vos échéances académiques.',
    'faq-q6': 'Fournissez-vous des conseils aux étudiants de tous niveaux?',
    'faq-a6': 'Oui! Nous travaillons avec des étudiants de tous niveaux académiques - des étudiants de premier cycle travaillant sur des projets de cours aux étudiants diplômés menant des recherches avancées. Notre approche de mentorat est adaptée à votre niveau de connaissances actuel et à vos objectifs d\'apprentissage. Nous expliquons les concepts clairement, fournissons des conseils pratiques et nous assurons que vous comprenez le travail afin que vous puissiez présenter et défendre votre projet en toute confiance.',
    'faq-q7': 'Avec quels langages de programmation et outils travaillez-vous?',
    'faq-a7': 'Nous travaillons principalement avec Python, qui est la norme de l\'industrie pour l\'IA et l\'apprentissage automatique. Nous avons une expertise dans les frameworks et bibliothèques populaires, notamment TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face Transformers, OpenCV, NLTK, spaCy, et plus encore. Nous travaillons également avec des outils comme Jupyter Notebooks, Google Colab et diverses plateformes cloud. Si votre projet nécessite des outils ou des langages spécifiques, nous pouvons répondre à la plupart des exigences.',
    'faq-q8': 'Comment puis-je commencer?',
    'faq-a8': 'Commencer est facile! Contactez-nous simplement via notre page Contact, WhatsApp ou email. Parlez-nous de votre idée de projet, de vos exigences académiques et de votre calendrier. Nous planifierons une consultation initiale gratuite pour discuter de vos besoins, répondre à vos questions et recommander la meilleure approche. Après cela, vous pouvez choisir un plan tarifaire et nous commencerons à travailler ensemble sur votre projet IA. Nous sommes là pour vous aider à réussir!'
  }
};

// Get translation for a key
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

// Update all elements with data-lang-key attributes
function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    const translation = getTranslation(key, lang);
    
    // Update text content
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });
  
  // Update HTML direction for RTL languages
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }
  
  // Save language preference
  localStorage.setItem('preferred-language', lang);
  
  // Update active language button
  updateActiveLanguageButton(lang);
}

// Update active language button styling
function updateActiveLanguageButton(lang) {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Initialize language switcher
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Load saved language preference or default to English
  const savedLang = localStorage.getItem('preferred-language') || 'en';
  updateLanguage(savedLang);
  
  // Add click handlers to language buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });
}


// ===================================
// Contact Form Validation and Submission
// ===================================

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  // Add input event listeners for real-time validation
  const inputs = contactForm.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });
  
  // Handle form submission
  contactForm.addEventListener('submit', handleFormSubmit);
}

// Validate individual field
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = '';
  
  // Check if required field is empty
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  }
  
  // Email validation
  if (fieldName === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }
  
  // Message length validation
  if (fieldName === 'message' && value && value.length < 10) {
    isValid = false;
    errorMessage = 'Message must be at least 10 characters';
  }
  
  // Update field UI based on validation
  if (!isValid) {
    field.classList.add('error');
    showFieldError(field, errorMessage);
  } else {
    field.classList.remove('error');
    removeFieldError(field);
  }
  
  return isValid;
}

// Show field error message
function showFieldError(field, message) {
  // Remove existing error message if any
  removeFieldError(field);
  
  // Create and insert error message
  const errorDiv = document.createElement('span');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

// Remove field error message
function removeFieldError(field) {
  const existingError = field.parentNode.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }
}

// Validate entire form
function validateForm(form) {
  const inputs = form.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

// Handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Form submit triggered');
  
  const form = event.target;
  const formMessage = document.getElementById('formMessage');
  const submitButton = form.querySelector('button[type="submit"]');
  
  console.log('Form action:', form.action);
  
  // Validate form before submission
  if (!validateForm(form)) {
    console.log('Form validation failed');
    showFormMessage('error', 'Please fix the errors above');
    return;
  }
  
  console.log('Form validation passed');
  
  // Disable submit button and show loading state
  const originalButtonText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Prepare form data
  const formData = new FormData(form);
  
  // Log form data
  console.log('Form data:');
  for (let [key, value] of formData.entries()) {
    console.log(key + ': ' + value);
  }
  
  try {
    console.log('Submitting to Formspree...');
    
    // Submit form to Formspree
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    console.log('Response status:', response.status);
    
    if (response.ok) {
      // Success
      console.log('Form submitted successfully!');
      showFormMessage('success', '✅ Thank you! Your message has been sent successfully. We will get back to you soon.');
      
      // Clear form fields
      form.reset();
      
      // Remove any error states
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.classList.remove('error');
        const errorDiv = input.parentElement.querySelector('.field-error');
        if (errorDiv) {
          errorDiv.remove();
        }
      });
    } else {
      // Server error
      console.log('Server error');
      const data = await response.json();
      console.log('Error data:', data);
      
      if (data.errors) {
        const errorMessages = data.errors.map(error => error.message).join(', ');
        showFormMessage('error', '❌ ' + errorMessages);
      } else {
        showFormMessage('error', '❌ Failed to send message. Please try again.');
      }
    }
  } catch (error) {
    // Network or other error
    console.error('Form submission error:', error);
    showFormMessage('error', '❌ Failed to send message. Please try again or contact us via email or WhatsApp.');
  } finally {
    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
    console.log('Form submission complete');
  }
}

// Show form message (success or error)
function showFormMessage(type, message) {
  const formMessage = document.getElementById('formMessage');
  
  if (!formMessage) {
    console.error('formMessage element not found');
    return;
  }
  
  console.log('Showing message:', type, message);
  
  formMessage.className = 'form-message ' + type;
  formMessage.textContent = message;
  formMessage.style.display = 'block';
  
  // Scroll to message
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // Auto-hide success message after 8 seconds
  if (type === 'success') {
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 8000);
  }
}

// Contact form is initialized in the main DOMContentLoaded listener above


// ===================================
// FAQ Accordion Functionality
// ===================================

function initFAQAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length === 0) return;
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const itemHeader = item.querySelector('.accordion-header');
        if (itemHeader) {
          itemHeader.setAttribute('aria-expanded', 'false');
        }
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        accordionItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
    
    // Keyboard accessibility - Enter and Space keys
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// FAQ accordion is initialized in the main DOMContentLoaded listener above


// ===================================
// Contact Form Validation (Duplicate Removed)
// ===================================
// The proper initContactForm function with Formspree integration is defined above.
// This duplicate has been removed to allow proper form submission.
