import { Link } from "react-router-dom"
import { Layout, Briefcase, Users, Palette, BookOpen, Megaphone, ArrowRight, CheckCircle } from "lucide-react"

const Branding = () => {
  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Brand Discovery",
      description:
        "We start by understanding your business values, mission, vision, target audience, and market position.",
    },
    {
      number: "02",
      title: "Brand Strategy",
      description:
        "We develop a comprehensive strategy that defines your brand positioning, messaging, and personality.",
    },
    {
      number: "03",
      title: "Visual Identity",
      description:
        "We create the visual elements of your brand, including logo, color palette, typography, and imagery style.",
    },
    {
      number: "04",
      title: "Brand Voice",
      description: "We establish your brand's tone of voice and messaging guidelines for consistent communication.",
    },
    {
      number: "05",
      title: "Brand Guidelines",
      description: "We compile all brand elements into a comprehensive guide to ensure consistent application.",
    },
    {
      number: "06",
      title: "Implementation",
      description:
        "We help you implement your brand across all touchpoints, from digital platforms to physical materials.",
    },
  ]

  // Featured projects
  const featuredProjects = [
    {
      title: "Financial Services Rebrand",
      image: "/placeholder.svg?height=600&width=800&text=Financial+Services",
      category: "Finance",
      description: "Complete brand identity redesign for a financial services firm.",
    },
    {
      title: "Coffee Shop Branding",
      image: "/placeholder.svg?height=600&width=800&text=Coffee+Shop",
      category: "Food & Beverage",
      description: "Complete brand identity package for an artisanal coffee shop.",
    },
    {
      title: "Healthcare Provider Branding",
      image: "/placeholder.svg?height=600&width=800&text=Healthcare",
      category: "Healthcare",
      description: "Comprehensive branding for a modern healthcare provider.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Branding That Connects & Converts</h1>
              <p className="text-xl mb-8 text-blue-100">
                We create cohesive brand identities that communicate your values, connect with your audience, and drive
                business growth.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-center transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500&text=Branding"
                alt="Branding Showcase"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Branding Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive branding solutions to help you build a strong, consistent, and memorable brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Layout className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Brand Identity</h3>
              <p className="text-gray-600 mb-4">
                Development of visual elements that represent your brand, including logo, color palette, and typography.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Briefcase className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Brand Strategy</h3>
              <p className="text-gray-600 mb-4">
                Strategic planning to define your brand positioning, messaging, and competitive advantage.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Users className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Brand Personality</h3>
              <p className="text-gray-600 mb-4">
                Definition of your brand's character, voice, and values to create emotional connections with your
                audience.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Palette className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Visual System</h3>
              <p className="text-gray-600 mb-4">
                Creation of a cohesive visual language including imagery style, iconography, and design elements.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <BookOpen className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Brand Guidelines</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive documentation of your brand standards to ensure consistent application across all
                touchpoints.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Megaphone className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Brand Messaging</h3>
              <p className="text-gray-600 mb-4">
                Development of key messages, taglines, and communication frameworks that resonate with your audience.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Branding Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to create brands that are authentic, memorable, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 text-2xl font-bold rounded-lg px-4 py-2 mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Branding Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent branding work that showcases our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-100 mb-4">{project.description}</p>
                    <Link to="/portfolio" className="text-white font-medium inline-flex items-center">
                      View Project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              View All Branding Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Benefits of Strategic Branding</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strong brand offers numerous advantages for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Increased Brand Recognition</h3>
                  <p className="text-gray-600">
                    A consistent brand identity helps customers recognize and remember your business more easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Customer Loyalty</h3>
                  <p className="text-gray-600">
                    A strong brand creates emotional connections with customers, fostering loyalty and repeat business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Competitive Advantage</h3>
                  <p className="text-gray-600">
                    A distinctive brand helps you stand out in a crowded marketplace and differentiate from competitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Higher Perceived Value</h3>
                  <p className="text-gray-600">
                    A professional brand identity increases the perceived value of your products or services, allowing
                    for premium pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Powerful Brand?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let's work together to create a brand identity that resonates with your audience and drives business growth.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Branding

