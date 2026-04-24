"use client";

import { useState } from "react";

type ActionPreviewModalProps = {
  title: string;
  description: string;
  endpoint: string;
  label?: string;
};

export function ActionPreviewModal({
  title,
  description,
  endpoint,
  label = "Preview Action",
}: ActionPreviewModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-[#171a24] px-4 text-sm font-semibold text-[#fff7f0] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0f121b]"
      >
        {label}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(17,20,30,0.38)] p-4 sm:items-center">
          <div className="surface-card w-full max-w-2xl rounded-[1.8rem] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-xl">
                <p className="eyebrow-label text-black/42">Action Preview</p>
                <h3 className="mt-2 font-display text-[1.7rem] font-semibold tracking-[-0.05em] text-[#121521]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{description}</p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/70 text-[#121521]"
                aria-label="Close action preview"
              >
                x
              </button>
            </div>

            <div className="surface-dark mt-5 rounded-[1.6rem] p-4 text-sm leading-7 text-[#fff7f0]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                GET metadata
              </p>
              <pre className="mt-2 overflow-x-auto text-white/82">{`GET ${endpoint}`}</pre>

              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                POST transaction payload
              </p>
              <pre className="mt-2 overflow-x-auto text-white/82">{`POST ${endpoint}\n{\n  "account": "8x7V...Pp8M",\n  "amount": "25.00",\n  "mint": "USDC",\n  "cluster": "devnet"\n}`}</pre>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
