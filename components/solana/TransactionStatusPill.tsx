type TransactionStatusPillProps = {
  status: "Pending" | "Confirmed" | "Failed";
};

export function TransactionStatusPill({ status }: TransactionStatusPillProps) {
  const className =
    status === "Confirmed"
      ? "bg-[#dff0a7] text-[#182113]"
      : status === "Failed"
        ? "bg-[#f8d7c0] text-[#3a1d12]"
        : "bg-[#ece6f7] text-[#3b2f58]";

  return (
    <span
      className={[
        "inline-flex w-fit items-center rounded-full px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em]",
        className,
      ].join(" ")}
    >
      {status}
    </span>
  );
}
