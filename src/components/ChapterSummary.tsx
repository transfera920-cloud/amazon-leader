import { CheckCircle2, ShieldCheck, Mountain } from "lucide-react";

export default function ChapterSummary() {
  const highlights = [
    {
      num: "01",
      title: "領隊管理的是人，不只是路線。",
      desc: "路線地圖是固定的，但人員的心情、體能衰竭、足底磨泡與高山生理反應每分鐘都在變動。領隊的注意力必須放在每一位隊員身上。",
    },
    {
      num: "02",
      title: "隊伍安全來自良好管理。",
      desc: "安全不是虛無飄渺的運氣，而是來自於嚴謹的隊形控制、前後呼應的壓隊機制、清楚的角色分工以及絕不落單的紀律。",
    },
    {
      num: "03",
      title: "決策能力比登頂能力更重要。",
      desc: "人人皆能靠著體能推進攀升，但在天候劇變、隊友受傷時能頂住壓力果敢做出停止或撤退的決定，才是檢驗領隊高度的唯一標尺。",
    },
    {
      num: "04",
      title: "時間控制是安全管理的重要部分。",
      desc: "妥善計算日照餘額與隊伍真實配速，預留 20%~30% 的彈性應變空間，避免在疲憊與低溫中摸黑行進，便已化解大半潛在危機。",
    },
    {
      num: "05",
      title: "撤退是成熟領隊的重要能力。",
      desc: "撤退代表領隊在未知的自然環境中成功控制了風險。敢於轉身下山，展現的是無畏的責任感與對生命的最高敬畏。",
    },
  ];

  return (
    <section id="ch-summary" className="scroll-mt-20 py-14 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 mb-3">
            CHAPTER 08 · SECTION 08 · KEY TAKEAWAYS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            08｜本章核心重點總結
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            銘記五大安全鐵律，讓每一次踏入山林的旅程，都成為平安回家的堅定承諾。
          </p>
        </div>

        {/* 5 Highlights Grid */}
        <div className="max-w-4xl mx-auto space-y-3">
          {highlights.map((item) => (
            <div
              key={item.num}
              className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 transition-all hover:border-slate-700"
            >
              <div className="text-base sm:text-lg font-mono font-bold text-amber-400 p-2 sm:p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                {item.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Ultimate Emphasis Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500 shadow-2xl text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Mountain className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            THE SUPREME ETHIC OF MOUNTAINEERING
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            「登頂只是目標之一，安全返回才是最終目標。」
          </blockquote>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            山川亙古矗立，只要生命猶存，我們隨時可以重整旗鼓、再次啟程。致敬每一位在關鍵時刻為了隊友生命安全，果敢選擇撤退的英勇領隊。
          </p>
        </div>
      </div>
    </section>
  );
}
