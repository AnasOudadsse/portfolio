"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Education() {
  const { language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Education data
  const educationData = [
    {
      degree: language === "fr" 
        ? "Licence en Développement Internet et Mobile (Double Diplôme)"
        : "Bachelor's in Internet and Mobile Development (Double Degree)",
      institution: language === "fr"
        ? "ULCO (France) — ENSIT (Maroc)"
        : "ULCO (France) — ENSIT (Morocco)",
      dateRange: language === "fr" ? "Oct. 2024 - Juillet 2025" : "Oct. 2024 - July 2025",
      imgSrc: "/ulco-logo.png",
      width: "100px",
    },
    {
      degree: language === "fr"
        ? "Programme d'Ingénierie Logicielle"
        : "Software Engineering Program",
      institution: language === "fr"
        ? "Holberton School & ALX Africa"
        : "Holberton School & ALX Africa",
      dateRange: language === "fr" ? "Mai 2023 - Nov. 2024" : "May 2023 - Nov. 2024",
      imgSrc: "/alx-logo.png",
      width: "100px",
    },
    {
      degree: language === "fr"
        ? "Diplôme en Développement Full-Stack"
        : "Diploma in Full-Stack Development",
      institution: language === "fr"
        ? "Institut Spécialisé de Technologie Appliquée (ISTA), Casablanca"
        : "Institut Spécialisé de Technologie Appliquée (ISTA), Casablanca",
      dateRange: language === "fr" ? "Sep. 2022 - Juin 2024" : "Sep. 2022 - June 2024",
      imgSrc: "/logo-offpt.png",
      width: "100px",
    },
  ]

  // Translations for section titles
  const sectionTitle = language === "fr" ? "Formation académique" : "Academic Background"
  const sectionSubtitle = language === "fr" ? "Éducation" : "Education"
  const sectionDescription =
    language === "fr"
      ? "Mon parcours académique et mes formations :"
      : "My academic background and education:"

  return (
    <section id="education" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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

        <div className="max-w-4xl mx-auto space-y-10">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <div className="group relative">
                {/* Icon indicator */}
                <div className="absolute -left-4 top-0 h-full hidden md:block">
                  <div className="sticky top-24 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className="ml-0 md:ml-8 relative">
                  <div className="relative bg-white dark:bg-gray-800 overflow-hidden rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 translate-y-1/2 -translate-x-1/2 rounded-full"></div>

                    <div className="relative z-10 p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                        {/* Logo and Date badge */}
                        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                          {/* Logo */}
                          <div className="mb-4 flex items-center justify-center">
                            <img
                              src={education.imgSrc || "/placeholder.svg"}
                              alt={education.institution}
                              className="object-contain"
                              style={{
                                width: education.width || "120px",
                                height: "auto",
                              }}
                            />
                          </div>
                          {/* Date badge */}
                          <div className="px-4 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-md inline-block">
                            {education.dateRange}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 space-y-5">
                          <div className="relative">
                            {/* Title bar */}
                            <div className="absolute -left-4 top-0 h-full w-1 bg-primary rounded-full hidden md:block"></div>
                            <h3 className="text-lg sm:text-xl font-bold !text-gray-900 dark:!text-gray-100 md:pl-4 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                              {education.degree}
                            </h3>
                            <p className="text-primary md:pl-4 font-medium text-sm sm:text-base">
                              {education.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

