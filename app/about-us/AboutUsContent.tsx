'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function AboutUsContent() {
	const { lang } = useLang();
	const data = t[lang].aboutUs;
	const timeline = data.timeline;

	return (
		<main>
			<Navbar />
			<section
				id='about'
				className='pb-24 pt-32 px-6 relative overflow-hidden'
				aria-labelledby='about-heading'
			>
				{/* Background line grid */}
				<div
					className='absolute inset-0 opacity-[0.04]'
					style={{
						backgroundImage:
							'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
					aria-hidden='true'
				/>

				<div className='max-w-7xl mx-auto relative'>
					{/* Section header */}
					<div className='mb-20'>
						<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4'>
							<span className='w-6 h-0.5 bg-[#F5A623]' />
							{data.sectionLabel}
						</span>
						<div className='grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end'>
							<h2
								id='about-heading'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 800,
									fontSize: 'clamp(2.5rem, 6vw, 5rem)',
									letterSpacing: '-0.02em',
									lineHeight: 1.0,
								}}
							>
								{data.heading}{' '}
								<span className='relative inline-block'>
									<span className='relative z-10 text-[#F5A623]'>
										{data.headingAccent}
									</span>
									<span
										className='absolute bottom-1 left-0 right-0 h-3 bg-[#F5A623] opacity-20 rounded'
										aria-hidden='true'
									/>
								</span>{' '}
								{data.headingEnd}
							</h2>
							<p
								className='text-[#8A8680] text-base leading-relaxed'
								style={{ fontFamily: 'DM Sans, sans-serif' }}
							>
								{data.subheading}
							</p>
						</div>
					</div>

					{/* Timeline — grid real, sin spacers */}
					<div className='relative'>
						{/* Línea central — desktop */}
						<div
							className='absolute top-0 bottom-0 w-0.5 bg-[#E5E5E5] hidden lg:block'
							style={{ left: 'calc(50% - 1px)' }}
							aria-hidden='true'
						/>

						<div className='flex flex-col gap-12'>
							{timeline.map((item, i) => (
								<div
									key={i}
									className='grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] items-center gap-4 lg:gap-0'
								>
									{/* LEFT slot */}
									{item.side === 'left' ? (
										<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 hover:shadow-[6px_6px_0_#1A1A1A] hover:-translate-y-1 transition-all duration-200 lg:mr-6'>
											<div className='flex items-center gap-2 mb-4'>
												<span
													className='font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2'
													style={{
														backgroundColor: item.tagColor,
														color: item.tagText,
														borderColor: item.tagText,
													}}
												>
													{item.tag}
												</span>
											</div>
											<h3
												className='mb-2'
												style={{
													fontFamily: 'Syne, sans-serif',
													fontWeight: 700,
													fontSize: '1.15rem',
													letterSpacing: '-0.01em',
												}}
											>
												{item.title}
											</h3>
											<p
												className='text-[#8A8680] text-sm leading-relaxed mb-4'
												style={{ fontFamily: 'DM Sans, sans-serif' }}
											>
												{item.body}
											</p>
											{item.badge && (
												<div className='inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg'>
													{item.badge}
												</div>
											)}
										</div>
									) : (
										<div className='hidden lg:block' />
									)}

									{/* CENTER dot + date */}
									<div className='hidden lg:flex flex-col items-center gap-2'>
										<div className='w-5 h-5 bg-[#F5A623] border-2 border-[#1A1A1A] rounded-full shadow-[2px_2px_0_#1A1A1A] z-10' />
										<span className='font-mono text-xs text-[#8A8680] uppercase tracking-widest text-center whitespace-nowrap'>
											{item.date}
										</span>
									</div>

									{/* Mobile dot + date */}
									<div className='lg:hidden flex items-center gap-3'>
										<div className='w-4 h-4 bg-[#F5A623] border-2 border-[#1A1A1A] rounded-full flex-shrink-0' />
										<span className='font-mono text-xs text-[#8A8680] uppercase tracking-widest'>
											{item.date}
										</span>
									</div>

									{/* RIGHT slot */}
									{item.side === 'right' ? (
										<div className='bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 hover:shadow-[6px_6px_0_#1A1A1A] hover:-translate-y-1 transition-all duration-200 lg:ml-6'>
											<div className='flex items-center gap-2 mb-4'>
												<span
													className='font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2'
													style={{
														backgroundColor: item.tagColor,
														color: item.tagText,
														borderColor: item.tagText,
													}}
												>
													{item.tag}
												</span>
											</div>
											<h3
												className='mb-2'
												style={{
													fontFamily: 'Syne, sans-serif',
													fontWeight: 700,
													fontSize: '1.15rem',
													letterSpacing: '-0.01em',
												}}
											>
												{item.title}
											</h3>
											<p
												className='text-[#8A8680] text-sm leading-relaxed mb-4'
												style={{ fontFamily: 'DM Sans, sans-serif' }}
											>
												{item.body}
											</p>
											{item.badge && (
												<div className='inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg'>
													{item.badge}
												</div>
											)}
										</div>
									) : (
										<div className='hidden lg:block' />
									)}
								</div>
							))}
						</div>
					</div>

					{/* Bottom CTA */}
					<div className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A] border-2 border-[#1A1A1A] rounded-2xl overflow-hidden shadow-[6px_6px_0_#1A1A1A]'>
						<div className='bg-[#F4F3F0] p-10'>
							<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4'>
								<span className='w-4 h-0.5 bg-[#F5A623]' />
								{data.ctaLabel}
							</span>
							<h3
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 800,
									fontSize: 'clamp(1.5rem, 3vw, 2rem)',
									letterSpacing: '-0.02em',
									lineHeight: 1.1,
								}}
								className='mb-6'
							>
								{data.ctaHeading}{' '}
								<span className='text-[#F5A623]'>{data.ctaAccent}</span>
							</h3>
							<a
								href='/#quote'
								className='inline-flex items-center gap-3 bg-[#1A1A1A] text-[#F4F3F0] font-mono font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full border-2 border-[#1A1A1A] hover:bg-[#F5A623] hover:text-[#1A1A1A] transition-all duration-200 hover:shadow-[4px_4px_0_#1A1A1A]'
							>
								{data.ctaButton}
							</a>
						</div>
						<div className='bg-[#1A1A1A] p-10 flex flex-col justify-between'>
							<div className='font-mono text-xs text-[#3A3A3A] uppercase tracking-widest mb-6'>
								// stack.raydesite
							</div>
							<div className='space-y-3'>
								{data.stats.map((stat) => (
									<div
										key={stat.label}
										className='flex items-center justify-between'
									>
										<span className='font-mono text-xs text-[#8A8680] uppercase tracking-widest'>
											{stat.label}
										</span>
										<span className='font-mono text-xs text-[#F5A623] font-bold'>
											{stat.value}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
