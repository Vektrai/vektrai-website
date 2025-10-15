# Image Assets

This directory contains placeholder images for the VEKTRAI website. Replace these placeholders with actual optimized images.

## Image Requirements

### Team Member Photos (`team/`)
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **Optimization**: Compress to < 100KB per image
- **Content**: Professional headshots with neutral background

Files needed:
- `member1.jpg` - Dr. Ahmed Al-Rashid
- `member2.jpg` - Dr. Fatima Al-Mansoori
- `member3.jpg` - Omar Al-Thani
- `member4.jpg` - Sarah Al-Khalifa

### Portfolio Project Images (`portfolio/`)
- **Size**: 800x600px (4:3 aspect ratio)
- **Format**: JPG
- **Optimization**: Compress to < 150KB per image
- **Content**: Screenshots or representative images of AI projects

Files needed:
- `project1.jpg` - Arabic NLP Sentiment Analysis
- `project2.jpg` - Smart City Object Detection
- `project3.jpg` - Healthcare Prediction Model
- `project4.jpg` - Multilingual AI Chatbot
- `project5.jpg` - E-commerce Recommendation Engine
- `project6.jpg` - Medical Image Classification
- `project7.jpg` - Financial Time Series Forecasting
- `project8.jpg` - Arabic Speech Recognition System

### Hero Background Image
- **File**: `hero-bg.jpg`
- **Size**: 1920x1080px (Full HD)
- **Format**: JPG
- **Optimization**: Compress to < 300KB
- **Content**: Abstract tech/AI themed background or gradient

## Image Optimization Tips

1. Use tools like TinyPNG, ImageOptim, or Squoosh to compress images
2. Ensure images are web-optimized (sRGB color space)
3. Consider using WebP format for better compression (with JPG fallback)
4. Add descriptive alt text in HTML for accessibility
5. Test images on different screen sizes and resolutions

## Placeholder Sources

For temporary placeholders, you can use:
- **Unsplash**: https://unsplash.com/ (free high-quality photos)
- **Pexels**: https://www.pexels.com/ (free stock photos)
- **Placeholder.com**: https://placeholder.com/ (simple placeholder generator)
- **Lorem Picsum**: https://picsum.photos/ (random placeholder images)

## Generating Visual Placeholders

A Python script is provided to generate visual placeholder images:

```bash
cd assets/images
pip install Pillow
python generate_placeholders.py
```

This will create properly sized placeholder images with text labels and VEKTRAI brand colors.

## Current Status

All image files are currently text placeholders. Replace them with actual images before deployment.

You can either:
1. Run the `generate_placeholders.py` script to create visual placeholders for testing
2. Replace the placeholder files directly with actual optimized images
