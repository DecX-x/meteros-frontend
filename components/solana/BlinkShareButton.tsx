"use client";

import { useState } from "react";

type BlinkShareButtonProps = {
  blinkUrl: string;
};

export function BlinkShareButton({ blinkUrl }: BlinkShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(blinkUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-white/72 px-4 text-sm font-semibold text-[#121521] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
    >
      {copied ? "Blink Copied" : "Copy Blink Link"}
    </button>
  );
}
