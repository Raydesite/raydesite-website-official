const items = [
	"🚀 Take your business to the next digital level",
	"📱 Custom mobile apps, ready to scale",
	"🛒 Ecommerce that turns visitors into buyers",
	"⚡ Lightning-fast, secure websites",
	"💡 Turn your idea into real software",
	"🤝 Solutions for startups and enterprises",
	"🔥 Ask for your free demo today!",
	"🧑‍💻 Built by real experts, for you",
	"⏰ Launch your project in record time",
	"⭐ Happy clients, proven results",
];

export default function MarqueeTicker() {
	const repeated = [...items, ...items];

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
