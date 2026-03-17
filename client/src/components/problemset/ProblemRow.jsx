import React from "react";
import { easeInOut, motion } from "motion/react";
import { cn } from "@/utils/cn";
import { Check } from "lucide-react";

const ProblemRow = ({ id, title, difficulty, solved }) => {
  const difficultyStyle = {
    All: "bg-neutral-200 text-neutral-600 dark:bg-neutral-400/10 dark:text-neutral-400",
    Basic: "bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-400",
    Easy: "bg-green-100 text-green-700 dark:bg-green-400/10 dark:text-green-400",
    Medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-400",
    Hard: "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400",
  };
  return (
    <motion.div
      initial={{ paddingInline: 0 }}
      whileHover={{ paddingInline: 12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-16 w-full flex justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
    >
      <div className="left flex justify-start items-center gap-10">
        <span className="text-neutral-500 dark:text-neutral-400">{id}</span>
        <span className="text-neutral-800 dark:text-neutral-300">{title}</span>
      </div>
      <div className="flex gap-3 bg-red- justify-between w-30 items-center">
        <span className="text-green-600 w-10 dark:text-green-500">
          {solved && <Check size={16} />}
        </span>
        <span
          className={cn(difficultyStyle[difficulty], "py-0.5 px-3 rounded-4xl")}
        >
          {difficulty.toUpperCase()}
        </span>
      </div>
    </motion.div>
  );
};

export default ProblemRow;
