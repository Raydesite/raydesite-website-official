import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Raydesite: Software solutions for everyone',
		template: '%s | Raydesite',
	},
	description:
		'Custom software development for startups, creators, and businesses. We build landing pages, online stores, web apps, mobile apps, and scalable digital products.',
	keywords: [
		'Landing Page',
		'Online Store',
		'Apps',
		'E-Commerce',
		'Website',
		'Mobile',
		'Shopify',
		'Raydesite',
	],
	authors: [{ name: 'Raydesite' }],
	creator: 'Raydesite',
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://raydesite.com',
		siteName: 'Raydesite',
		title: 'Raydesite: Software solutions for everyone',
		description:
			'Custom software development for landing pages, e-commerce, web apps, mobile apps, Shopify, and automation.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Raydesite: Software solutions for everyone',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Raydesite: Software solutions for everyone',
		description:
			'Custom software development for modern businesses and digital products.',
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
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap'
					rel='stylesheet'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'ProfessionalService',
							name: 'Raydesite',
							description:
								'Custom software development services for businesses and digital products',
							url: 'https://raydesite.com',
							logo: 'https://raydesite.com/logo.png',
							sameAs: [],
							hasOfferCatalog: {
								'@type': 'OfferCatalog',
								name: 'Software development services',
								itemListElement: [
									{
										'@type': 'Offer',
										itemOffered: { '@type': 'Service', name: 'Landing Pages' },
									},
									{
										'@type': 'Offer',
										itemOffered: { '@type': 'Service', name: 'E-commerce Development' },
									},
									{
										'@type': 'Offer',
										itemOffered: { '@type': 'Service', name: 'Web and Mobile Apps' },
									},
									{
										'@type': 'Offer',
										itemOffered: { '@type': 'Service', name: 'Shopify Development' },
									},
								],
							},
						}),
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
