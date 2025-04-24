"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { ModeToggle } from "../mode-toggle/mode-toggle"
import { LanguageToggle } from "../language-toggle/language-toggle"

export default function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const fullNameRef = useRef(null)
  const [fullNameWidth, setFullNameWidth] = useState(0)

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.expertise"), href: "#expertise" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experiences" },
    { name: t("nav.volunteering") || "Volunteering", href: "#volunteering" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.certifications"), href: "#certifications" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  // Measure the full name width after render
  useEffect(() => {
    if (fullNameRef.current) {
      setFullNameWidth(fullNameRef.current.offsetWidth)
    }
  }, [isLogoHovered])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)

    if (element) {
      // Close mobile menu if open
      setMobileMenuOpen(false)

      // Smooth scroll to the element
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })

      // Update active section
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Animated Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="relative overflow-visible font-bold text-xl"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <div className="flex items-center">
            <div className="relative flex items-center">
              <span className="text-primary">&lt;</span>

              <div
                className="relative overflow-visible inline-flex"
                style={{ minWidth: isLogoHovered ? fullNameWidth : "auto" }}
              >
                {/* Short version (AO) - hidden when hovered */}
                <motion.span
                  className="bg-gradient-to-r from-primary to-gray-800 bg-clip-text text-transparent"
                  animate={{
                    opacity: isLogoHovered ? 0 : 1,
                    display: isLogoHovered ? "none" : "inline",
                  }}
                  transition={{ duration: 0.1 }}
                >
                  AO
                </motion.span>

                {/* Full name version - shown when hovered */}
                <motion.span
                  ref={fullNameRef}
                  className="bg-gradient-to-r from-primary to-gray-800 bg-clip-text text-transparent whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: isLogoHovered ? 1 : 0,
                    width: isLogoHovered ? "auto" : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  Anas Oudadsse
                </motion.span>
              </div>

              <span className="text-primary">/&gt;</span>
            </div>
          </div>

          {/* Underline animation */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-gray-800"
            initial={{ width: 0 }}
            animate={{ width: isLogoHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-primary dark:text-primary"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className="flex items-center space-x-1 ml-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <div className="flex items-center space-x-2 mr-2">
            <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-md">
              <LanguageToggle />
            </div>
            <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-md">
              <ModeToggle />
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none bg-gray-100 dark:bg-gray-800"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center px-6 py-4 text-base font-medium transition-colors group ${
                      activeSection === item.href.substring(1)
                        ? "text-primary dark:text-primary bg-gray-100 dark:bg-gray-800"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <ChevronRight
                      className={`mr-2 h-4 w-4 transition-transform ${
                        activeSection === item.href.substring(1) ? "text-primary" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
