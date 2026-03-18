import { mockProblems } from "@/utils/mockProblems";
import React, { useEffect } from "react";
import ProblemRow from "./ProblemRow";

const ProblemTable = ({ problems, difficulty }) => {
  const filteredProblems = problems.filter((problem) =>
    difficulty == "All" ? true : difficulty === problem.difficulty,
  );
  return (
    <div className="w-full divide-y mt-6 divide-neutral-200 dark:divide-neutral-800">
      {filteredProblems.map((ele, idx) => (
        <ProblemRow
          key={ele._id}
          id={idx + 1}
          title={ele.title}
          slug={ele.slug}
          difficulty={ele.difficulty}
          solved={ele.solved}
        />
      ))}
    </div>
  );
};

export default ProblemTable;
