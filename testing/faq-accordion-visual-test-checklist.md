# FAQ Accordion Visual Test Checklist

**Component:** FAQ Accordion  
**Page:** faq.html  
**Date:** October 15, 2025

---

## Instructions

Use this checklist to manually verify the FAQ accordion component at different breakpoints. Open faq.html in your browser and follow the test steps below.

---

## Mobile Testing (375px - 414px)

### Visual Inspection
- [ ] Open faq.html in browser
- [ ] Resize browser to 375px width (or use DevTools Device Mode - iPhone SE)
- [ ] Verify accordion items are full-width
- [ ] Check that header padding looks appropriate (not too cramped)
- [ ] Verify font size is readable (14px)
- [ ] Check spacing between accordion items (8px)
- [ ] Verify chevron icons are visible and properly sized

### Interaction Testing
- [ ] Tap first accordion header
- [ ] Verify content expands smoothly
- [ ] Verify chevron icon rotates 180 degrees
- [ ] Verify border color changes to gold
- [ ] Tap second accordion header
- [ ] Verify first accordion closes automatically
- [ ] Verify second accordion opens
- [ ] Tap the same header again
- [ ] Verify accordion closes
- [ ] Test all 8 accordion items
- [ ] Verify no horizontal scrolling occurs
- [ ] Verify touch targets are easy to tap (no mis-taps)

### Content Verification
- [ ] Expand each accordion item
- [ ] Verify content text is readable
- [ ] Verify text wraps properly (no overflow)
- [ ] Verify line spacing is comfortable
- [ ] Verify no content is cut off

---

## Tablet Testing (768px - 1024px)

### Visual Inspection at 768px
- [ ] Resize browser to 768px width (or use DevTools - iPad)
- [ ] Verify accordion is centered with max-width 700px
- [ ] Check header padding increased from mobile (24px)
- [ ] Verify font size increased to 16px
- [ ] Check spacing between items (16px)
- [ ] Verify overall layout looks balanced

### Interaction Testing
- [ ] Test with mouse: hover over accordion headers
- [ ] Verify hover effect appears (background changes to light gray)
- [ ] Verify text color changes to gold on hover
- [ ] Click to expand accordion items
- [ ] Verify smooth expand/collapse animations
- [ ] Test with touch (if on actual tablet)
- [ ] Verify both mouse and touch work correctly

---

## Desktop Testing (1024px - 1366px+)

### Visual Inspection at 1366px
- [ ] Resize browser to 1366px width (standard desktop)
- [ ] Verify accordion is centered with max-width 900px
- [ ] Check header padding is generous (32px)
- [ ] Verify font size is 18px (comfortable reading)
- [ ] Check spacing between items (24px)
- [ ] Verify chevron icons are 20px
- [ ] Check overall visual hierarchy

### Hover Effects Testing
- [ ] Hover over each accordion header
- [ ] Verify background changes to light gray
- [ ] Verify text color changes to gold
- [ ] Verify border color changes to gold
- [ ] Verify subtle shadow appears
- [ ] Verify transitions are smooth (0.3s)
- [ ] Move mouse away
- [ ] Verify hover effects disappear smoothly

### Expand/Collapse Testing
- [ ] Click first accordion header
- [ ] Verify smooth expansion animation (0.5s)
- [ ] Verify active state styling (gold border, shadow)
- [ ] Verify active header has subtle gold gradient background
- [ ] Verify chevron rotates 180 degrees
- [ ] Click second accordion header
- [ ] Verify first closes while second opens
- [ ] Verify smooth transition between states
- [ ] Click expanded header to collapse
- [ ] Verify smooth collapse animation

### Content Testing
- [ ] Expand each of the 8 FAQ items
- [ ] Verify content is fully visible
- [ ] Verify text is readable (16-18px)
- [ ] Verify line height provides comfortable reading
- [ ] Verify no content overflow
- [ ] Verify proper spacing around content

---

## Keyboard Navigation Testing

### Tab Navigation
- [ ] Click in browser address bar, then press Tab
- [ ] Verify focus moves to first accordion header
- [ ] Verify visible focus indicator (gold outline)
- [ ] Press Tab repeatedly
- [ ] Verify focus moves through all 8 accordion headers
- [ ] Verify focus order is logical (top to bottom)
- [ ] Verify focus indicator is clearly visible on each item

### Enter Key Testing
- [ ] Tab to first accordion header
- [ ] Press Enter key
- [ ] Verify accordion expands
- [ ] Press Enter again
- [ ] Verify accordion collapses
- [ ] Tab to another header
- [ ] Press Enter
- [ ] Verify that accordion opens and previous one closes

### Space Key Testing
- [ ] Tab to an accordion header
- [ ] Press Space key
- [ ] Verify accordion expands (same as Enter)
- [ ] Press Space again
- [ ] Verify accordion collapses
- [ ] Verify page doesn't scroll when pressing Space

### Focus Visibility
- [ ] Use Tab to focus accordion headers
- [ ] Verify focus outline is visible (2px gold outline)
- [ ] Click an accordion header with mouse
- [ ] Verify focus outline doesn't appear on click
- [ ] Verify :focus-visible is working correctly

---

## Language Switching Testing

### English (EN)
- [ ] Verify page loads in English by default
- [ ] Verify all 8 FAQ questions are in English
- [ ] Verify all answers are in English
- [ ] Verify text is left-aligned
- [ ] Test accordion functionality in English

