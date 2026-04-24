import { buildExplorerUrl } from "@/lib/solana-prototype";

type ExplorerLinkProps = {
  label?: string;
  type?: "address" | "tx";
  value: string;
  className?: string;
};

export function ExplorerLink({
  label = "View on Explorer",
  type = "address",
  value,
  className = "",
}: ExplorerLinkProps) {
  return (
    <a
      href={buildExplorerUrl(type, value)}
      target="_blank"
      rel="noreferrer"
      className={[
        "focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[#121521] underline decoration-black/18 underline-offset-4 transition hover:text-black",
        className,
      ].join(" ")}
    >
      {label}
    </a>
  );
}
