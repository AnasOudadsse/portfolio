"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative h-9 w-12 rounded-full focus-visible:ring-0 px-2"
      aria-label="Toggle language"
    >
      <span className="sr-only">Toggle language</span>
      <motion.div
        initial={false}
        animate={{ x: language === "en" ? 12 : 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className={`text-sm font-medium ${language === "fr" ? "opacity-100" : "opacity-30"}`}>FR</span>
        <span className="mx-1">/</span>
        <span className={`text-sm font-medium ${language === "en" ? "opacity-100" : "opacity-30"}`}>EN</span>
      </motion.div>
    </Button>
  )
}
