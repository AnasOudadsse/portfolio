"use client"

import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Link } from 'react-router-dom';

const certifData = [
  {
    title: "Programming with JavaScript",
    date: "22 December 2023",
    issuer: "Meta & Coursera",
    description: "An online non-credit course authorized by Meta and offered through Coursera.",
    credentials: "https://coursera.org/verify/RB3VERHZ5NUN",
    skills: ["JavaScript", "ES6+", "Functions"],
    image: "/js-certif.png",
  },
  {
    title: "ALX Ventures Founder Academy",
    date: "24th July 2024",
    completionDate: "30th June 2024",
    issuer: "ALX & Mastercard Foundation",
    description: "For completing the ALX Ventures Founder Academy course and graduation requirements in 2024.",
    credentials: "https://intranet.alxswe.com/certificates/2CyBRCJmep",
    skills: ["Entrepreneurship", "Business Strategy", "Leadership"],
    image: "/alx-certif.png",
  },
  {
    title: "React Basics",
    date: "24 December 2023",
    issuer: "Meta & Coursera",
    description: "An online non-credit course authorized by Meta and offered through Coursera.",
    credentials: "https://coursera.org/verify/4SYCFES8XCL5",
    skills: ["React", "JSX", "State Management"],
    image: "/React-certif.png",
  },
  {
    title: "Software Engineering",
    date: "15 November 2024",
    issuer: "ALX & Holberton School",
    description:
      "This certificate is awarded for successfully completing the 12-month ALX Software Engineering Programme with a specialization in Back-end development.",
    credentials: "https://intranet.alxswe.com/certificates/T2CRES7nmF",
    skills: [
      "Back-end Development",
      "Software Engineering",
      "Programming",
      "Data Structures & Algorithms",
      "Database Management",
      "API Development",
      "System Design",
      "Debugging & Problem-Solving",
      "Version Control (Git & GitHub)",
    ],
    image: "/Se-alx.png",
  },
  {
    title: "Version Control",
    date: "25 December 2023",
    issuer: "Meta & Coursera",
    description: "An online non-credit course authorized by Meta and offered through Coursera.",
    credentials: "https://coursera.org/verify/P58AGWZ4DRZ6",
    skills: ["Git", "GitHub", "Version Control"],
    image: "/git-certif.png",
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [flippedCards, setFlippedCards] = useState(Array(certifData.length).fill(false))
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleFlip = (index) => {
    const newFlippedState = [...flippedCards]
    newFlippedState[index] = !newFlippedState[index]
    setFlippedCards(newFlippedState)
  }

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              Formations
            </div>
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and courses I&apos;ve completed to enhance my skills.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifData.map((certif, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative w-full h-[320px] transition-transform duration-700 transform-style-3d cursor-pointer ${
                  flippedCards[index] ? "rotate-y-180" : ""
                }`}
                onClick={() => handleFlip(index)}
              >
                {/* Front Side */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-md overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 ${
                    flippedCards[index] ? "invisible" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <img
                    src={certif.image || "/placeholder.svg"}
                    alt={certif.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Hover effect */}
                  <AnimatePresence>
                    {hoveredIndex === index && !flippedCards[index] && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="bg-black/50 text-white px-4 py-2 rounded-md">Click for details</div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-lg font-bold text-white">{certif.title}</h3>
                    <p className="text-sm text-gray-300">{certif.issuer}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-md overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-6 rotate-y-180 ${
                    !flippedCards[index] ? "invisible" : ""
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-bold mb-1 text-primary">{certif.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issuer: {certif.issuer}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Date of Issue: {certif.date}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 flex-grow">{certif.description}</p>

                    <div className="mt-auto">
                      <p className="text-xs font-semibold mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {certif.skills.slice(0, 5).map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {certif.skills.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{certif.skills.length - 5} more
                          </Badge>
                        )}
                      </div>

                      <Button asChild size="sm" className="w-full rounded-md group">
                        <Link href={certif.credentials} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          View Certificate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
