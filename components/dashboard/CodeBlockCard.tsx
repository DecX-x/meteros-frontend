type CodeBlockCardProps = {
  title: string;
  description?: string;
  code: string;
  action?: React.ReactNode;
};

export function CodeBlockCard({
  title,
  description,
  code,
  action,
}: CodeBlockCardProps) {
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
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>

      <pre className="surface-dark mt-5 overflow-x-auto rounded-[1.5rem] p-4 text-sm leading-7 text-[#fff7f0]">
        <code>{code}</code>
      </pre>
    </section>
  );
}
