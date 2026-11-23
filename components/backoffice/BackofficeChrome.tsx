"use client";

import { useEffect, useState, type ReactNode } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { backofficeDock } from "@/lib/backoffice";
import { track, whatsappHref } from "@/lib/analytics";
import { BackofficeProvider } from "./BackofficeProvider";

export default function BackofficeChrome({ children }: { children: ReactNode }) {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBar(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <BackofficeProvider>
      {children}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#auditoria"
          onClick={() => track("cta_click", { place: "sticky" })}
          className="btn-primary w-full"
        >
          {backofficeDock.label}
        </a>
      </div>
      <WhatsAppButton
        href={whatsappHref(backofficeDock.whatsappMessage)}
        positionClass={showBar ? "bottom-[5.75rem] md:bottom-8" : "bottom-6 md:bottom-8"}
        onClick={() => track("whatsapp_click", { place: "dock" })}
      />
    </BackofficeProvider>
  );
}
