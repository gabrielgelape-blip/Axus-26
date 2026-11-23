"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { backofficeBrand, backofficeHero } from "@/lib/backoffice";
import { track, whatsappHref } from "@/lib/analytics";

function BlueprintOverlay() {
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
        maskImage: "radial-gradient(ellipse 28% 42% at 50% 46%, transparent 40%, #000 78%)",
        WebkitMaskImage: "radial-gradient(ellipse 28% 42% at 50% 46%, transparent 40%, #000 78%)",
      }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" fill="none" aria-hidden>
        <polyline {...stroke} points="120,40 220,120 340,190 470,250 560,300" opacity="0.35" />
        <polyline {...stroke} points="1500,70 1380,150 1240,230 1100,300 1020,340" opacity="0.35" />
        <line {...stroke} x1="560" y1="300" x2="640" y2="360" opacity="0.25" strokeDasharray="5 7" />
        <line {...stroke} x1="1020" y1="340" x2="940" y2="390" opacity="0.25" strokeDasharray="5 7" />
      </svg>
    </div>
  );
}

export default function BackofficeHero() {
  const reduce = useReducedMotion();

  return (
    <section id="topo" className="relative flex min-h-[100svh] items-center overflow-hidden text-white">
      <div className="hero-apple-bg absolute inset-0" />
      <div className="absolute inset-0 scale-110">
        <Image
          src={backofficeHero.image}
          alt={backofficeHero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/55 via-navy/62 to-navy-dark/92" />
      <BlueprintOverlay />

      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-6 pb-28 pt-32 text-center md:px-8 md:pb-32 md:pt-36">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/axus-logo-tipo-branca.png"
            alt="Axus Engenharia"
            width={771}
            height={326}
            priority
            className="mx-auto h-auto w-[min(68vw,220px)] object-contain md:w-[250px]"
          />
          <p className="mt-4 text-[13px] font-medium tracking-wide text-white/75">{backofficeBrand.tagline}</p>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl text-[32px] font-extrabold leading-[1.12] tracking-tight md:text-[48px]"
        >
          {backofficeHero.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/78 md:text-[18px]"
        >
          {backofficeHero.subheadline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#auditoria"
            onClick={() => track("cta_click", { place: "hero" })}
            className="btn-primary w-full sm:w-auto"
          >
            {backofficeHero.primaryCta}
          </a>
          <a
            href={whatsappHref(backofficeHero.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              track("cta_click", { place: "hero_whatsapp" });
              track("whatsapp_click", { place: "hero" });
            }}
            className="btn-ghost-light w-full sm:w-auto"
          >
            {backofficeHero.secondaryCta}
          </a>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 max-w-lg text-[14px] leading-relaxed text-white/70"
        >
          {backofficeHero.proof}
        </motion.p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {backofficeHero.seals.map((seal) => (
            <li key={seal} className="glass-dark rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide text-white/90">
              {seal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
