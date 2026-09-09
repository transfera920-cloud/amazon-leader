import {
  Users2,
  ClipboardCheck,
  HeartPulse,
  Clock8,
  MessagesSquare,
  AlertOctagon,
  Layers,
  CheckCircle2
} from "lucide-react";

interface ChapterNavProps {
  onSelectChapter?: (id: string) => void;
}

export default function ChapterNav({ onSelectChapter }: ChapterNavProps) {
  const handleSelect = (id: string) => {
    if (onSelectChapter) {
      onSelectChapter(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const chapterList = [
    {
      id: "ch-01",
      num: "01",
      title: "認識登山隊伍組成",
      desc: "經驗 × 體能 × 心理狀態三大面向立體審視",
      icon: Users2,
      tag: "能力結構"
    },
    {
      id: "ch-02",
      num: "02",
      title: "行前隊伍管理",
      desc: "降低現場決策不確定性與角色分工流程",
      icon: ClipboardCheck,
      tag: "事前防範"
    },
    {
      id: "ch-03",
      num: "03",
      title: "特殊隊員管理",
      desc: "落後、疲勞、急性異常與心理壓力及時介入",
      icon: HeartPulse,
      tag: "狀況處置"
    },
    {
      id: "ch-04",
      num: "04",
      title: "行程時間管理",
      desc: "早黑晚黑原則、時間模型與保留彈性緩衝",
      icon: Clock8,
      tag: "時程規劃"
    },
    {
      id: "ch-05",
      num: "05",
      title: "團隊溝通與領導",
      desc: "建立主動回報文化，破除逞強隱瞞心態",
      icon: MessagesSquare,
      tag: "團隊心理"
    },
    {
      id: "ch-06",
      num: "06",
      title: "領隊常見錯誤",
      desc: "四大高頻盲點、對應風險與正確做法對照",
      icon: AlertOctagon,
      tag: "風險預警"
    },
    {
      id: "ch-system",
      num: "07",
      title: "領隊完整管理系統",
      desc: "將全章理論整合為單純可落地的閉環架構",
      icon: Layers,
      tag: "架構全景"
    },
    {
      id: "ch-summary",
      num: "08",
      title: "本章核心重點總結",
      desc: "銘記五大安全鐵律，落實平安回家的承諾",
      icon: CheckCircle2,
      tag: "核心準則"
    }
  ];

  return (
    <nav
      id="chapter-index"
      className="py-10 bg-slate-900/40 border-b border-slate-800"
      aria-label="課程目錄導覽"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">
              CURRICULUM DIRECTORY
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              本章課程大綱導覽
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 md:mt-0">
            點選任一小節快速跳轉至專門教學內容與向量架構圖
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {chapterList.map((ch) => {
            const Icon = ch.icon;
            return (
              <button
                key={ch.id}
                onClick={() => handleSelect(ch.id)}
                className="text-left p-4 rounded-xl border transition-all duration-200 group flex flex-col justify-between bg-slate-900/80 border-slate-800/90 hover:bg-slate-800/90 hover:border-slate-700"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      SECTION {ch.num}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded font-medium bg-slate-800 text-slate-400">
                      {ch.tag}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg mt-0.5 bg-slate-800 text-slate-300 group-hover:text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-white leading-snug">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {ch.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-amber-300">
                  <span>查看教學與圖解</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Supplementary system jumps */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">全章架構重點跳轉：</span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleSelect("ch-system")}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>07｜領隊完整管理系統 (大圖)</span>
            </button>
            <button
              onClick={() => handleSelect("ch-summary")}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>08｜本章核心重點總結</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
