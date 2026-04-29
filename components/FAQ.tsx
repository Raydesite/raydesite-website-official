'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Cuánto tarda el envío?',
    a: 'Envíos nacionales en 3-5 días hábiles. Express disponible en 24-48h con costo adicional. Internacional varía por país.',
  },
  {
    q: '¿Los diseños son exclusivos?',
    a: 'Sí. Todos los diseños son originales creados por nuestro equipo de developers y diseñadores. No encontrarás esto en ningún otro lugar.',
  },
  {
    q: '¿Puedo personalizar un producto?',
    a: 'Claro. Para órdenes de 50+ unidades ofrecemos personalización completa. Usa el formulario "Get a Quote" para cotizar.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Aceptamos tarjetas de crédito/débito (Visa, MC, Amex), PayPal, y transferencia bancaria para órdenes bulk.',
  },
  {
    q: '¿Tienen política de devoluciones?',
    a: '30 días para devoluciones en productos con defecto de fabricación. Para cambios de talla, contáctanos dentro de los 7 días de recibido.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#F5A623]" />
            Got questions?
            <span className="w-6 h-0.5 bg-[#F5A623]" />
          </span>
          <h2
            id="faq-heading"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            FAQ
          </h2>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-2 border-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-200 ${open === i ? 'shadow-[4px_4px_0_#F5A623]' : 'hover:shadow-[4px_4px_0_#1A1A1A]'}`}
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#F4F3F0] transition-colors duration-200"
                  aria-expanded={open === i}
                >
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                    {faq.q}
                  </span>
                  <span
                    className="w-8 h-8 border-2 border-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-200"
                    style={{
                      backgroundColor: open === i ? '#F5A623' : 'transparent',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="px-6 pb-5 bg-white border-t border-[#E5E5E5]">
                  <p className="text-[#8A8680] leading-relaxed pt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.a}
                  </p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
