'use client';

import { useState, useEffect } from 'react';

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'Services', href: '#products' },
	{ label: 'Work', href: '#latest' },
	{ label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-[#F4F3F0]/90 backdrop-blur-md border-b-2 border-[#1A1A1A] py-3'
					: 'bg-transparent py-5'
			}`}
		>
			<nav className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
				{/* Logo */}
				<a
					href='#home'
					className='flex items-center gap-2 group'
					aria-label='Raydesite Home'
				>
					<div className='relative'>
						<div className='w-8 h-8 bg-[#1A1A1A] rounded-sm flex items-center justify-center group-hover:bg-[#F5A623] transition-colors duration-200'>
							<span className='text-[#F4F3F0] font-mono font-bold text-sm group-hover:text-[#1A1A1A] transition-colors'>
								R
							</span>
						</div>
						<div className='absolute -bottom-1 -right-1 w-3 h-3 bg-[#F5A623] rounded-full group-hover:bg-[#1A1A1A] transition-colors duration-200' />
					</div>
					<span
						className='font-display font-800 text-xl tracking-tight text-[#1A1A1A]'
						style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
					>
						RAYDESITE
					</span>
				</a>

				{/* Desktop Nav */}
				<ul
					className='hidden md:flex items-center gap-8'
					role='navigation'
				>
					{navItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='relative font-mono text-sm font-bold text-[#1A1A1A] uppercase tracking-widest group'
							>
								{item.label}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A623] group-hover:w-full transition-all duration-200' />
							</a>
						</li>
					))}
				</ul>

				{/* Actions */}
				<div className='hidden md:flex items-center gap-3'>
					<a
						href='#products'
						className='font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#F4F3F0] transition-all duration-200'
					>
						Services
					</a>
					<a
						href='#quote'
						className='relative font-mono text-xs font-bold uppercase tracking-widest bg-[#F5A623] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#F5A623] transition-all duration-200 flex items-center gap-2'
						aria-label='Get a Quote'
					>
						<svg
							width='14'
							height='14'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.5'
						>
							<path d='M5 12h14' />
							<path d='M13 5l7 7-7 7' />
						</svg>
						Get a Quote
					</a>
				</div>

				{/* Mobile menu */}
				<button
					className='md:hidden p-2 rounded-md border-2 border-[#1A1A1A]'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'
					aria-expanded={menuOpen}
					aria-controls='mobile-menu'
				>
					<div
						className='w-5 h-0.5 bg-[#1A1A1A] mb-1 transition-all'
						style={{
							transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
						}}
					/>
					<div
						className='w-5 h-0.5 bg-[#1A1A1A] mb-1 transition-all'
						style={{ opacity: menuOpen ? 0 : 1 }}
					/>
					<div
						className='w-5 h-0.5 bg-[#1A1A1A] transition-all'
						style={{
							transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
						}}
					/>
				</button>
			</nav>

			{/* Mobile drawer */}
			{menuOpen && (
				<div
					id='mobile-menu'
					className='md:hidden bg-[#F4F3F0] border-t-2 border-[#1A1A1A] px-6 py-6'
				>
					<ul className='flex flex-col gap-4 mb-6'>
						{navItems.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									className='font-mono font-bold text-lg uppercase tracking-widest text-[#1A1A1A] hover:text-[#F5A623] transition-colors'
									onClick={() => setMenuOpen(false)}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
					<div className='flex gap-3'>
						<a
							href='#products'
							className='flex-1 text-center font-mono text-xs font-bold uppercase tracking-widest border-2 border-[#1A1A1A] px-4 py-2 rounded-full'
						>
							Services
						</a>
						<a
							href='#quote'
							className='flex-1 text-center font-mono text-xs font-bold uppercase tracking-widest bg-[#F5A623] border-2 border-[#1A1A1A] px-4 py-2 rounded-full'
						>
							Get Quote
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
