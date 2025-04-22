"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../../context/language-context"
import { Link } from 'react-router-dom';

export function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <Card className="max-w-5xl mx-auto overflow-hidden shadow-xl border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/3 flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 to-gray-800/10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-primary to-gray-800 blur-md opacity-30" />
                    <div className="relative w-48 h-48 rounded-md overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                      <img src="/myPic-croped.jpg" alt="Anas Oudadsse" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
                    {t("about.title")}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("about.role")}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{t("about.description")}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="rounded-md group">
                      <Link href="mailto:anas.oudadsse1@gmail.com">
                        {t("about.cta")}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-md group">
                      <Link href="/AnasOudadsseCV.pdf" download>
                        <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        {t("about.downloadCV")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
