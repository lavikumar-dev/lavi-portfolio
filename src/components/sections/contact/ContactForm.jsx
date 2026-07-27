import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "../../../services/emailService";

import {
  Reveal,
  Sequence,
  EntranceItem,
} from "../../ui/motion";

import {
  Input,
  Textarea,
  SubmitButton,
} from "../../ui/form";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactEmail(formData);

      alert("✅ Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("========== EMAILJS ERROR ==========");
      console.error(error);

      alert(
        `Status: ${error?.status || "Unknown"}\n\nText: ${
          error?.text || error?.message || "Unknown Error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl"
      >
        {/* Decorative Glow */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <Sequence className="relative z-10 space-y-8">
          {/* Heading */}
          <EntranceItem>
            <div>
              <h3 className="text-3xl font-bold text-white">
                Send Me a Message
              </h3>

              <p className="mt-2 text-slate-400">
                Have an idea or opportunity? Fill out the form below and I'll
                get back to you as soon as possible.
              </p>
            </div>
          </EntranceItem>

          {/* Form */}
          <EntranceItem>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />

              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let's build something amazing"
                required
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
              />

              <SubmitButton loading={loading}>
                Send Message
              </SubmitButton>
            </form>
          </EntranceItem>

          {/* Footer */}
          <EntranceItem>
            <p className="text-center text-sm text-slate-500">
              I'll usually respond within{" "}
              <span className="text-cyan-400">24 hours</span>.
            </p>
          </EntranceItem>
        </Sequence>
      </motion.div>
    </Reveal>
  );
}

export default ContactForm;