import { Mountain, ArrowUp, Compass } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-slate-900">
          {/* Left: Organization & Identity */}
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <a
                  href="https://amazon-hike.com/intro"
                  className="font-bold text-white hover:text-amber-400 transition-colors text-base tracking-wide block"
                >
                  亞馬遜國家山岳協會
                </a>
                <span className="text-slate-500 font-mono text-[11px] block">
                  Amazon National Mountain Association (AMNA)
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              推廣科學化高山隊伍管理體系、動態領隊決策模型及零意外安全撤退文化，深化山岳領導素養與風險意識。
            </p>
          </div>

          {/* Right: Core Mission Card */}
          <div className="w-full lg:w-auto lg:max-w-md">
            <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800/90 relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5">
                <Compass className="w-4 h-4" />
                <span>第八章 · 領隊核心決策使命</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                「領隊的任務不是帶隊完成最高難度路線，而是在變化的環境中，讓整個隊伍安全回家。」
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} 亞馬遜國家山岳協會 (AMNA) · 登山教育教材系列第八章 · 保留所有教育版權
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
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
