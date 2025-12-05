# Data Model: Modern Personal Blog Website

**Feature**: Modern Personal Blog Website  
**Date**: 2025-12-05  
**Status**: Complete

## Overview

This document defines the data structures and entities for the personal blog website. All data is statically typed using TypeScript interfaces and stored as embedded content (no database).

---

## Core Entities

### BlogPost

Represents an individual blog article with all necessary metadata and content.

**Fields**:

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| id | string | Yes | Unique identifier for the post | Alphanumeric, no spaces |
| slug | string | Yes | URL-friendly identifier | Lowercase, hyphen-separated |
| title | string | Yes | Blog post title | 1-200 characters |
| excerpt | string | Yes | Short summary for preview cards | 1-300 characters |
| content | string | Yes | Full blog post content (Markdown or HTML) | Non-empty |
| author | string | Yes | Author name | Non-empty |
| publishedDate | string (ISO 8601) | Yes | Publication date | Valid date format (YYYY-MM-DD) |
| featuredImage | string | No | Path to featured image | Valid path or null |
| tags | string[] | No | Array of topic tags | Array of strings |
| readingTime | number | No | Estimated reading time in minutes | Positive integer |

**TypeScript Interface**:

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string; // ISO 8601 format
  featuredImage?: string;
  tags?: string[];
  readingTime?: number;
}
```

**Relationships**:
- One BlogPost can be designated as the "featured post" (derived via utility function, not stored)
- Author field references the AuthorProfile (by name matching)

**State Transitions**: N/A (static content, no lifecycle states)

---

### AuthorProfile

Contains biographical information about the blog author displayed on the About page.

**Fields**:

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| name | string | Yes | Full name of the author | Non-empty |
| bio | string | Yes | Biographical text | Non-empty |
| profileImage | string | No | Path to profile photo | Valid path or null |
| expertise | string[] | Yes | Areas of expertise | Non-empty array |
| socialLinks | SocialLink[] | No | Social media and contact links | Valid URL format |

**TypeScript Interface**:

```typescript
interface SocialLink {
  platform: string; // e.g., "Twitter", "LinkedIn", "GitHub", "Email"
  url: string;
  label: string; // Display text for link
}

interface AuthorProfile {
  name: string;
  bio: string;
  profileImage?: string;
  expertise: string[];
  socialLinks?: SocialLink[];
}
```

**Relationships**:
- AuthorProfile.name should match BlogPost.author for consistency

**State Transitions**: N/A (static content)

---

### FAQItem

Represents a question-answer pair displayed on the FAQ page.

**Fields**:

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| id | string | Yes | Unique identifier | Alphanumeric |
| question | string | Yes | The FAQ question text | Non-empty |
| answer | string | Yes | The answer content (supports HTML/Markdown) | Non-empty |
| category | string | No | Grouping category (e.g., "General", "Technical") | Optional string |
| order | number | Yes | Display order (lower numbers first) | Non-negative integer |

**TypeScript Interface**:

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}
```

**Relationships**: None

**State Transitions****: N/A (static content)

---

## Derived Data

### FeaturedPost

Not a separate entity - dynamically determined by selecting the BlogPost with the most recent `publishedDate`.

**Determination Logic**:
```typescript
// Utility function in lib/blogUtils.ts
function getFeaturedPost(posts: BlogPost[]): BlogPost {
  return posts.reduce((latest, current) => 
    new Date(current.publishedDate) > new Date(latest.publishedDate) 
      ? current 
      : latest
  );
}
```

---

## Data Storage

### File Structure

All data stored as TypeScript/JSON files in the `/data` directory:

```
data/
├── blogPosts.ts      # Array of 20 BlogPost objects
├── author.ts         # Single AuthorProfile object
└── faqs.ts           # Array of FAQItem objects
```

### Example: blogPosts.ts

```typescript
import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js and React.',
    content: '# Getting Started with Next.js\n\nNext.js is a powerful React framework...',
    author: 'John Doe',
    publishedDate: '2025-12-01',
    featuredImage: '/images/nextjs-starter.jpg',
    tags: ['Next.js', 'React', 'Web Development'],
    readingTime: 5
  },
  // ... 19 more blog posts
];
```

### Example: author.ts

```typescript
import { AuthorProfile } from '@/types';

export const author: AuthorProfile = {
  name: 'John Doe',
  bio: 'Full-stack developer passionate about modern web technologies and open source.',
  profileImage: '/images/author.jpg',
  expertise: ['Web Development', 'JavaScript', 'React', 'Node.js'],
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com/johndoe', label: '@johndoe' },
    { platform: 'GitHub', url: 'https://github.com/johndoe', label: 'johndoe' },
    { platform: 'Email', url: 'mailto:john@example.com', label: 'john@example.com' }
  ]
};
```

### Example: faqs.ts

```typescript
import { FAQItem } from '@/types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How often do you publish new blog posts?',
    answer: 'I aim to publish at least one new article per week on various web development topics.',
    category: 'General',
    order: 1
  },
  {
    id: 'faq-2',
    question: 'Can I use your blog content for educational purposes?',
    answer: 'Yes, all content is available under Creative Commons Attribution license. Please provide proper attribution.',
    category: 'Content Usage',
    order: 2
  },
  // ... more FAQ items
];
```

---

## Validation Rules

### BlogPost Validation

From functional requirements:

- **FR-016**: Title must be truncated to 60 characters with ellipsis if longer
- **FR-016**: Excerpt must be truncated to 150 characters with ellipsis if longer
- **FR-015**: If `featuredImage` is null/undefined, use placeholder image
- **FR-018**: Featured post selection based on most recent `publishedDate`

### AuthorProfile Validation

- `socialLinks` URLs must be valid (starts with `http://`, `https://`, or `mailto:`)
- At least one expertise area must be provided

### FAQItem Validation

- Questions should end with a question mark for consistency
- `order` must be unique across all FAQ items for deterministic sorting

---

## Data Access Patterns

### 1. Get All Blog Posts (Blogs Page)

```typescript
import { blogPosts } from '@/data/blogPosts';

// Sort by date (newest first) - FR-009
const sortedPosts = [...blogPosts].sort((a, b) => 
  new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
);
```

### 2. Get Featured Post (Landing Page)

```typescript
import { getFeaturedPost } from '@/lib/blogUtils';
import { blogPosts } from '@/data/blogPosts';

const featuredPost = getFeaturedPost(blogPosts);
```

### 3. Get Single Blog Post by Slug

```typescript
import { blogPosts } from '@/data/blogPosts';

function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
```

### 4. Get Author Profile (About Page)

```typescript
import { author } from '@/data/author';

// Direct import, single author
```

### 5. Get FAQs (FAQ Page)

```typescript
import { faqs } from '@/data/faqs';

// Sort by order
const sortedFAQs = [...faqs].sort((a, b) => a.order - b.order);
```

---

## Static Generation Requirements

For Next.js Static Site Generation (SSG):

### Generate All Blog Post Pages

```typescript
// app/blogs/[slug]/page.tsx
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug
  }));
}
```

This pre-renders all 20 blog post pages at build time.

---

## Summary

All entities are simple, flat data structures with no complex relationships or state management. TypeScript provides compile-time type safety. The data model supports all functional requirements (FR-001 through FR-019) and aligns with the constitution's static content management principle.

**Entity Count**:
- 20 BlogPost objects
- 1 AuthorProfile object
- 5-10 FAQItem objects

**Total Data Size Estimate**: < 500 KB (text content + metadata, excluding images)
