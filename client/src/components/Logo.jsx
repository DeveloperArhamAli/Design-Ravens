import { Link } from "react-router-dom"
import logo from  "../assets/images/rareteck logo@3x.png"

function Logo() {
    return (
        <Link to="/">
            <img src={logo} alt="logo" className="w-36" />
        </Link>
    )
}
export default Logo