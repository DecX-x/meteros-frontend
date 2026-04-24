type PanelProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

export function Panel({ title, description, actions, children }: PanelProps) {
  return (
    <section className="surface-card rounded-[1.75rem] p-5 sm:p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-[1.38rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[#121521]">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-black/58 sm:text-[0.98rem]">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="w-full shrink-0 lg:w-auto">{actions}</div> : null}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}
