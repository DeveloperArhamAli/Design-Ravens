"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false)
  }, [location])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-blue-600 font-bold text-2xl">DesignRavens</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button 
                onClick={toggleServices}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
              >
                Services <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      All Services
                    </Link>
                    <Link 
                      to="/services/web-design" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Web Design
                    </Link>
                    <Link 
                      to="/services/logo-design" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Logo Design
                    </Link>
                    <Link 
                      to="/services/branding" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Branding
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Portfolio
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
          <nav className="md:hidden pt-4 pb-2 space-y-1">
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
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={toggleServices}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 mt-1 space-y-1 border-l-2 border-blue-100">
                  <Link 
                    to="/services" 
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
                    onClick={toggleMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/services/web-design" 
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
                    onClick={toggleMenu}
                  >
                    Web Design
                  </Link>
                  <Link 
                    to="/services/logo-design" 
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
                    onClick={toggleMenu}
                  >
                    Logo Design
                  </Link>
                  <Link 
                    to="/services/branding" 
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
                    onClick={toggleMenu}
                  >
                    Branding
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/portfolio"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
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
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-center transition-colors mt-2"
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
