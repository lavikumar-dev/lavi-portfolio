import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Sequence, EntranceItem } from "../../ui/motion";
import useTheme from "../../../personalization/hooks/useTheme";

function ContactInfo() {
  const { design } = useTheme();
  const copy = design?.copy?.contact ?? {};

  return (
    <Reveal>
      <Sequence className="space-y-8">
        <EntranceItem>
          <div className="theme-contact-panel theme-contact-panel-main">
            <p className="theme-contact-kicker">{copy.heading ?? "CONTACT"}</p>
            <h3 className="theme-contact-title">{copy.footer?.[0] ?? "Let's build something together."}</h3>
            <p className="theme-contact-copy">{copy.footer?.[1] ?? "Every meaningful project begins with a conversation."}</p>
          </div>
        </EntranceItem>

        <EntranceItem>
          <motion.div whileHover={{ y: -4 }} className="theme-contact-availability">
            <span className="theme-contact-status"><span /> Available for opportunities</span>
            <h4>Open to internships & collaborations</h4>
            <p>Currently open to internships, freelance projects, and collaborative student work.</p>
          </motion.div>
        </EntranceItem>

        <EntranceItem>
          <div className="theme-contact-links">
            <a href="mailto:lavikum789@gmail.com" className="theme-contact-link">
              <span className="theme-contact-icon"><FaEnvelope /></span>
              <span><small>Email</small><strong>lavikum789@gmail.com</strong></span>
            </a>
            <a href="https://maps.google.com/?q=Chandigarh,India" target="_blank" rel="noopener noreferrer" className="theme-contact-link">
              <span className="theme-contact-icon"><FaMapMarkerAlt /></span>
              <span><small>Location</small><strong>Chandigarh, India</strong></span>
            </a>
          </div>
        </EntranceItem>

        <EntranceItem>
          <div className="flex gap-3">
            <a href="https://github.com/lavikumar-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="theme-contact-social"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/lavi-kumar-793042424/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="theme-contact-social"><FaLinkedin /></a>
          </div>
        </EntranceItem>
      </Sequence>
    </Reveal>
  );
}

export default ContactInfo;
