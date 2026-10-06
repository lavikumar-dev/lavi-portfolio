import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendContactEmail } from "../../../services/emailService";
import { Reveal, Sequence, EntranceItem } from "../../ui/motion";
import { Input, Textarea, SubmitButton } from "../../ui/form";
import LivingCard from "../../ui/LivingCard";
import useTheme from "../../../personalization/hooks/useTheme";

function ContactForm() {
  const { design } = useTheme();
  const copy = design?.copy?.contact ?? {};
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loadingToast = toast.loading("Sending your message...");

    try {
      setLoading(true);
      await sendContactEmail(formData);
      toast.success("Message sent successfully! I'll get back to you soon.", { id: loadingToast });
      setFormData({ name: "", email: "", subject: "", message: "" });
      event.target.reset();
    } catch (error) {
      toast.error(error?.text || error?.message || "Failed to send your message. Please try again.", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <LivingCard className="contact-living-card contact-living-card-form">
        <div className="contact-form-orbit" aria-hidden="true" />
        <Sequence className="relative z-10 space-y-8">
          <EntranceItem>
            <p className="theme-contact-kicker">{copy.button ?? "START A CONVERSATION"}</p>
            <h3 className="theme-contact-form-title">{copy.signature ?? "Tell me what you're building."}</h3>
            <p className="theme-contact-copy">{copy.footer?.[1] ?? "Share an idea, opportunity or problem worth solving."}</p>
          </EntranceItem>

          <EntranceItem>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
              <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
              <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Let's build something meaningful" required />
              <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required />
              <motion.div whileHover={{ y: -2 }}>
                <SubmitButton loading={loading}>Send Message</SubmitButton>
              </motion.div>
            </form>
          </EntranceItem>
        </Sequence>
      </LivingCard>
    </Reveal>
  );
}

export default ContactForm;
