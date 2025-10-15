# Browser DevTools Configuration Guide

This guide provides instructions for configuring browser DevTools for responsive testing.

## Chrome DevTools Setup

### Opening Device Mode
1. Open Chrome DevTools: `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
2. Toggle Device Toolbar: `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)
3. Or click the device icon in the top-left of DevTools

### Configuring Custom Devices
1. Click the device dropdown in the Device Toolbar
2. Select "Edit..." at the bottom
3. Click "Add custom device..."
4. Enter device specifications from `device-profiles.json`
5. Save the device profile

### Setting Exact Viewport Dimensions
1. In Device Mode, select "Responsive" from the device dropdown
2. Enter exact width and height values in the dimension fields
3. Use these exact widths for testing:
   - 375px (iPhone SE)
   - 414px (iPhone 12/13/14)
   - 480px (Large Mobile)
   - 768px (Tablet Portrait)
   - 1024px (Tablet Landscape)
   - 1366px (Standard Desktop)
   - 1920px (Large Desktop)
   - 2560px (4K Display)

### Taking Screenshots
1. Open Device Mode
2. Set the desired viewport size
3. Click the three-dot menu in Device Toolbar
4. Select "Capture screenshot" or "Capture full size screenshot"
5. Save to the appropriate breakpoint folder

### Throttling Network (for performance testing)
1. In DevTools, go to the Network tab
2. Click the throttling dropdown (default: "No throttling")
3. Select "Slow 3G" or "Fast 3G" for mobile testing
4. Test page load times and performance

## Firefox Responsive Design Mode

### Opening Responsive Design Mode
1. Open Firefox Developer Tools: `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
2. Toggle Responsive Design Mode: `Ctrl+Shift+M` (Windows) / `Cmd+Option+M` (Mac)
3. Or click the responsive design icon in the toolbar

### Setting Viewport Dimensions
1. Use the dimension dropdowns or enter custom values
2. Test at all target breakpoints: 375px, 414px, 480px, 768px, 1024px, 1366px, 1920px, 2560px

### Taking Screenshots
1. Click the camera icon in the Responsive Design Mode toolbar
2. Save to the appropriate breakpoint folder

## Safari Web Inspector

### Opening Web Inspector
1. Enable Developer menu: Safari > Preferences > Advanced > "Show Develop menu in menu bar"
2. Open Web Inspector: `Cmd+Option+I`
3. Or right-click and select "Inspect Element"

### Responsive Design Mode
1. In Web Inspector, click the device icon or press `Cmd+Shift+R`
2. Select device from the dropdown or enter custom dimensions
3. Test at all target breakpoints

### Taking Screenshots
1. Use macOS screenshot tools: `Cmd+Shift+4` for selection
2. Or use Safari's built-in screenshot feature

## Edge DevTools

### Opening DevTools
1. Open Edge DevTools: `F12` or `Ctrl+Shift+I`
2. Toggle Device Emulation: `Ctrl+Shift+M`
3. Or click the device icon in DevTools

### Configuration
- Edge DevTools are based on Chromium, so follow Chrome instructions
- Test at all target breakpoints
- Verify CSS Grid and Flexbox support

## Testing Checklist

For each page and breakpoint combination:

- [ ] Set exact viewport width
- [ ] Verify no horizontal scrolling
- [ ] Check that appropriate media queries are applied
- [ ] Test interactive features (navigation, forms, modals)
- [ ] Take screenshot
- [ ] Document any issues

## Media Query Inspection

### Chrome DevTools
1. Open DevTools > Sources tab
2. Navigate to CSS files
3. Look for `@media` queries
4. Set breakpoints to see which queries are active

### Firefox DevTools
1. Open DevTools > Style Editor
2. View media queries in the sidebar
3. Click to jump to specific media query rules

## Performance Testing

### Chrome Lighthouse
1. Open DevTools > Lighthouse tab
2. Select "Mobile" or "Desktop"
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Click "Generate report"
5. Review scores and recommendations

### Performance Tab
1. Open DevTools > Performance tab
2. Click record button
3. Interact with the page (scroll, click, etc.)
4. Stop recording
5. Analyze frame rate, layout shifts, and performance metrics

## Accessibility Testing

### Chrome DevTools
1. Open DevTools > Lighthouse tab
2. Run Accessibility audit
3. Review issues and recommendations

### axe DevTools Extension
1. Install axe DevTools extension
2. Open DevTools > axe DevTools tab
3. Click "Scan ALL of my page"
4. Review accessibility issues

## Tips for Efficient Testing

1. **Use keyboard shortcuts** to quickly toggle device mode
2. **Create custom device profiles** for frequently tested breakpoints
3. **Use full-page screenshots** to capture entire page layout
4. **Test in incognito/private mode** to avoid extension interference
5. **Clear cache** between tests for accurate performance measurements
6. **Test both portrait and landscape** orientations for mobile/tablet
7. **Use network throttling** to simulate real-world conditions
8. **Document issues immediately** with screenshots and descriptions
