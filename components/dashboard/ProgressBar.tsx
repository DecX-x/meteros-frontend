type ProgressBarProps = {
  value: number;
  tone?: "good" | "warn" | "neutral";
};

const tones = {
  good: "bg-[linear-gradient(90deg,#b7e75b,#d7f59c)]",
  warn: "bg-[linear-gradient(90deg,#ef925d,#f3bc99)]",
  neutral: "bg-[linear-gradient(90deg,#8f74d9,#c8b8f2)]",
} as const;

export function ProgressBar({ value, tone = "neutral" }: ProgressBarProps) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-[#ece6f2]">
      <div
        className={["h-full rounded-full", tones[tone]].join(" ")}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
