'use client';

import { useState } from 'react';
import { FAQItem as FAQItemType } from '@/types';

interface FAQItemProps {
  item: FAQItemType;
  defaultExpanded?: boolean;
}

export function FAQItem({ item, defaultExpanded = false }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {item.question}
        </span>
        <svg
          className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 text-gray-700 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
