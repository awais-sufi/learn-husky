import { Metadata } from 'next';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Features from '@/src/components/Features';
import CTA from '@/src/components/CTA';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Landing Page Template - Next.js 14 + Tailwind CSS',
  description:
    'A modern landing page template built with Next.js 14, Tailwind CSS 4, and TypeScript',
  keywords: ['nextjs', 'tailwindcss', 'typescript', 'landing page', 'template'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Landing Page Template - Next.js 14 + Tailwind CSS',
    description:
      'A modern landing page template built with Next.js 14, Tailwind CSS 4, and TypeScript',
    siteName: 'LandingPageTemplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page Template - Next.js 14 + Tailwind CSS',
    description:
      'A modern landing page template built with Next.js 14, Tailwind CSS 4, and TypeScript',
    creator: '@yourtwitter',
  },
};

export default function Home() {
  return (
    <main className='min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900'>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
