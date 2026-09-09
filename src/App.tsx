/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChapterNav from "./components/ChapterNav";
import Section01 from "./components/chapters/Section01";
import Section02 from "./components/chapters/Section02";
import Section03 from "./components/chapters/Section03";
import Section04 from "./components/chapters/Section04";
import Section05 from "./components/chapters/Section05";
import Section06 from "./components/chapters/Section06";
import SystemSummary from "./components/SystemSummary";
import ChapterSummary from "./components/ChapterSummary";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("ch-01");

  useEffect(() => {
    const sectionIds = [
      "ch-01",
      "ch-02",
      "ch-03",
      "ch-04",
      "ch-05",
      "ch-06",
      "ch-system",
      "ch-summary",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans antialiased">
      {/* Sticky Navigation Header with Reading Progress */}
      <Header activeSection={activeSection} />

      {/* Main Educational Article Content */}
      <main id="main-content">
        {/* Single H1 Hero Section */}
        <Hero />

        {/* Chapter Quick Index Navigation Bar */}
        <ChapterNav />

        {/* 6 Theoretical Analysis Sections */}
        <div className="space-y-0">
          <Section01 />
          <Section02 />
          <Section03 />
          <Section04 />
          <Section05 />
          <Section06 />
        </div>

        {/* Section 07: System Architecture Summary */}
        <SystemSummary />

        {/* Section 08: Key Takeaways & Core Maxim */}
        <ChapterSummary />
      </main>

      {/* Standard Educational Footer */}
      <Footer />
    </div>
  );
}
