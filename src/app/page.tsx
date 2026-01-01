import { Metadata } from 'next';
import Navbar from '@/src/components/organisms/Navbar';
import Hero from '@/src/components/organisms/Hero';
import Features from '@/src/components/organisms/Features';
import CTA from '@/src/components/organisms/CTA';
import Footer from '@/src/components/organisms/Footer';

export const metadata: Metadata = {
  title: 'Landing Page Template - Next.js 16 + Tailwind CSS',
  description:
    'A modern landing page template built with Next.js 16, Tailwind CSS 4, and TypeScript',
  keywords: ['nextjs', 'tailwindcss', 'typescript', 'landing page', 'template'],
  authors: [{ name: 'Awais Ali' }],
  creator: 'Awais Ali',
  publisher: 'Awais Ali',
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
    title: 'Landing Page Template - Next.js 16 + Tailwind CSS',
    description:
      'A modern landing page template built with Next.js 16, Tailwind CSS 4, and TypeScript',
    siteName: 'LandingPageTemplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page Template - Next.js 16 + Tailwind CSS',
    description:
      'A modern landing page template built with Next.js 16, Tailwind CSS 4, and TypeScript',
    creator: '@awais-sufii',
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
