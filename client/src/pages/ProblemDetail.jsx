import { getProblemBySlug } from "@/api/problemApi";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Group, Panel, Separator } from "react-resizable-panels";
import { cn } from "@/utils/cn";
import CodeEditor from "@/components/editor/CodeEditor";
import axios from "axios";
import TestCasePanel from "@/components/panels/TestCasePanel";
import SubmitPanel from "@/components/panels/SubmitPanel";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { ArrowLeft, ChevronLeft, CornerUpLeft, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemDetail = () => {
  const { slug } = useParams();

  const [problem, setProblem] = useState(null);

  const [code, setCode] = useState("");
  const [acceptedCodes, setAcceptedCodes] = useState({});

  const { isLoggedIn, setIsLoggedIn } = useOutletContext();

  useEffect(() => {
    const getProblemDetail = async () => {
      try {
        const data = await getProblemBySlug(slug);
        setProblem(data.problem);
        if (data.latestByLanguage) {
          setAcceptedCodes(data.latestByLanguage);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    getProblemDetail();
  }, [slug]);

  const [language, setLanguage] = useState(
    localStorage.getItem("lastUsedLanguage") || "Java",
  );

  const difficultyStyle = {
    All: "bg-neutral-200 text-neutral-600 dark:bg-neutral-400/10 dark:text-neutral-400",
    Basic: "bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-400",
    Easy: "bg-green-100 text-green-700 dark:bg-green-400/10 dark:text-green-400",
    Medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-400",
    Hard: "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400",
  };

  const [results, setResults] = useState(null);

  const [loading, setLoading] = useState(false);

  const [panelView, setPanelView] = useState("TestCase");

  const onRun = async () => {
    setLoading(true);
    setPanelView("TestCase");
    try {
      const res = await axios.post(
        "/api/run",
        {
          language,
          code,
          slug,
        },
        { withCredentials: true },
      );
      setLoading(false);
      console.log(res.data.results);
      setResults(res.data.results);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };
  const onSubmit = async () => {
    setLoading(true);
    setPanelView("Submit");
    try {
      const res = await axios.post(
        "/api/submit",
        {
          language,
          code,
          slug,
        },
        { withCredentials: true },
      );
      console.log(res.data.results);
      setResults(res.data.results);
      setLoading(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  //   to check if darkmode is toggled on or not
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navigate = useNavigate();

  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div
      onClick={(e) => {
        setOpenSettings(false);
      }}
      className="w-full h-screen bg-[#fbf9f4] dark:bg-neutral-950 text-black dark:text-white flex flex-col"
    >
      {/* navbar */}
      <div className="h-12 border-b w-full border-neutral-200 dark:border-neutral-800 flex items-center gap-4 px-4">
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="outline"
          className={
            "cursor-pointer h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          }
        >
          <ArrowLeft />
        </Button>
        <span className="font-mono font-bold">WiseCode</span>

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsDark((prev) => !prev);
            localStorage.setItem("theme", newTheme ? "dark" : "light");
          }}
          className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
        >
          {/* Icon */}
          <span className="relative flex items-center justify-center">
            <Sun
              size={16}
              className={`absolute transition-all duration-300 ${
                isDark
                  ? "rotate-0 scale-100 opacity-100 text-yellow-500"
                  : "rotate-90 scale-0 opacity-0"
              }`}
            />
            <Moon
              size={16}
              className={`absolute transition-all duration-300 ${
                isDark
                  ? "-rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100 text-blue-400"
              }`}
            />
          </span>
        </button>
      </div>

      {/* split plane */}
      <Group orientation="horizontal" className="flex-1 overflow-hidden pb-1">
        <Panel defaultSize={40} minSize={30} className="flex h-full">
          <div className="flex-1 m-1 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono p-4 overflow-y-auto">
            {!problem ? (
              // skeleton
              <div className="flex flex-col gap-4">
                {/* title + difficulty */}
                <div className="flex items-center gap-4">
                  <Skeleton className="h-7 w-48" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>

                {/* description */}
                <div className="mt-4 flex flex-col gap-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                {/* example 1 */}
                <div className="mt-6 flex flex-col gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-20 w-full rounded-lg" />
                </div>

                {/* example 2 */}
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-20 w-full rounded-lg" />
                </div>

                {/* constraints */}
                <div className="mt-4 flex flex-col gap-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-56" />
                  <Skeleton className="h-4 w-44" />
                  <Skeleton className="h-4 w-52" />
                </div>

                {/* tags */}
                <div className="mt-4 flex flex-col gap-2">
                  <Skeleton className="h-4 w-20" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                </div>
              </div>
            ) : (
              // actual content
              <>
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

                <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {problem?.description}
                </p>

                <div className="examples mt-10 flex flex-col gap-4">
                  {problem?.examples.map((ex, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-sm font-bold">
                        Example {idx + 1}:
                      </span>
                      <div className="mt-2 bg-surface-light dark:bg-neutral-800 rounded-lg p-3 text-sm flex flex-col gap-2">
                        <div>
                          <span className="text-neutral-500 dark:text-neutral-400">
                            Input:{" "}
                          </span>
                          <span>{ex.input}</span>
                        </div>
                        <div>
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

                {problem?.tags?.length > 0 && (
                  <div className="mt-6 mb-4">
                    <span className="text-sm font-bold">Topics</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {problem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-surface-light dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </Panel>
        <Separator className="w-0.5  hover:bg-cyan-400 outline-none transition-colors cursor-col-resize" />
        <Panel defaultSize={60} minSize={30} className="">
          <Group orientation="vertical" className="h-full flex">
            <Panel defaultSize={90} minSize={50} className="flex h-full">
              <div className="flex-1 m-1 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full">
                <CodeEditor
                  problemNumber={problem?.problemNumber}
                  slug={problem?.slug}
                  starterCode={problem?.starterCode}
                  onRun={onRun}
                  onSubmit={onSubmit}
                  language={language}
                  setLanguage={setLanguage}
                  code={code}
                  acceptedCodes={acceptedCodes}
                  setCode={setCode}
                  isLoggedIn={isLoggedIn}
                  openSettings={openSettings}
                  setOpenSettings={setOpenSettings}
                />
              </div>
            </Panel>

            <Separator className="h-0.5  hover:bg-cyan-400 outline-none transition-colors cursor-col-resize" />

            <Panel defaultSize={60} minSize={49} className="flex h-full">
              <div className="flex-1 m-1 rounded-xl overflow-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                {panelView === "TestCase" ? (
                  <TestCasePanel results={results} loading={loading} />
                ) : (
                  <SubmitPanel results={results} loading={loading} />
                )}
              </div>
            </Panel>
          </Group>
        </Panel>
      </Group>
    </div>
  );
};

export default ProblemDetail;
