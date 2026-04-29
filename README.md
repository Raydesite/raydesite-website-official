# Raydesite

Software solutions for everyone.

Raydesite is a commercial landing page for software development services. The site presents Raydesite as a partner for building landing pages, e-commerce experiences, web apps, mobile apps, Shopify storefronts, and custom digital products.

The project was migrated from an earlier merch/store concept into a software services website. The current direction is clear: help people turn ideas into reliable, usable software.

## Tech Stack

- Next.js 15.5
- React 19
- TypeScript
- Tailwind CSS 3.4
- PostCSS
- Autoprefixer

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project Structure

```text
raydesite/
├── app/
│   ├── layout.tsx        # Root layout, metadata, structured data
│   ├── page.tsx          # Main landing page composition
│   └── globals.css       # Global styles, tokens, animations
│
├── components/
│   ├── Navbar.tsx        # Main navigation
│   ├── Hero.tsx          # Hero section and visual illustration
│   ├── MarqueeTicker.tsx # Animated service ticker
│   ├── Products.tsx      # Software service cards
│   ├── SoftwareCTA.tsx   # Main software-focused CTA
│   ├── LatestRelease.tsx # Recent work examples
│   ├── GetAQuote.tsx    # Project inquiry form
│   ├── FAQ.tsx           # Frequently asked questions
│   └── Footer.tsx        # Footer navigation and contact links
│
├── public/               # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Services Represented

- Landing pages
- E-commerce builds
- Web applications
- Mobile applications
- Shopify storefronts
- Software consulting and product planning

## Design Direction

Raydesite uses a bold, warm, developer-friendly visual language:

- Cream paper background
- Ink-black typography and borders
- Orange accent color
- Heavy outlines and hard shadows
- Monospace labels for technical rhythm
- Animated marquee for brand energy

Motion respects accessibility preferences. Users with `prefers-reduced-motion: reduce` will not see the marquee or decorative animations.

## Accessibility and Hardening Notes

The landing page currently includes:

- Real section anchors instead of placeholder links
- Interactive service/work cards that link to the quote section
- Accessible form labels and required fields
- Mobile menu ARIA state
- FAQ accordion ARIA relationships
- Reduced-motion support

## Current Roadmap

- Connect the quote form to a real backend or email workflow
- Replace placeholder legal links with real legal pages
- Add real case studies or project detail pages
- Add production analytics
- Finalize Open Graph assets
- Continue improving accessibility and performance

## Scripts

```bash
npm run dev    # Start local development server
npm run build  # Create production build
npm start      # Start production server
```

## Contact

- Website: https://raydesite.com
- Email: hello@raydesite.com
- GitHub: https://github.com/raydesite
