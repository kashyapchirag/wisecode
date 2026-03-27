import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import CodeMirror from "@uiw/react-codemirror";

import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { tokyoNight } from "@uiw/codemirror-themes-all";
import { githubLight } from "@uiw/codemirror-themes-all";

import { ChevronDown, Settings } from "lucide-react";
import { Play, Send } from "lucide-react";

//shadcn dropdown import
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { IconReload } from "@tabler/icons-react";

const langExtensions = {
  Javascript: javascript(),
  Python: python(),
  Cpp: cpp(),
  Java: java(),
};
const CodeEditor = ({
  starterCode,
  onRun,
  onSubmit,
  language,
  setLanguage,
  code,
  acceptedCodes,
  setCode,
  isLoggedIn,
}) => {
  useEffect(() => {
    if (starterCode) {
      setCode(acceptedCodes.Java || starterCode.java); // load when data arrives
    }
  }, [starterCode]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(acceptedCodes[lang] || starterCode?.[lang.toLowerCase()]);
  };

  const languageStyle = {
    Javascript: "text-yellow-600",
    Python: "text-blue-500",
    Cpp: "text-sky-400",
    Java: "text-orange-500",
  };

  //   to check if darkmode is toggled on or not
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const [editorThemeIsActive, setEditorThemeIsActive] = useState(false);

  let editorTheme = null;

  const theme = editorThemeIsActive
    ? editorTheme
    : isDark
      ? tokyoNight
      : githubLight;

  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col w-full">
      {/* navbar */}
      <div className="flex justify-between p-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 h-7 rounded-xl flex justify-between items-center cursor-pointer"
            >
              <span className={cn(languageStyle[language])}>{language}</span>

              <motion.span
                className="dark:text-neutral-400"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {<ChevronDown />}
              </motion.span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={language}
                onValueChange={handleLanguageChange}
              >
                <DropdownMenuRadioItem
                  className={cn(
                    "hover:bg-neutral-400/10 ",
                    languageStyle["Java"],
                  )}
                  value="Java"
                >
                  Java
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn("hover:bg-sky-400/10 ", languageStyle["Cpp"])}
                  value="Cpp"
                >
                  Cpp
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn(
                    "hover:bg-green-400/10 ",
                    languageStyle["Python"],
                  )}
                  value="Python"
                >
                  Python
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn(
                    "hover:bg-yellow-400/10 ",
                    languageStyle["Javascript"],
                  )}
                  value="Javascript"
                >
                  Javascript
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="options flex gap-2">
          {/* Reload */}
          <button
            onClick={() => {
              setCode(starterCode?.[language.toLowerCase()]);
            }}
            className="group relative flex h-8 w-8 items-center justify-center rounded-lg 
    border border-neutral-200 dark:border-neutral-800 
    bg-white/70 dark:bg-neutral-900/70 backdrop-blur
    transition-all duration-300 
    hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800
    cursor-pointer"
          >
            <IconReload
              size={16}
              className="text-neutral-600 dark:text-neutral-400 
      group-hover:text-black dark:group-hover:text-white transition-colors"
            />
          </button>

          {/* Settings */}
          <button
            className="group relative flex h-8 w-8 items-center justify-center rounded-lg 
    border border-neutral-200 dark:border-neutral-800 
    bg-white/70 dark:bg-neutral-900/70 backdrop-blur
    transition-all duration-300 
    hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800
    cursor-pointer"
          >
            <Settings
              size={16}
              className="text-neutral-600 dark:text-neutral-400 
      group-hover:text-black dark:group-hover:text-white transition-colors"
            />
          </button>
        </div>
      </div>

      {/* editor */}
      <CodeMirror
        key={isDark}
        value={code}
        onChange={(val) => {
          setCode(val);
        }}
        height="100%"
        theme={theme}
        extensions={[langExtensions[language]]}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          foldGutter: true,
          autocompletion: true,
          tabSize: 2,
        }}
        className="flex-1 overflow-y-auto "
      />

      <div className="bottom flex justify-end gap-2 bg-transparent px-1 py-1 w-full h-10 ">
        {isLoggedIn ? (
          <>
            <button
              onClick={onRun}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-40 hover:bg-surface-light dark:hover:bg-neutral-800 dark:hover:border-neutral-500 hover:text-black dark:hover:text-white transition-all cursor-pointer"
            >
              <Play size={12} />
              Run
            </button>
            <button
              onClick={onSubmit}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/20 hover:border-green-500/60 transition-all cursor-pointer"
            >
              <Send size={12} />
              Submit
            </button>
          </>
        ) : (
          <div className=" text-blue-400 text-sm px-4 py-2 rounded-md mb-2">
            You need to{" "}
            <span className="">
              <NavLink
                className="font-medium text-blue-700 hover:text-blue-800 
    dark:text-neutral-300 dark:hover:text-white transition-colors"
                to={"/login"}
              >
                Log in / Sign up
              </NavLink>
            </span>{" "}
            to run or submit
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
