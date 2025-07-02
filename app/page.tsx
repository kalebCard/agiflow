import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, TrendingUp, Zap, Target, BarChart3, Users, AlertTriangle, DollarSign } from "lucide-react"
import Link from "next/link"
import texts from "./texts"

export default function agiflowLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-white">{texts.header.brand}</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {texts.header.nav.features}
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {texts.header.nav.pricing}
          </Link>
          <Link href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {texts.header.nav.about}
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {texts.header.nav.contact}
          </Link>
        </nav>
        <div className="ml-4 flex gap-2">
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
            {texts.header.login}
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            {texts.header.register}
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4 max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {texts.hero.title}
                </h1>
                <p className="mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                  {texts.hero.description}
                </p>
                <a
                  href="https://wa.me/573225325239"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold">
                    {texts.hero.cta}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 24-Hour Offer */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-orange-500 to-red-600">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <Badge className="bg-white text-red-600 text-base md:text-lg px-4 py-2 font-bold">
                <Clock className="w-5 h-5 mr-2" />
                {texts.offer24h.badge}
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl">
                {texts.offer24h.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">{texts.offer24h.description}</p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                {texts.offer24h.cta}
              </Button>
            </div>
          </div>
        </section>

        {/* ¿Qué es Agiflow.pro? */}
        <section id="que-es" className="w-full py-12 md:py-16 lg:py-20 bg-slate-800/50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{texts.queEs.title}</h2>
            <p className="text-lg text-white/90 mb-4">
              {texts.queEs.description}
            </p>
            <ul className="text-white/80 text-left max-w-xl mx-auto mb-4 space-y-2">
              {texts.queEs.bullets.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
            <p className="text-white/90">{texts.queEs.closing}</p>
          </div>
        </section>

        {/* Planes y beneficios */}
        <section id="planes" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{texts.planes.title}</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Plan Básico */}
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{texts.planes.basico.title}</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold text-lg">{texts.planes.basico.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {texts.planes.basico.bullets.map((item, idx) => (
                    <div key={idx} className="text-slate-300 text-sm md:text-base">{item}</div>
                  ))}
                  <div className="bg-green-600/20 p-4 rounded-lg">
                    <p className="text-green-400 font-bold text-center text-sm md:text-base">
                      {texts.planes.basico.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
              {/* Plan Medio */}
              <Card className="bg-slate-800/80 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{texts.planes.medio.title}</CardTitle>
                  <CardDescription className="text-orange-400 font-semibold text-lg">{texts.planes.medio.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {texts.planes.medio.bullets.map((item, idx) => (
                    <div key={idx} className="text-slate-300 text-sm md:text-base">{item}</div>
                  ))}
                  <div className="bg-orange-600/20 p-4 rounded-lg">
                    <p className="text-orange-400 font-bold text-center text-sm md:text-base">
                      {texts.planes.medio.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
              {/* Plan Pro */}
              <Card className="bg-slate-800/80 border-red-600">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{texts.planes.pro.title}</CardTitle>
                  <CardDescription className="text-red-400 font-semibold text-lg">{texts.planes.pro.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {texts.planes.pro.bullets.map((item, idx) => (
                    <div key={idx} className="text-slate-300 text-sm md:text-base">{item}</div>
                  ))}
                  <div className="bg-red-600/20 p-4 rounded-lg">
                    <p className="text-red-400 font-bold text-center text-sm md:text-base">
                      {texts.planes.pro.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ¿Qué solucionamos? */}
        <section id="soluciones" className="w-full py-12 md:py-16 lg:py-20 bg-slate-800/50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{texts.soluciones.title}</h2>
            <ul className="text-white/80 text-left max-w-xl mx-auto mb-4 space-y-2">
              {texts.soluciones.bullets.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
            <p className="text-white/90">
              {texts.soluciones.closing}
            </p>
          </div>
        </section>

        {/* Resultados esperados */}
        <section id="resultados" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{texts.resultados.title}</h2>
            <ul className="text-white/80 text-left max-w-xl mx-auto mb-4 space-y-2">
              {texts.resultados.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {texts.finalCta.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {texts.finalCta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={texts.finalCta.inputPlaceholder}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                />
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 h-12 whitespace-nowrap"
                >
                  {texts.finalCta.cta}
                </Button>
              </div>
              <p className="text-sm text-white/70">{texts.finalCta.note}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10"
      >
        <p className="text-xs text-white/60">{texts.footer.copyright}</p>
        <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            {texts.footer.terms}
          </Link>
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            {texts.footer.privacy}
          </Link>
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            {texts.footer.contact}
          </Link>
        </nav>
      </footer>
    </div>
  )
}
