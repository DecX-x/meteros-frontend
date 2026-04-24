"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  buildExplorerUrl,
  demoActionArtifacts,
  demoWallet,
  shortenAddress,
  SOLANA_NETWORK_LABEL,
} from "@/lib/solana-prototype";

type SolanaWalletContextValue = {
  connected: boolean;
  address: string;
  shortAddress: string;
  balance: string;
  network: string;
  treasuryBalance: string;
  explorerUrl: string;
  actionUrl: string;
  blinkUrl: string;
  actionsManifestUrl: string;
  inspectorUrl: string;
  connect: () => void;
  disconnect: () => void;
  toggleConnection: () => void;
};

const STORAGE_KEY = "meteros-solana-wallet";

const SolanaWalletContext = createContext<SolanaWalletContextValue | null>(null);

export function SolanaWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      connected ? "connected" : "disconnected",
    );
  }, [connected]);

  const value = useMemo(
    () => ({
      connected,
      address: demoWallet.address,
      shortAddress: shortenAddress(demoWallet.address),
      balance: demoWallet.balance,
      network: SOLANA_NETWORK_LABEL,
      treasuryBalance: demoWallet.treasuryBalance,
      explorerUrl: buildExplorerUrl("address", demoWallet.address),
      actionUrl: demoActionArtifacts.actionUrl,
      blinkUrl: demoActionArtifacts.blinkUrl,
      actionsManifestUrl: demoActionArtifacts.actionsManifestUrl,
      inspectorUrl: demoActionArtifacts.inspectorUrl,
      connect: () => setConnected(true),
      disconnect: () => setConnected(false),
      toggleConnection: () => setConnected((current) => !current),
    }),
    [connected],
  );

  return (
    <SolanaWalletContext.Provider value={value}>
      {children}
    </SolanaWalletContext.Provider>
  );
}

export function useSolanaWallet() {
  const context = useContext(SolanaWalletContext);

  if (!context) {
    throw new Error("useSolanaWallet must be used inside SolanaWalletProvider");
  }

  return context;
}
