import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marbella Hideaway | Luxury Villa on Marbella’s Golden Mile',
  description: 'A fabulous six-bedroom villa on Marbella’s Golden Mile with a lagoon-style pool set within mature private tropical gardens.',
  openGraph: {
    title: 'Marbella Hideaway',
    description: 'Marbella’s most talked-about holiday villa in its class.',
    images: ['/assets/general-04.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
