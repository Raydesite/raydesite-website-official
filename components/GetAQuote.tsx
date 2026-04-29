'use client'

import { useState } from 'react'

export default function GetAQuote() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', project: '', quantity: '' })

  const handleSubmit = () => {
    if (form.name && form.email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="quote" className="py-24 px-6 bg-[#F4F3F0]" aria-labelledby="quote-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#F5A623]" />
            Project inquiry
            <span className="w-6 h-0.5 bg-[#F5A623]" />
          </span>
          <h2
            id="quote-heading"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            Get a <span className="text-[#F5A623]">Quote</span>
          </h2>
          <p className="text-[#8A8680] mt-4 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Tell us what you want to build. We will help you shape the right software plan.
          </p>
        </div>

        <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0_#1A1A1A]">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🎉</div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.75rem' }} className="mb-3">
                Request received!
              </h3>
              <p className="text-[#8A8680]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                We will contact you within 24 hours. In the meantime, keep building. 🚀
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: 'name', label: 'Your name', placeholder: 'Ada Lovelace', type: 'text' },
                { key: 'email', label: 'Email', placeholder: 'ada@dev.io', type: 'email' },
                { key: 'project', label: 'What do you need?', placeholder: 'Landing page, app, store...', type: 'text' },
                { key: 'quantity', label: 'Project size', placeholder: 'MVP, redesign, full build...', type: 'text' },
              ].map((field) => (
                <div key={field.key} className={field.key === 'project' ? 'md:col-span-2' : ''}>
                  <label
                    htmlFor={field.key}
                    className="block font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.key}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full border-2 border-[#1A1A1A] rounded-xl px-4 py-3 font-mono text-sm bg-[#F4F3F0] focus:outline-none focus:border-[#F5A623] focus:bg-white transition-all duration-200 placeholder:text-[#8A8680]"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#1A1A1A] text-[#F4F3F0] font-mono font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full border-2 border-[#1A1A1A] hover:bg-[#F5A623] hover:text-[#1A1A1A] transition-all duration-200 hover:shadow-[4px_4px_0_#1A1A1A]"
                >
                  Send Request →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
