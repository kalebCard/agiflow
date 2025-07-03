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
  const [showOfferModal, setShowOfferModal] = useState(false);

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

  // Mostrar modal después de 1 minuto
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOfferModal(true);
    }, 60000); // 60 segundos = 1 minuto

    return () => clearTimeout(timer);
  }, []);

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
                  <div className="pt-4">
                    <a
                      href={config.contact.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" variant="glass">
                        {texts.hero.cta}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ¿Qué es Agiflow.pro? */}
          <section id="que-es" className="w-full py-12 md:py-16 lg:py-20 bg-slate-800/50">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{texts.queEs.title}</h2>
              <p className="text-lg text-white/90 mb-8">
                {texts.queEs.description}
              </p>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-6">
                {/* Pilar 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
                >
                  <span className="bg-blue-700/20 p-3 rounded-full mb-4">
                    <Clock className="h-10 w-10 text-blue-400" />
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">Operaciones Inteligentes 24/7</h3>
                  <p className="text-white/80 text-base text-center">Robots de software y chatbots inteligentes que manejan facturación, atención y reservas sin intervención humana.</p>
                </motion.div>
                {/* Pilar 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
                >
                  <span className="bg-green-700/20 p-3 rounded-full mb-4">
                    <TrendingUp className="h-10 w-10 text-green-400" />
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">Ventas Automáticas Sin Pausa</h3>
                  <p className="text-white/80 text-base text-center">Embudos de captación y campañas de IA que atraen, nutren y convierten clientes 24/7.</p>
                </motion.div>
                {/* Pilar 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
                >
                  <span className="bg-purple-700/20 p-3 rounded-full mb-4">
                    <BarChart3 className="h-10 w-10 text-purple-400" />
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">Decisiones en tiempo real</h3>
                  <p className="text-white/80 text-base text-center">Dashboards que muestran métricas al instante y alertas inteligentes solo cuando necesitas actuar.</p>
                </motion.div>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{texts.queEs.closing}</p>
            </div>
          </section>

          {/* Planes y beneficios */}
          <section id="planes" className="w-full py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">{texts.planes.title}</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Plan Básico */}
                <Card variant="glass" className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white">
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
                <Card variant="glass" className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white">
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
                <Card variant="glass" className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">{texts.soluciones.title}</h2>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-6">
                {/* Problema 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-blue-700/20 p-3 rounded-full mb-4">
                    <Clock className="h-10 w-10 text-blue-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">Tareas manuales interminables</h3>
                  <p className="text-white/80 text-base text-center">que consumen tu tiempo diario.</p>
                </motion.div>
                {/* Problema 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-green-700/20 p-3 rounded-full mb-4">
                    <DollarSign className="h-10 w-10 text-green-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">Publicidad ineficiente</h3>
                  <p className="text-white/80 text-base text-center">que no genera ventas.</p>
                </motion.div>
                {/* Problema 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-yellow-700/20 p-3 rounded-full mb-4">
                    <AlertTriangle className="h-10 w-10 text-yellow-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">Decisiones a ciegas</h3>
                  <p className="text-white/80 text-base text-center">por falta de datos procesables.</p>
                </motion.div>
                {/* Problema 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-red-700/20 p-3 rounded-full mb-4">
                    <Users className="h-10 w-10 text-red-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">Vida personal sacrificada</h3>
                  <p className="text-white/80 text-base text-center">por el peso operativo del negocio.</p>
                </motion.div>
                {/* Problema 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-purple-700/20 p-3 rounded-full mb-4">
                    <Target className="h-10 w-10 text-purple-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">Oportunidades perdidas</h3>
                  <p className="text-white/80 text-base text-center">por no poder escalar a tiempo.</p>
                </motion.div>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{texts.soluciones.closing}</p>
            </div>
          </section>

          {/* Resultados esperados */}
          <section id="resultados" className="w-full py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">{texts.resultados.title}</h2>
              <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto mb-6">
                {/* Resultado 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-green-700/20 p-3 rounded-full mb-4">
                    <TrendingUp className="h-10 w-10 text-green-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">3x más consultas</h3>
                  <p className="text-white/80 text-base text-center">en 30 días gracias a embudos autónomos.</p>
                </motion.div>
                {/* Resultado 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-blue-700/20 p-3 rounded-full mb-4">
                    <Clock className="h-10 w-10 text-blue-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">2 horas libres diarias</h3>
                  <p className="text-white/80 text-base text-center">al delegar procesos repetitivos.</p>
                </motion.div>
                {/* Resultado 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-yellow-700/20 p-3 rounded-full mb-4">
                    <DollarSign className="h-10 w-10 text-yellow-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">15-50% más ventas</h3>
                  <p className="text-white/80 text-base text-center">en 90 días con campañas optimizadas por IA.</p>
                </motion.div>
                {/* Resultado 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white rounded-xl p-6 flex flex-col items-center"
                >
                  <span className="bg-purple-700/20 p-3 rounded-full mb-4">
                    <BarChart3 className="h-10 w-10 text-purple-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">Control total desde el celular</h3>
                  <p className="text-white/80 text-base text-center">con dashboards inteligentes.</p>
                </motion.div>
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

      {/* Modal de Oferta de 24 Horas */}
      <Dialog open={showOfferModal} onOpenChange={setShowOfferModal}>
        <DialogContent variant="glass" className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 max-w-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              {texts.offer24h.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center space-y-6 py-4">
            <Countdown24h />
            
            <a href={config.contact.whatsapp.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold">
                {texts.offer24h.infoBtn}
              </Button>
            </a>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {texts.offer24h.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Componente de contador regresivo
function Countdown24h() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 horas en segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="text-5xl md:text-6xl font-extrabold text-white tracking-widest my-4">
      {hours}:{minutes}:{seconds}
    </div>
  );
}
