type ActionButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "border-transparent bg-[#171a24] text-[#fff7f0] shadow-[0_12px_24px_rgba(20,23,34,0.12)] hover:-translate-y-0.5 hover:bg-[#11141d]",
  secondary:
    "border-black/8 bg-white/70 text-[#121521] shadow-[0_8px_18px_rgba(17,20,30,0.05)] hover:-translate-y-0.5 hover:bg-[#fffdfb]",
} as const;

export function ActionButton({
  children,
  variant = "primary",
  className = "",
}: ActionButtonProps) {
  return (
    <button
      type="button"
      className={[
        "focus-ring inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold tracking-[-0.01em] transition duration-200",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
