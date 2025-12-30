import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Documentation', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  Resources: ['Community', 'Support', 'API', 'Status'],
};

export default function Footer() {
  return (
    <footer className='border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-5'>
          <div className='lg:col-span-2'>
            <div className='mb-4 flex items-center space-x-2'>
              <div className='h-10 w-10 rounded-lg bg-linear-to-r from-blue-500 to-purple-600' />
              <span className='text-xl font-bold text-zinc-900 dark:text-white'>
                YourBrand
              </span>
            </div>
            <p className='mb-6 max-w-md text-zinc-600 dark:text-zinc-400'>
              A production-ready template for building modern websites with
              Next.js, Tailwind CSS, and TypeScript.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'
                aria-label='Twitter'
              >
                <Twitter className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className='mb-4 text-sm font-semibold text-zinc-900 dark:text-white'>
                {category}
              </h3>
              <ul className='space-y-3'>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href='#'
                      className='text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className='mt-4 flex space-x-6 text-sm text-zinc-600 dark:text-zinc-400 md:mt-0'>
              <a
                href='#'
                className='hover:text-blue-600 dark:hover:text-blue-400'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='hover:text-blue-600 dark:hover:text-blue-400'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='hover:text-blue-600 dark:hover:text-blue-400'
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
