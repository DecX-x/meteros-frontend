"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const liRef = useRef<HTMLLIElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = as === "li" ? liRef.current : divRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [as]);

  const props = {
    className: ["reveal", visible ? "reveal-visible" : "", className].join(" "),
    style: { transitionDelay: `${delay}ms` },
  };

  if (as === "li") {
    return (
      <li ref={liRef} {...props}>
        {children}
      </li>
    );
  }

  return (
    <div ref={divRef} {...props}>
      {children}
    </div>
  );
}
