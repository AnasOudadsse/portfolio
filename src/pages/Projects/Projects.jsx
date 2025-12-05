"use client"

import { useRef, useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, ChevronRight, Code, Layers, PenTool, Camera, LifeBuoy, ShieldCheck, ChevronUp, ChevronDown, ZoomIn, ZoomOut, Move, RotateCcw } from "lucide-react"
import { Link } from 'react-router-dom';
import { useLanguage } from "@/context/language-context"

const projectsData = [
  {
    title: {
      en: "Stages-UM6SS",
      fr: "Stages-UM6SS",
    },
    description: {
      en: "Comprehensive Internship Evaluation Management System for medical school administration. Features a smart bulk import system with intelligent validation, conflict resolution, and fuzzy matching that reduces data entry time by up to 90%. Includes role-based access control, dynamic evaluation forms, analytics dashboards, and real-time progress tracking. Built with React 19, Laravel 12, MySQL, Redux, and Web Workers for non-blocking data processing. Deployed for thousands of students across multiple campuses.",
      fr: "Système complet de gestion et d'évaluation des stages pour l'administration d'une école de médecine. Comprend un système d'import en masse intelligent avec validation, résolution de conflits et correspondance floue qui réduit le temps de saisie de données jusqu'à 90%. Inclut un contrôle d'accès basé sur les rôles, des formulaires d'évaluation dynamiques, des tableaux de bord analytiques et un suivi de progression en temps réel. Développé avec React 19, Laravel 12, MySQL, Redux et Web Workers pour un traitement de données non bloquant. Déployé pour des milliers d'étudiants à travers plusieurs campus.",
    },
    imageSrc: "/stage-um6ss-ma-dashboard.png",
    tags: ["React 19", "Laravel 12", "MySQL", "Redux", "Web Workers", "JWT", "Smart Import", "Product Ownership"],
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
      en: "Complete web platform for university students to create, manage, and share their electronic professional portfolios. Manages 36+ data entities covering academic journeys, clinical experiences, projects, certifications, and professional achievements. Built with React 19, Node.js, Express.js, MySQL, and Sequelize ORM. Features multi-user support (Students, Supervisors, Admins), modular portfolio sections with customizable content, file management for attachments and media, public portfolio sharing, and interactive dashboards with real-time progress tracking. Modern UI/UX with TailwindCSS and Framer Motion animations.",
      fr: "Plateforme web complète permettant aux étudiants universitaires de créer, gérer et partager leur portfolio électronique professionnel. Gère 36+ entités de données couvrant les parcours académiques, expériences cliniques, projets, certifications et réalisations professionnelles. Développé avec React 19, Node.js, Express.js, MySQL et Sequelize ORM. Comprend le support multi-utilisateurs (Étudiants, Encadrants, Admins), des sections de portfolio modulaires avec contenu personnalisable, gestion de fichiers pour pièces jointes et médias, partage public de portfolio, et tableaux de bord interactifs avec suivi de progression en temps réel. Interface moderne avec TailwindCSS et animations Framer Motion.",
    },
    imageSrc: "/E-portfolio-img.png",
    tags: ["React 19", "Node.js", "Express.js", "MySQL", "Sequelize", "Framer Motion", "Product Management", "UI/UX"],
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
      en: "Full-stack photo management system with biometric enrollment integration for UM6SS. Features webcam integration for real-time photo capture, image cropping and editing, and seamless BioStar API integration for face recognition enrollment. Supports multi-campus deployment across 5 cities (Casablanca, Rabat, Marrakech, Dakhla, Agadir) with role-based access control (Admin, Agent, Student). Built with React 19, Laravel 12, JWT authentication, and organized file storage. Handles thousands of student enrollments with automatic user synchronization between local database and BioStar biometric systems.",
      fr: "Système complet de gestion de photos avec intégration d'enrôlement biométrique pour l'UM6SS. Comprend l'intégration webcam pour la capture de photos en temps réel, le recadrage et l'édition d'images, et l'intégration API BioStar pour l'enrôlement par reconnaissance faciale. Supporte le déploiement multi-campus dans 5 villes (Casablanca, Rabat, Marrakech, Dakhla, Agadir). Développé avec React 19, Laravel 12, authentification JWT et stockage de fichiers organisé. Gère des milliers d'inscriptions d'étudiants avec synchronisation automatique entre la base de données locale et les systèmes biométriques BioStar.",
    },
    imageSrc: "/Photo-um6ss.png",
    tags: ["React 19", "Laravel 12", "JWT", "BioStar API", "Webcam", "Multi-Campus", "Biometric", "File Management"],
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
      en: "Comprehensive absence and attendance management system for UM6SS, streamlining student attendance tracking across multiple faculties. Features dual attendance systems for courses and exams, bulk import from Excel/CSV with intelligent validation and error correction, automatic absence generation, and Biostar integration for real-time attendance data retrieval. Built with Angular 20, Laravel 11, and MySQL. Includes role-based access control (Super Admin, Admin, Academic Affairs, Teachers, Deans), exam scheduling with conflict detection, makeup exam management, comprehensive reporting and analytics dashboards, and multi-establishment support with proper data isolation.",
      fr: "Système complet de gestion des absences et présences pour l'UM6SS, rationalisant le suivi de la présence des étudiants à travers plusieurs facultés. Comprend des systèmes de présence doubles pour les cours et examens, import en masse depuis Excel/CSV avec validation intelligente et correction d'erreurs, génération automatique d'absences, et intégration Biostar pour la récupération de données de présence en temps réel. Développé avec Angular 20, Laravel 11 et MySQL. Inclut le contrôle d'accès basé sur les rôles (Super Admin, Admin, Scolarité, Enseignants, Doyens), planification d'examens avec détection de conflits, gestion des examens de rattrapage, tableaux de bord de reporting et d'analyses complets, et support multi-établissements avec isolation appropriée des données.",
    },
    imageSrc: "/absence-app-img-.png",
    tags: ["Angular 20", "Laravel 11", "MySQL", "Laravel Sanctum", "PHPSpreadsheet", "Biostar Integration", "RBAC", "Excel Import"],
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
      en: "Solution for students to access their Evalbox exams via QR code during Outlook authentication failures, ensuring continuous access to exams even when primary authentication systems are down. Features exam management and assignment to faculties, secure file upload and download with access control, automated email distribution of exam credentials to students, and bulk student import from Excel with automatic faculty creation. Built with React 19, Laravel 10, MySQL/PostgreSQL, and Laravel Sanctum. Includes role-based access control (Super Admin, IT Support, Students, Deans), advanced student filtering and search, CSV export functionality, real-time statistics dashboard, comprehensive activity logging, and responsive UI with Chakra UI, Tailwind CSS, and Radix UI components.",
      fr: "Solution permettant aux étudiants d'accéder à leurs examens Evalbox via QR code lors des pannes d'authentification Outlook, garantissant un accès continu aux examens même lorsque les systèmes d'authentification principaux sont en panne. Comprend la gestion d'examens et leur attribution aux facultés, l'upload et téléchargement sécurisés de fichiers avec contrôle d'accès, la distribution automatique par email des identifiants d'examens aux étudiants, et l'import en masse d'étudiants depuis Excel avec création automatique de facultés. Développé avec React 19, Laravel 10, MySQL et Laravel Sanctum. Inclut le contrôle d'accès basé sur les rôles (Super Admin, Support IT, Étudiants, Doyens), filtrage et recherche avancés d'étudiants, fonctionnalité d'export CSV, tableau de bord de statistiques en temps réel, journalisation complète des activités, et interface responsive avec Chakra UI et Tailwind CSS.",
    },
    imageSrc: "/eval-logins-img.png",
    tags: ["React 19", "Laravel 10", "MySQL", "Laravel Sanctum", "Chakra UI", "PHPSpreadsheet", "Email Automation", "RBAC"],
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
      en: "Desktop application that automates the creation of Google Forms for class evaluations and generates QR codes for easy student access. Features batch processing of multiple classes from Excel files, seamless integration with Google Forms API and Google Drive API, automated form generation with 13 predefined evaluation questions, and QR code generation with embedded class information. Built with Python, Tkinter, Pandas, and Google APIs. Includes interactive GUI with calendar and time pickers for individual form creation, hierarchical folder organization in Google Drive by date ranges and class names, OAuth 2.0 authentication, real-time progress tracking, and comprehensive error handling. Streamlines the evaluation process by eliminating manual form creation and enabling quick distribution through QR codes.",
      fr: "Application desktop qui automatise la création de formulaires Google pour les évaluations de classes et génère des codes QR pour un accès facile aux étudiants. Comprend le traitement par lots de plusieurs classes depuis des fichiers Excel, l'intégration transparente avec l'API Google Forms et l'API Google Drive, la génération automatique de formulaires avec 13 questions d'évaluation prédéfinies, et la génération de codes QR avec informations de classe intégrées. Développé avec Python, Tkinter, Pandas et les API Google. Inclut une interface graphique interactive avec sélecteurs de calendrier et d'heure pour la création de formulaires individuels, organisation hiérarchique de dossiers dans Google Drive par plages de dates et noms de classes, authentification OAuth 2.0, suivi de progression en temps réel, et gestion d'erreurs complète. Rationalise le processus d'évaluation en éliminant la création manuelle de formulaires et en permettant une distribution rapide via codes QR.",
    },
    imageSrc: "/Evaluation-app-img.png",
    tags: ["Python", "Tkinter", "Google Forms API", "Google Drive API", "Pandas", "QR Code", "OAuth 2.0", "Automation"],
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
      en: "Comprehensive blood bank management system designed to streamline blood donation management, inventory tracking, and hospital blood request processing. Features multi-role authentication system with five distinct user types (Admin, Donor, Hospital Staff, Blood Camp Staff, Lab Technician), complete donor registration and profile management with donation history tracking, blood donation management with integration to blood camps, hospital blood request system with urgency levels and approval workflow, real-time inventory tracking by blood type with automatic updates, laboratory analysis workflow with quality control, blood camp creation and scheduling, comprehensive admin dashboard with key metrics and analytics, and notification system for urgent requests. Built with React 18, Laravel 10, MySQL, Laravel Sanctum, Material-UI, Chakra UI, Tailwind CSS, and Recharts for data visualization.",
      fr: "Système complet de gestion de banque de sang conçu pour rationaliser la gestion des dons de sang, le suivi des stocks et le traitement des demandes de sang des hôpitaux. Comprend un système d'authentification multi-rôles avec cinq types d'utilisateurs distincts (Admin, Donneur, Personnel Hospitalier, Personnel de Camp de Sang, Technicien de Laboratoire), enregistrement et gestion complète des profils de donneurs avec suivi de l'historique des dons, gestion des dons de sang avec intégration aux camps de sang, système de demande de sang hospitalier avec niveaux d'urgence et workflow d'approbation, suivi d'inventaire en temps réel par groupe sanguin avec mises à jour automatiques, workflow d'analyse de laboratoire avec contrôle qualité, création et planification de camps de sang, tableau de bord administrateur complet avec métriques clés et analyses, et système de notification pour les demandes urgentes. Développé avec React 18, Laravel 10, MySQL, Laravel Sanctum, Material-UI, Chakra UI, Tailwind CSS et Recharts pour la visualisation de données.",
    },
    tags: ["React 18", "Laravel 10", "MySQL", "Laravel Sanctum", "Material-UI", "Chakra UI", "Tailwind CSS", "Recharts"],
    imageSrc: "/bloodbank-demo-img.png",
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
      en: "Comprehensive IT Support Ticketing Management System that streamlines technical support operations by replacing manual tracking systems with a centralized, automated platform. Features complete ticket lifecycle management with four-stage workflow (Opened → Reserved → Resolved → Closed), role-based access control (Clients, Support Agents, Administrators), smart ticket assignment and reservation system, satisfaction rating after resolution, and file attachment support. Built with React 18, Laravel 9, MySQL, and Laravel Sanctum. Includes advanced dashboard with real-time KPIs and interactive visualizations (line charts, pie charts, bar charts), AI-powered chatbot assistant integrated with Google Gemini API for context-aware responses, administrative features for user management and configuration, inventory management for IT assets, Excel export functionality, and responsive UI with Tailwind CSS and shadcn/ui components.",
      fr: "Système complet de gestion de tickets de support IT qui rationalise les opérations de support technique en remplaçant les systèmes de suivi manuels par une plateforme centralisée et automatisée. Comprend la gestion complète du cycle de vie des tickets avec un workflow en quatre étapes (Ouvert → Réservé → Résolu → Fermé), contrôle d'accès basé sur les rôles (Clients, Agents de Support, Administrateurs), système d'attribution et de réservation intelligent de tickets, notation de satisfaction après résolution, et support de pièces jointes. Développé avec React 18, Laravel 9, MySQL et Laravel Sanctum. Inclut un tableau de bord avancé avec KPI en temps réel et visualisations interactives (graphiques linéaires, camemberts, barres), assistant chatbot alimenté par l'IA intégré avec l'API Google Gemini pour des réponses contextuelles, fonctionnalités administratives pour la gestion des utilisateurs et la configuration, gestion d'inventaire pour les actifs IT, fonctionnalité d'export Excel, et interface responsive avec Tailwind CSS et composants shadcn/ui.",
    },
    videoSrc: "/ticketing-app-demo.mp4",
    tags: ["React 18", "Laravel 9", "MySQL", "Laravel Sanctum", "Google Gemini API", "shadcn/ui", "Tailwind CSS", "Recharts"],
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
      en: "Full-stack project for X Capital combining UI/UX design and frontend development. Designed responsive and visually appealing interfaces using Figma, then implemented them with React.js to create interactive and dynamic user interfaces. Integrated RESTful APIs for seamless data fetching and real-time updates, ensuring smooth user experience. The project demonstrates expertise in both design thinking and technical implementation, with attention to detail in optimizing user experience while respecting brand guidelines and business objectives.",
      fr: "Projet full-stack pour X Capital combinant design UI/UX et développement frontend. Conception d'interfaces réactives et visuellement attrayantes avec Figma, puis implémentation avec React.js pour créer des interfaces utilisateur interactives et dynamiques. Intégration d'API RESTful pour la récupération de données et les mises à jour en temps réel, garantissant une expérience utilisateur fluide. Le projet démontre une expertise à la fois en design thinking et en implémentation technique, avec une attention particulière aux détails pour optimiser l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",
    },
    imageSrc: "/Hero.png",
    tags: ["React.js", "Figma", "UI/UX Design", "API Integration", "RESTful API"],
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
  const [activeProject, setActiveProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollContainerRef = useRef(null)
  const [mediaModalOpen, setMediaModalOpen] = useState(false)
  const [currentMedia, setCurrentMedia] = useState({ src: "", type: "image", title: "" })
  const [hoveredMediaIndex, setHoveredMediaIndex] = useState(null)
  const [mediaPosition, setMediaPosition] = useState({ x: 0, y: 0 })
  const [zoomLevel, setZoomLevel] = useState(1)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [fullWidthMode, setFullWidthMode] = useState(false)
  const mediaModalRef = useRef(null)

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

  // Scroll to active project - ensure it's always visible
  useEffect(() => {
    if (scrollContainerRef.current && activeProject !== null) {
      // Find the project element within the scrollable container
      const container = scrollContainerRef.current
      const projectElements = container.querySelectorAll('[data-project-index]')
      const targetElement = Array.from(projectElements).find(
        el => parseInt(el.getAttribute('data-project-index')) === activeProject
      )
      
      if (targetElement) {
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
        })
      }
    }
  }, [activeProject])

  // Initial scroll on mount to show first project as selected
  useEffect(() => {
    if (scrollContainerRef.current && activeProject === 0 && isInView) {
      // Wait for animations to complete
      const timer = setTimeout(() => {
        const container = scrollContainerRef.current
        if (container) {
          const projectElements = container.querySelectorAll('[data-project-index]')
          const firstElement = projectElements[0]
          if (firstElement) {
            firstElement.scrollIntoView({ 
              behavior: 'auto', 
              block: 'center',
              inline: 'nearest'
            })
          }
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, activeProject])


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
              {/* Project Navigation - Clean Scrollable List */}
              <div className="col-span-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t.technologies}
                  </h3>
                </div>
                
                {/* Scrollable container with 3D perspective effect */}
                <div 
                  className="relative h-[520px] overflow-hidden"
                  style={{ perspective: '1000px' }}
                >
                  {/* Top gradient fade */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-gray-800 to-transparent z-10 pointer-events-none flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <ChevronUp className="h-4 w-4 text-primary animate-bounce" />
                      <div className="text-xs text-primary/70 font-medium">Scroll for more</div>
                    </div>
                  </div>
                  
                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent z-10 pointer-events-none flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1 mb-2">
                      <div className="text-xs text-primary/70 font-medium">More projects</div>
                      <ChevronDown className="h-4 w-4 text-primary animate-bounce" />
                    </div>
                  </div>

                  {/* Scrollable list with 3D depth effect */}
                  <div
                    ref={scrollContainerRef}
                    className="h-full overflow-y-auto custom-scrollbar py-20"
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    <div className="space-y-4 px-2">
                      {projectsData.map((project, index) => {
                        const distance = Math.abs(index - activeProject)
                        const isActive = activeProject === index
                        const isNear = distance <= 2
                        
                        // 3D transform based on distance from active
                        const translateZ = isActive ? 20 : Math.max(-50, -20 * distance)
                        const scale = isActive ? 1.05 : Math.max(0.85, 1 - distance * 0.05)
                        const opacity = isNear ? 1 : Math.max(0.4, 1 - distance * 0.15)
                        
                        return (
                          <motion.div
                            key={index}
                            data-project-index={index}
                            className="cursor-pointer"
                            style={{
                              transform: `translateZ(${translateZ}px) scale(${scale})`,
                              opacity: opacity,
                              transformStyle: 'preserve-3d',
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onClick={() => setActiveProject(index)}
                            whileHover={{ scale: isActive ? 1.05 : 0.95 }}
                          >
                            <div
                              className={`p-6 rounded-lg transition-all duration-300 ${
                                isActive
                                  ? "bg-gray-50 dark:bg-gray-700 shadow-xl border-2 border-primary"
                                  : "bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
                                      isActive
                                        ? `${project.color} ${project.iconColor}`
                                        : "bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                                    }`}
                                  >
                                    {project.icon}
                                  </div>
                                  <h3
                                    className={`font-bold text-lg transition-colors !text-gray-900 dark:!text-gray-100 duration-300 ${
                                      isActive ? "text-primary" : ""
                                    }`}
                                  >
                                    {project.title[language]}
                                  </h3>
                                </div>
                                <ChevronRight
                                  className={`h-5 w-5 transition-all duration-300 ${
                                    isActive
                                      ? "opacity-100 text-primary"
                                      : "opacity-0"
                                  }`}
                                />
                              </div>
                              <div className="flex flex-wrap gap-1 mt-3 ml-12">
                                {project.tags.slice(0, 3).map((tag, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className={`text-xs ${
                                      isActive
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
                                      isActive
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
                        )
                      })}
                    </div>
                  </div>
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
                              <div 
                                className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 group cursor-pointer"
                                onMouseEnter={() => setHoveredMediaIndex(index)}
                                onMouseLeave={() => {
                                  setHoveredMediaIndex(null)
                                  setMediaPosition({ x: 0, y: 0 })
                                }}
                                onMouseMove={(e) => {
                                  if (hoveredMediaIndex === index && project.imageSrc && !project.videoSrc) {
                                    const rect = e.currentTarget.getBoundingClientRect()
                                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
                                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
                                    setMediaPosition({ x, y })
                                  }
                                }}
                                onClick={() => {
                                  if (project.videoSrc) {
                                    setCurrentMedia({ src: project.videoSrc, type: "video", title: project.title[language] })
                                    setFullWidthMode(false)
                                  } else {
                                    setCurrentMedia({ src: project.imageSrc || "/placeholder.svg", type: "image", title: project.title[language] })
                                    setFullWidthMode(true)
                                  }
                                  setZoomLevel(1)
                                  setPanPosition({ x: 0, y: 0 })
                                  setMediaModalOpen(true)
                                }}
                              >
                                {project.videoSrc ? (
                                  <>
                                    <video
                                      src={project.videoSrc}
                                      className="w-full h-full object-cover object-center object-top"
                                      muted
                                      loop
                                      playsInline
                                      autoPlay
                                    />
                                    {/* Play overlay for video */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                                      hoveredMediaIndex === index ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
                                    }`}>
                                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                                        <ZoomIn className="h-8 w-8 text-white" />
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <img
                                    src={project.imageSrc || "/placeholder.svg"}
                                    alt={project.title[language]}
                                    className={`w-full h-full object-cover object-center object-top transition-all duration-500 ease-out ${
                                      hoveredMediaIndex === index 
                                        ? 'scale-110' 
                                        : 'scale-100'
                                    }`}
                                    style={{
                                      transform: hoveredMediaIndex === index 
                                        ? `scale(1.1) translate(${mediaPosition.x}px, ${mediaPosition.y}px)` 
                                        : 'scale(1)',
                                    }}
                                  />
                                )}

                                {/* Interactive overlay with hint */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                                  hoveredMediaIndex === index ? 'opacity-40' : 'opacity-60'
                                }`} />
                                
                                {/* Hover indicator */}
                                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                                  hoveredMediaIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}>
                                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                                    <ZoomIn className="h-8 w-8 text-white" />
                                  </div>
                                </div>

                                {/* Click hint */}
                                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <Move className="h-3 w-3" />
                                  <span>{project.videoSrc ? 'Click to view full video' : 'Hover to explore • Click to view full'}</span>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div className="flex-grow p-6 overflow-y-auto">
                                <h3 className="text-2xl font-bold mb-3 flex items-center !text-gray-900 dark:!text-gray-100">
                                  <span className={`mr-2 ${project.iconColor}`}>●</span>
                                  {project.title[language]}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
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
                  <div 
                    className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 cursor-pointer"
                                onClick={() => {
                                  if (project.videoSrc) {
                                    setCurrentMedia({ src: project.videoSrc, type: "video", title: project.title[language] })
                                    setFullWidthMode(false)
                                  } else {
                                    setCurrentMedia({ src: project.imageSrc || "/placeholder.svg", type: "image", title: project.title[language] })
                                    setFullWidthMode(true)
                                  }
                                  setZoomLevel(1)
                                  setPanPosition({ x: 0, y: 0 })
                                  setMediaModalOpen(true)
                                }}
                  >
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        className="w-full h-full object-cover object-center object-top"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <img
                        src={project.imageSrc || "/placeholder.svg"}
                        alt={project.title[language]}
                        className="w-full h-full object-cover object-center object-top"
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
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Media Modal/Lightbox */}
      <AnimatePresence>
        {mediaModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => {
              setMediaModalOpen(false)
              setZoomLevel(1)
              setPanPosition({ x: 0, y: 0 })
              setFullWidthMode(false)
            }}
            onWheel={(e) => {
              if (currentMedia.type === "image") {
                e.preventDefault()
                const delta = e.deltaY > 0 ? -0.1 : 0.1
                setZoomLevel(prev => Math.max(0.5, Math.min(5, prev + delta)))
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
              ref={mediaModalRef}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-20 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                onClick={() => {
                  setMediaModalOpen(false)
                  setZoomLevel(1)
                  setPanPosition({ x: 0, y: 0 })
                  setFullWidthMode(false)
                }}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Zoom Controls */}
              {currentMedia.type === "image" && (
                <div className="absolute right-4 top-16 z-20 flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setZoomLevel(prev => Math.min(5, prev + 0.5))
                    }}
                    title="Zoom In"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setZoomLevel(prev => Math.max(0.5, prev - 0.5))
                    }}
                    title="Zoom Out"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setZoomLevel(1)
                      setPanPosition({ x: 0, y: 0 })
                    }}
                    title="Reset"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>
              )}
              
              <div className="bg-white/5 rounded-lg p-2 backdrop-blur-sm">
                <h3 className="text-white text-lg font-semibold mb-2 px-2">{currentMedia.title}</h3>
                <div 
                  className={`relative rounded-lg bg-black/20 ${
                    fullWidthMode ? "overflow-y-auto" : "overflow-hidden"
                  }`}
                  style={{
                    maxHeight: "85vh",
                    cursor: !fullWidthMode && zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default"
                  }}
                  onMouseDown={(e) => {
                    if (!fullWidthMode && zoomLevel > 1 && currentMedia.type === "image") {
                      e.preventDefault()
                      setIsDragging(true)
                      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y })
                    }
                  }}
                  onMouseMove={(e) => {
                    if (!fullWidthMode && isDragging && zoomLevel > 1) {
                      e.preventDefault()
                      setPanPosition({
                        x: e.clientX - dragStart.x,
                        y: e.clientY - dragStart.y
                      })
                    }
                  }}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                >
                  {currentMedia.type === "video" ? (
                    <video
                      src={currentMedia.src}
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[85vh]"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={currentMedia.src}
                      alt={currentMedia.title}
                      className={`transition-transform duration-200 ${
                        fullWidthMode 
                          ? "w-full h-auto" 
                          : "w-full h-auto max-h-[85vh] object-contain"
                      }`}
                      style={fullWidthMode ? {} : {
                        transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                        transformOrigin: "center center",
                      }}
                      draggable={false}
                    />
                  )}
                </div>
                
                {/* Zoom Level Indicator */}
                {currentMedia.type === "image" && !fullWidthMode && zoomLevel !== 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                )}
                
                {/* Full Width Indicator */}
                {currentMedia.type === "image" && fullWidthMode && (
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Move className="h-3 w-3" />
                    <span>Scroll vertically to view full image</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
