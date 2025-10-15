#!/usr/bin/env python3
"""
Generate placeholder images for VEKTRAI website
This script creates simple colored placeholder images with text labels.
Requires: Pillow (pip install Pillow)
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Color scheme matching VEKTRAI brand
COLORS = {
    'primary_dark': (11, 19, 43),      # #0B132B
    'primary_medium': (28, 37, 65),    # #1C2541
    'accent_gold': (212, 175, 55),     # #D4AF37
}

def create_placeholder(width, height, text, filename, bg_color=COLORS['primary_medium']):
    """Create a placeholder image with text"""
    # Create image with background color
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fall back to default if not available
    try:
        font_size = min(width, height) // 10
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Calculate text position (centered)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text
    draw.text((x, y), text, fill=COLORS['accent_gold'], font=font)
    
    # Draw border
    draw.rectangle([(0, 0), (width-1, height-1)], outline=COLORS['accent_gold'], width=3)
    
    # Save image
    img.save(filename, 'JPEG', quality=85, optimize=True)
    print(f"Created: {filename}")

def main():
    """Generate all placeholder images"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Team member photos (400x400)
    team_dir = os.path.join(script_dir, 'team')
    team_members = [
        ('member1.jpg', 'Dr. Ahmed\nAl-Rashid'),
        ('member2.jpg', 'Dr. Fatima\nAl-Mansoori'),
        ('member3.jpg', 'Omar\nAl-Thani'),
        ('member4.jpg', 'Sarah\nAl-Khalifa'),
    ]
    
    for filename, name in team_members:
        create_placeholder(400, 400, name, os.path.join(team_dir, filename))
    
    # Portfolio project images (800x600)
    portfolio_dir = os.path.join(script_dir, 'portfolio')
    projects = [
        ('project1.jpg', 'Arabic NLP\nSentiment Analysis'),
        ('project2.jpg', 'Smart City\nObject Detection'),
        ('project3.jpg', 'Healthcare\nPrediction Model'),
        ('project4.jpg', 'Multilingual\nAI Chatbot'),
        ('project5.jpg', 'E-commerce\nRecommendation'),
        ('project6.jpg', 'Medical Image\nClassification'),
        ('project7.jpg', 'Financial Time\nSeries Forecasting'),
        ('project8.jpg', 'Arabic Speech\nRecognition'),
    ]
    
    for filename, name in projects:
        create_placeholder(800, 600, name, os.path.join(portfolio_dir, filename))
    
    # Hero background (1920x1080)
    create_placeholder(
        1920, 1080, 
        'VEKTRAI\nAI Engineering Consulting', 
        os.path.join(script_dir, 'hero-bg.jpg'),
        bg_color=COLORS['primary_dark']
    )
    
    print("\nAll placeholder images generated successfully!")
    print("Note: These are temporary placeholders. Replace with actual images before deployment.")

if __name__ == '__main__':
    try:
        main()
    except ImportError:
        print("Error: Pillow library not found.")
        print("Install it with: pip install Pillow")
    except Exception as e:
        print(f"Error: {e}")
