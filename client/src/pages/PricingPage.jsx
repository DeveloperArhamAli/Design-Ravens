import { PageHeader, TextOverlay, Button, PricingCard, FaqCard, CallToAction } from "../components/index"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      description: "Perfect for small businesses just getting started.",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly design",
        "1 month of support",
      ],
      color: "from-cyan-500 to-cyan-700",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Ideal for growing businesses with specific needs.",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Content management system",
        "E-commerce integration (up to 50 products)",
        "Social media integration",
        "3 months of support",
      ],
      color: "from-cyan-500 to-purple-700",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$4,999+",
      description: "Comprehensive solution for established businesses.",
      features: [
        "Custom website with unlimited pages",
        "Premium SEO optimization",
        "Advanced e-commerce functionality",
        "Custom integrations",
        "Performance optimization",
        "6 months of priority support",
      ],
      color: "from-purple-500 to-purple-700",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What is included in the website design package?",
      answer:
        "Our website design packages include custom design, responsive development, basic SEO optimization, contact form integration, and training on how to update your website content.",
    },
    {
      question: "How long does it take to complete a website?",
      answer:
        "The timeline varies depending on the complexity of the project. A basic website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "You can upgrade your plan at any time as your business grows and your needs evolve.",
    },
  ]
  
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="fixed bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.05] z-0"></div>

      <PageHeader title="Pricing Plans" subtitle="Flexible pricing options to meet your specific needs and budget." />

      <section className="py-20 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <PricingCard key={i} keyProp={i} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">

            <TextOverlay children="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Find answers to common questions about our services and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FaqCard key={i} keyProp={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction 
        title="Need a Custom Solution?"
        description="Contact us for a personalized quote tailored to your specific requirements and business goals."
        button={<Button to="/contact" children="Request a Quote" />}
      />
    </div>
  )
}