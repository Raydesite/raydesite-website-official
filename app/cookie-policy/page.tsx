import type { Metadata } from 'next';
import CookiePolicyPage from './CookiePolicyContent';

export const metadata: Metadata = {
	title: 'Cookie Policy',
	description: 'How Raydesite uses cookies on its website.',
	alternates: { canonical: 'https://raydesite.com/cookie-policy' },
};

export default function Page() {
	return <CookiePolicyPage />;
}
