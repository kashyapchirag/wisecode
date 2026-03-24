import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-[90vw] md:max-w-[75vw] mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-sm text-neutral-500">WiseCode</span>
        <span className="font-mono text-xs text-neutral-600">
          built with ❤️ by{" "}
          <a
            href="https://github.com/kashyapchirag"
            className={
              "hover:text-neutral-400 text-neutral-600 transition-colors duration-300"
            }
          >
            kashyapchirag
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
