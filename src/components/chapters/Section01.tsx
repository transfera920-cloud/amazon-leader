import { Brain, Dumbbell, Compass, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Chapter02() {
  return (
    <article id="ch-01" className="scroll-mt-20 py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            CHAPTER 08 · SECTION 01
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            01｜認識登山隊伍組成
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            評估一支登山隊伍的真實耐受力，不能單看某一位強者的速度或名氣。領隊必須從三個維度立體審視每位隊員與整體結構。
          </p>
        </div>

        {/* Content & SVG Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dimensions */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-300 leading-relaxed">
              高山環境對人體的考驗是全方位的。單純跑馬拉松的健將如果缺乏高山低壓適應與失溫應對知識，在惡劣天氣下一樣可能陷入危機；同樣地，經驗豐富者若當日體力耗竭，也可能出現判斷遲鈍。
            </p>

            <div className="space-y-4">
              {/* Dimension 1 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                  <Compass className="w-4 h-4" />
                  <h3>1. 登山經驗維度 (Experience)</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  隊伍通常涵蓋多元背景，不同層級者對山林情境的理解各異：
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pl-1">
                  <li>
                    <strong className="text-white">新手 (Novice)：</strong>
                    容易因裝備穿戴不當或步伐紊亂而過早消耗能量，需明確引導。
                  </li>
                  <li>
                    <strong className="text-white">有經驗山友 (Experienced)：</strong>
                    具備基本自我照顧能力，但若心態鬆懈可能低估潛在隱憂。
                  </li>
                  <li>
                    <strong className="text-white">高山經驗者 (Advanced)：</strong>
                    熟悉高海拔生理徵兆、惡劣地形踩踏技巧，可協助分擔觀測任務。
                  </li>
                </ul>
              </div>

              {/* Dimension 2 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-sky-400">
                  <Dumbbell className="w-4 h-4" />
                  <h3>2. 身體體能維度 (Physical Fitness)</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  包含三項在長天數高山不可或缺的機能指針：
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pl-1">
                  <li>
                    <strong className="text-white">行走速度 (Pace)：</strong>
                    爬坡與平路的平穩步調，而非前段暴衝後段衰竭。
                  </li>
                  <li>
                    <strong className="text-white">負重能力 (Load Bearing)：</strong>
                    背負重裝時對重心轉換與膝踝關節的承受耐力。
                  </li>
                  <li>
                    <strong className="text-white">恢復能力 (Recovery Rate)：</strong>
                    抵達休息點或營地後，心跳、呼吸與體溫恢復常態的速度。
                  </li>
                </ul>
              </div>

              {/* Dimension 3 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                  <Brain className="w-4 h-4" />
                  <h3>3. 心理狀態維度 (Mental State)</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  心理韌性往往決定隊員在逆境中的生存防線：
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pl-1">
                  <li>
                    <strong className="text-white">面對疲勞的能力：</strong>
                    持續淋雨、低溫或長時間攀爬時，能否保持情緒穩定。
                  </li>
                  <li>
                    <strong className="text-white">壓力反應：</strong>
                    面對暴露感強烈的斷崖或突發變數時，是否會恐慌僵住。
                  </li>
                  <li>
                    <strong className="text-white">團隊合作能力：</strong>
                    願意主動分享公水公糧、互相關照步伐與及時回報狀態。
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Quote & Clarification */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 shadow-lg space-y-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>核心評估準則</span>
                </div>
                <p className="text-base text-slate-100 font-semibold leading-relaxed">
                  「隊伍強度取決於最需要被照顧的人。」
                </p>
              </div>

              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>領隊重要觀念澄清</span>
                </div>
                切勿將此原則片面解讀為「永遠由最弱者盲目決定所有行程節奏或撤退」。
                正確的實務是：領隊必須透徹理解每位成員的能力極限與差異，並依據
                <strong className="text-slate-100">【路線特徵、地形難度、當前天候、剩餘時間、隊伍即時狀態】</strong>
                五項關鍵因素進行動態、多維度的綜合判斷。
              </div>
            </div>
          </div>

          {/* Right Column: Native SVG Diagram: 隊伍能力結構 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  教育圖表：隊伍能力結構模型
                </h3>
                <span className="text-xs font-mono text-slate-400">NATIVE SVG DIAGRAM</span>
              </div>

              {/* Native SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 460 410"
                  className="w-full max-w-lg h-auto select-none"
                  role="img"
                  aria-label="隊伍能力結構模型圖：經驗、體能、心理狀態三個面向匯入整體隊伍能力"
                >
                  <defs>
                    <linearGradient id="circleExp" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#b45309" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="circleFit" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="circlePsy" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                    </radialGradient>
                  </defs>

                  {/* Flow arrows converging to center */}
                  {/* Circle 1: 經驗 (Top Left) */}
                  <g transform="translate(145, 120)">
                    <circle cx="0" cy="0" r="75" fill="url(#circleExp)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="0" y="-35" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
                      經驗維度
                    </text>
                    <text x="0" y="-15" fill="#f8fafc" fontSize="10" textAnchor="middle">
                      新手 · 熟手 · 高山者
                    </text>
                    <text x="0" y="5" fill="#94a3b8" fontSize="9" textAnchor="middle">
                      山域知識 · 裝備熟悉
                    </text>
                  </g>

                  {/* Circle 2: 體能 (Top Right) */}
                  <g transform="translate(315, 120)">
                    <circle cx="0" cy="0" r="75" fill="url(#circleFit)" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="0" y="-35" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                      體能維度
                    </text>
                    <text x="0" y="-15" fill="#f8fafc" fontSize="10" textAnchor="middle">
                      配速 · 負重 · 恢復力
                    </text>
                    <text x="0" y="5" fill="#94a3b8" fontSize="9" textAnchor="middle">
                      步態穩定 · 心肺耐力
                    </text>
                  </g>

                  {/* Circle 3: 心理狀態 (Bottom Center) */}
                  <g transform="translate(230, 240)">
                    <circle cx="0" cy="0" r="75" fill="url(#circlePsy)" stroke="#34d399" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="0" y="25" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
                      心理狀態
                    </text>
                    <text x="0" y="42" fill="#f8fafc" fontSize="10" textAnchor="middle">
                      抗疲勞 · 抗壓力 · 團隊協作
                    </text>
                    <text x="0" y="58" fill="#94a3b8" fontSize="9" textAnchor="middle">
                      主動回報 · 情緒韌性
                    </text>
                  </g>

                  {/* Overlapping Center Hub: 整體隊伍能力 */}
                  <g transform="translate(230, 165)">
                    <circle cx="0" cy="0" r="48" fill="url(#centerCore)" stroke="#f8fafc" strokeWidth="2" />
                    <circle cx="0" cy="0" r="54" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="0" y="-8" fill="#ffffff" fontSize="13" fontWeight="extrabold" textAnchor="middle">
                      整體隊伍能力
                    </text>
                    <text x="0" y="10" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">
                      (Team Capacity)
                    </text>
                    <text x="0" y="26" fill="#cbd5e1" fontSize="8" textAnchor="middle">
                      動態綜合實力
                    </text>
                  </g>

                  {/* Bottom Output Banner */}
                  <g transform="translate(45, 340)">
                    <rect width="370" height="52" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                    <text x="185" y="22" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
                      領隊現場綜合評估矩陣
                    </text>
                    <text x="185" y="40" fill="#f59e0b" fontSize="10" textAnchor="middle">
                      路線難度 × 地形特徵 × 天候劇變 × 剩餘時間 × 隊員狀態
                    </text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">圖表判讀：</span>
                三大維度互相交織、相互牽引。當隊員體能耗盡時，心理抗壓將急遽萎縮；當經驗豐富時，能運用技巧節省體能消耗。領隊應看透交集處的真實隊伍容量，做出保守穩健的決策。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
