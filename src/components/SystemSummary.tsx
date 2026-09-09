import { Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SystemSummary() {
  return (
    <section id="ch-system" className="scroll-mt-20 py-14 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 mb-3">
            CHAPTER 08 · SECTION 07 · SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            07｜領隊完整管理系統總結
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            將第八章所有理論整合成一套清晰、單純、可落地的閉環架構，貫穿登山活動從起步到返家的完整生命週期。
          </p>
          <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-amber-500/50 text-amber-300 font-semibold text-sm sm:text-base">
            ★ 第八章的最核心命題：<span className="text-white">「人與決策 (People & Decisions)」</span>
          </div>
        </div>

        {/* Large SVG Architectural Diagram */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              大型架構全景：領隊完整管理系統 (Full Leadership System)
            </h3>
            <span className="text-xs font-mono text-slate-400">AMNA STANDARDS</span>
          </div>

          {/* Native Vector SVG Flow */}
          <div className="w-full flex justify-center">
            <svg
              viewBox="0 0 540 680"
              className="w-full h-auto select-none"
              role="img"
              aria-label="領隊完整管理系統流程圖：行前規劃 → 了解隊伍 → 設定規則 → 行進管理 → 觀察狀況 → 風險評估 → 現場決策 → 繼續/調整/撤退 → 安全返回"
            >
              <defs>
                <linearGradient id="mainStepGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="coreDecisionGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="safeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#065f46" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>

              {/* Connecting Vertical Trunk Line */}
              <line x1="270" y1="30" x2="270" y2="620" stroke="#475569" strokeWidth="2.5" strokeDasharray="4 3" />

              {/* Step 1: 行前規劃 */}
              <g transform="translate(110, 15)">
                <rect width="320" height="46" rx="8" fill="url(#mainStepGrad)" stroke="#64748b" strokeWidth="1.5" />
                <circle cx="24" cy="23" r="12" fill="#0284c7" />
                <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">01</text>
                <text x="48" y="21" fill="#f8fafc" fontSize="13" fontWeight="bold">行前規劃 (Pre-trip Planning)</text>
                <text x="48" y="37" fill="#94a3b8" fontSize="9">路線勘察 · 時間預算 · 撤退點預設</text>
              </g>

              {/* Arrow 1 */}
              <polygon points="266,70 270,78 274,70" fill="#94a3b8" />

              {/* Step 2: 了解隊伍 */}
              <g transform="translate(110, 82)">
                <rect width="320" height="46" rx="8" fill="url(#mainStepGrad)" stroke="#64748b" strokeWidth="1.5" />
                <circle cx="24" cy="23" r="12" fill="#0284c7" />
                <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">02</text>
                <text x="48" y="21" fill="#f8fafc" fontSize="13" fontWeight="bold">了解隊伍 (Know Your Team)</text>
                <text x="48" y="37" fill="#94a3b8" fontSize="9">經驗 × 體能 × 心理狀態三大面向</text>
              </g>

              {/* Arrow 2 */}
              <polygon points="266,137 270,145 274,137" fill="#94a3b8" />

              {/* Step 3: 設定規則 */}
              <g transform="translate(110, 149)">
                <rect width="320" height="46" rx="8" fill="url(#mainStepGrad)" stroke="#64748b" strokeWidth="1.5" />
                <circle cx="24" cy="23" r="12" fill="#0284c7" />
                <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">03</text>
                <text x="48" y="21" fill="#f8fafc" fontSize="13" fontWeight="bold">設定規則 (Establish Protocols)</text>
                <text x="48" y="37" fill="#94a3b8" fontSize="9">角色分工 · 集合時間 · 通訊約定 · 禁超前</text>
              </g>

              {/* Arrow 3 */}
              <polygon points="266,204 270,212 274,204" fill="#94a3b8" />

              {/* Step 4: 行進管理 */}
              <g transform="translate(110, 216)">
                <rect width="320" height="46" rx="8" fill="url(#mainStepGrad)" stroke="#64748b" strokeWidth="1.5" />
                <circle cx="24" cy="23" r="12" fill="#0284c7" />
                <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">04</text>
                <text x="48" y="21" fill="#f8fafc" fontSize="13" fontWeight="bold">行進管理 (Pace & Formation)</text>
                <text x="48" y="37" fill="#94a3b8" fontSize="9">速度控制 · 動態隊距 · 關鍵節點清點</text>
              </g>

              {/* Arrow 4 */}
              <polygon points="266,271 270,279 274,271" fill="#94a3b8" />

              {/* Step 5: 觀察狀況 */}
              <g transform="translate(110, 283)">
                <rect width="320" height="46" rx="8" fill="url(#mainStepGrad)" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="24" cy="23" r="12" fill="#d97706" />
                <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">05</text>
                <text x="48" y="21" fill="#f8fafc" fontSize="13" fontWeight="bold">觀察狀況 (Continuous Observation)</text>
                <text x="48" y="37" fill="#fbbf24" fontSize="9">天氣雲層 · 地形踩踏 · 隊員步態與神情</text>
              </g>

              {/* Arrow 5 */}
              <polygon points="266,338 270,346 274,338" fill="#f59e0b" />

              {/* Step 6: 風險評估 */}
              <g transform="translate(110, 350)">
                <rect width="320" height="46" rx="8" fill="url(#mainStepGrad)" stroke="#ea580c" strokeWidth="1.5" />
                <circle cx="24" cy="23" r="12" fill="#ea580c" />
                <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">06</text>
                <text x="48" y="21" fill="#f8fafc" fontSize="13" fontWeight="bold">風險評估 (Risk Assessment)</text>
                <text x="48" y="37" fill="#fb923c" fontSize="9">人員 × 環境 × 時間 × 資源比對</text>
              </g>

              {/* Arrow 6 */}
              <polygon points="266,405 270,413 274,405" fill="#ea580c" />

              {/* Step 7: 現場決策 (Highlighted Core Node) */}
              <g transform="translate(90, 417)">
                <rect width="360" height="56" rx="10" fill="url(#coreDecisionGrad)" stroke="#fef08a" strokeWidth="2" />
                <circle cx="28" cy="28" r="14" fill="#ffffff" />
                <text x="28" y="32" fill="#b45309" fontSize="12" fontWeight="extrabold" textAnchor="middle">07</text>
                <text x="56" y="25" fill="#ffffff" fontSize="14" fontWeight="extrabold">現場決策 (Field Decision Matrix)</text>
                <text x="56" y="44" fill="#fef3c7" fontSize="10" fontWeight="bold">以安全返抵為絕對優先 · 杜絕盲目攻頂</text>
              </g>

              {/* Branching from 07 to 08 */}
              <line x1="270" y1="473" x2="270" y2="495" stroke="#f59e0b" strokeWidth="2" />
              <line x1="120" y1="495" x2="420" y2="495" stroke="#f59e0b" strokeWidth="2" />

              <line x1="120" y1="495" x2="120" y2="512" stroke="#f59e0b" strokeWidth="2" />
              <line x1="270" y1="495" x2="270" y2="512" stroke="#f59e0b" strokeWidth="2" />
              <line x1="420" y1="495" x2="420" y2="512" stroke="#f59e0b" strokeWidth="2" />

              {/* Step 8: 三大處置分支 */}
              {/* Branch A: 繼續 */}
              <g transform="translate(60, 515)">
                <rect width="120" height="50" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                <text x="60" y="22" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">繼續前進</text>
                <text x="60" y="38" fill="#94a3b8" fontSize="8" textAnchor="middle">在時間與餘裕內</text>
              </g>

              {/* Branch B: 調整/等待 */}
              <g transform="translate(210, 515)">
                <rect width="120" height="50" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
                <text x="60" y="22" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">調整 / 等待</text>
                <text x="60" y="38" fill="#94a3b8" fontSize="8" textAnchor="middle">降速 · 避難掩蔽</text>
              </g>

              {/* Branch C: 撤退 */}
              <g transform="translate(360, 515)">
                <rect width="120" height="50" rx="6" fill="#0f172a" stroke="#ea580c" strokeWidth="1.5" />
                <text x="60" y="22" fill="#fb923c" fontSize="11" fontWeight="bold" textAnchor="middle">果斷撤退</text>
                <text x="60" y="38" fill="#fca5a5" fontSize="8" textAnchor="middle">原路折返/降海拔</text>
              </g>

              {/* Converging Lines to Safe Return */}
              <line x1="120" y1="565" x2="250" y2="590" stroke="#10b981" strokeWidth="1.5" />
              <line x1="270" y1="565" x2="270" y2="590" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="420" y1="565" x2="290" y2="590" stroke="#ea580c" strokeWidth="1.5" />

              {/* Final Step 9: 安全返回 (Ultimate Goal) */}
              <g transform="translate(100, 595)">
                <rect width="340" height="58" rx="12" fill="url(#safeGrad)" stroke="#6ee7b7" strokeWidth="2" />
                <circle cx="30" cy="29" r="14" fill="#ffffff" />
                <text x="30" y="33" fill="#065f46" fontSize="12" fontWeight="extrabold" textAnchor="middle">✓</text>
                <text x="58" y="26" fill="#ffffff" fontSize="15" fontWeight="extrabold">安全返回 (Safe Return Completed)</text>
                <text x="58" y="45" fill="#d1fae5" fontSize="10" fontWeight="500">全隊安全抵達登山口 · 登山活動真正成功</text>
              </g>
            </svg>
          </div>

          <div className="mt-6 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="text-amber-400 font-bold">系統核心總結：</span>
            本架構從前端的客觀準備，經由中端的即時觀測，匯流至現場的決策分流。不論最終是「繼續」、「調整」或「撤退」，其所有路徑的終點只有一個——那便是
            <strong className="text-white font-bold">「全隊安全回家」</strong>。
          </div>
        </div>
      </div>
    </section>
  );
}
