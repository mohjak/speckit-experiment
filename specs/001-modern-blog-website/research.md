# Research: Modern Personal Blog Website

**Feature**: Modern Personal Blog Website  
**Date**: 2025-12-05  
**Status**: Complete

## Overview

This document consolidates research findings for implementing a modern personal blog website using Next.js with static site generation. All technical decisions have been validated against project requirements and constitution principles.

---

## Decision: Next.js App Router with Static Site Generation

**Rationale**:
- Next.js 14+ App Router provides built-in static site generation (SSG) via `output: 'export'`
- Pre-renders all pages at build time, ensuring fast load times (<2s requirement)
- File-based routing automatically creates routes for landing, blogs, about, and FAQ pages
- No server/database needed - perfect for static content
- Built-in Image optimization component for performance
- Automatic code splitting reduces bundle size

**Alternatives Considered**:
1. **Gatsby**: Evaluated but Next.js has simpler configuration for pure SSG and better TypeScript support
2. **Create React App + React Router**: Lacks SSG capabilities, would require client-side rendering
3. **Vanilla HTML/CSS/JS**: Would require manual build tooling for modern features and lacks component reusability
4. **Astro**: Strong SSG candidate but Next.js has larger ecosystem and better long-term maintainability

---

## Decision: Tailwind CSS for Styling

**Rationale**:
- Utility-first approach enables rapid development of modern, sleek designs
- Excellent responsive design utilities (mobile-first by default)
- Small production bundle size (purges unused CSS)
- Built-in design system promotes visual consistency across pages
- First-class Next.js integration

**Alternatives Considered**:
1. **CSS Modules**: Evaluated but requires more custom CSS writing, slower development
2. **Styled Components**: CSS-in-JS adds runtime overhead, conflicts with SSG performance goals
3. **Bootstrap**: Pre-built components don't align with "standout" design requirement
4. **Vanilla CSS**: Lacks design system, difficult to maintain responsive designs

---

## Decision: TypeScript for Type Safety

**Rationale**:
- Type safety for blog post data structures prevents runtime errors
- Excellent IDE support improves development experience
- Self-documenting code through interfaces/types
- Next.js has first-class TypeScript support
- Catches errors at compile time before deployment

**Alternatives Considered**:
1. **JavaScript**: Simpler but loses type safety benefits, especially important for data structures
2. **JSDoc**: Provides some typing but less robust than TypeScript

---

## Decision: Embedded Static Data (TypeScript/JSON)

**Rationale**:
- 20 blog posts can be stored as TypeScript objects or JSON files in `/data` directory
- Enables type checking for blog post structure
- Simple to version control and modify
- No build-time complexity (no CMS, no external APIs)
- Perfectly aligned with "no external feeds" requirement

**Alternatives Considered**:
1. **Markdown files with frontmatter**: Evaluated but adds parsing complexity (gray-matter, remark)
2. **Headless CMS (Contentful, Sanity)**: Violates "no external feeds" requirement
3. **JSON only**: Lacks type safety compared to TypeScript approach

---

## Decision: Jest + React Testing Library for Testing

**Rationale**:
- Industry standard for React component testing
- React Testing Library encourages testing user behavior over implementation
- Jest provides snapshot testing for UI regression detection
- Fast execution with watch mode for development

**Alternatives Considered**:
1. **Vitest**: Faster but Jest has better Next.js integration and larger community
2. **Cypress/Playwright**: E2E testing overkill for static site, adds complexity
3. **No testing**: Violates constitution requirement for automated testing

---

## Decision: Static Image Assets in /public

**Rationale**:
- Next.js Image component optimizes images automatically (WebP, responsive sizes)
- Placeholder image stored for posts without featured images
- All images bundled at build time
- No external image CDN needed for 20 blog posts

**Alternatives Considered**:
1. **External CDN (Cloudinary, Imgix)**: Adds dependency, unnecessary for static content
2. **Unsplash API**: Violates "no external feeds" requirement
3. **Base64 embedded**: Increases bundle size significantly

---

## Decision: Accordion Pattern for FAQ

**Rationale**:
- Scannable format allows users to quickly find relevant questions
- Progressive disclosure reduces page length
- Standard pattern users expect on FAQ pages
- Can be implemented with simple React state or details/summary HTML elements

