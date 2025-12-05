import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'My Blog - Modern Personal Blog',
    template: '%s | My Blog',
  },
  description: 'A modern, sleek personal blog featuring articles on web development, JavaScript, React, Next.js, and modern software engineering practices.',
  keywords: ['blog', 'web development', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myblog.com',
    title: 'My Blog - Modern Personal Blog',
    description: 'Articles on web development and modern software engineering',
    siteName: 'My Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Blog',
    description: 'Articles on web development and modern software engineering',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}