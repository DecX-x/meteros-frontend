# MeterOS Frontend

**MeterOS** is a Solana Control Plane for Onchain Agents. It provides a platform to connect a wallet, fund agent wallets, publish paid tools, and execute shareable Solana Actions through a wallet-native control plane.

## Tech Stack

This project is built with:
- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v20+ recommended). This project uses `npm` or `pnpm`.

### Installation

Clone the repository and install dependencies:

```bash
# Using npm
npm install

# Using pnpm
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The entry point of the application is `app/page.tsx`. The layout, including the Solana wallet provider configuration, is set up in `app/layout.tsx`.

## Project Structure

```
├── app/                  # Next.js App Router structure (pages, layout)
├── components/           # React components
│   ├── landing/          # Landing page sections (Hero, Architecture, etc.)
│   └── solana/           # Solana Wallet integration components
├── lib/                  # Shared utilities and libraries
├── public/               # Static assets
```

## Features

- **Agent Wallet Funding:** Securely manage and fund agent-controlled wallets.
- **Paid Tool Publishing:** Publish and discover paid tools within the Solana ecosystem.
- **Solana Actions:** Execute and share native onchain actions directly from the dashboard.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
