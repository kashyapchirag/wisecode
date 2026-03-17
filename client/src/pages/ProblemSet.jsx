import React from "react";
import ProblemSetNavbar from "../components/problemset/ProblemSetNavbar";
import ProblemFilter from "../components/problemset/ProblemFilter";
import ProblemRow from "@/components/problemset/ProblemRow";

const ProblemSet = () => {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="w-full h-screen bg-[#fbf9f4] dark:bg-neutral-950 text-black dark:text-white">
      <ProblemSetNavbar />
      <ProblemFilter />
      <ProblemRow />
    </div>
  );
};

export default ProblemSet;
