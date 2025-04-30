import { Outlet } from "react-router-dom"
import { Navbar, Footer, Layout, CursorFollower } from "./components/index"

function App() {
    return (
      <div>
        <Navbar />
        <CursorFollower />
        <Layout>
          <Outlet />
        </Layout>
        <Footer />
      </div>
    )
}
export default App