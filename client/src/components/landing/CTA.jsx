import { Link } from "react-router-dom";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 border-b border-white/5">
      <div className="max-w-[90vw] md:max-w-[75vw] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-white/5 text-neutral-400 border border-white/10 mb-6 font-mono">
            free forever
          </div>

          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 max-w-md leading-tight">
            Ready to start solving?
          </h2>

          <p className="text-sm text-neutral-500 mb-8 max-w-xs leading-relaxed">
            No credit card. No account needed to browse. Just pick a problem and
            start.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Link
              to="/register"
              className="w-full sm:w-auto text-sm px-6 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors font-medium text-center"
            >
              Create free account →
            </Link>
            <Link
              to="/problems"
              className="w-full sm:w-auto text-sm px-6 py-2.5 rounded-lg bg-transparent hover:bg-white/5 text-neutral-400 border border-white/10 transition-colors text-center"
            >
              Browse problems
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xs text-neutral-700 mt-6 font-mono"
          >
            built with React · Express · MongoDB · Judge0
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
