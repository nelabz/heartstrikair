# neLabz HeartStrikair Website - Claude Project Context

## Project Overview

This is a modern TypeScript React single-page marketing website for neLabz's HeartStrikair air hockey table. The site showcases an innovative Arduino-controlled air hockey table with LED lighting, dynamic goal sizing, and kid-friendly features.

**Target Audience:** German-speaking market
**Deployment:** GitHub Pages
**Status:** Production-ready

## Tech Stack

### Core
- **React 18.2.0** with TypeScript 4.9.5
- **React Router DOM 6.20.0** for client-side routing
- **Tailwind CSS 3.3.6** for styling
- **Lucide React 0.294.0** for icons

### Build & Development
- **Create React App** (React Scripts 5.0.1)
- **ESLint** with strict TypeScript rules
- **Prettier** for code formatting
- **PostCSS** with Autoprefixer

### Deployment
- **gh-pages** for GitHub Pages deployment

## Project Structure

```
src/
├── components/              # All React components
│   ├── Navigation.tsx       # Fixed header with mobile menu
│   ├── HeroSection.tsx      # Landing section
│   ├── FeaturesSection.tsx  # 5 feature cards
│   ├── VideoSection.tsx     # YouTube video link
│   ├── GallerySection.tsx   # 3 product images
│   ├── StorySection.tsx     # Origin story
│   ├── ContactSection.tsx   # Contact CTA
│   ├── Footer.tsx           # Site footer
│   ├── ImpressumPage.tsx    # Legal imprint (German requirement)
│   ├── DatenschutzPage.tsx  # Privacy policy (GDPR)
│   └── index.ts             # Component barrel exports
├── App.tsx                  # Main app with router setup
├── index.tsx                # React entry point
└── index.css                # Global styles & animations
```

## Component Architecture

### Routing Structure
- **/** - HomePage (single-page scroll layout)
  - HeroSection
  - FeaturesSection
  - VideoSection
  - GallerySection
  - StorySection
  - ContactSection
- **/impressum** - Legal imprint page
- **/datenschutz** - Privacy policy page

