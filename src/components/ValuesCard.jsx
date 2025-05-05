import { motion } from 'framer-motion'

function ValuesCard({
    icon,
    color,
    title,
    description,
    keyProp
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="group">
            <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className={`flex items-center justify-center size-14 rounded-full mb-6 bg-gradient-to-br ${color}`}>
                    <div className="text-white">{icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-white/70">{description}</p>
            </div>
        </motion.div>
    )
}
export default ValuesCard