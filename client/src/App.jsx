import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"

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