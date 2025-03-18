import { Link } from "react-router-dom"
import { PenTool, Layers, Palette, RefreshCw, Award, Target, ArrowRight, CheckCircle, Brush, Rocket } from "lucide-react"
import logoDesignImage from "../../assets/images/logo-designing-image.jpg"
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

const LogoDesign = () => {

  const portfolioItems = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Logo Design and Branding
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

            <ServiceCard icon={<Brush className="text-blue-600 w-12 h-12 mb-4" />} heading="Logo Design" description="Crafting unique and memorable logos that represent your brand’s identity." />

            <ServiceCard icon={<Palette className="text-blue-600 w-12 h-12 mb-4" />} heading="Branding Strategy" description="Creating a cohesive brand identity that aligns with your values and objectives." />

            <ServiceCard icon={<Rocket className="text-blue-600 w-12 h-12 mb-4" />} heading="Business Growth" description="Helping businesses stand out and build a foundation for long-term success." />

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Logo Design Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent logo design work that showcases our expertise and creativity.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Benefits of Professional Logo Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-designed logo offers numerous advantages for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Brand Recognition" description="A distinctive logo helps customers recognize and remember your brand instantly." />

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Professional Image" description="A high-quality logo conveys professionalism and builds trust with your audience." />

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Brand Differentiation" description="A unique logo helps you stand out from competitors and creates a distinct identity." />

            <BenefitsOfWebDesignCard icon={<CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />} heading="Consistent Brand Identity" description="A well-designed logo serves as the foundation for a consistent brand identity across all touchpoints." />
            
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

