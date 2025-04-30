import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      slug: "/",
    }, 
    {
      name: "About Us",
      slug: "/about",
    },
    {
      name: "Services",
      slug: "/services",
    },
    {
      name: "Portfolio",
      slug: "/portfolio",
    },
    {
      name: "Pricing",
      slug: "/pricing",
    },
    {
      name: "Contact",
      slug: "/contact"
    }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <Logo />

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((navlink) => (
            <Link key={navlink.slug} to={navlink.slug} className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium relative group">
              {navlink.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_5px_1px_rgba(34,211,238,0.6)]"></span>
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:flex">
          <button className="hidden md:flex bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-cyan-400/50 rounded-full px-6 py-2 cursor-pointer group transition-all duration-300">
            <span>Get Started</span>
            <span className="ml-2 size-5 flex items-center justify-center rounded-full bg-cyan-400 text-black group-hover:bg-white transition-colors">
              <ChevronRight className="size-3" />
            </span>
          </button>
        </Link>

        <button className="lg:hidden z-50 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden inset-0 bg-[#050816]  z-40 flex flex-col items-center justify-center h-screen w-full">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.slug}
                to={navlink.slug}
                className="text-white/80 hover:text-cyan-400 transition-colors text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {navlink.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-cyan-400/50 rounded-full px-6 py-3 cursor-pointer mt-4 group transition-all duration-300 flex items-center">
                <span>Get Started</span>
                <span className="ml-2 size-5 flex items-center justify-center rounded-full bg-cyan-400 text-black group-hover:bg-white transition-colors">
                  <ChevronRight className="size-3" />
                </span>
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}