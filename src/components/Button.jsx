import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

function Button({
    children,
    className,
    to,
    type = "button",
    disabled,
}) {
    return (
        <Link to={to}>
            <button className={`bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 cursor-pointer flex items-center ${className}`} type={type} disabled={disabled}>{children}
                <ChevronRight className="ml-2 h-5 w-5" />
            </button>
        </Link>
    )
}
export default Button