import { Link } from "react-router-dom"
import { CheckCircle, Laptop, ShoppingCart, Rocket } from "lucide-react"
import ecommerceImg from "../../assets/images/ecommerce.jpg"
import restaurantImg from "../../assets/images/restorant.png"
import blogImg from "../../assets/images/travel.jpeg"
import webDesignImage from "../../assets/images/web-design-image.jpg"
import ServiceCard from "../../components/ServiceCard"
import ProcessCard from "../../components/ProcessCard"
import AutoImageSlider from "../../components/AutoImageSlider"
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"
import image5 from "../../assets/images/image5.jpg"
import image6 from "../../assets/images/image6.jpg"
import image7 from "../../assets/images/image7.jpg"
import image8 from "../../assets/images/image8.jpg"
import image9 from "../../assets/images/image9.jpg"
import image10 from "../../assets/images/image10.jpg"
import BenefitsOfWebDesignCard from "../../components/BenefitsOfWebDesignCard"

const WebDesign = () => {

  const portfolioItems = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
    {
      image: image9,
    },
    {
      image: image10,
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
                src={webDesignImage}
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

            <ServiceCard icon={<Laptop className="text-blue-600 w-12 h-12 mb-4" />} heading="Stunning Web Design" description="We create visually appealing websites that captivate users and enhance your brand’s online presence." />

            <ServiceCard icon={<ShoppingCart className="text-blue-600 w-12 h-12 mb-4" />} heading="E-Commerce Solutions" description="Build seamless, high-performing online stores designed for smooth shopping experiences." />

            <ServiceCard icon={<Rocket className="text-blue-600 w-12 h-12 mb-4" />} heading="SEO-Optimized Websites" description="Our websites are built to rank higher on search engines, driving more traffic and growth." />

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

            <ProcessCard stepNumber="01" stepTitle="Initial Phase" stepDescription="We define goals, research the market, set timelines, and allocate roles to ensure a smooth project execution." />

            <ProcessCard stepNumber="02" stepTitle="Execution" stepDescription="We brainstorm ideas, define key features, and ensure a seamless user experience, collaborating closely to meet all project requirements." />

            <ProcessCard stepNumber="03" stepTitle="Delivery" stepDescription="We ensure timely delivery with thorough testing, client approval, and post-launch support for seamless operation." />

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

            <div className="my-12">
              <AutoImageSlider items={portfolioItems} />
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

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Enhanced Brand Credibility" description="A professional website builds trust with your audience and establishes your brand as credible and reliable." />

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Improved User Experience" description="Intuitive navigation and thoughtful design create a positive experience that keeps visitors engaged." />

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Higher Conversion Rates" description="Strategic design elements guide visitors toward desired actions, increasing conversion rates." />

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Better Search Engine Rankings" description="SEO-friendly design helps improve your visibility in search results, driving more organic traffic." />
            
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

