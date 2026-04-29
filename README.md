```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║          🚀 RAYDESITE — Merch Made For Developers By Developers  ║
║                                                                   ║
║              Stickers • Pines • Gorras • Camisetas              ║
║                   Made with ❤️ & Caffeine                       ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

> **Para los que viven entre terminales, commits y memes de `sudo rm -rf /`**

---

## 🎯 ¿Qué es Raydesite?

Raydesite es una tienda de merchandise **diseñada por developers para developers**. No es un proyecto más. Es donde convergen tres mundos:

- **👨‍💻 Cultura Dev**: Merch que habla en tu idioma (referencias a git, debugging, coffee-driven development)
- **🌸 Otaku & Geek**: Colaboraciones Star Wars, anime y universos que los devs amamos
- **✨ Full-Swag**: Tu uniforme de developerentario profesional

Porque ser developer no es solo código. Es un estilo de vida.

---

## 🚀 Features

| Feature                   | Descripción                                               |
| ------------------------- | --------------------------------------------------------- |
| ⚡ **Next.js 15**         | SSG ultra-rápido, exportación estática, sin servidor      |
| 🎨 **Tailwind CSS**       | Diseño responsivo y hermoso en todos los dispositivos     |
| 🔤 **Tipografía Premium** | Syne + DM Sans + Space Mono (Google Fonts)                |
| ♿ **Accesible**          | WCAG compliant con aria-labels y semantic HTML            |
| 📱 **Mobile First**       | Perfecto desde un iPhone hasta 4K displays                |
| 🎬 **Animaciones Smooth** | RequestAnimationFrame para 60fps (sin jank)               |
| 🔍 **SEO Beast Mode**     | OpenGraph, Twitter Cards, Schema.org, metadatos completos |
| 🎭 **Dark & Modern**      | Paleta #1A1A1A, #F5A623, #F4F3F0 (chef's kiss)            |

---

## 🛠️ Stack Tecnológico

```
Frontend Stack
├── Next.js 15.1.0          ← App Router + SSG
├── React 19                ← UI component library
├── TypeScript 5            ← Type safety FTW
├── Tailwind CSS 3.4.1      ← Utility-first CSS
├── PostCSS                 ← CSS transformations
└── Autoprefixer            ← Browser compatibility

Desarrollo
├── Node.js (recomendado v18+)
├── npm (o pnpm/yarn)
└── Tu editor favorito (VS Code + Copilot recomendado 😉)
```

---

## 📦 Estructura del Proyecto

```
raydesite/
├── app/
│   ├── page.tsx           → Página principal (SSG)
│   ├── layout.tsx         → Root layout + metadatos SEO
│   └── globals.css        → Estilos globales
│
├── components/            → Componentes React reutilizables
│   ├── Navbar.tsx         → Navegación principal
│   ├── Hero.tsx           → Sección hero (con animaciones)
│   ├── MarqueeTicker.tsx  → Ticker animado
│   ├── Products.tsx       → Catálogo de merch
│   ├── FullSwagCTA.tsx    → Call-to-action principal
│   ├── LatestRelease.tsx  → Últimas drops
│   ├── GetAQuote.tsx      → Cotizaciones personalizadas
│   ├── FAQ.tsx            → Preguntas frecuentes
│   └── Footer.tsx         → Pie de página
│
├── public/                → Archivos estáticos
├── next.config.js         → Configuración Next.js
├── tailwind.config.ts     → Configuración Tailwind
├── tsconfig.json          → Configuración TypeScript
└── package.json           → Dependencias

```

---

## 🚀 Quick Start

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/raydesite/raydesite.git
cd raydesite
```

### 2️⃣ Instalar dependencias

```bash
npm install
# o si usas pnpm
pnpm install
```

### 3️⃣ Ejecutar en desarrollo

```bash
npm run dev
```

