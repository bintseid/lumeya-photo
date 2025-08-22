import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    document.documentElement.classList.toggle('light-theme')
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-300 ${
      isDarkTheme
        ? "text-white/80 hover:text-white"
        : "text-gray-700 hover:text-gray-900"
    } ${isActive ? (isDarkTheme ? "text-white" : "text-gray-900") : ""}`

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
      isDarkTheme ? 'bg-black/70 border-[hsl(var(--border))]' : 'bg-white/70 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo1.png" alt="Lumeya Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <a href="/#contact" className={navLinkClass}>
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={toggleTheme}
              variant="ghost" 
              size="icon"
              className={`w-10 h-10 rounded-full ${
                isDarkTheme ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:opacity-90 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
            <button
              className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border ${
                isDarkTheme ? 'border-[hsl(var(--border))] bg-black/50 text-white' : 'border-gray-200 bg-white/50 text-gray-800'
              }`}
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t ${
          isDarkTheme ? 'border-[hsl(var(--border))] bg-black/80' : 'border-gray-200 bg-white/80'
        }`}>
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>
              Portfolio
            </NavLink>
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className={isDarkTheme ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"}>
              Contact
            </a>
            <Button asChild onClick={() => setIsMobileMenuOpen(false)} className="mt-2 bg-accent text-accent-foreground hover:opacity-90">
              <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
