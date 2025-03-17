import { Link } from "react-router-dom"
import { PenTool, Layers, Palette, RefreshCw, Award, Target, ArrowRight, CheckCircle } from "lucide-react"
import logoDesignImage from "../../assets/images/logo-designing-image.jpg"

const LogoDesign = () => {
  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your brand values, target audience, and competitors to ensure your logo aligns with your brand identity.",
    },
    {
      number: "02",
      title: "Research",
      description:
        "We conduct thorough research on industry trends, color psychology, and design principles to inform our creative process.",
    },
    {
      number: "03",
      title: "Concept Development",
      description: "Our designers create multiple logo concepts based on our research and your requirements.",
    },
    {
      number: "04",
      title: "Refinement",
      description:
        "Based on your feedback, we refine the chosen concept, making adjustments until it perfectly matches your vision.",
    },
    {
      number: "05",
      title: "Finalization",
      description: "We finalize the logo design and prepare all necessary file formats for different applications.",
    },
    {
      number: "06",
      title: "Delivery & Support",
      description:
        "We deliver the final logo package and provide guidelines for proper usage across different platforms.",
    },
  ]

  // Featured projects
  const featuredProjects = [
    {
      title: "Tech Startup Logo",
      image: "/placeholder.svg?height=600&width=800&text=Tech+Startup",
      category: "Technology",
      description: "Modern, minimalist logo design for a technology startup.",
    },
    {
      title: "Real Estate Logo",
      image: "/placeholder.svg?height=600&width=800&text=Real+Estate",
      category: "Real Estate",
      description: "Sophisticated logo design for a luxury real estate agency.",
    },
    {
      title: "Organic Food Brand",
      image: "/placeholder.svg?height=600&width=800&text=Organic+Food",
      category: "Food & Beverage",
      description: "Natural, earthy logo for an organic food company.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Logo Design That Makes a Lasting Impression
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We create memorable, versatile logos that capture your brand's essence and help you stand out in a
                crowded marketplace.
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
                src={logoDesignImage}
                alt="Logo Design Showcase"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Logo Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive logo design solutions tailored to your brand's unique identity and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <PenTool className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Logo Design</h3>
              <p className="text-gray-600 mb-4">
                Unique, tailored logo designs that reflect your brand identity and resonate with your target audience.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Layers className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Logo Variations</h3>
              <p className="text-gray-600 mb-4">
                Multiple logo variations for different applications, from social media profiles to large-scale signage.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Palette className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Color Psychology</h3>
              <p className="text-gray-600 mb-4">
                Strategic color selection based on color psychology to evoke the right emotions and associations.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <RefreshCw className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Logo Redesign</h3>
              <p className="text-gray-600 mb-4">
                Refresh and modernize your existing logo while maintaining brand recognition and equity.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Award className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Logo Guidelines</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guidelines for logo usage to ensure consistency across all brand touchpoints.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Target className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Industry-Specific Design</h3>
              <p className="text-gray-600 mb-4">
                Logos tailored to your specific industry that communicate your expertise and professionalism.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Logo Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your logo perfectly captures your brand's essence.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Logo Design Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent logo design work that showcases our expertise and creativity.
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
              View All Logo Design Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Benefits of Professional Logo Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-designed logo offers numerous advantages for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Brand Recognition</h3>
                  <p className="text-gray-600">
                    A distinctive logo helps customers recognize and remember your brand instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Professional Image</h3>
                  <p className="text-gray-600">
                    A high-quality logo conveys professionalism and builds trust with your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Brand Differentiation</h3>
                  <p className="text-gray-600">
                    A unique logo helps you stand out from competitors and creates a distinct identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Consistent Brand Identity</h3>
                  <p className="text-gray-600">
                    A well-designed logo serves as the foundation for a consistent brand identity across all
                    touchpoints.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create a Memorable Logo?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let's work together to design a logo that captures your brand's essence and makes a lasting impression.
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

export default LogoDesign

