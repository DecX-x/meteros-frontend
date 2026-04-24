export const SOLANA_CLUSTER = "devnet";
export const SOLANA_NETWORK_LABEL = "Solana Devnet";
export const SOLANA_EXPLORER_ROOT = "https://explorer.solana.com";

export const demoWallet = {
  address: "8x7Vh9fE8W1jF1xRavS3Hn9bNt5w4JX4B5xC2j6qPp8M",
  treasuryAddress: "G1qV1Yp5o9k6e1fDk2rN4mT7bY8uP3qR5sV4xZ6cL2d",
  balance: "18.42 SOL",
  treasuryBalance: "24,980 USDC",
  agentWalletCount: 12,
  providerWalletCount: 7,
};

export const demoActionArtifacts = {
  actionUrl: "https://api.meteros.dev/api/actions/fund-agent-wallet",
  blinkUrl: "https://dial.to/?action=solana-action:https://api.meteros.dev/api/actions/fund-agent-wallet",
  actionsManifestUrl: "https://api.meteros.dev/actions.json",
  inspectorUrl:
    "https://www.blinks.xyz/inspector?url=https://api.meteros.dev/api/actions/fund-agent-wallet",
};

export function shortenAddress(address: string, start = 4, end = 4) {
  if (address.length <= start + end) {
    return address;
  }

  return `${address.slice(0, start)}...${address.slice(-end)}`;
}

export function buildExplorerUrl(type: "address" | "tx", value: string) {
  return `${SOLANA_EXPLORER_ROOT}/${type}/${value}?cluster=${SOLANA_CLUSTER}`;
}
