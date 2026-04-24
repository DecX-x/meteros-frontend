"use client";

import { useState } from "react";

import { BlinkShareButton } from "@/components/solana/BlinkShareButton";

type FundingModalProps = {
  title: string;
  walletAddress: string;
  amount: string;
  blinkUrl: string;
};

export function FundingModal({
  title,
  walletAddress,
  amount,
  blinkUrl,
}: FundingModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-[#171a24] px-4 text-sm font-semibold text-[#fff7f0] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0f121b]"
      >
        Fund Wallet
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(17,20,30,0.38)] p-4 sm:items-center">
          <div className="surface-card w-full max-w-xl rounded-[1.8rem] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow-label text-black/42">Funding Action</p>
                <h3 className="mt-2 font-display text-[1.6rem] font-semibold tracking-[-0.05em] text-[#121521]">
                  {title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/70 text-[#121521]"
                aria-label="Close funding modal"
              >
                x
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Destination wallet
                </p>
                <p className="mt-2 break-all text-sm font-semibold text-[#121521]">{walletAddress}</p>
              </div>
              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Suggested top-up
                </p>
                <p className="mt-2 text-sm font-semibold text-[#121521]">{amount}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-[#171a24] px-4 text-sm font-semibold text-[#fff7f0]"
              >
                Generate Action
              </button>
              <BlinkShareButton blinkUrl={blinkUrl} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
