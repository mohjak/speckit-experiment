import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { formatDate, getFeaturedImage } from '@/lib/blogUtils';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Featured Post
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-blue-100 mb-8">
              <span>{formatDate(post.publishedDate)}</span>
              {post.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>
            
            <Link
              href={`/blogs/${post.slug}`}
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Read More →
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={getFeaturedImage(post)}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
