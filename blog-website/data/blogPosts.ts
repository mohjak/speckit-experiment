import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js and React. This comprehensive guide covers everything from setup to deployment.',
    content: `# Getting Started with Next.js

Next.js is a powerful React framework that enables you to build production-ready applications with ease. In this guide, we'll explore the key features and best practices.

## Why Next.js?

Next.js offers several advantages:
- Server-side rendering for better SEO
- Automatic code splitting
- Built-in routing
- API routes
- Excellent developer experience

## Getting Started

To create a new Next.js application, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Conclusion

Next.js is an excellent choice for modern web applications. Its combination of performance, developer experience, and features makes it a top choice for React developers.`,
    author: 'John Doe',
    publishedDate: '2025-12-01',
    featuredImage: '/images/placeholder.svg',
    tags: ['Next.js', 'React', 'Web Development'],
    readingTime: 5,
  },
  {
    id: '2',
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2025',
    excerpt: 'Discover the latest TypeScript best practices and patterns that will improve your code quality and developer experience.',
    content: `# TypeScript Best Practices

TypeScript has become the de facto standard for building scalable JavaScript applications. Here are some best practices to follow in 2025.

## Type Safety First

Always enable strict mode in your tsconfig.json. This catches potential errors early and improves code quality.

## Use Interfaces and Types Wisely

Prefer interfaces for object shapes and types for unions, intersections, and primitives.

## Conclusion

Following these best practices will help you write better TypeScript code.`,
    author: 'John Doe',
    publishedDate: '2025-11-28',
    featuredImage: '/images/placeholder.svg',
    tags: ['TypeScript', 'Best Practices'],
    readingTime: 4,
  },
  {
    id: '3',
    slug: 'tailwind-css-tips',
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    excerpt: 'Unlock the full potential of Tailwind CSS with these expert tips and tricks for building beautiful, responsive websites.',
    content: `# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that has revolutionized how we style web applications.

## Why Tailwind?

- Rapid development
- Consistent design system
- Small production bundle size
- Responsive by default

## Key Tips

1. Use @apply for common patterns
2. Customize your theme
3. Leverage JIT mode for better performance

## Conclusion

Tailwind CSS enables you to build beautiful UIs quickly and efficiently.`,
    author: 'John Doe',
    publishedDate: '2025-11-25',
    featuredImage: '/images/placeholder.svg',
    tags: ['Tailwind CSS', 'CSS', 'Design'],
    readingTime: 6,
  },
  {
    id: '4',
    slug: 'react-hooks-deep-dive',
    title: 'React Hooks: A Deep Dive',
    excerpt: 'Master React Hooks with this comprehensive guide covering useState, useEffect, useContext, and custom hooks.',
    content: `# React Hooks Deep Dive

React Hooks have transformed how we write React components. Let's explore the most important hooks and when to use them.

## useState

The most basic hook for managing component state.

## useEffect

Handle side effects like data fetching and subscriptions.

## Custom Hooks

Create reusable logic by building your own hooks.

## Conclusion

Hooks make React code more readable and maintainable.`,
    author: 'John Doe',
    publishedDate: '2025-11-20',
    featuredImage: '/images/placeholder.svg',
    tags: ['React', 'Hooks', 'JavaScript'],
    readingTime: 8,
  },
  {
    id: '5',
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization in 2025',
    excerpt: 'Learn the latest techniques for optimizing web performance, from image optimization to code splitting and lazy loading.',
    content: `# Web Performance Optimization

Performance is crucial for user experience and SEO. Here are the latest optimization techniques.

## Image Optimization

Use modern formats like WebP and AVIF. Implement lazy loading for below-the-fold images.

## Code Splitting

Split your JavaScript bundles to load only what's needed.

## Conclusion

Fast websites provide better user experiences and rank higher in search results.`,
    author: 'John Doe',
    publishedDate: '2025-11-15',
    featuredImage: '/images/placeholder.svg',
    tags: ['Performance', 'Web Development', 'Optimization'],
    readingTime: 7,
  },
  {
    id: '6',
    slug: 'modern-css-layouts',
    title: 'Modern CSS Layouts with Flexbox and Grid',
    excerpt: 'Build responsive, flexible layouts using CSS Flexbox and Grid. Learn the differences and when to use each.',
    content: `# Modern CSS Layouts

CSS Flexbox and Grid have revolutionized how we create layouts.

## Flexbox

Perfect for one-dimensional layouts. Great for navigation bars and card layouts.

## CSS Grid

Ideal for two-dimensional layouts. Create complex grid systems with ease.

## Conclusion

Mastering both Flexbox and Grid gives you the tools to build any layout.`,
    author: 'John Doe',
    publishedDate: '2025-11-10',
    featuredImage: '/images/placeholder.svg',
    tags: ['CSS', 'Layouts', 'Flexbox', 'Grid'],
    readingTime: 6,
  },
  {
    id: '7',
    slug: 'javascript-es2025-features',
    title: 'New JavaScript Features in ES2025',
    excerpt: 'Explore the latest JavaScript features introduced in ES2025, including new array methods and improved async handling.',
    content: `# JavaScript ES2025 Features

JavaScript continues to evolve. Here are the exciting new features in ES2025.

## New Array Methods

- Array.prototype.groupBy()
- Array.prototype.toSorted()

## Improved Async Handling

Better error handling with try expressions.

## Conclusion

Stay up to date with the latest JavaScript features to write modern code.`,
    author: 'John Doe',
    publishedDate: '2025-11-05',
    featuredImage: '/images/placeholder.svg',
    tags: ['JavaScript', 'ES2025', 'Programming'],
    readingTime: 5,
  },
  {
    id: '8',
    slug: 'api-design-best-practices',
    title: 'RESTful API Design: Best Practices',
    excerpt: 'Design clean, maintainable RESTful APIs with these proven best practices and industry standards.',
    content: `# RESTful API Design

Well-designed APIs are crucial for modern applications. Here are the best practices.

## Naming Conventions

Use plural nouns for resources: /users, /posts, /comments

## HTTP Methods

- GET for retrieval
- POST for creation
- PUT/PATCH for updates
- DELETE for removal

## Conclusion

Good API design improves developer experience and system maintainability.`,
    author: 'John Doe',
    publishedDate: '2025-10-30',
    featuredImage: '/images/placeholder.svg',
    tags: ['API', 'REST', 'Backend'],
    readingTime: 6,
  },
  {
    id: '9',
    slug: 'git-workflow-strategies',
    title: 'Git Workflow Strategies for Teams',
    excerpt: 'Compare different Git workflows including GitFlow, GitHub Flow, and trunk-based development.',
    content: `# Git Workflow Strategies

Effective Git workflows are essential for team collaboration.

## GitFlow

Feature branches, develop branch, and release branches.

## GitHub Flow

Simple workflow with main branch and feature branches.

## Trunk-Based Development

Frequent commits to main with feature flags.

## Conclusion

Choose the workflow that best fits your team's needs.`,
    author: 'John Doe',
    publishedDate: '2025-10-25',
    featuredImage: '/images/placeholder.svg',
    tags: ['Git', 'Version Control', 'Workflow'],
    readingTime: 5,
  },
  {
    id: '10',
    slug: 'responsive-web-design',
    title: 'Responsive Web Design Principles',
    excerpt: 'Master the fundamentals of responsive web design with mobile-first approach and breakpoint strategies.',
    content: `# Responsive Web Design

Creating websites that work on all devices is essential.

## Mobile-First Approach

Start with mobile designs and enhance for larger screens.

## Breakpoints

Choose breakpoints based on content, not devices.

## Flexible Images

Use max-width: 100% and responsive image techniques.

## Conclusion

Responsive design ensures your website works everywhere.`,
    author: 'John Doe',
    publishedDate: '2025-10-20',
    featuredImage: '/images/placeholder.svg',
    tags: ['Responsive Design', 'CSS', 'Mobile'],
    readingTime: 7,
  },
  {
    id: '11',
    slug: 'testing-react-applications',
    title: 'Testing React Applications: A Complete Guide',
    excerpt: 'Learn how to test React components with Jest and React Testing Library for reliable, maintainable applications.',
    content: `# Testing React Applications

Testing is crucial for maintaining code quality and catching bugs early.

## Jest

JavaScript testing framework with great React support.

## React Testing Library

Test components the way users interact with them.

## Best Practices

- Test behavior, not implementation
- Write integration tests
- Use meaningful test descriptions

## Conclusion

Good tests give you confidence to refactor and ship features faster.`,
    author: 'John Doe',
    publishedDate: '2025-10-15',
    featuredImage: '/images/placeholder.svg',
    tags: ['Testing', 'React', 'Jest'],
    readingTime: 8,
  },
  {
    id: '12',
    slug: 'seo-for-developers',
    title: 'SEO for Web Developers',
    excerpt: 'Understand the technical aspects of SEO and how to optimize your websites for search engines.',
    content: `# SEO for Developers

As developers, we need to understand how to build SEO-friendly websites.

## Meta Tags

Use proper title tags, meta descriptions, and Open Graph tags.

## Semantic HTML

Use semantic elements like header, nav, article, and footer.

## Performance

Fast websites rank better. Optimize images and minimize JavaScript.

## Conclusion

Technical SEO is part of every developer's responsibility.`,
    author: 'John Doe',
    publishedDate: '2025-10-10',
    featuredImage: '/images/placeholder.svg',
    tags: ['SEO', 'Web Development', 'Marketing'],
    readingTime: 6,
  },
  {
    id: '13',
    slug: 'accessibility-web-standards',
    title: 'Web Accessibility: WCAG Guidelines',
    excerpt: 'Make your websites accessible to everyone by following WCAG guidelines and best practices.',
    content: `# Web Accessibility

Building accessible websites is both ethical and legally important.

## WCAG Principles

- Perceivable
- Operable
- Understandable
- Robust

## Key Practices

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Maintain color contrast

## Conclusion

Accessibility benefits everyone and is required by law in many places.`,
    author: 'John Doe',
    publishedDate: '2025-10-05',
    featuredImage: '/images/placeholder.svg',
    tags: ['Accessibility', 'WCAG', 'Standards'],
    readingTime: 7,
  },
  {
    id: '14',
    slug: 'docker-for-developers',
    title: 'Docker for Web Developers',
    excerpt: 'Containerize your applications with Docker for consistent development and deployment environments.',
    content: `# Docker for Developers

Docker simplifies development and deployment by containerizing applications.

## Why Docker?

- Consistent environments
- Easy deployment
- Isolation
- Reproducibility

## Getting Started

Create a Dockerfile, build an image, run a container.

## Conclusion

Docker is an essential tool for modern development workflows.`,
    author: 'John Doe',
    publishedDate: '2025-09-30',
    featuredImage: '/images/placeholder.svg',
    tags: ['Docker', 'DevOps', 'Containers'],
    readingTime: 6,
  },
  {
    id: '15',
    slug: 'graphql-vs-rest',
    title: 'GraphQL vs REST: Choosing the Right API',
    excerpt: 'Compare GraphQL and REST to understand which API architecture is best for your project.',
    content: `# GraphQL vs REST

Both GraphQL and REST are valid approaches to building APIs.

## REST

- Simple and well-understood
- Cacheable
- Good for CRUD operations

## GraphQL

- Flexible queries
- Single endpoint
- Strongly typed
- Efficient data fetching

## Conclusion

Choose based on your specific requirements and team expertise.`,
    author: 'John Doe',
    publishedDate: '2025-09-25',
    featuredImage: '/images/placeholder.svg',
    tags: ['GraphQL', 'REST', 'API'],
    readingTime: 7,
  },
  {
    id: '16',
    slug: 'progressive-web-apps',
    title: 'Building Progressive Web Apps (PWAs)',
    excerpt: 'Create app-like experiences on the web with Progressive Web Apps featuring offline support and push notifications.',
    content: `# Progressive Web Apps

PWAs combine the best of web and native apps.

## Key Features

- Offline support with Service Workers
- Push notifications
- Add to home screen
- Fast and reliable

## Implementation

Create a manifest.json and service worker to enable PWA features.

## Conclusion

PWAs provide app-like experiences without the App Store.`,
    author: 'John Doe',
    publishedDate: '2025-09-20',
    featuredImage: '/images/placeholder.svg',
    tags: ['PWA', 'Web Development', 'Mobile'],
    readingTime: 8,
  },
  {
    id: '17',
    slug: 'serverless-architecture',
    title: 'Serverless Architecture Explained',
    excerpt: 'Understand serverless computing and how to build scalable applications without managing servers.',
    content: `# Serverless Architecture

Serverless doesn't mean no servers—it means you don't manage them.

## Benefits

- Automatic scaling
- Pay per use
- No server management
- Focus on code

## Use Cases

- APIs
- Background jobs
- Event-driven applications

## Conclusion

Serverless is ideal for many modern applications.`,
    author: 'John Doe',
    publishedDate: '2025-09-15',
    featuredImage: '/images/placeholder.svg',
    tags: ['Serverless', 'Cloud', 'Architecture'],
    readingTime: 6,
  },
  {
    id: '18',
    slug: 'web-security-essentials',
    title: 'Web Security Essentials for Developers',
    excerpt: 'Learn essential web security practices to protect your applications from common vulnerabilities.',
    content: `# Web Security Essentials

Security should be a priority from day one.

## Common Vulnerabilities

- XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- SQL Injection
- Insecure authentication

## Best Practices

- Validate all inputs
- Use HTTPS
- Implement CSP headers
- Keep dependencies updated

## Conclusion

Security is everyone's responsibility.`,
    author: 'John Doe',
    publishedDate: '2025-09-10',
    featuredImage: '/images/placeholder.svg',
    tags: ['Security', 'Web Development', 'Best Practices'],
    readingTime: 7,
  },
  {
    id: '19',
    slug: 'ci-cd-pipelines',
    title: 'CI/CD Pipelines: Automate Your Workflow',
    excerpt: 'Set up continuous integration and deployment pipelines to automate testing and deployment.',
    content: `# CI/CD Pipelines

Automate your development workflow with CI/CD.

## Continuous Integration

Automatically build and test code on every commit.

## Continuous Deployment

Automatically deploy to production after tests pass.

## Tools

- GitHub Actions
- GitLab CI
- Jenkins
- CircleCI

## Conclusion

CI/CD improves code quality and deployment speed.`,
    author: 'John Doe',
    publishedDate: '2025-09-05',
    featuredImage: '/images/placeholder.svg',
    tags: ['CI/CD', 'DevOps', 'Automation'],
    readingTime: 6,
  },
  {
    id: '20',
    slug: 'microservices-architecture',
    title: 'Microservices Architecture Patterns',
    excerpt: 'Explore microservices architecture patterns and learn when to use them for building scalable systems.',
    content: `# Microservices Architecture

Break down monolithic applications into smaller, manageable services.

## Benefits

- Independent deployment
- Technology flexibility
- Scalability
- Fault isolation

## Challenges

- Distributed system complexity
- Data consistency
- Network latency

## Patterns

- API Gateway
- Service Discovery
- Circuit Breaker
- Event Sourcing

## Conclusion

Microservices are powerful but come with complexity. Choose wisely based on your needs.`,
    author: 'John Doe',
    publishedDate: '2025-09-01',
    featuredImage: '/images/placeholder.svg',
    tags: ['Microservices', 'Architecture', 'Scalability'],
    readingTime: 9,
  },
];
