import { Users, Award, Coffee } from "lucide-react"
import officeImg from "../assets/images/office-image.webp"
import Person1 from "../assets/images/person1.jpeg"
import Person2 from "../assets/images/peson2.jpeg"
import Person3 from "../assets/images/person3.jpeg"

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DesignRavens</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            We're a team of passionate designers and developers dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src={officeImg} alt="Our Team" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, DesignRavens began with a simple mission: to help businesses stand out through
                exceptional design. What started as a small team of three passionate designers has grown into a
                full-service design agency serving clients worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great design is more than just aesthetics—it's about solving problems and creating
                meaningful connections between brands and their audiences. This philosophy guides everything we do, from
                logo creation to comprehensive website development.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped hundreds of businesses transform their digital presence and establish
                strong brand identities that resonate with their target markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, paying attention to the smallest details to deliver
                outstanding results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients, valuing their input and involving them throughout the
                design process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Creativity</h3>
              <p className="text-gray-600">
                We approach each project with fresh ideas and innovative thinking to create unique and impactful
                designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our exceptional designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src={Person1}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-blue-600">Founder & Creative Director</p>
            </div>

            <div className="text-center">
              <img
                src={Person2}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Michael Chen</h3>
              <p className="text-blue-600">Lead Web Designer</p>
            </div>

            <div className="text-center">
              <img
                src={Person3}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Emily Rodriguez</h3>
              <p className="text-blue-600">Senior Logo Designer</p>
            </div>

            <div className="text-center">
              <img
                src={Person1}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">David Kim</h3>
              <p className="text-blue-600">UI/UX Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <p className="text-xl text-blue-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
              <p className="text-xl text-blue-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <p className="text-xl text-blue-100">Design Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

