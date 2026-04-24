type KpiCardProps = {
  title: string;
  value: string;
  detail: string;
  accent: string;
};

export function KpiCard({ title, value, detail, accent }: KpiCardProps) {
  return (
    <article className="surface-card-strong flex h-full flex-col rounded-[1.35rem] p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(17,20,30,0.06)]">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow-label text-black/44">
          {title}
        </p>
        <span className={["h-2.5 w-2.5 rounded-full opacity-80", accent].join(" ")} />
      </div>

      <p className="mt-3 font-display text-[1.55rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121521] sm:text-[1.68rem]">
        {value}
      </p>
      <p className="mt-2 text-sm leading-5 text-black/54">{detail}</p>
    </article>
  );
}
