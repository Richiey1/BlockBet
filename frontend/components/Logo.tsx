import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 text-sm font-black tracking-tight text-white uppercase italic"
      aria-label="BlockBet home"
    >
      <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
        <span className="text-black text-xl">B</span>
      </div>
      <span className="leading-tight">
        <span className="block text-lg tracking-tighter">Block<span className="text-orange-500">Bet</span></span>
        <span className="block text-[10px] font-black text-zinc-500 tracking-widest">
          Predict the Chain
        </span>
      </span>
    </Link>
  );
}
