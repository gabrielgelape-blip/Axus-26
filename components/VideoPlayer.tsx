"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type VideoPlayerProps = {
  youtubeId?: string;
  poster: string;
  title: string;
  className?: string;
  aspectClass?: string;
};

export default function VideoPlayer({
  youtubeId,
  poster,
  title,
  className = "",
  aspectClass = "aspect-video",
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(youtubeId);

  return (
    <div
      className={`organic-lg relative overflow-hidden bg-navy/90 shadow-glass-lg ${aspectClass} ${className}`}
    >
      {playing && hasVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            disabled={!hasVideo}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white transition-transform hover:scale-[1.01] disabled:cursor-default"
            aria-label={hasVideo ? `Reproduzir: ${title}` : `Vídeo em breve: ${title}`}
          >
            <motion.span
              whileHover={hasVideo ? { scale: 1.08 } : undefined}
              whileTap={hasVideo ? { scale: 0.96 } : undefined}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan text-navy shadow-glass md:h-20 md:w-20"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </motion.span>
            {!hasVideo && (
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                Em breve
              </span>
            )}
          </button>
        </>
      )}
    </div>
  );
}
