"use client";

import { useRef, useState, useEffect } from "react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Award,
  Calendar,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const CertifData = [
  {
    title: { en: "AI Fundamentals", fr: "Fondamentaux de l'IA" },
    date: "26 February 2026",
    issuer: { en: "GOOGLE", fr: "GOOGLE" },
    description: {
      en: "An online non-credit course authorized by Google and offered through Coursera, covering fundamental generative AI concepts, prompt engineering, and responsible AI use.",
      fr: "Un cours en ligne sans crédit autorisé par Google et proposé via Coursera, couvrant les concepts fondamentaux de l'IA générative, l'ingénierie de prompts et l'utilisation responsable de l'IA.",
    },
    credentials: "https://coursera.org/verify/R56QXAEH7O1V",
    skills: [
      "Artificial Intelligence",
      "Generative AI",
      "Prompt Engineering",
      "Machine Learning",
      "Responsible AI",
      "Gemini",
    ],
    image: "/Coursera-Ai-Essentilas.jpg",
    accent: "from-blue-500 to-green-500",
  },
  {
    title: { en: "Software Engineering", fr: "Ingénierie Logicielle" },
    date: "15 November 2024",
    issuer: { en: "ALX AFRICA", fr: "ALX AFRICA" },
    description: {
      en: "This certificate is awarded for successfully completing the 12-month ALX Software Engineering Programme with a specialization in Back-end development.",
      fr: "Ce certificat est décerné pour avoir réussi le programme d'ingénierie logicielle ALX de 12 mois avec une spécialisation en développement Back-end.",
    },
    credentials: "https://intranet.alxswe.com/certificates/T2CRES7nmF",
    skills: [
      "Back-end Development",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Management",
      "API Development",
      "System Design",
      "Debugging & Problem-Solving",
      "Version Control (Git & GitHub)",
    ],
    image: "/Se-alx.png",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: { en: "Programming With JavaScript", fr: "Programmation avec JavaScript" },
    date: "22 December 2023",
    issuer: { en: "META", fr: "META" },
    description: {
      en: "An online non-credit course authorized by Meta and offered through Coursera.",
      fr: "Un cours en ligne sans crédit autorisé par Meta et proposé via Coursera.",
    },
    credentials: "https://coursera.org/verify/RB3VERHZ5NUN",
    skills: ["JavaScript", "ES6+", "Functions"],
    image: "/js-certif.png",
    accent: "from-yellow-500 to-yellow-600",
  },
  {
    title: { en: "React Basics", fr: "Fondamentaux de React" },
    date: "24 December 2023",
    issuer: { en: "META", fr: "META" },
    description: {
      en: "An online non-credit course authorized by Meta and offered through Coursera.",
      fr: "Un cours en ligne sans crédit autorisé par Meta et proposé via Coursera.",
    },
    credentials: "https://coursera.org/verify/4SYCFES8XCL5",
    skills: ["React", "JSX", "State Management"],
    image: "/React-certif.png",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: { en: "Version Control", fr: "Contrôle de Version" },
    date: "25 December 2023",
    issuer: { en: "META", fr: "META" },
    description: {
      en: "An online non-credit course authorized by Meta and offered through Coursera.",
      fr: "Un cours en ligne sans crédit autorisé par Meta et proposé via Coursera.",
    },
    credentials: "https://coursera.org/verify/P58AGWZ4DRZ6",
    skills: ["Git", "GitHub", "Version Control"],
    image: "/git-certif.png",
    accent: "from-orange-500 to-red-500",
  },
];

const translations = {
  en: {
    label: "Credentials",
    title: "My Certifications",
    description:
      "Professional certifications and courses I've completed to sharpen my skills.",
    skills: "Skills",
    issuer: "Issuer",
    dateOfIssue: "Date of Issue",
    viewCertificate: "Verify Certificate",
    hoverHint: "Hover for details",
    tapHint: "Tap for details",
  },
  fr: {
    label: "Accréditations",
    title: "Mes Certifications",
    description:
      "Certifications professionnelles et cours que j'ai complétés pour améliorer mes compétences.",
    skills: "Compétences",
    issuer: "Émetteur",
    dateOfIssue: "Date d'émission",
    viewCertificate: "Vérifier le certificat",
    hoverHint: "Survolez pour les détails",
    tapHint: "Cliquez pour les détails",
  },
};

export default function Certifications() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const t = translations[language] || translations.en;

  const [flippedCards, setFlippedCards] = useState(
    Array(CertifData.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const flipCard = (index, state) => {
    setFlippedCards((prev) => {
      const next = [...prev];
      next[index] = state;
      return next;
    });
  };

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary dark:text-white text-sm font-medium">
              {t.label}
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CertifData.map((certif, index) => {
            const isFlipped = flippedCards[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                className="[perspective:1200px]"
                onMouseEnter={() => !isMobile && flipCard(index, true)}
                onMouseLeave={() => !isMobile && flipCard(index, false)}
                onClick={() => isMobile && flipCard(index, !isFlipped)}
              >
                <div
                  className="relative w-full h-[320px] sm:h-[340px] transition-transform duration-700 [transform-style:preserve-3d]"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* ---- FRONT ---- */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group">
                    <img
                      src={certif.image}
                      alt={certif.title[language] || certif.title.en}
                      className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Issuer pill */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm">
                        <Building2 className="h-3 w-3" />
                        {certif.issuer[language] || certif.issuer.en}
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-1 drop-shadow-md">
                        {certif.title[language] || certif.title.en}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/80 text-xs">
                        <Calendar className="h-3.5 w-3.5" />
                        {certif.date}
                      </div>
                    </div>

                    {/* Hint badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-full">
                      {isMobile ? t.tapHint : t.hoverHint}
                    </div>
                  </div>

                  {/* ---- BACK ---- */}
                  <div
                    className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col"
                  >
                    {/* Accent strip */}
                    <div
                      className={`h-1.5 w-full bg-gradient-to-r ${certif.accent}`}
                    />

                    <div className="flex flex-col flex-grow p-5 sm:p-6 overflow-y-auto">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">
                        {certif.title[language] || certif.title.en}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {certif.issuer[language] || certif.issuer.en}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {certif.date}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {certif.description[language] || certif.description.en}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {certif.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-[11px] px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-0"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full rounded-lg group/btn text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-primary/50 hover:bg-primary/5"
                        >
                          <a
                            href={certif.credentials}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Award className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                            {t.viewCertificate}
                            <ExternalLink className="ml-auto h-3.5 w-3.5 opacity-40 group-hover/btn:opacity-100 transition-opacity" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
