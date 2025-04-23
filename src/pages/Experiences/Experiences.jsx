"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"

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
    width: "250px",
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
    width: "80px",
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
    width: "120px",
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
    width: "80px",
  },
]

export default function Experiences() {
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
              Parcours professionnel
            </div>
            <h2 className="text-3xl font-bold mb-4">Expériences</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Voici un résumé rapide de mes expériences les plus récentes :
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary to-gray-800/30 z-0 hidden md:block" />

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative z-10"
            >
              <div className="flex items-center justify-center mb-4 md:hidden">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>

              <Card
                className={`border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 ${
                  index % 2 === 0 ? "md:mr-[50%]" : "md:ml-[50%]"
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Timeline dot - only visible on desktop */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-800" />
                    </div>

                    {/* Logo and Date Section */}
                    <div className="md:w-1/3 p-6 bg-gray-50 dark:bg-gray-900 flex flex-col">
                      <div className="flex justify-center mb-6">
                        <div className="h-20 flex items-center">
                          <img
                            src={experience.logo || "/placeholder.svg"}
                            alt={experience.company}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.dateRange}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">{experience.role}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{experience.company}</p>
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
