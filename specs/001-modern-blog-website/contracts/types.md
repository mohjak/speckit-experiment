# TypeScript Type Contracts

**Feature**: Modern Personal Blog Website  
**Date**: 2025-12-05  
**Status**: Complete

## Overview

This document defines the TypeScript type contracts for the blog website. Since this is a static site with no API endpoints, these contracts define the data structures and utility function signatures used throughout the application.

---

## Core Type Definitions

### types/index.ts

```typescript
/**
 * Represents an individual blog post
 */
export interface BlogPost {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Post title (max 200 chars) */
  title: string;
  
  /** Short summary for preview (max 300 chars) */
  excerpt: string;
  
  /** Full blog content (Markdown/HTML) */
  content: string;
  
  /** Author name (should match AuthorProfile.name) */
  author: string;
  
  /** Publication date in ISO 8601 format (YYYY-MM-DD) */
  publishedDate: string;
  
  /** Optional path to featured image */
  featuredImage?: string;
  
  /** Optional topic tags */
  tags?: string[];
  
  /** Optional estimated reading time in minutes */
  readingTime?: number;
}

/**
 * Social media or contact link
 */
export interface SocialLink {
  /** Platform name (e.g., "Twitter", "GitHub", "Email") */
  platform: string;
  
  /** Full URL or mailto link */
  url: string;
  
  /** Display label for the link */
  label: string;
}

/**
 * Author biographical profile
 */
export interface AuthorProfile {
  /** Full name */
  name: string;
  
  /** Biographical text */
  bio: string;
  
  /** Optional path to profile photo */
  profileImage?: string;
  
  /** Areas of expertise */
  expertise: string[];
  
  /** Optional social media and contact links */
  socialLinks?: SocialLink[];
}

/**
 * FAQ question-answer pair
 */
export interface FAQItem {
  /** Unique identifier */
  id: string;
  
  /** Question text */
  question: string;
  
  /** Answer content (supports HTML/Markdown) */
  answer: string;
  
  /** Optional grouping category */
  category?: string;
  
  /** Display order (lower = higher priority) */
  order: number;
}
```

---

## Utility Function Contracts

### lib/blogUtils.ts

```typescript
import { BlogPost } from '@/types';

/**
 * Gets the featured blog post (most recent by publication date)
 * @param posts - Array of blog posts
 * @returns The most recent blog post
 * @throws Error if posts array is empty
 */
export function getFeaturedPost(posts: BlogPost[]): BlogPost;

/**
 * Gets a blog post by its slug
 * @param posts - Array of blog posts
 * @param slug - URL slug to search for
 * @returns The matching blog post or undefined if not found
 */
export function getBlogPostBySlug(
  posts: BlogPost[], 
  slug: string
): BlogPost | undefined;

/**
 * Sorts blog posts by publication date (newest first)
 * @param posts - Array of blog posts
 * @returns Sorted array (does not mutate original)
 */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[];

/**
 * Truncates text to specified length with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum character length
 * @returns Truncated text with "..." if exceeded, original otherwise
 */
export function truncateText(text: string, maxLength: number): string;

/**
 * Gets the featured image path or default placeholder
 * @param post - Blog post
 * @returns Featured image path or placeholder path
 */
export function getFeaturedImage(post: BlogPost): string;

/**
 * Formats ISO date string to human-readable format
 * @param dateString - ISO 8601 date string
 * @returns Formatted date (e.g., "December 5, 2025")
 */
export function formatDate(dateString: string): string;

/**
 * Generates static params for Next.js generateStaticParams
 * @param posts - Array of blog posts
 * @returns Array of slug params
 */
export function generateBlogPostParams(posts: BlogPost[]): { slug: string }[];
```

---

## Component Prop Contracts

### components/BlogCard.tsx

```typescript
import { BlogPost } from '@/types';

export interface BlogCardProps {
  /** Blog post to display */
  post: BlogPost;
  
  /** Optional additional CSS classes */
  className?: string;
}

export function BlogCard(props: BlogCardProps): JSX.Element;
```

### components/FeaturedPost.tsx

```typescript
import { BlogPost } from '@/types';

export interface FeaturedPostProps {
  /** Blog post to feature */
  post: BlogPost;
}

export function FeaturedPost(props: FeaturedPostProps): JSX.Element;
```

### components/FAQItem.tsx

