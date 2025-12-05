import { AuthorProfile } from '@/types';

export const author: AuthorProfile = {
  name: 'John Doe',
  bio: 'Full-stack developer passionate about modern web technologies, open source, and building great user experiences. I love sharing knowledge and helping others grow as developers.',
  profileImage: '/images/placeholder.svg',
  expertise: [
    'Web Development',
    'JavaScript & TypeScript',
    'React & Next.js',
    'Node.js',
    'Cloud Architecture',
    'DevOps & CI/CD',
  ],
  socialLinks: [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/johndoe',
      label: '@johndoe',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/johndoe',
      label: 'github.com/johndoe',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      label: 'linkedin.com/in/johndoe',
    },
    {
      platform: 'Email',
      url: 'mailto:john@example.com',
      label: 'john@example.com',
    },
  ],
};
