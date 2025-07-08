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
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

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
                  className="!text-gray-900 dark:!text-gray-100"
                  animate={{
                    opacity: isLogoHovered ? 0 : 1,
                    display: isLogoHovered ? "none" : "inline",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  AO
                </motion.span>

                {/* Full name version - shown when hovered */}
                <motion.span
                  ref={fullNameRef}
                  className="!text-gray-900 dark:!text-gray-100 whitespace-nowrap"
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

        {/* Mobile Controls */}
        {hasMounted && (
        <div className="flex items-center md:hidden">
          {/* Language and Theme Toggles */}
          <div className="flex items-center mr-4">
            <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md mr-2">
              <LanguageToggle />
            </div>
            <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md">
              <ModeToggle />
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="menu-button focus:outline-none bg-primary hover:bg-primary/90 text-white"
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
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
        )}

      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="mobile-menu fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-white dark:bg-gray-900 z-50 md:hidden shadow-xl overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-bold text-primary">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center px-6 py-4 text-base font-medium transition-colors border-l-4 ${
                        activeSection === item.href.substring(1)
                          ? "border-primary text-primary dark:text-primary bg-gray-50 dark:bg-gray-800"
                          : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      <ChevronRight
                        className={`mr-3 h-4 w-4 ${
                          activeSection === item.href.substring(1) ? "text-primary" : "text-gray-400 dark:text-gray-600"
                        }`}
                      />
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Menu Footer */}
              <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-center space-x-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="text-primary hover:underline"
                  >
                    Contact
                  </a>
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                  <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-primary hover:underline">
                    Home
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
