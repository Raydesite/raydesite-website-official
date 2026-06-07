type TimelineItem = {
	date: string;
	side: string;
	tag: string;
	tagColor: string;
	tagText: string;
	title: string;
	body: string;
	badge: string | null;
};

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

		// ABOUT US PAGE
		aboutUs: {
			sectionLabel: 'Our story',
			heading: 'How did',
			headingAccent: 'Raydesite',
			headingEnd: 'happen?',
			subheading:
				'Two engineers. One unplanned idea. A name born from life itself.',
			ctaLabel: 'Open for work',
			ctaHeading: "Let's build something",
			ctaAccent: 'worth shipping.',
			ctaButton: 'Start a project →',
			stackLabel: '// stack.raydesite',
			stats: [
				{ label: 'Founded', value: 'Nov 2019' },
				{ label: 'Team', value: '2 engineers' },
				{ label: 'Stack', value: 'Next.js · Shopify · Tailwind' },
				{ label: 'Status', value: '🟢 Open for projects' },
			],
			timeline: [
				{
					date: 'Nov 2019',
					side: 'left',
					tag: 'Origin',
					tagColor: '#D4E8C2',
					tagText: '#2D5A1B',
					title: 'Take the wheel.',
					body: "We're both Systems Engineers — and we've always seen ourselves as more than that. The passion for software, design, and technology (and yes, Harry Potter) was always there. Where did you think the lightning bolt came from?",
					badge: '// it started here',
				},
				{
					date: 'Jan 2020',
					side: 'right',
					tag: 'Turning point',
					tagColor: '#C2D8E8',
					tagText: '#1B3D5A',
					title: 'Fall or level up.',
					body: '2020 pushed and collapsed a lot of people. For us, it meant learning to grow and sit with an idea that had been living in our heads for a while. Was that the start of Raydesite? Technically yes. In spirit, it had always been there.',
					badge: null,
				},
				{
					date: 'May 2020',
					side: 'left',
					tag: 'The name',
					tagColor: '#F5A623',
					tagText: '#1A1A1A',
					title: 'Best things happen unplanned.',
					body: 'Every piece of the name, the logo, the identity — each traces back to a real moment in our lives. Things that marked us and built who we are. The most incredible part? None of it was planned.',
					badge: '// raydesite.exe',
				},
				{
					date: 'Jun 2020',
					side: 'right',
					tag: 'Lesson',
					tagColor: '#E8C2D4',
					tagText: '#5A1B3D',
					title: 'Lived experience, learned lesson.',
					body: "The moment that crystallized everything: realizing how much we already knew. One of us deep in enterprise software. The other living in design and web dev. We just hadn't connected the dots yet.",
					badge: null,
				},
				{
					date: '2020 → ∞',
					side: 'left',
					tag: 'Now',
					tagColor: '#C2E8D4',
					tagText: '#1B5A3D',
					title: "We're just getting started.",
					body: 'So here we are — building for people who feel the same passion we do for code, design, and everything in between. No account managers, no outsourcing. Just two engineers who ship.',
					badge: 'git push origin main 🚀',
				},
			] as TimelineItem[],
		},

		// PRIVACY POLICY PAGE
		privacyPolicy: {
			label: 'Legal',
			heading: 'Privacy',
			headingAccent: 'Policy',
			updated: 'Last updated: June 2026',
			sections: [
				{
					title: '1. Who we are',
					body: 'Raydesite is a software development studio based in West Palm Beach, Florida, USA. We build websites, web apps, mobile apps, and digital products for clients in the US and internationally. You can reach us at ',
				},
				{
					title: '2. What information we collect',
					body: 'We only collect information you voluntarily provide through our contact form:',
					list: [
						'Your name',
						'Your email address',
						'A description of your project or inquiry',
					],
					footer:
						'We do not collect any other personal data. We do not use cookies for tracking, analytics, or advertising purposes. We comply with the Florida Digital Bill of Rights (FDBR) and the Florida Information Protection Act (FIPA).',
				},
				{
					title: '3. How we use your information',
					body: 'The information you provide is used solely to:',
					list: [
						'Respond to your inquiry or project request',
						'Send you a project proposal if applicable',
						'Communicate during the development process',
						'Fulfill contractual obligations as outlined in your project agreement',
					],
					footer:
						'We will never sell, rent, or share your personal information with third parties. We do not send marketing emails or newsletters without your explicit consent.',
				},
				{
					title: '4. Data retention & deletion',
					body: 'We retain your contact information only for as long as necessary to complete your project or respond to your inquiry. If no project agreement is reached, your information is deleted within 90 days of your initial contact. For active projects, we retain your data for the duration of the contract plus 2 years, or as required by Florida law and our professional obligations.',
				},
				{
					title: '5. Your rights under Florida law',
					body: 'You have the right to:',
					list: [
						'Request access to the personal data we hold about you',
						'Request correction or deletion of your data',
						'Withdraw consent at any time by contacting us',
						'Opt out of any future communications',
						'Receive a copy of your data in a portable format',
					],
					footer:
						'We will respond within 30 days. To exercise any of these rights, contact us at ',
				},
				{
					title: '6. Data security',
					body: 'We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.',
				},
				{
					title: '7. Changes to this policy',
					body: 'We may update this Privacy Policy from time to time to comply with Florida law changes or improve our practices. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.',
				},
			],
		},

		// TERMS OF SERVICE PAGE
		termsOfService: {
			label: 'Legal',
			heading: 'Terms of ',
			headingAccent: 'Service',
			updated: 'Last updated: June 2026',
			sections: [
				{
					title: '1. Agreement to terms',
					body: 'By engaging Raydesite for any software development service, you agree to these Terms of Service. These terms govern the relationship between Raydesite (West Palm Beach, Florida, USA) and the client from the moment a project proposal is signed and accepted.',
				},
				{
					title: '2. Project proposal & approval',
					body: 'Before any development begins, Raydesite will provide the client with a written project proposal that includes:',
					list: [
						'Scope of work and deliverables',
						'Project timeline and milestones',
						'Pricing and payment schedule',
						'Technical requirements and assumptions',
						'Intellectual property ownership terms',
					],
					footer:
						'The client must review, approve, and sign the proposal before work begins. By signing, the client confirms they have read, understood, and agreed to all terms and requirements outlined in the proposal.',
				},
				{
					title: '3. No refund policy',
					body: 'All sales are final. Raydesite does not offer refunds once a project proposal has been signed and accepted by the client. By approving the proposal, the client confirms satisfaction with the agreed scope, timeline, and terms. Any disputes regarding deliverables must be raised within the scope of the original proposal and resolved through direct communication with our team at ',
					highlight: true,
					badge: '⚠️ Important',
				},
				{
					title: '4. Payment terms',
					body: 'All prices are in US dollars (USD). Payment schedules are defined in the project proposal. Raydesite reserves the right to pause or stop work if payments are not received according to the agreed schedule.',
					footer:
						'Late payments may incur a fee of 5% per month on the outstanding balance, as outlined in the project proposal. Raydesite complies with all applicable Florida payment and collection laws.',
				},
				{
					title: '5. Scope changes',
					body: 'Any changes to the agreed scope of work must be requested in writing and approved by both parties. Scope changes may affect the timeline and cost of the project. Raydesite will provide an updated proposal for any significant changes before proceeding.',
				},
				{
					title: '6. Intellectual property',
					body: 'Upon receipt of full payment, the client receives full ownership of all custom code and assets developed specifically for their project. Raydesite retains the right to use general tools, frameworks, and methodologies developed during the project, and to showcase the project in our portfolio (unless otherwise agreed in writing).',
				},
				{
					title: '7. Client responsibilities',
					body: 'The client agrees to:',
					list: [
						'Provide all required content, assets, and access in a timely manner',
						'Review and provide feedback within the agreed timeframes',
						'Designate a single point of contact for project communication',
						'Not use deliverables for any illegal or unethical purposes',
						'Comply with applicable Florida and federal laws in use of deliverables',
					],
				},
				{
					title: '8. Limitation of liability',
					body: 'Raydesite is not liable for any indirect, incidental, special, or consequential damages arising from the use of or inability to use deliverables. Our total liability shall not exceed the amount paid by the client for the project.',
				},
				{
					title: '9. Governing law & jurisdiction',
					body: 'These terms are governed by the laws of the State of Florida, United States, without regard to conflict of laws. Both parties agree to submit to the exclusive jurisdiction of the state and federal courts located in Palm Beach County, Florida for resolution of any disputes.',
				},
				{
					title: '10. Contact',
					body: 'For any questions about these terms, contact us at ',
				},
			],
		},

		// COOKIE POLICY PAGE
		cookiePolicy: {
			label: 'Legal',
			heading: 'Cookie',
			headingAccent: 'Policy',
			updated: 'Last updated: June 2026',
			sections: [
				{
					title: '1. What are cookies?',
					body: 'Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work properly and to provide basic functionality like remembering your preferences.',
				},
				{
					title: '2. How we use cookies',
					body: 'Raydesite uses only essential technical cookies necessary for the website to function correctly. We do ',
					bodyAccent: 'not',
					bodyComplement:
						'use cookies for advertising, marketing, behavioral tracking, profiling, or third-party analytics. We comply with Florida privacy laws regarding cookie disclosure and consent.',
				},
				{
					title: '3. Types of cookies we use',
					cookieTypes: [
						{
							type: 'Essential cookies',
							color: '#D4E8C2',
							textColor: '#2D5A1B',
							desc: 'Required for the website to function. These include session cookies set by the browser and cookies used by our hosting provider (Netlify) for basic site delivery. You cannot opt out of these as they are necessary for basic functionality.',
						},
					],
				},
				{
					title: '4. Third-party cookies',
					body: 'We currently do not use any third-party cookies, including from Google Analytics, Meta, or any advertising network. If we implement third-party cookies in the future, this policy will be updated, and we will provide a cookie consent banner allowing you to opt in or out.',
				},
				{
					title: '5. Your cookie choices',
					body: 'You can control and delete cookies through your browser settings. Most browsers allow you to reject cookies or alert you when a cookie is being sent. Please note that disabling essential cookies may affect the functionality and appearance of the website.',
				},
				{
					title: '6. Florida law compliance',
					body: 'This Cookie Policy complies with the Florida Digital Bill of Rights (FDBR) and Florida data privacy requirements. We do not require consent for essential cookies, as they are necessary for website function.',
				},
				{
					title: '7. Changes to this policy',
					body: 'We may update this Cookie Policy as our website evolves or as Florida law changes. Any changes will be posted on this page with an updated date. We recommend reviewing this page periodically.',
				},
				{
					title: '8. Contact',
					body: 'Questions about our cookie practices? Reach us at ',
				},
			],
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

		// ABOUT US PAGE
		aboutUs: {
			sectionLabel: 'Nuestra historia',
			heading: '¿Cómo sucedió',
			headingAccent: 'Raydesite?',
			headingEnd: '',
			subheading:
				'Dos ingenieras. Una idea sin planeación. Un nombre nacido de la vida misma.',
			ctaLabel: 'Abiertos para trabajar',
			ctaHeading: 'Construyamos algo',
			ctaAccent: 'que valga la pena entregar.',
			ctaButton: 'Iniciar un proyecto →',
			stackLabel: '// stack.raydesite',
			stats: [
				{ label: 'Fundada', value: 'Nov 2019' },
				{ label: 'Equipo', value: '2 ingenieras' },
				{ label: 'Stack', value: 'Next.js · Shopify · Tailwind' },
				{ label: 'Estado', value: '🟢 Abiertos para proyectos' },
			],
			timeline: [
				{
					date: 'Nov 2019',
					side: 'left',
					tag: 'Origen',
					tagColor: '#D4E8C2',
					tagText: '#2D5A1B',
					title: 'Tomar las riendas.',
					body: 'Somos ambas Ingenieras de Sistemas — y siempre nos hemos visto como algo más. La pasión por software, diseño y tecnología (y sí, Harry Potter) siempre estuvo ahí. ¿De dónde crees que vino el rayo?',
					badge: '// it started here',
				},
				{
					date: 'Ene 2020',
					side: 'right',
					tag: 'Punto de quiebre',
					tagColor: '#C2D8E8',
					tagText: '#1B3D5A',
					title: 'Caer o elevarse.',
					body: '2020 empujó y derrumbó a muchas personas. Para nosotras, significó aprender a crecer y sentarnos con una idea que había vivido en nuestras cabezas por un tiempo. ¿Fue ese el inicio de Raydesite? Técnicamente sí. En espíritu, siempre estuvo ahí.',
					badge: null,
				},
				{
					date: 'May 2020',
					side: 'left',
					tag: 'El nombre',
					tagColor: '#F5A623',
					tagText: '#1A1A1A',
					title: 'Las mejores cosas suceden sin planeación.',
					body: 'Cada pieza del nombre, el logo, la identidad — cada una se remonta a un momento real en nuestras vidas. Cosas que nos marcaron y construyeron quiénes somos. ¿Lo más increíble? Nada fue planeado.',
					badge: '// raydesite.exe',
				},
				{
					date: 'Jun 2020',
					side: 'right',
					tag: 'Lección',
					tagColor: '#E8C2D4',
					tagText: '#5A1B3D',
					title: 'Experiencia vivida, lección aprendida.',
					body: 'El momento que cristalizó todo: darnos cuenta cuánto ya sabíamos. Una de nosotras profunda en software empresarial. La otra viviendo en diseño y desarrollo web. Solo que no habíamos conectado los puntos aún.',
					badge: null,
				},
				{
					date: '2020 → ∞',
					side: 'left',
					tag: 'Ahora',
					tagColor: '#C2E8D4',
					tagText: '#1B5A3D',
					title: 'Apenas estamos empezando.',
					body: 'Así que aquí estamos — construyendo para personas que sienten la misma pasión que nosotras por código, diseño y todo lo demás. Sin account managers, sin outsourcing. Solo dos ingenieras que entregan.',
					badge: 'git push origin main 🚀',
				},
			] as TimelineItem[],
		},

		// PRIVACY POLICY PAGE
		privacyPolicy: {
			label: 'Legal',
			heading: 'Política de',
			headingAccent: 'Privacidad',
			updated: 'Última actualización: Junio 2026',
			sections: [
				{
					title: '1. ¿Quiénes somos?',
					body: 'Raydesite es un estudio de desarrollo de software basado en West Palm Beach, Florida, USA. Creamos sitios web, aplicaciones web, aplicaciones móviles y productos digitales para clientes en USA e internacionalmente. Puedes contactarnos en ',
				},
				{
					title: '2. ¿Qué información recopilamos?',
					body: 'Solo recopilamos información que proporcionas voluntariamente a través de nuestro formulario de contacto:',
					list: [
						'Tu nombre',
						'Tu dirección de correo electrónico',
						'Una descripción de tu proyecto o consulta',
					],
					footer:
						'No recopilamos ningún otro dato personal. No usamos cookies para rastreo, análisis o publicidad. Cumplimos con la Ley de Derechos Digitales de Florida (FDBR) y la Ley de Protección de Información de Florida (FIPA).',
				},
				{
					title: '3. ¿Cómo usamos tu información?',
					body: 'La información que proporcionas se usa únicamente para:',
					list: [
						'Responder a tu consulta o solicitud de proyecto',
						'Enviarte una propuesta de proyecto si es aplicable',
						'Comunicarnos durante el proceso de desarrollo',
						'Cumplir con nuestras obligaciones contractuales',
					],
					footer:
						'Nunca venderemos, alquilaremos ni compartiremos tu información personal con terceros. No enviamos correos de marketing sin tu consentimiento explícito.',
				},
				{
					title: '4. Retención y eliminación de datos',
					body: 'Retenemos tu información de contacto solo el tiempo necesario para completar tu proyecto o responder a tu consulta. Si no se llega a un acuerdo de proyecto, tu información se elimina dentro de 90 días de tu contacto inicial. Para proyectos activos, retenemos tus datos durante la duración del contrato más 2 años, o según lo requiera la ley de Florida.',
				},
				{
					title: '5. Tus derechos bajo la ley de Florida',
					body: 'Tienes derecho a:',
					list: [
						'Solicitar acceso a los datos personales que tenemos sobre ti',
						'Solicitar corrección o eliminación de tus datos',
						'Retirar el consentimiento en cualquier momento contactándonos',
						'Optar por no recibir futuras comunicaciones',
						'Recibir una copia de tus datos en formato portable',
					],
					footer:
						'Responderemos dentro de 30 días. Para ejercer cualquiera de estos derechos, contáctanos en ',
				},
				{
					title: '6. Seguridad de datos',
					body: 'Implementamos medidas de seguridad razonables administrativas, técnicas y físicas para proteger tu información personal contra acceso, alteración o destrucción no autorizada. Sin embargo, ningún método de transmisión por Internet es 100% seguro.',
				},
				{
					title: '7. Cambios a esta política',
					body: 'Podemos actualizar esta Política de Privacidad de vez en cuando para cumplir con cambios en la ley de Florida o mejorar nuestras prácticas. Cualquier cambio será publicado en esta página con una fecha actualizada. Te animamos a revisar esta página periódicamente.',
				},
			],
		},

		// TERMS OF SERVICE PAGE
		termsOfService: {
			label: 'Legal',
			heading: 'Términos de ',
			headingAccent: 'Servicio',
			updated: 'Última actualización: Junio 2026',
			sections: [
				{
					title: '1. Aceptación de términos',
					body: 'Al contratar a Raydesite para cualquier servicio de desarrollo de software, aceptas estos Términos de Servicio. Estos términos rigen la relación entre Raydesite (West Palm Beach, Florida, USA) y el cliente desde el momento en que una propuesta de proyecto es firmada y aceptada.',
				},
				{
					title: '2. Propuesta de proyecto y aprobación',
					body: 'Antes de que comience cualquier desarrollo, Raydesite proporcionará al cliente una propuesta de proyecto escrita que incluya:',
					list: [
						'Alcance del trabajo y entregables',
						'Cronograma del proyecto e hitos',
						'Precios y calendario de pagos',
						'Requisitos técnicos y suposiciones',
						'Términos de propiedad intelectual',
					],
					footer:
						'El cliente debe revisar, aprobar y firmar la propuesta antes de que comience el trabajo. Al firmar, el cliente confirma que ha leído, comprendido y aceptado todos los términos y requisitos establecidos en la propuesta.',
				},
				{
					title: '3. Política sin reembolso',
					body: 'Todas las ventas son finales. Raydesite no ofrece reembolsos una vez que una propuesta de proyecto ha sido firmada y aceptada por el cliente. Al aprobar la propuesta, el cliente confirma su satisfacción con el alcance, cronograma y términos acordados. Cualquier disputa respecto a los entregables debe ser planteada dentro del alcance de la propuesta original y resuelta a través de comunicación directa con nuestro equipo en ',
					highlight: true,
					badge: '⚠️ Importante',
				},
				{
					title: '4. Términos de pago',
					body: 'Todos los precios están en dólares estadounidenses (USD). Los calendarios de pago se definen en la propuesta del proyecto. Raydesite se reserva el derecho de pausar o detener el trabajo si los pagos no se reciben según el cronograma acordado.',
					footer:
						'Los pagos atrasados pueden incurrir en una tarifa del 5% mensual sobre el saldo pendiente. Raydesite cumple con todas las leyes de Florida aplicables sobre pagos.',
				},
				{
					title: '5. Cambios en el alcance',
					body: 'Cualquier cambio en el alcance de trabajo acordado debe ser solicitado por escrito y aprobado por ambas partes. Los cambios de alcance pueden afectar el cronograma y el costo del proyecto. Raydesite proporcionará una propuesta actualizada para cualquier cambio significativo antes de proceder.',
				},
				{
					title: '6. Propiedad intelectual',
					body: 'Tras recibir el pago completo, el cliente recibe la propiedad total de todo el código personalizado y activos desarrollados específicamente para su proyecto. Raydesite se reserva el derecho de usar herramientas, marcos y metodologías generales desarrolladas durante el proyecto, y de mostrar el proyecto en nuestro portafolio (a menos que se acuerde lo contrario por escrito).',
				},
				{
					title: '7. Responsabilidades del cliente',
					body: 'El cliente acepta:',
					list: [
						'Proporcionar todo el contenido, activos y acceso requerido de manera oportuna',
						'Revisar y proporcionar retroalimentación dentro de los plazos acordados',
						'Designar un único punto de contacto para la comunicación del proyecto',
						'No usar los entregables para propósitos ilegales o no éticos',
						'Cumplir con la ley de Florida y leyes federales aplicables en el uso de entregables',
					],
				},
				{
					title: '8. Limitación de responsabilidad',
					body: 'Raydesite no es responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de usar los entregables. Nuestra responsabilidad total no excederá la cantidad pagada por el cliente para el proyecto.',
				},
				{
					title: '9. Ley aplicable y jurisdicción',
					body: 'Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos, sin consideración de conflicto de leyes. Ambas partes aceptan someterse a la jurisdicción exclusiva de los tribunales estatales y federales ubicados en el Condado de Palm Beach, Florida para la resolución de cualquier disputa.',
				},
				{
					title: '10. Contacto',
					body: 'Para cualquier pregunta sobre estos términos, contáctanos en ',
				},
			],
		},

		// COOKIE POLICY PAGE
		cookiePolicy: {
			label: 'Legal',
			heading: 'Política de',
			headingAccent: 'Cookies',
			updated: 'Última actualización: Junio 2026',
			sections: [
				{
					title: '1. ¿Qué son las cookies?',
					body: 'Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen correctamente y para proporcionar funcionalidad básica como recordar tus preferencias.',
				},
				{
					title: '2. ¿Cómo usamos las cookies?',
					body: 'Raydesite utiliza solo cookies técnicas esenciales necesarias para que el sitio web funcione correctamente. ',
					bodyAccent: 'No',
					bodyComplement:
						'usamos cookies para publicidad, marketing, rastreo de comportamiento ni análisis de terceros. Cumplimos con las leyes de privacidad de Florida respecto a divulgación y consentimiento de cookies.',
				},
				{
					title: '3. Tipos de cookies que usamos',
					cookieTypes: [
						{
							type: 'Cookies esenciales',
							color: '#D4E8C2',
							textColor: '#2D5A1B',
							desc: 'Requeridas para que el sitio web funcione. Incluyen cookies de sesión establecidas por el navegador y cookies utilizadas por nuestro proveedor de hosting (Netlify) para la entrega básica del sitio. No puedes optar por no usarlas ya que son necesarias para funcionalidad básica.',
						},
					],
				},
				{
					title: '4. Cookies de terceros',
					body: 'Actualmente no usamos cookies de terceros, incluyendo Google Analytics, Meta, ni ninguna red publicitaria. Si implementamos cookies de terceros en el futuro, esta política será actualizada y proporcionaremos un banner de consentimiento de cookies permitiéndote optar por dentro o fuera.',
				},
				{
					title: '5. Tus opciones de cookies',
					body: 'Puedes controlar y eliminar cookies a través de la configuración de tu navegador. La mayoría de navegadores te permiten rechazar cookies o alertarte cuando se envía una cookie. Ten en cuenta que desactivar cookies esenciales puede afectar la funcionalidad y apariencia del sitio web.',
				},
				{
					title: '6. Cumplimiento con la ley de Florida',
					body: 'Esta Política de Cookies cumple con la Ley de Derechos Digitales de Florida (FDBR) y requisitos de privacidad de datos de Florida. No requerimos consentimiento para cookies esenciales, ya que son necesarias para la función del sitio web.',
				},
				{
					title: '7. Cambios a esta política',
					body: 'Podemos actualizar esta Política de Cookies conforme nuestro sitio web evoluciona o cambian las leyes de Florida. Cualquier cambio será publicado en esta página con una fecha actualizada. Recomendamos revisar esta página periódicamente.',
				},
				{
					title: '8. Contacto',
					body: '¿Preguntas sobre nuestras prácticas de cookies? Contáctanos en ',
				},
			],
		},
	},
} as const;

export type Lang = keyof typeof t;
export type Translations = (typeof t)['en'];
