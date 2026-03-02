"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Download, ArrowRight, Terminal, Languages } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export function About() {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [cvDialogOpen, setCvDialogOpen] = useState(false)

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Terminal-like container */}
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
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
            <div className="p-5 sm:p-6 md:p-8 font-mono">
              <div className="flex items-center mb-6 text-sm sm:text-base">
                <span className="text-green-600 dark:text-green-400">$</span>
                <span className="ml-2 text-primary">./get_profile.sh</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                {/* Profile Image */}
                <div className="md:w-1/3 w-full max-w-xs mx-auto md:mx-0">
                  <div className="mb-4 flex items-center text-sm">
                    <span className="text-gray-400 mr-2">$</span>
                    <span className="text-primary">cat profile_image.jpg</span>
                  </div>
                  <div className="border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-1.5 bg-white dark:bg-gray-800">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img src="/mypic-profile.jpeg " alt="Anas Oudadsse" className="w-full h-auto object-cover" />
                    </div>
                    <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
                      &#47;&#47; profile_image.jpg
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:w-2/3 space-y-6 text-center md:text-left">
                  <div>
                    <div className="flex items-center justify-center md:justify-start mb-2 text-sm">
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="text-primary">echo $ROLE</span>
                    </div>
                    <div className="md:pl-6">
                      <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {t("about.role")}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center md:justify-start mb-2 text-sm">
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="text-primary">cat description.txt</span>
                    </div>
                    <div className="md:pl-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-sans leading-relaxed">
                      {t("about.description")}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center md:justify-start mb-3 text-sm">
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="text-primary">./contact_options.sh</span>
                    </div>
                    <div className="md:pl-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button asChild className="rounded-md group bg-black hover:bg-gray-900 text-gray-100 w-full sm:w-auto">
                        <a href="mailto:anas.oudadsse1@gmail.com">
                          {t("about.cta")}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-md group text-gray-900 dark:text-gray-100 border-gray-400 dark:border-gray-600 w-full sm:w-auto"
                        onClick={() => setCvDialogOpen(true)}
                      >
                        <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        {t("about.downloadCV")}
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

      {/* CV Download Dialog */}
      <Dialog open={cvDialogOpen} onOpenChange={setCvDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 !text-gray-900 dark:!text-gray-100">
              <Languages className="h-5 w-5 text-primary" />
              {language === "en" ? "Choose CV Language" : "Choisir la langue du CV"}
            </DialogTitle>
            <DialogDescription className="!text-gray-600 dark:!text-gray-400">
              {language === "en" 
                ? "Select which version of the CV you would like to download."
                : "Sélectionnez la version du CV que vous souhaitez télécharger."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              asChild
              className="w-full group !text-white dark:!text-gray-900 dark:!bg-white dark:hover:!bg-gray-100"
              onClick={() => setCvDialogOpen(false)}
            >
              <a href="/EnglishResumeAnas.pdf" download="AnasOudadsse_CV_English.pdf">
                <Download className="mr-2 h-4 w-4" />
                {language === "en" ? "Download English CV" : "Télécharger le CV en anglais"}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full group !text-gray-900 dark:!text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setCvDialogOpen(false)}
            >
              <a href="/FrenchResumeAnas.pdf" download="AnasOudadsse_CV_Français.pdf">
                <Download className="mr-2 h-4 w-4" />
                {language === "en" ? "Download French CV" : "Télécharger le CV en français"}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
