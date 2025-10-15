/* ===================================
   Portfolio Modal Functionality
   =================================== */

// Project data with detailed information
const projectsData = {
  1: {
    id: 1,
    title: 'Arabic NLP Sentiment Analysis',
    titleAr: 'تحليل المشاعر بمعالجة اللغة الطبيعية العربية',
    titleFr: 'Analyse de sentiment NLP arabe',
    description: 'Advanced sentiment analysis system for Arabic text using BERT transformer model. This project analyzes social media posts, customer reviews, and news articles to determine sentiment polarity and emotional tone in Arabic language content.',
    descriptionAr: 'نظام متقدم لتحليل المشاعر للنصوص العربية باستخدام نموذج BERT. يحلل هذا المشروع منشورات وسائل التواصل الاجتماعي ومراجعات العملاء والمقالات الإخبارية لتحديد قطبية المشاعر والنبرة العاطفية في محتوى اللغة العربية.',
    descriptionFr: 'Système avancé d\'analyse de sentiment pour texte arabe utilisant le modèle transformateur BERT. Ce projet analyse les publications sur les réseaux sociaux, les avis clients et les articles de presse pour déterminer la polarité des sentiments et le ton émotionnel dans le contenu en langue arabe.',
    image: '/assets/images/portfolio/project1.jpg',
    tags: ['BERT', 'Python', 'FastAPI', 'Arabic NLP'],
    client: 'Computer Science Student - King Saud University',
    year: '2024',
    technologies: ['BERT Transformer', 'PyTorch', 'FastAPI', 'Hugging Face', 'Arabic Text Processing'],
    features: [
      'Multi-dialect Arabic support',
      'Real-time sentiment classification',
      'Emotion detection (joy, anger, sadness, etc.)',
      'RESTful API for integration',
      'Web dashboard for visualization'
    ]
  },
  2: {
    id: 2,
    title: 'Smart City Object Detection',
    titleAr: 'كشف الأشياء للمدن الذكية',
    titleFr: 'Détection d\'objets pour ville intelligente',
    description: 'Real-time object detection system for smart city traffic management using YOLO architecture. Detects vehicles, pedestrians, and traffic violations to improve urban traffic flow and safety.',
    descriptionAr: 'نظام كشف الأشياء في الوقت الفعلي لإدارة حركة المرور في المدن الذكية باستخدام بنية YOLO. يكتشف المركبات والمشاة ومخالفات المرور لتحسين تدفق حركة المرور الحضرية والسلامة.',
    descriptionFr: 'Système de détection d\'objets en temps réel pour la gestion du trafic urbain intelligent utilisant l\'architecture YOLO. Détecte les véhicules, les piétons et les infractions au code de la route pour améliorer la fluidité et la sécurité du trafic urbain.',
    image: '/assets/images/portfolio/project2.jpg',
    tags: ['YOLO', 'PyTorch', 'OpenCV', 'Computer Vision'],
    client: 'Engineering Student - UAE University',
    year: '2024',
    technologies: ['YOLOv8', 'PyTorch', 'OpenCV', 'CUDA', 'Edge Computing'],
    features: [
      'Real-time vehicle detection and tracking',
      'Pedestrian crossing detection',
      'Traffic violation identification',
      'Multi-camera support',
      'Cloud-based analytics dashboard'
    ]
  },
  3: {
    id: 3,
    title: 'Healthcare Prediction Model',
    titleAr: 'نموذج التنبؤ بالرعاية الصحية',
    titleFr: 'Modèle de prédiction en santé',
    description: 'Machine learning model for predicting patient outcomes using clinical data. Utilizes ensemble methods to predict hospital readmission risk and patient recovery timelines.',
    descriptionAr: 'نموذج تعلم آلي للتنبؤ بنتائج المرضى باستخدام البيانات السريرية. يستخدم طرق المجموعة للتنبؤ بمخاطر إعادة الإدخال إلى المستشفى والجداول الزمنية لتعافي المرضى.',
    descriptionFr: 'Modèle d\'apprentissage automatique pour prédire les résultats des patients à partir de données cliniques. Utilise des méthodes d\'ensemble pour prédire le risque de réadmission à l\'hôpital et les délais de récupération des patients.',
    image: '/assets/images/portfolio/project3.jpg',
    tags: ['Scikit-learn', 'XGBoost', 'Pandas', 'Healthcare'],
    client: 'Data Science Student - Qatar University',
    year: '2024',
    technologies: ['XGBoost', 'Random Forest', 'Scikit-learn', 'Pandas', 'SHAP'],
    features: [
      'Patient readmission prediction',
      'Risk stratification',
      'Feature importance analysis',
      'Model interpretability with SHAP',
      'Clinical decision support interface'
    ]
  },
  4: {
    id: 4,
    title: 'Multilingual AI Chatbot',
    titleAr: 'روبوت محادثة ذكي متعدد اللغات',
    titleFr: 'Chatbot IA multilingue',
    description: 'Intelligent chatbot supporting Arabic, English, and French conversations. Built with GPT and LangChain for natural language understanding and context-aware responses.',
    descriptionAr: 'روبوت محادثة ذكي يدعم المحادثات بالعربية والإنجليزية والفرنسية. مبني باستخدام GPT و LangChain لفهم اللغة الطبيعية والاستجابات الواعية بالسياق.',
    descriptionFr: 'Chatbot intelligent supportant les conversations en arabe, anglais et français. Construit avec GPT et LangChain pour la compréhension du langage naturel et les réponses contextuelles.',
    image: '/assets/images/portfolio/project4.jpg',
    tags: ['GPT', 'LangChain', 'React', 'NLP'],
    client: 'AI Student - King Fahd University',
    year: '2024',
    technologies: ['GPT-4', 'LangChain', 'React', 'Node.js', 'MongoDB'],
    features: [
      'Multilingual support (Arabic, English, French)',
      'Context-aware conversations',
      'Intent recognition',
      'Custom knowledge base integration',
      'Real-time translation'
    ]
  },
  5: {
    id: 5,
    title: 'E-commerce Recommendation Engine',
    titleAr: 'محرك توصيات التجارة الإلكترونية',
    titleFr: 'Moteur de recommandation e-commerce',
    description: 'Personalized product recommendation system using collaborative filtering and deep learning. Analyzes user behavior and preferences to suggest relevant products.',
    descriptionAr: 'نظام توصيات منتجات مخصص باستخدام التصفية التعاونية والتعلم العميق. يحلل سلوك المستخدم وتفضيلاته لاقتراح المنتجات ذات الصلة.',
    descriptionFr: 'Système de recommandation de produits personnalisé utilisant le filtrage collaboratif et l\'apprentissage profond. Analyse le comportement et les préférences des utilisateurs pour suggérer des produits pertinents.',
    image: '/assets/images/portfolio/project5.jpg',
    tags: ['TensorFlow', 'Keras', 'MongoDB', 'Recommender'],
    client: 'E-commerce Startup - Dubai',
    year: '2024',
    technologies: ['TensorFlow', 'Keras', 'MongoDB', 'Redis', 'Apache Spark'],
    features: [
      'Collaborative filtering',
      'Content-based recommendations',
      'Hybrid recommendation approach',
      'Real-time personalization',
      'A/B testing framework'
    ]
  },
  6: {
    id: 6,
    title: 'Medical Image Classification',
    titleAr: 'تصنيف الصور الطبية',
    titleFr: 'Classification d\'images médicales',
    description: 'Deep learning model for classifying medical images and detecting anomalies. Uses ResNet architecture for accurate diagnosis support in radiology.',
    descriptionAr: 'نموذج تعلم عميق لتصنيف الصور الطبية واكتشاف الشذوذات. يستخدم بنية ResNet لدعم التشخيص الدقيق في الأشعة.',
    descriptionFr: 'Modèle d\'apprentissage profond pour classifier les images médicales et détecter les anomalies. Utilise l\'architecture ResNet pour un support de diagnostic précis en radiologie.',
    image: '/assets/images/portfolio/project6.jpg',
    tags: ['ResNet', 'PyTorch', 'Medical AI', 'CNN'],
    client: 'Medical Student - King Abdulaziz University',
    year: '2024',
    technologies: ['ResNet-50', 'PyTorch', 'DICOM', 'Transfer Learning', 'Grad-CAM'],
    features: [
      'Multi-class disease classification',
      'Anomaly detection',
      'Explainable AI with Grad-CAM',
      'DICOM image support',
      'Clinical validation metrics'
    ]
  },
  7: {
    id: 7,
    title: 'Financial Time Series Forecasting',
    titleAr: 'التنبؤ بالسلاسل الزمنية المالية',
    titleFr: 'Prévision de séries temporelles financières',
    description: 'LSTM-based model for predicting stock prices and market trends. Incorporates technical indicators and sentiment analysis for improved accuracy.',
    descriptionAr: 'نموذج قائم على LSTM للتنبؤ بأسعار الأسهم واتجاهات السوق. يدمج المؤشرات الفنية وتحليل المشاعر لتحسين الدقة.',
    descriptionFr: 'Modèle basé sur LSTM pour prédire les prix des actions et les tendances du marché. Intègre des indicateurs techniques et l\'analyse de sentiment pour une précision améliorée.',
    image: '/assets/images/portfolio/project7.jpg',
    tags: ['LSTM', 'TensorFlow', 'Finance', 'Time Series'],
    client: 'Finance Student - Qatar University',
    year: '2024',
    technologies: ['LSTM', 'TensorFlow', 'Pandas', 'TA-Lib', 'Prophet'],
    features: [
      'Multi-step ahead forecasting',
      'Technical indicator integration',
      'Sentiment analysis from news',
      'Risk assessment',
      'Portfolio optimization'
    ]
  },
  8: {
    id: 8,
    title: 'Arabic Speech Recognition System',
    titleAr: 'نظام التعرف على الكلام العربي',
    titleFr: 'Système de reconnaissance vocale arabe',
    description: 'Voice-to-text system optimized for Arabic dialects and accents. Uses Wav2Vec architecture for accurate transcription of spoken Arabic.',
    descriptionAr: 'نظام تحويل الصوت إلى نص محسّن للهجات واللكنات العربية. يستخدم بنية Wav2Vec للنسخ الدقيق للعربية المنطوقة.',
    descriptionFr: 'Système de conversion voix-texte optimisé pour les dialectes et accents arabes. Utilise l\'architecture Wav2Vec pour une transcription précise de l\'arabe parlé.',
    image: '/assets/images/portfolio/project8.jpg',
    tags: ['Wav2Vec', 'Transformers', 'Arabic ASR', 'Speech'],
    client: 'Linguistics Student - UAE University',
    year: '2024',
    technologies: ['Wav2Vec 2.0', 'Transformers', 'PyTorch', 'Kaldi', 'WebRTC'],
    features: [
      'Multi-dialect Arabic support',
      'Real-time transcription',
      'Speaker diarization',
      'Noise reduction',
      'Punctuation restoration'
    ]
  }
};

