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

import { ChevronDown } from "lucide-react";

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

const langExtensions = {
  Javascript: javascript(),
  Python: python(),
  Cpp: cpp(),
  Java: java(),
};
const CodeEditor = ({ starterCode }) => {
  const [language, setLanguage] = useState("Java");

  const [code, setCode] = useState("");

  useEffect(() => {
    if (starterCode) {
      setCode(starterCode.java || ""); // load when data arrives
    }
  }, [starterCode]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(starterCode?.[lang.toLowerCase()]);
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

  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col ">
      {/* navbar */}
      <div className="flex p-2">
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
      </div>

      {/* editor */}
      <CodeMirror
        value={code}
        onChange={(val) => {
          setCode(val);
        }}
        height="100%"
        theme={isDark ? tokyoNight : githubLight}
        extensions={[langExtensions[language]]}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          foldGutter: true,
          autocompletion: true,
          tabSize: 2,
        }}
        className="flex-1 rounded-xl"
      />
    </div>
  );
};

export default CodeEditor;
