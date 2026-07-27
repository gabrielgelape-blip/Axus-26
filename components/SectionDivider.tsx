export default function SectionDivider({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const stroke = tone === "dark" ? "#00B8D8" : "#0C2257";
  return (
    <div
      aria-hidden="true"
      className="flex w-full items-center justify-center py-9"
    >
      <svg
        viewBox="0 0 120 14"
        className="h-3.5 w-24 opacity-70"
        fill="none"
      >
        <polyline
          points="0,7 34,7 44,1 56,13 66,7 120,7"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
