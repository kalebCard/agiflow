import { Card, CardContent } from '@/components/ui/card'
import { Bot, BarChart3, Zap, CheckCircle } from 'lucide-react'
import { texts } from '@/lib/texts'

export function QueEs() {
  const icons = [Bot, BarChart3, Zap]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {texts.queEs.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {texts.queEs.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {texts.queEs.bullets.map((bullet, index) => {
            const Icon = icons[index]
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{bullet}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <p className="text-lg text-gray-700 leading-relaxed">
              {texts.queEs.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
