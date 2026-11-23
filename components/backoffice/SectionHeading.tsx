import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={light ? "text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan" : "section-label"}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-[30px] font-extrabold leading-tight md:text-[42px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={`mt-4 text-[16px] leading-relaxed md:text-[18px] ${
            light ? "text-white/70" : "text-ink/65"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
