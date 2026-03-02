"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/Components/ui/button"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { ModeToggle } from "../mode-toggle/mode-toggle"
import { LanguageToggle } from "../language-toggle/language-toggle"

export default function Header() {
  const { t, language } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const fullNameRef = useRef(null)
  const [fullNameWidth, setFullNameWidth] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [expandedMobileGroup, setExpandedMobileGroup] = useState(null)
  const dropdownTimeoutRef = useRef(null)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    {
      name: language === "fr" ? "Compétences" : "Skills",
      children: [
        { name: t("nav.expertise"), href: "#expertise" },
        { name: t("nav.skills"), href: "#skills" },
      ],
    },
    {
      name: language === "fr" ? "Parcours" : "Background",
      children: [
        { name: t("nav.experience"), href: "#experiences" },
        { name: t("nav.education") || "Education", href: "#education" },
        { name: t("nav.volunteering") || "Volunteering", href: "#volunteering" },
      ],
    },
    { name: t("nav.projects"), href: "#projects" },
    {
      name: language === "fr" ? "Plus" : "More",
      children: [
        { name: t("nav.certifications"), href: "#certifications" },
        { name: t("nav.languages") || "Languages", href: "#languages" },
        { name: t("nav.recommendations") || "Recommendations", href: "#recommendations" },
      ],
    },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const allSections = navItems.flatMap((item) =>
    item.children ? item.children.map((c) => c.href.substring(1)) : [item.href.substring(1)]
  )

  useEffect(() => {
    if (fullNameRef.current) {
      setFullNameWidth(fullNameRef.current.offsetWidth)
    }
  }, [isLogoHovered])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const scrollPosition = window.scrollY + 100
      for (let i = allSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(allSections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allSections[i])
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
      setMobileMenuOpen(false)
      setOpenDropdown(null)
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(targetId)
    }
  }

  const isGroupActive = (item) => {
    if (!item.children) return activeSection === item.href.substring(1)
    return item.children.some((c) => activeSection === c.href.substring(1))
  }

  const handleDropdownEnter = (name) => {
    clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(name)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setMobileMenuOpen(false)
      }
      if (openDropdown && !event.target.closest(".nav-dropdown")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen, openDropdown])

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

          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-gray-800"
            initial={{ width: 0 }}
            animate={{ width: isLogoHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative nav-dropdown"
                onMouseEnter={() => handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`relative px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                    isGroupActive(item)
                      ? "text-primary dark:text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                  {isGroupActive(item) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 min-w-[180px] py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            activeSection === child.href.substring(1)
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary"
                          }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            )
          )}
          <div className="flex items-center space-x-1 ml-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Controls */}
        {hasMounted && (
        <div className="flex items-center md:hidden">
          <div className="flex items-center mr-4">
            <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md mr-2">
              <LanguageToggle />
            </div>
            <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md">
              <ModeToggle />
            </div>
          </div>

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
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden mobile-menu"
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

              <div className="grid gap-1">
                {navItems.map((item, index) =>
                  item.children ? (
                    <div key={item.name}>
                      <motion.button
                        onClick={() =>
                          setExpandedMobileGroup(
                            expandedMobileGroup === item.name ? null : item.name
                          )
                        }
                        className={`flex items-center justify-between w-full rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isGroupActive(item)
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedMobileGroup === item.name ? "rotate-180" : ""
                          } ${
                            isGroupActive(item) ? "text-primary" : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {expandedMobileGroup === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-1 space-y-1">
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  onClick={(e) => handleNavClick(e, child.href)}
                                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                                    activeSection === child.href.substring(1)
                                      ? "bg-primary/10 text-primary"
                                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                  }`}
                                >
                                  <span>{child.name}</span>
                                  <ChevronRight
                                    className={`h-3.5 w-3.5 ${
                                      activeSection === child.href.substring(1) ? "text-primary" : "text-gray-400"
                                    }`}
                                  />
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
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
                  )
                )}
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
