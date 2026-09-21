import { ShieldCheck, Mountain, Users, Clock, AlertTriangle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Exactly ONE <h1> in the entire page as strictly required */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              登山隊伍管理 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                與領隊決策系統
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              學習如何管理隊伍、掌握風險，在關鍵時刻做出正確登山決策。
            </p>

            {/* Meta Tags / Reading Stats */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <Mountain className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200 font-medium">8 節核心課程</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200 font-medium">約 25 分鐘閱讀</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200 font-medium">手機優先閱讀</span>
              </div>
            </div>

            {/* Hero Core Quote */}
            <blockquote className="relative p-5 sm:p-6 rounded-xl bg-slate-900/90 border-l-4 border-amber-500 shadow-xl space-y-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>本章核心指引</span>
              </div>
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                「領隊的任務不是帶隊完成最高難度路線，而是在變化的環境中，讓整個隊伍安全回家。」
              </p>
            </blockquote>
          </div>

          {/* Hero Native SVG Visual: Mountain ridge, team silhouette, leader and decision nodes */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-slate-900/60 border border-slate-800 p-4 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  LEADERSHIP & DECISION MATRIX
                </span>
                <span className="text-amber-400">AMNA SYSTEM</span>
              </div>

              {/* Native Vector SVG */}
              <svg
                viewBox="0 0 440 320"
                className="w-full h-auto drop-shadow-md select-none"
                role="img"
                aria-label="登山領隊帶領隊伍行進於高山稜線並觀察隊員狀況"
              >
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <linearGradient id="ridgeGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <linearGradient id="ridgeGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Sky background */}
                <rect width="440" height="320" rx="12" fill="url(#skyGrad)" />

                {/* Contour topo lines */}
                <path
                  d="M0 80 Q 110 50, 220 70 T 440 60"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />
                <path
                  d="M0 130 Q 120 100, 240 120 T 440 110"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />
                <path
                  d="M0 180 Q 140 150, 260 170 T 440 150"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />

                {/* Distant Mountain Peak */}
                <polygon
                  points="260,70 340,190 190,190"
                  fill="#1e293b"
                  opacity="0.8"
                />
                <polygon
                  points="350,110 430,220 280,220"
                  fill="#1e293b"
                  opacity="0.6"
                />

                {/* Main Foreground Ridge */}
                <path
                  d="M 0 250 L 70 210 L 160 170 L 260 150 L 350 180 L 440 210 L 440 320 L 0 320 Z"
                  fill="url(#ridgeGrad1)"
                />
                <path
                  d="M 160 170 L 260 150 L 350 180 L 310 320 L 130 320 Z"
                  fill="url(#ridgeGrad2)"
                  opacity="0.6"
                />

                {/* Route Path on the Ridge */}
                <path
                  d="M 40 230 Q 120 190, 180 175 T 260 155 T 380 185"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                />

                {/* Decision Node Rings on the Ridge */}
                <circle cx="260" cy="155" r="22" fill="url(#nodeGlow)" />
                <circle cx="260" cy="155" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                <text x="260" y="132" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle">
                  決策節點 (Decision Node)
                </text>

                {/* Climbers Silhouettes */}
                {/* 1. Leader (Front) */}
                <g transform="translate(260, 142)">
                  <circle cx="0" cy="-12" r="3.5" fill="#f8fafc" />
                  <path d="M -3 -8 L 3 -8 L 4 0 L -4 0 Z" fill="#f8fafc" />
                  <path d="M 0 0 L -3 12 M 0 0 L 3 12" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
                  {/* Backpack */}
                  <rect x="-6" y="-7" width="3" height="7" rx="1.5" fill="#f59e0b" />
                  {/* Leader flag/pole */}
                  <line x1="4" y1="-14" x2="4" y2="12" stroke="#cbd5e1" strokeWidth="1.2" />
                  <text x="12" y="-5" fill="#f8fafc" fontSize="10" fontWeight="bold">
                    領隊 (Leader)
                  </text>
                </g>

                {/* 2. Member 1 */}
                <g transform="translate(210, 155)">
                  <circle cx="0" cy="-10" r="3" fill="#cbd5e1" />
                  <path d="M -2.5 -7 L 2.5 -7 L 3 0 L -3 0 Z" fill="#cbd5e1" />
                  <path d="M 0 0 L -2 10 M 0 0 L 2 10" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
                  <rect x="-5" y="-6" width="3" height="6" rx="1" fill="#64748b" />
                </g>

                {/* 3. Member 2 */}
                <g transform="translate(160, 168)">
                  <circle cx="0" cy="-10" r="3" fill="#cbd5e1" />
                  <path d="M -2.5 -7 L 2.5 -7 L 3 0 L -3 0 Z" fill="#cbd5e1" />
                  <path d="M 0 0 L -2 10 M 0 0 L 2 10" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
                  <rect x="-5" y="-6" width="3" height="6" rx="1" fill="#64748b" />
                </g>

                {/* 4. Sweeper / 壓隊 */}
                <g transform="translate(110, 185)">
                  <circle cx="0" cy="-10" r="3.2" fill="#38bdf8" />
                  <path d="M -2.5 -7 L 2.5 -7 L 3 0 L -3 0 Z" fill="#38bdf8" />
                  <path d="M 0 0 L -2 10 M 0 0 L 2 10" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                  <rect x="-5.5" y="-6" width="3.5" height="6" rx="1" fill="#0284c7" />
                  <text x="-8" y="24" fill="#7dd3fc" fontSize="10" textAnchor="middle">
                    壓隊 (Sweeper)
                  </text>
                </g>

                {/* Connection Line of the Team */}
                <line x1="110" y1="185" x2="260" y2="155" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                {/* Dynamic Environmental Indicators */}
                <g transform="translate(30, 40)">
                  <rect width="130" height="42" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#334155" strokeWidth="1" />
                  <text x="10" y="17" fill="#94a3b8" fontSize="9">環境變數監測</text>
                  <text x="10" y="32" fill="#f1f5f9" fontSize="10" fontWeight="bold">
                    天候 · 地形 · 隊員狀態
                  </text>
                </g>

                <g transform="translate(280, 240)">
                  <rect width="135" height="45" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="10" y="17" fill="#f59e0b" fontSize="9" fontWeight="bold">核心目標</text>
                  <text x="10" y="33" fill="#f8fafc" fontSize="11" fontWeight="bold">
                    全員安全返抵 (Safe Return)
                  </text>
                </g>
              </svg>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  領隊引導節奏
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  壓隊確認人數
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  全隊動態連結
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
