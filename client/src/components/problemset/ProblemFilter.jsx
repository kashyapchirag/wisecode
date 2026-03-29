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

const ProblemFilter = ({ difficulty, setDifficulty, completion }) => {
  //dummy replace by state later

  const [open, setOpen] = useState(false);

  const difficultyStyle = {
    All: "text-neutral-500 dark:text-neutral-400",
    Basic: "text-sky-600 dark:text-sky-400",
    Easy: "text-green-600 dark:text-green-400",
    Medium: "text-yellow-600 dark:text-yellow-400",
    Hard: "text-red-600 dark:text-red-400",
  };

  return (
    <motion.div className="flex flex-col gap-4 ">
      <div className="text-[2.6rem] font-mono font-bold ">Problems</div>
      <div className="flex w-full gap-5 justify-between items-center">
        <span className="w-140 dark:text-neutral-500 text-sm ">
          Sharpen your problem-solving skills. Practice curated coding problems
          across multiple difficulty levels.
        </span>
        <div className="completionStatus text-[12px] font-mono p-3 rounded-lg bg-green-50 border border-green-200 dark:border-neutral-800 dark:bg-neutral-900 flex items-center justify-between gap-5">
          <span className="dark:text-neutral-400 ">Solved</span>
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
              <span className={cn(difficultyStyle[difficulty])}>
                {difficulty}
              </span>

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
                  className={cn(
                    "hover:bg-neutral-400/10 ",
                    difficultyStyle["All"],
                  )}
                  value="All"
                >
                  All
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn(
                    "hover:bg-sky-400/10 ",
                    difficultyStyle["Basic"],
                  )}
                  value="Basic"
                >
                  Basic
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn(
                    "hover:bg-green-400/10 ",
                    difficultyStyle["Easy"],
                  )}
                  value="Easy"
                >
                  Easy
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn(
                    "hover:bg-yellow-400/10 ",
                    difficultyStyle["Medium"],
                  )}
                  value="Medium"
                >
                  Medium
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className={cn("hover:bg-red-400/10", difficultyStyle["Hard"])}
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
