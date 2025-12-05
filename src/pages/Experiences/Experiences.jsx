"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "../theme-provider/theme-provider"

export default function Experiences() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Professional experiences data (excluding OFPPT which is in volunteering)
  const experienceData = [
    {
      logo: "/UM6SS-logo.png",
      company:
        language === "fr"
          ? "Université Mohammed VI des Sciences et de la Santé"
          : "Mohammed VI University of Health Sciences",
      role: language === "fr" ? "Technicien en Systèmes d'Information" : "Information Systems Technician",
      description:
        language === "fr"
          ? [
              "Analyse des besoins et livraison full-stack de 6 projets de digitalisation (développement, déploiement, amélioration des processus, maintenance et support utilisateurs) à travers 5 villes et 7 campus.",
              "Stages-UM6SS : Digitalisation complète du processus de gestion des stages. (React.js, Laravel, MySQL)",
              "E-Portfolio : Plateforme de documentation académique. (React.js, Node.js, MySQL)",
              "Photo-UM6SS : Application d'inscription intégrée avec l'API BIOSTAR2, automatisant la création d'utilisateurs et l'upload de photos vers le système et OneDrive. (React.js, Laravel, MySQL)",
              "Absences : Suivi des absences (cours/examens), interfacé avec Biostar2. (Laravel, API Biostar2)",
              "Evalbox-Logins : Solution permettant aux étudiants d'accéder à leurs examens Evalbox via QR code lors des pannes Outlook. (React.js, Laravel, MySQL)",
              "Évaluations-Classes : Génération automatisée de Google Forms et QR codes pour les évaluations des classes. (Python, Tkinter, Google APIs)",
            ]
          : [
              "Requirement analysis and full-stack delivery of 6 digitalization projects (development, deployment, process improvement, maintenance, and user support) across 5 cities and 7 campuses.",
              "Stages-UM6SS - Complete digitalization of the internship management process. (React.js, Laravel, MySQL)",
              "E-Portfolio - Academic documentation platform. (React.js, Node.js, MySQL)",
              "Photo-UM6SS - Enrollment application integrated with BIOSTAR2 API, automating user creation and photo upload to the system and OneDrive. (React.js, Laravel, MySQL)",
              "Absences - Tracking of absences (classes/exams), interfaced with Biostar2. (Laravel, API Biostar2)",
              "Evalbox-Logins - A solution for students to access their Evalbox exams via QR code during Outlook failures. (React.js, Laravel, MySQL)",
              "Évaluations-Classes - Automated generation of Google Forms and QR codes for classes evaluations. (Python, Tkinter, Google APIs)",
            ],
      dateRange: language === "fr" ? "Juillet 2024 - Présent" : "Since July 2024",
      tech: ["React.js", "Laravel", "MySQL", "Node.js", "Python", "REST API", "Google APIs"],
      darkLogo: true,
      width: "250px",
      height: "auto",
    },
    {
      logo: "/MyCoachNewLogo.png",
      company: "My Coach",
      role: language === "fr" ? "Cofondateur & Directeur Technique" : "Co-Founder & CTO",
      description:
        language === "fr"
          ? [
              "Plateforme SaaS connectant les coachs sportifs et leurs clients.",
              "J'ai supervisé la conception, le développement et le lancement (go-to-market) de la plateforme, tout en gérant les décisions stratégiques et la supervision d'équipe.",
            ]
          : [
              "SaaS platform connecting sports coaches and clients.",
              "I oversaw the design, development, and launch (go-to-market) of the platform, while managing strategic decisions and team supervision.",
            ],
      dateRange: language === "fr" ? "Avril 2024 – Présent" : "Since April 2024",
      tech: ["Leadership", "Architecture", "Entrepreneurship", "SaaS"],
      darkLogo: false,
      width: "120px",
      height: "auto",
    },
    {
      logo: "/X-capital-logo.png",
      company: "X Capital",
      role: language === "fr" ? "Développeur Full-Stack & Designer UI/UX" : "Full-Stack Developer & UI/UX Designer",
      description:
        language === "fr"
          ? [
              "Conception complète du système UI/UX. (Figma)",
              "Développement d'interfaces réactives et intégration d'API. (React.js)",
            ]
          : [
              "Designed complete UI/UX system. (Figma)",
              "Built responsive interfaces & API integration. (React.js)",
            ],
      dateRange: language === "fr" ? "Mars 2024 – Juin 2024" : "March 2024 - June 2024",
      tech: ["React", "Figma", "UI/UX Design"],
      darkLogo: true,
      width: "80px",
      height: "auto",
    },

  ]

  // Translations for section titles
  const sectionTitle = language === "fr" ? "Parcours professionnel" : "Professional journey"
  const sectionSubtitle = language === "fr" ? "Expériences" : "Experiences"
  const sectionDescription =
    language === "fr"
      ? "Voici un résumé rapide de mes expériences les plus récentes :"
      : "Here's a quick summary of my most recent experiences:"

  return (
    <section id="experiences" className="py-16 sm:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 !text-gray-900 dark:!text-gray-100 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {sectionTitle}
            </div>
            <h2 className="text-3xl font-bold mb-4 !text-gray-900 dark:!text-gray-100">{sectionSubtitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{sectionDescription}</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <div className="group relative">
                {/* Year indicator */}
                <div className="absolute -left-4 top-0 h-full hidden md:block">
                  <div className="sticky top-24 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Calendar className="h-4 w-4" />
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
                              src={experience.logo || "/placeholder.svg"}
                              alt={experience.company}
                              className={`object-contain ${
                                experience.darkLogo && theme === "dark"
                                  ? "filter invert brightness-[.85] contrast-[1.1]"
                                  : ""
                              }`}
                              style={{
                                width: experience.width || "100px",
                                height: experience.height || "auto",
                              }}
                            />
                          </div>
                          {/* Date badge at the top */}
                          <div className="mb-4 px-4 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-md inline-block">
                            {experience.dateRange}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 space-y-5">
                          <div className="relative">
                            {/* Title bar */}
                            <div className="absolute -left-4 top-0 h-full w-1 bg-primary rounded-full hidden md:block"></div>
                            <h3 className="text-lg sm:text-xl font-bold !text-gray-900 dark:!text-gray-100 md:pl-4 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                              {experience.role}
                            </h3>
                            <p className="text-primary md:pl-4 font-medium text-sm sm:text-base">
                              {experience.company}
                            </p>
                          </div>

                          <ul className="space-y-3">
                            {experience.description.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                                className="flex items-start group/item text-left text-sm sm:text-base"
                              >
                                <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {experience.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                              >
                                {tech}
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
