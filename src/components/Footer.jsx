import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DesignRavens</h3>
            <p className="text-blue-100 mb-4">
              Creating stunning web and logo designs that elevate your brand and captivate your audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-100 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>123 Design Street, Creative City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@DesignRavens.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} DesignRavens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

