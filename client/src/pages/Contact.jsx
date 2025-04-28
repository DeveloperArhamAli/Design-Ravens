import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "../components/ContactForm"

const Contact = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Have a project in mind? Get in touch with us to discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Fill out the form or contact us directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">2437 Sonoma, Baton Rouge, LA, United States, Louisiana</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <a href="mailto:rareteck@gmail.com"><p className="text-gray-600">rareteck@gmail.com</p></a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                    <a href="tel:+15512615233"><p className="text-gray-600">+1 281-733-2813</p></a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

