import { motion } from "motion/react";
import { toast } from "sonner";
import { LogIn, Moon, Sun, User } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import api from "@/api/axios";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const ProblemSetNavbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useOutletContext();
  const handleLogOut = async () => {
    try {
      const res = await api.post(
        "/api/signout",
        {},
        { withCredentials: true },
      );
      setIsLoggedIn(false);
      navigate("/");
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };
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
  return (
    <motion.nav className="flex justify-between items-center py-10 ">
      <span
        className="text-2xl font-mono"
      >
        WiseCode
      </span>
      <div className="flex gap-2">
        <div className="hidden sm:flex font-mono justify-center items-center gap-4 border  border-green-200 bg-green-50 dark:bg-neutral-900 dark:border-neutral-800 p-3 rounded-lg ">
          <span className="dot animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-neutral-500">PLATFORM IS LIVE</span>
        </div>
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={
                  "px-4 py-5 rounded-lg border border-violet-500/30 bg-violet-500/5 text-neutral-500 text-sm font-medium hover:bg-violet-500/10 hover:border-violet-500/40 transition-all duration-200 cursor-pointer"
                }
                variant="outline"
              >
                <UserIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* Future: More options in User menu when user logs in and can see his options example-Profile,Settings,etc */}

              <DropdownMenuItem
                title="Coming soon..."
                // disabled={true}
                className={"cursor-not-allowed"}
              >
                <UserIcon />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  const newTheme = !isDark;
                  document.documentElement.classList.toggle("dark", newTheme);
                  localStorage.setItem("theme", newTheme ? "dark" : "light");
                }}
                className={"py-2"}
              >
                <button className="group relative flex min-w-4.25 items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                  {/* Icon */}
                  <span className="relative flex items-center justify-center">
                    <Sun
                      size={12}
                      className={`absolute transition-all duration-300 ${
                        isDark
                          ? "rotate-0 scale-100 opacity-100 text-yellow-500"
                          : "rotate-90 scale-0 opacity-0"
                      }`}
                    />
                    <Moon
                      size={12}
                      className={`absolute transition-all duration-300 ${
                        isDark
                          ? "-rotate-90 scale-0 opacity-0"
                          : "rotate-0 scale-100 opacity-100 text-blue-400"
                      }`}
                    />
                  </span>
                </button>
                <span
                  className={`transition-all duration-300 ${isDark ? "text-yellow-500" : "text-blue-400"}`}
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </span>
              </DropdownMenuItem>

              {/* <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>  */}

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleLogOut} variant="destructive">
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg 
  border border-violet-500/20 bg-violet-500/5 
  text-violet-400 text-sm font-medium 
  hover:bg-violet-500/10 hover:border-violet-500/40 
  transition-all duration-200 cursor-pointer"
          >
            <LogIn
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Login
          </button>
        )}
      </div>
    </motion.nav>
  );
};

export default ProblemSetNavbar;