```typescript
import { FAQItem } from '@/types';

export interface FAQItemProps {
  /** FAQ item to display */
  item: FAQItem;
  
  /** Whether item is initially expanded */
  defaultExpanded?: boolean;
}

export function FAQItem(props: FAQItemProps): JSX.Element;
```

### components/Navigation.tsx

```typescript
export interface NavLink {
  /** Display label */
  label: string;
  
  /** Destination path */
  href: string;
  
  /** Whether this is the current page */
  active?: boolean;
}

export interface NavigationProps {
  /** Optional additional CSS classes */
  className?: string;
}

export function Navigation(props: NavigationProps): JSX.Element;
```

---

## Page Prop Contracts

### app/blogs/[slug]/page.tsx

```typescript
import { BlogPost } from '@/types';

export interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): { slug: string }[];
export default function BlogPostPage(props: BlogPostPageProps): JSX.Element;
```

---

## Data Module Exports

### data/blogPosts.ts

```typescript
import { BlogPost } from '@/types';

/** Array of 20 blog posts */
export const blogPosts: BlogPost[];
```

### data/author.ts

```typescript
import { AuthorProfile } from '@/types';

/** Author profile information */
export const author: AuthorProfile;
```

### data/faqs.ts

```typescript
import { FAQItem } from '@/types';

/** Array of FAQ items */
export const faqs: FAQItem[];
```

---

## Validation Contracts

### lib/validators.ts

```typescript
import { BlogPost, AuthorProfile, FAQItem } from '@/types';

/**
 * Validates a blog post object
 * @param post - Object to validate
 * @returns True if valid
 * @throws Error with validation message if invalid
 */
export function validateBlogPost(post: unknown): post is BlogPost;

/**
 * Validates an author profile object
 * @param profile - Object to validate
 * @returns True if valid
 * @throws Error with validation message if invalid
 */
export function validateAuthorProfile(profile: unknown): profile is AuthorProfile;

/**
 * Validates an FAQ item object
 * @param item - Object to validate
 * @returns True if valid
 * @throws Error with validation message if invalid
 */
export function validateFAQItem(item: unknown): item is FAQItem;
```

---

## Constants

### lib/constants.ts

```typescript
/** Maximum characters for blog title before truncation */
export const MAX_TITLE_LENGTH = 60;

/** Maximum characters for blog excerpt before truncation */
export const MAX_EXCERPT_LENGTH = 150;

/** Default placeholder image path */
export const DEFAULT_PLACEHOLDER_IMAGE = '/images/placeholder.jpg';

/** Date format for display */
export const DATE_FORMAT = 'MMMM d, yyyy';

/** Navigation menu items */
export const NAV_ITEMS: Array<{ label: string; href: string }> = [
  { label: 'Home', href: '/' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' }
];
```

---

## Error Handling Contracts

### lib/errors.ts

```typescript
/**
 * Error thrown when no blog posts are available
 */
export class NoBlogPostsError extends Error {
  constructor(message?: string);
}

/**
 * Error thrown when blog post is not found
 */
export class BlogPostNotFoundError extends Error {
  slug: string;
  constructor(slug: string);
}

/**
 * Error thrown when validation fails
 */
export class ValidationError extends Error {
  field: string;
  value: unknown;
  constructor(field: string, value: unknown, message: string);
}
```

---

## Testing Contracts

### __tests__/lib/blogUtils.test.ts

```typescript
import { BlogPost } from '@/types';

describe('getFeaturedPost', () => {
  it('should return the most recent blog post');
  it('should throw error if posts array is empty');
});

describe('truncateText', () => {
  it('should truncate text longer than max length');
  it('should not truncate text shorter than max length');
  it('should add ellipsis when truncating');
});

// Additional test signatures...
```

---

## Summary

All contracts are defined using TypeScript's type system. No runtime API contracts are needed since this is a static site. These type definitions ensure:

1. **Type Safety**: Compile-time checking prevents runtime errors
2. **Documentation**: Types serve as self-documenting contracts
3. **IDE Support**: Autocomplete and inline documentation
4. **Validation**: Type guards ensure data integrity

**Contract Coverage**:
- 3 core data interfaces (BlogPost, AuthorProfile, FAQItem)
- 7 utility function signatures
- 4 component prop interfaces
- 1 page prop interface
- 3 validation function signatures
- 4 error class definitions
