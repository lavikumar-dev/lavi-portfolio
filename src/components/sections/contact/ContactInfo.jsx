import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  Reveal,
  Sequence,
  EntranceItem,
} from "../../ui/motion";

function ContactInfo() {
  return (
    <Reveal>
      <Sequence className="space-y-8">
        {/* Section Heading */}
        <EntranceItem>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Let's Build Something Together
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Whether it's a portfolio, web application, game, or an exciting
            collaboration, I'm always open to discussing new ideas and creating
            meaningful digital experiences.
          </p>
        </EntranceItem>

        {/* Availability Card */}
        <EntranceItem>
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>

              <div>
                <h3 className="font-semibold text-white">
                  Available for Opportunities
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Currently open to internships, freelance projects, and
                  collaborative student work.
                </p>
              </div>
            </div>
          </div>
        </EntranceItem>

        {/* Contact Details */}
        <EntranceItem>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                <FaEnvelope size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium text-white">
                  lavikum789@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                <FaMapMarkerAlt size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium text-white">
                  Chandigarh, India
                </p>
              </div>
            </div>
          </div>
        </EntranceItem>

        {/* Social Links */}
        <EntranceItem>
          <div className="flex gap-4">
            <a
              href="https://github.com/lavikumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </EntranceItem>
      </Sequence>
    </Reveal>
  );
}

export default ContactInfo;