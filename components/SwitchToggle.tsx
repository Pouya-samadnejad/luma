"use client";

import { Moon, Sun } from "lucide-react";
import * as motion from "motion/react-client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SwitchToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="w-20 h-10 rounded-full bg-[#3C0061] opacity-50" />;
  }

  const isDark = resolvedTheme === "dark";

  const toggleSwitch = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      className={`
          relative flex w-20 h-10 p-1 cursor-pointer rounded-full items-center
          bg-[#3C0061] outline-none transition-colors duration-500
          ${isDark ? "justify-start" : "justify-end"}
      `}
      onClick={toggleSwitch}
      aria-label="Toggle Dark Mode"
    >
      <Moon size={20} className="absolute left-2.5 z-0 text-white" />

      <Sun size={20} className="absolute right-2.5 z-0 text-white" />

      <motion.div
        className="h-8 w-8 rounded-full bg-white shadow-sm z-10"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}
