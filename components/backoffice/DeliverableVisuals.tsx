import type { ReactNode } from "react";

const bars = [
  { label: "Aço", pct: 38, band: "A" },
  { label: "Concreto", pct: 24, band: "A" },
  { label: "Cimento", pct: 16, band: "B" },
  { label: "Elétrica", pct: 12, band: "B" },
  { label: "Acabamento", pct: 10, band: "C" },
];

const weeks = [
  { label: "S1", inn: 18, out: 42 },
  { label: "S2", inn: 20, out: 36 },
  { label: "S3", inn: 55, out: 28 },
  { label: "S4", inn: 22, out: 40 },
  { label: "S5", inn: 48, out: 24 },
  { label: "S6", inn: 30, out: 22 },
];

const supplies = [
  { band: "A", item: "Aço e concreto", note: "Negociar lote antes da mobilização" },
  { band: "A", item: "Cimento", note: "Janela quinzenal, sem compra picada" },
  { band: "B", item: "Elétrica e hidráulica", note: "Cotar com o quantitativo fechado" },
  { band: "C", item: "Miudezas de acabamento", note: "Comprar perto da etapa, sem estoque parado" },
];

const measures = [
  { label: "Fundação", planned: 100, done: 100 },
  { label: "Estrutura", planned: 100, done: 86 },
  { label: "Alvenaria", planned: 70, done: 61 },
  { label: "Acabamento", planned: 25, done: 18 },
];

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="organic border border-white/10 bg-navy px-4 py-4 text-white md:px-5 md:py-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">{label}</p>
      <div className="mt-4">{children}</div>
      <p className="mt-4 text-[11px] text-white/45">Ilustração de leitura — não é um relatório de cliente.</p>
    </div>
  );
}

export function AbcVisual() {
  return (
    <Frame label="Curva ABC">
      <svg viewBox="0 0 320 168" className="h-auto w-full" role="img" aria-label="Exemplo de Curva ABC com cinco insumos">
        {bars.map((bar, index) => {
          const y = 8 + index * 32;
          return (
            <g key={bar.label}>
              <text x="0" y={y + 14} className="fill-white/80 font-body" fontSize="11">
                {bar.label}
              </text>
              <rect x="108" y={y} width="168" height="16" rx="8" className="fill-white/10" />
              <rect x="108" y={y} width={168 * (bar.pct / 40)} height="16" rx="8" className="fill-cyan" />
              <text x="286" y={y + 12} className="fill-white font-body" fontSize="11">
                {bar.band}
              </text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

export function CashVisual() {
  return (
    <Frame label="Caixa por semana">
      <div className="mb-3 flex gap-4 text-[11px] text-white/70">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan" /> Entrada
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/70" /> Saída
        </span>
      </div>
      <svg viewBox="0 0 320 140" className="h-auto w-full" role="img" aria-label="Exemplo de entradas e saídas ao longo de seis semanas">
        {weeks.map((week, index) => {
          const x = 18 + index * 52;
          const inH = week.inn;
          const outH = week.out;
          return (
            <g key={week.label}>
              <rect x={x} y={110 - inH} width="14" height={inH} rx="4" className="fill-cyan" />
              <rect x={x + 16} y={110 - outH} width="14" height={outH} rx="4" className="fill-white/75" />
              <text x={x + 8} y="128" textAnchor="middle" className="fill-white/60 font-body" fontSize="11">
                {week.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

export function SupplyVisual() {
  return (
    <Frame label="Compras por classe">
      <ul className="space-y-2.5">
        {supplies.map((row) => (
          <li key={row.item} className="flex items-start gap-3 rounded-2xl bg-white/5 px-3 py-2.5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan text-[12px] font-extrabold text-navy">
              {row.band}
            </span>
            <span>
              <span className="block text-[14px] font-semibold">{row.item}</span>
              <span className="mt-0.5 block text-[12px] leading-snug text-white/60">{row.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function MeasureVisual() {
  return (
    <Frame label="Realizado vs. orçado">
      <div className="mb-3 flex gap-4 text-[11px] text-white/70">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/40" /> Orçado
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber" /> Realizado
        </span>
      </div>
      <svg viewBox="0 0 320 150" className="h-auto w-full" role="img" aria-label="Exemplo de medição: orçado contra realizado em quatro etapas">
        {measures.map((row, index) => {
          const y = 6 + index * 36;
          return (
            <g key={row.label}>
              <text x="0" y={y + 14} className="fill-white/80 font-body" fontSize="11">
                {row.label}
              </text>
              <rect x="112" y={y} width="188" height="8" rx="4" className="fill-white/15" />
              <rect x="112" y={y} width={188 * (row.planned / 100)} height="8" rx="4" className="fill-white/45" />
              <rect x="112" y={y + 12} width="188" height="8" rx="4" className="fill-white/15" />
              <rect x="112" y={y + 12} width={188 * (row.done / 100)} height="8" rx="4" className="fill-amber" />
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

export const deliverableVisuals = {
  orcamento: AbcVisual,
  cronograma: CashVisual,
  suprimentos: SupplyVisual,
  medicao: MeasureVisual,
} as const;
