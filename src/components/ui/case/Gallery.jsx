import { motion } from "framer-motion";
import {
  Images,
  Expand,
} from "lucide-react";

export default function Gallery({
  images = [],
  onImageClick,
}) {
  if (!images.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300">
          <Images size={16} />
          Project Gallery
        </div>

        <h2 className="mt-5 text-4xl font-bold text-white">
          Visual walkthrough
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          A collection of screenshots showcasing important parts of the
          project, including the interface, gameplay, interactions, and
          overall visual design.
        </p>
      </motion.div>

      {/* Gallery */}

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {images.map((image, index) => (

          <motion.button
            key={image}
            type="button"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            onClick={() => onImageClick(index)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 text-left"
          >

            <motion.img
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.45,
              }}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="aspect-[16/10] h-full w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

            {/* Expand */}

            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:opacity-100">

              <Expand size={18} />

            </div>

            {/* Counter */}

            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:opacity-100">
              Image {index + 1}
            </div>

          </motion.button>

        ))}

      </div>

      {/* Bottom Banner */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.25,
        }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 p-8"
      >

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

          <div>

            <h3 className="text-2xl font-bold text-white">
              Explore every screen in detail.
            </h3>

            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              Click any image to open it in full-screen mode and inspect the
              interface, interactions, and visual details more closely.
            </p>

          </div>

          <div className="rounded-full bg-violet-500/15 p-5">
            <Images
              size={34}
              className="text-violet-400"
            />
          </div>

        </div>

      </motion.div>

    </section>
  );
}