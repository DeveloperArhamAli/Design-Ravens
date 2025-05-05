// import AutoImageSlider from "../components/AutoImageSlider"
// import image1 from "../assets/images/image1.jpg"
// import image2 from "../assets/images/image2.jpg"
// import image3 from "../assets/images/image3.jpg"
// import image4 from "../assets/images/image4.jpg"
// import image5 from "../assets/images/image5.jpg"
// import image6 from "../assets/images/image6.jpg"
// import image7 from "../assets/images/image7.jpg"
// import image8 from "../assets/images/image8.jpg"
// import image9 from "../assets/images/image9.jpg"
// import image10 from "../assets/images/image10.jpg"
// import image11 from "../assets/images/image11.jpg"
// import image12 from "../assets/images/image12.jpg"
// import image13 from "../assets/images/image13.jpg"
// import image14 from "../assets/images/image14.jpg"
// import image15 from "../assets/images/image15.jpg"
// import image16 from "../assets/images/image16.jpg"
// import image17 from "../assets/images/image17.jpg"
// import image18 from "../assets/images/image18.jpg"
// import image19 from "../assets/images/image19.jpg"
// import image20 from "../assets/images/image20.jpg"
// import image21 from "../assets/images/image21.jpg"
// import image22 from "../assets/images/image22.jpg"
// import image23 from "../assets/images/image23.jpg"
// import image24 from "../assets/images/image24.jpg"
// import image25 from "../assets/images/image25.jpg"
// import image26 from "../assets/images/image26.jpg"
// import image27 from "../assets/images/image27.jpg"
// import image28 from "../assets/images/image28.jpg"
// import image29 from "../assets/images/image29.jpg"
// import image30 from "../assets/images/image30.jpg"
// import image31 from "../assets/images/image31.jpg"
// import image32 from "../assets/images/image32.jpg"
// import image33 from "../assets/images/image33.jpg"
// import image34 from "../assets/images/image34.jpg"
// import image35 from "../assets/images/image35.jpg"
// import image36 from "../assets/images/image36.jpg"
// import image37 from "../assets/images/image37.jpg"
// import image38 from "../assets/images/image38.jpg"
// import image39 from "../assets/images/image39.jpg"

// const Portfolio = () => {

//   const portfolioItems1 = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]

//   const portfolioItems2 = [image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26]

//   const portfolioItems3 = [image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39]

//   return (
//     <div>
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <AutoImageSlider  items={portfolioItems1} />
//           <AutoImageSlider  items={portfolioItems2} />
//           <AutoImageSlider  items={portfolioItems3} />
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Portfolio

import { PageHeader, TextOverlay, Button, ProjectCard, CallToAction, TestimonialSlider } from "../components/index"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Project 1",
      category: "Web Design",
      description: "Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. ",
      image: "https://www.hubspot.com/hs-fs/hubfs/lemon%20(1).jpg?width=650&height=425&name=lemon%20(1).jpg"
    },
    {
      title: "Project 2",
      category: "Graphic Design",
      description: "Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. ",
      image: "https://i.pinimg.com/564x/27/10/a1/2710a1bd41e4350d907473d91b144b75.jpg"
    },
    {
      title: "Project 3",
      category: "Branding",
      description: "Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. ",
      image: "https://irp.cdn-website.com/3d3a8a6e/dms3rep/multi/AdobeStock_278878831_RC.png"
    },
    {
      title: "Project 4",
      category: "Web Development",
      description: "Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. ",
      image: "https://graphicdesigneye.com/images/banner-design-52.jpg"
    },
    {
      title: "Project 5",
      category: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. ",
      image: "https://i.ytimg.com/vi/v1jlkKfwHm8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlDVhBjaNaIsZ31Fn2d9LYTLatxQ"
    },
    {
      title: "Project 6",
      category: "Mobile App",
      description: "Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. ",
      image: "https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Free-Editable-Photoshop-Roll-Up-Banner-Design.jpg"
    },
  ]

  const testimonials = [
    {
      name: "Alex Johnson",
      designation: "TechVision Inc.",
      message: "RARE TECK delivered an exceptional website that perfectly captures our brand essence. Their team was professional, responsive, and a pleasure to work with throughout the entire process. The final product exceeded our expectations and has significantly improved our online presence.",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    },
    {
      name: "Sarah Williams",
      designation: "Innovate Solutions",
      message: "Working with RARE TECK was a game-changer for our business. Their creative approach and technical expertise helped us transform our outdated website into a modern, user-friendly platform that our customers love. The attention to detail and commitment to quality is unmatched.",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Michael Chen",
      designation: "Global Ventures",
      message: "The team at RARE TECK truly understands how to create digital experiences that drive results. From the initial consultation to the final launch, they guided us through every step with expertise and patience. Our new website has increased conversions by 45% in just three months!",
      image: "https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png"
    },
    {
      name: "Emily Rodriguez",
      designation: "Creative Studios",
      message: "As a creative agency ourselves, we had high standards for our website redesign. RARE TECK not only met but exceeded those standards. Their innovative design approach and flawless execution resulted in a website that perfectly represents our brand and impresses our clients.",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740"
    },
  ]
  
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="fixed bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.05] z-0"></div>

      <PageHeader
        title="Our Portfolio"
        subtitle="Explore our latest projects and see how we've helped our clients achieve their goals."
      />

      <section className="py-12 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} keyProp={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <TextOverlay children="Client Testimonials" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              What Our Clients Say
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <CallToAction 
        title="Ready to Start Your Project?"
        description="Let's collaborate to create stunning designs that elevate your brand and help you stand out in the digital landscape."
        button={<Button to="/contact" children="Get in Touch" />}
      />
    </div>
  )
}