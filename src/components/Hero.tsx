'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className='pt-32 pb-20 md:pt-40 md:pb-28'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm text-zinc-700 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/50 dark:text-zinc-300'>
            <Sparkles className='mr-2 h-4 w-4' />
            <span>Next.js 14 + Tailwind CSS 4 + TypeScript</span>
          </div>

          <h1 className='mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-6xl lg:text-7xl'>
            Build Modern Websites
            <span className='block bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
              Faster Than Ever
            </span>
          </h1>

          <p className='mb-10 text-lg text-zinc-600 dark:text-zinc-300 md:text-xl'>
            A production-ready landing page template built with Next.js 14,
            Tailwind CSS 4, and TypeScript. Perfect for startups, SaaS products,
            and personal projects.
          </p>

          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <button className='group flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:shadow-xl'>
              Get Started Free
              <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
            </button>
            <button className='rounded-lg border border-zinc-300 px-8 py-3 text-base font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900'>
              View Demo
            </button>
          </div>

          <div className='mt-16 rounded-2xl border border-zinc-200 bg-linear-to-b from-white to-zinc-50 p-1 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-black'>
            <div className='rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-black'>
              <div className='flex items-center justify-center space-x-2'>
                {['React', 'TypeScript', 'Tailwind', 'Next.js'].map(tech => (
                  <span
                    key={tech}
                    className='rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
