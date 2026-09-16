export default function SpecChip({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "pro";
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-mono-nums ${
        tone === "pro"
          ? "border-dw-lime/40 bg-dw-lime/10 text-dw-lime"
          : "border-dw-border bg-dw-bg-raised text-dw-fg"
      }`}
    >
      <span className="uppercase tracking-wide text-[10px] text-dw-fg-muted">
        {label}
      </span>
      <span className="font-semibold">{value}</span>
    </span>
  );
}
