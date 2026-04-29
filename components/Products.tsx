type Product = {
	id: string;
	name: string;
	description: string;
	emoji: string;
	tag: string;
	color: string;
};

const products: Product[] = [
	{
		id: 'e-commerce',
		name: 'E-commerce',
		description:
			'Online stores built to convert visitors into customers, with clean checkout flows and scalable foundations.',
		emoji: '🛒',
		tag: 'Conversion',
		color: '#D4E8C2',
	},
	{
		id: 'landing-pages',
		name: 'Landing Pages',
		description:
			'Fast, focused pages for launches, campaigns, services, and products that need a clear first impression.',
		emoji: '🚀',
		tag: 'Launch',
		color: '#C2D8E8',
	},
	{
		id: 'mobile-pps',
		name: 'Mobile apps',
		description:
			'Mobile-first experiences designed around real user flows, not just screens that look good in a mockup.',
		emoji: '📱',
		tag: 'Mobile',
		color: '#E8DCC2',
	},
	{
		id: 'shopify',
		name: 'Shopify',
		description:
			'Custom Shopify storefronts, theme improvements, integrations, and performance-focused commerce work.',
		emoji: '⚙️',
		tag: 'Commerce',
		color: '#E8C2D4',
	},
];

export default function Products() {
	return (
		<section
			id='products'
			className='py-24 px-6'
			aria-labelledby='products-heading'
		>
			<div className='max-w-7xl mx-auto'>
				{/* Section header */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
					<div>
						<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-3'>
							<span className='w-6 h-0.5 bg-[#F5A623]' />
							Our Products
						</span>
						<h2
							id='products-heading'
							style={{
								fontFamily: 'Syne, sans-serif',
								fontWeight: 800,
								fontSize: 'clamp(2rem, 5vw, 3.5rem)',
								lineHeight: 1.1,
								letterSpacing: '-0.02em',
							}}
						>
							Solutions we
							<br />
							<span className='text-[#F5A623]'>offer</span>
						</h2>
					</div>
					<a
						href='#all'
						className='self-start md:self-auto inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest border-2 border-[#1A1A1A] px-6 py-3 rounded-full hover:bg-[#1A1A1A] hover:text-[#F4F3F0] transition-all duration-200'
					>
						View all →
					</a>
				</div>

				{/* Product grid */}
				<div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
					role='list'
				>
					{products.map((product, i) => (
						<article
							key={product.id}
							className='product-card group'
							role='listitem'
							aria-label={product.name}
							style={{ animationDelay: `${i * 0.1}s` }}
						>
							{/* Tag badge */}
							<div className='flex justify-between items-start mb-6'>
								<span
									className='font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#1A1A1A] group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-[#F5A623] transition-all duration-200'
									style={{ backgroundColor: product.color }}
								>
									{product.tag}
								</span>
								<span className='text-2xl'>{product.emoji}</span>
							</div>

							{/* Illustration placeholder */}
							<div
								className='w-full h-32 rounded-xl mb-6 flex items-center justify-center border-2 border-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors'
								style={{ backgroundColor: product.color }}
								aria-hidden='true'
							>
								<span className='text-5xl'>{product.emoji}</span>
							</div>

							<h3
								className='mb-2 group-hover:text-[#1A1A1A] transition-colors'
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.25rem',
								}}
							>
								{product.name}
							</h3>
							<p
								className='text-[#8A8680] text-sm leading-relaxed mb-6 group-hover:text-[#1A1A1A] transition-colors'
								style={{ fontFamily: 'DM Sans, sans-serif' }}
							>
								{product.description}
							</p>

							<div className='flex items-center justify-between'>
								<span className='font-mono text-xs font-bold uppercase tracking-widest text-[#8A8680] group-hover:text-[#1A1A1A]'>
									Learn more →
								</span>
								<div className='w-8 h-8 bg-[#1A1A1A] group-hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors duration-200'>
									<svg
										width='12'
										height='12'
										viewBox='0 0 24 24'
										fill='none'
										stroke='#F4F3F0'
										strokeWidth='2.5'
										className='group-hover:stroke-[#1A1A1A]'
									>
										<path d='M5 12h14M12 5l7 7-7 7' />
									</svg>
								</div>
							</div>
						</article>
					))}
				</div>

				{/* Stats strip */}
				<div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A] border-2 border-[#1A1A1A] rounded-2xl overflow-hidden'>
					{[
						{ value: '50+', label: 'Projects shipped' },
						{ value: '4+', label: 'Core services' },
						{ value: '24h', label: 'Response time' },
						{ value: '100%', label: 'Built with care' },
					].map((stat) => (
						<div
							key={stat.label}
							className='bg-[#F4F3F0] p-8 text-center hover:bg-[#F5A623] transition-colors duration-200 group'
						>
							<div
								className='text-3xl font-black mb-1 group-hover:text-[#1A1A1A]'
								style={{ fontFamily: 'Syne, sans-serif' }}
							>
								{stat.value}
							</div>
							<div className='font-mono text-xs uppercase tracking-widest text-[#8A8680] group-hover:text-[#1A1A1A]'>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
