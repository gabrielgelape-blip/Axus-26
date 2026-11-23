"use client";

import { type FormEvent } from "react";
import { audit, models } from "@/lib/backoffice";
import { track, whatsappHref } from "@/lib/analytics";
import { useBackofficeModel } from "./BackofficeProvider";

export default function DiagnosticCta() {
  const { model, setModel } = useBackofficeModel();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const cidade = String(data.get("cidade") || "").trim();
    const obras = String(data.get("obras") || "").trim();
    const chosen = models.items.find((item) => item.id === model);
    const message = [
      "Olá, quero uma auditoria gratuita do backoffice de obras da Axus.",
      `Nome: ${nome}`,
      `WhatsApp: ${telefone}`,
      `Empresa: ${empresa}`,
      `Cidade: ${cidade}`,
      `Obras simultâneas: ${obras}`,
      `Modelo: ${chosen ? chosen.title : "A definir"}`,
    ].join("\n");

    track("audit_submit", { model: model || "indefinido", obras });
    track("whatsapp_click", { place: "auditoria" });
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="auditoria" className="scroll-mt-28 relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-container gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8">
        <div>
          <p className="section-label">{audit.eyebrow}</p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight md:text-[42px]">{audit.title}</h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/70">{audit.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-dark organic-lg flex flex-col gap-4 p-5 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome" name="nome" required autoComplete="name" />
            <Field label="WhatsApp" name="telefone" required autoComplete="tel" inputMode="tel" />
          </div>
          <Field label="Empresa" name="empresa" required autoComplete="organization" />
          <Field label="Cidade" name="cidade" required placeholder="Belo Horizonte" autoComplete="address-level2" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[12px] font-medium text-white/60">Obras simultâneas</span>
              <select
                name="obras"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none focus:border-cyan"
              >
                <option value="" disabled className="text-navy">
                  Selecione
                </option>
                {audit.obrasOptions.map((option) => (
                  <option key={option} value={option} className="text-navy">
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-[12px] font-medium text-white/60">Modelo de interesse</span>
              <select
                name="modelo"
                required
                value={model}
                onChange={(event) => {
                  const next = event.target.value as typeof model;
                  if (next && next !== model) track("plan_select", { model: next, source: "form" });
                  setModel(next);
                }}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none focus:border-cyan"
              >
                <option value="" disabled className="text-navy">
                  Selecione
                </option>
                {models.items.map((item) => (
                  <option key={item.id} value={item.id} className="text-navy">
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit" className="btn-primary mt-2 w-full sm:w-fit">
            {audit.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "tel" | "text";
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-medium text-white/60">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-cyan"
      />
    </label>
  );
}
