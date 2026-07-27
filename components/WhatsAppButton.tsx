import { contact } from "@/lib/content";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        contact.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-glass-lg transition-transform hover:scale-110 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.67 4.56 1.83 6.44L4 29l7.77-1.78A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.64 28 15S22.63 3 16.02 3Zm0 21.6c-2 0-3.87-.55-5.48-1.5l-.39-.23-4.6 1.05 1.08-4.48-.25-.4A9.5 9.5 0 0 1 5.9 15c0-5.6 4.55-10.15 10.12-10.15S26.14 9.4 26.14 15 21.6 24.6 16.02 24.6Zm5.55-7.6c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
