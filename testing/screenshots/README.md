# Screenshot Directory Structure

This directory contains screenshots captured during responsive testing validation.

## Directory Organization

```
screenshots/
├── 375px/          # iPhone SE - Small mobile
├── 414px/          # iPhone 12/13/14 - Standard mobile
├── 480px/          # Large mobile
├── 768px/          # Tablet portrait
├── 1024px/         # Tablet landscape / Small laptop
├── 1366px/         # Standard desktop
├── 1920px/         # Large desktop
└── 2560px/         # 4K displays
```

## Naming Convention

Screenshots should follow this naming pattern:
`{page-name}_{breakpoint}_{browser}_{timestamp}.png`

Example: `index_414px_chrome_20251015.png`

## Pages to Test

- index.html (Home)
- about.html (About)
- services.html (Services)
- portfolio.html (Portfolio)
- contact.html (Contact)
- faq.html (FAQ)

## Browsers to Test

- Chrome (desktop and mobile)
- Firefox (desktop and mobile)
- Safari (macOS and iOS)
- Edge (desktop)
