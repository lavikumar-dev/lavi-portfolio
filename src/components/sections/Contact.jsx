import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration comes next
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-white">
            Let's Build
            <br />
            Something Together.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            I'm a Computer Science student passionate about software,
            web development, game development, and AI. I'm always
            excited to collaborate, learn from experienced developers,
            and contribute to meaningful projects.
          </p>

          {/* Status */}

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

            <div className="h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />

            <div>

              <h3 className="font-semibold text-white">
                Available for Internship Opportunities
              </h3>

              <p className="text-sm text-slate-400">
                Open to internships, collaborations, and exciting projects.
              </p>

            </div>

          </div>

          {/* Contact Details */}

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                <FaEnvelope />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Email
                </p>

                <h4 className="text-lg font-semibold text-white">
                  lavikum789@gmail.com
                </h4>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                <FaMapMarkerAlt />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Location
                </p>

                <h4 className="text-lg font-semibold text-white">
                  Chandigarh, India
                </h4>

              </div>

            </div>

            <div className="flex gap-4 pt-3">

              <a
                href="https://github.com/lavikumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-4 text-xl text-white duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/lavi-kumar-793042424"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-4 text-xl text-white duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </motion.div>
                {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white">
              Send Me a Message
            </h3>

            <p className="mt-3 text-slate-400">
              Have an opportunity, collaboration, or just want to say hello?
              I'd love to hear from you.
            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-400"
            >
              <FaPaperPlane />

              Send Message
            </button>

            <p className="mt-5 text-center text-sm text-slate-500">
              Your message will be delivered directly to my inbox.
            </p>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;