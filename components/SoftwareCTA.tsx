export default function SoftwareCTA() {
  return (
    <section
      id="cta"
      className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#F5A623 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5A623] rounded-full opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
          {/* Left copy */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#F5A623]" />
              Who builds this
            </span>
            <h2
              id="cta-heading"
              className="text-[#F4F3F0] mb-6"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              Developers who <span className="text-[#F5A623]">design.</span>
              <br />
              Designers who code.
            </h2>
            <p
              className="text-[#8A8680] text-lg leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Raydesite is a small dev team that designs as well as it codes. No
              account managers, no outsourcing — just people who ship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-3 bg-[#F5A623] text-[#1A1A1A] font-mono font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full border-2 border-[#F5A623] hover:bg-transparent hover:text-[#F5A623] transition-all duration-200 hover:shadow-[4px_4px_0_#F5A623]"
              >
                Start your project →
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["👩‍💻", "👩‍💻", "🧑‍💻", "👨‍💻", "🧑‍💻"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#2A2A2A] border-2 border-[#1A1A1A] flex items-center justify-center text-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-[#F5A623] font-mono font-bold text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="text-[#8A8680] font-mono text-xs uppercase tracking-widest">
                  Currently open for new projects
                </div>
              </div>
            </div>
          </div>

          {/* Right — Two girl devs illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-[#2A2A2A] border-2 border-[#F5A623] rounded-3xl p-6 shadow-[8px_8px_0_#F5A623] max-w-xs">
                <svg
                  viewBox="0 0 300 260"
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Two women developers collaborating on a laptop"
                >
                  {/* ── DESK ── */}
                  <rect
                    x="20"
                    y="195"
                    width="260"
                    height="10"
                    rx="5"
                    fill="#3A3A3A"
                  />

                  {/* ── LAPTOP ── */}
                  <rect
                    x="90"
                    y="148"
                    width="120"
                    height="50"
                    rx="5"
                    fill="#1A1A1A"
                  />
                  <rect
                    x="96"
                    y="153"
                    width="108"
                    height="40"
                    rx="3"
                    fill="#2A2A2A"
                  />
                  <rect
                    x="102"
                    y="158"
                    width="55"
                    height="3"
                    rx="1"
                    fill="#F5A623"
                    opacity="0.9"
                  />
                  <rect
                    x="102"
                    y="164"
                    width="80"
                    height="3"
                    rx="1"
                    fill="#8A8680"
                    opacity="0.5"
                  />
                  <rect
                    x="108"
                    y="170"
                    width="65"
                    height="3"
                    rx="1"
                    fill="#8A8680"
                    opacity="0.5"
                  />
                  <rect
                    x="108"
                    y="176"
                    width="45"
                    height="3"
                    rx="1"
                    fill="#F5A623"
                    opacity="0.4"
                  />
                  <rect
                    x="102"
                    y="182"
                    width="70"
                    height="3"
                    rx="1"
                    fill="#8A8680"
                    opacity="0.4"
                  />
                  {/* laptop base */}
                  <rect
                    x="80"
                    y="196"
                    width="140"
                    height="6"
                    rx="3"
                    fill="#1A1A1A"
                  />

                  {/* ── GIRL LEFT — yellow hoodie, ponytail ── */}
                  {/* body */}
                  <ellipse cx="95" cy="150" rx="28" ry="36" fill="#F5A623" />
                  {/* neck */}
                  <rect
                    x="88"
                    y="110"
                    width="14"
                    height="12"
                    rx="4"
                    fill="#FDDCB5"
                  />
                  {/* head */}
                  <circle cx="95" cy="98" r="24" fill="#FDDCB5" />
                  {/* hair base */}
                  <ellipse cx="95" cy="78" rx="22" ry="16" fill="#2C1810" />
                  <ellipse cx="95" cy="72" rx="14" ry="10" fill="#2C1810" />
                  {/* ponytail */}
                  <path
                    d="M114 80 Q128 72 126 60 Q123 48 116 53 Q120 63 118 73 Z"
                    fill="#2C1810"
                  />
                  {/* hair side pieces */}
                  <ellipse cx="74" cy="90" rx="6" ry="14" fill="#2C1810" />
                  <ellipse cx="116" cy="90" rx="6" ry="14" fill="#2C1810" />
                  {/* eyes */}
                  <circle cx="89" cy="96" r="2.5" fill="#1A1A1A" />
                  <circle cx="101" cy="96" r="2.5" fill="#1A1A1A" />
                  <circle cx="90" cy="95" r="0.8" fill="white" />
                  <circle cx="102" cy="95" r="0.8" fill="white" />
                  {/* eyebrows */}
                  <path
                    d="M86 91 Q89 89 92 91"
                    fill="none"
                    stroke="#2C1810"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M98 91 Q101 89 104 91"
                    fill="none"
                    stroke="#2C1810"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* smile */}
                  <path
                    d="M89 103 Q95 109 101 103"
                    fill="none"
                    stroke="#C47A4A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  {/* arms typing */}
                  <path
                    d="M70 158 Q72 178 88 193"
                    fill="none"
                    stroke="#FDDCB5"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M118 158 Q118 178 130 193"
                    fill="none"
                    stroke="#FDDCB5"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* hands */}
                  <ellipse cx="87" cy="194" rx="12" ry="7" fill="#FDDCB5" />
                  <ellipse cx="131" cy="194" rx="12" ry="7" fill="#FDDCB5" />

                  {/* ── GIRL RIGHT — dark hoodie, bun, pointing ── */}
                  {/* body */}
                  <ellipse cx="210" cy="150" rx="28" ry="36" fill="#3A3A3A" />
                  {/* neck */}
                  <rect
                    x="203"
                    y="110"
                    width="14"
                    height="12"
                    rx="4"
                    fill="#E8B88A"
                  />
                  {/* head */}
                  <circle cx="210" cy="98" r="24" fill="#E8B88A" />
                  {/* hair base */}
                  <ellipse cx="210" cy="78" rx="22" ry="15" fill="#1A1A1A" />
                  <ellipse cx="210" cy="72" rx="14" ry="10" fill="#1A1A1A" />
                  {/* bun */}
                  <circle cx="210" cy="61" r="10" fill="#1A1A1A" />
                  <circle cx="210" cy="59" r="6" fill="#2A2A2A" />
                  {/* hair sides */}
                  <ellipse cx="189" cy="90" rx="6" ry="14" fill="#1A1A1A" />
                  <ellipse cx="231" cy="90" rx="6" ry="14" fill="#1A1A1A" />
                  {/* eyes */}
                  <circle cx="204" cy="96" r="2.5" fill="#1A1A1A" />
                  <circle cx="216" cy="96" r="2.5" fill="#1A1A1A" />
                  <circle cx="205" cy="95" r="0.8" fill="white" />
                  <circle cx="217" cy="95" r="0.8" fill="white" />
                  {/* eyebrows */}
                  <path
                    d="M201 91 Q204 89 207 91"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M213 91 Q216 89 219 91"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* smile */}
                  <path
                    d="M204 103 Q210 109 216 103"
                    fill="none"
                    stroke="#C47A4A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  {/* arm pointing at screen */}
                  <path
                    d="M185 152 Q168 162 158 176"
                    fill="none"
                    stroke="#E8B88A"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* other arm */}
                  <path
                    d="M233 152 Q238 170 230 193"
                    fill="none"
                    stroke="#E8B88A"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* pointing hand */}
                  <ellipse cx="156" cy="178" rx="10" ry="7" fill="#E8B88A" />
                  {/* resting hand */}
                  <ellipse cx="231" cy="194" rx="12" ry="7" fill="#E8B88A" />

                  {/* ── COFFEE ── */}
                  <rect
                    x="242"
                    y="175"
                    width="22"
                    height="20"
                    rx="3"
                    fill="white"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M264 180 Q272 180 272 186 Q272 192 264 192"
                    fill="none"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M248 171 Q250 166 248 161"
                    fill="none"
                    stroke="#8A8680"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M254 169 Q256 164 254 159"
                    fill="none"
                    stroke="#8A8680"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.7"
                  />

                  {/* ── RAYDESITE sticker ── */}
                  <rect
                    x="32"
                    y="183"
                    width="42"
                    height="13"
                    rx="3"
                    fill="#F5A623"
                    stroke="#1A1A1A"
                    strokeWidth="1"
                  />
                  <text
                    x="53"
                    y="193"
                    textAnchor="middle"
                    fontSize="6"
                    fontFamily="monospace"
                    fill="#1A1A1A"
                    fontWeight="bold"
                  >
                    raydesite
                  </text>
                </svg>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-8 bg-[#F5A623] border-2 border-[#1A1A1A] rounded-xl px-4 py-2 shadow-[3px_3px_0_#1A1A1A]">
                <span className="font-mono font-bold text-xs text-[#1A1A1A]">
                  git commit -m &quot;🔥 ship it&quot;
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2A2A2A] border-2 border-[#F5A623] rounded-xl px-4 py-2">
                <span className="font-mono font-bold text-xs text-[#F5A623]">
                  // no handoffs. just devs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
