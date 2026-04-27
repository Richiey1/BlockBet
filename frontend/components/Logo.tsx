import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
      aria-label="StacksTacToe home"
    >
      <img 
        src="/logo.svg" 
        alt="StacksTacToe Logo" 
        className="h-10 w-10 transition-transform duration-200 group-hover:scale-105" 
      />
      <span className="leading-tight">
        <span className="block text-base">StacksTacToe</span>
        <span className="block text-xs font-normal text-slate-400">
          Arena
        </span>
      </span>
    </Link>
  );
}
