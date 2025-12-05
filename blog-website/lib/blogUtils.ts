import { BlogPost } from '@/types';
import { NoBlogPostsError } from './errors';
import { DEFAULT_PLACEHOLDER_IMAGE, MAX_EXCERPT_LENGTH, MAX_TITLE_LENGTH } from './constants';

export function getFeaturedPost(posts: BlogPost[]): BlogPost {
  if (!posts || posts.length === 0) {
    throw new NoBlogPostsError();
  }
  
  return posts.reduce((latest, current) => {
    const latestDate = new Date(latest.publishedDate);
    const currentDate = new Date(current.publishedDate);
    return currentDate > latestDate ? current : latest;
  });
}

export function getBlogPostBySlug(
  posts: BlogPost[],
  slug: string
): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedDate);
    const dateB = new Date(b.publishedDate);
    return dateB.getTime() - dateA.getTime();
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

export function getFeaturedImage(post: BlogPost): string {
  return post.featuredImage || DEFAULT_PLACEHOLDER_IMAGE;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export function generateBlogPostParams(posts: BlogPost[]): { slug: string }[] {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