Tu terminal va a decir: `▲ Next.js 15.1.0`  
Abre [http://localhost:3000](http://localhost:3000) y disfruta 🎉

### 4️⃣ Build para producción

```bash
npm run build
npm start
```

---

## 🎨 Paleta de Colores

```
🟠 Primary:    #F5A623  ← El naranja que define el vibe
⚫ Dark:       #1A1A1A  ← Negro profundo
🟡 Light:      #F4F3F0  ← Crema cálida
🔘 Accent:     #8A8680  ← Gris cálido para texto

Categorías:
├── Landing Page  → #D4E8C2 (verde mint)
├── Online Store  → #C2D8E8 (azul pastel)
├── Apps         → #C2E8D4 (turquesa)
├── E-Commerce   → #E8C2D4 (rosa)
├── Website      → #F5A623 (naranja brand)
├── Mobile       → #E8DCC2 (beige)
└── Shopify      → #EBA8A8 (rojo suave)
```

---

## 🔧 Configuración

### TypeScript

```json
{
	"compilerOptions": {
		"strict": true,
		"jsx": "preserve",
		"moduleResolution": "bundler",
		"target": "ES2017"
	}
}
```

### Tailwind

Configurado para máximo rendimiento con tree-shaking automático.

### Next.js

```js
{
  output: 'export',        // SSG (Static Site Generation)
  trailingSlash: true,     // URLs con /
  images: { unoptimized: true } // Para export estático
}
```

---

## 📱 Responsive Design

```
Mobile First Breakpoints (Tailwind)
├── sm: 640px    ← Tabletas pequeñas
├── md: 768px    ← Tabletas
├── lg: 1024px   ← Laptops
└── xl: 1280px   ← Monitors 4K
```

Cada componente está optimizado para funcionar perfecto en cualquier pantalla.

---

## ✨ Componentes Destacados

### 🎬 Hero Section

- Animaciones fluidas con `requestAnimationFrame`
- Ilustración SVG interactiva (floating motion)
- CTA dual (Shop Now / Get a Quote)
- Tags dinámicos por categoría

### 📊 Products

- Grid responsivo
- Lazy loading ready
- Filtros por categoría

### 🎯 CTA Sections

- Full-Swag CTA para conversiones
- Newsletter integration ready
- Social proof ready

### ❓ FAQ

- Accordions smooth
- SEO structured data

---

## 🚀 Deployment

### Opción 1: Vercel (Recomendado ⭐)

```bash
npm install -g vercel
vercel
```

Así de fácil. Vercel detecta Next.js y hace su magia.

### Opción 2: GitHub Pages / Netlify

```bash
npm run build
# Sirve la carpeta `out/` generada
```

### Opción 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔍 SEO

Raydesite viene pre-optimizado:

✅ **Metadatos Completos**

- OpenGraph (Facebook, LinkedIn)
- Twitter Cards
- Schema.org structured data

✅ **Robots Inteligentes**

- Indexación habilitada
- Google Bot optimizado
- Sitemaps ready

✅ **Rendimiento**

- Preconnect a Google Fonts
- CSS optimizado
- Zero CLS (Cumulative Layout Shift)

---

## 🐛 Development

### Lint & Format

```bash
# TypeScript check
tsc --noEmit

# Próximamente: ESLint + Prettier
```

### Testing

Estructura lista para Jest + React Testing Library

---

## 📈 Performance

| Métrica                   | Target | Status |
| ------------------------- | ------ | ------ |
| Lighthouse Performance    | 90+    | ✅     |
| Lighthouse Accessibility  | 95+    | ✅     |
| Lighthouse Best Practices | 90+    | ✅     |
| Lighthouse SEO            | 100    | ✅     |
| Core Web Vitals           | Green  | ✅     |

---

## 🤝 Contribuir

¿Quieres hacer que Raydesite sea aún más épico?

1. **Fork** el repo
2. **Crea una rama** (`git checkout -b feature/amazing-feature`)
3. **Commit** tus cambios (`git commit -m 'Add amazing feature'`)
4. **Push** (`git push origin feature/amazing-feature`)
5. **Abre un Pull Request**

### Ideas para contribuir

- 🎨 Nuevos diseños de componentes
- 🌍 Internacionalización (i18n)
- 📊 Integraciones con e-commerce
- ♿ Mejoras de accesibilidad
- 🚀 Optimizaciones de rendimiento
- 📱 PWA features

---

## 📄 Licencia

MIT License © 2024 Raydesite

Úsalo, modifícalo, gánate dinero con él. Solo dame crédito. 🤝

---

## 🙏 Agradecimientos

- **Next.js Team** por este framework increíble
- **Vercel** por el hosting
- **Google Fonts** por las tipografías hermosas
- **Tailwind Labs** por el CSS futuro
- **You** por usar Raydesite ❤️

---

## 📞 Contacto & Community

- 🌐 Website: [raydesite.com](https://raydesite.com)
- 📧 Email: hello@raydesite.com
- 🐙 GitHub: [@raydesite](https://github.com/raydesite)
- 𝕏 Twitter: [@raydesite](https://twitter.com/raydesite)
- 💬 Discord: [Join our server](https://discord.gg/raydesite)

---

## 🎪 Pro Tips

### 🔥 Para Developers

```bash
# Live reload en desarrollo
npm run dev

# Build optimizado con source maps
npm run build

# Analizar bundle size
npm run analyze (próximamente)
```

### 💡 Secrets del Proyecto

- Las animaciones usan `requestAnimationFrame` para 60fps puro
- El SVG del Hero es completamente personalizable
- Tailwind está configurado para máximo tree-shaking
- Todos los componentes son client-safe para Server Components

---

## 🚀 Roadmap

- [ ] 🛒 Carrito de compras (Stripe integration)
- [ ] 🌍 i18n (English, French, Portuguese)
- [ ] 📊 Analytics dashboard
- [ ] 🔔 Push notifications
- [ ] 💳 Wallet integration (Web3?)
- [ ] 🤖 AI-powered product recommendations
- [ ] 📸 Instagram gallery integration
- [ ] 🎥 Video testimonials

---

<div align="center">

### Made with ❤️ & Caffeine by Developers For Developers

```
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢀⠎⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠶⣶⣤⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢸⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⢿⣷⣄⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢸⣠⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⣿⣿⣷⠀⠀⠀
  ⠀⠀⠀⠀⠀⠈⢿⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣿⣿⣿⣇⠀⠀
  ⠀⠀⠀⠀⠀⠀⠘⣿⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡆⠀
  ⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡇⠀

                    Raydesite 🚀
          Para los que aman código & merch
```

**⭐ Si te encanta, dale una estrella en GitHub ⭐**

[Visita Raydesite](https://raydesite.com) | [GitHub](https://github.com/raydesite) | [Compra Merch](https://raydesite.com/shop)

</div>

---

**Happy coding and happy merching!** 🎉
