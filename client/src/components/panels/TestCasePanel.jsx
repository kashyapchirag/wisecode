import React, { useState } from "react";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { cn } from "@/utils/cn";

const TestCasePanel = ({ results, loading }) => {
  const [activeTab, setActiveTab] = useState(0);
  const passedCases = results?.filter((r) => r.passed).length;
  const totalCases = results?.length;
  let compileError = false;

  if (results?.filter((re) => re.status == "Compilation Error").length > 0) {
    compileError = true;
  }

  return (
    <div className="flex flex-col font-mono h-full">
      {/* nav */}
      <div className="bg-surface-light h-10 flex gap-2 items-center dark:bg-neutral-800 w-full py-2.5 px-4 rounded-t-xl">
        <span className="text-neutral-500 dark:text-neutral-300">Output</span>
        {loading && (
          <span className="text-neutral-500 dark:text-neutral-300 animate-spin">
            <Loader2 size={14} />
          </span>
        )}
        {!loading && results && (
          <span
            className={cn(
              "flex justify-center items-center",
              results.every((r) => r.passed)
                ? "text-green-500"
                : "text-red-500",
            )}
          >
            {results.every((r) => r.passed) ? (
              <span className="flex text-xs  items-center gap-1">
                <CheckCircle size={13} />
                All Passed
              </span>
            ) : (
              !compileError && (
                <span className="flex text-xs  items-center gap-1">
                  <XCircle size={13} />
                  Some Failed
                </span>
              )
            )}
          </span>
        )}
      </div>
      {/* body */}
      {loading && (
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-sm animate-pulse text-neutral-500 dark:text-neutral-300">
            Processing
          </span>
        </div>
      )}

      {!loading && !results && (
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-sm text-neutral-500 dark:text-neutral-300">
            Waiting for Execution
          </span>
        </div>
      )}
      {results && !loading && !compileError && (
        <div className="py-3 px-4 h-full">
          {/* tabs */}
          <div className="tabs flex gap-4">
            {results.map((result, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                }}
                className={cn(
                  "px-3 py-1 rounded-lg border transition-all cursor-pointer",
                  activeTab === idx
                    ? "border-neutral-400 dark:border-neutral-500 bg-surface-light dark:bg-neutral-800"
                    : "border-neutral-200 dark:border-neutral-700 text-neutral-400",
                  result.passed ? " text-green-500" : " text-red-500",
                )}
              >
                Case {idx + 1}
              </button>
            ))}
          </div>

          {/* result showcase */}

          <div className="output mt-4 flex flex-col gap-4 pb-8">
            <div className="input flex flex-col gap-2">
              <span className="text-neutral-400">Input</span>
              <div className="box bg-surface-light dark:bg-neutral-800 rounded-lg px-3 py-2 whitespace-pre">
                <div>{results[activeTab].input}</div>
              </div>
            </div>
            <div className="input flex flex-col gap-2">
              <span className="text-neutral-400">Expected</span>
              <div className="box bg-surface-light dark:bg-neutral-800 rounded-lg px-3 py-3 whitespace-pre">
                <div>{results[activeTab].expectedOutput}</div>
              </div>
            </div>
            <div className="input flex flex-col gap-2">
              <span className="text-neutral-400">Output</span>
              <div
                className={cn(
                  `box bg-surface-light min-h-10 dark:bg-neutral-800 rounded-lg px-3 py-3 whitespace-pre`,
                  results[activeTab].passed
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500",
                )}
              >
                <div>{results[activeTab].actualOutput ?? "null"}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && results && compileError && (
        <div className="pb-4">
          <div className="h-25 flex flex-col justify-center items-center ">
            <span className="text-red-700 dark:text-red-400 text-xl">
              Compilation Error
            </span>
            <span className="mt-2">
              {passedCases} / {totalCases} test cases passed
            </span>
          </div>
          <div className="divider mb-4 bg-neutral-200 dark:bg-neutral-800 w-[95%] mx-auto h-0.5 "></div>
          <div className="error px-5 flex flex-col gap-3">
            <span className="text-neutral-500">Error</span>
            <div className="bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 whitespace-pre-wrap rounded-lg">
              {results[0].compileOutput}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestCasePanel;
