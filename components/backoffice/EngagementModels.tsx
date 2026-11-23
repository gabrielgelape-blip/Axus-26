"use client";

import { models, type BackofficeModelId } from "@/lib/backoffice";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";
import { useBackofficeModel } from "./BackofficeProvider";

export default function EngagementModels() {
  const { model, setModel } = useBackofficeModel();

  function choose(id: BackofficeModelId) {
    if (model !== id) track("plan_select", { model: id, source: "card" });
    setModel(id);
  }

  return (
    <section id="modelos" className="scroll-mt-28 bg-stone py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={models.eyebrow} title={models.title} center />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:mt-12 md:grid-cols-2">
          {models.items.map((item) => {
            const on = model === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => choose(item.id)}
                className={`organic-lg border px-6 py-7 text-left transition-colors ${
                  on ? "border-cyan bg-white shadow-glass" : "border-transparent bg-white hover:border-navy/10"
                }`}
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber">{item.kicker}</p>
                <h3 className="mt-3 text-[26px] font-extrabold text-navy">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{item.text}</p>
                <span className={`mt-5 inline-flex text-[13px] font-semibold ${on ? "text-cyan" : "text-navy/45"}`}>
                  {on ? "Selecionado para a auditoria" : "Selecionar este modelo"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#auditoria"
            onClick={() => track("cta_click", { place: "modelos" })}
            className="btn-primary"
          >
            {models.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
