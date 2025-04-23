"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillsData = [
  { name: "HTML5", imgSrc: "/html-5.png" },
  { name: "CSS3", imgSrc: "/css-3.png" },
  { name: "Javascript", imgSrc: "/js.png" },
  { name: "React.js", imgSrc: "/react.png" },
  { name: "Bootstrap", imgSrc: "/bootstrap.png" },
  { name: "Tailwind CSS", imgSrc: "/tailwind-css.svg" },
  { name: "PHP", imgSrc: "/php.png" },
  { name: "Laravel", imgSrc: "/laravel.svg" },
  { name: "Express.js", imgSrc: "/express-js.svg" },
  { name: "Node.js", imgSrc: "/node.svg" },
  { name: "MySQL", imgSrc: "/mysql.svg" },
  { name: "MongoDB", imgSrc: "/mongodb.svg" },
  { name: "C", imgSrc: "/c.svg" },
  { name: "Java", imgSrc: "/java-icon.svg" },
  { name: "Python", imgSrc: "/python.svg" },
  { name: "Git", imgSrc: "/git.png" },
  { name: "Github", imgSrc: "/github.png" },
  { name: "Linux", imgSrc: "/Linux.svg" },
  { name: "UML", imgSrc: "/UML.svg" },
  { name: "Figma", imgSrc: "/icon-figma.svg" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              Technologies
            </div>
            <h2 className="text-3xl font-bold mb-4">Compétences</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Voici un résumé rapide de mes compétences techniques :
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 justify-items-center">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 p-3 rounded-md bg-white dark:bg-gray-700 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:bg-primary/10">
                  <img
                    src={skill.imgSrc || "/placeholder.svg"}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
