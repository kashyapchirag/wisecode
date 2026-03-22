import React, { useEffect, useState } from "react";
import ProblemSetNavbar from "../components/problemset/ProblemSetNavbar";
import ProblemFilter from "../components/problemset/ProblemFilter";
import ProblemTable from "@/components/problemset/ProblemTable";
import { easeInOut, motion } from "motion/react";
import { getProblems } from "@/api/problemApi";
import { Skeleton } from "@/components/ui/skeleton";

const ProblemSet = () => {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const [difficulty, setDifficulty] = useState("All");

  const [problems, setProblems] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const data = await getProblems();
      setProblems(data);
    } catch (err) {
      console.log("error while fetching problems", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className="mx-auto max-w-[75vw] min-h-screen font-mono bg-[#fbf9f4] dark:bg-neutral-950 text-black dark:text-white"
    >
      <ProblemSetNavbar />
      <ProblemFilter difficulty={difficulty} setDifficulty={setDifficulty} />
      {loading ? (
        <div className="w-full mt-6 flex flex-col gap-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center h-16 border-b border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-10">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      ) : (
        <ProblemTable problems={problems} difficulty={difficulty} />
      )}
    </motion.div>
  );
};

export default ProblemSet;
