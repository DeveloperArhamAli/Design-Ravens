import { ChevronRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"  

function ProjectCard({
    keyProp,
    title,
    category,
    description,
    image
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                <div className="aspect-[16/9] relative overflow-hidden">

                    <div className="absolute inset-0">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/80 to-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                        <button className="bg-white text-[#050816] hover:bg-white/90 rounded-full flex items-center px-3 py-2 cursor-pointer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                        </button>

                    </div>

                </div>

                <div className="p-6">

                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{category}</p>
                    <p className="text-white/70 text-sm mb-4">{description}</p>

                    <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                        View Case Study
                        <ChevronRight className="ml-1 size-4" />
                    </div>

                </div>

            </div>
        </motion.div>
    )
}
export default ProjectCard