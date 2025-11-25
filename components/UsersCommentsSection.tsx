"use client";
import { motion } from "framer-motion";
import CommentCarousel from "./CommentCarousel";

export default function UsersCommentsSection() {
  return (
    <div>
      <motion.h4
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }} // پایین‌تر و نامرئی
        whileInView={{ opacity: 1, y: 0 }} // سر جای اصلی و مرئی
        viewport={{ once: true, margin: "-100px" }} // فقط یکبار اجرا شود
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        نظرات کاربران
      </motion.h4>
      <div className="space-y-8">
        <CommentCarousel speed={1} />
        <CommentCarousel speed={-1} />
      </div>
    </div>
  );
}
