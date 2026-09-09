import { MessageSquare, Users, Shield, Radio, CheckCircle2, AlertCircle } from "lucide-react";

export default function Chapter09() {
  const leaderTasks = [
    { title: "清楚說明 (Clear Briefing)", desc: "預告前方路況坡度、預計走多久、下一小休地點與水源位置，降低隊友心理焦慮。" },
    { title: "主動詢問 (Proactive Inquiries)", desc: "不等待隊友開口，主動觀察呼吸步態並溫和詢問「腳底有沒有磨痛點？」「要不要加件薄風衣？」" },
    { title: "即時回報 (Timely Feedback)", desc: "前後呼應，壓隊及時回傳隊尾動態，使領隊掌握全隊行進落差與體能消長。" },
  ];

  const teamCulture = [
    { title: "不隱瞞問題 (Zero Concealment)", desc: "鼓勵隊員身體一有磨痛、頭暈或裝備打濕立即出聲，不以發言為恥。" },
    { title: "不勉強自己 (No Toxic Toughness)", desc: "打破「逞強硬撐才是勇敢」的錯誤毒性登山文化，量力而為是最高的美德。" },
    { title: "互相協助 (Mutual Support)", desc: "行進間主動提醒踏點鬆動、濕滑樹根、分擔公裝，彼此成為防護網。" },
  ];

  return (
    <article id="ch-05" className="scroll-mt-20 py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            CHAPTER 08 · SECTION 05
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            05｜團隊溝通與領導
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            登山隊伍的溝通本質，絕不是表面上的「說說笑笑」或「討所有人歡心」，而是建立起一條能夠流通
            <strong className="text-amber-400 font-semibold">「真實第一手生理與環境情資」</strong>
            的生命安全神經網絡。
          </p>
        </div>

        {/* Content & SVG Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Communication true objective */}
            <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                <AlertCircle className="w-4 h-4" />
                <h3>高山溝通的唯一真正目的</h3>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                溝通不是為了討好任何人或追求表面和氣。溝通在高山安全管理中的硬核鏈條為：
              </p>
              <div className="p-2.5 bg-slate-950 rounded-lg text-xs font-mono text-amber-300 border border-slate-800 flex flex-wrap items-center gap-1.5 justify-center">
                <span>取得真實資訊</span>
                <span>→</span>
                <span>共同理解局勢</span>
                <span>→</span>
                <span>堅定執行決策</span>
                <span>→</span>
                <span>持續動態回報</span>
              </div>
            </div>

            {/* 領隊應做到 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Radio className="w-4 h-4 text-sky-400" />
                領隊三項溝通職責
              </h3>
              <div className="space-y-2">
                {leaderTasks.map((t, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800 text-xs">
                    <span className="font-bold text-sky-300 mr-1.5">{t.title}：</span>
                    <span className="text-slate-300">{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 建立團隊文化 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                建立無懼回報的團隊文化
              </h3>
              <div className="space-y-2">
                {teamCulture.map((c, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800 text-xs">
                    <span className="font-bold text-emerald-300 mr-1.5">{c.title}：</span>
                    <span className="text-slate-300">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Principle */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>安全文化核心基石</span>
              </div>
              <p className="text-base text-slate-100 font-semibold leading-relaxed">
                「隊員願意主動回報問題，是安全管理的重要基礎。」
              </p>
            </div>
          </div>

          {/* Right Column: Native SVG Diagram: 團隊溝通循環 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  教育圖表：團隊溝通循環模型
                </h3>
                <span className="text-xs font-mono text-slate-400">NATIVE SVG DIAGRAM</span>
              </div>

              {/* Native Vector SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 460 420"
                  className="w-full max-w-lg h-auto select-none"
                  role="img"
                  aria-label="團隊溝通循環圖：領隊 → 說明 → 隊員 → 回報 → 領隊 → 評估 → 決策"
                >
                  <defs>
                    <linearGradient id="commGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  {/* Flow circle path */}
                  <ellipse cx="230" cy="200" rx="160" ry="120" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5 3" />

                  {/* 1. 領隊 Node (Top: 230, 80) */}
                  <g transform="translate(230, 80)">
                    <rect x="-65" y="-30" width="130" height="60" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
                    <text x="0" y="-8" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">領隊</text>
                    <text x="0" y="10" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">(Leader)</text>
                    <text x="0" y="22" fill="#94a3b8" fontSize="8" textAnchor="middle">主動詢問 · 宏觀掌控</text>
                  </g>

                  {/* Arrow 1: 領隊 → 說明 (Right Down) */}
                  <g transform="translate(365, 130)">
                    <rect x="-50" y="-18" width="100" height="36" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="0" y="4" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">① 清楚說明</text>
                  </g>

                  {/* 2. 隊員 Node (Bottom: 230, 320) */}
                  <g transform="translate(230, 320)">
                    <rect x="-65" y="-30" width="130" height="60" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                    <text x="0" y="-8" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">全體隊員</text>
                    <text x="0" y="10" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">(Team Members)</text>
                    <text x="0" y="22" fill="#94a3b8" fontSize="8" textAnchor="middle">不隱瞞 · 共同守護</text>
                  </g>

                  {/* Arrow 2: 隊員 → 回報 (Left Up) */}
                  <g transform="translate(95, 270)">
                    <rect x="-50" y="-18" width="100" height="36" rx="6" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
                    <text x="0" y="4" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">② 及時回報</text>
                  </g>

                  {/* Arrow 3: 領隊 → 評估與決策 (Top Left Inside) */}
                  <g transform="translate(95, 130)">
                    <rect x="-50" y="-18" width="100" height="36" rx="6" fill="#0f172a" stroke="#ea580c" strokeWidth="1.5" />
                    <text x="0" y="4" fill="#fb923c" fontSize="11" fontWeight="bold" textAnchor="middle">③ 評估決策</text>
                  </g>

                  {/* Center Hub: 資訊流通核心 */}
                  <g transform="translate(230, 200)">
                    <circle cx="0" cy="0" r="42" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                    <text x="0" y="-6" fill="#fde047" fontSize="12" fontWeight="bold" textAnchor="middle">真實資訊</text>
                    <text x="0" y="12" fill="#cbd5e1" fontSize="9" textAnchor="middle">無恐懼環境</text>
                  </g>

                  {/* Direction Markers */}
                  <path d="M 300 80 Q 380 90, 390 170" fill="none" stroke="#38bdf8" strokeWidth="2" />
                  <polygon points="386,170 390,178 394,170" fill="#38bdf8" />

                  <path d="M 390 230 Q 370 300, 300 320" fill="none" stroke="#10b981" strokeWidth="2" />
                  <polygon points="305,316 297,320 305,324" fill="#10b981" />

                  <path d="M 160 320 Q 90 300, 70 230" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  <polygon points="74,230 70,222 66,230" fill="#fbbf24" />

                  <path d="M 70 170 Q 90 90, 160 80" fill="none" stroke="#ea580c" strokeWidth="2" />
                  <polygon points="155,76 163,80 155,84" fill="#ea580c" />
                </svg>
              </div>

              <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">溝通警訊：</span>
                若隊員因害怕被責罵或被貼上「拖油瓶」標籤而不敢出聲，所有安全管理機制在當下便已全面癱瘓。領隊的情緒穩定度，是這條溝通循環能否存活的決定性關鍵。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
