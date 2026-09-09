import { AlertOctagon, XCircle, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Chapter10() {
  const errors = [
    {
      id: "01",
      title: "只顧自己速度",
      desc: "領隊依個人輕快節奏埋頭狂飆，未頻繁回頭檢視後方隊友拉開的距離與呼吸狀態。",
      result: "隊伍失去整體控制，隊員落單迷途、體能急性崩潰或遭後方危險孤立。",
      solution: "始終以最需照料隊員之生理頻率為基準定速，並指派強力壓隊隨時回傳資訊。",
    },
    {
      id: "02",
      title: "為完成目標忽略警訊",
      desc: "陷入「登頂狂熱」或「沉沒成本謬誤」，對突變的黑雲、降雨與隊友高山反應視而不見。",
      result: "風險指數級逐步累積，直到臨界點爆發為無法挽回的失溫或墜落山難。",
      solution: "設定不容通融的客觀折返時間與氣候停損點，將安全返抵置於登頂虛名之上。",
    },
    {
      id: "03",
      title: "沒有預留調整空間",
      desc: "將每日行程預算排滿至夕陽最後一刻，預設所有人皆能在完美狀況下按表操課。",
      result: "一旦遇上隊友扭傷、抽筋、鞋底脫膠或迷失方向，便毫無備案，被迫摸黑受凍。",
      solution: "全程保留 20%~30% 彈性時間預算，並預先備妥撤退支線與緊急避難點。",
    },
    {
      id: "04",
      title: "過度相信經驗",
      desc: "「這條路我走過十幾次了，沒問題的！」將過往經驗當作免死金牌，輕忽當下實況。",
      result: "每次登山的【人員、天氣、地形、時間、路線】皆是全新變數，經驗主義導致盲目踩坑。",
      solution: "敬畏大山，以謙卑的初學者心態重新檢驗當日所有數據，用當下情資引導決策。",
    },
  ];

  return (
    <article id="ch-06" className="scroll-mt-20 py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            CHAPTER 08 · SECTION 06 · 盲點防範
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            06｜領隊常見錯誤
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            登山事故的檢討報告中，領隊的決策盲點往往呈現出高度重複的規律。辨識這四大致命誤區，是每位合格領隊的必經修煉。
          </p>
        </div>

        {/* Content & SVG Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Errors Table/Cards */}
          <div className="lg:col-span-6 space-y-4">
            {errors.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                    <XCircle className="w-4 h-4" />
                    <h3>{item.id}｜{item.title}</h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-900/50">
                    高危盲點
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-2.5 bg-rose-950/20 rounded-lg border border-rose-900/30 text-xs">
                  <span className="font-bold text-rose-300 mr-1">致命結果：</span>
                  <span className="text-rose-200">{item.result}</span>
                </div>

                <div className="p-2.5 bg-emerald-950/20 rounded-lg border border-emerald-900/30 text-xs">
                  <span className="font-bold text-emerald-400 mr-1 flex items-center gap-1 inline-flex">
                    <CheckCircle2 className="w-3.5 h-3.5 inline" /> 正確做法：
                  </span>
                  <span className="text-slate-200">{item.solution}</span>
                </div>
              </div>
            ))}

            {/* Core Principle */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>領隊謙遜核心</span>
              </div>
              <p className="text-base text-slate-100 font-semibold leading-relaxed">
                「經驗可以幫助判斷，但不能取代當下資訊。」
              </p>
            </div>
          </div>

          {/* Right Column: Native SVG Diagram: 領隊常見錯誤 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  教育圖表：四大常見錯誤 → 對應風險 → 正確做法
                </h3>
                <span className="text-xs font-mono text-slate-400">NATIVE SVG MATRIX</span>
              </div>

              {/* Native Vector SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 460 520"
                  className="w-full max-w-lg h-auto select-none"
                  role="img"
                  aria-label="領隊常見錯誤向量圖：四個錯誤對應潛在風險與正確因應做法"
                >
                  <defs>
                    <linearGradient id="rowGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  {/* Header Row */}
                  <g transform="translate(20, 15)">
                    <text x="55" y="15" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">
                      常見錯誤 (Error)
                    </text>
                    <text x="210" y="15" fill="#fb923c" fontSize="11" fontWeight="bold" textAnchor="middle">
                      對應風險 (Risk)
                    </text>
                    <text x="365" y="15" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
                      正確做法 (Action)
                    </text>
                  </g>

                  {/* Divider */}
                  <line x1="20" y1="38" x2="440" y2="38" stroke="#334155" strokeWidth="1.5" />

                  {/* Row 1: 只顧自己速度 */}
                  <g transform="translate(20, 48)">
                    <rect width="120" height="95" rx="6" fill="#450a0a" stroke="#dc2626" strokeWidth="1" />
                    <text x="60" y="24" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">01. 只顧自己速度</text>
                    <text x="60" y="44" fill="#cbd5e1" fontSize="8" textAnchor="middle">埋頭往前衝</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="8" textAnchor="middle">不顧後方隊形</text>

                    <path d="M 125 47 L 145 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="150" y="0" width="130" height="95" rx="6" fill="#1e293b" stroke="#ea580c" strokeWidth="1" />
                    <text x="215" y="24" fill="#fb923c" fontSize="10" fontWeight="bold" textAnchor="middle">隊伍失去控制</text>
                    <text x="215" y="44" fill="#94a3b8" fontSize="8" textAnchor="middle">人員落單失聯</text>
                    <text x="215" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">落後者體力崩解</text>

                    <path d="M 285 47 L 305 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="310" y="0" width="110" height="95" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="365" y="24" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">全隊配速整合</text>
                    <text x="365" y="44" fill="#a7f3d0" fontSize="8" textAnchor="middle">配合弱者呼吸</text>
                    <text x="365" y="60" fill="#a7f3d0" fontSize="8" textAnchor="middle">壓隊資訊反饋</text>
                  </g>

                  {/* Row 2: 忽略警訊 */}
                  <g transform="translate(20, 155)">
                    <rect width="120" height="95" rx="6" fill="#450a0a" stroke="#dc2626" strokeWidth="1" />
                    <text x="60" y="24" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">02. 忽略警訊</text>
                    <text x="60" y="44" fill="#cbd5e1" fontSize="8" textAnchor="middle">無視黑雲起風</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="8" textAnchor="middle">登頂狂熱蒙蔽</text>

                    <path d="M 125 47 L 145 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="150" y="0" width="130" height="95" rx="6" fill="#1e293b" stroke="#ea580c" strokeWidth="1" />
                    <text x="215" y="24" fill="#fb923c" fontSize="10" fontWeight="bold" textAnchor="middle">風險逐步累積</text>
                    <text x="215" y="44" fill="#94a3b8" fontSize="8" textAnchor="middle">失溫雷擊臨身</text>
                    <text x="215" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">突破不可逆門檻</text>

                    <path d="M 285 47 L 305 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="310" y="0" width="110" height="95" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="365" y="24" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">設定嚴格停損</text>
                    <text x="365" y="44" fill="#a7f3d0" fontSize="8" textAnchor="middle">客觀折返時限</text>
                    <text x="365" y="60" fill="#a7f3d0" fontSize="8" textAnchor="middle">遇惡兆即應變</text>
                  </g>

                  {/* Row 3: 無預留空間 */}
                  <g transform="translate(20, 262)">
                    <rect width="120" height="95" rx="6" fill="#450a0a" stroke="#dc2626" strokeWidth="1" />
                    <text x="60" y="24" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">03. 無調整空間</text>
                    <text x="60" y="44" fill="#cbd5e1" fontSize="8" textAnchor="middle">行程排得過滿</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="8" textAnchor="middle">毫無應變餘量</text>

                    <path d="M 125 47 L 145 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="150" y="0" width="130" height="95" rx="6" fill="#1e293b" stroke="#ea580c" strokeWidth="1" />
                    <text x="215" y="24" fill="#fb923c" fontSize="10" fontWeight="bold" textAnchor="middle">突發狀況無解</text>
                    <text x="215" y="44" fill="#94a3b8" fontSize="8" textAnchor="middle">被迫極度摸黑</text>
                    <text x="215" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">無備案可撤退</text>

                    <path d="M 285 47 L 305 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="310" y="0" width="110" height="95" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="365" y="24" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">預留 20% 緩衝</text>
                    <text x="365" y="44" fill="#a7f3d0" fontSize="8" textAnchor="middle">備妥退路支線</text>
                    <text x="365" y="60" fill="#a7f3d0" fontSize="8" textAnchor="middle">早抵營地避難</text>
                  </g>

                  {/* Row 4: 過度相信經驗 */}
                  <g transform="translate(20, 369)">
                    <rect width="120" height="95" rx="6" fill="#450a0a" stroke="#dc2626" strokeWidth="1" />
                    <text x="60" y="24" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">04. 傲慢經驗主義</text>
                    <text x="60" y="44" fill="#cbd5e1" fontSize="8" textAnchor="middle">盲信往昔紀錄</text>
                    <text x="60" y="60" fill="#cbd5e1" fontSize="8" textAnchor="middle">輕忽現場情資</text>

                    <path d="M 125 47 L 145 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="150" y="0" width="130" height="95" rx="6" fill="#1e293b" stroke="#ea580c" strokeWidth="1" />
                    <text x="215" y="24" fill="#fb923c" fontSize="10" fontWeight="bold" textAnchor="middle">情境誤判踩坑</text>
                    <text x="215" y="44" fill="#94a3b8" fontSize="8" textAnchor="middle">新隊員新天候</text>
                    <text x="215" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">山況非一成不變</text>

                    <path d="M 285 47 L 305 47" stroke="#64748b" strokeWidth="1.5" />

                    <rect x="310" y="0" width="110" height="95" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="365" y="24" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">初學者之眼</text>
                    <text x="365" y="44" fill="#a7f3d0" fontSize="8" textAnchor="middle">以實測數據為本</text>
                    <text x="365" y="60" fill="#a7f3d0" fontSize="8" textAnchor="middle">隨時保持敬畏</text>
                  </g>

                  {/* Summary Bar at Bottom */}
                  <g transform="translate(20, 475)">
                    <rect width="420" height="35" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="210" y="22" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">
                      真正的專業不是「從不撤退」，而是「能精準識別風險並帶所有人平安歸來」
                    </text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">自我警惕：</span>
                許多山難事件中，罹難隊伍的領隊往往不是登山新手，而是具備數十座百岳經驗的老手。經驗若轉變為固執盲點，將是最隱蔽的高山殺手。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
