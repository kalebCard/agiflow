import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Offer24h } from '@/components/offer-24h'
import { QueEs } from '@/components/que-es'
import { Planes } from '@/components/planes'
import { Soluciones } from '@/components/soluciones'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Offer24h />
      <QueEs />
      <Planes />
      <Soluciones />
      <FinalCta />
      <Footer />
    </div>
  )
}
