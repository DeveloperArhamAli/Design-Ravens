import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2 z-50">
            <div className="relative flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">RARE</span>
                <span className="text-2xl font-bold text-white">TECK</span>
                <div className="absolute -top-1 -right-3 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"></div>
            </div>
        </Link>
    )
}
export default Logo