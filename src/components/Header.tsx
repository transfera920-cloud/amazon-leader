import { useState, useEffect } from "react";
import { BookOpen, Compass, Menu, X, ChevronRight } from "lucide-react";

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chapters = [
    { id: "ch-01", title: "01 認識登山隊伍組成" },
    { id: "ch-02", title: "02 行前隊伍管理" },
    { id: "ch-03", title: "03 特殊隊員管理" },
    { id: "ch-04", title: "04 行程時間管理" },
    { id: "ch-05", title: "05 團隊溝通與領導" },
    { id: "ch-06", title: "06 領隊常見錯誤" },
    { id: "ch-system", title: "07 領隊完整管理系統" },
    { id: "ch-summary", title: "08 本章核心重點總結" },
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-amber-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="頁面閱讀進度"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Chapter Tag */}
        <a
          href="https://amazon-hike.com/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-90"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:border-amber-500/50 transition-colors">
            <Compass className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase group-hover:text-amber-400 transition-colors">
              亞馬遜國家山岳協會 · 登山教育
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-1.5">
              <span>第八章 隊伍管理與領隊決策</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                高山安全教材
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Quick Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-xs" aria-label="章節快速導航">
          <button
            onClick={() => handleNavClick("ch-01")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-01"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            01 隊伍組成
          </button>
          <button
            onClick={() => handleNavClick("ch-02")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-02"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            02 行前管理
          </button>
          <button
            onClick={() => handleNavClick("ch-03")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-03"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            03 特殊隊員
          </button>
          <button
            onClick={() => handleNavClick("ch-04")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-04"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            04 時間管理
          </button>
          <button
            onClick={() => handleNavClick("ch-05")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-05"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            05 團隊溝通
          </button>
          <button
            onClick={() => handleNavClick("ch-06")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-06"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            06 常見錯誤
          </button>
          <button
            onClick={() => handleNavClick("ch-system")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-system"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            07 完整系統
          </button>
          <button
            onClick={() => handleNavClick("ch-summary")}
            className={`px-2 py-1.5 rounded transition ${
              activeSection === "ch-summary"
                ? "bg-slate-800 text-amber-400 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            08 核心總結
          </button>
          <button
            onClick={() => handleNavClick("chapter-index")}
            className="ml-2 flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            aria-label="展開完整章節目錄"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>章節目錄</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "關閉選單" : "開啟章節選單"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 max-h-[80vh] overflow-y-auto"
        >
          <div className="text-xs font-semibold text-slate-400 mb-3 px-2 flex items-center justify-between">
            <span>本章 8 節課程導航</span>
            <span className="text-amber-400">點擊跳轉</span>
          </div>
          <div className="space-y-1">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleNavClick(ch.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition ${
                  activeSection === ch.id
                    ? "bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/30"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <span>{ch.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
