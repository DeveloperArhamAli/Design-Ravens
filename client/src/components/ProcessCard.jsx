import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function ProcessCard({
    stepNumber,
    stepTitle,
    stepDescription,
    keyProp,
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="relative">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">{stepNumber}</div>
                <h3 className="text-xl font-bold mb-3">{stepTitle}</h3>
                <p className="text-white/70">{stepDescription}</p>
            </div>
            {keyProp < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ChevronRight className="size-6 text-cyan-400" />
                </div>
            )}
        </motion.div>
    )
}
export default ProcessCard