import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { formatDate, truncateText, getFeaturedImage } from '@/lib/blogUtils';
import { MAX_TITLE_LENGTH, MAX_EXCERPT_LENGTH } from '@/lib/constants';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className = '' }: BlogCardProps) {
  const displayTitle = truncateText(post.title, MAX_TITLE_LENGTH);
  const displayExcerpt = truncateText(post.excerpt, MAX_EXCERPT_LENGTH);

  return (
    <Link href={`/blogs/${post.slug}`} className={`block group ${className}`}>
      <article className="h-full bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getFeaturedImage(post)}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span className="font-medium text-gray-700">{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedDate}>
              {formatDate(post.publishedDate)}
            </time>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime} min</span>
              </>
            )}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {displayTitle}
          </h2>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {displayExcerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-50 text-primary rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
