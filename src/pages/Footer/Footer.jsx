"use client"

import { useRef, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { useLanguage } from "@/context/language-context"
import { useToast } from "@chakra-ui/react";
import { sendEmail } from "@/actions/sendEmail";

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.target)
    const result = await sendEmail(formData)

    setIsSubmitting(false)

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
        variant: "success",
      })
      event.target.reset()
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      })
    }
  }

  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-950 to-transparent z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <div className="inline-block !text-gray-900 dark:!text-gray-100 px-3 py-1 mb-4 rounded-md bg-primary/10 text-primary text-sm font-medium">
              {t("contact.title")}
            </div>
            <h2 className="text-3xl font-bold mb-4 !text-gray-900 dark:!text-gray-100">{t("contact.subtitle")}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("contact.description")}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 max-w-5xl mx-auto mb-16 sm:mb-20 !text-gray-900 dark:!text-gray-100">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6">{t("contact.formTitle")}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.namePlaceholder")}
                    className="rounded-lg dark:!bg-gray-600 border-gray-300 dark:!border-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    className="rounded-lg dark:!bg-gray-600 border-gray-300 dark:!border-gray-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t("contact.subjectPlaceholder")}
                  className="rounded-lg dark:!bg-gray-600 border-gray-300 dark:!border-gray-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  rows={5}
                  className="rounded-lg resize-none dark:!bg-gray-600 border-gray-300 dark:!border-gray-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full rounded-lg group" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : t("contact.send")}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between space-y-10 md:space-y-0"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">{t("contact.contactInfo")}</h3>
              <div className="space-y-4 mb-8">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>anas.oudadsse1@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16v-2m0-6v2m6 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
                  </svg>
                  <span>{t("hero.location")}</span>
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">{t("contact.followMe")}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AnasOudadsse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anas-oudadsse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:anas.oudadsse1@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-2xl">
              <h4 className="font-bold mb-2">{t("contact.available")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("contact.availableDesc")}</p>
              <Button asChild variant="default" size="sm" className="rounded-lg">
                <a href="mailto:anas.oudadsse1@gmail.com">{t("contact.contactMe")}</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <div className="mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 !text-gray-900 dark:!text-gray-100">Anas Oudadsse</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t("footer.description")}</p>
            </div>

          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Anas Oudadsse. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
