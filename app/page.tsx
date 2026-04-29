import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeTicker from '@/components/MarqueeTicker'
import Products from '@/components/Products'
import FullSwagCTA from '@/components/FullSwagCTA'
import LatestRelease from '@/components/LatestRelease'
import GetAQuote from '@/components/GetAQuote'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Raydesite — Merch Made for Developers',
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Products />
      <FullSwagCTA />
      <LatestRelease />
      <GetAQuote />
      <FAQ />
      <Footer />
    </main>
  )
}
