const releases = [
  { id: 1, name: 'SaaS MVP', category: 'Startup', emoji: '🚀', isNew: true, color: '#E8DCC2' },
  { id: 2, name: 'Internal Dashboard', category: 'Operations', emoji: '📊', isNew: true, color: '#C2D8E8' },
  { id: 3, name: 'Shopify Storefront', category: 'Commerce', emoji: '🛒', isNew: false, color: '#E8C2D4' },
  { id: 4, name: 'Mobile Booking App', category: 'Mobile', emoji: '📱', isNew: false, color: '#D4E8C2' },
]

export default function LatestRelease() {
  return (
    <section id="latest" className="py-24 px-6" aria-labelledby="latest-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#F5A623]" />
            Recent work
            <span className="w-6 h-0.5 bg-[#F5A623]" />
          </span>
          <h2
            id="latest-heading"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            Latest Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {releases.map((item, i) => (
            <a
              key={item.id}
              href="#quote"
              className="flex items-center gap-6 bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 hover:shadow-[6px_6px_0_#1A1A1A] hover:-translate-y-1 transition-all duration-200 group no-underline text-[#1A1A1A]"
              aria-label={`Discuss a ${item.name} project`}
            >
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl flex-shrink-0 border-2 border-[#1A1A1A] group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              >
                {item.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[#8A8680] uppercase tracking-widest">{item.category}</span>
                  {item.isNew && (
                    <span className="bg-[#F5A623] text-[#1A1A1A] font-mono font-bold text-xs px-2 py-0.5 rounded-full border border-[#1A1A1A]">
                      NEW
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>{item.name}</h3>
              </div>
              <div className="w-10 h-10 border-2 border-[#1A1A1A] rounded-full flex items-center justify-center group-hover:bg-[#F5A623] transition-colors duration-200 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
