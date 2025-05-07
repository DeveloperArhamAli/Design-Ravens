import { Link } from "react-router-dom"
import { Logo } from "./index"
import { Mail, Phone } from "lucide-react"

const Footer = () => {
  const services = ["Logo Design", "Web development",  "Brand identity", "Digital marketing", "SEO Services", "App development"]

  const socialLinks = [
    {
      logo: <Phone className="h-5 w-5" />,
      content: "+1 281-733-2813",
      link: "tel:+1 281-733-2813"
    },
    {
      logo: <Mail className="h-5 w-5" />,
      content: "rareteck@gmail.com",
      link: "mailto:rareteck@gmail.com"
    }
  ]
  
  return (
    <footer class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Logo fontSize="text-4xl" />
          <p class="mt-2 text-sm text-gray-500">Elevate Your Brand with Stunning Design Solutions</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
            <nav class="list-none mb-10 flex flex-col gap-1">
              {services.map((service, i) => (
                <li key={i} className="text-gray-400 hover:text-white">{service}</li>
              ))}
            </nav>
          </div>
          <div class="md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
            <nav class="list-none mb-10 flex flex-col gap-1">
              {socialLinks.map((socialLink, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 hover:text-white"> 
                  {socialLink.logo}
                  <a href={socialLink.link}>{socialLink.content}</a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 bg-opacity-75">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-400 text-sm text-center sm:text-left">Copyright © {new Date().getFullYear()} RareTeck
          </p>
          <span class="flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-3">
            <a class="text-gray-400" href="https://www.facebook.com/rareteck" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400" href="https://instagram.com/rareteck" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400" href="https://x.com/rareteck" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer