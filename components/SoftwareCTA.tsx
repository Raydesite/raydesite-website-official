export default function SoftwareCTA() {
	return (
		<section
			id='cta'
			className='py-24 px-6 bg-[#1A1A1A] relative overflow-hidden'
			aria-labelledby='cta-heading'
		>
			{/* Background pattern */}
			<div
				className='absolute inset-0 opacity-[0.06]'
				style={{
					backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
					backgroundSize: '30px 30px',
				}}
				aria-hidden='true'
			/>

			{/* Glow */}
			<div
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5A623] rounded-full opacity-10 blur-3xl pointer-events-none'
				aria-hidden='true'
			/>

			<div className='max-w-7xl mx-auto relative'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left copy */}
					<div>
						<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4'>
							<span className='w-6 h-0.5 bg-[#F5A623]' />
							Who builds this
						</span>
						<h2
							id='cta-heading'
							className='text-[#F4F3F0] mb-6'
							style={{
								fontFamily: 'Syne, sans-serif',
								fontWeight: 800,
								fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
								lineHeight: 1.0,
								letterSpacing: '-0.02em',
							}}
						>
							Developers who design.{' '}
							<span className='text-[#F5A623]'>Designers</span>
							<br />
							who code.
						</h2>
						<p
							className='text-[#8A8680] text-lg leading-relaxed mb-8 max-w-md'
							style={{ fontFamily: 'DM Sans, sans-serif' }}
						>
							Raydesite is a small dev team that designs as well as it codes. No
							account managers, no outsourcing — just people who ship.
						</p>
						<div className='flex flex-wrap gap-4'>
							<a
								href='#quote'
								className='inline-flex items-center gap-3 bg-[#F5A623] text-[#1A1A1A] font-mono font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full border-2 border-[#F5A623] hover:bg-transparent hover:text-[#F5A623] transition-all duration-200 hover:shadow-[4px_4px_0_#F5A623]'
							>
								Start your project →
							</a>
						</div>

						{/* Social proof */}
						<div className='mt-10 flex items-center gap-4'>
							<div className='flex -space-x-3'>
								{['🧑‍💻', '👩‍💻', '🧑‍💻', '👨‍💻', '🧑‍💻'].map((emoji, i) => (
									<div
										key={i}
										className='w-10 h-10 rounded-full bg-[#2A2A2A] border-2 border-[#1A1A1A] flex items-center justify-center text-lg'
									>
										{emoji}
									</div>
								))}
							</div>
							<div>
								<div className='text-[#F5A623] font-mono font-bold text-sm'>
									⭐⭐⭐⭐⭐
								</div>
								<div className='text-[#8A8680] font-mono text-xs uppercase tracking-widest'>
									Currently open for new projects
								</div>
							</div>
						</div>
					</div>

					{/* Right — Illustration */}
					<div className='flex justify-center lg:justify-end'>
						<div className='relative'>
							<div className='bg-[#2A2A2A] border-2 border-[#F5A623] rounded-3xl p-8 shadow-[8px_8px_0_#F5A623] max-w-xs'>
								<svg
									viewBox='0 0 300 280'
									className='w-full'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden='true'
								>
									{/* Person sitting with laptop */}
									{/* Chair */}
									<rect
										x='80'
										y='200'
										width='140'
										height='8'
										rx='4'
										fill='#F5A623'
										opacity='0.8'
									/>
									<rect
										x='100'
										y='208'
										width='12'
										height='40'
										rx='4'
										fill='#F5A623'
										opacity='0.5'
									/>
									<rect
										x='188'
										y='208'
										width='12'
										height='40'
										rx='4'
										fill='#F5A623'
										opacity='0.5'
									/>
									<rect
										x='85'
										y='145'
										width='130'
										height='60'
										rx='8'
										fill='#3A3A3A'
									/>
									<rect
										x='75'
										y='140'
										width='10'
										height='65'
										rx='5'
										fill='#3A3A3A'
									/>
									<rect
										x='215'
										y='140'
										width='10'
										height='65'
										rx='5'
										fill='#3A3A3A'
									/>

									{/* Body */}
									<ellipse
										cx='150'
										cy='120'
										rx='35'
										ry='45'
										fill='#F5A623'
										opacity='0.9'
									/>
									{/* Head */}
									<circle
										cx='150'
										cy='72'
										r='28'
										fill='#FDDCB5'
									/>
									{/* Hair bun */}
									<ellipse
										cx='150'
										cy='48'
										rx='20'
										ry='14'
										fill='#1A1A1A'
									/>
									<circle
										cx='150'
										cy='42'
										r='8'
										fill='#1A1A1A'
									/>
									{/* Eyes */}
									<circle
										cx='143'
										cy='70'
										r='3'
										fill='#1A1A1A'
									/>
									<circle
										cx='157'
										cy='70'
										r='3'
										fill='#1A1A1A'
									/>
									{/* Smile */}
									<path
										d='M144 79 Q150 85 156 79'
										fill='none'
										stroke='#1A1A1A'
										strokeWidth='2'
										strokeLinecap='round'
									/>
									{/* Arms */}
									<path
										d='M118 130 Q100 150 105 170'
										fill='none'
										stroke='#FDDCB5'
										strokeWidth='14'
										strokeLinecap='round'
									/>
									<path
										d='M182 130 Q200 150 195 170'
										fill='none'
										stroke='#FDDCB5'
										strokeWidth='14'
										strokeLinecap='round'
									/>
									{/* Laptop */}
									<rect
										x='100'
										y='162'
										width='100'
										height='65'
										rx='6'
										fill='#1A1A1A'
									/>
									<rect
										x='106'
										y='167'
										width='88'
										height='55'
										rx='3'
										fill='#2A2A2A'
									/>
									{/* Screen content */}
									<rect
										x='114'
										y='175'
										width='50'
										height='3'
										rx='1'
										fill='#F5A623'
										opacity='0.8'
									/>
									<rect
										x='114'
										y='182'
										width='70'
										height='3'
										rx='1'
										fill='#8A8680'
										opacity='0.6'
									/>
									<rect
										x='120'
										y='189'
										width='55'
										height='3'
										rx='1'
										fill='#8A8680'
										opacity='0.6'
									/>
									<rect
										x='120'
										y='196'
										width='40'
										height='3'
										rx='1'
										fill='#F5A623'
										opacity='0.5'
									/>
									<rect
										x='114'
										y='203'
										width='65'
										height='3'
										rx='1'
										fill='#8A8680'
										opacity='0.6'
									/>
									<rect
										x='114'
										y='210'
										width='45'
										height='3'
										rx='1'
										fill='#8A8680'
										opacity='0.4'
									/>
									{/* Hands on laptop */}
									<ellipse
										cx='120'
										cy='225'
										rx='14'
										ry='8'
										fill='#FDDCB5'
									/>
									<ellipse
										cx='180'
										cy='225'
										rx='14'
										ry='8'
										fill='#FDDCB5'
									/>
								</svg>
							</div>

							{/* Floating badges */}
							<div className='absolute -top-4 -left-8 bg-[#F5A623] border-2 border-[#1A1A1A] rounded-xl px-4 py-2 shadow-[3px_3px_0_#1A1A1A]'>
								<span className='font-mono font-bold text-xs text-[#1A1A1A]'>
									git commit -m 🔥 ship it
								</span>
							</div>
							<div className='absolute -bottom-4 -right-4 bg-[#2A2A2A] border-2 border-[#F5A623] rounded-xl px-4 py-2'>
								<span className='font-mono font-bold text-xs text-[#F5A623]'>
									// no handoffs. just devs.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
