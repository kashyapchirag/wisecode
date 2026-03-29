import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const EditorSettingsModal = ({
  open,
  setOpen,
  fontSize,
  setFontSize,
  theme,
  editorTheme,
  setEditorTheme,
}) => {
  //   const [theme, setTheme] = useState("tokyoNight");
  return (
    <div
      onClick={() => setOpen(false)}
      className="absolute inset-0 w-full h-full"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 z-50 w-[240px] 
    rounded-xl 
    bg-white/80 dark:bg-neutral-900/80 
    backdrop-blur-xl 
    border border-neutral-200 dark:border-neutral-800 
    shadow-xl 
    text-black dark:text-white 
    p-4 flex flex-col gap-4"
      >
        {/* HEADER */}
        <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 pb-2">
          <span className="text-[10px] tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            Settings
          </span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* THEME */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            Theme
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex justify-between items-center px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-800/60 text-sm">
                {editorTheme ? theme : "System Default"}
                <ChevronDown size={14} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 p-1">
              <DropdownMenuRadioGroup
                value={editorTheme ?? "system"}
                onValueChange={(value) => {
                  if (value === "system") {
                    setEditorTheme(null);
                    localStorage.removeItem("editorTheme");
                  } else {
                    setEditorTheme(value);
                    localStorage.setItem("editorTheme", value);
                  }
                }}
              >
                {/* SYSTEM DEFAULT */}
                <DropdownMenuRadioItem
                  value="system"
                  className="px-2 py-1.5 rounded-md font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  System Default
                </DropdownMenuRadioItem>

                {/* SEPARATOR */}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-1" />

                {/* DARK THEMES */}
                <div className="px-2 py-1 text-[10px] uppercase tracking-wide text-neutral-400">
                  Dark
                </div>

                {[
                  { value: "tokyoNight", label: "Tokyo Night" },
                  { value: "dracula", label: "Dracula" },
                  { value: "okaidia", label: "Okaidia" },
                  { value: "nord", label: "Nord" },
                ].map((t) => (
                  <DropdownMenuRadioItem
                    key={t.value}
                    value={t.value}
                    className="px-2 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {t.label}
                  </DropdownMenuRadioItem>
                ))}

                {/* SEPARATOR */}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-1" />

                {/* LIGHT THEMES */}
                <div className="px-2 py-1 text-[10px] uppercase tracking-wide text-neutral-400">
                  Light
                </div>

                {[
                  { value: "githubLight", label: "GitHub Light" },
                  { value: "solarizedLight", label: "Solarized Light" },
                  { value: "materialLight", label: "Material Light" },
                  { value: "duotoneLight", label: "Duotone Light" },
                ].map((t) => (
                  <DropdownMenuRadioItem
                    key={t.value}
                    value={t.value}
                    className="px-2 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {t.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* FONT SIZE */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Font Size</span>
            <span>{fontSize}px</span>
          </div>

          <Slider
            value={[fontSize]}
            max={30}
            min={10}
            step={1}
            onValueChange={(val) => {
              setFontSize(val[0]);
              localStorage.setItem("fontSize", val[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorSettingsModal;
