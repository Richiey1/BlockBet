# 📘 BlockBet — Predict the Chain, Not the Market

## 🧠 One-Liner

A real-time on-chain prediction game where players stake BTC (or sBTC) on verifiable blockchain outcomes and win based on correct predictions.

---

## 🎯 Vision

Transform blockchain activity into an interactive, decision-driven game where users don’t just observe the chain — they predict it, act on it, and earn from it.

BlockBet turns on-chain data into a playable financial primitive.

---

## 🚨 Problem

Current crypto interactions are:

- Passive (holding, staking)
- Abstract (complex DeFi mechanics)
- Detached from real-time blockchain behavior

Prediction markets exist, but:

- Focus mostly on price speculation
- Require off-chain data/oracles
- Lack immediacy and simplicity

---

## 💡 Core Concept

Players stake BTC (or sBTC) on short-term, verifiable blockchain outcomes such as:

- Block characteristics (size, transaction count)
- Transaction activity
- DeFi interactions
- Short-term volatility

---

## ⚡ Core Gameplay Loop (10–15 seconds)

1. User selects a prediction
2. Stakes a small amount (e.g. 0.0001 BTC)
3. Waits for resolution (1–5 minutes)
4. Smart contract resolves outcome
5. Winners claim pooled rewards

---

## 🔐 Smart Contract Architecture (Stacks / Clarity)

### 1. `prediction-market.clar`
- Create prediction rounds
- Define conditions
- Manage pools

### 2. `stake-manager.clar`
- Accept and track user stakes
- Assign to outcomes

### 3. `resolver-engine.clar`
- Pulls/verifies outcome data
- Finalizes results
- Distributes rewards

---

## 🎮 Game Modes

1. **Block Pulse**: Predict block size or tx count.
2. **Activity Watch**: Predict contract interactions.
3. **Volatility Shot**: Short-term price movement.