// Initialize portfolio modal functionality
function initPortfolioModal() {
  const modal = document.getElementById('projectModal');
  const modalBackdrop = modal?.querySelector('.modal-backdrop');
  const modalClose = modal?.querySelector('.modal-close');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!modal) return;
  
  // Open modal when project card is clicked
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const projectId = parseInt(card.getAttribute('data-project-id'));
      openProjectModal(projectId);
    });
    
    // Also handle button click specifically
    const viewButton = card.querySelector('.btn-view-project');
    if (viewButton) {
      viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = parseInt(card.getAttribute('data-project-id'));
        openProjectModal(projectId);
      });
    }
  });
  
  // Close modal when clicking backdrop
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeProjectModal);
  }
  
  // Close modal when clicking close button
  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }
  
  // Close modal when pressing ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

// Open project modal with data
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const project = projectsData[projectId];
  
  if (!modal || !project) return;
  
  // Get current language
  const currentLang = localStorage.getItem('preferred-language') || 'en';
  
  // Get translated content
  const title = currentLang === 'ar' ? project.titleAr : 
                currentLang === 'fr' ? project.titleFr : 
                project.title;
  
  const description = currentLang === 'ar' ? project.descriptionAr : 
                      currentLang === 'fr' ? project.descriptionFr : 
                      project.description;
  
  // Update modal content
  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalImage').alt = title;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  
  // Update tags
  const modalTags = document.getElementById('modalTags');
  modalTags.innerHTML = project.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');
  
  // Update details
  const detailsLabels = {
    en: {
      client: 'Client',
      year: 'Year',
      technologies: 'Technologies Used',
      features: 'Key Features'
    },
    ar: {
      client: 'العميل',
      year: 'السنة',
      technologies: 'التقنيات المستخدمة',
      features: 'الميزات الرئيسية'
    },
    fr: {
      client: 'Client',
      year: 'Année',
      technologies: 'Technologies utilisées',
      features: 'Fonctionnalités clés'
    }
  };
  
  const labels = detailsLabels[currentLang] || detailsLabels.en;
  
  const modalDetails = document.getElementById('modalDetails');
  modalDetails.innerHTML = `
    <h3>${labels.client}</h3>
    <p>${project.client}</p>
    
    <h3>${labels.year}</h3>
    <p>${project.year}</p>
    
    <h3>${labels.technologies}</h3>
    <p>${project.technologies.join(', ')}</p>
    
    <h3>${labels.features}</h3>
    <ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
  `;
  
  // Show modal
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  
  if (!modal) return;
  
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioModal);
} else {
  initPortfolioModal();
}
