"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/content";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // [VALIDAR COM GABRIEL] — conectar a endpoint real
    setStatus("sent");
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="section-label">Contato</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight md:text-[40px]">
              Vamos falar sobre a sua obra
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
              Conte um pouco sobre o projeto. Respondemos em até um dia útil.
            </p>
            <div className="mt-8 space-y-3 text-[14px] text-white/60">
              <a href={`mailto:${contact.email}`} className="block transition-colors hover:text-cyan">
                {contact.email}
              </a>
              <p>{contact.address}</p>
              <p>CNPJ {contact.cnpj}</p>
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-cyan"
              >
                Ou fale pelo WhatsApp
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            className="glass-dark organic-lg p-6 md:p-8"
          >
            {status === "sent" ? (
              <div>
                <p className="text-[18px] font-semibold">Mensagem enviada.</p>
                <p className="mt-2 text-[14px] text-white/65">
                  Retornamos em breve — ou fale agora pelo WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome" name="nome" required />
                  <Field label="Telefone / WhatsApp" name="telefone" required />
                </div>
                <Field label="E-mail" name="email" type="email" required />
                <div>
                  <label htmlFor="perfil" className="mb-2 block text-[12px] font-medium text-white/55">
                    Você é
                  </label>
                  <select
                    id="perfil"
                    name="perfil"
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-cyan"
                  >
                    <option className="text-navy">Síndico(a) / administradora</option>
                    <option className="text-navy">Morador de condomínio</option>
                    <option className="text-navy">Cliente residencial</option>
                    <option className="text-navy">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-2 block text-[12px] font-medium text-white/55">
                    Conte sobre a obra
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-cyan"
                  />
                </div>
                <button type="submit" className="btn-primary mt-2 w-full sm:w-fit">
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[12px] font-medium text-white/55">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-cyan"
      />
    </div>
  );
}
