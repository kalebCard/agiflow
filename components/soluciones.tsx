import { Card, CardContent } from '@/components/ui/card'
import { X, CheckCircle } from 'lucide-react'
import { texts } from '@/lib/texts'

export function Soluciones() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {texts.soluciones.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {texts.soluciones.bullets.map((problem, index) => (
            <Card key={index} className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 text-sm">{problem}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  La Solución: AgiFlow.pro
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {texts.soluciones.closing}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
