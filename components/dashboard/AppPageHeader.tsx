type AppPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export function AppPageHeader({
  eyebrow = "Workspace",
  title,
  description,
  actions,
}: AppPageHeaderProps) {
  return (
    <section className="surface-card rounded-[1.75rem] p-5 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow-label text-black/45">
            {eyebrow}
          </p>
          <h1 className="mt-2 font-display text-[clamp(1.8rem,3.3vw,2.8rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#121521]">
            {title}
          </h1>
          <p className="mt-2 max-w-[36rem] text-[0.96rem] leading-7 text-black/58 sm:text-base">
            {description}
          </p>
        </div>

        {actions ? <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-end">{actions}</div> : null}
      </div>
    </section>
  );
}
