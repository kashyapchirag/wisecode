import { easeInOut, motion } from "motion/react";
import { cn } from "../../utils/cn";
import { useState } from "react";
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

const ProblemFilter = () => {
  //dummy replace by state later
  const completion = 10;

  const [difficulty, setDifficulty] = useState("All");

  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className="flex flex-col gap-4 dark:selection:bg-cyan-400/20"
    >
      <div className="text-[2.6rem] font-mono font-bold dark:selection:bg-cyan-400/20">
        Problems
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="w-140 dark:text-neutral-500 text-sm dark:selection:bg-cyan-400/20">
          Master JavaScript fundamentals through deliberate practice. Extreme
          minimalism, functional precision.
        </span>
        <div className="completionStatus font-mono flex p-3 w-50 dark:selection:bg-cyan-400/20 rounded-lg bg-green-50 border border-green-200 dark:border-neutral-800 dark:bg-neutral-900 items-center justify-between">
          <span className="dark:text-neutral-400 ">COMPLETION STATUS</span>
          <span
            className={cn(
              completion > 0
                ? "text-green-600"
                : "text-red-500 dark:text-red-100",
            )}
          >
            {completion}%
          </span>
        </div>
      </div>
      <div className="flex mt-3 justify-start font-mono items-center gap-5">
        <span className="dark:text-neutral-400">Filter</span>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 w-40 flex justify-between items-center cursor-pointer"
            >
              <span className="dark:text-neutral-300 ">{difficulty}</span>

              <motion.span
                className="dark:text-neutral-400"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {<ChevronDown />}
              </motion.span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Select Difficulty</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={difficulty}
                onValueChange={setDifficulty}
              >
                <DropdownMenuRadioItem
                  className={"hover:bg-neutral-400/10 text-neutral-400"}
                  value="All"
                >
                  All
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={"hover:bg-sky-400/10 text-sky-400"}
                  value="Basic"
                >
                  Basic
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={"hover:bg-green-400/10 text-green-400"}
                  value="Easy"
                >
                  Easy
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={"hover:bg-yellow-400/10 text-yellow-400"}
                  value="Medium"
                >
                  Medium
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={"hover:bg-red-400/10 text-red-400"}
                  value="Hard"
                >
                  Hard
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
};

export default ProblemFilter;
