import React, { useState } from "react";
import ProblemSetNavbar from "../components/problemset/ProblemSetNavbar";
import ProblemFilter from "../components/problemset/ProblemFilter";
import ProblemTable from "@/components/problemset/ProblemTable";
import { easeInOut, motion } from "motion/react";

const ProblemSet = () => {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const [difficulty, setDifficulty] = useState("All");
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className="w-full min-h-screen font-mono bg-[#fbf9f4] dark:bg-neutral-950 text-black dark:text-white px-2"
    >
      <ProblemSetNavbar />
      <ProblemFilter difficulty={difficulty} setDifficulty={setDifficulty} />
      <ProblemTable difficulty={difficulty} />
    </motion.div>
  );
};

export default ProblemSet;
