import type { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
	title: 'Privacy Policy', // → "Privacy Policy | Raydesite" gracias al template
	description: 'How Raydesite handles your personal information.',
	alternates: { canonical: 'https://raydesite.com/privacy-policy' },
};

export default function Page() {
	return <PrivacyPolicyContent />;
}
