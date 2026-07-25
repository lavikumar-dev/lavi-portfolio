import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ImageLightbox({
  images = [],
  selectedImage,
  onClose,
}) {
  if (selectedImage === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-300"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Image */}
        <motion.img
          src={images[selectedImage]}
          alt="Project Preview"
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
          }}
          transition={{
            duration: 0.3,
          }}
          className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl object-contain"
        />

        {/* Counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white backdrop-blur-lg">
          {selectedImage + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}