"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create the context
const LanguageContext = createContext()

// English and French translations
const translations = {
  en: {
    // Header
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      volunteering: "Volunteering",
      projects: "Projects",
      certifications: "Certifications",
      languages: "Languages",
      recommendations: "Recommendations",
      contact: "Contact",
    },
    // Hero
    hero: {
      subtitle: "FULL-STACK WEB & MOBILE DEVELOPER",
      greeting: "Hi, I'm",
      typewriter: [
        "I turn complex problems into seamless digital solutions",
        "I transform ideas into production-ready applications",
        "I streamline workflows and automate what slows you down",
        "I build apps from idea to deployment, end-to-end",
      ],      
      description:
        "I build and engineer full-stack applications and workflows. Proven experience in process digitalization, with applications deployed for thousands of users.",
      location: "Casablanca, Morocco",
      available: "Available for new projects",
      cta: "Let's work together",
      downloadCV: "Download CV",
    },
    // About
    about: {
      title: "About me",
      role: "Co-founder & CTO · Full-Stack Developer",
      description:
        "Full-stack developer & CTO with strong expertise in UI/UX, AI automation, and digital transformation. Proven experience in process digitalization, with applications deployed for thousands of users. I managed the end-to-end project lifecycle, from requirements analysis to deployment and user support, alongside technical coordination.",
      cta: "Let's work together",
      downloadCV: "Download CV",
    },
    // Expertise
    expertise: {
      title: "What I do",
      subtitle: "Expertise",
      description: "Here's an overview of my main skills:",
      items: [
        {
          title: "Full-Stack Development",
          description:
            "Extensive experience in front-end and back-end development, mastering React.js, Flutter, Laravel, Node.js, and Tailwind CSS. I build scalable web and mobile applications using both relational (MySQL) and non-relational (MongoDB) databases, deployed for thousands of users.",
        },
        {
          title: "UI/UX Design",
          description:
            "Strong expertise in UI/UX design with Figma, creating complete design systems and responsive interfaces. I design user-centric experiences that scale, from wireframes to production-ready interfaces.",
        },
        {
          title: "Digital Transformation & Process Digitalization",
          description:
            "Transforming manual processes into automated digital solutions. I design and implement digitalization initiatives that streamline workflows, reduce manual work, and improve operational efficiency across organizations.",
        },
        {
          title: "End-to-End Project Delivery",
          description:
            "Managing complete project lifecycles from requirements analysis to deployment and user support. I coordinate technical implementation, ensure alignment with business goals, and support successful adoption across multiple locations.",
        },
      ],
    },
    
    // Skills
    skills: {
      title: "Technologies",
      subtitle: "Skills",
      description: "Here's a quick summary of my technical skills:",
    },
    // Experiences
    experiences: {
      title: "Professional journey",
      subtitle: "Experiences",
      description: "Here's a quick summary of my most recent experiences:",
    },
    // Projects
    projects: {
      title: "Portfolio",
      subtitle: "Projects",
      description: "Discover some of my most remarkable projects.",
      viewProject: "View project",
      watchDemo: "Watch demo",
    },
    // Certifications
    certifications: {
      title: "Training",
      subtitle: "Certifications",
      description: "Professional certifications and courses I've completed to enhance my skills.",
      skills: "Skills:",
      viewCertificate: "View Certificate",
      clickForDetails: "Click for details",
      more: "more",
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Let's work together",
      description: "Interested in a collaboration? Feel free to contact me!",
      formTitle: "Send me a message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "Your email",
      subject: "Subject",
      subjectPlaceholder: "Subject of your message",
      message: "Message",
      messagePlaceholder: "Your message",
      send: "Send message",
      contactInfo: "Contact information",
      followMe: "Follow me",
      available: "Available for new projects",
      availableDesc: "I am currently available for freelance projects or full-time opportunities.",
      contactMe: "Contact me",
    },
    // Footer
    footer: {
      description:
        "Full-Stack Developer & UI/UX Designer passionate about creating exceptional and functional web experiences.",
      quickNav: "Quick Navigation",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe to receive my latest news and articles.",
      emailPlaceholder: "Your email",
      rights: "All rights reserved.",
    },
  },
  fr: {
    // Header
    nav: {
      home: "Accueil",
      about: "À propos",
      expertise: "Expertise",
      skills: "Compétences",
      experience: "Expérience",
      education: "Éducation",
      volunteering: "Bénévolat",
      projects: "Projets",
      certifications: "Certifications",
      languages: "Langues",
      recommendations: "Recommandations",
      contact: "Contact",
    },
    // Hero
    hero: {
      subtitle: "DÉVELOPPEUR WEB & MOBILE FULL-STACK",
      greeting: "Salut, je suis",
      typewriter: [
        "Je transforme les problèmes complexes en solutions digitales fluides",
        "Je transforme les idées en applications prêtes pour la production",
        "J'optimise les workflows et automatise ce qui vous ralentit",
        "Je conçois des applications de l'idée au déploiement, de bout en bout",
      ],      
      description:
        "Je conçois et développe des applications full-stack et des workflows. Expérience avérée en digitalisation de processus, avec des applications déployées pour des milliers d'utilisateurs.",
      location: "Casablanca, Maroc",
      available: "Disponible pour de nouveaux projets",
      cta: "Travaillons ensemble",
      downloadCV: "Télécharger le CV",
    },
    // About
    about: {
      title: "À propos de moi",
      role: "Cofondateur & CTO · Développeur Full-Stack",
      description:
        "Développeur full-stack & CTO avec une solide expertise en UI/UX, automatisation IA et transformation digitale. Expérience avérée en digitalisation de processus, avec des applications déployées pour des milliers d'utilisateurs. J'ai géré le cycle de vie complet des projets, de l'analyse des besoins au déploiement et au support utilisateurs, ainsi que la coordination technique.",
      cta: "Travaillons ensemble",
      downloadCV: "Télécharger CV",
    },
    
    // Expertise
    expertise: {
      title: "Ce que je fais",
      subtitle: "Expertise",
      description: "Voici un aperçu de mes compétences principales :",
      items: [
        {
          title: "Développement Full-Stack",
          description:
            "Expérience approfondie en développement front-end et back-end, maîtrisant React.js, Flutter, Laravel, Node.js et Tailwind CSS. Je crée des applications web et mobiles évolutives avec des bases de données relationnelles (MySQL) et non relationnelles (MongoDB), déployées pour des milliers d'utilisateurs.",
        },
        {
          title: "Design UI/UX",
          description:
            "Solide expertise en design UI/UX avec Figma, créant des systèmes de design complets et des interfaces réactives. Je conçois des expériences centrées utilisateur et prêtes à l'échelle, des wireframes aux interfaces prêtes pour la production.",
        },
        {
          title: "Transformation Digitale & Digitalisation de Processus",
          description:
            "Transformation de processus manuels en solutions digitales automatisées. Je conçois et implémente des initiatives de digitalisation qui rationalisent les workflows, réduisent le travail manuel et améliorent l'efficacité opérationnelle à travers les organisations.",
        },
        {
          title: "Livraison de Projets de Bout en Bout",
          description:
            "Gestion de cycles de vie complets de projets, de l'analyse des besoins au déploiement et au support utilisateurs. Je coordonne l'implémentation technique, assure l'alignement avec les objectifs métier et soutiens l'adoption réussie à travers plusieurs localisations.",
        },
      ],
    },
    
    // Skills
    skills: {
      title: "Technologies",
      subtitle: "Compétences",
      description: "Voici un résumé rapide de mes compétences techniques :",
    },
    // Experiences
    experiences: {
      title: "Parcours professionnel",
      subtitle: "Expériences",
      description: "Voici un résumé rapide de mes expériences les plus récentes :",
    },
    // Projects
    projects: {
      title: "Portfolio",
      subtitle: "Projets",
      description: "Découvrez quelques-uns de mes projets les plus remarquables.",
      viewProject: "Voir le projet",
      watchDemo: "Voir la démo",
    },
    // Certifications
    certifications: {
      title: "Formations",
      subtitle: "Certifications",
      description: "Certifications professionnelles et cours que j'ai complétés pour améliorer mes compétences.",
      skills: "Compétences :",
      viewCertificate: "Voir le certificat",
      clickForDetails: "Cliquez pour les détails",
      more: "autres",
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Travaillons ensemble",
      description: "Intéressé par une collaboration? N'hésitez pas à me contacter!",
      formTitle: "Envoyez-moi un message",
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "Votre email",
      subject: "Sujet",
      subjectPlaceholder: "Sujet de votre message",
      message: "Message",
      messagePlaceholder: "Votre message",
      send: "Envoyer le message",
      contactInfo: "Informations de contact",
      followMe: "Suivez-moi",
      available: "Disponible pour de nouveaux projets",
      availableDesc: "Je suis actuellement disponible pour des projets freelance ou des opportunités à temps plein.",
      contactMe: "Contactez-moi",
    },
    // Footer
    footer: {
      description:
        "Développeur Full-Stack & Designer UI/UX passionné par la création d'expériences web exceptionnelles et fonctionnelles.",
      quickNav: "Navigation Rapide",
      newsletter: "Newsletter",
      newsletterDesc: "Abonnez-vous pour recevoir mes dernières actualités et articles.",
      emailPlaceholder: "Votre email",
      rights: "Tous droits réservés.",
    },
  },
}

// Language provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key) => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      if (!value) return key
      value = value[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
