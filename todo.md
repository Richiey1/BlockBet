# 📝 BlockBet Development TODO

> [!IMPORTANT]
> This document tracks the pending tasks for the **BlockBet** project as it transitions to an on-chain behavioral prediction game.

## 🚀 Phase 1: Core Protocol Development
- [x] **Smart Contract Refactor**: Implemented `blockbet.clar` with round creation, staking, and resolution logic.
- [ ] **Automated Resolution Engine**: Build a bot or script that triggers `resolve-round` by fetching real-time block data from the Stacks API.
- [ ] **Multi-Mode Support**: Expand contract logic to support specific DeFi interaction predictions (e.g., DEX swaps).
- [ ] **Security Audit**: Ensure pool distribution logic is protected against edge cases (e.g., zero winners).

## 🖥️ Frontend & UX
- [x] **Landing Page Redesign**: Implemented a high-impact dashboard for BlockBet.
- [x] **Branding Integration**: Updated all logos and assets for the new identity.
- [ ] **Live Prediction Interface**: Build the active betting UI where users can see the current pool and select their outcome.
- [ ] **Network Feed**: Integrate a real-time WebSocket or polling feed of Stacks block data to inform player decisions.
- [ ] **Historical Performance**: Add a "My Bets" section to track previous predictions and rewards.

## 🛠 Deployment & DevOps
- [x] **Documentation Overhaul**: Updated all `README.md` and `PRD.md` files in the repository.
- [x] **Repository Migration**: Created a new repository [Richiey1/BlockBet](https://github.com/Richiey1/BlockBet) and pushed the initial refactor.
- [ ] **Vercel Deployment**: Set up automatic deployments for the new frontend.

## 🧪 Testing & Validation
- [ ] **Unit Tests**: Refactor legacy StacksTacToe tests to cover the new prediction market logic.
- [ ] **Load Testing**: Simulate high-frequency betting rounds to ensure contract gas efficiency.
