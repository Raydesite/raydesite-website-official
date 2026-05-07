import { ImageResponse } from 'next/og';

export const alt =
	'Raydesite — Software built to last. Businesses built to scale.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				width: '1200px',
				height: '630px',
				backgroundColor: '#F4F3F0',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				fontFamily: 'sans-serif',
				overflow: 'hidden',
			}}
		>
			{/* Grid background */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
					backgroundSize: '50px 50px',
					opacity: 0.04,
				}}
			/>

			{/* Accent blob top right */}
			<div
				style={{
					position: 'absolute',
					top: '-60px',
					right: '-60px',
					width: '400px',
					height: '400px',
					backgroundColor: '#F5A623',
					borderRadius: '50%',
					opacity: 0.12,
					filter: 'blur(80px)',
				}}
			/>

			{/* Accent blob bottom left */}
			<div
				style={{
					position: 'absolute',
					bottom: '-80px',
					left: '200px',
					width: '300px',
					height: '300px',
					backgroundColor: '#F5A623',
					borderRadius: '50%',
					opacity: 0.07,
					filter: 'blur(60px)',
				}}
			/>

			{/* Left accent bar */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					bottom: 0,
					width: '10px',
					backgroundColor: '#F5A623',
				}}
			/>

			{/* Main content */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '64px 80px 64px 90px',
					height: '100%',
				}}
			>
				{/* Top — Logo */}
				<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
					{/* Logo box */}
					<div
						style={{
							width: '48px',
							height: '48px',
							backgroundColor: '#1A1A1A',
							borderRadius: '8px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'relative',
						}}
					>
						<svg
							width='22'
							height='28'
							viewBox='0 0 22 28'
							fill='none'
						>
							<path
								d='M14 1L1 14H8.5L5.5 27L21 13H13.5L14 1Z'
								fill='#F5A623'
								stroke='#F5A623'
								strokeWidth='0.5'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<span
						style={{
							fontSize: '28px',
							fontWeight: 800,
							color: '#1A1A1A',
							letterSpacing: '-0.02em',
						}}
					>
						RAYDESITE
					</span>

					{/* Open for projects badge */}
					<div
						style={{
							marginLeft: '16px',
							backgroundColor: '#F5A623',
							border: '2px solid #1A1A1A',
							borderRadius: '999px',
							padding: '6px 16px',
							fontSize: '12px',
							fontWeight: 700,
							letterSpacing: '0.15em',
							color: '#1A1A1A',
							textTransform: 'uppercase',
						}}
					>
						Open for projects · 2026
					</div>
				</div>

				{/* Middle — Headline */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							marginBottom: '8px',
						}}
					>
						<div
							style={{
								width: '40px',
								height: '3px',
								backgroundColor: '#F5A623',
							}}
						/>
						<span
							style={{
								fontSize: '13px',
								fontWeight: 700,
								letterSpacing: '0.2em',
								textTransform: 'uppercase',
								color: '#8A8680',
							}}
						>
							Software Agency
						</span>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<span
							style={{
								fontSize: '82px',
								fontWeight: 800,
								color: '#1A1A1A',
								lineHeight: 0.95,
								letterSpacing: '-0.03em',
							}}
						>
							Software built <span style={{ color: '#F5A623' }}>to last.</span>
						</span>
						<span
							style={{
								fontSize: '82px',
								fontWeight: 800,
								color: '#1A1A1A',
								lineHeight: 0.95,
								letterSpacing: '-0.03em',
								marginTop: '8px',
							}}
						>
							Businesses built to scale.
						</span>
					</div>
				</div>

				{/* Bottom — Service pills + URL */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
						{[
							{ label: 'Landing Page', bg: '#96EEDE', color: '#1A1A1A' },
							{ label: 'Online Store', bg: '#C2D8E8', color: '#1A1A1A' },
							{ label: 'Apps', bg: '#C2E8D4', color: '#1A1A1A' },
							{ label: 'E-Commerce', bg: '#CB98F7', color: '#1A1A1A' },
							{ label: 'Website', bg: '#A5D6FF', textColor: '#1A1A1A' },
							{ label: 'Mobile', bg: '#FF8991', color: '#1A1A1A' },
							{ label: 'Shopify', bg: '#D1E668', color: '#1A1A1A' },
							{ label: 'Design', bg: '#FF9951', color: '#1A1A1A' },
						].map((tag) => (
							<div
								key={tag.label}
								style={{
									backgroundColor: tag.bg,
									color: tag.color,
									border: `1.5px solid ${tag.color ?? '#1A1A1A'}`,
									borderRadius: '999px',
									padding: '6px 14px',
									fontSize: '12px',
									fontWeight: 700,
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
								}}
							>
								{tag.label}
							</div>
						))}
					</div>

					<span
						style={{
							fontSize: '16px',
							fontWeight: 700,
							color: '#8A8680',
							letterSpacing: '0.05em',
						}}
					>
						raydesite.com
					</span>
				</div>
			</div>

			{/* Bottom border accent */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					height: '6px',
					backgroundColor: '#1A1A1A',
				}}
			/>
		</div>,
		{ ...size },
	);
}
