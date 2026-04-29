const items = [
  '⚡ Free shipping on orders +$50',
  '🎮 New Star Wars collection',
  '👾 Otaku drops every friday',
  '☕ Made by devs, for devs',
  '🔥 Sticker packs from $5',
  '💻 Full-Swag developer approved',
]

export default function MarqueeTicker() {
  const repeated = [...items, ...items]

  return (
    <div
      className="bg-[#1A1A1A] border-y-2 border-[#1A1A1A] py-3 overflow-hidden"
      aria-label="Announcements"
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-mono text-xs font-bold uppercase tracking-widest text-[#F4F3F0] whitespace-nowrap"
          >
            {item}
            <span className="text-[#F5A623] text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
