'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className='fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='h-10 w-10 rounded-lg bg-linear-to-r from-blue-500 to-purple-600' />
            <span className='text-xl font-bold text-zinc-900 dark:text-white'>
              YourBrand
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden items-center space-x-8 md:flex'>
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className='text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400'
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className='hidden items-center space-x-4 md:flex'>
            <button className='rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800'>
              Sign In
            </button>
            <button className='rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105'>
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? (
              <X className='h-6 w-6 text-zinc-700 dark:text-zinc-300' />
            ) : (
              <Menu className='h-6 w-6 text-zinc-700 dark:text-zinc-300' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='mt-4 space-y-4 md:hidden'>
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className='block py-2 text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className='flex flex-col space-y-3 pt-4'>
              <button className='rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800'>
                Sign In
              </button>
              <button className='rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-6 py-2 text-sm font-medium text-white'>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
