import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeTicker from '@/components/MarqueeTicker';
import Products from '@/components/Products';
import SoftwareCTA from '@/components/SoftwareCTA';
import LatestRelease from '@/components/LatestRelease';
import GetAQuote from '@/components/GetAQuote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Raydesite: Software solutions for everyone',
};

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<MarqueeTicker />
			<Products />
			<SoftwareCTA />
			<LatestRelease />
			<GetAQuote />
			<FAQ />
			<Footer />
		</main>
	);
}
