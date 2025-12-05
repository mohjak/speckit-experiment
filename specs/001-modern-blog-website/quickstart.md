# Developer Quickstart Guide

**Feature**: Modern Personal Blog Website  
**Project**: Next.js Static Blog  
**Last Updated**: 2025-12-05

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git
- Code editor (VS Code recommended)

---

## Initial Setup

### 1. Clone and Install

```bash
# Navigate to project directory
cd blog-website

# Install dependencies
npm install

# Verify installation
npm run dev
```

### 2. Project Structure Overview

```
blog-website/
├── app/              # Next.js pages (App Router)
├── components/       # Reusable React components
├── data/            # Static blog data
├── lib/             # Utility functions
├── public/          # Static assets (images)
├── __tests__/       # Test files
└── [config files]   # next.config.js, tailwind.config.ts, etc.
```

---

## Development Workflow

### Run Development Server

```bash
npm run dev
# Visit http://localhost:3000
```

### Build Static Site

```bash
npm run build
# Generates static HTML in /out directory
```

### Preview Production Build

```bash
npm run build
npx serve out
```

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Lint and Format

```bash
# Check for linting errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

---

## Key Files to Know

### Data Files (Start Here)

- **`data/blogPosts.ts`**: Array of 20 blog posts (edit content here)
- **`data/author.ts`**: Author profile information
- **`data/faqs.ts`**: FAQ questions and answers

### Page Files

- **`app/page.tsx`**: Landing page (featured post)
- **`app/blogs/page.tsx`**: All blogs listing
- **`app/blogs/[slug]/page.tsx`**: Individual blog post
- **`app/about/page.tsx`**: About page
- **`app/faq/page.tsx`**: FAQ page
- **`app/layout.tsx`**: Root layout with navigation

### Components

- **`components/Navigation.tsx`**: Navigation menu
- **`components/BlogCard.tsx`**: Blog preview card
- **`components/FeaturedPost.tsx`**: Featured post hero section
- **`components/FAQItem.tsx`**: FAQ accordion item

### Utilities

- **`lib/blogUtils.ts`**: Helper functions (featured post, sorting, truncation)
- **`lib/constants.ts`**: Configuration constants
- **`types/index.ts`**: TypeScript type definitions

---

## Common Tasks

### Add a New Blog Post

1. Open `data/blogPosts.ts`
2. Add new object to the `blogPosts` array:

```typescript
{
  id: '21',
  slug: 'my-new-post',
  title: 'My New Blog Post',
  excerpt: 'A short summary of the post...',
  content: '# Full Content\n\nMarkdown or HTML content here...',
  author: 'John Doe',
  publishedDate: '2025-12-05',
  featuredImage: '/images/my-new-post.jpg',
  tags: ['Web Development'],
  readingTime: 5
}
```

3. Add image to `public/images/` if needed
4. Rebuild: `npm run build`

### Update Author Profile

Edit `data/author.ts`:

```typescript
export const author: AuthorProfile = {
  name: 'Your Name',
  bio: 'Your bio here...',
  profileImage: '/images/your-photo.jpg',
  expertise: ['Skill 1', 'Skill 2'],
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com/you', label: '@you' }
  ]
};
```

### Add FAQ Item

Edit `data/faqs.ts`:

```typescript
{
  id: 'faq-new',
  question: 'Your question here?',
  answer: 'Your answer here...',
  category: 'General',
  order: 10
}
```

### Customize Styling

- **Colors/Fonts**: Edit `tailwind.config.ts`
- **Global Styles**: Edit `app/globals.css`
- **Component Styles**: Tailwind classes in component files

### Change Featured Post Logic

Edit `lib/blogUtils.ts` → `getFeaturedPost()` function.

Default: Most recent post by date. You can change to:
- Specific post by ID
- Random selection
- Most popular (if you add view count)

---

## TypeScript Tips

### Type Definitions

All types are in `types/index.ts`. Import them:

```typescript
import { BlogPost, AuthorProfile, FAQItem } from '@/types';
```

### Utility Functions

Helper functions in `lib/blogUtils.ts`:

```typescript
import { 
  getFeaturedPost, 
  sortPostsByDate, 
  truncateText 
} from '@/lib/blogUtils';
```

### Path Aliases

Use `@/` prefix for absolute imports:

```typescript
import { blogPosts } from '@/data/blogPosts';
import { BlogCard } from '@/components/BlogCard';
```

---

## Testing Guide

### Test Structure

```
__tests__/
├── components/
│   ├── BlogCard.test.tsx
│   └── FAQItem.test.tsx
└── lib/
    └── blogUtils.test.ts
