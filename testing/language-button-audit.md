# Language Button CSS Audit

## Current State Documentation

### Base Styles (Line 914-936)
```css
.lang-btn {
  padding: var(--spacing-sm) var(--spacing-md);  /* 8px 16px */
  font-family: var(--font-heading);
  font-size: var(--font-size-sm);  /* 14px */
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
  background: transparent;
  border: 2px solid var(--color-medium-gray);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}
```

### Duplicate Base Styles (Line 5397-5409)
```css
.lang-btn {
  padding: var(--spacing-xs) var(--spacing-md);  /* 4px 16px */
  font-size: var(--font-size-sm);  /* 14px */
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
  background: transparent;
  border: 2px solid var(--color-medium-gray);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  font-family: var(--font-heading);
}
```

**ISSUE**: Two base style definitions with different padding values!

## Media Query Analysis

### Desktop (≥1366px) - Line 5054-5057
```css
.lang-btn {
  padding: var(--spacing-sm) var(--spacing-lg);  /* 8px 24px */
  font-size: var(--font-size-base);  /* 16px */
}
```

### Tablet Landscape (769px-1024px) - Line 1049-1052
```css
.lang-btn {
  padding: var(--spacing-xs) var(--spacing-sm);  /* 4px 8px */
  font-size: var(--font-size-xs);  /* 12px */
}
```

### Mobile (≤768px) - Line 1015-1018
```css
.lang-btn {
  width: 100%;
  padding: var(--spacing-md);  /* 16px all sides */
  font-size: var(--font-size-base);  /* 16px */
}
```

### Mobile (≤768px) - Line 5437-5440 (Duplicate)
```css
.lang-btn {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);  /* 8px 16px */
}
```

### Small Mobile (≤480px) - Line 4127-4130
```css
.lang-btn {
  padding: var(--spacing-sm);  /* 8px all sides */
  font-size: var(--font-size-sm);  /* 14px */
}
```

### Extra Small Mobile (≤414px) - Line 4520-4523
```css
.lang-btn {
  padding: var(--spacing-xs) var(--spacing-sm);  /* 4px 8px */
  font-size: var(--font-size-xs);  /* 12px */
}
```

## Current Button Sizes at Each Breakpoint

| Breakpoint | Padding | Font Size | Total Approx Size |
|------------|---------|-----------|-------------------|
| 1366px+ | 8px 24px | 16px | ~56px height |
| 1024px | 4px 8px | 12px | ~24px height |
| 768px | 16px | 16px | ~48px height |
| 480px | 8px | 14px | ~30px height |
| 414px | 4px 8px | 12px | ~24px height |
| 375px | 4px 8px | 12px | ~24px height |

## CRITICAL ISSUE IDENTIFIED

**Problem**: At 768px breakpoint, buttons get LARGER (16px padding, 16px font) compared to smaller screens (414px: 4px 8px padding, 12px font).

This violates responsive design principles where elements should maintain size or get smaller on mobile devices.

## Media Queries Affecting Language Buttons

1. **Line 1015-1018**: `@media (max-width: 768px)` - Mobile menu styles
2. **Line 1049-1052**: `@media (max-width: 1024px) and (min-width: 769px)` - Tablet
3. **Line 4127-4130**: `@media (max-width: 480px)` - Small mobile
4. **Line 4520-4523**: `@media (max-width: 414px)` - Extra small mobile
5. **Line 5054-5057**: `@media (min-width: 1366px)` - Desktop
6. **Line 5437-5440**: `@media (max-width: 768px)` - Mobile (duplicate)

## Root Cause

The issue stems from:
1. Multiple conflicting media queries
2. Duplicate base styles with different values
3. The 768px breakpoint applying larger padding/font-size than smaller breakpoints
4. Cascading order causing unexpected overrides
