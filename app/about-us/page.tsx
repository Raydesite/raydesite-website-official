import type { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
	title: 'About Us',
	description:
		'The story behind Raydesite — two engineers, one unplanned idea.',
	alternates: { canonical: 'https://raydesite.com/about-us' },
};

export default function Page() {
	return <AboutUsContent />;
}
