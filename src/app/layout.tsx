import React from 'react';
import '../style/globals.scss';
import { Inter } from 'next/font/google';

import { Navbar, Footer } from '@/shared/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Grameen Kalyan',
  description:
    'Grameen Kalyan believes in trust, quality and innovation in delivering services. We are on a mission to transform healthcare in Bangladesh at primary, ...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
