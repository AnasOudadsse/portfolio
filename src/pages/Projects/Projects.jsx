"use client"

import { useRef, useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Play, X, ChevronRight, Code, Layers, PenTool, Camera, LifeBuoy, ShieldCheck } from "lucide-react"
import { Link } from 'react-router-dom';
import { useLanguage } from "@/context/language-context"

const projectsData = [
  {
    title: {
      en: "Stages-UM6SS",
      fr: "Stages-UM6SS",
    },
    description: {
      en: "Complete digitalization of the internship management process. Full-stack development with React.js, Laravel, and MySQL, automating evaluations and reporting for thousands of students across multiple campuses.",
      fr: "Digitalisation complète du processus de gestion des stages. Développement full-stack avec React.js, Laravel et MySQL, automatisant l'évaluation et le suivi de milliers d'étudiants à travers plusieurs campus.",
    },
    imageSrc: "/HomePage.jpg",
    tags: ["React.js", "Laravel", "MySQL", "Product Ownership", "Deployment"],
    externalLink: null,
    repoLink: null,
    color: "from-indigo-500/20 to-blue-600/20",
    iconColor: "text-indigo-500",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: {
      en: "E-Portfolio",
      fr: "E-Portfolio",
    },
    description: {
      en: "Academic documentation platform developed with React.js, Node.js, and MySQL. Helps students centralize their achievements while providing faculty with real-time insights and documentation management.",
      fr: "Plateforme de documentation académique développée avec React.js, Node.js et MySQL. Permet aux étudiants de centraliser leurs réussites tout en offrant aux encadrants des indicateurs en temps réel et une gestion de la documentation.",
    },
    imageSrc: "/HomePage.jpg",
    tags: ["React.js", "Node.js", "MySQL", "Product Management", "UI/UX"],
    externalLink: null,
    repoLink: null,
    color: "from-sky-500/20 to-cyan-500/20",
    iconColor: "text-sky-500",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    title: {
      en: "Photo-UM6SS",
      fr: "Photo-UM6SS",
    },
    description: {
      en: "Enrollment application integrated with BIOSTAR2 API, automating user creation and photo upload to the system and OneDrive. Deployed across 5 cities and 7 campuses, handling thousands of new student enrollments.",
      fr: "Application d'inscription intégrée avec l'API BIOSTAR2, automatisant la création d'utilisateurs et l'upload de photos vers le système et OneDrive. Déployée dans 5 villes et 7 campus, gérant des milliers d'inscriptions d'étudiants.",
    },
    imageSrc: "/profesional_Pic_Anas.jpeg",
    tags: ["React.js", "Laravel", "MySQL", "API Integration", "Automation", "OneDrive"],
    externalLink: null,
    repoLink: null,
    color: "from-rose-500/20 to-orange-500/20",
    iconColor: "text-rose-500",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    title: {
      en: "Absences",
      fr: "Absences",
    },
    description: {
      en: "Tracking system for absences (classes/exams), interfaced with Biostar2. Built with Laravel and Biostar2 API integration, providing real-time absence monitoring and reporting capabilities.",
      fr: "Système de suivi des absences (cours/examens), interfacé avec Biostar2. Développé avec Laravel et intégration API Biostar2, offrant un suivi en temps réel des absences et des capacités de reporting.",
    },
    imageSrc: "/HomePage.jpg",
    tags: ["Laravel", "API Biostar2", "Tracking", "Reporting"],
    externalLink: null,
    repoLink: null,
    color: "from-teal-500/20 to-emerald-500/20",
    iconColor: "text-teal-500",
    icon: <LifeBuoy className="h-5 w-5" />,
  },
  {
    title: {
      en: "Evalbox-Logins",
      fr: "Evalbox-Logins",
    },
    description: {
      en: "A solution for students to access their Evalbox exams via QR code during Outlook failures. Built with React.js, Laravel, and MySQL, ensuring continuous access to exams even when primary authentication systems are down.",
      fr: "Solution permettant aux étudiants d'accéder à leurs examens Evalbox via QR code lors des pannes Outlook. Développée avec React.js, Laravel et MySQL, garantissant un accès continu aux examens même lorsque les systèmes d'authentification principaux sont en panne.",
    },
    imageSrc: "/HomePage.jpg",
    tags: ["React.js", "Laravel", "MySQL", "QR Code", "Availability"],
    externalLink: null,
    repoLink: null,
    color: "from-purple-500/20 to-fuchsia-500/20",
    iconColor: "text-purple-500",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: {
      en: "Évaluations-Classes",
      fr: "Évaluations-Classes",
    },
    description: {
      en: "Automated generation of Google Forms and QR codes for classes evaluations. Built with Python and Tkinter, integrated with Google APIs to streamline the evaluation process and reduce manual work for faculty.",
      fr: "Génération automatisée de Google Forms et QR codes pour les évaluations des classes. Développée avec Python et Tkinter, intégrée avec les API Google pour rationaliser le processus d'évaluation et réduire le travail manuel pour les encadrants.",
    },
    imageSrc: "/HomePage.jpg",
    tags: ["Python", "Tkinter", "Google APIs", "Automation", "QR Code"],
    externalLink: null,
    repoLink: null,
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-500",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: {
      en: "Blood-Nation",
      fr: "Blood-Nation",
    },
    description: {
      en: "Blood-Nation is a comprehensive blood bank management system designed to streamline donor registration, hospital requests, and blood inventory tracking. The application sends real-time alerts for critical shortages, ensuring efficient resource management. Built with React, Tailwind CSS, Laravel, and MySQL, the system has been optimized for both user experience and functionality, offering smooth navigation and a robust backend to manage data and automate processes.",
      fr: "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",
    },
    tags: ["React", "Tailwindcss", "Laravel", "MySQL", "Github", "Chakra UI"],
    videoSrc: "/blood-nation-demo.webm",
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
    externalLink: null,
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-500",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: {
      en: "Ticketing App",
      fr: "Ticketing App",
    },
    description: {
      en: "Ticketing App is a ticket management platform for corporate IT support. It centralizes requests, optimizes incident tracking, and automates processing based on priorities. With an intuitive interface, IT teams can efficiently manage requests, improve responsiveness, and ensure better service to users.",
      fr: "Ticketing App est une plateforme de gestion des tickets destinée au support IT en entreprise. Elle permet de centraliser les demandes, d'optimiser le suivi des incidents et d'automatiser leur traitement en fonction des priorités. Grâce à une interface intuitive, les équipes IT peuvent gérer efficacement les requêtes, améliorer la réactivité et assurer un meilleur service aux utilisateurs.",
    },
    videoSrc: "/ticketing-app-demo.webm",
    tags: ["React", "Chakra UI", "Node.js", "MongoDB", "Git"],
    repoLink: "https://github.com/AnasOudadsse/myCoach",
    externalLink: null,
    color: "from-blue-500/20 to-purple-600/20",
    iconColor: "text-blue-500",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: {
      en: "X Capital (UI/UX)",
      fr: "X Capital (UI/UX)",
    },
    description: {
      en: "An example of UI/UX work done for X Capital, focused on creating responsive and visually appealing landing pages. Using Figma, the project highlights attention to detail and a focus on optimizing user experience while respecting brand guidelines and business objectives.",
      fr: "Un exemple de travail en UI/UX réalisé pour X Capital, axé sur la création de pages d'accueil réactives et visuellement attrayantes. Utilisant Figma, le projet met en évidence une attention particulière aux détails et un accent sur l'optimisation de l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",
    },
    imageSrc: "/Hero.png",
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd",
    repoLink: null,
    color: "from-green-500/20 to-emerald-600/20",
    iconColor: "text-green-500",
    icon: <PenTool className="h-5 w-5" />,
  },
]