**Alternatives Considered**:
1. **Full list with all answers visible**: Creates very long page, poor UX
2. **Separate page per question**: Over-engineered for FAQ use case
3. **Search functionality**: Adds complexity, unnecessary for 5-10 FAQs

---

## Decision: File-based Routing with [slug] Dynamic Routes

**Rationale**:
- Each blog post accessible via `/blogs/[slug]` (e.g., `/blogs/my-first-post`)
- Next.js generateStaticParams pre-renders all 20 blog post pages at build time
- Clean URLs improve SEO and user experience
- Automatic 404 handling for invalid slugs

**Alternatives Considered**:
1. **Query parameters** (`/blogs?id=1`): Poor SEO, less readable URLs
2. **Hash routing** (`/blogs#post-1`): Not suitable for SSG, breaks page navigation
3. **Numeric IDs** (`/blogs/1`): Less semantic than slug-based URLs

---

## Decision: Responsive Design with Mobile-First Approach

**Rationale**:
- Tailwind CSS uses mobile-first breakpoints (sm:, md:, lg:, xl:)
- Featured post adapts to single-column on mobile (requirement FR-019)
- Navigation menu collapses to hamburger on small screens
- Blog cards stack vertically on mobile, grid on desktop

**Alternatives Considered**:
1. **Desktop-first**: Harder to adapt down to mobile, not Tailwind default
2. **Separate mobile site**: Over-engineered, violates DRY principle
3. **No responsive design**: Violates constitution requirement III

---

## Best Practices Applied

### Next.js Static Site Generation
- Configure `next.config.js` with `output: 'export'` for pure static export
- Use `generateStaticParams` in dynamic routes to pre-render all blog posts
- Disable features requiring server runtime (API routes, ISR, middleware)
- Optimize images with Next.js Image component (automatic WebP, lazy loading)

### Component Architecture
- Extract reusable components (BlogCard, Navigation, FeaturedPost, FAQItem)
- Use TypeScript interfaces for props to ensure type safety
- Keep components pure and testable (no side effects)
- Co-locate component styles with Tailwind utility classes

### Performance Optimization
- Implement text truncation utilities (60 chars titles, 150 chars excerpts)
- Use Next.js font optimization for web fonts
- Lazy load images below the fold
- Minimize JavaScript bundle with tree shaking

### Data Management
- Create TypeScript interface for BlogPost type
- Centralize all blog posts in `data/blogPosts.ts` array
- Implement utility functions to get featured post (most recent)
- Use stable sort for chronological ordering

### Testing Strategy
- Unit tests for utility functions (truncation, date formatting, featured post selection)
- Component tests for BlogCard, FAQItem rendering
- Snapshot tests for page layouts
- Test responsive behavior with different viewport sizes

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Static build size grows with 20 blog posts | Next.js code splitting isolates each blog post page, only loads on demand |
| Long blog content increases page load time | Implement excerpt truncation, lazy load images, use Next.js Image optimization |
| Manual effort to create 20 mocked blog posts | Create TypeScript template, generate with realistic placeholder content |
| Responsive design complexity | Use Tailwind's mobile-first utilities, test on multiple viewports |
| No search functionality for blogs | Chronological ordering on blogs page is sufficient for 20 posts |

---

## Open Questions Resolved

1. **How to handle blog posts without featured images?**
   - Decision: Store default placeholder image in `/public/images/placeholder.jpg`, referenced in blogUtils

2. **How to select featured post?**
   - Decision: Automatically select most recent post by publication date (FR-018)

3. **FAQ interaction pattern?**
   - Decision: Accordion with expand/collapse using React state or details/summary elements

4. **Text truncation approach?**
   - Decision: Utility function with character limits (60 for titles, 150 for excerpts) + ellipsis

5. **Mobile navigation pattern?**
   - Decision: Hamburger menu that toggles visibility on mobile breakpoints

---

## Summary

All technical unknowns have been resolved. The chosen stack (Next.js + TypeScript + Tailwind CSS) aligns perfectly with the constitution requirements for modern design, performance, and static content management. No external dependencies or complex build processes are needed. The implementation can proceed to Phase 1 (Data Model & Contracts).
