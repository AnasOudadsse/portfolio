import React, { useState } from "react";
import { sendEmail } from "./sendEmail";

export function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(new FormData(e.target));
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name"    placeholder="Your name"    required />
      <input name="email"   placeholder="Your email"   type="email" required />
      <input name="subject" placeholder="Subject"       required />
      <textarea name="message" placeholder="Message"   required />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
   