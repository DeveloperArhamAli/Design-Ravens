import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Monitor, PenTool, Layout } from "lucide-react"
import heroImg from "../assets/images/hero-img.jpeg"
import ServiceCard from "../components/ServiceCard"
import WhyChooseUsCard from "../components/WhyChooseUsCard"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Elevate Your Brand with Stunning Design Solutions
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We create beautiful websites and logos that help your business stand out in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={heroImg} alt="Design Showcase" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of design services to help your business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Monitor className="text-blue-600 w-12 h-12 mb-4" />} heading="Web Design" description="Design Ravens crafts visually stunning, user-friendly, and SEO-optimized custom websites tailored to your business needs." />

            <ServiceCard icon={<PenTool className="text-blue-600 w-12 h-12 mb-4" />} heading="Logo Design" description="Design Ravens delivers top-tier logo design and branding services, crafting unique identities that reflect clients' values and vision for lasting success." />
            
            <ServiceCard icon={<Layout className="text-blue-600 w-12 h-12 mb-4" />} heading="Digital Marketing" description="Design Ravens crafts tailored digital marketing strategies, leveraging SEO, PPC, social media, and more to maximize online visibility, engagement, and revenue growth." />

          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with strategy to deliver designs that not only look great but also achieve your
              business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <WhyChooseUsCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Expert Designers" description="Our team consists of experienced designers who are passionate about creating stunning visuals." />

            <WhyChooseUsCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Tailored Solutions" description="We create custom designs that align with your brand identity and business objectives." />

            <WhyChooseUsCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Timely Delivery" description="We value your time and ensure that all projects are completed within the agreed timeframe." />

            <WhyChooseUsCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Affordable Pricing" description="We offer competitive pricing without compromising on the quality of our work." />

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
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

export default Home

