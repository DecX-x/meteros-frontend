import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "border-transparent bg-[#141722] text-[#fff7f0] shadow-[0_18px_40px_rgba(20,23,34,0.16)] hover:-translate-y-0.5 hover:bg-[#0f121b]",
  secondary:
    "border-black/10 bg-white/70 text-[#141722] shadow-[0_10px_24px_rgba(20,23,34,0.08)] hover:-translate-y-0.5 hover:bg-white",
} as const;

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const textClass = variant === "primary" ? "text-[#fff7f0]" : "text-[#141722]";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "focus-ring inline-flex h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold tracking-[-0.01em] transition duration-200 sm:h-12",
        variants[variant],
        className,
      ].join(" ")}
    >
      <span className={textClass}>{children}</span>
    </Link>
  );
}
