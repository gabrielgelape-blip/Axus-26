"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { BackofficeModelId } from "@/lib/backoffice";

type ModelState = "" | BackofficeModelId;

const BackofficeContext = createContext<{
  model: ModelState;
  setModel: (model: ModelState) => void;
} | null>(null);

export function BackofficeProvider({ children }: { children: ReactNode }) {
  const [model, setModel] = useState<ModelState>("");
  const value = useMemo(() => ({ model, setModel }), [model]);
  return <BackofficeContext.Provider value={value}>{children}</BackofficeContext.Provider>;
}

export function useBackofficeModel() {
  const ctx = useContext(BackofficeContext);
  if (!ctx) {
    throw new Error("useBackofficeModel must be used within BackofficeProvider");
  }
  return ctx;
}
