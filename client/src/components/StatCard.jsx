import { motion } from 'framer-motion'

function StatCard({
    keyProp,
    number,
    label,
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                {number}
            </div>
            <div className="text-white/70">{label}</div>
        </motion.div>
    )
}
export default StatCard