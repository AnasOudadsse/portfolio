"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, GitMerge, Users } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const icons = [
  <Code className="w-[40px] h-[40px]" />,
  <Palette className="w-[40px] h-[40px]" />,
  <GitMerge className="w-[40px] h-[40px]" />,
  <Users className="w-[40px] h-[40px]" />,
]

export default function Expertise() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const items = t && t("expertise.items")

  return (
    <section id="expertise" className="flex items-center">
      <div className="w-full px-10 py-20 bg-gray-50 dark:bg-gray-900 min-h-[550px]">
        {/* Title and Heading */}
        <div className="flex flex-col items-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">{t ? t("expertise.subtitle") : "Expertise"}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-[600px]">
            {t
              ? t("expertise.description")
              : "Voici un aperçu rapide de mes compétences principales et de mon expertise :"}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center">
          {Array.isArray(items) && items.map((item, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-md p-10 shadow-md transition-transform duration-300 hover:-translate-y-2.5 hover:border-b-4 hover:border-gray-700 dark:hover:border-gray-300"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full shadow-sm flex justify-center items-center w-[60px] h-[60px] mb-3 text-primary">
                  {icons[index]}
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <h3 className="text-lg font-bold mb-5 text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-blue-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
