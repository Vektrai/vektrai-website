# Language Button Positioning Test Plan

## HTML Structure Changes

### Before (Incorrect)
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="...">Home</a></li>
    <!-- ... other links ... -->
</ul>
<div class="language-switcher">
    <button class="lang-btn">EN</button>
    <!-- ... -->
</div>
```

**Problem**: Language switcher was outside nav-menu, so it wouldn't appear in mobile menu.

### After (Correct)
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="...">Home</a></li>
    <!-- ... other links ... -->
    <div class="language-switcher">
        <button class="lang-btn active">EN</button>
        <button class="lang-btn">AR</button>
        <button class="lang-btn">FR</button>
    </div>
</ul>
```

**Solution**: Language switcher is now inside nav-menu, so it slides in with mobile menu.

## Desktop Navigation (>768px)

### Expected Behavior
- Navigation menu displays horizontally
- Language buttons appear at the end of the navigation row
- Buttons are inline with navigation links
- Proper spacing between nav links and language buttons
- Buttons maintain 36px height
- Buttons are 44px minimum width (accessibility)

### CSS Applied
```css
.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);  /* 32px */
}

.language-switcher {
  display: flex;
  gap: var(--spacing-sm);  /* 8px */
  align-items: center;
}

.lang-btn {
  padding: var(--spacing-xs) var(--spacing-md);  /* 4px 16px */
  font-size: var(--font-size-sm);  /* 14px */
  min-width: 44px;
  min-height: 36px;
}
```

### Test Steps
1. Open any page at 1366px viewport width
2. Verify navigation menu is horizontal
3. Verify language buttons appear at the right end of navigation
4. Verify buttons are vertically aligned with nav links
5. Verify spacing between last nav link and first language button
6. Measure button dimensions (should be ~44px × 36px)
7. Test hover effects on buttons
8. Test clicking each language button

## Tablet Navigation (769px-1024px)

### Expected Behavior
- Navigation menu still horizontal
- Language buttons still inline
- Slightly reduced button size (32px height)
- Reduced spacing between elements

### CSS Applied
```css
@media (max-width: 1024px) and (min-width: 769px) {
  .nav-menu {
    gap: var(--spacing-lg);  /* 24px */
  }
  
  .language-switcher {
    gap: var(--spacing-xs);  /* 4px */
  }
  
  .lang-btn {
    padding: var(--spacing-xs) var(--spacing-sm);  /* 4px 8px */
    font-size: var(--font-size-xs);  /* 12px */
    min-height: 32px;
  }
}
```

### Test Steps
1. Resize viewport to 1024px
2. Verify navigation still horizontal
3. Verify language buttons are smaller (32px height)
4. Verify reduced spacing between elements
5. Test button functionality

## Mobile Navigation (≤768px)

### Expected Behavior
- Hamburger menu icon visible
- Navigation menu hidden by default
- When hamburger clicked, menu slides in from right
- Language buttons appear at bottom of mobile menu
- Buttons are full-width within menu
- Buttons maintain proper spacing
- Menu has border separator above language buttons

### CSS Applied
```css
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--color-white);
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-4xl) var(--spacing-xl);
    gap: var(--spacing-lg);
    transition: right var(--transition-base);
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .language-switcher {
    flex-direction: column;
    width: 100%;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-xl);
    border-top: 1px solid var(--color-light-gray);
  }
  
  .lang-btn {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);  /* 8px 16px */
    font-size: var(--font-size-sm);  /* 14px */
  }
}
```

### Test Steps
1. Resize viewport to 768px or less
2. Verify hamburger icon is visible
3. Verify navigation menu is hidden
4. Click hamburger icon
5. Verify menu slides in from right
6. Verify backdrop appears behind menu
7. Verify language buttons are at bottom of menu
8. Verify buttons are full-width
9. Verify border separator above language buttons
10. Verify proper spacing between buttons
11. Test clicking each language button
12. Verify menu closes after clicking a nav link
13. Test clicking backdrop to close menu
14. Test clicking close button (if present)

## Small Mobile (≤480px)

### Expected Behavior
- Same as mobile but with slightly smaller buttons
- Buttons maintain 32px height
- Menu width may be adjusted

