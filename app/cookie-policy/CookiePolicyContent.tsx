'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function CookiePolicyPage() {
	const { lang } = useLang();
	const data = t[lang].cookiePolicy;

	return (
		<main>
			<Navbar />
			<section
				className='py-32 px-6 relative overflow-hidden'
				aria-labelledby='cookie-heading'
			>
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
					<div className='mb-16'>
						<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4'>
							<span className='w-6 h-0.5 bg-[#F5A623]' />
							{data.label}
						</span>
						<h1
							id='cookie-heading'
							style={{
								fontFamily: 'Syne, sans-serif',
								fontWeight: 800,
								fontSize: 'clamp(2.5rem, 6vw, 4rem)',
								letterSpacing: '-0.02em',
								lineHeight: 1.0,
							}}
						>
							{data.heading}{' '}
							<span className='text-[#F5A623]'>{data.headingAccent}</span>
						</h1>
						<div className='mt-4'>
							<div className='inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg'>
								{data.updated}
							</div>
						</div>
					</div>

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
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[1].body}
								<strong className='text-[#1A1A1A]'>
									{data.sections[1].bodyAccent}
								</strong>{' '}
								{data.sections[1].bodyComplement}
							</p>
						</div>

						<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200'>
							<h2
								className='mb-4'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.15rem',
								}}
							>
								{data.sections[2].title}
							</h2>
							<div className='space-y-4'>
								{data.sections[2].cookieTypes.map((c) => (
									<div
										key={c.type}
										className='border border-[#E5E5E5] rounded-xl p-4'
									>
										<div className='flex items-center gap-2 mb-2'>
											<span
												className='font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2'
												style={{
													backgroundColor: c.color,
													color: c.textColor,
													borderColor: c.textColor,
												}}
											>
												{c.type}
											</span>
										</div>
										<p className='text-[#8A8680] text-sm leading-relaxed'>
											{c.desc}
										</p>
									</div>
								))}
							</div>
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
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[3].body}
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
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[6].body}
								{/* <a
									href='mailto:raydesite@gmail.com'
									className='text-[#1A1A1A] font-bold underline underline-offset-4 hover:text-[#F5A623] transition-colors'
								>
									raydesite@gmail.com
								</a>
								. */}
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
								{data.sections[7].title}
							</h2>
							<p className='text-[#8A8680] leading-relaxed'>
								{data.sections[7].body}
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
