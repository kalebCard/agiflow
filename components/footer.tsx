import { texts } from '@/lib/texts'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              {texts.header.brand}
            </h3>
            <p className="text-gray-400 mb-4">
              Automatiza tu negocio con Inteligencia Artificial. 
              Trabaja menos, gana más.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {texts.header.nav.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {texts.header.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {texts.header.nav.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {texts.footer.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {texts.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{texts.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
