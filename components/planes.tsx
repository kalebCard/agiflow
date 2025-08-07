import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Crown, Rocket } from 'lucide-react'
import { texts } from '@/lib/texts'

export function Planes() {
  const plans = [
    {
      ...texts.planes.basico,
      icon: Rocket,
      color: 'bg-green-600',
      popular: false
    },
    {
      ...texts.planes.medio,
      icon: Star,
      color: 'bg-orange-600',
      popular: true
    },
    {
      ...texts.planes.pro,
      icon: Crown,
      color: 'bg-purple-600',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {texts.planes.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card 
                key={index} 
                className={`relative h-full ${plan.popular ? 'ring-2 ring-orange-600 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                    Más Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {plan.highlight}
                    </p>
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                    size="lg"
                  >
                    Elegir Plan
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