### Navigation Behavior
- **Homepage**: Smooth scroll to sections via anchor links (#features, #gallery, #video, #story, #contact)
- **Other pages**: Standard routing with React Router
- **ScrollToTop**: Utility component that scrolls to top on route change

### Component Patterns
All components follow these conventions:
- Export as default function
- Explicit JSX.Element return type
- TypeScript interfaces for props/data
- No inline styles (Tailwind only)
- Responsive mobile-first design

## Design System

### Color Palette
- **Primary Gradient:** `from-purple-500 to-pink-500`
- **Background:** `bg-black`
- **Text:** White (`text-white`) and Gray shades
- **Accent Borders:** `border-purple-900/30` with opacity variants
- **Hover States:** `hover:text-purple-400`, `hover:border-purple-500/50`

### Visual Effects
- **Glassmorphism:** `bg-black/90 backdrop-blur-md`
- **Gradient Cards:** `bg-gradient-to-br from-purple-900/20 to-pink-900/20`
- **Shadows:** `shadow-2xl shadow-purple-500/50`
- **Hover Scale:** `hover:scale-105 transition-transform`

### Custom Styles (index.css)
- Custom purple/pink gradient scrollbar
- Smooth scrolling behavior
- 15s infinite gradient animation
- Focus states for accessibility

### Responsive Breakpoints
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Mobile menu (hamburger) for screens < md

## Code Style Guidelines

### TypeScript
- **Strict mode enabled** - no implicit any
- **Explicit return types** required for all functions
- **Interface over type** for object shapes
- **Consistent naming:**
  - Components: PascalCase
  - Functions/variables: camelCase
  - Constants: UPPER_SNAKE_CASE

### React Patterns
- **Functional components only** (no class components)
- **Hooks:**
  - useState for local state
  - useLocation for route awareness
  - useEffect for side effects (scroll behavior)
- **Event handlers:** Use arrow functions in components
- **Conditional rendering:** Prefer `&&` for simple conditions, ternary for if/else

### Import Organization
1. External libraries (React, Router, Icons)
2. Internal components
3. Styles/assets
4. Alphabetically sorted within groups

Example:
```typescript
import {Menu, Sparkles, X} from "lucide-react";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
```

### Tailwind CSS
- **Utility-first** - no custom CSS classes unless absolutely necessary
- **Responsive classes** - mobile-first with breakpoint prefixes
- **Consistent spacing** - use Tailwind spacing scale (px-4, py-8, space-x-2)
- **No inline styles** - everything via Tailwind utilities

## Important Implementation Details

### Router Links
**CRITICAL:** Always import `Link` from `react-router-dom`, NOT from `lucide-react`
```typescript
// CORRECT
import {Link} from "react-router-dom";

// WRONG - lucide-react's Link is an icon, not a router component
import {Link} from "lucide-react";
```

### Section IDs
Home page sections must have these exact IDs for anchor navigation:
- `id="features"` - FeaturesSection
- `id="gallery"` - GallerySection
- `id="video"` - VideoSection
- `id="story"` - StorySection
- `id="contact"` - ContactSection

### Image Handling
- Always provide fallback UI for failed image loads
- Use placeholder with Sparkles icon on error
- Images from nelabz.com domain

### YouTube Video
- Video ID: `XBRLSKf_d3Y`
- Custom thumbnail: `/heartstrikair-thumbnail.jpeg`
- Opens in new window with `target="_blank"`

## Development Workflow

### Available Scripts
```bash
npm start          # Development server (localhost:3000)
npm run build      # Production build
npm run lint       # ESLint check
npm run lint:fix   # Auto-fix lint errors
npm run format     # Prettier format all files
npm run check-all  # Run all checks (lint + format check)
npm run fix-all    # Auto-fix all issues
npm run deploy     # Deploy to GitHub Pages
```

### Code Quality Checks
Before committing, always run:
```bash
npm run fix-all    # Fixes lint and format issues
npm run check-all  # Verifies everything passes
```

### ESLint Rules
- Explicit function return types required
- No unused variables (except _prefixed)
- Consistent import ordering
- React hooks rules enforced
- TypeScript strict checks

### Prettier Configuration
- Print width: 120 characters
- Trailing commas: all
- Bracket spacing: false
- Arrow parens: avoid (single parameter)

## Content Guidelines

### Language
- **Primary language:** German
- **Tone:** Professional but approachable
- **Product name:** HeartStrikair (capitalize correctly)
- **Company:** neLabz / nifty engineering LABZ

### Legal Pages (German Requirement)
- **Impressum:** Legal imprint with company details
- **Datenschutz:** GDPR-compliant privacy policy
- Both accessible from footer and navigation
- Must be separate routes (not modals)

### Email Contact
- Primary: `info@nelabz.com`

## Common Tasks

### Adding a New Component
1. Create in `src/components/ComponentName.tsx`
2. Export default function with explicit return type
3. Add to `src/components/index.ts` barrel export
4. Import in App.tsx or parent component
5. Follow TypeScript strict mode (explicit types)

### Modifying Styles
1. Use Tailwind utilities first
2. Only add to index.css if truly global/reusable
3. Maintain purple/pink gradient theme
4. Test responsive breakpoints (mobile, tablet, desktop)

### Adding a New Route
1. Create page component in `src/components/`
2. Add route in App.tsx `<Routes>` section
3. Add navigation link in Navigation.tsx
4. Add footer link in Footer.tsx
5. Test ScrollToTop behavior

### Deployment
```bash
npm run build      # Build production bundle
npm run deploy     # Deploy to GitHub Pages
```

## Known Issues & Gotchas

### Router Link Import Bug
Previously, `Link` was imported from `lucide-react` instead of `react-router-dom` in Navigation.tsx and Footer.tsx, causing links to not work. This has been fixed but watch for this pattern when adding new navigation.

### Section Scrolling on Non-Home Pages
The Navigation component checks `location.pathname === "/"` to determine scroll behavior. On non-home pages, clicking section links redirects to `/#sectionId` instead of smooth scrolling.

### Mobile Menu State
Mobile menu uses local state and doesn't persist across route changes (intentional - menu should close on navigation).

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020 target
- No IE11 support

## Performance Considerations

- Code splitting via React Router
- Lazy loading not implemented (small app, not needed)
- Images should be optimized before upload
- Tailwind purges unused styles in production

## Accessibility

- Semantic HTML elements used
- Keyboard navigation supported
- Focus states defined in index.css
- Alt text on images
- ARIA labels where appropriate

## Future Enhancements (If Requested)

- [ ] Add lazy loading for images
- [ ] Implement contact form backend
- [ ] Add more gallery images
- [ ] Integrate analytics
- [ ] Add more language support
- [ ] Progressive Web App features

## Questions to Ask User

When working on this project, consider asking:
- Should content be in German or English?
- Are there brand guidelines for colors/fonts?
- What analytics should be integrated?
- Should the contact form actually send emails?
- Are there SEO requirements?

---

**Last Updated:** 2025-11-15
**Maintained By:** neLabz Team
