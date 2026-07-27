"use client";

import { motion } from "framer-motion";
import { presentationVideo } from "@/lib/content";
import VideoPlayer from "@/components/VideoPlayer";

export default function PresentationVideo() {
  return (
    <section
      id="apresentacao"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">{presentationVideo.label}</p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
            {presentationVideo.title}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/65 md:text-[18px]">
            {presentationVideo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1, type: "spring", stiffness: 110, damping: 18 }}
          className="mx-auto mt-12 max-w-4xl md:mt-14"
        >
          <VideoPlayer
            youtubeId={presentationVideo.youtubeId}
            poster={presentationVideo.poster}
            title={presentationVideo.title}
          />
        </motion.div>
      </div>
    </section>
  );
}
