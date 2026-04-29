'use client'

import { useEffect, useRef } from 'react'

const tags = [
  { label: 'Technologies', color: '#D4E8C2', textColor: '#2D5A1B' },
  { label: 'Clothes', color: '#C2D8E8', textColor: '#1B3D5A' },
  { label: 'Developer', color: '#C2E8D4', textColor: '#1B5A3D' },
  { label: 'Otaku Geek', color: '#E8C2D4', textColor: '#5A1B3D' },
  { label: 'Originales', color: '#F5A623', textColor: '#1A1A1A' },
  { label: 'Star Wars', color: '#E8DCC2', textColor: '#5A4A1B' },
]

export default function Hero() {
  const floatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = floatRef.current
    if (!el) return
    let frame: number
    let t = 0
    const animate = () => {
      t += 0.02
      el.style.transform = `translateY(${Math.sin(t) * 10}px) rotate(${Math.sin(t * 0.5) * 2}deg)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero — Made for developers by developers"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Accent blob */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F5A623] rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#F5A623] rounded-full opacity-5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* Left — Copy */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-6 animate-fade-up animate-delay-100"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="w-8 h-0.5 bg-[#F5A623]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680]">
                Est. 2024 · Made with ❤️ & caffeine
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up animate-delay-200 mb-6"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                animationFillMode: 'forwards',
              }}
            >
              Made{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#F5A623]">for</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#F5A623] opacity-20 rounded"
                  aria-hidden="true"
                />
              </span>{' '}
              developers
              <br />
              <span className="text-[#F5A623]">by</span> developers
            </h1>

            <p
              className="text-[#8A8680] text-lg leading-relaxed max-w-md mb-8 animate-fade-up animate-delay-300"
              style={{ fontFamily: 'DM Sans, sans-serif', animationFillMode: 'forwards' }}
            >
              Merch que habla tu idioma. Stickers, pines, gorras y camisetas diseñadas
              para quienes viven entre terminales y commits.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-10 animate-fade-up animate-delay-400"
              style={{ animationFillMode: 'forwards' }}
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-[#1A1A1A] text-[#F4F3F0] font-mono font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full border-2 border-[#1A1A1A] hover:bg-[#F5A623] hover:text-[#1A1A1A] transition-all duration-200 hover:shadow-[4px_4px_0_#1A1A1A]"
              >
                Shop Now
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 font-mono font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F4F3F0] transition-all duration-200"
              >
                Get a Quote
              </a>
            </div>

            {/* Tags */}
            <div
              className="flex flex-wrap gap-2 animate-fade-up animate-delay-500"
              style={{ animationFillMode: 'forwards' }}
              aria-label="Categorías disponibles"
            >
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="tag-pill cursor-pointer"
                  style={{ color: tag.textColor, backgroundColor: tag.color, borderColor: tag.textColor }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <div
            className="flex justify-center lg:justify-end animate-fade-up animate-delay-300"
            style={{ animationFillMode: 'forwards' }}
          >
            <div ref={floatRef} className="relative">
              {/* Main card */}
              <div className="relative bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[8px_8px_0_#1A1A1A] max-w-sm">
                {/* SVG Illustration — Developer Desk */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Monitor */}
                  <rect x="120" y="40" width="160" height="110" rx="8" fill="#1A1A1A" />
                  <rect x="128" y="48" width="144" height="94" rx="4" fill="#F5A623" opacity="0.15" />
                  <rect x="128" y="48" width="144" height="94" rx="4" fill="none" stroke="#F5A623" strokeWidth="1" />
                  {/* Code lines on screen */}
                  <rect x="136" y="60" width="60" height="4" rx="2" fill="#F5A623" opacity="0.8" />
                  <rect x="136" y="72" width="90" height="4" rx="2" fill="white" opacity="0.4" />
                  <rect x="144" y="84" width="70" height="4" rx="2" fill="white" opacity="0.4" />
                  <rect x="144" y="96" width="50" height="4" rx="2" fill="#F5A623" opacity="0.6" />
                  <rect x="136" y="108" width="80" height="4" rx="2" fill="white" opacity="0.4" />
                  <rect x="144" y="120" width="60" height="4" rx="2" fill="white" opacity="0.3" />
                  {/* Monitor stand */}
                  <rect x="185" y="150" width="30" height="20" rx="2" fill="#1A1A1A" />
                  <rect x="165" y="168" width="70" height="6" rx="3" fill="#1A1A1A" />
                  {/* Desk */}
                  <rect x="60" y="190" width="280" height="10" rx="5" fill="#1A1A1A" />
                  {/* Keyboard */}
                  <rect x="140" y="178" width="120" height="14" rx="4" fill="#8A8680" />
                  <rect x="148" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="160" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="172" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="184" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="196" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="208" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="220" y="182" width="8" height="5" rx="1" fill="#F4F3F0" opacity="0.6" />
                  <rect x="165" y="189" width="70" height="4" rx="1" fill="#F4F3F0" opacity="0.4" />
                  {/* Coffee cup */}
                  <rect x="295" y="160" width="30" height="32" rx="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
                  <path d="M325 170 Q340 170 340 180 Q340 190 325 190" fill="none" stroke="#1A1A1A" strokeWidth="2" />
                  <ellipse cx="310" cy="162" rx="15" ry="4" fill="#8A8680" opacity="0.3" />
                  {/* Steam */}
                  <path d="M305 152 Q307 145 305 138" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <path d="M312 150 Q314 143 312 136" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  {/* Sticker on desk */}
                  <rect x="75" y="178" width="40" height="14" rx="3" fill="#F5A623" stroke="#1A1A1A" strokeWidth="1.5" />
                  <text x="95" y="188" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#1A1A1A" fontWeight="bold">&lt;/dev&gt;</text>
                  {/* Plant */}
                  <rect x="68" y="165" width="12" height="26" rx="2" fill="#8A8680" opacity="0.5" />
                  <ellipse cx="74" cy="162" rx="16" ry="12" fill="#2D5A1B" opacity="0.7" />
                  <ellipse cx="62" cy="168" rx="10" ry="8" fill="#2D5A1B" opacity="0.5" />
                  <ellipse cx="86" cy="168" rx="10" ry="8" fill="#2D5A1B" opacity="0.5" />
                </svg>

                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-[#F5A623] border-2 border-[#1A1A1A] rounded-full w-16 h-16 flex items-center justify-center shadow-[3px_3px_0_#1A1A1A]">
                  <span className="font-mono font-bold text-xs text-center leading-tight text-[#1A1A1A]">
                    NEW<br />DROP
                  </span>
                </div>
              </div>

              {/* Floating mini card */}
              <div className="absolute -bottom-6 -left-8 bg-[#1A1A1A] text-[#F4F3F0] rounded-2xl px-4 py-3 border-2 border-[#F5A623] shadow-[4px_4px_0_#F5A623]">
                <p className="font-mono text-xs text-[#F5A623] uppercase tracking-widest mb-0.5">Latest Drop</p>
                <p className="font-display font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Star Wars Collab 🚀</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-[#8A8680] uppercase tracking-widest">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A8680" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
