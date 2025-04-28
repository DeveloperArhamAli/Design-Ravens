import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { useState } from "react"
import PricingComponent from "../components/PricingComponent"

const Pricing = () => {

  const categories = ["Web Design", "Logo Design", "Branding", "Logo + Branding", "Logo + Branding + Website"]
  const [activeFilter, setActiveFilter] = useState("Web Design")

    const packages = [
      {
        id: 1,
        heading: "HTML",
        category: "Web Design",
        price: "499",
        description: "5 page static website",
        features: [
          "Jquery Slider Banner",
          "W3C Certified HTML",
          "UI Design",
          "3 Banner Design",
          "Favicon",
          "SEO Friendly Design"
        ]
      },
      {
        id: 2,
        heading: "CMS",
        category: "Web Design",
        price: "999",
        description: "5 page dynamic website",
        features: [
          "Web Development",
          "W3C Certified HTML",
          "Web Design & UI",
          "10 Stock Images",
          "5 Banner Designs",
          "Advance UI Effects",
          "SEO Friendly Design",
          "SEO Friendly Sitemap",
          "On Page Optimization",
          "Social Media Integration",
          "4 Social Platforms"
        ]
      },
      {
        id: 3,
        heading: "E-Commerce",
        category: "Web Design",
        price: "1999",
        description: "Unlimited Pages",
        features: [
          "Web Development",
          "W3C Certified HTML",
          "Admin Panel Support",
          "Mobile Responsive Layout",
          "Customers Login Area",
          "Cart Integration",
          "Pay Module Integration",
          "Inventory Mangement",
          "Unlimited Products & Categories",
          "Easy Product Search",
          "Product Reviews",
          "Web Design & UI",
          "15 Stock Images",
          "8 Banner Designs",
          "Favicon",
          "Advance UI Effects",
          "Basic Search Engine Submission",
          "SEO Friendly Design",
          "SEO Friendly Sitemap",
          "Analytics Integration",
          "On Page Optimization",
          "Social Media Integration",
          "4 Social Platforms"
        ]
      },
      {
        id: 4,
        heading: "Portal",
        category: "Web Design",
        price: "3999",
        description: "Any Pages",
        features: [
          "Web Development",
          "Admin Panel Support",
          "Job Portal",
          "Professional Network",
          "Social Network",
          "Media Portal",
          "Real Estate Portal",
          "Medical Portal",
          "News Portal",
          "Enterprise Portal",
          "Client/User Dashboard",
          "Custom Coding",
          "Module-wise Architecture",
          "Extensive Admin Panel",
          "Complete Deployment",
        ]
      },
      {
        id: 5,
        heading: "Basic",
        category: "Logo Design",
        price: "49",
        description: "2 logo concepts",
        features: [
          "By 1 Experienced Designer",
          "4 Free Revisions",
          "Dedicated Project Manager",
          "24 – 48 Hours Delivery",
          "1 Finalized Logo",
          "100% Ownership",
          "No Print-Ready PDF File",
          "No Vector EPS File",
          "No Editable Vector AI File",
        ]
      },
      {
        id: 6,
        heading: "Proffesional",
        category: "Logo Design",
        price: "99",
        description: "4 logo concepts",
        features: [
          "By 3 Experienced Designer",
          "8 Free Revisions",
          "Dedicated Project Manager",
          "24 – 48 Hours Delivery",
          "1 Finalized Logo",
          "100% Ownership",
          "Online JPEG & PNG Files",
          "Print-Ready PDF File",
          "No Vector EPS File",
          "No Editable Vector AI File",
        ]
      },
      {
        id: 7,
        heading: "Premium",
        category: "Logo Design",
        price: "149",
        description: "6 logo concepts",
        features: [
          "By 5 Experienced Designer",
          "Unlimited Revisions",
          "Dedicated Project Manager",
          "24 – 48 Hours Delivery",
          "1 Finalized Logo",
          "100% Ownership",
          "Online JPEG & PNG Files",
          "Print-Ready PDF File",
          "Vector EPS File",
          "No Editable Vector AI File",
        ]
      },
      {
        id: 8,
        heading: "Deluxe",
        category: "Logo Design",
        price: "199",
        description: "Unlimited logo concepts",
        features: [
          "By 8 Experienced Designer",
          "Unlimited Revisions",
          "Dedicated Project Manager",
          "24 – 48 Hours Delivery",
          "1 Finalized Logo",
          "100% Ownership",
          "Online JPEG & PNG Files",
          "Print-Ready PDF File",
          "Vector EPS File",
          "Editable Vector AI File",
        ]
      },
      {
        id: 9,
        heading: "Startup",
        category: "Branding",
        price: "99",
        description: "Branding Kit",
        features: [
          "Business Card Design",
          "Letter head Design",
          "Envelope Design",
          "MS Word Letterhead",
          "Email Signature Design",
          "Invoice Design",
          "Facebook Banner Design",
          "Youtube Banner Design",
          "Twitter Banner Design",
          "Linkedin Banner Design",
          "Logo Watermark"
        ]
      },
      {
        id: 10,
        heading: "Professional",
        category: "Branding",
        price: "139 ",
        description: "Branding Kit",
        features: [
          "Business Card Design",
          "Letter head Design",
          "Envelope Design",
          "MS Word Letterhead",
          "Email Signature Design",
          "Invoice Design",
          "Facebook Banner Design",
          "Youtube Banner Design",
          "Twitter Banner Design",
          "Linkedin Banner Design",
          "Logo Watermark",
          "Favicon Design",
          "Polo/T-Shirt Design",
          "Cap/Hat Design"
        ]
      },
      {
        id: 11,
        heading: "Corporate",
        category: "Branding",
        price: "249 ",
        description: "Branding Kit",
        features: [
          "Business Card Design",
          "Letter head Design",
          "Envelope Design",
          "MS Word Letterhead",
          "Email Signature Design",
          "Invoice Design",
          "Facebook Banner Design",
          "Youtube Banner Design",
          "Twitter Banner Design",
          "Linkedin Banner Design",
          "Logo Watermark",
          "Favicon Design",
          "Polo/T-Shirt Design",
          "Cap/Hat Design",
          "Bag Design",
          "Signage Design",
          "Flyer Design"
        ]
      },
      {
        id: 12,
        heading: "Ultimate",
        category: "Branding",
        price: "299 ",
        description: "Branding Kit",
        features: [
          "Business Card Design",
          "Letter head Design",
          "Envelope Design",
          "MS Word Letterhead",
          "Email Signature Design",
          "Invoice Design",
          "Facebook Banner Design",
          "Youtube Banner Design",
          "Twitter Banner Design",
          "Linkedin Banner Design",
          "Logo Watermark",
          "Favicon Design",
          "Polo/T-Shirt Design",
          "Cap/Hat Design",
          "Bag Design",
          "Signage Design",
          "Flyer Design",
          "Car Wrap/Vinyl Design",
          "PPT Design",
          "Magnet Design",
          "Door Sign Design",
          "Menu Design",
          "Mug/Cup Design"
        ]
      },
      {
        id: 13,
        heading: "Basic",
        category: "Logo + Branding",
        price: "89",
        description: "Basic Logo | Startup Branding",
        features: [
          "2 Logo Concepts",
          "3 Revisions",
          "No High Resolution files",
          "48 hours Delivery",
          "100% Ownership",
          "JPG + PNG",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
        ]
      },
      {
        id: 14,
        heading: "Professional",
        category: "Logo + Branding",
        price: "219",
        description: "Professional Logo | Corporate Branding",
        features: [
          "4 Logo Concepts",
          "6 Revisions",
          "Custom Logo",
          "Vector PDF File",
          "48 hours Delivery",
          "100% Ownership",
          "JPG + PDF + PNG",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "Email Signature",
          "2 Social Covers",
          "T-Shirt Design",
          "Web Banner Design"
        ]
      },
      {
        id: 15,
        heading: "Corporate",
        category: "Logo + Branding",
        price: "299",
        description: "Premium Logo | Ultimate Branding",
        features: [
          "6 Logo Concepts",
          "Unlimited Revisions",
          "Custom Logo",
          "Vector PDF File",
          "24-48 hours Delivery",
          "100% Ownership",
          "JPG + PDF + PNG + EPS",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "Email Signature",
          "4 Social Covers",
          "T-Shirt Design",
          "Web Banner Design",
          "Signage Design",
          "Car Stickers Design"
        ]
      },
      {
        id: 16,
        heading: "Ultimate",
        category: "Logo + Branding",
        price: "599",
        description: "Deluxe Logo | Ultimate Branding",
        features: [
          "Unlimited Logo Concepts",
          "Unlimited Revisions",
          "Custom Logo",
          "Editable Vector Ai",
          "Vector EPS, PDF",
          "24-48 hours Delivery",
          "100% Ownership",
          "JPG + PDF + PNG + EPS + AI",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "Email Signature",
          "4 Social Covers",
          "T-Shirt Design",
          "Web Banner Design",
          "Signage Design",
          "Car Stickers Design"
        ]
      },
      {
        id: 17,
        heading: "Basic",
        category: "Logo + Branding + Website",
        price: "499",
        description: "Professional Logo | Startup Branding | 1 Page HTML",
        features: [
          "4 Logo Concepts",
          "6 Revisions",
          "Custom Logo",
          "Vector PDF File",
          "48 hours Delivery",
          "JPG + PDF + PNG",
          "100% Ownership",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "1 page static website",
          "Jquery Slider Banner",
          "W3C Certified HTML",
          "UI Design",
          "3 Banner Design",
          "Favicon",
          "SEO Friendly Design"
        ]
      },
      {
        id: 18,
        heading: "Professional",
        category: "Logo + Branding + Website",
        price: "699",
        description: "Premium Logo | Professional Branding | HTML Website",
        features: [
          "6 Logo Concepts",
          "Unlimited Revisions",
          "Custom Logo",
          "Vector EPS , PDF file",
          "24-48 hours Delivery",
          "JPG + PDF + PNG + EPS",
          "100% Ownership",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "Email Signature",
          "2 Social Covers",
          "5 page static website",
          "Jquery Slider Banner",
          "W3C Certified HTML",
          "UI Design",
          "3 Banner Design",
          "Favicon",
          "SEO Friendly Design"
        ]
      },
      {
        id: 19,
        heading: "Corporate",
        category: "Logo + Branding + Website",
        price: "1299",
        description: "Deluxe Logo | Corporate Branding | CMS Website",
        features: [
          "Unlimited Logo Concepts",
          "Unlimited Revisions",
          "Custom Logo",
          "Editable Vector Ai",
          "Vector EPS , PDF file",
          "24-48 hours Delivery",
          "JPG + PDF + PNG + EPS + AI",
          "100% Ownership",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "Email Signature",
          "2 Social Covers",
          "T-Shirt Design",
          "Web Banner Design",
          "5 page dynamic website",
          "Web Development",
          "W3C Certified HTML",
          "Web Design & UI",
          "10 Stock Images",
          "5 Banner Designs",
          "Advance UI Effects",
          "SEO Friendly Design",
          "SEO Friendly Sitemap",
          "On Page Optimization",
          "Social Media Integration",
          "4 Social Platforms"
        ]
      },
      {
        id: 20,
        heading: "Ultimate",
        category: "Logo + Branding + Website",
        price: "1999",
        description: "Deluxe Logo | Ultimate Branding | E-Commerce Website",
        features: [
          "Unlimited Logo Concepts",
          "Unlimited Revisions",
          "Custom Logo",
          "Editable Vector Ai",
          "Vector EPS , PDF file",
          "24-48 hours Delivery",
          "JPG + PDF + PNG + EPS + AI",
          "100% Ownership",
          "Business Card Design",
          "Letterhead Design",
          "Envelope Design",
          "Email Signature",
          "4 Social Covers",
          "T-Shirt Design",
          "Web Banner Design",
          "Signage Design",
          "Car Stickers Design",
          "Web Development",
          "W3C Certified HTML",
          "Admin Panel Support",
          "Mobile Responsive Layout",
          "Customers Login Area",
          "Cart Integration",
          "Pay. Module Integration",
          "Inventory Mangement",
          "Unlimited Products & Categories",
          "Easy Product Search",
          "Web Design & UI",
          "15 Stock Images",
          "8 Banner Designs",
          "Favicon",
          "Advance UI Effects",
          "Basic Search Engine Submission",
          "SEO Friendly Design",
          "SEO Friendly Sitemap",
          "Analytics Integration",
          "On Page Optimization",
          "Social Media Integration",
          "4 Social Platforms"
        ]
      },
    ]

    const filteredProjects = packages.filter((pkg) => pkg.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100" data-aos="fade-up" data-aos-delay="200">
            Affordable design solutions tailored to fit your business needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-up">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              We offer flexible pricing options to accommodate businesses of all sizes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button key={index} onClick={() => setActiveFilter(category)} className={`px-6 py-2 rounded-full font-medium transition-colors ${activeFilter === category ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{category}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mx-auto" data-aos="zoom-in">

            {filteredProjects.map((filteredPkg) => (
              <PricingComponent name={filteredPkg.heading} price={filteredPkg.price} description={filteredPkg.description} features={filteredPkg.features} key={filteredPkg.id} />
            ))}

          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand that every business is unique. If our standard packages don't fit your needs, we're happy to
              create a custom solution tailored specifically for you.
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
            Choose the plan that works for you and let's start creating something amazing together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing

