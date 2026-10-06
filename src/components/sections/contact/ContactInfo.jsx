import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Sequence, EntranceItem } from "../../ui/motion";
import LivingCard from "../../ui/LivingCard";
import useTheme from "../../../personalization/hooks/useTheme";

function ContactInfo() {
  const { design } = useTheme();
  const copy = design?.copy?.contact ?? {};

  return (
    <Reveal>
      <Sequence className="contact-living-stack">
        <EntranceItem>
          <LivingCard className="contact-living-card contact-living-card-main">
            <div className="contact-card-orbit" aria-hidden="true"><span /><span /></div>
            <p className="theme-contact-kicker">{copy.heading ?? "CONTACT"}</p>
            <h3 className="theme-contact-title">{copy.footer?.[0] ?? "Let's build something together."}</h3>
            <p className="theme-contact-copy">{copy.footer?.[1] ?? "Every meaningful project begins with a conversation."}</p>
          </LivingCard>
        </EntranceItem>

        <EntranceItem>
          <LivingCard className="contact-living-card contact-living-card-availability">
            <span className="theme-contact-status"><span /> Available for opportunities</span>
            <h4>Open to internships & collaborations</h4>
            <p>Currently open to internships, freelance projects, and collaborative student work.</p>
          </LivingCard>
        </EntranceItem>

        <EntranceItem>
          <LivingCard className="contact-living-card contact-living-card-links">
            <div className="contact-link-grid">
              <a href="mailto:lavikum789@gmail.com" className="theme-contact-link">
                <span className="theme-contact-icon"><FaEnvelope /></span>
                <span><small>Email</small><strong>lavikum789@gmail.com</strong></span>
              </a>
              <a href="https://maps.google.com/?q=Chandigarh,India" target="_blank" rel="noopener noreferrer" className="theme-contact-link">
                <span className="theme-contact-icon"><FaMapMarkerAlt /></span>
                <span><small>Location</small><strong>Chandigarh, India</strong></span>
              </a>
            </div>
            <div className="contact-social-row">
              <a href="https://github.com/lavikumar-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="theme-contact-social"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/lavi-kumar-793042424/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="theme-contact-social"><FaLinkedin /></a>
            </div>
          </LivingCard>
        </EntranceItem>
      </Sequence>
    </Reveal>
  );
}

export default ContactInfo;
