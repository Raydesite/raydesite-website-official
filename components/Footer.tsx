const footerLinks = {
	Services: [
		{ label: 'Landing Pages', href: '#products' },
		{ label: 'E-commerce', href: '#products' },
		{ label: 'Web Apps', href: '#products' },
		{ label: 'Mobile Apps', href: '#products' },
		{ label: 'Shopify', href: '#products' },
	],
	Company: [
		{ label: 'About Us', href: '/about-us' },
		{ label: 'Process', href: '#quote' },
		{ label: 'Work', href: '#latest' },
		{ label: 'Careers', href: 'mailto:raydesite@gmail.com' },
	],
	Support: [
		{ label: 'FAQ', href: '#faq' },
		{ label: 'Discovery Call', href: '#quote' },
		{ label: 'Maintenance', href: '#quote' },
		{ label: 'Get a Quote', href: '#quote' },
	],
	Legal: [
		{ label: 'Privacy Policy', href: '/privacy-policy' },
		{ label: 'Terms of Service', href: '/terms-of-service' },
		{ label: 'Cookie Policy', href: '/cookie-policy' },
	],
};

export default function Footer() {
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
							<div className='w-10 h-10 bg-[#F5A623] rounded-sm flex items-center justify-center'>
								<span className='text-[#1A1A1A] font-mono font-bold text-lg'>
									R
								</span>
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
							Custom software for startups, creators, and businesses that need
							clean execution, not empty promises.
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
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623] mb-5'>
								{category}
							</h3>
							<ul
								className='space-y-3'
								role='list'
							>
								{links.map((link) => (
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
					))}
				</div>

				{/* Bottom */}
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='font-mono text-xs text-[#5A5A5A] uppercase tracking-widest'>
						© 2026 Raydesite. All rights reserved.
					</p>
					<div className='flex items-center gap-6'>
						<span className='font-mono text-xs text-[#5A5A5A]'>
							Built with ☕ and too many tabs open
						</span>
						<div className='flex gap-3'>
							{['𝕏', 'Ins', 'gh'].map((icon) => (
								<a
									key={icon}
									href={`https://${icon === '𝕏' ? 'x.com' : icon === 'Instagram' ? 'instagram.com' : 'github.com'}/raydesite`}
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
