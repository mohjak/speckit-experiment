import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { sortPostsByDate } from '@/lib/blogUtils';

export const metadata = {
  title: 'All Blog Posts',
  description: 'Browse all blog posts on web development, JavaScript, React, and more.',
};

export default function BlogsPage() {
  const sortedPosts = sortPostsByDate(blogPosts);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          All Blog Posts
        </h1>
        <p className="text-lg text-gray-600">
          Explore {blogPosts.length} articles on web development, programming, and technology.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
