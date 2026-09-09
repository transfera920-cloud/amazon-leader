import { Clock, Sunrise, Sunset, AlertOctagon, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Chapter06() {
  const timeFactors = [
    { title: "出發時間 (Departure Time)", desc: "依據日出時程、天氣預測對流高峰（通常為午後）提早啟程，爭取白晝充裕時間。" },
    { title: "行走速度 (Movement Pace)", desc: "不以最佳個人配速估算，必須以全隊真實均速加乘 1.2 至 1.3 倍係數計算行程。" },
    { title: "休息時間 (Rest Periods)", desc: "定時小休（每走 50 分鐘休 5-10 分鐘）與午餐大休，確保體能穩定代謝乳酸與補給。" },
    { title: "天氣變化 (Weather Window)", desc: "掌握午後雷陣雨、霧氣瀰漫降溫之典型山區微氣候規律，避開惡劣降水窗口。" },
    { title: "隊伍狀況 (Dynamic Team State)", desc: "依據隊員磨破腳、體力透支或抽筋等臨時狀況，隨時滾動調整預估到點時間。" },
  ];

  return (
    <article id="ch-04" className="scroll-mt-20 py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            CHAPTER 08 · SECTION 04
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            04｜行程時間管理
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            高山時間管理並非「走得越快越厲害」。時間管理的真正真諦，在於確保整趟行程能在合理、充裕且安全的時限內完成，並全程保留足以應對突發事件的
            <strong className="text-amber-400 font-semibold">「時間緩衝彈性」</strong>。
          </p>
        </div>

        {/* Content & SVG Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                時間管理必須考量的五大核心要素
              </h3>
              <div className="space-y-2">
                {timeFactors.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800 text-xs">
                    <span className="font-bold text-amber-300 mr-2">{item.title}：</span>
                    <span className="text-slate-300">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Dark vs Late Dark Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase">
                  <Sunrise className="w-4 h-4" />
                  <span>晨光原則</span>
                </div>
                <div className="text-sm font-bold text-slate-100">「不摸早黑，通常已經成功一半。」</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  在天色漸亮或晨曦中出發，隊員精神充沛、視線開闊，能大幅降低起步階段的踩空扭傷機率。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold uppercase">
                  <Sunset className="w-4 h-4" />
                  <span>暮色守則</span>
                </div>
                <div className="text-sm font-bold text-slate-100">「不摸晚黑，代表行程控制良好。」</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  於日落前兩小時抵達營地，有充裕陽光搭帳、取水、炊煮與換乾爽衣物，杜絕夜行低溫失溫風險。
                </p>
              </div>
            </div>

            {/* Critical Caution: Not absolute rules */}
            <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>切勿將「不摸黑」視為僵化教條</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                必須特別強調：<strong className="text-white">若領隊為了死守「不摸黑」或趕進度，而惡意壓縮隊員必要的小休、催促腳步、忽略隊員已出現的發抖失溫或對流雲劇變，其所引發的失足或心血管崩潰風險反而會飆升數倍！</strong>
                時間管理是手段，全隊安全才是不可動搖的最高目的。
              </p>
            </div>

            {/* Core Principle */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>時間管理本質</span>
              </div>
              <p className="text-base text-slate-100 font-semibold leading-relaxed">
                「時間管理不是追求極限速度，而是確保行程在安全時限內完成，並全程保有調整空間。」
              </p>
            </div>
          </div>

          {/* Right Column: Native SVG Diagram: 時間管理模型 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  教育圖表：時間管理模型
                </h3>
                <span className="text-xs font-mono text-slate-400">NATIVE SVG DIAGRAM</span>
              </div>

              {/* Native SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 460 440"
                  className="w-full max-w-lg h-auto select-none"
                  role="img"
                  aria-label="時間管理模型圖：開始時間 → 行進 → 休息 → 評估 → 調整 → 完成，並加入預留調整空間"
                >
                  <defs>
                    <linearGradient id="timeBarGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="70%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  {/* Top Timeline Bar */}
                  <g transform="translate(30, 25)">
                    <text x="0" y="0" fill="#94a3b8" fontSize="10">一日高山黃金白晝時間軸 (Daylight Window)</text>
                    <rect y="10" width="400" height="18" rx="9" fill="#1e293b" />
                    <rect y="10" width="280" height="18" rx="9" fill="url(#timeBarGrad)" />
                    {/* Buffer indicator */}
                    <rect x="280" y="10" width="120" height="18" rx="9" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="340" y="23" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle">
                      +20-30% 安全緩衝 (Buffer)
                    </text>
                  </g>

                  {/* Flow Stages */}
                  {/* Stage 1: 開始時間 */}
                  <g transform="translate(40, 80)">
                    <rect width="180" height="56" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="15" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold">01. 開始時間 (Start)</text>
                    <text x="15" y="42" fill="#f8fafc" fontSize="12" fontWeight="bold">早開步 · 爭取白晝視線</text>
                  </g>

                  {/* Horizontal Arrow 1 */}
                  <path d="M 230 108 L 245 108" stroke="#64748b" strokeWidth="2" />
                  <polygon points="245,104 253,108 245,112" fill="#64748b" />

                  {/* Stage 2: 行進階段 */}
                  <g transform="translate(255, 80)">
                    <rect width="170" height="56" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                    <text x="15" y="22" fill="#94a3b8" fontSize="10" fontWeight="bold">02. 穩健行進 (Pace)</text>
                    <text x="15" y="42" fill="#f8fafc" fontSize="12" fontWeight="bold">依最需照顧者調速</text>
                  </g>

                  {/* Down Arrow from 2 to 3 */}
                  <path d="M 340 144 L 340 165" stroke="#64748b" strokeWidth="2" />
                  <polygon points="336,165 340,173 344,165" fill="#64748b" />

                  {/* Stage 3: 定期休息 */}
                  <g transform="translate(255, 175)">
                    <rect width="170" height="56" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                    <text x="15" y="22" fill="#94a3b8" fontSize="10" fontWeight="bold">03. 節奏休息 (Rest)</text>
                    <text x="15" y="42" fill="#f8fafc" fontSize="12" fontWeight="bold">補水補充熱量行動糧</text>
                  </g>

                  {/* Left Arrow from 3 to 4 */}
                  <path d="M 245 203 L 230 203" stroke="#64748b" strokeWidth="2" />
                  <polygon points="230,199 222,203 230,207" fill="#64748b" />

                  {/* Stage 4: 節點評估 */}
                  <g transform="translate(40, 175)">
                    <rect width="180" height="56" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="15" y="22" fill="#f59e0b" fontSize="10" fontWeight="bold">04. 節點評估 (Assess)</text>
                    <text x="15" y="42" fill="#f8fafc" fontSize="12" fontWeight="bold">比對預定進度落差</text>
                  </g>

                  {/* Down Arrow from 4 to 5 */}
                  <path d="M 130 239 L 130 260" stroke="#64748b" strokeWidth="2" />
                  <polygon points="126,260 130,268 134,260" fill="#64748b" />

                  {/* Stage 5: 動態調整 */}
                  <g transform="translate(40, 270)">
                    <rect width="180" height="56" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1.5" />
                    <text x="15" y="22" fill="#fb923c" fontSize="10" fontWeight="bold">05. 動態調整 (Adjust)</text>
                    <text x="15" y="42" fill="#f8fafc" fontSize="12" fontWeight="bold">啟用備案/調整目標</text>
                  </g>

                  {/* Right Arrow from 5 to 6 */}
                  <path d="M 230 298 L 245 298" stroke="#64748b" strokeWidth="2" />
                  <polygon points="245,294 253,298 245,302" fill="#64748b" />

                  {/* Stage 6: 安全完成 */}
                  <g transform="translate(255, 270)">
                    <rect width="170" height="56" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <text x="15" y="22" fill="#34d399" fontSize="10" fontWeight="bold">06. 安全完成 (Finish)</text>
                    <text x="15" y="42" fill="#f8fafc" fontSize="12" fontWeight="bold">日落前達陣紮營</text>
                  </g>

                  {/* Buffer Framework Box */}
                  <g transform="translate(40, 350)">
                    <rect width="385" height="60" rx="8" fill="#1e293b" fillOpacity="0.7" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="20" y="24" fill="#fde047" fontSize="12" fontWeight="bold">
                      ★ 必備關鍵：預留調整空間 (Decision Buffer Window)
                    </text>
                    <text x="20" y="44" fill="#cbd5e1" fontSize="10">
                      任何攀登日皆應預留 1.5 ~ 2 小時因應抽筋、天候驟變或迷途校正，不可排滿至黃昏最後一刻。
                    </text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">排程心法：</span>
                當行程延誤超過預留緩衝時，領隊應立刻切換至「縮減行程」或「就近迫降紮營」模式，絕不可為了貪戀目標而透支全隊夜行風險。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
