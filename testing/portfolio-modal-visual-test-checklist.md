# Portfolio Modal Visual Test Checklist

**Quick Reference Guide for Manual Testing**

---

## How to Test

1. Open `portfolio.html` in your browser
2. Resize browser window to test different breakpoints
3. Click on any project card or "View Details" button
4. Verify the checklist items below

---

## Mobile Testing (375px - 768px)

### Open Browser DevTools
- Press F12 (Windows) or Cmd+Option+I (Mac)
- Click "Toggle Device Toolbar" icon
- Select device or set custom width

### Test at 375px (iPhone SE)

**Visual Checks:**
- [ ] Modal fills entire screen (no margins)
- [ ] No border radius (sharp corners)
- [ ] Close button (×) is in top-right corner
- [ ] Close button is 36x36px (touch-friendly)
- [ ] Image height is ~180px
- [ ] Title is readable (20px)
- [ ] Description is readable (14px)
- [ ] Tags are visible and wrapped
- [ ] Content is scrollable
- [ ] No horizontal scrolling

**Interaction Checks:**
- [ ] Click project card → Modal opens
- [ ] Click "View Details" button → Modal opens
- [ ] Click close button (×) → Modal closes
- [ ] Click backdrop (dark area) → Modal closes
- [ ] Press ESC key → Modal closes
- [ ] Scroll content → Works smoothly
- [ ] Body doesn't scroll when modal is open

### Test at 414px (iPhone 12/13/14)

**Visual Checks:**
- [ ] Modal fills entire screen
- [ ] Close button is touch-friendly
- [ ] All content is readable
- [ ] No horizontal scrolling

**Interaction Checks:**
- [ ] All open/close methods work
- [ ] Scrolling is smooth

### Test at 768px (iPad)

**Visual Checks:**
- [ ] Modal fills entire screen
- [ ] Padding is 32px
- [ ] Image height is ~200px
- [ ] Font sizes are slightly larger
- [ ] No horizontal scrolling

**Interaction Checks:**
- [ ] All interactions work smoothly

---

## Desktop Testing (1024px+)

### Test at 1024px (Small Laptop)

**Visual Checks:**
- [ ] Modal is centered on screen
- [ ] Modal has max-width (~1000px)
- [ ] Border radius is visible (rounded corners)
- [ ] Backdrop is visible around modal
- [ ] Backdrop has blur effect
- [ ] Close button is 40x40px
- [ ] Image height is ~400px
- [ ] Padding is 48px
- [ ] Title is large (30px)
- [ ] Description is readable (18px)

**Interaction Checks:**
- [ ] Click project card → Modal opens with animation
- [ ] Click "View Details" → Modal opens
- [ ] Hover close button → Rotates 90deg, turns gold
- [ ] Click close button → Modal closes
- [ ] Click backdrop → Modal closes
- [ ] Press ESC key → Modal closes
- [ ] Scroll content if needed → Works smoothly

### Test at 1366px (Standard Desktop)

**Visual Checks:**
- [ ] Modal is centered
- [ ] Modal max-width is ~900px
- [ ] Backdrop clearly visible
- [ ] Image height is ~350px
- [ ] All spacing looks good
- [ ] Typography is clear

**Interaction Checks:**
- [ ] All hover effects work
- [ ] All close methods work
- [ ] Animations are smooth

### Test at 1920px (Large Desktop)

**Visual Checks:**
- [ ] Modal is centered
- [ ] Modal doesn't look too small
- [ ] Backdrop is prominent
- [ ] All content is readable

**Interaction Checks:**
- [ ] All functionality works

---

## Content Testing

### Test All 8 Projects

For each project (1-8):
- [ ] Click project card
- [ ] Verify correct image loads
- [ ] Verify correct title displays
- [ ] Verify correct tags display
- [ ] Verify correct description displays
- [ ] Verify client info displays
- [ ] Verify year displays
- [ ] Verify technologies list displays
- [ ] Verify features list displays
- [ ] Close modal

---

## Language Testing

### English (EN)
- [ ] Click EN button
- [ ] Open any project modal
- [ ] Verify content is in English
- [ ] Close modal

### Arabic (AR)
- [ ] Click AR button
- [ ] Open any project modal
- [ ] Verify content is in Arabic
- [ ] Verify text is right-aligned (RTL)
- [ ] Verify close button is on left side
- [ ] Verify lists are right-aligned
- [ ] Close modal

