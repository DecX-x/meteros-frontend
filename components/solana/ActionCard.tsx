import { ActionPreviewModal } from "@/components/solana/ActionPreviewModal";
import { BlinkShareButton } from "@/components/solana/BlinkShareButton";
import { LiveStatusDot } from "@/components/solana/LiveStatusDot";

type ActionCardProps = {
  title: string;
  description: string;
  endpoint: string;
  blinkUrl: string;
  status: string;
};

export function ActionCard({
  title,
  description,
  endpoint,
  blinkUrl,
  status,
}: ActionCardProps) {
  return (
    <article className="surface-card-strong flex h-full flex-col rounded-[1.4rem] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-[1.2rem] font-semibold tracking-[-0.04em] text-[#121521]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-black/58">{description}</p>
        </div>
        <LiveStatusDot label={status} />
      </div>

      <div className="surface-muted mt-4 rounded-[1.15rem] p-3">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">
          Action endpoint
        </p>
        <p className="mt-2 break-all text-sm font-semibold text-[#121521]">{endpoint}</p>
      </div>

      <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
        <ActionPreviewModal
          title={title}
          description={description}
          endpoint={endpoint}
          label="Generate Action"
        />
        <BlinkShareButton blinkUrl={blinkUrl} />
      </div>
    </article>
  );
}
