import { motion } from "framer-motion"
import { Code, Cpu, PencilRuler, Palette, Megaphone, Search, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import { Button, TextOverlay, ServiceCard, CallToAction, StatCard, TestimonialSlider } from "../components/index"

export default function HomePage() {
  const services = [
    {
      icon: <PencilRuler className="size-6" />,
      title: "Logo Design",
      description: "Unique and memorable logos that define your brand’s visual identity.",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      icon: <Code className="size-6" />,
      title: "Web development",
      description: "Custom websites built with cutting-edge technologies for optimal performance.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <Palette className="size-6" />,
      title: "Brand identity",
      description: "Cohesive brand strategies that communicate your values and captivate your audience.",
      color: "from-cyan-500 to-purple-700",
    },
    {
      icon: <Megaphone className="size-6" />,
      title: "Digital Marketing",
      description: "Data-driven campaigns to grow your online presence and boost conversions.",
      color: "from-purple-500 to-cyan-700",
    },
    {
      icon: <Search className="size-6" />,
      title: "SEO Services",
      description: "Optimized content and strategies to increase your search engine rankings organically.",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      icon: <Smartphone className="size-6" />,
      title: "App development",
      description: "Intuitive and scalable mobile apps tailored to your business goals.",
      color: "from-purple-500 to-purple-700",
    },
  ]

  const stats = [
    {
      number: "10+",
      label: "Years Experience"
    },
    {
      number: "200+",
      label: "Projects Completed"
    },
    {
      number: "197+",
      label: "Happy Clients"
    },
    {
      number: "100+",
      label: "Design Awards"
    },
  ]

  const testimonials = [
    {
      name: "James Wilson",
      designation: "StartUp Innovations",
      message: "Working with RARE TECK was the best decision we made for our startup. Their strategic approach to design and development helped us launch a product that immediately resonated with our target audience and attracted investor interest.",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    },
    {
      name: "Olivia Parker",
      designation: "Retail Brands Inc.",
      message: "The team at RARE TECK understood our vision from day one. They created a digital experience that perfectly captures our brand essence while providing an intuitive shopping experience that has significantly increased our online sales.",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Daniel Kim",
      designation: "Tech Solutions Group",
      message: "As a technology company, we had high expectations for our website redesign. RARE TECK delivered a cutting-edge platform that showcases our innovations while making complex information accessible to our diverse audience.",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Natalie Brown",
      designation: "Creative Agency",
      message: "RARE TECK's collaborative approach made the design process enjoyable and productive. They listened to our needs, provided valuable insights, and delivered a website that has become a powerful tool for attracting new clients.",
      image: "https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png"
    },
  ]
  
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="fixed  bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.05] z-0"></div>

      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">

          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

              <TextOverlay children="Design & Development Agency" />

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Elevate Your Brand</span>
                <span className="block">
                  with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    Stunning
                  </span>
                </span>
                <span className="block">Design Solutions</span>
              </h1>

              <p className="text-xl text-white/70 mb-8 max-w-lg">
                We create beautiful websites and logos that help your business stand out in the digital landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button children="Get Started" to="/contact" />
                <Link to="/services">
                  <button className="border-white/10 text-white hover:bg-white/5 hover:border-cyan-400/30 px-8 py-3 text-lg rounded-full cursor-pointer bg-black/70 transition duration-300">Our Services</button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* 3D-like element */}
              <div className="relative z-10 aspect-square max-w-md mx-auto">
                {/* Glowing sphere */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative size-64">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>
                    <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/40 to-purple-500/40 blur-md"></div>
                    <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-500/60 to-purple-500/60 blur-sm"></div>
                    <div className="absolute inset-12 rounded-full bg-[#050816] flex items-center justify-center">
                      <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        RT
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-4 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]"></div>
                    </div>
                    <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-4 rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]"></div>
                    </div>
                    <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]"></div>
                    </div>
                    <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]"></div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-8 -right-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg animate-[bounce_6s_ease-in-out_infinite_alternate]">
                  <Code className="size-6 text-cyan-400" />
                </div>
                <div
                  className="absolute -bottom-8 -left-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg animate-[bounce_8s_ease-in-out_infinite_alternate]"
                  style={{ animationDelay: "1s" }}
                >
                  <Cpu className="size-6 text-purple-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            
            <TextOverlay children="Our Services" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              What We Do Best
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We offer a comprehensive range of design and development services to help your business thrive in the
              digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} keyProp={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} keyProp={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-white/70 mb-4">
                      <div className="size-2 rounded-full bg-purple-400 shadow-[0_0_8px_2px_rgba(168,85,247,0.6)]"></div>
                      Testimonials
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                      Trusted by Innovative Brands
                  </h2>
                  <p className="text-white/70 max-w-2xl mx-auto mb-12">
                      Our clients love working with us. Here's what they have to say about our collaboration.
                  </p>
              </div>

              <TestimonialSlider testimonials={testimonials}/>
          </div>
      </section>

      <CallToAction 
        title="Ready to Transform Your Digital Presence?" 
        description="Let's collaborate to create stunning designs that elevate your brand and help you stand out in the digital landscape." 
        button={<Button to="/contact" children="Get Started" />} 
      />
    </div>
  )
}