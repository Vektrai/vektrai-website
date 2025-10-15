# VEKTRAI Website - Responsive Breakpoints Guide

## Quick Reference

### Breakpoint Overview

| Device Category | Viewport Width | Grid Columns | Section Padding | Container Padding |
|----------------|----------------|--------------|-----------------|-------------------|
| Extra Small Mobile | 375px | 1 | 32px | 8px |
| Small Mobile | 414px | 1 | 50px | 16px |
| Mobile | < 768px | 1 | 50px | 16px |
| Tablet Portrait | 768px - 834px | 2 | 64px | 24px |
| Tablet Landscape | 768px - 1024px | 3 | 48px | 24px |
| Small Desktop | 1024px - 1365px | 3 | 64px | 24px |
| Desktop | 1366px - 1919px | 3-4 | 100px | 32px |
| Large Desktop | 1920px+ | 3-4 | 120px | 48px |

## Detailed Breakpoint Specifications

### 📱 Extra Small Mobile (375px and below)
```css
@media (max-width: 375px)
```
**Target Devices:** iPhone SE, small Android phones

**Layout:**
- Container padding: 8px
- Section padding: 32px vertical
- All grids: 1 column
- Hero height: 60vh

**Typography:**
- h1: 24px (2xl)
- h2: 20px (xl)
- Body: 14px (sm)

**Components:**
- Logo: 35px
- Buttons: Extra small padding
- Cards: 24px padding
- Icons: 50-60px

---

### 📱 Small Mobile (414px)
```css
@media (max-width: 414px)
```
**Target Devices:** iPhone 12/13/14, standard smartphones

**Layout:**
- Container padding: 16px
- Section padding: 50px vertical
- All grids: 1 column
- Hero height: 70vh

**Typography:**
- h1: 30px (3xl)
- h2: 24px (2xl)
- Body: 14px (sm)

**Components:**
- Logo: 40px
- Buttons: Small padding
- Cards: 24-32px padding
- Icons: 60-70px
- Project images: 180px height
- Team images: 250px height

**Navigation:**
- Mobile menu: 260px width
- Menu items: 16px font
- Language buttons: 14px font

---

### 📱 Mobile (768px and below)
```css
@media (max-width: 768px)
```
**Target Devices:** All mobile devices, large phones

**Layout:**
- Container padding: 16px
- Section padding: 50px vertical
- All grids: 1 column
- Hero height: 80vh

**Typography:**
- h1: 36px (4xl)
- h2: 30px (3xl)
- Body: 16px (base)

**Components:**
- Logo: 45px
- Hamburger menu: Visible
- Desktop menu: Hidden
- Footer: 1 column, centered
- Timeline: Single column, left-aligned

**Special Features:**
- Mobile menu slides from right
- Touch-friendly spacing
- Larger tap targets (44px minimum)

---

### 📱 Tablet Portrait (768px - 834px)
```css
@media (min-width: 768px) and (max-width: 834px)
```
**Target Devices:** iPad, Android tablets (portrait)

**Layout:**
- Container padding: 24px
- Section padding: 64px vertical
- Most grids: 2 columns
- Hero height: 85vh

**Typography:**
- h1: 36px (4xl)
- h2: 30px (3xl)
- Body: 16px (base)

**Grid Configurations:**
- Features: 2 columns
- Projects: 2 columns
- Testimonials: 2 columns (3rd spans full)
- Team: 2 columns
- Services: 2 columns
- Pricing: 2 columns (3rd spans full)

**Components:**
- Logo: 45px
- Cards: 24px padding
- Icons: 70-75px
- Project images: 220px height
- Team images: 300px height

---

### 💻 Tablet Landscape (768px - 1024px, landscape)
```css
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)
```
**Target Devices:** Tablets in landscape mode

**Layout:**
- Section padding: 48px vertical (reduced for landscape)
- Most grids: 3 columns
- Hero height: 75vh

**Grid Configurations:**
- Features: 3 columns
- Projects: 3 columns
- Testimonials: 3 columns
- Team: 3 columns
- Services: 2 columns
- Pricing: 3 columns

**Special Features:**
- Optimized for horizontal viewing
- Reduced vertical spacing
- Better space utilization

---

### 💻 Small Desktop (1024px - 1365px)
```css
@media (min-width: 1024px) and (max-width: 1365px)
```
**Target Devices:** Small laptops, 13-15" screens

**Layout:**
- Container: 960px max-width
- Container padding: 24px
- Section padding: 64px vertical
- Hero height: 90vh

**Typography:**
- h1: 48px (5xl)
- h2: 36px (4xl)
- Body: 16px (base)

**Grid Configurations:**
- Features: 3 columns
- Projects: 3 columns
- Testimonials: 3 columns
- Team: 3 columns
- Services: 2 columns
- Pricing: 3 columns

**Components:**
- Logo: 50px
- Cards: 24px padding
- Icons: 80-90px
- Hover effects: Active
- Contact: 1.2fr / 0.8fr split

---

