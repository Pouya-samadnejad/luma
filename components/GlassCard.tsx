"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({
  className,
  children,
  glowColor = "",
}: {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300",

        "bg-white/40 border-black/5 text-slate-900",

        "dark:bg-black/20 dark:border-white/10 dark:text-white",

        "backdrop-blur-md shadow-sm hover:shadow-md",

        className
      )}
    >
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-[100px] w-full  blur-[80px] opacity-40 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />

      {children}
    </motion.div>
  );
}
