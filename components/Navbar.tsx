'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

function RaydesiteBolt({ size = 28 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size * (100 / 66)}
			viewBox='0 0 66 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
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
	);
}

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { lang, toggleLang } = useLang();
	const tr = t[lang].nav;
	const pathname = usePathname();

	const isHome = pathname === '/';
	const href = (anchor: string) => (isHome ? anchor : `/${anchor}`);

	const navItems = [
		{ label: tr.home, href: href('#home') },
		{ label: tr.services, href: href('#products') },
		{ label: tr.work, href: href('#latest') },
		{ label: tr.faq, href: href('#faq') },
	];

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
			<nav className='max-w-7xl mx-auto px-6 flex items-end justify-between'>
				{/* Logo */}
				<Link
					href='/'
					className='flex items-end gap-2 group'
					aria-label='Raydesite Home'
				>
					<div className='relative flex-shrink-0'>
						<div className='w-10 h-10 bg-[#1A1A1A] rounded-md flex items-center justify-center group-hover:bg-[#F4F3F0] transition-colors duration-200 overflow-hidden'>
							<RaydesiteBolt size={22} />
						</div>
					</div>
					<Image
						src='/logo-raydesite.png'
						alt='Raydesite'
						width={200}
						height={56}
						className='h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 mix-blend-multiply'
						priority
					/>
				</Link>

				{/* Desktop Nav */}
				<ul
					className='hidden md:flex items-center gap-8'
					role='navigation'
				>
					{navItems.map((item) => (
						<li key={item.label}>
							<Link
								href={item.href}
								className='relative font-mono text-sm font-bold text-[#1A1A1A] uppercase tracking-widest group'
							>
								{item.label}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A623] group-hover:w-full transition-all duration-200' />
							</Link>
						</li>
					))}
				</ul>

				{/* Actions */}
				<div className='hidden md:flex items-center gap-3'>
					{/* Language toggle */}
					<button
						onClick={toggleLang}
						className='font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A] border-2 border-[#1A1A1A] px-3 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#F4F3F0] transition-all duration-200'
						aria-label='Toggle language'
					>
						{lang === 'en' ? 'ES' : 'EN'}
					</button>

					<Link
						href={href('#products')}
						className='font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#F4F3F0] transition-all duration-200'
					>
						{tr.servicesBtn}
					</Link>
					<Link
						href={href('#quote')}
						className='font-mono text-xs font-bold uppercase tracking-widest bg-[#F5A623] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#F5A623] transition-all duration-200 flex items-center gap-2'
						aria-label={tr.quoteBtn}
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
						{tr.quoteBtn}
					</Link>
				</div>

				{/* Mobile menu button */}
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
					className='md:hidden bg-[#F4F3F0] border-t-2 border-[#1A1A1A] px-6 py-6 mt-3'
				>
					<ul className='flex flex-col gap-4 mb-6'>
						{navItems.map((item) => (
							<li key={item.label}>
								<Link
									href={item.href}
									className='font-mono font-bold text-lg uppercase tracking-widest text-[#1A1A1A] hover:text-[#F5A623] transition-colors'
									onClick={() => setMenuOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<div className='flex gap-3'>
						{/* Language toggle mobile */}
						<button
							onClick={toggleLang}
							className='font-mono text-xs font-bold uppercase tracking-widest border-2 border-[#1A1A1A] px-4 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#F4F3F0] transition-all duration-200'
						>
							{lang === 'en' ? 'ES' : 'EN'}
						</button>
						<Link
							href={href('#products')}
							className='flex-1 text-center font-mono text-xs font-bold uppercase tracking-widest border-2 border-[#1A1A1A] px-4 py-2 rounded-full'
							onClick={() => setMenuOpen(false)}
						>
							{tr.servicesBtn}
						</Link>
						<Link
							href={href('#quote')}
							className='flex-1 text-center font-mono text-xs font-bold uppercase tracking-widest bg-[#F5A623] border-2 border-[#1A1A1A] px-4 py-2 rounded-full'
							onClick={() => setMenuOpen(false)}
						>
							{tr.getQuoteMobile}
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
