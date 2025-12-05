// src/utils/sendEmail.js

import emailjs from '@emailjs/browser';

/**
 * Send the contact form using EmailJS (frontend-only, no backend required).
 * @param {FormData} formData
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendEmail(formData) {
    const name    = formData.get("name");
    const email   = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
  
    if (!name || !email || !subject || !message) {
      return { success: false, message: "All fields are required" };
    }

    // EmailJS configuration - Get these from https://www.emailjs.com/
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID === 'YOUR_SERVICE_ID' || 
        TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      return {
        success: false,
        message: "Email service is not configured. Please set up EmailJS credentials."
      };
    }
  
    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: 'anas.oudadsse1@gmail.com', // Your email address
        }
      );

      if (result.status === 200) {
        return {
          success: true,
          message: "Message sent successfully! I'll get back to you soon."
        };
      } else {
        return {
          success: false,
          message: "Failed to send message. Please try again later."
        };
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      return {
        success: false,
        message: error.text || "Failed to send message. Please try again later."
      };
    }
  }
  