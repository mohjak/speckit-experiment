import { FAQItem } from '@/components/FAQItem';
import { faqs } from '@/data/faqs';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about the blog and my work.',
};

export default function FAQPage() {
  const sortedFAQs = [...faqs].sort((a, b) => a.order - b.order);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about the blog and my work
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {sortedFAQs.map((faq, index) => (
          <FAQItem key={faq.id} item={faq} defaultExpanded={index === 0} />
        ))}
      </div>

      <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-700 mb-6">
          If you didn&apos;t find what you were looking for, feel free to reach out!
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
