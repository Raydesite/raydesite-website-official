import type { Metadata } from 'next';
import TermsOfServicePage from './TermsOfServiceContent';

export const metadata: Metadata = {
	title: 'Terms of Service',
	description: 'Terms and conditions for working with Raydesite.',
	alternates: { canonical: 'https://raydesite.com/terms-of-service' },
};

export default function Page() {
	return <TermsOfServicePage />;
}
