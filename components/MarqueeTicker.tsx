const items = [
	'🚀 Launch faster',
	'⚡ Build clean software',
	'🛒 E-commerce that converts',
	'📱 Web and mobile apps',
	'💡 From idea to product',
	'🧑‍💻 Built by real developers',
];

export default function MarqueeTicker() {
	const repeated = [...items, ...items, ...items];

	return (
		<div
			className='bg-[#1A1A1A] border-y-2 border-[#1A1A1A] py-3 overflow-hidden'
			aria-label='Announcements'
		>
			<div className='marquee-track'>
				{repeated.map((item, i) => (
					<span
						key={i}
						className='flex items-center gap-8 pr-8 font-mono text-xs font-bold uppercase tracking-widest text-[#F4F3F0] whitespace-nowrap'
					>
						{item}
						<span className='text-[#F5A623] text-lg'>✦</span>
					</span>
				))}
			</div>
		</div>
	);
}
