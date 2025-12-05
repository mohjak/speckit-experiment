import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for seems to have wandered off into the digital void. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold shadow-md"
          >
            Go Home
          </Link>
          <Link
            href="/blogs"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 font-semibold"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
