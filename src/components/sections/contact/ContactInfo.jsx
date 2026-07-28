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
      <Sequence className="space-y-10">
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
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Available Now
            </span>

            <div className="flex items-start gap-3">
              <div>
                <h3 className="font-semibold text-white">
                  Available for Opportunities
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
            <a
              href="mailto:lavikum789@gmail.com"
              className="group flex items-center gap-4 rounded-2xl transition-all duration-300 hover:translate-x-1"
            >
              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <FaEnvelope size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium text-white transition-colors duration-300 group-hover:text-cyan-400">
                  lavikum789@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Chandigarh,India"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl transition-all duration-300 hover:translate-x-1"
            >
              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <FaMapMarkerAlt size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium text-white transition-colors duration-300 group-hover:text-cyan-400">
                  Chandigarh, India
                </p>
              </div>
            </a>
          </div>
        </EntranceItem>

        {/* Social Links */}
        <EntranceItem>
          <div className="flex gap-4">
            <a
              href="https://github.com/lavikumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="LinkedIn"
              className="cursor-not-allowed rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-slate-500 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400"
              title="LinkedIn profile will be available soon"
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