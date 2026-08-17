"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { hero, contact } from "@/lib/content";

/** Sparse cyan strokes along the inner rooflines (upper X / A legs). Hidden on small screens where object-cover crops those edges. */
function HeroBlueprintOverlay() {
  const stroke = {
    stroke: "#00B8D8",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden scale-110 md:block"
      style={{
        maskImage:
          "radial-gradient(ellipse 24% 40% at 50% 48%, transparent 42%, #000 82%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 24% 40% at 50% 48%, transparent 42%, #000 82%)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 1067"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden
      >
        <polyline
          {...stroke}
          points="147,30 198,80 250,120 296,160 338,200 389,240 421,280 460,300"
          opacity="0.28"
        />
        <polyline
          {...stroke}
          points="1559,85 1488,120 1410,160 1337,200 1273,240 1181,280 1123,310"
          opacity="0.28"
        />
        <line
          {...stroke}
          x1="460"
          y1="300"
          x2="500"
          y2="329"
          opacity="0.2"
          strokeDasharray="5 7"
        />
        <line
          {...stroke}
          x1="1123"
          y1="310"
          x2="1091"
          y2="327"
          opacity="0.2"
          strokeDasharray="5 7"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-white">
      <div className="hero-apple-bg absolute inset-0" />
      <div className="absolute inset-0 scale-110">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.38]"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy/50 to-navy-dark/90" />
      <HeroBlueprintOverlay />

      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-6 pb-28 pt-32 text-center md:px-8 md:pb-32 md:pt-36">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <Image
            src="/axus-logo-tipo-branca.png"
            alt="Axus Engenharia"
            width={771}
            height={326}
            priority
            className="h-auto w-[min(72vw,260px)] object-contain md:w-[300px]"
          />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-2xl text-[36px] font-extrabold leading-[1.1] tracking-tight md:mt-12 md:text-[56px]"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-md text-[16px] leading-relaxed text-white/75 md:text-[18px]"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shadow-glass-lg"
          >
            {hero.primaryCta}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#servicos"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-cyan"
      >
        {hero.scrollCta}
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
