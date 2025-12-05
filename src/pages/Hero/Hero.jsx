"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/context/language-context";

export function Hero() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex flex-col justify-center overflow-hidden pt-24 pb-16 sm:pb-24 lg:pt-32 min-h-[70vh]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:bg-gray-800 dark:bg-none z-0" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-colv mx-20 -mt-10 lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 text-center lg:text-left space-y-6"
          >
            <div className="inline-block mb-2 sm:mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary !text-gray-900 dark:!text-gray-100 text-xs sm:text-sm font-medium">
              {t("hero.subtitle")}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-100 font-extrabold leading-tight tracking-tight">
              {t("hero.greeting")}{" "}
              <span className="relative">
                <span className="relative z-10 text-gray-900 dark:text-gray-100 bg-clip-text text-transparent">
                  Anas
                </span>
                {/* <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 h-3 bg-primary/20 z-0"
                /> */}
              </span>
            </h1>

            <div className="h-14 sm:h-12 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              <TypeAnimation
                key={language}
                sequence={Array.isArray(t("hero.typewriter")) ? t("hero.typewriter").flatMap((text, i) => [text, 1000]) : []}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>

            <p className="sm:hidden text-sm text-gray-700 dark:text-gray-300">
              {t("hero.description")}
            </p>

            <p className="hidden sm:block text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            <div>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  {t("hero.location")}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-500/10 text-green-500">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  {t("hero.available")}
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-5">
              {[
                {
                  href: "https://github.com/AnasOudadsse",
                  icon: <Github className="h-5 w-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/anas-oudadsse/",
                  icon: <Linkedin className="h-5 w-5" />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:anas.oudadsse1@gmail.com",
                  icon: <Mail className="h-5 w-5" />,
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Button asChild size="lg" className="rounded-md group w-full sm:w-auto">
                  <Link href="#contact">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-md text-gray-900 dark:text-gray-100 w-full sm:w-auto"
                >
                  <a href="/AnasOudadsseCV.pdf" download="AnasOudadsseCV.pdf">
                    {t("hero.downloadCV")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block w-full lg:w-2/5"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gray-800/20 z-0" />
                <img
                  src="/profesional_Pic_Anas.jpeg"
                  alt="Anas Oudadsse"
                  className="relative z-10 w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-md flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}