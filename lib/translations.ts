export const t = {
	en: {
		nav: {
			home: 'Home',
			services: 'Services',
			work: 'Work',
			faq: 'FAQ',
			servicesBtn: 'Services',
			quoteBtn: 'Get a Quote',
			getQuoteMobile: 'Get Quote',
		},
		hero: {
			eyebrow: 'Open for projects · 2026',
			headline1: 'Software built',
			headline2: 'to last.',
			headline3: 'Business',
			headline4: 'built',
			headline5: 'to scale.',
			subheadline:
				"We're developers who care about design. We build clean, production-ready software — no templates, no handoffs, no fluff.",
			ctaPrimary: 'Start a project',
			ctaSecondary: 'See our work',
			floatingLabel: 'deploy: production',
			floatingText: 'ready to ship 🚀',
			tags: [
				{ label: 'Landing Page' },
				{ label: 'Online Store' },
				{ label: 'Apps' },
				{ label: 'E-Commerce' },
				{ label: 'Website' },
				{ label: 'Mobile' },
				{ label: 'Shopify' },
				{ label: 'Design' },
			],
		},
		marquee: [
			'🚀 Launch faster',
			'⚡ Build clean software',
			'🛒 E-commerce that converts',
			'📱 Web and mobile apps',
			'💡 From idea to product',
			'🧑‍💻 Built by real developers',
		],
		products: {
			eyebrow: 'Our Services',
			heading1: "We don't do everything.",
			heading2: 'We do this well.',
			cta: 'Free consultation →',
			learnMore: 'Learn more →',
			items: [
				{
					id: 'e-commerce',
					name: 'E-commerce',
					description:
						'Online stores built to convert visitors into customers, with clean checkout flows and scalable foundations.',
					tag: 'Commerce',
				},
				{
					id: 'landing-pages',
					name: 'Landing Pages',
					description:
						'Fast, focused pages for launches, campaigns, services, and products that need a clear first impression.',
					tag: 'Launch',
				},
				{
					id: 'mobile-apps',
					name: 'Mobile apps',
					description:
						'Mobile-first experiences designed around real user flows, not just screens that look good in a mockup.',
					tag: 'Mobile',
				},
				{
					id: 'shopify',
					name: 'Shopify',
					description:
						'Custom Shopify storefronts, theme improvements, integrations, and performance-focused commerce work.',
					tag: 'Store',
				},
			],
			stats: [
				{ value: '50+', label: 'Projects shipped' },
				{ value: '4+', label: 'Core services' },
				{ value: '24h', label: 'Response time' },
				{ value: '100%', label: 'Built with care' },
			],
		},
		cta: {
			eyebrow: 'Who builds this',
			heading1: 'Developers who',
			heading2: 'design.',
			heading3: 'Designers who code.',
			body: 'Raydesite is a small dev team that designs as well as it codes. No account managers, no outsourcing — just people who ship.',
			ctaBtn: 'Start your project →',
			socialProof: 'Currently open for new projects',
		},
		latest: {
			eyebrow: 'Recent work',
			heading: 'Latest Work',
			releases: [
				{
					id: 1,
					name: 'Bingo Fortuna',
					category: 'Lottery & Bingo system',
					description:
						'Real-time lottery ticket system with full game management, digital tickets, and a complete operator flow.',
				},
				{
					id: 2,
					name: 'Your project here',
					category: 'Operations',
					description:
						"We're taking on new projects. Let's build something worth showing.",
				},
			],
		},
		quote: {
			eyebrow: 'Project inquiry',
			heading: 'Get a ',
			headingAccent: 'Quote',
			subheading:
				'Tell us what you want to build. We will help you shape the right software plan.',
			fields: [
				{ key: 'name', label: 'Your name', placeholder: 'Ada Lovelace' },
				{ key: 'email', label: 'Email', placeholder: 'ada@gmail.com' },
				{
					key: 'project',
					label: 'What do you need?',
					placeholder: 'Landing page, app, store...',
				},
				{
					key: 'quantity',
					label: 'Project size',
					placeholder: 'MVP, redesign, full build...',
				},
			],
			submitBtn: 'Send Request →',
			submitting: 'Sending...',
			successTitle: 'Request received!',
			successBody:
				'We will contact you within 24 hours. In the meantime, keep growing. 🚀',
			errorRequired: 'Please add your name and email so we can contact you.',
			errorNetwork:
				'Network error. Please check your connection and try again.',
			errorGeneral: 'Something went wrong. Please try again.',
		},
		faq: {
			eyebrow: 'Got questions?',
			heading: 'FAQ',
			items: [
				{
					q: 'What software solutions does your company offer?',
					a: 'We offer customized solutions including: landing pages, online stores, web and mobile applications, e-commerce, and process automation. Each project is tailored to your business needs.',
				},
				{
					q: 'What is the development timeline for a project?',
					a: 'It depends on complexity. A simple MVP takes 4-6 weeks, medium-sized projects 2-3 months. During the initial consultation we establish a clear timeline with defined milestones.',
				},
				{
					q: 'Do you offer post-launch support?',
					a: 'Yes. We offer monthly maintenance plans that include updates, security patches, and continuous optimizations.',
				},
				{
					q: 'What technologies do you use?',
					a: 'We work with modern and scalable technologies: React, Next.js, Node.js, TypeScript, PostgreSQL, Firebase. We choose the stack that best fits your project.',
				},
				{
					q: 'What is the process to start a project?',
					a: '1) Free initial consultation 2) Requirements and budget analysis 3) Technical proposal 4) Contract signature 5) Development begins with bi-weekly sprints.',
				},
				{
					q: 'Can I see my project code?',
					a: 'Yes. We provide complete access to the repository and code documentation.',
				},
			],
		},
		footer: {
			tagline:
				'Custom software for startups, creators, and businesses that need clean execution, not empty promises.',
			copyright: '© 2026 Raydesite. All rights reserved.',
			builtWith: 'Built with ☕ and too many tabs open',
			categories: {
				Services: 'Services',
				Company: 'Company',
				Support: 'Support',
				Legal: 'Legal',
			},
			links: {
				Services: [
					{ label: 'Landing Pages', href: '#products' },
					{ label: 'E-commerce', href: '#products' },
					{ label: 'Web Apps', href: '#products' },
					{ label: 'Mobile Apps', href: '#products' },
					{ label: 'Shopify', href: '#products' },
				],
				Company: [
					{ label: 'About Us', href: '/about-us' },
					{ label: 'Process', href: '#quote' },
					{ label: 'Work', href: '#latest' },
					{ label: 'Careers', href: 'mailto:raydesite@gmail.com' },
				],
				Support: [
					{ label: 'FAQ', href: '#faq' },
					{ label: 'Discovery Call', href: '#quote' },
					{ label: 'Maintenance', href: '#quote' },
					{ label: 'Get a Quote', href: '#quote' },
				],
				Legal: [
					{ label: 'Privacy Policy', href: '/privacy-policy' },
					{ label: 'Terms of Service', href: '/terms-of-service' },
					{ label: 'Cookie Policy', href: '/cookie-policy' },
				],
			},
		},
	},

	es: {
		nav: {
			home: 'Inicio',
			services: 'Servicios',
			work: 'Proyectos',
			faq: 'FAQ',
			servicesBtn: 'Servicios',
			quoteBtn: 'Obtener cotización',
			getQuoteMobile: 'Cotización',
		},
		hero: {
			eyebrow: 'Abiertos a proyectos · 2026',
			headline1: 'Software hecho',
			headline2: 'para durar.',
			headline3: 'Negocios',
			headline4: 'hechos',
			headline5: 'para escalar.',
			subheadline:
				'Somos developers que se preocupan por el diseño. Construimos software limpio y listo para producción — sin templates, sin intermediarios, sin relleno.',
			ctaPrimary: 'Iniciar proyecto',
			ctaSecondary: 'Ver nuestro trabajo',
			floatingLabel: 'deploy: producción',
			floatingText: 'listo para lanzar 🚀',
			tags: [
				{ label: 'Landing Page' },
				{ label: 'Tienda Online' },
				{ label: 'Apps' },
				{ label: 'E-Commerce' },
				{ label: 'Sitio Web' },
				{ label: 'Mobile' },
				{ label: 'Shopify' },
				{ label: 'Diseño' },
			],
		},
		marquee: [
			'🚀 Lanza más rápido',
			'⚡ Software limpio y escalable',
			'🛒 E-commerce que convierte',
			'📱 Apps web y móviles',
			'💡 De la idea al producto',
			'🧑‍💻 Hecho por developers reales',
		],
		products: {
			eyebrow: 'Nuestros Servicios',
			heading1: 'No hacemos todo.',
			heading2: 'Esto lo hacemos bien.',
			cta: 'Consulta gratis →',
			learnMore: 'Ver más →',
			items: [
				{
					id: 'e-commerce',
					name: 'E-commerce',
					description:
						'Tiendas online diseñadas para convertir visitantes en clientes, con flujos de pago limpios y bases escalables.',
					tag: 'Comercio',
				},
				{
					id: 'landing-pages',
					name: 'Landing Pages',
					description:
						'Páginas rápidas y enfocadas para lanzamientos, campañas y productos que necesitan una primera impresión clara.',
					tag: 'Lanzamiento',
				},
				{
					id: 'mobile-apps',
					name: 'Apps Móviles',
					description:
						'Experiencias mobile-first diseñadas alrededor de flujos reales de usuario, no solo pantallas bonitas en un mockup.',
					tag: 'Mobile',
				},
				{
					id: 'shopify',
					name: 'Shopify',
					description:
						'Tiendas Shopify personalizadas, mejoras de tema, integraciones y trabajo de comercio enfocado en rendimiento.',
					tag: 'Tienda',
				},
			],
			stats: [
				{ value: '50+', label: 'Proyectos entregados' },
				{ value: '4+', label: 'Servicios principales' },
				{ value: '24h', label: 'Tiempo de respuesta' },
				{ value: '100%', label: 'Hecho con cuidado' },
			],
		},
		cta: {
			eyebrow: 'Quiénes somos',
			heading1: 'Developers que',
			heading2: 'diseñan.',
			heading3: 'Designers que codean.',
			body: 'Raydesite es un equipo dev pequeño que diseña tan bien como codea. Sin intermediarios, sin outsourcing — solo personas que entregan.',
			ctaBtn: 'Iniciar tu proyecto →',
			socialProof: 'Actualmente abiertos a nuevos proyectos',
		},
		latest: {
			eyebrow: 'Trabajo reciente',
			heading: 'Últimos Proyectos',
			releases: [
				{
					id: 1,
					name: 'Bingo Fortuna',
					category: 'Sistema de Lotería y Bingo',
					description:
						'Sistema de boletos de lotería en tiempo real con gestión completa de juegos, tickets digitales y flujo completo para operadores.',
				},
				{
					id: 2,
					name: 'Tu proyecto aquí',
					category: 'Operaciones',
					description:
						'Estamos tomando nuevos proyectos. Construyamos algo que valga la pena mostrar.',
				},
			],
		},
		quote: {
			eyebrow: 'Consulta de proyecto',
			heading: 'Obtener ',
			headingAccent: 'Cotización',
			subheading:
				'Cuéntanos qué quieres construir. Te ayudamos a definir el plan de software adecuado.',
			fields: [
				{ key: 'name', label: 'Tu nombre', placeholder: 'Ada Lovelace' },
				{ key: 'email', label: 'Correo', placeholder: 'ada@gmail.com' },
				{
					key: 'project',
					label: '¿Qué necesitas?',
					placeholder: 'Landing page, app, tienda...',
				},
				{
					key: 'quantity',
					label: 'Tamaño del proyecto',
					placeholder: 'MVP, rediseño, build completo...',
				},
			],
			submitBtn: 'Enviar solicitud →',
			submitting: 'Enviando...',
			successTitle: '¡Solicitud recibida!',
			successBody:
				'Te contactaremos en 24 horas. Mientras tanto, sigue construyendo. 🚀',
			errorRequired:
				'Por favor agrega tu nombre y correo para poder contactarte.',
			errorNetwork:
				'Error de red. Por favor verifica tu conexión e intenta de nuevo.',
			errorGeneral: 'Algo salió mal. Por favor intenta de nuevo.',
		},
		faq: {
			eyebrow: '¿Tienes preguntas?',
			heading: 'Preguntas Frecuentes',
			items: [
				{
					q: '¿Qué soluciones de software ofrece su empresa?',
					a: 'Ofrecemos soluciones personalizadas que incluyen: landing pages, tiendas online, aplicaciones web y móviles, e-commerce y automatización de procesos. Cada proyecto se adapta a las necesidades de tu negocio.',
				},
				{
					q: '¿Cuánto tiempo toma desarrollar un proyecto?',
					a: 'Depende de la complejidad. Un MVP simple toma 4-6 semanas, proyectos medianos 2-3 meses. En la consulta inicial establecemos un cronograma claro con hitos definidos.',
				},
				{
					q: '¿Ofrecen soporte después del lanzamiento?',
					a: 'Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, parches de seguridad y optimizaciones continuas.',
				},
				{
					q: '¿Qué tecnologías utilizan?',
					a: 'Trabajamos con tecnologías modernas y escalables: React, Next.js, Node.js, TypeScript, PostgreSQL, Firebase. Elegimos el stack que mejor se adapte a tu proyecto.',
				},
				{
					q: '¿Cuál es el proceso para iniciar un proyecto?',
					a: '1) Consulta inicial gratuita 2) Análisis de requerimientos y presupuesto 3) Propuesta técnica 4) Firma de contrato 5) Inicio del desarrollo con sprints quincenales.',
				},
				{
					q: '¿Puedo ver el código de mi proyecto?',
					a: 'Sí. Proporcionamos acceso completo al repositorio y documentación del código.',
				},
			],
		},
		footer: {
			tagline:
				'Software personalizado para startups, creadores y negocios que necesitan ejecución limpia, no promesas vacías.',
			copyright: '© 2026 Raydesite. Todos los derechos reservados.',
			builtWith: 'Hecho con ☕ y demasiadas pestañas abiertas',
			categories: {
				Services: 'Servicios',
				Company: 'Empresa',
				Support: 'Soporte',
				Legal: 'Legal',
			},
			links: {
				Services: [
					{ label: 'Landing Pages', href: '#products' },
					{ label: 'E-commerce', href: '#products' },
					{ label: 'Web Apps', href: '#products' },
					{ label: 'Apps Móviles', href: '#products' },
					{ label: 'Shopify', href: '#products' },
				],
				Company: [
					{ label: 'Nosotras', href: '/about-us' },
					{ label: 'Proceso', href: '#quote' },
					{ label: 'Proyectos', href: '#latest' },
					{ label: 'Trabaja con nosotras', href: 'mailto:raydesite@gmail.com' },
				],
				Support: [
					{ label: 'FAQ', href: '#faq' },
					{ label: 'Llamada de descubrimiento', href: '#quote' },
					{ label: 'Mantenimiento', href: '#quote' },
					{ label: 'Cotización', href: '#quote' },
				],
				Legal: [
					{ label: 'Política de privacidad', href: '/privacy-policy' },
					{ label: 'Términos de servicio', href: '/terms-of-service' },
					{ label: 'Política de cookies', href: '/cookie-policy' },
				],
			},
		},
	},
} as const;

export type Lang = keyof typeof t;
export type Translations = (typeof t)['en'];
