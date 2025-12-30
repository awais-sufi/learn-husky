'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='rounded-3xl bg-linear-to-r from-blue-500 to-purple-600 p-12 text-center shadow-2xl'>
          <h2 className='mb-6 text-3xl font-bold text-white md:text-4xl'>
            Ready to Build Your Next Project?
          </h2>
          <p className='mb-10 text-lg text-blue-100'>
            Get started with this template and save hundreds of hours of
            development time.
          </p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <button className='flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-blue-600 transition-all hover:scale-105 hover:shadow-xl'>
              Clone Template
              <ArrowRight className='ml-2 h-5 w-5' />
            </button>
            <button className='rounded-lg border border-white/30 bg-transparent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10'>
              View Documentation
            </button>
          </div>
          <p className='mt-8 text-sm text-blue-200'>
            Free to use • MIT Licensed • 100% Open Source
          </p>
        </div>
      </div>
    </section>
  );
}