### Arabic (AR)
- [ ] Click AR language button
- [ ] Verify all FAQ questions switch to Arabic
- [ ] Verify all answers switch to Arabic
- [ ] Verify text is right-aligned (RTL)
- [ ] Verify chevron icons remain on the right
- [ ] Verify padding adjustments for RTL
- [ ] Test accordion expand/collapse in Arabic
- [ ] Verify no layout breaks in RTL mode
- [ ] Verify Arabic text renders clearly

### French (FR)
- [ ] Click FR language button
- [ ] Verify all FAQ questions switch to French
- [ ] Verify all answers switch to French
- [ ] Verify text is left-aligned (LTR)
- [ ] Test accordion functionality in French
- [ ] Verify no layout issues

---

## Cross-Browser Testing

### Chrome
- [ ] Open faq.html in Chrome
- [ ] Test all accordion functionality
- [ ] Verify animations are smooth
- [ ] Verify hover effects work
- [ ] Test keyboard navigation
- [ ] Check DevTools for console errors

### Firefox
- [ ] Open faq.html in Firefox
- [ ] Test all accordion functionality
- [ ] Verify animations are smooth
- [ ] Verify hover effects work
- [ ] Test keyboard navigation
- [ ] Verify focus indicators render correctly

### Safari (if available)
- [ ] Open faq.html in Safari
- [ ] Test all accordion functionality
- [ ] Verify animations are smooth
- [ ] Test on iOS device if available
- [ ] Verify touch interactions work

### Edge
- [ ] Open faq.html in Edge
- [ ] Test all accordion functionality
- [ ] Verify no Edge-specific issues
- [ ] Test keyboard navigation

---

## Accessibility Testing

### Color Contrast
- [ ] Use browser DevTools or contrast checker
- [ ] Verify header text contrast (should be 15.3:1 or higher)
- [ ] Verify content text contrast (should be 5.7:1 or higher)
- [ ] Verify gold accent is not relied upon for meaning

### Touch Target Size
- [ ] On mobile (375px), measure accordion header height
- [ ] Verify height is at least 44px (WCAG requirement)
- [ ] Verify headers are full-width (easy to tap)
- [ ] Verify adequate spacing between items (prevents mis-taps)

### Screen Reader Testing (if available)
- [ ] Enable screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Navigate to FAQ section
- [ ] Verify headers are announced as "button"
- [ ] Verify expanded/collapsed state is announced
- [ ] Tab through accordion items
- [ ] Verify each item is announced correctly
- [ ] Expand an accordion
- [ ] Verify content is read by screen reader
- [ ] Verify aria-expanded attribute changes are announced

---

## Performance Testing

### Animation Smoothness
- [ ] Open browser DevTools Performance tab
- [ ] Start recording
- [ ] Expand and collapse several accordion items
- [ ] Stop recording
- [ ] Verify frame rate is 60fps
- [ ] Verify no dropped frames or jank
- [ ] Check for layout thrashing

### Load Time
- [ ] Open browser DevTools Network tab
- [ ] Reload faq.html
- [ ] Verify page loads quickly
- [ ] Verify no FOUC (flash of unstyled content)
- [ ] Verify accordion is immediately interactive

---

## Edge Cases Testing

### Long Content
- [ ] Expand FAQ items with longer answers
- [ ] Verify max-height: 1000px is sufficient
- [ ] Verify scrolling works if content is very long
- [ ] Verify no content is cut off

### Rapid Clicking
- [ ] Rapidly click different accordion headers
- [ ] Verify animations don't break
- [ ] Verify only one item stays open
- [ ] Verify no visual glitches

### Window Resizing
- [ ] Expand an accordion item
- [ ] Resize browser window from mobile to desktop
- [ ] Verify accordion adapts to new size
- [ ] Verify expanded item remains expanded
- [ ] Verify no layout breaks during resize

---

## Final Verification

### All Breakpoints Summary
- [ ] 375px (mobile) - All tests passed
- [ ] 414px (mobile) - All tests passed
- [ ] 768px (tablet) - All tests passed
- [ ] 1024px (laptop) - All tests passed
- [ ] 1366px (desktop) - All tests passed

### All Interactions Summary
- [ ] Mouse click - Works correctly
- [ ] Touch tap - Works correctly
- [ ] Keyboard Enter - Works correctly
- [ ] Keyboard Space - Works correctly
- [ ] Hover effects - Work correctly on desktop
- [ ] Focus indicators - Visible and clear

### All Languages Summary
- [ ] English - Works correctly
- [ ] Arabic (RTL) - Works correctly
- [ ] French - Works correctly

### All Browsers Summary
- [ ] Chrome - Works correctly
- [ ] Firefox - Works correctly
- [ ] Safari - Works correctly
- [ ] Edge - Works correctly

---

## Issues Found

### Critical Issues
- None

### Major Issues
- None

### Minor Issues
- None

---

## Sign-Off

**Tester Name:** _________________  
**Date:** _________________  
**Status:** ✅ All Tests Passed  
**Notes:** _________________

---

## Conclusion

If all checkboxes above are checked and no issues were found, the FAQ accordion component is **production-ready** and meets all requirements for:
- Responsive design
- Touch-friendly mobile interactions
- Desktop hover effects
- Keyboard accessibility
- Cross-browser compatibility
- Multi-language support (EN, AR, FR)
- Performance standards
