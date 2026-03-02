"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "../theme-provider/theme-provider"

export function Volunteering() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // OFPPT volunteering data
  const volunteeringData = [
    {
      logo: "/cad_ista_hayhassani1_logo.png",
      organization:
        language === "fr"
          ? "Club d'Animation et de Développement (CAD) – ISTA"
          : "Animation & Development Club (CAD) – ISTA",
      role: language === "fr" ? "Président" : "President",
      description:
        language === "fr"
          ? [
              "Organisation d'événements pour divers clubs étudiants, favorisant la collaboration et l'engagement communautaire.",
            ]
          : [
              "Organized events for various student clubs, fostering community collaboration and engagement.",
            ],
      dateRange: language === "fr" ? "Septembre 2022 – Juillet 2024" : "Sep 2022 - Jul 2024",
      skills: language === "fr" ? ["Leadership", "Gestion d'événements", "Animation communautaire"] : ["Leadership", "Event Management", "Community Building"],
      darkLogo: false,
      width: "80px",
      height: "auto",
    },
  ]

  // Translations for section titles
  const sectionTitle = language === "fr" ? "Engagement Communautaire" : "Community Involvement"
  const sectionSubtitle = language === "fr" ? "Bénévolat" : "Volunteering"
  const sectionDescription =
    language === "fr"
      ? "Mes contributions aux initiatives communautaires et éducatives :"
      : "My contributions to community and educational initiatives:"

  return (
    <section id="volunteering" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
          {volunteeringData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <div className="group relative">
                {/* Award indicator */}
                <div className="absolute -left-4 top-0 h-full hidden md:block">
                  <div className="sticky top-24 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="h-4 w-4" />
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
                        {/* Logo and date */}
                        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                          {/* Logo with custom width */}
                          <div className="relative mb-5 flex items-center justify-center">
                            <img
                              src={item.logo || "/placeholder.svg"}
                              alt={item.organization}
                              className={`object-contain ${
                                item.darkLogo && theme === "dark" ? "filter invert brightness-[.85] contrast-[1.1]" : ""
                              }`}
                              style={{
                                width: item.width || "100px",
                                height: item.height || "auto",
                              }}
                            />
                          </div>
                          {/* Date badge at the top */}
                          <div className="mb-4 px-4 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-md inline-block">
                            {item.dateRange}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 space-y-5">
                          <div className="relative">
                            {/* Title bar */}
                            <div className="absolute -left-4 top-0 h-full w-1 bg-primary rounded-full hidden md:block"></div>
                            <h3 className="text-lg sm:text-xl !text-gray-900 dark:!text-gray-100 font-bold md:pl-4 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                              {item.role}
                            </h3>
                            <p className="text-primary md:pl-4 font-medium text-sm sm:text-base">
                              {item.organization}
                            </p>
                          </div>

                          <ul className="space-y-3">
                            {item.description.map((desc, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                                className="flex items-start group/item text-left text-sm sm:text-base"
                              >
                                <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">{desc}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
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
