import { FeaturedPost } from '@/components/FeaturedPost';
import { blogPosts } from '@/data/blogPosts';
import { getFeaturedPost } from '@/lib/blogUtils';

export default function Home() {
  const featuredPost = getFeaturedPost(blogPosts);

  return (
    <div>
      <FeaturedPost post={featuredPost} />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to My Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore articles on web development, JavaScript, React, and modern software engineering practices.
          </p>
          <a
            href="/blogs"
            className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View All Posts
          </a>
        </div>
      </section>
    </div>
  );
}
