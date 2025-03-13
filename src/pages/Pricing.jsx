import { Link } from "react-router-dom"
import { Check } from "lucide-react"

const Pricing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Affordable design solutions tailored to fit your business needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible pricing options to accommodate businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">$499</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for small businesses just getting started with their branding.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Logo design (2 concepts)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Basic website (up to 5 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Business card design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">1 round of revisions</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 rounded-md font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg relative">
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">$999</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ideal for established businesses looking to enhance their brand presence.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Logo design (4 concepts)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom website (up to 10 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Complete stationery design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Social media kit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">2 rounds of revisions</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white hover:bg-blue-700 text-center py-3 rounded-md font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">$1,999</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive solution for businesses requiring a complete brand overhaul.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Logo design (6 concepts)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Premium website (unlimited pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Complete brand identity package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Marketing collateral design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Brand guidelines document</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Unlimited revisions</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 rounded-md font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand that every business is unique. If our standard packages don't fit your needs, we're happy to
              create a custom solution tailored specifically for you.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Contact for Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on complexity and scope. A basic logo design might take 1-2 weeks,
                  while a comprehensive website could take 4-8 weeks. We'll provide a detailed timeline during our
                  initial consultation.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer payment plans?</h3>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans for larger projects. Typically, we require a 50% deposit to begin
                  work, with the remaining balance due upon completion. For enterprise projects, we can arrange
                  milestone-based payments.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">What if I'm not satisfied with the designs?</h3>
                <p className="text-gray-600">
                  Client satisfaction is our priority. Each package includes a specified number of revision rounds. If
                  you're still not satisfied after these revisions, we can discuss additional changes at an hourly rate.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, we provide 30 days of support after project completion for any minor adjustments or questions.
                  For ongoing support and maintenance, we offer monthly retainer packages that can be customized to your
                  needs.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Can I upgrade my package later?</h3>
                <p className="text-gray-600">
                  You can upgrade to a higher-tier package at any time. We'll simply charge the difference between your
                  current package and the upgraded one, making the transition seamless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Choose the plan that works for you and let's start creating something amazing together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing

