import { mockProblems } from "@/utils/mockProblems";
import React from "react";
import ProblemRow from "./ProblemRow";

const ProblemTable = ({ difficulty }) => {
  const filteredProblems = mockProblems.filter((problem) =>
    difficulty == "All" ? true : difficulty === problem.difficulty,
  );
  return (
    <div className="w-full divide-y mt-6 divide-neutral-200 dark:divide-neutral-800">
      {filteredProblems.map((ele, idx) => (
        <ProblemRow
          key={ele.id}
          id={ele.id}
          title={ele.title}
          difficulty={ele.difficulty}
          solved={ele.solved}
        />
      ))}
    </div>
  );
};

export default ProblemTable;
