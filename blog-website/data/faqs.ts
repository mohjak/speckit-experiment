import { FAQItem } from '@/types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How often do you publish new blog posts?',
    answer: 'I aim to publish at least one new article per week on various web development topics, including JavaScript, React, Next.js, and modern software engineering practices.',
    category: 'General',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Can I use your blog content for educational purposes?',
    answer: 'Yes, all content is available under Creative Commons Attribution license. Please provide proper attribution by linking back to the original post and mentioning the author.',
    category: 'Content Usage',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'How can I stay updated with new posts?',
    answer: 'You can bookmark the blog page and check back regularly, or follow me on social media platforms where I share new posts and updates.',
    category: 'General',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Do you accept guest posts or collaborations?',
    answer: 'Yes, I\'m open to collaborations and guest posts! Please reach out via email with your proposal, including the topic and why it would be valuable for my audience.',
    category: 'Collaboration',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'What technologies do you typically write about?',
    answer: 'I focus primarily on modern web development technologies including JavaScript, TypeScript, React, Next.js, Node.js, and related tools and frameworks in the ecosystem.',
    category: 'Technical',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'How can I contact you for questions or feedback?',
    answer: 'You can reach me through the social media links on the About page, or send me an email. I try to respond to all messages within 1-2 business days.',
    category: 'Contact',
    order: 6,
  },
  {
    id: 'faq-7',
    question: 'Are your code examples production-ready?',
    answer: 'The code examples are designed to be educational and demonstrate concepts clearly. While they follow best practices, you should review and adapt them for your specific production requirements and security considerations.',
    category: 'Technical',
    order: 7,
  },
  {
    id: 'faq-8',
    question: 'Do you offer consulting or mentorship services?',
    answer: 'Yes, I offer limited consulting and mentorship services for web development projects. Please contact me via email to discuss your needs and availability.',
    category: 'Services',
    order: 8,
  },
];
