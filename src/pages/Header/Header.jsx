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
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-primary">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <span>{item.name}</span>
                    <ChevronRight
                      className={`h-4 w-4 ${
                        activeSection === item.href.substring(1) ? "text-primary" : "text-gray-400 dark:text-gray-500"
                      }`}
                    />
                  </motion.a>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Contact
                </a>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="text-sm font-medium text-gray-500 hover:text-primary"
                >
                  Back to top
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
