# Issue Tracker

This document tracks all issues found during responsive testing validation.

## Issue Status Legend
- 🔴 **Open** - Issue identified, not yet fixed
- 🟡 **In Progress** - Currently being worked on
- 🟢 **Resolved** - Issue has been fixed
- ⚪ **Won't Fix** - Issue acknowledged but won't be addressed

---

## Critical Issues

### 🔴 ISSUE-001: Language Buttons Enlarge on Mobile
**Severity:** Critical
**Component:** Language Switcher
**Pages Affected:** All pages
**Breakpoints Affected:** 375px, 414px, 480px
**Browser:** All browsers
**Date Found:** [To be filled during testing]

**Description:**
Language buttons (EN, AR, FR) are getting bigger when shrinking the screen, particularly at the top of the page. This is a responsive design flaw where buttons should maintain consistent size or get smaller on mobile devices, not larger.

**Expected Behavior:**
Language buttons should maintain consistent size or reduce in size as viewport width decreases to mobile breakpoints.

**Actual Behavior:**
Language buttons increase in size when viewport shrinks to mobile widths.

**Steps to Reproduce:**
1. Open any page at desktop width (1366px)
2. Measure language button dimensions (font-size, padding, total size)
3. Gradually resize viewport to 768px, 414px, 375px
4. Observe buttons getting larger instead of smaller

**Impact:**
- Poor user experience on mobile devices
- Potential navigation overflow
- Inconsistent with responsive design principles
- May affect button accessibility and usability

**Suggested Fix:**
1. Inspect CSS media queries affecting language buttons
2. Add or modify media queries to reduce button size on mobile
3. Ensure font-size, padding, and dimensions scale down appropriately
4. Test at all breakpoints to verify consistent sizing

**Related Requirements:** 3.7, 3.10, 13.1, 13.2, 13.3, 13.4

**Status:** 🔴 Open
**Assigned To:** [To be assigned]
**Priority:** P0 (Must fix before validation complete)

---

## Major Issues

[Issues will be added here as testing progresses]

---

## Minor Issues

[Issues will be added here as testing progresses]

---

## Issue Summary

| Severity | Open | In Progress | Resolved | Won't Fix | Total |
|----------|------|-------------|----------|-----------|-------|
| Critical | 1    | 0           | 0        | 0         | 1     |
| Major    | 0    | 0           | 0        | 0         | 0     |
| Minor    | 0    | 0           | 0        | 0         | 0     |
| **Total**| **1**| **0**       | **0**    | **0**     | **1** |

---

## Issue Template

Use this template to add new issues:

```markdown
### [Status Icon] ISSUE-XXX: [Brief Title]
**Severity:** [Critical/Major/Minor]
**Component:** [Component name]
**Pages Affected:** [List of pages]
**Breakpoints Affected:** [List of breakpoints]
**Browser:** [Browser(s) where issue occurs]
**Date Found:** [YYYY-MM-DD]

**Description:**
[Detailed description of the issue]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Impact:**
[How this affects users and the site]

**Suggested Fix:**
[Potential solution or approach]

**Related Requirements:** [Requirement numbers]

**Status:** [Icon] [Status]
**Assigned To:** [Name]
**Priority:** [P0/P1/P2/P3]
```
