import { Metadata } from 'next';
import localFont from 'next/font/local';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/mdx.css';

import { CoreLayout } from '@/components/CoreLayout';
import { Toaster } from '@/components/ui/toaster';

import Providers from '@/app/providers';
import { siteConfig } from '@/constant/config';

const robotoMono = localFont({
  src: [
    {
      path: '../../public/fonts/roboto-mono/RobotoMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/roboto-mono/RobotoMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const rubik = localFont({
  src: [
    {
      path: '../../public/fonts/rubik/Rubik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rubik/Rubik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rubik/Rubik-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
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
    <html
      lang='en'
      suppressHydrationWarning
      className={`${robotoMono.variable} ${rubik.variable}`}
    >
      <body>
        <Toaster />
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
