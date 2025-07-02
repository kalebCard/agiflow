import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, TrendingUp, Zap, Target, BarChart3, Users, AlertTriangle, DollarSign } from "lucide-react"
import Link from "next/link"

export default function AgiflowLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-white">Agiflow.pro</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex gap-2">
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
            Sign In
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            Register
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4 max-w-5xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                  What if you had a partner who never rests, never makes mistakes, and never steals from you?
                </h1>
                <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                  That's what Artificial Intelligence does for your business: it works 24/7, error-free, and only for
                  you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 24-Hour Offer */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-orange-500 to-red-600">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <Badge className="bg-white text-red-600 text-base md:text-lg px-4 py-2 font-bold">
                <Clock className="w-5 h-5 mr-2" />
                24-Hour Offer
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl">
                FREE "Transform Your Business" Training
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">Start automating and save time today.</p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Claim Offer Now
              </Button>
            </div>
          </div>
        </section>

        {/* What is Agiflow.pro? */}
        <section id="features" className="w-full py-12 md:py-16 lg:py-20 bg-slate-800/50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">What is Agiflow.pro?</h2>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800/90 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg md:text-xl">Intelligent 24/7 Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-sm md:text-base">
                    Your business never stops. Complete automation that works while you sleep.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800/90 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg md:text-xl">Automated Sales Without Pause</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-sm md:text-base">
                    Convert leads into customers automatically, without manual intervention.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800/90 transition-colors md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg md:text-xl">Real-Time Decisions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-sm md:text-base">
                    Instant analysis and recommendations based on current data.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl text-white/90 font-medium">You supervise; AI does the rest.</p>
            </div>
          </div>
        </section>

        {/* Plans and Benefits */}
        <section id="pricing" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Plans and Benefits</h2>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Basic Plan */}
              <Card className="bg-slate-800/80 border-slate-700 relative hover:bg-slate-800/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Basic Plan</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold text-lg">"Initial Boost"</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Basic process automation
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      24/7 intelligent chatbot
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Weekly automated reports
                    </div>
                  </div>
                  <div className="bg-green-600/20 p-4 rounded-lg">
                    <p className="text-green-400 font-bold text-center text-sm md:text-base">
                      Up to 40% more customers in 30 days
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </CardContent>
              </Card>

              {/* Medium Plan */}
              <Card className="bg-slate-800/80 border-purple-500 relative scale-100 lg:scale-105 hover:bg-slate-800/90 transition-all">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle className="text-white text-xl">Medium Plan</CardTitle>
                  <CardDescription className="text-purple-400 font-semibold text-lg">
                    "Intelligent Scale"
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Everything from Basic plan
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Advanced sales automation
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Predictive analytics
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      CRM integration
                    </div>
                  </div>
                  <div className="bg-purple-600/20 p-4 rounded-lg">
                    <p className="text-purple-400 font-bold text-center text-sm md:text-base">
                      Save 2 hours a day and accelerate your sales by up to 25%
                    </p>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="bg-slate-800/80 border-slate-700 relative hover:bg-slate-800/90 transition-colors md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Pro Plan</CardTitle>
                  <CardDescription className="text-orange-400 font-semibold text-lg">
                    "Total Domination"
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Everything from previous plans
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Custom AI for your industry
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      24/7 priority support
                    </div>
                    <div className="flex items-start text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Monthly strategic consulting
                    </div>
                  </div>
                  <div className="bg-orange-600/20 p-4 rounded-lg">
                    <p className="text-orange-400 font-bold text-center text-sm md:text-base">
                      ROI of 2×–5× in just 3–6 months
                    </p>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problems We Eliminate */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-800/50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Problems We Eliminate</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-red-900/20 border-red-500/30 hover:bg-red-900/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2 text-base md:text-lg">Lead Loss</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    Potential customers leaving because you don't respond in time
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-red-900/20 border-red-500/30 hover:bg-red-900/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2 text-base md:text-lg">Repetitive Tasks</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    Hours wasted on manual processes that can be automated
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-red-900/20 border-red-500/30 hover:bg-red-900/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2 text-base md:text-lg">Staff Shortage</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    Not enough team members to handle all opportunities
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-red-900/20 border-red-500/30 hover:bg-red-900/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-10 h-10 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2 text-base md:text-lg">Slow Decisions</h3>
                  <p className="text-slate-300 text-sm md:text-base">Lack of real-time data to make quick decisions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proven Results */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Proven Results</h2>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 hover:from-blue-600/30 hover:to-blue-800/30 transition-colors">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-2">3×</div>
                  <h3 className="text-white font-semibold mb-2 text-lg md:text-xl">More Inquiries</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    Up to 3× more qualified inquiries thanks to intelligent automation
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30 hover:from-green-600/30 hover:to-green-800/30 transition-colors">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">2h</div>
                  <h3 className="text-white font-semibold mb-2 text-lg md:text-xl">Free Time</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    2 hours free per day to focus on strategy and growth
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 hover:from-purple-600/30 hover:to-purple-800/30 transition-colors md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">15-50%</div>
                  <h3 className="text-white font-semibold mb-2 text-lg md:text-xl">More Sales</h3>
                  <p className="text-slate-300 text-sm md:text-base">15–50% more sales with AI-optimized processes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Join hundreds of entrepreneurs who are already automating their processes and multiplying their results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your business email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                />
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 h-12 whitespace-nowrap"
                >
                  Start Free
                </Button>
              </div>
              <p className="text-sm text-white/70">No commitment. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10"
      >
        <p className="text-xs text-white/60">© 2024 Agiflow.pro. All rights reserved.</p>
        <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
