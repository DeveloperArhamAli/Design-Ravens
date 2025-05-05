import { motion } from 'framer-motion'

function FaqCard({
    keyProp,
    question,
    answer
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="mb-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <h3 className="text-xl font-bold mb-3">{question}</h3>
                <p className="text-white/70">{answer}</p>
            </div>
        </motion.div>
    )
}
export default FaqCard