import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import Aos from "aos"
import "aos/dist/aos.css"
Aos.init()

function App() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Outlet />
        </Layout>
        <Footer />
      </div>
    )
}
export default App