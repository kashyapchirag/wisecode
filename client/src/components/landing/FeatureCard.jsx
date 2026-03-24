import { motion } from "motion/react";

const FeatureCard = ({ icon, title, description, iconBg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="bg-[#111] border border-white/5 rounded-xl p-5 flex flex-col gap-4 hover:border-white/10 transition-colors group"
    >
      {/* icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
        style={{ background: iconBg }}
      >
        {icon}
      </div>

      {/* text */}
      <div className="flex flex-col gap-1.5">
        <div className="text-sm font-medium text-neutral-200">{title}</div>
        <div className="text-xs text-neutral-500 leading-relaxed">
          {description}
        </div>
      </div>

      {/* subtle bottom accent line */}
      <div
        className="mt-auto h-px w-0 group-hover:w-full transition-all duration-300 rounded-full opacity-40"
        style={{ background: iconBg.replace("0f", "ff").replace("1a", "aa") }}
      />
    </motion.div>
  );
};

export default FeatureCard;
