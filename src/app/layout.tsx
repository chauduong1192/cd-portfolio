import { Metadata } from 'next';
import { Roboto_Mono, Rubik } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { CoreLayout } from '@/components/CoreLayout';

import { siteConfig } from '@/constant/config';

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const rubik = Rubik({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title_short}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.png`],
    creator: '@ChauDuong1192',
  },
  authors: [
    {
      name: 'Chau Duong',
      url: 'https://chauduong.com',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${robotoMono.variable} ${rubik.variable}`}>
      <body>
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  );
}
