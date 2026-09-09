import { CheckSquare, Users, ShieldAlert, Radio, CheckCircle2 } from "lucide-react";

export default function Chapter03() {
  const preChecks = [
    { label: "登山經驗確認", detail: "掌握隊員近期百岳經歷、長天數重裝紀錄與高山反應歷史。" },
    { label: "健康狀況確認", detail: "心血管病史、氣喘、過敏源、慢性用藥與近期身體傷病狀態。" },
    { label: "裝備能力確認", detail: "三層式穿著、雨衣雨褲耐水壓、保暖層、頭燈與備用電池、露宿袋。" },
    { label: "特殊需求確認", detail: "特殊飲食禁忌、個人醫療備品、步調節奏差異等特殊照護事項。" },
  ];

  const teamRules = [
    { label: "行進方式", detail: "嚴格禁止個人脫隊超前領隊，必須維持視線與聲音可及之行進隊形。" },
    { label: "集合時間", detail: "明訂每日晨間拔營、出發、行進間休息點與各檢查哨集合時間。" },
    { label: "休息方式", detail: "定時小休（補水行動糧不卸大包）與定點大休（補充熱量檢視隊況）規範。" },
    { label: "通訊方式", detail: "無線電頻道設定、備用頻道、衛星通訊器 (InReach) 報平安約定頻率。" },
  ];

  const teamRoles = [
    { role: "領隊 (Leader)", desc: "負責全盤路線決策、隊伍節奏掌握、天候評估與安全撤退最終決定權。" },
    { role: "副領隊 (Vice Leader)", desc: "協助領隊觀測隊員行進間細微生理徵候，於領隊處置事故時代理前導。" },
    { role: "壓隊 (Sweeper)", desc: "具備豐富經驗與穩健耐心，固定走在全隊最後方，確保無人落單或失聯。" },
    { role: "裝備管理 (Gear Manager)", desc: "負責公裝分攤清點、帳篷分配、公共爐具瓦斯與修補耗材統籌。" },
    { role: "通訊聯絡 (Comms Officer)", desc: "負責無線電信號守候、留守人定期回報與緊急遇難求援通報聯絡。" },
  ];

  return (
    <article id="ch-02" className="scroll-mt-20 py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            CHAPTER 08 · SECTION 02
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            02｜行前隊伍管理
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            高山意外往往早在登山口之前就已埋下種子。行前管理的核心目的在於
            <strong className="text-amber-400 font-semibold">「降低不確定性」</strong>
            ，讓全隊知道怎麼走、怎麼互相配合，以及遇到突發狀況時的標準處理程序。
          </p>
        </div>

        {/* Content & SVG Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. 行前確認 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-amber-400" />
                一、行前四大關鍵確認
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {preChecks.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <div className="text-xs font-bold text-slate-200">{item.label}</div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. 隊伍規則 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-sky-400" />
                二、明訂隊伍鐵律與約定
              </h3>
              <div className="space-y-2">
                {teamRules.map((rule, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-200 mr-2">{rule.label}：</span>
                      <span className="text-xs text-slate-300">{rule.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. 角色分工 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                三、清晰的角色分工矩陣
              </h3>
              <div className="space-y-2">
                {teamRoles.map((role, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-900/70 rounded-lg border border-slate-800 flex items-start gap-2">
                    <Radio className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-bold text-amber-300 mr-1.5">{role.role}</span>
                      <span className="text-xs text-slate-300">{role.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Quote */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>行前管理的核心原則</span>
              </div>
              <p className="text-base text-slate-100 font-semibold leading-relaxed">
                「良好的行前管理，可以降低現場決策的不確定性。」
              </p>
            </div>
          </div>

          {/* Right Column: Native SVG Diagram: 行前隊伍管理流程 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  教育圖表：行前隊伍管理流程
                </h3>
                <span className="text-xs font-mono text-slate-400">NATIVE SVG DIAGRAM</span>
              </div>

              {/* Native SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 460 480"
                  className="w-full max-w-lg h-auto select-none"
                  role="img"
                  aria-label="行前隊伍管理流程圖：人員資料 → 規則 → 分工 → 裝備 → 通訊 → 出發"
                >
                  <defs>
                    <linearGradient id="stepGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="activeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Spine Line */}
                  <line x1="230" y1="40" x2="230" y2="440" stroke="#334155" strokeWidth="2.5" strokeDasharray="4 4" />

                  {/* Step 1: 人員資料 */}
                  <g transform="translate(60, 20)">
                    <rect width="340" height="52" rx="8" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="14" fill="#0284c7" />
                    <text x="25" y="30" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                    <text x="50" y="24" fill="#f8fafc" fontSize="13" fontWeight="bold">人員資料盤點 (Personnel Data)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">高山體能紀錄 · 既往病史用藥 · 過敏與特殊需求</text>
                  </g>

                  {/* Arrow 1 */}
                  <path d="M 230 76 L 225 86 L 235 86 Z" fill="#64748b" />

                  {/* Step 2: 團隊規則 */}
                  <g transform="translate(60, 95)">
                    <rect width="340" height="52" rx="8" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="14" fill="#0284c7" />
                    <text x="25" y="30" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                    <text x="50" y="24" fill="#f8fafc" fontSize="13" fontWeight="bold">團隊公約與規則 (Team Protocol)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">行進隊形不脫節 · 集合時間紀律 · 定時休息規範</text>
                  </g>

                  {/* Arrow 2 */}
                  <path d="M 230 151 L 225 161 L 235 161 Z" fill="#64748b" />

                  {/* Step 3: 角色分工 */}
                  <g transform="translate(60, 170)">
                    <rect width="340" height="52" rx="8" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="14" fill="#0284c7" />
                    <text x="25" y="30" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                    <text x="50" y="24" fill="#f8fafc" fontSize="13" fontWeight="bold">明確角色分工 (Role Assignment)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">領隊 · 副領隊 · 穩健壓隊 · 裝備公裝 · 通訊聯絡</text>
                  </g>

                  {/* Arrow 3 */}
                  <path d="M 230 226 L 225 236 L 235 236 Z" fill="#64748b" />

                  {/* Step 4: 裝備檢查 */}
                  <g transform="translate(60, 245)">
                    <rect width="340" height="52" rx="8" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="14" fill="#0284c7" />
                    <text x="25" y="30" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                    <text x="50" y="24" fill="#f8fafc" fontSize="13" fontWeight="bold">裝備與生存能力 (Gear Inspection)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">雨衣雨褲耐水壓 · 禦寒保暖 · 備用糧水 · 露宿求生</text>
                  </g>

                  {/* Arrow 4 */}
                  <path d="M 230 301 L 225 311 L 235 311 Z" fill="#64748b" />

                  {/* Step 5: 通訊留守 */}
                  <g transform="translate(60, 320)">
                    <rect width="340" height="52" rx="8" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="25" cy="26" r="14" fill="#0284c7" />
                    <text x="25" y="30" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                    <text x="50" y="24" fill="#f8fafc" fontSize="13" fontWeight="bold">通訊與留守機制 (Communication)</text>
                    <text x="50" y="40" fill="#94a3b8" fontSize="10">無線電頻率測試 · 衛星通訊器配置 · 山下留守回報點</text>
                  </g>

                  {/* Arrow 5 */}
                  <path d="M 230 376 L 225 386 L 235 386 Z" fill="#f59e0b" />

                  {/* Step 6: 安全出發 */}
                  <g transform="translate(60, 395)">
                    <rect width="340" height="56" rx="10" fill="url(#activeGrad)" stroke="#fcd34d" strokeWidth="2" />
                    <circle cx="25" cy="28" r="14" fill="#ffffff" />
                    <text x="25" y="32" fill="#b45309" fontSize="12" fontWeight="bold" textAnchor="middle">GO</text>
                    <text x="50" y="25" fill="#ffffff" fontSize="14" fontWeight="extrabold">安全啟程出發 (Departure Ready)</text>
                    <text x="50" y="43" fill="#fef3c7" fontSize="10" fontWeight="500">不確定性最小化 · 全隊共識齊備 · 風險在掌控中</text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">實務提醒：</span>
                六大階段環環相扣。只要其中一個環節（如裝備缺失或未指派壓隊）出現破口，現場就必須承擔倍數放大的安全風險與溝通耗損。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
