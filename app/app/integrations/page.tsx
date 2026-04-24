import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppPageHeader } from "@/components/dashboard/AppPageHeader";
import { CodeBlockCard } from "@/components/dashboard/CodeBlockCard";
import { Panel } from "@/components/dashboard/Panel";
import { Reveal } from "@/components/landing/Reveal";
import { BlinkShareButton } from "@/components/solana/BlinkShareButton";
import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { LiveStatusDot } from "@/components/solana/LiveStatusDot";
import { demoActionArtifacts, demoWallet } from "@/lib/solana-prototype";

const openClawConfig = `openclaw mcp set meteros '{
  "url": "https://api.meteros.dev/mcp",
  "transport": "streamable-http",
  "headers": {
    "Authorization": "Bearer FRONTIER_WORKSPACE_TOKEN"
  }
}'`;

const hermesConfig = `mcp_servers:
  meteros:
    url: "https://api.meteros.dev/mcp"
    headers:
      Authorization: "Bearer FRONTIER_WORKSPACE_TOKEN"`;

export default function IntegrationsPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <Reveal>
        <AppPageHeader
          eyebrow="Integrations"
          title="Integrations"
          description="Connect OpenClaw, Hermes, and Solana Action infrastructure to the same control plane."
        />
      </Reveal>

      <Reveal>
        <Panel
          title="MCP Endpoint"
          description="Expose workspace routing, auth, and connectivity details for runtime clients."
          actions={
            <div className="flex flex-col gap-2 sm:flex-row">
              <ActionButton variant="secondary" className="w-full sm:w-auto">Copy Endpoint</ActionButton>
              <ActionButton className="w-full sm:w-auto">Test Connection</ActionButton>
            </div>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["MCP URL", "https://api.meteros.dev/mcp"],
              ["Transport", "Streamable HTTP"],
              ["Auth token", "frontier_ws_demo_token"],
              ["Workspace ID", "ws_solana_frontier_001"],
            ].map(([label, value]) => (
              <div key={label} className="surface-muted rounded-[1.2rem] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">{label}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#121521]">{value}</p>
              </div>
            ))}
          </div>
        </Panel>
      </Reveal>

      <div className="grid gap-5 xl:grid-cols-2">
        <Reveal delay={50}>
          <CodeBlockCard
            title="OpenClaw"
            description="Connect MeterOS as a remote MCP server inside OpenClaw."
            action={<ActionButton variant="secondary" className="w-full sm:w-auto">Copy Config</ActionButton>}
            code={openClawConfig}
          />
        </Reveal>

        <Reveal delay={70}>
          <CodeBlockCard
            title="Hermes"
            description="Attach MeterOS to Hermes with a lightweight YAML MCP server definition."
            action={<ActionButton variant="secondary" className="w-full sm:w-auto">Copy Config</ActionButton>}
            code={hermesConfig}
          />
        </Reveal>
      </div>

      <Reveal delay={90}>
        <Panel title="Runtime Status" description="Keep infrastructure heartbeat and signer visibility close to the integration surface.">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="surface-card-strong rounded-[1.3rem] p-4">
              <div className="flex items-center justify-between gap-3"><p className="font-semibold text-[#121521]">OpenClaw</p><LiveStatusDot label="Healthy" /></div>
              <p className="mt-3 text-sm leading-6 text-black/58">Setup snippet loaded, auth verified, last heartbeat 2m ago.</p>
            </div>
            <div className="surface-card-strong rounded-[1.3rem] p-4">
              <div className="flex items-center justify-between gap-3"><p className="font-semibold text-[#121521]">Hermes</p><LiveStatusDot label="Healthy" /></div>
              <p className="mt-3 text-sm leading-6 text-black/58">YAML config valid, last heartbeat 5m ago, runtime reachable.</p>
            </div>
            <div className="surface-card-strong rounded-[1.3rem] p-4">
              <div className="flex items-center justify-between gap-3"><p className="font-semibold text-[#121521]">Connected wallet</p><LiveStatusDot label="Signer Ready" tone="quiet" /></div>
              <p className="mt-3 text-sm leading-6 text-black/58">Treasury signer currently points at {demoWallet.address}.</p>
              <ExplorerLink value={demoWallet.address} className="mt-3" />
            </div>
          </div>
        </Panel>
      </Reveal>

      <Reveal delay={110}>
        <Panel title="Actions & Blinks" description="This area maps directly to the Solana Actions model: metadata over GET, transaction payloads over POST, shareable through Blink-compatible clients.">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
            <div className="surface-dark rounded-[1.45rem] p-5 text-[#fff7f0]">
              <p className="eyebrow-label text-white/45">Solana Actions</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/42">Action endpoint URL</p>
                  <p className="mt-1 break-all text-sm font-semibold text-white">{demoActionArtifacts.actionUrl}</p>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/42">Blink URL</p>
                  <p className="mt-1 break-all text-sm font-semibold text-white">{demoActionArtifacts.blinkUrl}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3"><p className="text-xs uppercase tracking-[0.16em] text-white/42">Action metadata status</p><p className="mt-1 font-semibold text-white">Healthy</p></div>
                  <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3"><p className="text-xs uppercase tracking-[0.16em] text-white/42">actions.json status</p><p className="mt-1 font-semibold text-white">Present</p></div>
                </div>
              </div>
            </div>

            <div className="surface-card-strong rounded-[1.45rem] p-5">
              <p className="font-display text-[1.3rem] font-semibold tracking-[-0.04em] text-[#121521]">Developer shortcuts</p>
              <div className="mt-4 flex flex-col gap-2">
                <BlinkShareButton blinkUrl={demoActionArtifacts.blinkUrl} />
                <a href={demoActionArtifacts.actionUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-white/72 px-4 text-sm font-semibold text-[#121521]">Open Action URL</a>
                <a href={demoActionArtifacts.inspectorUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-white/72 px-4 text-sm font-semibold text-[#121521]">Inspect Action</a>
                <a href={demoActionArtifacts.actionsManifestUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-white/72 px-4 text-sm font-semibold text-[#121521]">Open actions.json</a>
              </div>
            </div>
          </div>
        </Panel>
      </Reveal>
    </div>
  );
}
