import { Link } from "react-router-dom";
import SoftAurora from "../ui/SoftAurora";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { motion } from "motion/react";

const checkItems = [
  "Growing problem set",
  "Multi-language support",
  "Hidden test cases",
  "Free forever",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 w-full h-full">
        <SoftAurora
          speed={0.6}
          scale={3.5}
          brightness={1.2}
          color1="#7c3aed"
          color2="#4f46e5"
          noiseFrequency={2.5}
          noiseAmplitude={1.0}
          bandHeight={0.5}
          bandSpread={1.2}
          enableMouseInteraction={true}
          mouseInfluence={0.2}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-[#0a0a0a]/90" />

      <div className="relative z-10 w-full max-w-[90vw] md:max-w-[75vw] mx-auto flex flex-col items-center text-center px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-violet-950/60 text-violet-300 border border-violet-700/40 mb-6 font-mono"
        >
          <span className="w-1.5 h-1.5 animate-pulse rounded-full bg-violet-400" />
          New problems added regularly
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-none mb-6 tracking-tight text-center"
        >
          <span>Master DSA.</span>
          <br />
          Make it{" "}
          <ContainerTextFlip
            words={["better.", "faster.", "consistent.", "interview-ready."]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-sm text-neutral-400 max-w-xs md:max-w-sm leading-relaxed mb-8"
        >
          Practice DSA the right way. Curated problems, instant judge feedback,
          and support for multiple languages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            to="/problems"
            className="w-full sm:w-auto text-sm px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors font-medium text-center"
          >
            Start solving →
          </Link>
          <Link
            to="/problems"
            className="w-full sm:w-auto text-sm px-5 py-2.5 rounded-lg bg-transparent hover:bg-white/5 text-neutral-300 border border-white/10 transition-colors text-center"
          >
            Browse problems
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-12 pt-10 border-t border-white/5 w-full"
        >
          {checkItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="5.5"
                  stroke="#7F77DD"
                  strokeWidth="1"
                />
                <path
                  d="M4.5 7l2 2 3-3"
                  stroke="#7F77DD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs text-neutral-400">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
