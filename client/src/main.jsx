import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PortfolioPage from "./pages/PortfolioPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutUsPage />
      },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/pricing",
        element: <PricingPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />
      },
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
