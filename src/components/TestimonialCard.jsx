import { motion } from 'framer-motion'

function TestimonialCard({
    name,
    designation,
    image,
    message,
    keyProp
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className="size-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden">
                        <img src={image} alt={name} className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="text-cyan-400 text-sm">{designation}</p>
                    </div>
                </div>
                <p className="text-white/70 italic">"{message}"</p>
            </div>
        </motion.div>
    )
}
export default TestimonialCard