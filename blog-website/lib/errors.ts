export class NoBlogPostsError extends Error {
  constructor(message: string = 'No blog posts available') {
    super(message);
    this.name = 'NoBlogPostsError';
  }
}

export class BlogPostNotFoundError extends Error {
  slug: string;

  constructor(slug: string) {
    super(`Blog post with slug "${slug}" not found`);
    this.name = 'BlogPostNotFoundError';
    this.slug = slug;
  }
}

export class ValidationError extends Error {
  field: string;
  value: unknown;

  constructor(field: string, value: unknown, message: string) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.value = value;
  }
}
