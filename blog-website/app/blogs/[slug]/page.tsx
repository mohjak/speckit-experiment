import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { getBlogPostBySlug, formatDate, getFeaturedImage } from '@/lib/blogUtils';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(blogPosts, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(blogPosts, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blogs"
        className="inline-flex items-center text-primary hover:text-blue-700 mb-8"
      >
        ← Back to all posts
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <span className="font-medium">{post.author}</span>
          <span>•</span>
          <time dateTime={post.publishedDate}>
            {formatDate(post.publishedDate)}
          </time>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={getFeaturedImage(post)}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/blogs"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          ← Back to All Posts
        </Link>
      </footer>
    </article>
  );
}
