import { Link } from "react-router-dom"
import { Monitor, PenTool, Layout, Smartphone, Code, Briefcase } from "lucide-react"

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Comprehensive design solutions tailored to elevate your brand and digital presence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* Web Design */}
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Web Design</h2>
              <p className="text-gray-600 mb-4">
                We create beautiful, responsive websites that engage your visitors and convert them into customers. Our
                designs are not only visually appealing but also user-friendly and optimized for performance.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Responsive design for all devices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  User experience optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  SEO-friendly structure
                </li>
              </ul>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more about web design
              </Link>
            </div>

            {/* Logo Design */}
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <PenTool className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Logo Design</h2>
              <p className="text-gray-600 mb-4">
                We create memorable logos that capture your brand's essence and make a lasting impression. Our logo
                designs are versatile, timeless, and effectively communicate your brand identity.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Custom, original designs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Multiple concept options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Versatile formats for all applications
                </li>
              </ul>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more about logo design
              </Link>
            </div>

            {/* Brand Identity */}
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Layout className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Brand Identity</h2>
              <p className="text-gray-600 mb-4">
                We develop cohesive brand identities that communicate your values and connect with your audience. Our
                comprehensive approach ensures consistency across all touchpoints.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Visual identity systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Brand guidelines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Marketing collateral design
                </li>
              </ul>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more about brand identity
              </Link>
            </div>

            {/* UI/UX Design */}
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">UI/UX Design</h2>
              <p className="text-gray-600 mb-4">
                We create intuitive user interfaces and seamless user experiences that delight your customers and keep
                them coming back. Our designs prioritize usability without sacrificing aesthetics.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  User research and personas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Wireframing and prototyping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Usability testing
                </li>
              </ul>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more about UI/UX design
              </Link>
            </div>

            {/* Web Development */}
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Web Development</h2>
              <p className="text-gray-600 mb-4">
                We build fast, secure, and scalable websites that provide an excellent user experience. Our development
                process focuses on creating robust solutions that meet your business needs.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Custom website development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  E-commerce solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Content management systems
                </li>
              </ul>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more about web development
              </Link>
            </div>

            {/* Marketing Collateral */}
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Marketing Collateral</h2>
              <p className="text-gray-600 mb-4">
                We design eye-catching marketing materials that effectively communicate your message and drive
                engagement. Our designs help you stand out in a crowded marketplace.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Brochures and flyers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Social media graphics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Email templates
                </li>
              </ul>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more about marketing collateral
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is completed efficiently and meets your
              expectations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {/* Process Steps */}
              <div className="relative z-10">
                {/* Step 1 */}
                <div className="mb-16 flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4 md:mb-0 z-10">
                    1
                  </div>
                  <div className="md:ml-8 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Discovery</h3>
                    <p className="text-gray-600">
                      We start by understanding your business, goals, and target audience to ensure our designs align
                      with your objectives.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-16 flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4 md:mb-0 z-10">
                    2
                  </div>
                  <div className="md:ml-8 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Concept Development</h3>
                    <p className="text-gray-600">
                      We create initial design concepts based on our research and your requirements, providing multiple
                      options for your review.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-16 flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4 md:mb-0 z-10">
                    3
                  </div>
                  <div className="md:ml-8 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Refinement</h3>
                    <p className="text-gray-600">
                      Based on your feedback, we refine the chosen concept, making adjustments until it perfectly
                      matches your vision.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4 md:mb-0 z-10">
                    4
                  </div>
                  <div className="md:ml-8 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Delivery & Support</h3>
                    <p className="text-gray-600">
                      We deliver the final designs in all required formats and provide ongoing support to ensure your
                      complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact us today to discuss your design needs and how we can help bring your vision to life.
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

export default Services

