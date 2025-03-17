import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

function PricingComponent({
    name,
    price,
    description,
    features = [],
}) {

    const [expanded, setExpanded] = useState(false)
    const [needsExpansion, setNeedsExpansion] = useState(false)
    const featuresRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        if (featuresRef.current && containerRef.current) {
        const featuresHeight = featuresRef.current.scrollHeight
        const containerHeight = 180
        setNeedsExpansion(featuresHeight > containerHeight)
        }
    }, [features])
    
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg h-fit" ref={containerRef}>
            <div className="p-7">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{name}</h3>
            <div className="mb-4">
                <span className="text-4xl font-bold text-gray-800">${price}</span>
            </div>
            <p className="text-gray-600 mb-6 border-b pb-1 border-b-gray-400">{description}</p>

            <div ref={featuresRef} className={`space-y-3 overflow-hidden transition-all duration-300 flex-grow ${!expanded && needsExpansion ? "max-h-[180px]" : "max-h-[1000px]"}`}>
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li className="flex items-start" key={index}>
                        <Check className="text-blue-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {needsExpansion && (
                <button onClick={() => setExpanded(!expanded)} className="text-blue-600 font-medium flex items-center justify-center mb-6 hover:text-blue-800 transition-colors">
                    {expanded ? (
                    <>
                        Show Less <ChevronUp size={16} className="ml-1" />
                    </>
                    ) : (
                    <>
                        Show More <ChevronDown size={16} className="ml-1" />
                    </>
                    )}
                </button>
            )}

            <Link
                to="/contact"
                className="block w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 rounded-md font-medium transition-colors"
            >
                Get Started
            </Link>
            </div>
        </div>
    )
}
export default PricingComponent