"use client";
import { motion } from "framer-motion";
import TestimonialCarousel from "./TestimonialCarousel";

export default function TestimonialSection() {
  return (
    <div>
      <motion.h4
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        نظرات کاربران
      </motion.h4>
      <div dir="ltr" className="space-y-8">
        <TestimonialCarousel direction="right" />
        <TestimonialCarousel direction="left" />
      </div>
    </div>
  );
}
