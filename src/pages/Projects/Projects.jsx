"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Play } from "lucide-react"
import { Link } from 'react-router-dom';

const projectsData = [
  {
    title: "Blood-Nation",
    description:
      "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",
    tags: ["React", "Tailwindcss", "Laravel", "MySQL", "Github", "Chakra UI"],
    videoSrc: "/blood-nation-demo.webm",
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
    externalLink: null,
  },
  {
    title: "Ticketing App",
    description:
      "Ticketing App est une plateforme de gestion des tickets destinée au support IT en entreprise. Elle permet de centraliser les demandes, d'optimiser le suivi des incidents et d'automatiser leur traitement en fonction des priorités. Grâce à une interface intuitive, les équipes IT peuvent gérer efficacement les requêtes, améliorer la réactivité et assurer un meilleur service aux utilisateurs.",
    videoSrc: "/ticketing-app-demo.webm",
    tags: ["React", "Chakra UI", "Node.js", "MongoDB", "Git"],
    repoLink: "https://github.com/AnasOudadsse/myCoach",
    externalLink: null,
  },
  {
    title: "X Capital (UI/UX)",
    description:
      "Un exemple de travail en UI/UX réalisé pour X Capital, axé sur la création de pages d'accueil réactives et visuellement attrayantes. Utilisant Figma, le projet met en évidence une attention particulière aux détails et un accent sur l'optimisation de l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",
    imageSrc: "/Hero.png",
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd",
    repoLink: null,
  },
  {
    title: "Simple Shell",
    description:
      "Un projet de programmation système en C visant à développer un interpréteur de commandes inspiré des shells UNIX. Ce projet met en évidence la gestion des processus, l'exécution de commandes et la manipulation des entrées/sorties, tout en respectant les principes fondamentaux des systèmes d'exploitation.",
    imageSrc: "/Ans-dev.png",
    tags: ["C", "Shell", "UNIX", "Programmation Système"],
    externalLink: null,
    repoLink: "https://github.com/AnasOudadsse/_simple_shell",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const openVideoDialog = (videoSrc) => {
    setCurrentVideo(videoSrc)
    setVideoDialogOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold mb-4">Projets</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets les plus remarquables.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <Card className="overflow-hidden border-0 shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Media Section */}
                    <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-[300px] flex items-center justify-center">
                      {project.videoSrc ? (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-16 h-16 rounded-md bg-white/20 hover:bg-white/30 text-white transform transition-transform duration-300 group-hover:scale-110"
                              onClick={() => openVideoDialog(project.videoSrc)}
                            >
                              <Play className="h-8 w-8" />
                            </Button>
                          </div>
                          <video
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            muted
                            loop
                            playsInline
                            autoPlay
                          >
                            <source src={project.videoSrc} type="video/webm" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <img
                          src={project.imageSrc || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-6 lg:p-8">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.repoLink && (
                          <Button asChild variant="outline" size="sm" className="rounded-md group">
                            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                              GitHub
                            </Link>
                          </Button>
                        )}
                        {project.externalLink && (
                          <Button asChild variant="outline" size="sm" className="rounded-md group">
                            <Link href={project.externalLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                              Voir le projet
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-0">
          <video controls autoPlay className="w-full h-auto">
            <source src={currentVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}