### French (FR)
- [ ] Click FR button
- [ ] Open any project modal
- [ ] Verify content is in French
- [ ] Close modal

---

## Animation Testing

### Open Animation
- [ ] Modal fades in smoothly
- [ ] Modal slides up slightly
- [ ] Animation takes ~300ms
- [ ] No jank or stuttering

### Close Animation
- [ ] Modal fades out smoothly
- [ ] Animation is smooth
- [ ] No visual glitches

---

## Scrolling Testing

### Mobile
- [ ] Open modal with long content
- [ ] Scroll down → Content scrolls
- [ ] Try to scroll page → Page doesn't scroll
- [ ] Close modal → Page scroll restored

### Desktop
- [ ] Open modal with long content
- [ ] Scroll down → Content scrolls smoothly
- [ ] Try to scroll page → Page doesn't scroll
- [ ] Close modal → Page scroll restored

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab to project card
- [ ] Press Enter → Modal opens
- [ ] Press ESC → Modal closes
- [ ] Tab to close button
- [ ] Press Enter → Modal closes

### Touch Targets (Mobile)
- [ ] Close button is easy to tap (36x36px minimum)
- [ ] No accidental taps on backdrop
- [ ] All interactive elements are touch-friendly

### Screen Reader (Optional)
- [ ] Enable screen reader (NVDA, JAWS, VoiceOver)
- [ ] Navigate to project card
- [ ] Open modal
- [ ] Verify content is announced
- [ ] Verify close button is announced

---

## Browser Testing

### Chrome
- [ ] Open portfolio.html in Chrome
- [ ] Test modal at mobile width
- [ ] Test modal at desktop width
- [ ] Verify all functionality works

### Firefox
- [ ] Open portfolio.html in Firefox
- [ ] Test modal at mobile width
- [ ] Test modal at desktop width
- [ ] Verify all functionality works

### Safari
- [ ] Open portfolio.html in Safari
- [ ] Test modal at mobile width
- [ ] Test modal at desktop width
- [ ] Verify all functionality works

### Edge
- [ ] Open portfolio.html in Edge
- [ ] Test modal at desktop width
- [ ] Verify all functionality works

---

## Common Issues to Check

### Layout Issues
- [ ] No horizontal scrolling at any breakpoint
- [ ] No content overflow
- [ ] No overlapping elements
- [ ] Proper spacing at all breakpoints

### Interaction Issues
- [ ] All close methods work (button, backdrop, ESC)
- [ ] Modal opens on first click
- [ ] No double-click required
- [ ] Backdrop is clickable

### Visual Issues
- [ ] Images load correctly
- [ ] Text is readable
- [ ] Colors have good contrast
- [ ] Animations are smooth

### Performance Issues
- [ ] Modal opens quickly (<100ms)
- [ ] Modal closes quickly (<100ms)
- [ ] No lag or stuttering
- [ ] Smooth scrolling

---

## Quick Test Procedure

**5-Minute Quick Test:**

1. **Mobile (375px):**
   - Open modal → Check full-width
   - Close with button → Works
   - Close with backdrop → Works

2. **Desktop (1366px):**
   - Open modal → Check centered
   - Hover close button → Check rotation
   - Close with ESC → Works

3. **Content:**
   - Open 2-3 different projects
   - Verify content displays correctly

4. **Languages:**
   - Switch to Arabic → Check RTL
   - Switch back to English

**Result:** If all checks pass, modal is working correctly!

---

## Expected Results Summary

### Mobile (≤768px)
- Full-width modal
- Full-screen appearance
- Touch-friendly controls
- Scrollable content
- Body scroll locked

### Desktop (≥769px)
- Centered modal
- Max-width applied
- Visible backdrop with blur
- Hover effects on close button
- Smooth animations

### All Breakpoints
- No horizontal scrolling
- All close methods work
- Content displays correctly
- Multilingual support works
- Accessibility features work

---

## Troubleshooting

### Modal doesn't open
- Check browser console for errors
- Verify portfolio-modal.js is loaded
- Verify project data exists

### Modal doesn't close
- Check if event listeners are attached
- Verify backdrop and close button are clickable
- Check ESC key handler

### Layout looks wrong
- Verify style.css is loaded
- Check browser DevTools for CSS errors
- Verify viewport meta tag is present

### Content doesn't display
- Check project data in portfolio-modal.js
- Verify data-project-id matches
- Check language switching functionality

---

**Testing Complete!**

If all checklist items pass, the portfolio modal is working correctly and is ready for production.
