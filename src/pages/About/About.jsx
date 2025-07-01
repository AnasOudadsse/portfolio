"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Terminal } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Link } from 'react-router-dom';
import { useLanguage } from "@/context/language-context"

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
          {/* Terminal-like container */}
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            {/* Terminal header */}
            <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm font-mono text-gray-600 dark:text-gray-400">about_me.sh</div>
              <Terminal className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono">
              <div className="flex items-center mb-6">
                <span className="text-green-600 dark:text-green-400">$</span>
                <span className="ml-2 text-primary">./get_profile.sh</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image */}
                <div className="md:w-1/3">
                  <div className="mb-2 flex items-center">
                    <span className="text-gray-400 mr-2">$</span>
                    <span className="text-primary">cat profile_image.jpg</span>
                  </div>
                  <div className="border-2 border-gray-300 dark:border-gray-700 rounded-md p-1 bg-white dark:bg-gray-800">
                    <div className="relative overflow-hidden rounded-md">
                      <img src="/myPic-croped.jpg" alt="Anas Oudadsse" className="w-full h-auto object-cover" />
                    </div>
                    <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
                      &#47;&#47; profile_image.jpg
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:w-2/3">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="text-primary">echo $ROLE</span>
                    </div>
                    <div className="pl-6 mb-4">
                      <span className="text-xl font-bold text-gray-800 dark:text-gray-200">{t("about.role")}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="text-primary">cat description.txt</span>
                    </div>
                    <div className="pl-6 mb-4 text-gray-700 dark:text-gray-300 font-sans">{t("about.description")}</div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="text-primary">./contact_options.sh</span>
                    </div>
                    <div className="pl-6 flex flex-col sm:flex-row gap-4">
                      <Button asChild className="rounded-md group bg-black hover:bg-gray-00 text-gray-100">
                        <Link href="mailto:anas.oudadsse1@gmail.com">
                          {t("about.cta")}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-md group text-gray-900 dark:text-gray-100 border-gray-400 dark:border-gray-600"
                      >
                        <Link href="/AnasOudadsseCV.pdf" download>
                          <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                          {t("about.downloadCV")}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-6">
                <span className="text-green-600 dark:text-green-400">$</span>
                <span className="ml-2 text-gray-400 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