### 💻 Desktop (1366px - 1919px)
```css
@media (min-width: 1366px) and (max-width: 1919px)
```
**Target Devices:** Standard desktop monitors, laptops

**Layout:**
- Container: 1200px max-width (design spec)
- Container padding: 32px
- Section padding: 100px vertical (design spec)
- Hero height: 100vh

**Typography:**
- h1: 48px (5xl)
- h2: 36px (4xl)
- Body: 16px (base)

**Grid Configurations:**
- Features: 3 columns
- Projects: 3 columns
- Testimonials: 3 columns
- Team: 4 columns
- Services: 2 columns
- Pricing: 3 columns

**Components:**
- Logo: 55px
- Cards: 32-48px padding
- Icons: 90-100px
- Mission/Vision icons: 90px
- Contact: 1.3fr / 0.7fr split

**Special Features:**
- Full design specifications
- Optimal spacing
- Enhanced hover effects
- Smooth animations

---

### 🖥️ Large Desktop (1920px+)
```css
@media (min-width: 1920px)
```
**Target Devices:** Large monitors, 4K displays

**Layout:**
- Container: 1400px max-width
- Container padding: 48px
- Section padding: 120px vertical (20% increase)
- Hero height: 100vh

**Typography:**
- h1: 53px (5xl * 1.1)
- h2: 40px (4xl * 1.1)
- Body: 18px (lg)
- Enhanced readability for large screens

**Grid Configurations:**
- Features: 3 columns
- Projects: 4 columns (better utilization)
- Testimonials: 3 columns
- Team: 4 columns
- Services: 2 columns
- Pricing: 3 columns

**Components:**
- Logo: 60px
- Cards: 48-64px padding
- Icons: 100px
- Mission/Vision icons: 100px
- Contact: 1.4fr / 0.6fr split
- Timeline: 1000px max-width
- Modal: 900px max-width

**Special Features:**
- Maximum spacing and comfort
- Enhanced typography
- Generous padding
- Optimal for large displays

---

## Component-Specific Breakpoints

### Navigation
- **< 768px:** Hamburger menu, mobile layout
- **768px - 1024px:** Compact desktop menu
- **1024px+:** Full desktop menu with optimal spacing

### Hero Section
- **375px:** 60vh, xl title
- **414px:** 70vh, 2xl title
- **768px:** 80vh, 3xl title
- **1024px+:** 90-100vh, 5xl title

### Cards
- **< 414px:** 24px padding, small icons
- **414px - 768px:** 24-32px padding, medium icons
- **768px - 1024px:** 24px padding, medium icons
- **1024px - 1366px:** 24-32px padding, large icons
- **1366px+:** 32-48px padding, extra large icons

### Grids
- **< 768px:** 1 column
- **768px - 834px:** 2 columns
- **834px - 1024px (landscape):** 3 columns
- **1024px+:** 3-4 columns

### Forms
- **< 414px:** Compact spacing, small inputs
- **414px - 768px:** Standard mobile spacing
- **768px+:** Desktop spacing, larger inputs

---

## CSS Variables Reference

```css
/* Spacing Scale */
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
--spacing-4xl: 6rem;      /* 96px */
--spacing-5xl: 8rem;      /* 128px */

/* Section Padding */
--section-padding-desktop: 6.25rem;  /* 100px */
--section-padding-mobile: 3.125rem;  /* 50px */

/* Font Sizes */
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
```

---

## Testing Checklist

### Mobile Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (414px)
- [ ] Samsung Galaxy (360px, 412px)
- [ ] Test portrait orientation
- [ ] Test landscape orientation

### Tablet Testing
- [ ] iPad (768px, 834px)
- [ ] iPad Pro (1024px)
- [ ] Android tablets
- [ ] Test portrait orientation
- [ ] Test landscape orientation

### Desktop Testing
- [ ] 1024px (small laptop)
- [ ] 1366px (standard desktop)
- [ ] 1920px (full HD)
- [ ] 2560px (2K)
- [ ] 3840px (4K)

---

## Best Practices

### When Adding New Components
1. Start with mobile design (< 414px)
2. Add tablet styles (768px - 834px)
3. Add desktop styles (1024px+)
4. Test all breakpoints
5. Verify smooth transitions

### When Modifying Existing Components
1. Check all media queries
2. Test on multiple devices
3. Verify no layout breaks
4. Check hover states (desktop)
5. Check touch targets (mobile)

### Performance Tips
1. Use CSS transforms for animations
2. Avoid layout-triggering properties
3. Use will-change sparingly
4. Optimize media query order
5. Minimize repaints

---

## Quick Debug Commands

### Check Media Queries
```powershell
Get-Content assets/css/style.css | Select-String -Pattern "@media"
```

### Count Breakpoints
```powershell
(Get-Content assets/css/style.css | Select-String -Pattern "@media").Count
```

### Find Specific Breakpoint
```powershell
Get-Content assets/css/style.css | Select-String -Pattern "max-width: 414px"
```

---

*Last Updated: Task 15 Completion*
*Total Breakpoints: 55 media queries*
