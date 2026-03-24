import FeatureCard from "./FeatureCard";
import { motion } from "motion/react";

import ShinyText from "../ShinyText";
const features = [
  {
    iconBg: "#1a1a2e",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 7h10M7 2l5 5-5 5"
          stroke="#7F77DD"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Instant feedback",
    description:
      "Run your code against real test cases and see results immediately.",
  },
  {
    iconBg: "#0f1a0f",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 10l3-3 2 2 5-6"
          stroke="#3B6D11"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Track your progress",
    description:
      "See your solved problems, acceptance rate and submission history.",
  },
  {
    iconBg: "#1a0f0f",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect
          x="2"
          y="2"
          width="4"
          height="4"
          rx="1"
          stroke="#993C1D"
          strokeWidth="1.2"
        />
        <rect
          x="8"
          y="2"
          width="4"
          height="4"
          rx="1"
          stroke="#993C1D"
          strokeWidth="1.2"
        />
        <rect
          x="2"
          y="8"
          width="4"
          height="4"
          rx="1"
          stroke="#993C1D"
          strokeWidth="1.2"
        />
        <rect
          x="8"
          y="8"
          width="4"
          height="4"
          rx="1"
          stroke="#993C1D"
          strokeWidth="1.2"
        />
      </svg>
    ),
    title: "4 difficulty tiers",
    description:
      "Basic to Hard. Build confidence before tackling the tough ones.",
  },
  {
    iconBg: "#1a1a0f",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="5" r="2.5" stroke="#854F0B" strokeWidth="1.2" />
        <path
          d="M2 12c0-2.2 2.2-4 5-4s5 1.8 5 4"
          stroke="#854F0B"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Runtime stats",
    description: "See execution time and memory usage after every submission.",
  },
  {
    iconBg: "#0f1a1a",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect
          x="2"
          y="3"
          width="10"
          height="8"
          rx="1.5"
          stroke="#0F6E56"
          strokeWidth="1.2"
        />
        <path
          d="M5 6.5h4M5 8.5h2"
          stroke="#0F6E56"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Resizable panels",
    description:
      "Split-pane layout — adjust problem, editor and output to your liking.",
  },
  {
    iconBg: "#1a1a2e",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M4 4l3 3-3 3M8 10h4"
          stroke="#534AB7"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Multiple themes",
    description:
      "Switch editor themes and font size from settings. Code your way.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-20 border-b border-white/5">
      <div className="max-w-[90vw] md:max-w-[75vw] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-white/5 text-neutral-400 border border-white/10 mb-4 font-mono">
            everything you need
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
            Built for{" "}
            <ShinyText
              text="serious"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />{" "}
            practice
          </h2>
          <p className="text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Everything you need to go from beginner to interview-ready, in one
            place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
