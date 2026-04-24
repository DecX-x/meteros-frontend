type LowBalanceAlertProps = {
  title: string;
  body: string;
};

export function LowBalanceAlert({ title, body }: LowBalanceAlertProps) {
  return (
    <div className="rounded-[1.25rem] border border-[#efc6ad] bg-[#fff0e4] p-4 text-[#2e1b12] shadow-[0_10px_20px_rgba(240,167,123,0.12)]">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7e4a2d]">
        Low Balance
      </p>
      <p className="mt-2 font-display text-[1.08rem] font-semibold tracking-[-0.03em]">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#593524]">{body}</p>
    </div>
  );
}
