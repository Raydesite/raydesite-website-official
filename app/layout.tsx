import type { Metadata } from 'next';
import { Syne, DM_Sans, Space_Mono } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const syne = Syne({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-display',
	display: 'swap',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-body',
	display: 'swap',
});

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-mono',
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: 'Raydesite — Software built to last. Businesses built to scale.',
		template: '%s | Raydesite',
	},
	description:
		'Raydesite is a software development studio that builds landing pages, e-commerce stores, web apps, mobile apps, and Shopify storefronts. Clean code, sharp design, production-ready.',
	keywords: [
		'custom software development',
		'Next.js development studio',
		'Shopify developer',
		'landing page development',
		'e-commerce development',
		'web app development',
		'mobile app development',
		'software studio',
		'freelance developer',
		'Raydesite',
	],
	authors: [{ name: 'Raydesite', url: 'https://raydesite.com' }],
	creator: 'Raydesite',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://raydesite.com',
		siteName: 'Raydesite',
		title: 'Raydesite — Software built to last. Businesses built to scale.',
		description:
			'Software studio building landing pages, e-commerce, web apps, mobile apps, and Shopify storefronts. Clean code, sharp design.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Raydesite — Software built to last. Businesses built to scale.',
		description:
			'Software studio building landing pages, e-commerce, web apps, and mobile apps. Clean code, sharp design.',
		site: '@raydesite',
		creator: '@raydesite',
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
		icon: '/icon.svg',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
	metadataBase: new URL('https://raydesite.com'),
	alternates: {
		canonical: 'https://raydesite.com',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}
		>
			<head>
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
							sameAs: [
								'https://www.instagram.com/raydesite',
								'https://www.tiktok.com/@raydesite.dev',
								'https://github.com/raydesite',
							],
							contactPoint: {
								'@type': 'ContactPoint',
								email: 'raydesite@gmail.com',
								contactType: 'customer support',
								availableLanguage: ['English', 'Spanish'],
							},
							hasOfferCatalog: {
								'@type': 'OfferCatalog',
								name: 'Software development services',
								itemListElement: [
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Landing Pages Development',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'E-commerce Development',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Web and Mobile Apps',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Shopify Development',
										},
									},
								],
							},
						}),
					}}
				/>
			</head>
			<body>
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
