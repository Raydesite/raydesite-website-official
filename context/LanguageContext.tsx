'use client';

import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

type LanguageContextType = {
	lang: Language;
	toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
	lang: 'en',
	toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<Language>('en');

	const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

	return (
		<LanguageContext.Provider value={{ lang, toggleLang }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLang() {
	return useContext(LanguageContext);
}
