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
      subtitle: "Full-Stack Developer & UI/UX Designer",
      greeting: "Hi, I'm",
      typewriter: [
        "I develop web and mobile applications",
        "I architect end-to-end digital solutions",
        "I build scalable, production-ready systems",
      ],
      description:
        "Experienced Full-Stack Developer skilled in React.js, Flutter, Laravel & Tailwind CSS. I turn concepts into scalable, production-ready web and mobile applications.",
      location: "Casablanca, Morocco",
      available: "Available for new projects",
      cta: "Let's work together",
      downloadCV: "Download CV",
    },
    // About
    about: {
      title: "About me",
      role: "Full-Stack Developer",
      description:
        "With a strong command of both front-end and back-end technologies, I architect, develop, and deliver web and mobile applications from concept to production. I’m proficient in React.js, Flutter, Laravel, and Tailwind CSS, and experienced with both relational and non-relational databases, ensuring every solution is scalable, maintainable, and aligned with your business goals.",
      cta: "Let’s work together",
      downloadCV: "Download CV",
    },
    // Expertise
    expertise: {
      title: "What I do",
      subtitle: "Expertise",
      description: "Here's a quick overview of my main skills and expertise:",
      items: [
        {
          title: "Full-Stack Development",
          description:
            "Complete experience in Frontend and Backend development, with mastery of React.js, HTML5, CSS3, JavaScript, Node.js, Express.js, and Laravel. Able to create complete and scalable web applications, while using databases such as MySQL and MongoDB.",
        },
        {
          title: "UI & UX Design",
          description:
            "Designing user interfaces with Figma focusing on user experience, aesthetics, and functionality. Ability to create interactive prototypes and mockups to improve user experience.",
        },
        {
          title: "Agile Methodologies",
          description:
            "Familiarity with Agile project management methods, including collaboration with teams to accelerate deliveries while ensuring quality and customer satisfaction.",
        },
        {
          title: "Relational Skills and Problem Solving",
          description:
            "Excellent communicator and team player, I work effectively with interdisciplinary teams. Great ability to solve complex problems, ensuring project cohesion and community engagement.",
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
      subtitle: "Développeur Full-Stack & Designer UI/UX",
      greeting: "Salut, je suis",
      typewriter: [
        "Je développe des applications web et mobiles",
        "J'architecte des solutions digitales de A à Z",
        "Je construis des systèmes évolutifs et prêts pour la production",
      ],      
      description:
        "Développeur Full-Stack expérimenté, maîtrisant React.js, Flutter, Laravel et Tailwind CSS. Je transforme des concepts en applications web et mobiles scalables et prêtes pour la production.",
      location: "Casablanca, Maroc",
      available: "Disponible pour de nouveaux projets",
      cta: "Travaillons ensemble",
      downloadCV: "Télécharger le CV",
    },
    // About
    about: {
      title: "À propos de moi",
      role: "Développeur Full-Stack",
      description:
        "Avec une solide maîtrise des technologies front-end et back-end, j'architecte, développe et livre des applications web et mobiles de la conception à la mise en production. Je suis compétent en React.js, Flutter, Laravel et Tailwind CSS, et expérimenté avec les bases de données relationnelles et non relationnelles, garantissant que chaque solution est évolutive, maintenable et alignée sur vos objectifs métier.",
      cta: "Travaillons ensemble",
      downloadCV: "Télécharger CV",
    },
    
    // Expertise
    expertise: {
      title: "Ce que je fais",
      subtitle: "Expertise",
      description: "Voici un aperçu rapide de mes compétences principales et de mon expertise :",
      items: [
        {
          title: "Développement Full-Stack",
          description:
            "Expérience complète en développement Frontend et Backend, avec maîtrise de React.js, HTML5, CSS3, JavaScript, Node.js, Express.js, et Laravel. Capable de créer des applications web complètes et évolutives, tout en utilisant des bases de données telles que MySQL et MongoDB.",
        },
        {
          title: "UI & UX Design",
          description:
            "Conception d'interfaces utilisateurs avec Figma en mettant l'accent sur l'expérience utilisateur, l'esthétique et la fonctionnalité. Capacité à créer des prototypes interactifs et des maquettes pour améliorer l'expérience utilisateur.",
        },
        {
          title: "Méthodologies Agile",
          description:
            "Familiarité avec les méthodes de gestion de projet Agile, notamment la collaboration avec des équipes pour accélérer les livraisons tout en assurant la qualité et la satisfaction client.",
        },
        {
          title: "Compétences Relationnelles et Résolution de Problèmes",
          description:
            "Excellent communicant et esprit d'équipe, je travaille efficacement avec des équipes interdisciplinaires. Grande capacité à résoudre des problèmes complexes, en assurant la cohésion du projet et l'engagement communautaire.",
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
