type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-2xl">
      <p
        className={[
          "eyebrow-label",
          isDark ? "text-[#d7eb92]" : "text-black/55",
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "mt-4 font-display text-[clamp(1.9rem,3.7vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.05em]",
          isDark ? "text-[#fff7f0]" : "text-[#121521]",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 max-w-[40rem] text-[0.98rem] leading-7",
            isDark ? "text-white/76" : "text-black/68",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
