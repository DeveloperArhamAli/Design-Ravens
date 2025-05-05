import { motion } from "framer-motion"

export default function PageHeader({
    title,
    subtitle
}) {
    return (
        <section className="pt-32 pb-16 relative">
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#22d3ee]/0 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/0 blur-[100px]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                {title}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
            </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </section>
    )
}