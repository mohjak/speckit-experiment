export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  featuredImage?: string;
  tags?: string[];
  readingTime?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface AuthorProfile {
  name: string;
  bio: string;
  profileImage?: string;
  expertise: string[];
  socialLinks?: SocialLink[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}
