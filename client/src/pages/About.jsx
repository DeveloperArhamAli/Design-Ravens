import { Users, Award, Coffee } from "lucide-react"
import aboutImg from "../assets/images/about-image.jpg"
import ValuesCard from "../components/ValuesCard"

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DesignRavens</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            We're a team of passionate designers and developers dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img src={aboutImg} alt="Our Team" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">OUR MISSION & VISION</h2>
              <p className="text-gray-600 mb-4">At Rare Teck, our vision is to be a top provider of innovative and reliable software solutions that help businesses achieve their goals. We aim to create a future where technology makes life easier and where our software products have a positive impact on the world.</p>
              <p className="text-gray-600 mb-4">Our mission is to deliver high-quality software that meets and exceeds our clients’ expectations. We do this by using the latest technologies, hiring the best talent, and encouraging a culture of innovation, teamwork, and excellence. We aim to build long-term relationships with our clients based on trust and respect, providing them with the support they need to succeed in a fast-changing digital world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ValuesCard icon={<Award className="text-purple-600 w-8 h-8" />} heading="Excellence" description="We strive for excellence in every project, paying attention to the smallest details to deliver outstanding results." />
            
            <ValuesCard icon={<Users className="text-purple-600 w-8 h-8" />} heading="Collaboration" description="We believe in working closely with our clients, valuing their input and involving them throughout the design process." />

            <ValuesCard icon={<Coffee className="text-purple-600 w-8 h-8" />} heading="Creativity" description="We approach each project with fresh ideas and innovative thinking to create unique and impactful designs." />

          </div>
        </div>
      </section>
    </div>
  )
}

export default About