```

### Example Component Test

```typescript
import { render, screen } from '@testing-library/react';
import { BlogCard } from '@/components/BlogCard';

test('renders blog card with title', () => {
  const mockPost = {
    id: '1',
    slug: 'test',
    title: 'Test Post',
    excerpt: 'Test excerpt',
    content: 'Content',
    author: 'Author',
    publishedDate: '2025-12-05'
  };
  
  render(<BlogCard post={mockPost} />);
  expect(screen.getByText('Test Post')).toBeInTheDocument();
});
```

### Example Utility Test

```typescript
import { truncateText } from '@/lib/blogUtils';

test('truncates text longer than max length', () => {
  const result = truncateText('This is a very long text', 10);
  expect(result).toBe('This is a...');
});
```

---

## Deployment

### Build Static Site

```bash
npm run build
```

This generates static HTML/CSS/JS in the `out/` directory.

### Deploy Options

1. **Vercel** (Recommended):
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Netlify**:
   - Drag and drop `out/` folder to Netlify
   - Or connect GitHub repo

3. **GitHub Pages**:
   ```bash
   # Copy out/ contents to gh-pages branch
   npm run build
   npx gh-pages -d out
   ```

4. **Custom Server**:
   - Upload `out/` contents to web server
   - Configure server to serve `index.html` for root routes

---

## Configuration Files

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true  // Required for static export
  }
};

module.exports = nextConfig;
```

### tailwind.config.ts

Customize colors, fonts, breakpoints:

```typescript
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
};
```

### tsconfig.json

Path aliases configured:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## Troubleshooting

### Build Fails with Type Errors

```bash
# Check TypeScript errors
npx tsc --noEmit
```

Fix type errors in reported files.

### Images Not Loading

- Ensure images are in `public/` directory
- Use paths starting with `/` (e.g., `/images/photo.jpg`)
- Check image file names match exactly (case-sensitive)

### Featured Post Not Showing

- Verify `publishedDate` is valid ISO format (YYYY-MM-DD)
- Check `blogPosts` array is not empty
- Ensure dates are realistic (not far future)

### Navigation Not Working

- Check all `href` paths match page routes
- Verify `app/layout.tsx` includes `<Navigation />` component
- Ensure Link components use Next.js `<Link>` not `<a>`

### Styles Not Applied

```bash
# Rebuild Tailwind CSS
npm run dev
# Force clear cache
rm -rf .next
npm run dev
```

---

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image';

<Image 
  src="/images/photo.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority={false}  // Set true for above-fold images
/>
```

### Code Splitting

Next.js automatically code-splits by page. No action needed.

### Font Optimization

Use Next.js font optimization:

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Apply in layout: className={inter.className}
```

---

## Code Quality Checklist

Before committing:

- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm test` (all pass)
- [ ] Run `npm run build` (successful build)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify all images load
- [ ] Check browser console for errors
- [ ] Validate TypeScript types (`npx tsc --noEmit`)

---

## Getting Help

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Common Patterns

All code follows these patterns:
- Functional components (no class components)
- TypeScript for type safety
- Tailwind for styling (no CSS modules)
- Static data (no API calls)
- File-based routing (no React Router)

---

## Summary

**Quick Commands**:
```bash
npm run dev      # Start development
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Check code quality
```

**Key Directories**:
- `data/` → Edit blog content
- `components/` → Reusable UI components
- `app/` → Page routes
- `lib/` → Utility functions

**Next Steps**:
1. Customize blog posts in `data/blogPosts.ts`
2. Update author profile in `data/author.ts`
3. Modify styles in `tailwind.config.ts`
4. Build and deploy: `npm run build`

Happy coding! 🚀
