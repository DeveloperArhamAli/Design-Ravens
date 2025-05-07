import { Link } from "react-router-dom"
import { Code, PencilRuler, Palette, Megaphone, Search, Smartphone } from "lucide-react"
import { PageHeader, TextOverlay, Button, CallToAction, ServiceCard, ProcessCard, TestimonialSlider  } from "../components/index"

export default function ServicesPage() {
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

  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We learn about your business, goals, and target audience."
    },
    {
      number: "02",
      title: "Strategy",
      desc: "We develop a comprehensive strategy tailored to your needs."
    },
    {
      number: "03",
      title: "Design & Development",
      desc: "We create stunning designs and develop robust solutions.",
    },
    {
      number: "04",
      title: "Launch & Support",
      desc: "We launch your project and provide ongoing support."
    },
  ]

  const testimonials = [
    {
      name: "David Miller",
      designation: "FinTech Solutions",
      message: "The web development services provided by RARE TECK transformed our online banking platform. The improved user experience led to a 60% increase in mobile transactions and significantly reduced customer support inquiries.",
      image: "https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png"
    },
    {
      name: "Lisa Thompson",
      designation: "Health & Wellness Co.",
      message: "RARE TECK's brand identity work completely revitalized our company image. The new logo and visual identity system has made us stand out in a crowded market and helped us connect with a younger demographic we were struggling to reach.",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Robert Zhang",
      designation: "E-commerce Ventures",
      message: "The app development team at RARE TECK delivered our mobile shopping app on time and under budget. The intuitive interface and seamless checkout process have increased our conversion rates by 35% compared to our website.",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Sophia Garcia",
      designation: "Educational Platform",
      message: "RARE TECK's digital marketing strategy completely transformed our online presence. Within three months, our organic traffic increased by 120% and lead generation improved by 75%. Their data-driven approach delivered measurable results.",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    },
  ]
  
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="fixed bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.05] z-0"></div>

      <PageHeader
        title="Our Services"
        subtitle="Comprehensive design and development solutions to elevate your digital presence."
      />

      <section className="py-20 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
              <ServiceCard key={i} keyProp={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">

            <TextOverlay children="Our Process" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              How We Work
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our streamlined process ensures that we deliver exceptional results that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ProcessCard key={i} keyProp={i} stepNumber={step.number} stepTitle={step.title} stepDescription={step.desc} />
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
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Client Success Stories
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            See how our services have helped businesses achieve their goals and transform their digital presence.
          </p>
        </div>

        <TestimonialSlider testimonials={testimonials}/>
      </div>
    </section>

      <CallToAction 
        title="Ready to Get Started?"
        description="Check out our pricing plans or contact us for a custom quote tailored to your specific needs."
        button={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/pricing" children="View Pricing" />
            <Link to="/contact"><button className="border-white/10 text-white hover:bg-white/5 hover:border-cyan-400/30 px-8 py-3 text-lg rounded-full bg-black/50 transition duration-300 cursor-pointer">Contact Us</button></Link>
          </div>
        } 
      />
    </div>
  )
}