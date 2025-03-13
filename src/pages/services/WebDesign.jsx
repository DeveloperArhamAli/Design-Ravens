import { Link } from "react-router-dom"
import { Monitor, Code, Smartphone, Zap, Search, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react"
import ecommerceImg from "../../assets/images/ecommerce.jpg"
import restaurantImg from "../../assets/images/restorant.png"
import blogImg from "../../assets/images/travel.jpeg"

const WebDesign = () => {
  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, target audience, and competitors to ensure our design aligns with your objectives.",
    },
    {
      number: "02",
      title: "Planning & Wireframing",
      description:
        "We create the blueprint for your website, mapping out the user journey and information architecture to ensure optimal user experience.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our designers create visually stunning mockups that align with your brand identity and appeal to your target audience.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "We transform the designs into a fully functional website, ensuring it's responsive, fast, and user-friendly across all devices.",
    },
    {
      number: "05",
      title: "Testing & Launch",
      description:
        "We thoroughly test the website for functionality, usability, and performance before launching it to the world.",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description:
        "We provide ongoing support and maintenance to ensure your website continues to perform optimally and stays up-to-date.",
    },
  ]

  // Featured projects
  const featuredProjects = [
    {
      title: "Eco Friendly E-commerce",
      image: ecommerceImg,
      category: "E-commerce",
      description: "A responsive e-commerce website for an eco-friendly product company.",
    },
    {
      title: "Restaurant Website",
      image: restaurantImg,
      category: "Business",
      description: "Elegant website design for an upscale restaurant.",
    },
    {
      title: "Travel Blog",
      image: blogImg,
      category: "Blog",
      description: "Visually engaging blog design for a travel enthusiast.",
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
                Web Design Services That Drive Results
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We create beautiful, responsive websites that engage your visitors, reflect your brand, and convert
                browsers into customers.
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
                src="/placeholder.svg?height=400&width=500&text=Web+Design"
                alt="Web Design Showcase"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Web Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive web design solutions tailored to your specific needs and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Monitor className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Website Design</h3>
              <p className="text-gray-600 mb-4">
                Unique, tailored website designs that reflect your brand identity and resonate with your target
                audience.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Smartphone className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Websites that look and function perfectly on all devices, from desktops to smartphones.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Code className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">E-commerce Websites</h3>
              <p className="text-gray-600 mb-4">
                User-friendly online stores that provide seamless shopping experiences and drive sales.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Zap className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Website Optimization</h3>
              <p className="text-gray-600 mb-4">
                Performance optimization to ensure your website loads quickly and provides a smooth user experience.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <Search className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">SEO-Friendly Design</h3>
              <p className="text-gray-600 mb-4">
                Websites built with search engine optimization in mind to improve your visibility online.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-lg">
              <ShieldCheck className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Website Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Web Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is completed efficiently and meets your
              expectations.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Web Design Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent web design work that showcases our expertise and creativity.
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
              View All Web Design Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Benefits of Professional Web Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-designed website offers numerous advantages for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Enhanced Brand Credibility</h3>
                  <p className="text-gray-600">
                    A professional website builds trust with your audience and establishes your brand as credible and
                    reliable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Improved User Experience</h3>
                  <p className="text-gray-600">
                    Intuitive navigation and thoughtful design create a positive experience that keeps visitors engaged.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Higher Conversion Rates</h3>
                  <p className="text-gray-600">
                    Strategic design elements guide visitors toward desired actions, increasing conversion rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Better Search Engine Rankings</h3>
                  <p className="text-gray-600">
                    SEO-friendly design helps improve your visibility in search results, driving more organic traffic.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let's work together to create a website that elevates your brand and helps you achieve your business goals.
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

export default WebDesign