export function Projects() {
  const { language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")
  const [activeProject, setActiveProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Set first project as active by default
    if (activeProject === null && projectsData.length > 0) {
      setActiveProject(0)
    }
  }, [activeProject])

  const openVideoDialog = (videoSrc) => {
    setCurrentVideo(videoSrc)
    setVideoDialogOpen(true)
  }

  const translations = {
    en: {
      title: "Portfolio",
      subtitle: "Projects",
      description: "Discover some of my most remarkable projects.",
      viewProject: "View project",
      github: "GitHub",
      technologies: "Technologies",
      more: "more",
    },
    fr: {
      title: "Portfolio",
      subtitle: "Projets",
      description: "Découvrez quelques-uns de mes projets les plus remarquables.",
      viewProject: "Voir le projet",
      github: "GitHub",
      technologies: "Technologies",
      more: "autres",
    },
  }

  const t = translations[language] || translations.en

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-gray-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {t.title}
            </div>
            <h2 className="text-3xl font-bold mb-4 !text-gray-900 dark:!text-gray-100 " >{t.subtitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.description}</p>
          </motion.div>
        </div>

        {/* Desktop View - Interactive Project Showcase */}
        {!isMobile && (
          <div className="hidden lg:block max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-6 min-h-[600px]">
              {/* Project Navigation */}
              <div className="col-span-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t.technologies}
                  </h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`relative cursor-pointer transition-all duration-300 group`}
                      onClick={() => setActiveProject(index)}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 ${
                          activeProject === index
                            ? "bg-gradient-to-b from-primary to-primary/70 h-full"
                            : "bg-transparent group-hover:bg-primary/30 h-0 group-hover:h-full"
                        } transition-all duration-300`}
                      ></div>

                      <div
                        className={`p-6 ${
                          activeProject === index
                            ? "bg-gray-50 dark:bg-gray-700"
                            : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                                activeProject === index
                                  ? `${project.color} ${project.iconColor}`
                                  : "bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                              } transition-colors duration-300`}
                            >
                              {project.icon}
                            </div>
                            <h3
                              className={`font-bold text-lg transition-colors !text-gray-900 dark:!text-gray-100 duration-300 ${
                                activeProject === index ? "text-primary" : ""
                              }`}
                            >
                              {project.title[language]}
                            </h3>
                          </div>
                          <ChevronRight
                            className={`h-5 w-5 transition-all duration-300 transform ${
                              activeProject === index
                                ? "opacity-100 text-primary translate-x-0"
                                : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                            }`}
                          />
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3 ml-12">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className={`text-xs ${
                                activeProject === index
                                  ? "bg-gray-100 dark:bg-gray-700 " + project.iconColor
                                  : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                activeProject === index
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "bg-gray-100 dark:bg-gray-600"
                              }`}
                            >
                              +{project.tags.length - 3} {t.more}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="col-span-8 relative">
                <AnimatePresence mode="wait">
                  {projectsData.map(
                    (project, index) =>
                      activeProject === index && (
                        <motion.div
                          key={`detail-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <div
                            className={`h-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-br ${project.color} backdrop-blur-sm p-1`}
                          >
                            <div className="bg-white dark:bg-gray-800 rounded-lg h-full overflow-hidden flex flex-col">
                              {/* Media Section */}
                              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
                                {project.videoSrc ? (
                                  <div className="relative w-full h-full">
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transform transition-transform duration-300 hover:scale-110"
                                        onClick={() => openVideoDialog(project.videoSrc)}
                                      >
                                        <Play className="h-8 w-8" />
                                      </Button>
                                    </div>
                                    <video
                                      className="w-full h-full object-cover opacity-80"
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
                                    alt={project.title[language]}
                                    className="w-full h-full object-cover"
                                  />
                                )}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                              </div>

                              {/* Content Section */}
                              <div className="flex-grow p-6 overflow-y-auto">
                                <h3 className="text-2xl font-bold mb-3 flex items-center !text-gray-900 dark:!text-gray-100">
                                  <span className={`mr-2 ${project.iconColor}`}>●</span>
                                  {project.title[language]}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 line-clamp-6">
                                  {project.description[language]}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.tags.map((tag, i) => (
                                    <Badge
                                      key={i}
                                      variant="secondary"
                                      className={`bg-primary/10 ${project.iconColor} hover:bg-primary/20`}
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                  {project.repoLink && (
                                    <Button asChild variant="outline" size="sm" className="rounded-md group !text-gray-900 dark:!text-gray-100">
                                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300 dar  " />
                                        {t.github}
                                      </Link>
                                    </Button>
                                  )}
                                  {project.externalLink && (
                                    <Button asChild variant="outline" size="sm" className="rounded-md group">
                                      <Link href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        {t.viewProject}
                                      </Link>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Mobile View - Card List */}
        <div className="lg:hidden max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <div
                className={`rounded-xl overflow-hidden shadow-xl bg-gradient-to-br ${project.color} backdrop-blur-sm p-1`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  {/* Media Section */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
                    {project.videoSrc ? (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transform transition-transform duration-300 hover:scale-110"
                            onClick={() => openVideoDialog(project.videoSrc)}
                          >
                            <Play className="h-8 w-8" />
                          </Button>
                        </div>
                        <video className="w-full h-full object-cover opacity-80" muted loop playsInline autoPlay>
                          <source src={project.videoSrc} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <img
                        src={project.imageSrc || "/placeholder.svg"}
                        alt={project.title[language]}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 flex items-center">
                      <span className={`mr-2 ${project.iconColor}`}>●</span>
                      {project.title[language]}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">{project.description[language]}</p>

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
                            {t.github}
                          </Link>
                        </Button>
                      )}
                      {project.externalLink && (
                        <Button asChild variant="outline" size="sm" className="rounded-md group">
                          <Link href={project.externalLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            {t.viewProject}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-0">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={() => setVideoDialogOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <video controls autoPlay className="w-full h-auto">
            <source src={currentVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}
