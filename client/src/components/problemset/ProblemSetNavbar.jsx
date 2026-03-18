import { easeInOut, motion } from "motion/react";

const ProblemSetNavbar = () => {
  return (
    <motion.nav className="flex justify-between items-center py-10 dark:selection:bg-cyan-400/20">
      <span
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
        className="cursor-pointer text-2xl font-mono"
      >
        WiseCode
      </span>
      <div className="flex font-mono justify-center items-center gap-4 border dark:selection:bg-cyan-400/20 border-green-200 bg-green-50 dark:bg-neutral-900 dark:border-neutral-800 p-3 rounded-lg ">
        <span className="dot animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="text-xs text-neutral-500">PLATFORM IS LIVE</span>
      </div>
    </motion.nav>
  );
};

export default ProblemSetNavbar;
