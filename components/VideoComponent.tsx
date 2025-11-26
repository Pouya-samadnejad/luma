"use client";
import { motion } from "framer-motion";
interface VideoProps {
  src: string;
  type: string;
}

export default function VideoComponent({ src, type }: VideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto mt-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
    >
      <video className="w-full h-fit min-h-96" controls preload="none">
        <source src={src} type={type} />
        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
      </video>
    </motion.div>
  );
}
