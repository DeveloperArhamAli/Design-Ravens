import { motion } from "framer-motion"
import { Users, Award, Clock } from "lucide-react"
import { PageHeader, TextOverlay, Button, CallToAction, ValuesCard, TeamMemberCard } from "../components/index"

export default function AboutUsPage() {
  const values = [
    {
      icon: <Users className="size-6" />,
      title: "Client-Centric",
      description: "We put our clients at the center of everything we do, focusing on their needs and goals.",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      icon: <Award className="size-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering work that exceeds expectations.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <Clock className="size-6" />,
      title: "Innovation",
      description: "We embrace innovation and stay at the forefront of design and technology trends.",
      color: "from-cyan-500 to-purple-700",
    },
  ]

  const members = [
    {
      name: "John Doe",
      designation: "CEO",
      description: "John is the visionary behind RARE TECK, leading the team with passion and expertise.",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    },
    {
      name: "Jane Smith",
      designation: "CTO",
      description: "Jane is the technical mastermind, ensuring our projects are built on solid foundations.",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Alice Johnson",
      designation: "Designer",
      description: "Alice is our creative genius, crafting stunning designs that captivate audiences.",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Bob Brown",
      designation: "Developer",
      description: "Bob is our coding wizard, turning designs into functional and beautiful websites.",
      image: "https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png"
    }
  ]
  
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="fixed bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.05] z-0"></div>

      <PageHeader
        title="About Us"
        subtitle="Learn more about our team and our mission to create stunning digital experiences."
      />

      <section className="py-20 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 aspect-[4/3] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl">
                  <img src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" alt="team image" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 size-32 border border-cyan-400/30 rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 size-32 border border-purple-400/30 rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TextOverlay children="Our Story" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate Creators Dedicated to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Digital Excellence
                </span>
              </h2>
              <p className="text-white/70 mb-6">
                Founded in 2013, RARE TECK has been at the forefront of digital design and development. Our team of
                passionate creators is dedicated to crafting exceptional digital experiences that help businesses thrive
                in the digital landscape.
              </p>
              <p className="text-white/70 mb-6">
                We believe that great design is not just about aesthetics, but about creating meaningful connections
                between brands and their audiences. Our approach combines creativity, technology, and strategy to
                deliver solutions that drive results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">

            <TextOverlay children="Our Values" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              What Drives Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our core values shape everything we do and guide our approach to creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {values.map((value, i) => (
              <ValuesCard key={i} keyProp={i} {...value} />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <TextOverlay children="Our Team" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Meet the Experts
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our talented team of designers, developers, and strategists is dedicated to creating exceptional digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <TeamMemberCard key={i} keyProp={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Work With Us?"
        description="Let's collaborate to create stunning designs that elevate your brand and help you stand out in the digital landscape."
        button={<Button to="/contact" children="Contact Us Today" />}
      />
    </div>
  )
}