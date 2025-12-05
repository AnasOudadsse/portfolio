"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Languages as LanguagesIcon } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Languages() {
  const { language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Languages data
  const languagesData = [
    {
      name: language === "fr" ? "Anglais" : "English",
      level: "C1",
      levelDescription: language === "fr" ? "Avancé" : "Advanced",
    },
    {
      name: language === "fr" ? "Français" : "French",
      level: "B2",
      levelDescription: language === "fr" ? "Intermédiaire supérieur" : "Upper Intermediate",
    },
    {
      name: language === "fr" ? "Arabe" : "Arabic",
      level: language === "fr" ? "Natif" : "Native",
      levelDescription: language === "fr" ? "Langue maternelle" : "Native Speaker",
    },
  ]

  // Translations for section titles
  const sectionTitle = language === "fr" ? "Compétences linguistiques" : "Language Skills"
  const sectionSubtitle = language === "fr" ? "Langues" : "Languages"
  const sectionDescription =
    language === "fr"
      ? "Les langues que je parle :"
      : "Languages I speak:"

  const getLevelColor = (level) => {
    if (level === "C1" || level === "Native" || level === "Natif") {
      return "bg-green-500"
    } else if (level === "B2") {
      return "bg-blue-500"
    }
    return "bg-gray-400"
  }

  const getLevelWidth = (level) => {
    if (level === "C1" || level === "Native" || level === "Natif") {
      return "w-full"
    } else if (level === "B2") {
      return "w-4/5"
    }
    return "w-3/5"
  }

  return (
    <section id="languages" className="py-16 sm:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {sectionTitle}
            </div>
            <h2 className="text-3xl font-bold mb-4 !text-gray-900 dark:!text-gray-100">{sectionSubtitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{sectionDescription}</p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-md shadow-lg"
        >
          <div className="space-y-6">
            {languagesData.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <LanguagesIcon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {lang.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {lang.level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({lang.levelDescription})
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className={`h-full ${getLevelColor(lang.level)} rounded-full`}
                    style={{ width: lang.level === "C1" || lang.level === "Native" || lang.level === "Natif" ? "100%" : lang.level === "B2" ? "80%" : "60%" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

