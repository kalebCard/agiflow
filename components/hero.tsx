import { Button } from '@/components/ui/button'
import { ArrowRight, Bot, Clock, TrendingUp } from 'lucide-react'
import { texts } from '@/lib/texts'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {texts.hero.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {texts.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              >
                {texts.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-orange-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">0%</div>
                <div className="text-sm text-gray-600">Errores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">30</div>
                <div className="text-sm text-gray-600">Días resultado</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">IA Trabajando</div>
                    <div className="text-sm text-gray-500">Procesando automáticamente</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sin Descanso</div>
                    <div className="text-sm text-gray-500">24 horas, 7 días</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Resultados Rápidos</div>
                    <div className="text-sm text-gray-500">Desde el primer mes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
