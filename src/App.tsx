import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import PortfolioPage from "./pages/Portfolio"

export default function App() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
} 