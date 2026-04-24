import type { ReactNode } from "react";

type InfoCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  accent: string;
  footer?: ReactNode;
  className?: string;
};

export function InfoCard({
  eyebrow,
  title,
  description,
  accent,
  footer,
  className = "",
}: InfoCardProps) {
  return (
    <article
      className={[
        "surface-card-strong flex h-full flex-col rounded-[1.9rem] p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(17,20,30,0.08)]",
        className,
      ].join(" ")}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className={["h-3 w-3 rounded-full", accent].join(" ")} />
        {eyebrow ? (
          <span className="eyebrow-label text-black/58">
            {eyebrow}
          </span>
        ) : null}
      </div>

      <h3 className="font-display text-[1.28rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#121521]">
        {title}
      </h3>
      <p className="mt-3 max-w-[31ch] text-sm leading-6 text-black/68">
        {description}
      </p>

      {footer ? <div className="mt-auto pt-5">{footer}</div> : null}
    </article>
  );
}
