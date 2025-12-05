import Image from 'next/image';
import { author } from '@/data/author';

export const metadata = {
  title: 'About Me',
  description: author.bio,
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-600">
          Get to know the person behind the blog
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-64">
            <div className="relative h-64 md:h-full w-full">
              <Image
                src={author.profileImage || '/images/placeholder.svg'}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {author.name}
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {author.bio}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {author.socialLinks && author.socialLinks.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-3">
                  {author.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors"
                    >
                      <span className="font-medium">{link.platform}</span>
                      <span className="text-sm text-gray-600 group-hover:text-white">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/blogs"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Read My Blog Posts
        </a>
      </div>
    </div>
  );
}
