import { motion } from "framer-motion"
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { PageHeader, ContactForm, Button, CallToAction } from "../components/index"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="fixed bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.05] z-0"></div>

      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project or ask any questions."
      />

      <section className="py-20 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-fit">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Contact Information
                </h2>
                <p className="text-white/70 mb-8">Prefer to reach out directly? Use the contact information below.</p>

                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                      <Phone className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a href="tel:+1 281-733-2813"><p className="text-white/70">+1 281-733-2813</p></a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-700 flex items-center justify-center">
                      <Mail className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a href="mailto:rareteck@gmail.com"><p className="text-white/70">rareteck@gmail.com</p></a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">

                    <a href="https://www.facebook.com/rareteck" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="text-white/70 hover:text-cyan-400"><Facebook /></div>
                    </a>

                    <a href="https://www.instagram.com/rareteck" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="text-white/70 hover:text-cyan-400"><Instagram /></div>
                    </a>

                    <a href="https://www.linkedin.com/rareteck" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="text-white/70 hover:text-cyan-400"><Linkedin /></div>
                    </a>

                    <a href="https://www.x.com/rareteck" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="text-white/70 hover:text-cyan-400"><Twitter /></div>
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 overflow-hidden">
            <div className="aspect-[21/9] rounded-xl flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.7255585525897!2d67.11523248710249!3d24.901316224266754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33922488f3725%3A0x3bfde63eb356ebc0!2sMillennium%20Mall!5e0!3m2!1sen!2sus!4v1745998468548!5m2!1sen!2sus" className="w-full h-full" style={{border:0}} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Start Your Project?"
        description="Let's collaborate to create stunning designs that elevate your brand and help you stand out in the digital landscape."
        button={<Button to="/contact" children="Get Started" />}
      />
    </div>
  )
}
