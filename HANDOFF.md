# MeterOS Frontend Handoff

## Purpose

Frontend is the Solana Frontier prototype for MeterOS.

It should communicate:

> MeterOS is a wallet-native control plane for Solana agents, treasury wallets, provider payouts, Actions, Blinks, and settlement visibility.

## Stack

- Next.js 16.2.4
- React 19.2.4
- Tailwind CSS v4
- TypeScript

## Routes

```txt
/
/docs
/app
/app/agents
/app/providers
/app/policies
/app/events
/app/integrations
```

## Current State

The UI is polished and static/prototype-driven.

Working:

- wallet-native visual shell
- Solana Devnet badge
- wallet connect prototype button
- Action/Blink cards
- live activity feel
- providers and payout wallet UI
- policies and Action-linked controls
- events proof table
- integrations page with Actions & Blinks section

Not yet wired:

- real wallet adapter
- real RPC reads
- Anchor program clients
- backend Actions GET/POST endpoints
- real Blinks
- event indexer

## Key Files

```txt
app/page.tsx
app/app/page.tsx
app/app/agents/page.tsx
app/app/providers/page.tsx
app/app/policies/page.tsx
app/app/events/page.tsx
app/app/integrations/page.tsx
components/solana/*
components/app-shell/*
components/landing/*
lib/solana-prototype.ts
```

## Commands

```bash
npm install
npm run lint
npm run build
npm run dev -- --hostname 0.0.0.0
```

## Next Frontend Work

1. Add Solana wallet adapter.
2. Load IDLs from `../contract/app/idl` or copied app-local IDLs.
3. Replace demo wallet state in `components/solana/SolanaWalletProvider.tsx`.
4. Wire explorer URLs to real tx/address values.
5. Wire Action cards to real backend endpoints.
6. Replace static event feed with indexed program events or RPC polling.
