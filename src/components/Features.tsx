import { Zap, Shield, Code, Rocket, Palette, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className='h-8 w-8' />,
    title: 'Blazing Fast',
    description:
      'Built with Next.js 14 for optimal performance and lightning-fast page loads.',
  },
  {
    icon: <Shield className='h-8 w-8' />,
    title: 'Type Safe',
    description:
      'Full TypeScript support with strict mode enabled for better developer experience.',
  },
  {
    icon: <Code className='h-8 w-8' />,
    title: 'Clean Code',
    description:
      'Well-structured, maintainable code with ESLint and Prettier configurations.',
  },
  {
    icon: <Rocket className='h-8 w-8' />,
    title: 'SEO Optimized',
    description: 'Automatic SEO optimization with next-seo and metadata API.',
  },
  {
    icon: <Palette className='h-8 w-8' />,
    title: 'Modern Design',
    description:
      'Beautiful UI components with Tailwind CSS 4 and dark mode support.',
  },
  {
    icon: <Globe className='h-8 w-8' />,
    title: 'Responsive',
    description:
      'Fully responsive design that works on all devices and screen sizes.',
  },
];

export default function Features() {
  return (
    <section id='features' className='py-20 dark:bg-zinc-900/50'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl'>
            Everything You Need
          </h2>
          <p className='mb-12 text-lg text-zinc-600 dark:text-zinc-300'>
            A complete solution with all the modern tools and best practices
            built-in.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-500 hover:shadow-xl dark:border-zinc-800 dark:bg-black dark:hover:border-blue-400'
            >
              <div className='mb-6 inline-flex rounded-xl bg-linear-to-r from-blue-100 to-purple-100 p-3 text-blue-600 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-400'>
                {feature.icon}
              </div>
              <h3 className='mb-4 text-xl font-semibold text-zinc-900 dark:text-white'>
                {feature.title}
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
