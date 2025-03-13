"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-blue-600 font-bold text-2xl">DesignRavens</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-center transition-colors"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar

