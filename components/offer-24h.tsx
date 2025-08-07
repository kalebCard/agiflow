import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Gift, Clock, ArrowRight } from 'lucide-react'
import { texts } from '@/lib/texts'

export function Offer24h() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {texts.offer24h.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              {texts.offer24h.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              >
                {texts.offer24h.infoBtn}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">Oferta por tiempo limitado</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
