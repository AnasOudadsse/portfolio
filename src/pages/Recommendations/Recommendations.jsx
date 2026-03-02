"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

const recommendationsData = [
  {
    name: "Fouzia Kharbouchi",
    role: {
      en: "Supply Chain Engineer",
      fr: "Ingénieure en supply chain",
    },
    relationship: {
      en: "Worked with Anas on different teams",
      fr: "A travaillé avec Anas dans des équipes différentes",
    },
    date: "March 2024",
    text: {
      en: "I highly endorse Anas for his exceptional intelligence and unwavering dedication to his work. Having closely collaborated with him on several occasions during various events, I have consistently witnessed his impressive capabilities and relentless commitment to excellence. Anas consistently surpasses expectations and exhibits outstanding qualities that make him a valuable asset in any endeavor.",
      fr: "Je recommande vivement Anas pour son intelligence exceptionnelle et son engagement indéfectible dans son travail. Ayant étroitement collaboré avec lui à plusieurs reprises lors de différents événements, j'ai constamment constaté ses capacités impressionnantes et son engagement inlassable envers l'excellence. Anas dépasse systématiquement les attentes et démontre des qualités remarquables qui font de lui un atout précieux dans tout projet.",
    },
    image: null,
    linkedinUrl: "https://www.linkedin.com/in/anas-oudadsse/",
  },
];

const translations = {
  en: {
    label: "Testimonials",
    title: "Recommendations",
    description:
      "What colleagues and managers have said about working with me.",
    viewOnLinkedin: "View all on LinkedIn",
  },
  fr: {
    label: "Témoignages",
    title: "Recommandations LinkedIn",
    description:
      "Ce que mes collègues et responsables ont dit à propos de notre collaboration.",
    viewOnLinkedin: "Tout voir sur LinkedIn",
  },
};

export function Recommendations() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const t = translations[language] || translations.en;

  const next = useCallback(() => {
    if (recommendationsData.length <= 1) return;
    setDirection(1);
    setActive((prev) => (prev + 1) % recommendationsData.length);
  }, []);

  const prev = useCallback(() => {
    if (recommendationsData.length <= 1) return;
    setDirection(-1);
    setActive(
      (prev) =>
        (prev - 1 + recommendationsData.length) % recommendationsData.length
    );
  }, []);

  useEffect(() => {
    if (recommendationsData.length <= 1) return;
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [active, next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const rec = recommendationsData[active];
  const initials = rec.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="recommendations"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
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

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                {/* Left panel — person info */}
                <div className="bg-[#0A66C2] p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/5" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/[0.03]" />

                  <div className="relative z-10 flex flex-col items-center">
                    <Linkedin className="h-6 w-6 mb-5 opacity-60" />

                    {rec.image ? (
                      <img
                        src={rec.image}
                        alt={rec.name}
                        className="w-20 h-20 rounded-full object-cover border-[3px] border-white/30 mb-4"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-white/15 border-[3px] border-white/30 flex items-center justify-center text-2xl font-bold mb-4">
                        {initials}
                      </div>
                    )}

                    <h3 className="font-bold text-lg">{rec.name}</h3>
                    <p className="text-white/70 text-sm mt-1">
                      {rec.role[language] || rec.role.en}
                    </p>
                    <div className="w-8 h-px bg-white/30 my-3" />
                    <p className="text-white/50 text-xs">
                      {rec.relationship[language] || rec.relationship.en}
                    </p>
                    {rec.date && (
                      <p className="text-white/40 text-xs mt-1">{rec.date}</p>
                    )}
                  </div>
                </div>

                {/* Right panel — quote */}
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 flex flex-col justify-between relative">
                  <div>
                    <Quote className="h-8 w-8 text-[#0A66C2]/15 mb-4 rotate-180" />
                    <blockquote className="text-gray-700 dark:text-gray-300 text-base sm:text-[17px] leading-relaxed">
                      {rec.text[language] || rec.text.en}
                    </blockquote>
                  </div>

                  {/* Navigation — only show if multiple recommendations */}
                  {recommendationsData.length > 1 && (
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex gap-2">
                        {recommendationsData.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setDirection(i > active ? 1 : -1);
                              setActive(i);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              i === active
                                ? "w-8 bg-[#0A66C2]"
                                : "w-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                            }`}
                            aria-label={`Recommendation ${i + 1}`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-gray-200 dark:border-gray-600"
                          onClick={prev}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-gray-200 dark:border-gray-600"
                          onClick={next}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LinkedIn CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button
              asChild
              variant="outline"
              className="rounded-lg group text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5"
            >
              <a
                href="https://www.linkedin.com/in/anas-oudadsse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4 text-[#0A66C2]" />
                {t.viewOnLinkedin}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
