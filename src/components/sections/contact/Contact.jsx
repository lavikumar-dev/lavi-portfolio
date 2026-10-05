import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ThemeSectionWorld from "../../ui/ThemeSectionWorld";
import useTheme from "../../../personalization/hooks/useTheme";

function Contact() {
  const { design } = useTheme();
  const copy = design?.copy?.contact ?? {};

  return (
    <section id="contact" className="theme-contact relative overflow-hidden px-6 py-28 md:px-12 lg:px-24 lg:py-36">
      <ThemeSectionWorld section="contact" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 max-w-4xl"
        >
          <p className="section-theme-eyebrow">{copy.heading ?? "THE NEXT CHAPTER"}</p>
          <h2 className="section-theme-title mt-5 max-w-4xl">{copy.quote?.[0] ?? "Let's build something meaningful."}</h2>
          <p className="section-theme-description mt-6 max-w-2xl">{copy.quote?.slice(1).join(" ")}</p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactInfo />
          <ContactForm />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="theme-contact-signature mt-12"
        >
          <span>{copy.signature ?? "Crafted with curiosity."}</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
