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

export function AppMobileDock() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 lg:hidden">
      <nav className="surface-card pointer-events-auto mx-auto grid max-w-[34rem] grid-cols-3 gap-2 rounded-[1.5rem] p-2">
        {navItems.map((item) => {
          const active =
            item.href === "/app"
              ? pathname === "/app"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "focus-ring flex min-h-14 flex-col items-center justify-center gap-1 rounded-[1rem] px-2 py-2 text-center text-[0.72rem] font-semibold transition",
                active
                  ? "bg-[#171a24] text-[#fff7f0] shadow-[0_10px_20px_rgba(20,23,34,0.1)]"
                  : "bg-white/44 text-black/58",
              ].join(" ")}
            >
              <span className={["h-2.5 w-2.5 rounded-full", active ? "bg-[#d7eb92]" : item.tone].join(" ")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
