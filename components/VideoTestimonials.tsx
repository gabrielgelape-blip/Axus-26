"use client";

import { motion } from "framer-motion";
import { videoTestimonials } from "@/lib/content";
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoTestimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <div className="max-w-xl">
          <p className="section-label">{videoTestimonials.label}</p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
            {videoTestimonials.title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink/65">
            {videoTestimonials.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videoTestimonials.items.map((item, i) => (
            <motion.article
              key={item.name + item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 120, damping: 18 }}
              className="flex flex-col"
            >
              <VideoPlayer
                youtubeId={item.youtubeId}
                poster={item.poster}
                title={`Depoimento — ${item.name}`}
                aspectClass="aspect-[3/4]"
              />
              <div className="mt-4 px-1">
                <p className="text-[15px] font-semibold text-navy">{item.name}</p>
                <p className="mt-0.5 text-[13px] text-ink/50">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
