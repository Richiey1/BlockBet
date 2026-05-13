"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, BarChart3, TrendingUp, Activity, ArrowRight, Wallet, ShieldCheck, Trophy, Timer } from "lucide-react";
import { useStacks } from "@/contexts/StacksProvider";

export default function Home() {
  const { address, connect } = useStacks();
  const [stats, setStats] = useState({
    rounds: 142,
    totalStaked: "42.5k STX",
    activePlayers: 89,
    accuracy: "68%"
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <Zap className="w-3 h-3 fill-current" /> Predict the Chain, Not the Market
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase italic"
          >
            BLOCK<span className="text-orange-500">BET.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-zinc-400 font-bold uppercase text-sm tracking-wide leading-relaxed"
          >
            A real-time on-chain prediction game. Stake STX on verifiable blockchain behavior and win proportionally from the pool.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-10 py-5 rounded-2xl bg-orange-500 text-black font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(249,115,22,0.3)] flex items-center gap-3">
              Start Predicting <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3">
              How it works <ShieldCheck className="w-5 h-5 text-orange-500" />
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: "Prediction Rounds", value: stats.rounds, icon: Activity },
            { label: "Total STX Staked", value: stats.totalStaked, icon: BarChart3 },
            { icon: TrendingUp, label: "Live Players", value: stats.activePlayers },
            { icon: Trophy, label: "Avg Accuracy", value: stats.accuracy },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl"
            >
              <stat.icon className="w-5 h-5 text-orange-500 mb-4" />
              <p className="text-3xl font-black tracking-tighter italic">{stat.value}</p>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Game Modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Block Pulse", 
              desc: "Predict block size, transaction counts, or fee spikes in the upcoming blocks.", 
              time: "1-2 Blocks",
              icon: Zap
            },
            { 
              title: "Activity Watch", 
              desc: "Predict if specific contract interactions or pool swaps will occur within a window.", 
              time: "1-5 Minutes",
              icon: Activity
            },
            { 
              title: "Volatility Shot", 
              desc: "Predict short-term STX price movements based on deterministic on-chain signals.", 
              time: "5-10 Minutes",
              icon: TrendingUp
            }
          ].map((mode, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <mode.icon className="w-24 h-24 rotate-12" />
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 border border-orange-500/20">
                <mode.icon className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-3xl font-black tracking-tighter italic uppercase mb-4">{mode.title}</h3>
              <p className="text-zinc-400 font-bold text-sm leading-relaxed mb-8">{mode.desc}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Timer className="w-3 h-3 text-orange-500/50" />
                  <span className="text-[10px] font-black text-orange-500/50 uppercase tracking-widest">{mode.time}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
