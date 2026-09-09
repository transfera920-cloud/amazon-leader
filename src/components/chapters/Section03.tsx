import { AlertTriangle, Activity, HeartCrack, Stethoscope, CheckCircle2 } from "lucide-react";

export default function Chapter05() {
  return (
    <article id="ch-03" className="scroll-mt-20 py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            CHAPTER 08 · SECTION 03
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            03｜特殊隊員管理
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            登山隊伍中最容易衍生嚴重山難的轉折點，往往不是全隊體能不足，而是個別隊員出現生理或心理異常時未被及時察覺與正確介入處置。
          </p>
        </div>

        {/* Content & SVG Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Categories */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category 1: 速度較慢 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <Activity className="w-4 h-4" />
                <h3>一、速度較慢者的處置原則</h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pl-1">
                <li><strong className="text-white">主動調整隊伍速度：</strong>降低全隊行進配速，避免落後者心率飆高陷入無氧缺氧狀態。</li>
                <li><strong className="text-white">適度協助調整裝備：</strong>檢查背包配重平衡、登山杖長度是否合宜、協助分攤部分公共水糧。</li>
                <li><strong className="text-white">提早評估時程影響：</strong>換算至今日營地之推估抵達時間，評估是否會摸黑。</li>
              </ul>
            </div>

            {/* Category 2: 體能下降觀察指標 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-sky-400">
                <AlertTriangle className="w-4 h-4" />
                <h3>二、體能急遽下降時的細微徵兆</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                隊員常因面子或怕拖累隊伍而隱忍不說，領隊必須依賴客觀觀察四項指標：
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-950/80 rounded border border-slate-800">
                  <span className="text-amber-300 font-bold block">1. 步態 (Gait)</span>
                  <span className="text-slate-400 text-[11px]">腳步拖曳、易絆倒、重心不穩左右晃動。</span>
                </div>
                <div className="p-2.5 bg-slate-950/80 rounded border border-slate-800">
                  <span className="text-amber-300 font-bold block">2. 臉部表情 (Facial)</span>
                  <span className="text-slate-400 text-[11px]">面色蒼白、發紺、眼神渙散空洞、嘴唇發紫。</span>
                </div>
                <div className="p-2.5 bg-slate-950/80 rounded border border-slate-800">
                  <span className="text-amber-300 font-bold block">3. 語言反應 (Response)</span>
                  <span className="text-slate-400 text-[11px]">回答遲緩、答非所問或對簡單詢問無法組織語言。</span>
                </div>
                <div className="p-2.5 bg-slate-950/80 rounded border border-slate-800">
                  <span className="text-amber-300 font-bold block">4. 判斷能力 (Judgment)</span>
                  <span className="text-slate-400 text-[11px]">穿脫衣物判斷失常、手腳冰冷卻不願穿保暖衣。</span>
                </div>
              </div>
            </div>

            {/* Category 3: 明顯異常 5 步驟處置 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-orange-400">
                <Stethoscope className="w-4 h-4" />
                <h3>三、明顯異常之五階段處置標準</h3>
              </div>
              <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside pl-1">
                <li><strong className="text-white">降低活動強度：</strong>立即卸除重裝，停止走動，換上防風防雨保暖層。</li>
                <li><strong className="text-white">停止繼續上升：</strong>高度是高山症的催化劑，高山症第一鐵律：絕對不可再增加海拔。</li>
                <li><strong className="text-white">重新詳細評估：</strong>測量血氧、脈搏、體溫、意識狀態（AVPU量表）。</li>
                <li><strong className="text-white">必要時果斷撤退：</strong>若休息與保暖後無改善，立即著手安排降高度撤離。</li>
                <li><strong className="text-white">尋求專業醫療協助：</strong>出現肺水腫（粉紅泡沫痰）或腦水腫（步態失調）立即求援。</li>
              </ol>
            </div>

            {/* Category 4: 心理壓力 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-rose-400">
                <HeartCrack className="w-4 h-4" />
                <h3>四、心理壓力管理：切莫簡化為「鼓勵一下就好」</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                高山暴露感強烈或夜行迷茫時，隊員常爆發恐慌、過度焦慮或強烈想退出的念頭。
              </p>
              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
                <span className="text-amber-300 font-bold block">正確因應態度：</span>
                <p>
                  嚴禁對陷入恐懼的隊員說「沒什麼好怕的，加油往前走」這種無效喊話。領隊與資深隊友應做到：
                  <strong className="text-slate-100">【停步溝通、平視陪伴、探究真實原因、客觀評估恐慌是否已危及踏步安全】</strong>。若恐慌已導致肌肉僵直無法自主踩點，硬推前進將極易發生墜谷事故。
                </p>
              </div>
            </div>

            {/* Core Principle */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>特殊隊員管理核心</span>
              </div>
              <p className="text-base text-slate-100 font-semibold leading-relaxed">
                「隊員狀態的變化，有時比單純速度變慢更值得注意。」
              </p>
            </div>
          </div>

          {/* Right Column: Native SVG Diagram: 特殊隊員狀況判斷 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  教育圖表：特殊隊員狀況判斷流程
                </h3>
                <span className="text-xs font-mono text-slate-400">NATIVE SVG DIAGRAM</span>
              </div>

              {/* Native SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 460 480"
                  className="w-full max-w-lg h-auto select-none"
                  role="img"
                  aria-label="特殊隊員狀況判斷流程圖：正常 → 異常 → 評估 → 調整 → 繼續 / 撤退 / 求援"
                >
                  <defs>
                    <linearGradient id="normGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#065f46" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="warnGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#9a3412" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                  </defs>

                  {/* Flow Steps */}
                  {/* Step 1: 正常 (Normal) */}
                  <g transform="translate(60, 20)">
                    <rect width="340" height="48" rx="8" fill="url(#normGrad)" stroke="#34d399" strokeWidth="1.5" />
                    <circle cx="25" cy="24" r="12" fill="#10b981" />
                    <text x="25" y="28" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">01</text>
                    <text x="50" y="22" fill="#ffffff" fontSize="13" fontWeight="bold">正常狀態 (Normal Baseline)</text>
                    <text x="50" y="38" fill="#d1fae5" fontSize="10">配速平穩 · 意識清楚 · 表情自然 · 對話流暢</text>
                  </g>

                  {/* Down Arrow 1 */}
                  <path d="M 230 72 L 225 82 L 235 82 Z" fill="#64748b" />

                  {/* Step 2: 異常 (Abnormal Signs) */}
                  <g transform="translate(60, 88)">
                    <rect width="340" height="52" rx="8" fill="url(#warnGrad)" stroke="#fb923c" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="12" fill="#ea580c" />
                    <text x="25" y="30" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">02</text>
                    <text x="50" y="23" fill="#ffffff" fontSize="13" fontWeight="bold">察覺異常警訊 (Abnormal Detected)</text>
                    <text x="50" y="40" fill="#ffedd5" fontSize="10">步態拖曳 · 表情呆滯 · 反應遲緩 · 恐慌焦慮</text>
                  </g>

                  {/* Down Arrow 2 */}
                  <path d="M 230 144 L 225 154 L 235 154 Z" fill="#64748b" />

                  {/* Step 3: 評估 (Assessment) */}
                  <g transform="translate(60, 160)">
                    <rect width="340" height="52" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="12" fill="#0284c7" />
                    <text x="25" y="30" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">03</text>
                    <text x="50" y="23" fill="#f8fafc" fontSize="13" fontWeight="bold">現場深入評估 (In-Depth Assess)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">卸包停止上升 · 測生理數值 · 問診心理癥結</text>
                  </g>

                  {/* Down Arrow 3 */}
                  <path d="M 230 216 L 225 226 L 235 226 Z" fill="#64748b" />

                  {/* Step 4: 調整 (Adjustment) */}
                  <g transform="translate(60, 232)">
                    <rect width="340" height="52" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="12" fill="#d97706" />
                    <text x="25" y="30" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">04</text>
                    <text x="50" y="23" fill="#f8fafc" fontSize="13" fontWeight="bold">即時介入調整 (Action Adjustment)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">補充熱量水分 · 保暖防風 · 重新分配負重配速</text>
                  </g>

                  {/* Down Split Lines to 3 Outcomes */}
                  <path d="M 230 288 L 230 310" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M 100 310 L 360 310" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="100" y1="310" x2="100" y2="330" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="230" y1="310" x2="230" y2="330" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="360" y1="310" x2="360" y2="330" stroke="#f59e0b" strokeWidth="2" />

                  {/* Outcome 1: 繼續 (Continue) */}
                  <g transform="translate(30, 335)">
                    <rect width="120" height="90" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="60" cy="22" r="10" fill="#10b981" />
                    <text x="60" y="25" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">A</text>
                    <text x="60" y="44" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">繼續前行</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="9" textAnchor="middle">狀態完全恢復</text>
                    <text x="60" y="74" fill="#94a3b8" fontSize="8" textAnchor="middle">置於領隊身後觀測</text>
                  </g>

                  {/* Outcome 2: 撤退 (Retreat) */}
                  <g transform="translate(170, 335)">
                    <rect width="120" height="90" rx="8" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
                    <circle cx="60" cy="22" r="10" fill="#ea580c" />
                    <text x="60" y="25" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">B</text>
                    <text x="60" y="44" fill="#fb923c" fontSize="12" fontWeight="bold" textAnchor="middle">果斷撤退</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="9" textAnchor="middle">症狀持續未消退</text>
                    <text x="60" y="74" fill="#94a3b8" fontSize="8" textAnchor="middle">降海拔原路返回</text>
                  </g>

                  {/* Outcome 3: 求援 (Rescue) */}
                  <g transform="translate(310, 335)">
                    <rect width="120" height="90" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
                    <circle cx="60" cy="22" r="10" fill="#dc2626" />
                    <text x="60" y="25" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">C</text>
                    <text x="60" y="44" fill="#f87171" fontSize="12" fontWeight="bold" textAnchor="middle">啟動求援</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="9" textAnchor="middle">高山腦/肺水腫</text>
                    <text x="60" y="74" fill="#94a3b8" fontSize="8" textAnchor="middle">通報留守與救難隊</text>
                  </g>

                  {/* Bottom Footer Note */}
                  <text x="230" y="455" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    只要有惡化趨勢，絕不賭博繼續上升
                  </text>
                </svg>
              </div>

              <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">決策提醒：</span>
                當介入調整無效時，「繼續」選項自動失效。領隊必須在「撤退」或「求援」之間採取最迅速的處置，任何猶豫都會縮小生存安全餘裕。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
