'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function TermsOfServicePage() {
	const { lang } = useLang();
	const data = t[lang].termsOfService;

	return (
		<main>
			<Navbar />
			<section
				className='py-32 px-6 relative overflow-hidden'
				aria-labelledby='terms-heading'
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
							{data.label}
						</span>
						<h1
							id='terms-heading'
							style={{
								fontFamily: 'Syne, sans-serif',
								fontWeight: 800,
								fontSize: 'clamp(2.5rem, 6vw, 4rem)',
								letterSpacing: '-0.02em',
								lineHeight: 1.0,
							}}
						>
							{data.heading}
							<span className='text-[#F5A623]'>{data.headingAccent}</span>
						</h1>
						<div className='flex items-center gap-3 mt-4'>
							<div className='inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg'>
								{data.updated}
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
								{data.sections[0].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[0].body}
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
								{data.sections[1].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed mb-4'>
								{data.sections[1].body}
							</p>
							<ul className='space-y-2 mb-4'>
								{data.sections[1].list.map((item) => (
									<li
										key={item}
										className='flex items-start gap-3 text-[#8A8680]'
									>
										<span className='w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0' />
										{item}
									</li>
								))}
							</ul>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[1].footer}
							</p>
						</div>

						<div className='bg-[#1A1A1A] border-2 border-[#F5A623] rounded-2xl p-8 shadow-[4px_4px_0_#F5A623]'>
							<div className='inline-flex items-center bg-[#F5A623] text-[#1A1A1A] font-mono text-xs px-3 py-1.5 rounded-lg mb-4 font-bold'>
								{data.sections[2].badge}
							</div>
							<h2
								className='mb-3 text-[#F4F3F0]'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								{data.sections[2].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[2].body}
								<a
									href='mailto:raydesite@gmail.com'
									className='text-[#F5A623] font-bold underline underline-offset-4'
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
								{data.sections[3].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed mb-4'>
								{data.sections[3].body}
							</p>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[3].footer}
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
								{data.sections[4].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[4].body}
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
								{data.sections[5].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[5].body}
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
								{data.sections[6].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed mb-4'>
								{data.sections[6].body}
							</p>
							<ul className='space-y-2'>
								{data.sections[6].list.map((item) => (
									<li
										key={item}
										className='flex items-start gap-3 text-[#8A8680]'
									>
										<span className='w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0' />
										{item}
									</li>
								))}
							</ul>
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
								{data.sections[7].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[7].body}
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
								{data.sections[8].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[8].body}
								<a
									href='mailto:raydesite@gmail.com'
									className='text-[#1A1A1A] font-bold underline underline-offset-4 hover:text-[#F5A623] transition-colors'
								>
									raydesite@gmail.com
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
