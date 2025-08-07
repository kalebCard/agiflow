'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { texts } from '@/lib/texts'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">{texts.header.brand}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">
              {texts.header.nav.features}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors">
              {texts.header.nav.pricing}
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              {texts.header.nav.about}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              {texts.header.nav.contact}
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
              {texts.header.login}
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              {texts.header.register}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                {texts.header.nav.features}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                {texts.header.nav.pricing}
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                {texts.header.nav.about}
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                {texts.header.nav.contact}
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700">
                  {texts.header.login}
                </Button>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  {texts.header.register}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
