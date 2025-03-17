import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import WebDesign from './pages/services/WebDesign.jsx'
import Portfolio from "./pages/Portfolio.jsx"
import LogoDesign from './pages/services/LogoDesign.jsx'
import Branding from './pages/services/Branding.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/services/web-design",
        element: <WebDesign />
      },
      {
        path: "/services/logo-and-branding",
        element: <LogoDesign />
      },
      {
        path: "/services/branding",
        element: <Branding />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
