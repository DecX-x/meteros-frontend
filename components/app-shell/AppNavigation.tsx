"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/app", tone: "bg-[#ff8c46]" },
  { label: "Agents", href: "/app/agents", tone: "bg-[#9c63ff]" },
  { label: "Providers", href: "/app/providers", tone: "bg-[#baf24a]" },
  { label: "Policies", href: "/app/policies", tone: "bg-[#141722]" },
  { label: "Events", href: "/app/events", tone: "bg-[#ff8c46]" },
  { label: "Integrations", href: "/app/integrations", tone: "bg-[#9c63ff]" },
];

type AppNavigationProps = {
  compact?: boolean;
};

export function AppNavigation({ compact = false }: AppNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={compact ? "flex gap-2 overflow-x-auto pb-1" : "flex flex-col gap-1.5"}>
      {navItems.map((item) => {
        const active =
          item.href === "/app"
            ? pathname === "/app"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        const className = [
          "focus-ring group flex items-center justify-between gap-3 rounded-[1rem] border px-4 py-2.5 text-sm font-semibold tracking-[-0.01em] transition",
          active
            ? "border-transparent bg-[#171a24] text-[#fff7f0] shadow-[0_10px_20px_rgba(20,23,34,0.1)]"
            : "border-black/8 bg-white/58 text-black/62 hover:bg-white/76 hover:text-[#121521]",
          compact ? "shrink-0" : "",
        ].join(" ");

        const content = (
          <>
            <span className="flex items-center gap-3">
              <span
                className={[
                  "flex h-2.5 w-2.5 shrink-0 rounded-full",
                  active ? "bg-[#fff7f0]" : item.tone,
                ].join(" ")}
              />
              <span className={active ? "text-[#fff7f0]" : "text-inherit"}>{item.label}</span>
            </span>
            <span
              className={[
                "h-2 w-2 rounded-full transition",
                active ? "bg-[#cfe77f] opacity-100" : "bg-black/12 opacity-0 group-hover:opacity-100",
              ].join(" ")}
            />
          </>
        );

        return (
          <Link key={item.label} href={item.href} className={className}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
