"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ButtonLink } from "@/components/landing/ButtonLink";
import { WalletConnectButton } from "@/components/solana/WalletConnectButton";
import { useSolanaWallet } from "@/components/solana/SolanaWalletProvider";

const navItems = [
  { label: "Capabilities", href: "#product" },
  { label: "Flow", href: "#flow" },
  { label: "Why now", href: "#why-this-matters" },
  { label: "Frontier", href: "#use-cases" },
];

export function SiteHeader() {
  const wallet = useSolanaWallet();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("product");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) {
          return;
        }

        setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div
          className={[
            "pointer-events-auto rounded-[1.6rem] border px-4 py-3 transition duration-300 sm:rounded-[2rem] sm:px-5",
            isScrolled
              ? "border-black/10 bg-white/88 shadow-[0_14px_32px_rgba(17,20,30,0.1)] backdrop-blur-xl"
              : "border-black/8 bg-white/78 shadow-[0_10px_24px_rgba(17,20,30,0.06)] backdrop-blur-xl",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 text-[#121521]">
              <span className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-[#141722] text-sm font-semibold text-[#fff7f0] shadow-[0_10px_20px_rgba(20,23,34,0.16)]">
                M
              </span>
              <div>
                <p className="font-display text-base font-semibold tracking-[-0.03em]">
                  MeterOS
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-black/45">
                  Solana control plane
                </p>
              </div>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-[#171a24] shadow-[0_8px_18px_rgba(20,23,34,0.1)]"
                        : "text-black/58 hover:bg-black/4 hover:text-[#121521]",
                    ].join(" ")}
                  >
                    <span className={isActive ? "text-[#fff7f0]" : "text-inherit"}>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 lg:min-w-[15rem] lg:justify-end">
              <span className="pill-muted hidden rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:inline-flex">
                {wallet.network}
              </span>
              <WalletConnectButton compact />
              <ButtonLink href="/app" className="hidden min-w-28 px-4 text-xs sm:min-w-32 sm:text-sm lg:inline-flex">
                Launch App
              </ButtonLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="focus-ring inline-flex h-11 min-w-20 items-center justify-center rounded-full border border-black/8 bg-white/74 px-4 text-sm font-semibold text-[#121521] lg:hidden"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mt-4 grid gap-3 border-t border-black/8 pt-4 lg:hidden">
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={[
                        "focus-ring rounded-[1rem] border px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "border-transparent bg-[#171a24] text-[#fff7f0]"
                          : "border-black/8 bg-white/52 text-[#121521]",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <span className="pill-muted inline-flex w-fit rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:hidden">
                  {wallet.network}
                </span>
                <WalletConnectButton compact />
                <ButtonLink href="/app" className="w-full justify-center sm:flex-1" onClick={() => setMobileMenuOpen(false)}>
                  Launch App
                </ButtonLink>
                <ButtonLink href="/docs" variant="secondary" className="w-full justify-center sm:flex-1" onClick={() => setMobileMenuOpen(false)}>
                  View Demo
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
