import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Shield, Clock } from 'lucide-react'
import { texts } from '@/lib/texts'
import { useState } from 'react'

export function FinalCta() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {texts.finalCta.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              {texts.finalCta.description}
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder={texts.finalCta.inputPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8"
                >
                  {texts.finalCta.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>{texts.finalCta.note}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Respuesta en 24h</span>
              </div>
            </div>

            {/* Countdown Timer Placeholder */}
            <div className="bg-gray-100 rounded-lg p-4 inline-block">
              <div className="text-sm text-gray-600 mb-2">Oferta termina en:</div>
              <div className="text-2xl font-bold text-orange-600">
                23:45:12
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
