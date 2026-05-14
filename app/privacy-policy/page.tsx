import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'How Raydesite handles your personal information.',
	alternates: { canonical: 'https://raydesite.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
	return (
		<main>
			<Navbar />
			<section
				className='py-32 px-6 relative overflow-hidden'
				aria-labelledby='privacy-heading'
			>
				{/* Background grid */}
				<div
					className='absolute inset-0 opacity-[0.04]'
					style={{
						backgroundImage:
							'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
					aria-hidden='true'
				/>

				<div className='max-w-3xl mx-auto relative'>
					{/* Header */}
					<div className='mb-16'>
						<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4'>
							<span className='w-6 h-0.5 bg-[#F5A623]' />
							Legal
						</span>
						<h1
							id='privacy-heading'
							style={{
								fontFamily: 'Syne, sans-serif',
								fontWeight: 800,
								fontSize: 'clamp(2.5rem, 6vw, 4rem)',
								letterSpacing: '-0.02em',
								lineHeight: 1.0,
							}}
						>
							Privacy <span className='text-[#F5A623]'>Policy</span>
						</h1>
						<div className='flex items-center gap-3 mt-4'>
							<div className='inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg'>
								Last updated: May 2025
							</div>
						</div>
					</div>

					{/* Content */}
					<div
						className='space-y-10'
						style={{ fontFamily: 'DM Sans, sans-serif' }}
					>
						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-3'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								1. Who we are
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								Raydesite is a software development studio based in Atlanta,
								Georgia, USA. We build websites, web apps, mobile apps, and
								digital products for clients in the US and internationally. You
								can reach us at{' '}
								<a
									href='mailto:raydesite@gmail.com'
									className='text-[#1A1A1A] font-bold underline underline-offset-4 hover:text-[#F5A623] transition-colors'
								>
									raydesite@gmail.com
								</a>
								.
							</p>
						</div>

						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-3'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								2. What information we collect
							</h2>
							<p className='text-[#8A8680] leading-relaxed mb-4'>
								We only collect information you voluntarily provide through our
								contact form:
							</p>
							<ul className='space-y-2'>
								{[
									'Your name',
									'Your email address',
									'A description of your project or inquiry',
								].map((item) => (
									<li
										key={item}
										className='flex items-start gap-3 text-[#8A8680]'
									>
										<span className='w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0' />
										{item}
									</li>
								))}
							</ul>
							<p className='text-[#8A8680] leading-relaxed mt-4'>
								We do not collect any other personal data. We do not use cookies
								for tracking, analytics, or advertising purposes.
							</p>
						</div>

						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-3'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								3. How we use your information
							</h2>
							<p className='text-[#8A8680] leading-relaxed mb-4'>
								The information you provide is used solely to:
							</p>
							<ul className='space-y-2'>
								{[
									'Respond to your inquiry or project request',
									'Send you a project proposal if applicable',
									'Communicate during the development process',
								].map((item) => (
									<li
										key={item}
										className='flex items-start gap-3 text-[#8A8680]'
									>
										<span className='w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0' />
										{item}
									</li>
								))}
							</ul>
							<p className='text-[#8A8680] leading-relaxed mt-4'>
								We will never sell, rent, or share your personal information
								with third parties. We do not send marketing emails or
								newsletters.
							</p>
						</div>

						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-3'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								4. Data retention
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								We retain your contact information only for as long as necessary
								to complete your project or respond to your inquiry. If no
								project agreement is reached, your information is deleted within
								90 days of your initial contact.
							</p>
						</div>

						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-3'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								5. Your rights
							</h2>
							<p className='text-[#8A8680] leading-relaxed mb-4'>
								You have the right to:
							</p>
							<ul className='space-y-2'>
								{[
									'Request access to the personal data we hold about you',
									'Request correction or deletion of your data',
									'Withdraw consent at any time by contacting us',
								].map((item) => (
									<li
										key={item}
										className='flex items-start gap-3 text-[#8A8680]'
									>
										<span className='w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0' />
										{item}
									</li>
								))}
							</ul>
							<p className='text-[#8A8680] leading-relaxed mt-4'>
								To exercise any of these rights, email us at{' '}
								<a
									href='mailto:raydesite@gmail.com'
									className='text-[#1A1A1A] font-bold underline underline-offset-4 hover:text-[#F5A623] transition-colors'
								>
									raydesite@gmail.com
								</a>
								.
							</p>
						</div>

						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-3'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								6. Changes to this policy
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								We may update this Privacy Policy from time to time. Any changes
								will be posted on this page with an updated date. We encourage
								you to review this page periodically.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
