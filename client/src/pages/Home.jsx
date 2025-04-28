import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Monitor, PenTool, Layout } from "lucide-react"
import heroImg from "../assets/images/hero-img.jpeg"
import ServiceCard from "../components/ServiceCard"
import WhyChooseUsCard from "../components/WhyChooseUsCard"
import bgVideo from "../assets/bg_video.mp4"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-20  min-h-screen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video src={bgVideo} autoPlay loop muted className="w-full h-full object-cover"></video>
        </div>
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mt-46">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
                Elevate Your Brand with Stunning Design Solutions
              </h1>
              <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
                We create beautiful websites and logos that help your business stand out in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-md font-medium text-center transition-colors"
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
        </div>
      </section>

      {/* Services Preview */}
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of design services to help your business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            <ServiceCard icon={<Monitor className="text-purple-600 w-12 h-12 mb-4" />} heading="Web Design" description="Rare Teck crafts visually stunning, user-friendly, and SEO-optimized custom websites tailored to your business needs." />

            <ServiceCard icon={<PenTool className="text-purple-600 w-12 h-12 mb-4" />} heading="Logo Design" description="Rare Teck delivers top-tier logo design and branding services, crafting unique identities that reflect clients' values and vision for lasting success." />
            
            <ServiceCard icon={<Layout className="text-purple-600 w-12 h-12 mb-4" />} heading="Digital Marketing" description="Rare Teck crafts tailored digital marketing strategies, leveraging SEO, PPC, social media, and more to maximize online visibility, engagement, and revenue growth." />

          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with strategy to deliver designs that not only look great but also achieve your
              business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">

            <WhyChooseUsCard icon={<CheckCircle className="text-purple-600 w-6 h-6 flex-shrink-0" />} heading="Expert Designers" description="Our team consists of experienced designers who are passionate about creating stunning visuals." />

            <WhyChooseUsCard icon={<CheckCircle className="text-purple-600 w-6 h-6 flex-shrink-0" />} heading="Tailored Solutions" description="We create custom designs that align with your brand identity and business objectives." />

            <WhyChooseUsCard icon={<CheckCircle className="text-purple-600 w-6 h-6 flex-shrink-0" />} heading="Timely Delivery" description="We value your time and ensure that all projects are completed within the agreed timeframe." />

            <WhyChooseUsCard icon={<CheckCircle className="text-purple-600 w-6 h-6 flex-shrink-0" />} heading="Affordable Pricing" description="We offer competitive pricing without compromising on the quality of our work." />

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
            Let's work together to create designs that elevate your brand and help you achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

