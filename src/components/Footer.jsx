import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#050816] text-white">
        <div className="text-purple-200 flex items-center justify-center py-4 z-50 text-center px-2.5">
          <p>Copyright &copy; {new Date().getFullYear()} by <Link to="/" className="text-cyan-400 font-bolder">Rare Teck</Link>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer