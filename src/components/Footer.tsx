import { Mountain, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        {/* Organization & Identity (Centered) */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Mountain className="w-5 h-5" />
          </div>
          <div>
            <a
              href="https://amazon-hike.com/"
              className="font-bold text-white hover:text-amber-400 transition-colors text-base tracking-wide block"
            >
              亞馬遜國家山岳協會
            </a>
            <span className="text-slate-500 font-mono text-[11px] block mt-0.5">
              Amazon National Mountain Association (AMNA)
            </span>
          </div>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          推廣科學化高山隊伍管理體系、動態領隊決策模型及零意外安全撤退文化，深化山岳領導素養與風險意識。
        </p>

        {/* Back to Top Button (Centered) */}
        <div className="pt-2">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="回到網頁頂部"
          >
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            <span>回到頂端</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
