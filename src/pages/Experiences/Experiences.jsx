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
      role: language === "fr" ? "Technicien en Systèmes d'Information (SI)" : "Information Systems (IS) Technician",
      description:
        language === "fr"
          ? [
              "Développé une application pour automatiser l'ajout des étudiants sur Canvas et l'envoi des emails en Python",
              "Réalisé une application de gestion des tickets pour l'équipe SI en React.js & Laravel & MYSQL.",
              "Implémenté et déployé une application permettant aux étudiants d'accéder à leurs examens Evalbox en cas de panne d'Outlook. En React, Laravel, MySQL",
            ]
          : [
              "Developed an application to automate student addition to Canvas and email sending in Python",
              "Created a ticket management application for the IS team using React.js, Laravel & MySQL",
              "Implemented and deployed an application allowing students to access their Evalbox exams in case of Outlook outage. Using React, Laravel, MySQL",
            ],
      dateRange: language === "fr" ? "Juillet 2024 - Présent" : "July 2024 - Present",
      tech: ["Python", "React", "Laravel", "MySQL"],
      darkLogo: true,
      width: "250px",
      height: "auto",
    },
    {
      logo: "/MyCoachNewLogo.png",
      company: "My Coach",
      role: language === "fr" ? "Cofondateur & Directeur Technique" : "Co-founder & Technical Director",
      description:
        language === "fr"
          ? [
              "Recrutement & encadrement des équipes techniques.",
              "Supervision des décisions techniques et architecture logicielle.",
            ]
          : [
              "Recruitment & management of technical teams",
              "Supervision of technical decisions and software architecture",
            ],
      dateRange: language === "fr" ? "Avril 2024 – Présent" : "April 2024 - Present",
      tech: ["Leadership", "Architecture"],
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
              "Conception et développement d'interfaces réactives avec React.js.",
              "Utilisation des méthodes Agile pour améliorer la productivité de l'équipe.",
              "Création de prototypes UI/UX avec Figma.",
            ]
          : [
              "Design and development of responsive interfaces with React.js",
              "Use of Agile methods to improve team productivity",
              "Creation of UI/UX prototypes with Figma",
            ],
      dateRange: language === "fr" ? "Mars 2024 – Juin 2024" : "March 2024 - June 2024",
      tech: ["React", "Figma", "Agile"],
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
    <section id="experiences" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {sectionTitle}
            </div>
            <h2 className="text-3xl font-bold mb-4">{sectionSubtitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{sectionDescription}</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
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
                  <div className="relative bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 translate-y-1/2 -translate-x-1/2 rounded-full"></div>

                    <div className="relative z-10 p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Logo and date */}
                        <div className="md:w-1/3 flex flex-col items-center md:items-start">
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
                          <div className="mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-md inline-block">
                            {experience.dateRange}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3">
                          <div className="relative">
                            {/* Title bar */}
                            <div className="absolute -left-4 top-0 h-full w-1 bg-primary rounded-full"></div>
                            <h3 className="text-xl font-bold pl-4 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                              {experience.role}
                            </h3>
                            <p className="text-primary pl-4 font-medium mb-6">{experience.company}</p>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {experience.description.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                                className="flex items-start group/item"
                              >
                                <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 mt-4">
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
