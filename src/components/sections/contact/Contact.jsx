import { Reveal } from "../../ui/motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:px-12 lg:px-24"
    >
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;