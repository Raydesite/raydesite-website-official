import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Raydesite — Merch Made for Developers',
    template: '%s | Raydesite',
  },
  description:
    'Stickers, pines, gorras y camisetas diseñadas por developers para developers. Merch otaku, geek, Star Wars y más. Conviértete en un Full-Swag Developer.',
  keywords: [
    'developer merch',
    'stickers programacion',
    'camisetas developers',
    'merch otaku geek',
    'star wars developer',
    'raydesite',
    'pines developers',
    'gorras tech',
  ],
  authors: [{ name: 'Raydesite' }],
  creator: 'Raydesite',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://raydesite.com',
    siteName: 'Raydesite',
    title: 'Raydesite — Merch Made for Developers',
    description:
      'Stickers, pines, gorras y camisetas diseñadas por developers para developers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raydesite — Merch for Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raydesite — Merch Made for Developers',
    description:
      'Stickers, pines, gorras y camisetas diseñadas por developers para developers.',
    images: ['/og-image.png'],
  },
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://raydesite.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Store',
              name: 'Raydesite',
              description: 'Merch made for developers by developers',
              url: 'https://raydesite.com',
              logo: 'https://raydesite.com/logo.png',
              sameAs: [],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Developer Merch',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Stickers' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pines' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gorras' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Camisetas' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
