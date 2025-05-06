import { motion } from "framer-motion"
import { Users, Award, Clock } from "lucide-react"
import { PageHeader, TextOverlay, Button, CallToAction, ValuesCard, TeamMemberCard } from "../components/index"
import RyanHansen from "../assets/images/ryan hansen.jpg"
import Henryjames from "../assets/images/henry james.jpg"
import Davidrichard from "../assets/images/david richard.jpg"
import Markhenry from "../assets/images/mark henry.jpg"

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
      name: "Ryan Hansen",
      designation: "Graphic/ web designer",
      image: RyanHansen,
      profileLink: "https://www.facebook.com/profile.php?id=100078446056438&mibextid=wwXIfr&rdid=sY7KJZrmDuE0Q6zt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16B9rr4VDM%2F%3Fmibextid%3DwwXIfr"
    },
    {
      name: "Henry james",
      designation: "Graphic/ web designer",
      image: Henryjames,
      profileLink: "https://www.facebook.com/profile.php?id=100079564993697&mibextid=wwXIfr&rdid=gwbbdK2aT6v4lUaZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15MvNJJj41%2F%3Fmibextid%3DwwXIfr"
    },
    {
      name: "David richard",
      designation: "Web developer",
      image: Davidrichard,
      profileLink: "https://www.facebook.com/profile.php?id=100077279617008&mibextid=wwXIfr&rdid=ewM5Zn6P0cCuS3Pq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ae1BK6qvE%2F%3Fmibextid%3DwwXIfr"
    },
    {
      name: "Mark henry",
      designation: "Graphic designer",
      image: Markhenry,
      profileLink: "https://www.facebook.com/mark.henry.147720?mibextid=wwXIfr&rdid=g9OTGxlCo3JYkckM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18hGnFHyqW%2F%3Fmibextid%3DwwXIfr"
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