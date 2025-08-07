"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Clock, TrendingUp, Zap, Target, BarChart3, Users, AlertTriangle, DollarSign, X } from "lucide-react"
import Link from "next/link"
import texts from "./texts"
import { useEffect, useState } from "react"
import { AdvancedParticleSystem } from "@/components/ui/particles"
import BeamsBackground from "@/components/ui/beams-background"
import { config } from "./config"
import { motion } from "framer-motion"

export default function agiflowLanding() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowHeader(true);
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Fondo animado Beams */}
      <BeamsBackground className="fixed inset-0 z-[-20] w-full h-full" intensity="strong" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AdvancedParticleSystem />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className={`px-4 lg:px-6 h-16 flex items-center border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
          <Link href="/" className="flex items-center justify-center">
            <img src="/logo.png" alt="Logo AgiFlow" className="h-7 w-7 object-cover rounded-full" />
            <span className="ml-2 text-xl font-bold text-white">{texts.header.brand}</span>
          </Link>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-20 lg:py-28 xl:py-36 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-6xl">
              <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-10 max-w-4xl">
                  <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                    {texts.hero.title}
                  </h1>
                  <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                    {texts.hero.description}
                  </p>
                  <div className="pt-4 center-btn">
                    <a
                      href={config.contact.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        {texts.hero.cta}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ¿Qué es Agiflow.pro? */}
          <section id="que-es" className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800/80">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{texts.queEs.title}</h2>
                <p className="text-slate-300 text-lg">
                  {texts.queEs.description}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-6">
                {/* Pilar 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
                      <Clock className="h-10 w-10 text-blue-400" />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Operaciones Inteligentes 24/7</h3>
                    <p className="text-slate-300 text-center">Robots de software y chatbots inteligentes que manejan facturación, atención y reservas sin intervención humana.</p>
                  </div>
                </motion.div>
                {/* Pilar 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 mb-6">
                      <TrendingUp className="h-10 w-10 text-green-400" />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Ventas Automáticas Sin Pausa</h3>
                    <p className="text-slate-300 text-center">Embudos de captación y campañas de IA que atraen, nutren y convierten clientes 24/7.</p>
                  </div>
                </motion.div>
                {/* Pilar 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 mb-6">
                      <BarChart3 className="h-10 w-10 text-purple-400" />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Decisiones en tiempo real</h3>
                    <p className="text-slate-300 text-center">Dashboards que muestran métricas al instante y alertas inteligentes solo cuando necesitas actuar.</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-16 text-center">
                <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                  {texts.queEs.closing}
                </p>
              </div>
            </div>
          </section>

          {/* Planes y beneficios */}
          <section id="planes" className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{texts.planes.title}</h2>
                <p className="text-slate-300 text-lg">Elige el plan que mejor se adapte a las necesidades de tu negocio</p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3 items-stretch">
                {/* Plan Básico */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-300"></div>
                  <Card className="relative h-full bg-slate-800/80 border-slate-700 transition-transform duration-300 group-hover:scale-[1.02]">
                    <CardHeader className="pb-4">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-100 bg-blue-600/30 rounded-full">Popular</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {texts.planes.basico.title.split(' - ')[0]}
                        <span className="block text-blue-400 text-lg mt-1">{texts.planes.basico.title.split(' - ')[1]}</span>
                      </CardTitle>
                      <div className="mt-6">
                        <span className="text-4xl font-bold text-white">$49</span>
                        <span className="text-slate-400">/mes</span>
                      </div>
                      <p className="text-blue-300 mt-2">{texts.planes.basico.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {texts.planes.basico.bullets.map((item, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-blue-600/20 p-4 rounded-lg mb-6">
                        <p className="text-blue-300 font-medium text-center">
                          {texts.planes.basico.highlight}
                        </p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        Comenzar ahora
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Plan Medio - Destacado */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <Card className="relative h-full bg-slate-800 border-orange-500/50 border-2 transform scale-[1.02] group-hover:scale-[1.04]">
                    <CardHeader className="pb-4">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-100 bg-orange-600/50 rounded-full">Recomendado</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {texts.planes.medio.title.split(' - ')[0]}
                        <span className="block text-orange-400 text-lg mt-1">{texts.planes.medio.title.split(' - ')[1]}</span>
                      </CardTitle>
                      <div className="mt-6">
                        <span className="text-4xl font-bold text-white">$99</span>
                        <span className="text-slate-400">/mes</span>
                      </div>
                      <p className="text-orange-300 mt-2">{texts.planes.medio.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {texts.planes.medio.bullets.map((item, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-orange-600/20 p-4 rounded-lg mb-6">
                        <p className="text-orange-300 font-medium text-center">
                          {texts.planes.medio.highlight}
                        </p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        Prueba 7 días gratis
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Plan Pro */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-300"></div>
                  <Card className="relative h-full bg-slate-800/80 border-slate-700 transition-transform duration-300 group-hover:scale-[1.02]">
                    <CardHeader className="pb-4">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-100 bg-purple-600/30 rounded-full">Empresarial</span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {texts.planes.pro.title.split(' - ')[0]}
                        <span className="block text-purple-400 text-lg mt-1">{texts.planes.pro.title.split(' - ')[1]}</span>
                      </CardTitle>
                      <div className="mt-6">
                        <span className="text-4xl font-bold text-white">$199</span>
                        <span className="text-slate-400">/mes</span>
                      </div>
                      <p className="text-purple-300 mt-2">{texts.planes.pro.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {texts.planes.pro.bullets.map((item, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-purple-600/20 p-4 rounded-lg mb-6">
                        <p className="text-purple-300 font-medium text-center">
                          {texts.planes.pro.highlight}
                        </p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        Contáctanos
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <p className="text-slate-400 max-w-2xl mx-auto">
                  ¿Necesitas un plan personalizado? <a href="#contacto" className="text-blue-400 hover:text-blue-300 underline">Contáctanos</a> para discutir una solución a medida para tu negocio.
                </p>
              </div>
            </div>
          </section>

          {/* ¿Qué solucionamos? */}
          <section id="soluciones" className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{texts.soluciones.title}</h2>
                <p className="text-slate-300 text-lg">Descubre cómo podemos transformar los desafíos de tu negocio en oportunidades de crecimiento</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Problema 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
                      <Clock className="h-10 w-10 text-blue-400" />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Tareas manuales interminables</h3>
                    <p className="text-slate-300 text-center">que consumen tu tiempo diario.</p>
                  </div>
                </motion.div>
                {/* Problema 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 mb-6">
                      <DollarSign className="h-10 w-10 text-green-400" />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Publicidad ineficiente</h3>
                    <p className="text-slate-300 text-center">que no genera ventas.</p>
                  </div>
                </motion.div>
                {/* Problema 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-600/20 mb-6">
                      <AlertTriangle className="h-10 w-10 text-yellow-400" />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Decisiones a ciegas</h3>
                    <p className="text-slate-300 text-center">por falta de datos procesables.</p>
                  </div>
                </motion.div>
                {/* Problema 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-6">
                      <Users className="h-10 w-10 text-red-400" />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Vida personal sacrificada</h3>
                    <p className="text-slate-300 text-center">por el peso operativo del negocio.</p>
                  </div>
                </motion.div>
                {/* Problema 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative z-10 w-full">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 mb-6">
                      <Target className="h-10 w-10 text-purple-400" />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Oportunidades perdidas</h3>
                    <p className="text-slate-300 text-center">por no poder escalar a tiempo.</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-16 text-center">
                <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                  {texts.soluciones.closing}
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          id="contact"
          className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10"
        >
          <p className="font-sans text-xs text-white/60">{texts.footer.copyright}</p>
          <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
            <Link href="#" className="font-sans text-xs text-white/60 hover:text-white/80 transition-colors">
              {texts.footer.terms}
            </Link>
            <Link href="#" className="font-sans text-xs text-white/60 hover:text-white/80 transition-colors">
              {texts.footer.privacy}
            </Link>
            <Link href="#" className="font-sans text-xs text-white/60 hover:text-white/80 transition-colors">
              {texts.footer.contact}
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}