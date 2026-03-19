import { getProblemBySlug } from "@/api/ProblemApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Group, Panel, Separator } from "react-resizable-panels";
import { cn } from "@/utils/cn";
import CodeEditor from "@/components/editor/CodeEditor";

const ProblemDetail = () => {
  const { slug } = useParams();

  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const getProblemDetail = async () => {
      const data = await getProblemBySlug(slug);
      setProblem(data);
    };
    getProblemDetail();
  }, [slug]);

  const difficultyStyle = {
    All: "bg-neutral-200 text-neutral-600 dark:bg-neutral-400/10 dark:text-neutral-400",
    Basic: "bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-400",
    Easy: "bg-green-100 text-green-700 dark:bg-green-400/10 dark:text-green-400",
    Medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-400",
    Hard: "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400",
  };

  return (
    <div className="w-full h-screen bg-[#fbf9f4] dark:bg-neutral-950 text-black dark:text-white flex flex-col">
      {/* navbar */}
      <div className="h-12 border-b w-full border-neutral-200 dark:border-neutral-800 flex items-center px-4">
        <span
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
          className="font-mono font-bold"
        >
          WiseCode
        </span>
      </div>

      {/* split plane */}
      <Group orientation="horizontal" className="flex-1 overflow-hidden pb-1">
        <Panel defaultSize={40} minSize={30} className="flex h-full">
          <div className="flex-1 m-1 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono p-4 overflow-y-auto">
            <div className="flex items-center gap-5">
              <span className="text-2xl flex gap-1">
                <span className="text-neutral-500 dark:text-neutral-400">
                  {problem?.problemNumber}.
                </span>
                <span>{problem?.title}</span>
              </span>
              <span
                className={cn(
                  difficultyStyle[problem?.difficulty],
                  "py-1 px-3 flex justify-center items-center rounded-4xl",
                )}
              >
                {problem?.difficulty.toUpperCase()}
              </span>
            </div>

            {/* description */}
            <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {problem?.description}
            </p>

            {/* examples */}
            <div className="examples mt-10 flex flex-col gap-4">
              {problem?.examples.map((ex, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm font-bold">Example {idx + 1}:</span>
                  <div className="mt-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-sm flex flex-col gap-2">
                    <div className="">
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Input:{" "}
                      </span>
                      <span>{ex.input}</span>
                    </div>
                    <div className="">
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Ouput:{" "}
                      </span>
                      <span>{ex.output}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Explanation:{" "}
                      </span>
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {ex?.explanation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* constraints */}
            {problem?.constraints?.length > 0 && (
              <div className="mt-6">
                <span className="text-sm font-bold">Constraints:</span>
                <ul className="mt-2 flex flex-col gap-1">
                  {problem.constraints.map((c, index) => (
                    <li
                      key={index}
                      className="text-sm ml-2 text-neutral-600 dark:text-neutral-400 flex gap-2"
                    >
                      <span>•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Panel>
        <Separator className="w-0.5  hover:bg-cyan-400 outline-none transition-colors cursor-col-resize" />
        <Panel defaultSize={60} minSize={30} className="">
          <Group orientation="vertical" className="h-full flex">
            <Panel defaultSize={90} minSize={30} className="flex h-full">
              <div className="flex-1 m-1 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <CodeEditor
                  slug={problem?.slug}
                  starterCode={problem?.starterCode}
                />
              </div>
            </Panel>

            <Separator className="h-0.5  hover:bg-cyan-400 outline-none transition-colors cursor-col-resize" />

            <Panel defaultSize={60} minSize={30} className="flex h-full">
              <div className="flex-1 m-1 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <div className="flex p-2"></div>
              </div>
            </Panel>
          </Group>
        </Panel>
      </Group>
    </div>
  );
};

export default ProblemDetail;
