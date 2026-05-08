'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function Footer() {
	const { lang } = useLang();
	const tr = t[lang].footer;

	return (
		<footer
			className='bg-[#1A1A1A] text-[#F4F3F0] pt-20 pb-8 px-6'
			aria-label='Footer'
		>
			<div className='max-w-7xl mx-auto'>
				{/* Top section */}
				<div className='grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16 pb-16 border-b border-[#2A2A2A]'>
					{/* Brand */}
					<div className='lg:col-span-2'>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-10 h-10 bg-[#1A1A1A] rounded-md flex items-center justify-center overflow-hidden'>
								<svg
									width='22'
									height='33'
									viewBox='0 0 66 100'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										opacity='0.12'
										d='M43.4722 0.511475L0.511414 53.701H27.1062L16.8774 96.6618L61.884 40.4036H35.2892L43.4722 0.511475Z'
										fill='#F5A623'
									/>
									<path
										opacity='0.3'
										d='M47.5637 5.62585L4.60291 58.8154H31.1977L20.9689 101.776L65.9755 45.518H39.3807L47.5637 5.62585Z'
										fill='#E09010'
									/>
									<path
										d='M43.4722 0.511475L0.511414 53.701H27.1062L16.8774 96.6618L61.884 40.4036H35.2892L43.4722 0.511475Z'
										fill='#F5A623'
										stroke='#F5A623'
										strokeWidth='1.02288'
										strokeLinejoin='round'
									/>
									<path
										opacity='0.25'
										d='M37.3349 13.8088L12.7859 51.6552H31.1977L23.0146 83.3644L53.7009 44.4951H33.2434L37.3349 13.8088Z'
										fill='#1A1A1A'
									/>
									<path
										opacity='0.06'
										d='M43.4722 0.511475L35.2892 40.4036H61.884L43.4722 0.511475Z'
										fill='white'
									/>
								</svg>
							</div>
							<span
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 800,
									fontSize: '1.5rem',
								}}
							>
								RAYDESITE
							</span>
						</div>
						<p
							className='text-[#8A8680] leading-relaxed mb-6 max-w-xs'
							style={{ fontFamily: 'DM Sans, sans-serif' }}
						>
							{tr.tagline}
						</p>
						{/* Newsletter */}
						{/* <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A8680] mb-3">
                Get project notes
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.dev"
                  className="flex-1 bg-[#2A2A2A] border-2 border-[#3A3A3A] rounded-full px-4 py-2 font-mono text-sm text-[#F4F3F0] placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#F5A623] transition-colors"
                />
                <button className="bg-[#F5A623] text-[#1A1A1A] font-mono font-bold text-xs uppercase px-4 py-2 rounded-full border-2 border-[#F5A623] hover:bg-transparent hover:text-[#F5A623] transition-all duration-200">
                  Join
                </button>
              </div>
            </div> */}
					</div>

					{/* Links */}
					{(Object.keys(tr.links) as Array<keyof typeof tr.links>).map(
						(category) => (
							<div key={category}>
								<h3 className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623] mb-5'>
									{tr.categories[category]}
								</h3>
								<ul
									className='space-y-3'
									role='list'
								>
									{tr.links[category].map((link) => (
										<li key={link.label}>
											<a
												href={link.href}
												className='text-[#8A8680] hover:text-[#F4F3F0] transition-colors duration-150 text-sm'
												style={{ fontFamily: 'DM Sans, sans-serif' }}
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						),
					)}
				</div>

				{/* Bottom */}
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='font-mono text-xs text-[#5A5A5A] uppercase tracking-widest'>
						{tr.copyright}
					</p>
					<div className='flex items-center gap-6'>
						<span className='font-mono text-xs text-[#5A5A5A]'>
							{tr.builtWith}
						</span>
						<div className='flex gap-3'>
							{['𝕏', 'Ins', 'gh'].map((icon) => (
								<a
									key={icon}
									href={`https://${icon === '𝕏' ? 'x.com' : icon === 'Ins' ? 'instagram.com' : 'github.com'}/raydesite`}
									className='w-8 h-8 border border-[#3A3A3A] rounded-full flex items-center justify-center font-mono text-xs text-[#8A8680] hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-150'
									aria-label={icon}
								>
									{icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
