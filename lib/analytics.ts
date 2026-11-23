import { contact } from "@/lib/content";

export type AnalyticsEvent =
  | "cta_click"
  | "pain_select"
  | "delivery_view"
  | "plan_select"
  | "faq_open"
  | "whatsapp_click"
  | "audit_submit";

export function track(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

/** Prefill only works with a phone-based wa.me link. The short message link ignores ?text=. */
export function whatsappHref(message?: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");
  if (phone && message) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  return contact.whatsappUrl;
}
