import SoftAurora from "@/components/ui/SoftAurora";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";
import { div } from "three/src/nodes/math/OperatorNode";
import { placeholder } from "@uiw/react-codemirror";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(
    location.pathname === "/register" ? "Sign up" : "Sign in",
  );

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const Field = ({
    labelId,
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
  }) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label
          className="text-[11px] uppercase tracking-wide text-neutral-500"
          htmlFor={labelId}
        >
          {label}
        </label>
        <input
          id={labelId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-300 placeholder:text-neutral-600 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
        />
      </div>
    );
  };

  const SignIn = () => {
    const [form, setForm] = useState({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = () => {
      const newErrors = {};
      if (!form.email) {
        newErrors.email = "Email is required";
      }
      if (!form.password) {
        newErrors.password = "Password is required";
      } else if (form.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) return;

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    return (
      <div className="w-full flex flex-col gap-4">
        <div>
          <h2 className="text-base font-semibold text-white">Welcome Back</h2>
          <p className="text-xs text-neutral-400">
            Sign in to your WiseCode account
          </p>
        </div>
        <div className="form flex flex-col gap-3 w-full">
          <Field
            labelId={"email"}
            label={"EMAIL"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={handleChange}
            placeholder={"you@example.com"}
          />
          {errors.email && (
            <p className="text-xs px-2 text-red-400">{errors.email}</p>
          )}
          <Field
            labelId={"password"}
            label={"PASSWORD"}
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={handleChange}
            placeholder={"••••••••"}
          />
          {errors.password && (
            <p className="text-xs px-2 text-red-400">{errors.password}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:hover:bg-violet-600 disabled:opacity-60 text-sm font-medium text-white transition-all disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </button>
        <p className="text-xs text-neutral-500 text-center">
          Don't have an account?
          <span
            onClick={() => handleTabChange("Sign up")}
            className="text-violet-400 hover:text-violet-300 cursor-pointer ml-1"
          >
            Sign up
          </span>
        </p>
      </div>
    );
  };

  const SignUp = () => {
    const [form, setForm] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = () => {
      let newErrors = {};

      if (!form.email) {
        newErrors.email = "Email is required";
      }

      if (!form.password) {
        newErrors.password = "Password is required";
      } else if (form.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }

      if (!form.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) return;

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    return (
      <div className="w-full flex flex-col gap-4">
        <div>
          <h2 className="text-base font-semibold text-white">Create Account</h2>
          <p className="text-xs text-neutral-400">
            Start solving problems today
          </p>
        </div>
        <div className="form flex flex-col gap-3 w-full">
          <Field
            labelId={"email"}
            label={"EMAIL"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={handleChange}
            placeholder={"you@example.com"}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 px-1">{errors.email}</p>
          )}
          <Field
            labelId={"password"}
            label={"PASSWORD"}
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={handleChange}
            placeholder={"Min. 8 characters"}
          />
          {errors.password && (
            <p className="text-red-400 text-xs mt-1 px-1">{errors.password}</p>
          )}
          <Field
            labelId={"confirmPassword"}
            label={"CONFIRM PASSWORD"}
            type={"password"}
            name={"confirmPassword"}
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder={"Re-enter password"}
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs mt-1 px-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-2 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:hover:bg-violet-600 disabled:opacity-60 text-sm font-medium text-white transition-all disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Signing up...
            </span>
          ) : (
            "Create Account"
          )}
        </button>
        <p className="text-xs text-neutral-500 text-center">
          Already have an account?
          <span
            onClick={() => handleTabChange("Sign in")}
            className="text-violet-400 hover:text-violet-300 cursor-pointer ml-1"
          >
            Sign in
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="relative font-inter text-sm flex justify-center bg-[#0a0a0a] items-center h-screen">
      {/* background shader */}
      <div className="absolute inset-0 w-full h-screen">
        <SoftAurora
          speed={0.4}
          scale={2}
          brightness={0.6}
          color1="#7c3aed"
          color2="#4f46e5"
          enableMouseInteraction={false}
        />
      </div>

      <motion.div
        layout
        className="authSetup rounded-2xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.15)] w-95"
      >
        {/* tabs */}
        <div
          className={
            "tab relative flex w-full h-12 rounded-t-2xl justify-center items-center border-b border-violet-500/20"
          }
        >
          <div
            onClick={() => handleTabChange("Sign in")}
            className={cn(
              "w-full h-full flex justify-center items-center cursor-pointer transition-colors duration-200",
              currentTab === "Sign in"
                ? "text-white font-bold"
                : "text-neutral-500 hover:text-neutral-300",
            )}
          >
            Sign in
          </div>
          <div
            onClick={() => handleTabChange("Sign up")}
            className={cn(
              "w-full h-full flex justify-center items-center cursor-pointer transition-colors duration-200",
              currentTab === "Sign up"
                ? "text-white font-bold"
                : "text-neutral-500 hover:text-neutral-300",
            )}
          >
            Sign up
          </div>
          <motion.div
            initial={{ translateX: currentTab === "Sign in" ? "0%" : "100%" }}
            animate={{ translateX: currentTab === "Sign in" ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="violetLine absolute left-0 bottom-0 w-1/2 h-0.5 bg-linear-to-r from-violet-500 to-indigo-500"
          ></motion.div>
        </div>
        {/* render signin/signup */}
        <div className="overflow-hidden">
          <div className="p-4">
            <AnimatePresence mode="wait">
              {currentTab === "Sign in" ? (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SignIn />
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SignUp />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
