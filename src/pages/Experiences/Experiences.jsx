"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Terminal, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const experienceData = [
  {
    logo: "/UM6SS-logo.png",
    company: "Université Mohammed VI des Sciences et de la Santé",
    role: "Technicien en Systèmes d'Information (SI)",
    description: [
      "Développé une application pour automatiser l'ajout des étudiants sur Canvas et l'envoi des emails en Python",
      "Réalisé une application de gestion des tickets pour l'équipe SI en React.js & Laravel & MYSQL.",
      "Implémenté et déployé une application permettant aux étudiants d'accéder à leurs examens Evalbox en cas de panne d'Outlook. En React, Laravel, MySQL",
    ],
    dateRange: "Juillet 2024 - Présent",
    tech: ["Python", "React.js", "Laravel", "MySQL"],
  },
  {
    logo: "/X-capital-logo.png",
    company: "X Capital",
    role: "Développeur Full-Stack & Designer UI/UX",
    description: [
      "Conception et développement d'interfaces réactives avec React.js.",
      "Utilisation des méthodes Agile pour améliorer la productivité de l'équipe.",
      "Création de prototypes UI/UX avec Figma.",
    ],
    dateRange: "Mars 2024 – Juin 2024",
    tech: ["React.js", "Figma", "Agile"],
  },
  {
    logo: "/My-Coach-Logo.svg",
    company: "My Coach",
    role: "Cofondateur & Directeur Technique",
    description: [
      "Recrutement & encadrement des équipes techniques.",
      "Supervision des décisions techniques et architecture logicielle.",
    ],
    dateRange: "Avril 2024 – Présent",
    tech: ["Architecture", "Leadership", "Team Management"],
  },
  {
    logo: "/cad_ista_hayhassani1_logo.png",
    company: "Ofppt",
    role: "Président",
    description: [
      "Organisation d'événements communautaires pour améliorer la participation des membres.",
      "Renforcement des compétences en leadership et gestion d'équipe pour les membres du comité.",
      "Gestion des ressources et du budget pour garantir le bon déroulement des événements.",
      "Amélioration de l'engagement des membres à travers des initiatives innovantes et participatives.",
    ],
    dateRange: "Septembre 2022 – Juin 2024",
    tech: ["Event Management", "Leadership", "Budget Planning"],
  },
]

export default function Experiences() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section id="experiences" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {t ? t("experiences.title") : "Parcours professionnel"}
            </div>
            <h2 className="text-3xl font-bold mb-4">{t ? t("experiences.subtitle") : "Expériences"}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t ? t("experiences.description") : "Voici un résumé rapide de mes expériences les plus récentes :"}
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Terminal-like container */}
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            {/* Terminal header */}
            <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm font-mono text-gray-600 dark:text-gray-400">
                career_history.sh
              </div>
              <Terminal className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono">
              <div className="flex items-center mb-4">
                <span className="text-green-600 dark:text-green-400">$</span>
                <span className="ml-2 text-primary">./show_experience.sh</span>
              </div>

              <div className="space-y-8">
                {experienceData.map((experience, index) => (
                  <motion.div
                    key={index}
                    ref={index === 0 ? ref : null}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="pl-6 border-l-2 border-gray-300 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-2">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      <span className="text-primary font-bold">{experience.role}</span>
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-800 p-1 mr-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={experience.logo || "/placeholder.svg"}
                          alt={experience.company}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{experience.company}</span>
                      <span className="mx-2 text-gray-400">|</span>
                      <Calendar className="h-3 w-3 text-gray-500 mr-1" />
                      <span className="text-xs text-gray-500">{experience.dateRange}</span>
                    </div>

                    <div className="mb-3">
                      {experience.description.map((item, i) => (
                        <div key={i} className="flex items-start mb-2">
                          <span className="text-gray-400 mr-2">$</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {experience.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 text-xs rounded bg-primary/10 text-primary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center mt-6">
                <span className="text-green-600 dark:text-green-400">$</span>
                <span className="ml-2 text-gray-400 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
