'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function GetAQuote() {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: '',
		email: '',
		project: '',
		quantity: '',
	});
	const [error, setError] = useState('');

	const { lang } = useLang();
	const tr = t[lang].quote;

	const fields = [
		{
			key: 'name',
			label: tr.fields[0].label,
			placeholder: tr.fields[0].placeholder,
			type: 'text',
			required: true,
			autoComplete: 'name',
		},
		{
			key: 'email',
			label: tr.fields[1].label,
			placeholder: tr.fields[1].placeholder,
			type: 'email',
			required: true,
			autoComplete: 'email',
		},
		{
			key: 'project',
			label: tr.fields[2].label,
			placeholder: tr.fields[2].placeholder,
			type: 'text',
			required: false,
			autoComplete: 'off',
		},
		{
			key: 'quantity',
			label: tr.fields[3].label,
			placeholder: tr.fields[3].placeholder,
			type: 'text',
			required: false,
			autoComplete: 'off',
		},
	];

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!form.name.trim() || !form.email.trim()) {
			setError(tr.errorRequired);
			return;
		}

		setError('');
		setLoading(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.error || tr.errorGeneral);
				return;
			}

			setSubmitted(true);
		} catch (_err) {
			setError(tr.errorNetwork);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id='quote'
			className='py-24 px-6 bg-[#F4F3F0]'
			aria-labelledby='quote-heading'
		>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<span className='font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center justify-center gap-2 mb-3'>
						<span className='w-6 h-0.5 bg-[#F5A623]' />
						{tr.eyebrow}
						<span className='w-6 h-0.5 bg-[#F5A623]' />
					</span>
					<h2
						id='quote-heading'
						style={{
							fontFamily: 'Syne, sans-serif',
							fontWeight: 800,
							fontSize: 'clamp(2rem, 5vw, 3.5rem)',
							letterSpacing: '-0.02em',
						}}
					>
						{tr.heading}
						<span className='text-[#F5A623]'>{tr.headingAccent}</span>
					</h2>
					<p
						className='text-[#8A8680] mt-4 text-lg'
						style={{ fontFamily: 'DM Sans, sans-serif' }}
					>
						{tr.subheading}
					</p>
				</div>

				<div className='bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0_#1A1A1A]'>
					{submitted ? (
						<div className='text-center py-12'>
							<div className='text-6xl mb-6'>🎉</div>
							<h3
								style={{
									fontFamily: 'Syne, sans-serif',
									fontWeight: 700,
									fontSize: '1.75rem',
								}}
								className='mb-3'
							>
								{tr.successTitle}
							</h3>
							<p
								className='text-[#8A8680]'
								style={{ fontFamily: 'DM Sans, sans-serif' }}
							>
								{tr.successBody}
							</p>
						</div>
					) : (
						<form
							className='grid grid-cols-1 md:grid-cols-2 gap-6'
							onSubmit={handleSubmit}
							noValidate
						>
							{fields.map((field) => (
								<div
									key={field.key}
									className={field.key === 'project' ? 'md:col-span-2' : ''}
								>
									<label
										htmlFor={field.key}
										className='block font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2'
									>
										{field.label}
									</label>
									<input
										id={field.key}
										type={field.type}
										placeholder={field.placeholder}
										required={field.required}
										aria-required={field.required}
										autoComplete={field.autoComplete}
										value={form[field.key as keyof typeof form]}
										onChange={(e) =>
											setForm({ ...form, [field.key]: e.target.value })
										}
										className='w-full border-2 border-[#1A1A1A] rounded-xl px-4 py-3 font-mono text-sm bg-[#F4F3F0] focus:outline-none focus:border-[#F5A623] focus:bg-white transition-all duration-200 placeholder:text-[#8A8680]'
									/>
								</div>
							))}

							{error && (
								<p
									className='md:col-span-2 text-sm font-mono text-[#BF0A0A]'
									role='alert'
								>
									{error}
								</p>
							)}

							<div className='md:col-span-2'>
								<button
									type='submit'
									disabled={loading}
									className='w-full bg-[#1A1A1A] text-[#F4F3F0] font-mono font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full border-2 border-[#1A1A1A] hover:bg-[#F5A623] hover:text-[#1A1A1A] transition-all duration-200 hover:shadow-[4px_4px_0_#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3'
								>
									{loading ? (
										<>
											<span className='w-4 h-4 border-2 border-[#F4F3F0] border-t-transparent rounded-full animate-spin' />
											{tr.submitting}
										</>
									) : (
										tr.submitBtn
									)}
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
