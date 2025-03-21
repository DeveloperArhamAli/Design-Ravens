import { Link } from "react-router-dom"
import TestimonialCard from "../components/TestimonialCard"
import AutoImageSlider from "../components/AutoImageSlider"
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import image4 from "../assets/images/image4.jpg"
import image5 from "../assets/images/image5.jpg"
import image6 from "../assets/images/image6.jpg"
import image7 from "../assets/images/image7.jpg"
import image8 from "../assets/images/image8.jpg"
import image9 from "../assets/images/image9.jpg"
import image10 from "../assets/images/image10.jpg"
import image11 from "../assets/images/image11.jpg"
import image12 from "../assets/images/image12.jpg"
import image13 from "../assets/images/image13.jpg"
import image14 from "../assets/images/image14.jpg"
import image15 from "../assets/images/image15.jpg"
import image16 from "../assets/images/image16.jpg"
import image17 from "../assets/images/image17.jpg"
import image18 from "../assets/images/image18.jpg"
import image19 from "../assets/images/image19.jpg"
import image20 from "../assets/images/image20.jpg"
import image21 from "../assets/images/image21.jpg"
import image22 from "../assets/images/image22.jpg"
import image23 from "../assets/images/image23.jpg"
import image24 from "../assets/images/image24.jpg"
import image25 from "../assets/images/image25.jpg"
import image26 from "../assets/images/image26.jpg"
import image27 from "../assets/images/image27.jpg"
import image28 from "../assets/images/image28.jpg"
import image29 from "../assets/images/image29.jpg"
import image30 from "../assets/images/image30.jpg"
import image31 from "../assets/images/image31.jpg"
import image32 from "../assets/images/image32.jpg"
import image33 from "../assets/images/image33.jpg"
import image34 from "../assets/images/image34.jpg"
import image35 from "../assets/images/image35.jpg"
import image36 from "../assets/images/image36.jpg"
import image37 from "../assets/images/image37.jpg"
import image38 from "../assets/images/image38.jpg"
import image39 from "../assets/images/image39.jpg"

const Portfolio = () => {

  const portfolioItems1 = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]

  const portfolioItems2 = [image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26]

  const portfolioItems3 = [image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39]

  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Explore our collection of work that showcases our creativity, expertise, and commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Portolio</h2>
          </div>
          <AutoImageSlider  items={portfolioItems1} />
          <AutoImageSlider  items={portfolioItems2} />
          <AutoImageSlider  items={portfolioItems3} />
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

            <TestimonialCard testimonial="I'm so happy with my logo it looks so cool I really loved how Emma Hemmingway did her best to leave this logo perfect. I recommend her and I will definitely come back and ask for her again." name="Jose Flores" designation="Owner" />

            <TestimonialCard testimonial="I had the pleasure of working with Holly Caldwell for my logo and business cards and let me tell you, she is amazing and very easy to work with! I highly recommend Design Ravens and Holly! Thanks" name="Chris Kline" designation="Owner/CEO" />

            <TestimonialCard testimonial="Very friendly and work with you and your needs. Got a company logo within days and loved it. Would definitely recommend them to anyone looking for a logo or any other work they do! Amazing work." name="Alex Macias" />

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