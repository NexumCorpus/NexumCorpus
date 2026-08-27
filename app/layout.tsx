import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexum Corpus — Verifiable Machine Work',
  description: 'An independent estate of agent infrastructure, research instruments, developer tools, and products built to survive inspection.',
  openGraph: {
    type: 'website',
    title: 'Nexum Corpus — Verifiable Machine Work',
    description: 'Instruments for verifiable machine work: agent infrastructure, research systems, developer tools, and products built to survive inspection.',
    images: [{
      url: 'https://raw.githubusercontent.com/NexumCorpus/NexumCorpus/master/public/og.png',
      width: 1729,
      height: 910,
      alt: 'Nexum Corpus — Instruments for Verifiable Machine Work',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexum Corpus — Verifiable Machine Work',
    description: 'Instruments for verifiable machine work.',
    images: ['https://raw.githubusercontent.com/NexumCorpus/NexumCorpus/master/public/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
