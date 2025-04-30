import { Check, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function PricingCard({
    keyProp,
    popular,
    color,
    name,
    price,
    description,
    features = [],
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="relative">
            {popular && (
                <div className="absolute -top-7 left-0 right-0 flex justify-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                    Most Popular
                </div>
                </div>
            )}
            <div
                className={`h-full bg-white/5 backdrop-blur-md border ${popular ? "border-gradient-to-r from-cyan-400/50 to-purple-400/50" : "border-white/10"} rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
            >
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <div className="mb-4">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    {price}
                </span>
                </div>
                <p className="text-white/70 mb-6">{description}</p>
                <ul className="space-y-3 mb-8">
                {features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                    <div
                        className={`flex-shrink-0 size-5 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mt-0.5`}
                    >
                        <Check className="size-3 text-white" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                    </li>
                ))}
                </ul>
                <Link to="/contact">
                    <button
                    className={`w-full bg-gradient-to-r ${popular ? "from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]" : "from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/10"} text-white rounded-full py-3 cursor-pointer flex items-center justify-center`}
                    >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}
export default PricingCard