### CSS Applied
```css
@media (max-width: 480px) {
  .nav-menu {
    width: 260px;
  }
  
  .language-switcher {
    gap: var(--spacing-xs);
    margin-top: var(--spacing-lg);
    padding-top: var(--spacing-lg);
  }
  
  .lang-btn {
    padding: var(--spacing-xs) var(--spacing-sm);  /* 4px 8px */
    font-size: var(--font-size-xs);  /* 12px */
    min-height: 32px;
  }
}
```

### Test Steps
1. Resize viewport to 480px
2. Verify mobile menu still functions
3. Verify language buttons are slightly smaller
4. Verify buttons remain full-width in menu
5. Test all button interactions

## Extra Small Mobile (≤414px)

### Expected Behavior
- Same as small mobile
- Buttons maintain 30px minimum height
- Optimized spacing

### CSS Applied
```css
@media (max-width: 414px) {
  .lang-btn {
    padding: var(--spacing-xs) var(--spacing-sm);  /* 4px 8px */
    font-size: var(--font-size-xs);  /* 12px */
    min-height: 30px;
  }
}
```

### Test Steps
1. Resize viewport to 414px
2. Verify mobile menu functions correctly
3. Verify language buttons maintain minimum size
4. Test button tap targets (should be easy to tap)
5. Test all button interactions

## RTL Layout Testing (Arabic)

### Expected Behavior
- Language switcher positioning mirrors for RTL
- Buttons maintain proper alignment
- Mobile menu slides from left instead of right
- All spacing and sizing remains consistent

### Test Steps
1. Click AR (Arabic) button
2. Verify layout switches to RTL
3. Verify language switcher position on desktop
4. Test mobile menu (should slide from left)
5. Verify button positioning in mobile menu
6. Test all button interactions in RTL mode

## Accessibility Testing

### Expected Behavior
- All buttons are keyboard accessible
- Focus indicators are visible
- Touch targets meet WCAG 2.1 (44x44px minimum)
- Buttons have proper contrast
- Screen readers announce buttons correctly

### Test Steps
1. Tab through navigation with keyboard
2. Verify focus reaches language buttons
3. Verify focus indicator is visible
4. Press Enter/Space on focused button
5. Verify language changes
6. Test with screen reader
7. Verify button labels are announced
8. Measure touch targets on mobile (should be ≥44px)
9. Test color contrast with contrast checker

## Cross-Page Consistency

### Test All Pages
- [ ] index.html
- [ ] about.html
- [ ] services.html
- [ ] portfolio.html
- [ ] contact.html
- [ ] faq.html

### For Each Page
1. Test desktop navigation positioning
2. Test mobile menu positioning
3. Test language switching functionality
4. Verify consistent button sizing
5. Verify consistent spacing
6. Test at all breakpoints

## Test Results Template

| Breakpoint | Desktop Nav | Mobile Menu | Button Size | Spacing | Alignment | Clickable | Pass/Fail |
|------------|-------------|-------------|-------------|---------|-----------|-----------|-----------|
| 1366px+ | ☐ | N/A | ☐ | ☐ | ☐ | ☐ | ☐ |
| 1024px | ☐ | N/A | ☐ | ☐ | ☐ | ☐ | ☐ |
| 768px | N/A | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 480px | N/A | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 414px | N/A | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 375px | N/A | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

## Known Issues to Verify Fixed

1. ✅ Buttons no longer enlarge at 768px breakpoint
2. ✅ Language switcher now appears in mobile menu
3. ✅ Duplicate CSS definitions removed
4. ✅ Consistent sizing across all breakpoints
5. ✅ Proper positioning in both desktop and mobile layouts

## Success Criteria

- [ ] Language buttons visible and accessible at all breakpoints
- [ ] Buttons properly positioned in desktop navigation (>768px)
- [ ] Buttons properly positioned in mobile menu (≤768px)
- [ ] No horizontal overflow at any breakpoint
- [ ] Buttons maintain consistent or reduced size on smaller screens
- [ ] All buttons are clickable/tappable at all sizes
- [ ] Language switching works on all pages
- [ ] RTL layout works correctly
- [ ] Accessibility requirements met
- [ ] Consistent behavior across all 6 pages
