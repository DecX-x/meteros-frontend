type LiveStatusDotProps = {
  label: string;
  tone?: "live" | "warn" | "quiet";
};

export function LiveStatusDot({
  label,
  tone = "live",
}: LiveStatusDotProps) {
  const dotClass =
    tone === "warn"
      ? "bg-[#f0a77b]"
      : tone === "quiet"
        ? "bg-[#c7bfd9]"
        : "bg-[#b8df4e]";

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/74 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/58">
      <span className={["h-2.5 w-2.5 rounded-full", dotClass].join(" ")} />
      {label}
    </span>
  );
}
