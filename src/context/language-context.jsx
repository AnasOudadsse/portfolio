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
      volunteering: "Volunteering",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    // Hero
    hero: {
      subtitle: "CTO • Full-Stack Developer • UI/UX Designer",
      greeting: "Hi, I'm",
      typewriter: [
        "I lead digital products from discovery to launch",
        "I build React & Laravel platforms used by thousands",
        "I design user-centric experiences that scale",
      ],      
      description:
        "Co-founder & CTO delivering end-to-end digitalization programs for universities and startups. I own discovery, prioritisation, development, deployment, and adoption across React.js, Laravel, Node.js, and MySQL ecosystems.",
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
        "I combine product leadership, UI/UX, and full‑stack engineering to deliver large-scale digital platforms. From needs discovery and prioritisation to coding, deployment, and change management, I partner with stakeholders to launch solutions that support thousands of users across higher education and fast-growing startups.",
      cta: "Let’s work together",
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
            "Extensive experience in front-end and back-end development, mastering React.js, Flutter, Laravel, and Tailwind CSS. I build scalable web and mobile applications using both relational (MySQL) and non-relational (MongoDB) databases.",
        },
        {
          title: "Solution Architecture",
          description:
            "Designing robust and optimized technical architectures that ensure system performance, scalability, and maintainability.",
        },
        {
          title: "Agile Methodologies",
          description:
            "Proficient in Agile frameworks (Scrum, Kanban), collaborating with teams to accelerate delivery while maintaining high quality and customer satisfaction.",
        },
        {
          title: "Interpersonal & Problem-Solving Skills",
          description:
            "Strong communication and teamwork abilities in multidisciplinary settings, with a talent for tackling complex challenges to ensure project cohesion and stakeholder alignment.",
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
      volunteering: "Bénévolat",
      projects: "Projets",
      certifications: "Certifications",
      contact: "Contact",
    },
    // Hero
    hero: {
      subtitle: "CTO • Développeur Full-Stack • Designer UI/UX",
      greeting: "Salut, je suis",
      typewriter: [
        "Je pilote des produits digitaux de la découverte au déploiement",
        "Je conçois des plateformes React & Laravel utilisées par des milliers d'utilisateurs",
        "Je crée des expériences centrées utilisateur et prêtes à l'échelle",
      ],      
      description:
        "Cofondateur & CTO menant des programmes de digitalisation de bout en bout pour des universités et startups. Je prends en charge la découverte des besoins, la priorisation, le développement, le déploiement et l'adoption sur des écosystèmes React.js, Laravel, Node.js et MySQL.",
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
        "J'allie leadership produit, UI/UX et ingénierie full-stack pour livrer des plateformes digitales à grande échelle. De l'analyse des besoins au déploiement et à l'accompagnement du changement, j'assure avec les parties prenantes le lancement de solutions soutenant des milliers d'utilisateurs dans l'enseignement supérieur et les startups en croissance.",
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
            "Expérience approfondie en développement front-end et back-end, maîtrisant React.js, Flutter, Laravel et Tailwind CSS. Je crée des applications web et mobiles évolutives avec des bases de données relationnelles (MySQL) et non relationnelles (MongoDB).",
        },
        {
          title: "Architecture de solutions",
          description:
            "Conception d’architectures techniques robustes et optimisées garantissant performance, évolutivité et maintenabilité des systèmes.",
        },
        {
          title: "Méthodologies Agile",
          description:
            "Maîtrise des cadres Agile (Scrum, Kanban), collaboration avec les équipes pour accélérer les livraisons tout en maintenant qualité et satisfaction client.",
        },
        {
          title: "Compétences relationnelles et résolution de problèmes",
          description:
            "Solides aptitudes en communication et travail en équipe pluridisciplinaire, avec un talent pour relever des défis complexes et assurer la cohésion du projet ainsi que l’alignement des parties prenantes.",
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
