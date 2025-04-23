// src/utils/sendEmail.js

/**
 * Send the contact form to your Node/Express email‐service.
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
  
    try {
      const res = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
  
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        return {
          success: false,
          message: err?.message || "Failed to send message"
        };
      }
  
      const json = await res.json();
      return { success: json.success, message: json.message };
    } catch (error) {
      console.error("Network or server error:", error);
      return {
        success: false,
        message: "Network error — please try again later"
      };
    }
  }
  