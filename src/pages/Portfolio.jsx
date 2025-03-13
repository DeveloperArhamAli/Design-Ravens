"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ExternalLink } from "lucide-react"

const Portfolio = () => {
  // Filter categories
  const categories = ["All", "Web Design", "Logo Design", "Branding", "UI/UX"]
  const [activeFilter, setActiveFilter] = useState("All")

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Eco Friendly E-commerce",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800&text=Eco+Friendly",
      client: "Green Earth",
      description: "A responsive e-commerce website for an eco-friendly product company.",
      link: "#",
    },
    {
      id: 2,
      title: "Financial Services Rebrand",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800&text=Financial+Services",
      client: "Wealth Advisors",
      description: "Complete brand identity redesign for a financial services firm.",
      link: "#",
    },
    {
      id: 3,
      title: "Tech Startup Logo",
      category: "Logo Design",
      image: "/placeholder.svg?height=600&width=800&text=Tech+Startup",
      client: "InnovateTech",
      description: "Modern, minimalist logo design for a technology startup.",
      link: "#",
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800&text=Restaurant",
      client: "Gourmet Dining",
      description: "Elegant website design for an upscale restaurant.",
      link: "#",
    },
    {
      id: 5,
      title: "Fitness App Interface",
      category: "UI/UX",
      image: "/placeholder.svg?height=600&width=800&text=Fitness+App",
      client: "FitLife",
      description: "User-friendly interface design for a fitness tracking application.",
      link: "#",
    },
    {
      id: 6,
      title: "Coffee Shop Branding",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800&text=Coffee+Shop",
      client: "Brew Haven",
      description: "Complete brand identity package for an artisanal coffee shop.",
      link: "#",
    },
    {
      id: 7,
      title: "Real Estate Logo",
      category: "Logo Design",
      image: "/placeholder.svg?height=600&width=800&text=Real+Estate",
      client: "Prime Properties",
      description: "Sophisticated logo design for a luxury real estate agency.",
      link: "#",
    },
    {
      id: 8,
      title: "Travel Blog",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800&text=Travel+Blog",
      client: "Wanderlust Adventures",
      description: "Visually engaging blog design for a travel enthusiast.",
      link: "#",
    },
    {
      id: 9,
      title: "Healthcare App",
      category: "UI/UX",
      image: "/placeholder.svg?height=600&width=800&text=Healthcare+App",
      client: "MediCare",
      description: "Intuitive interface design for a healthcare management application.",
      link: "#",
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Explore our collection of work that showcases our creativity, expertise, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-blue-100 mb-4">Client: {project.client}</p>
                      <a
                        href={project.link}
                        className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors"
                      >
                        View Project <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">{project.category}</span>
                    <a href={project.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6">
                "DesignRavens transformed our online presence with a stunning website that perfectly captures our brand.
                Their team was professional, responsive, and delivered beyond our expectations."
              </blockquote>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=100&width=100" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CEO, Innovate Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6">
                "The logo design process was collaborative and enjoyable. DesignRavens took the time to understand our
                vision and created a logo that has become the cornerstone of our brand identity."
              </blockquote>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=100&width=100" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">Michael Chen</p>
                  <p className="text-gray-600 text-sm">Founder, TechStart</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6">
                "Working with DesignRavens on our brand identity was a game-changer for our business. Their strategic
                approach and creative solutions helped us stand out in a competitive market."
              </blockquote>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=100&width=100" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">Emily Rodriguez</p>
                  <p className="text-gray-600 text-sm">Marketing Director, Brew Haven</p>
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
            Let's work together to create designs that elevate your brand and help you achieve your business goals.
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

export default Portfolio

