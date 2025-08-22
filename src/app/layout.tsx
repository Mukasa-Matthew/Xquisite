import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Script from 'next/script'
import PerformanceMonitor from './components/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://xquisitegadgets.com'),
  title: 'XQUISITE GADGETS - Premium Phones & Accessories in Uganda',
  description: 'Your trusted partner for premium phones and accessories in Uganda. Visit our store in Kampala for the latest smartphones, tablets, and professional repair services.',
  keywords: 'phones, smartphones, tablets, accessories, repairs, Uganda, Kampala, XQUISITE GADGETS',
  authors: [{ name: 'XQUISITE GADGETS' }],
  creator: 'XQUISITE GADGETS',
  publisher: 'XQUISITE GADGETS',
  robots: 'index, follow',
  openGraph: {
    title: 'XQUISITE GADGETS - Premium Phones & Accessories',
    description: 'Your trusted partner for premium phones and accessories in Uganda',
    url: 'https://xquisitegadgets.com',
    siteName: 'XQUISITE GADGETS',
    images: [
      {
        url: '/1000046406.jpg',
        width: 1200,
        height: 630,
        alt: 'XQUISITE GADGETS Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XQUISITE GADGETS - Premium Phones & Accessories',
    description: 'Your trusted partner for premium phones and accessories in Uganda',
    images: ['/1000046406.jpg'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/1000046406.jpg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/1000046406.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/1000046406.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/1000046406.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'XQUISITE GADGETS',
    'application-name': 'XQUISITE GADGETS',
    'msapplication-TileColor': '#0d6efd',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d6efd',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//images.samsung.com" />
        <link rel="dns-prefetch" href="//store.storeimages.cdn-apple.com" />
        <link rel="dns-prefetch" href="//lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="//image.oneplus.com" />
      </head>
      <body className={inter.className}>
        <PerformanceMonitor />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
