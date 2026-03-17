
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import TopNav from "@/component/ui/topnav";
import { PATH } from "@/constants/path";


interface StatItem {
  value: string;
  label: string;
}

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Discover", href: "#" },
  { label: "Distribute", href: "#" },
  { label: "Analytics", href: "#" },
  { label: "Pricing", href: "#" },
];

const STATS: StatItem[] = [
  { value: "50m+", label: "Monthly streamers" },
  { value: "50m+", label: "Average revenue per producer" },
  { value: "20m", label: "Self produced movies" },
];

const FilmStrip: React.FC = () => (
  <svg
    className="absolute right-[-60px] top-1/2 -translate-y-1/2 rotate-[8deg] opacity-[0.04] pointer-events-none"
    width="120"
    height="500"
    viewBox="0 0 120 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="10" width="100" height="500" rx="6" fill="white" />
    {[30, 66, 102].map((y) => (
      <React.Fragment key={`left-${y}`}>
        <rect x="0" y={y} width="16" height="24" rx="3" fill="white" />
        <rect x="104" y={y} width="16" height="24" rx="3" fill="white" />
      </React.Fragment>
    ))}
    {[50, 120, 190, 260, 330].map((y) => (
      <rect
        key={`frame-${y}`}
        x="18"
        y={y}
        width="84"
        height="60"
        rx="2"
        fill="#0d0d0d"
        opacity="0.5"
      />
    ))}
  </svg>
);

const DecreatorHero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = statsRef.current?.querySelectorAll<HTMLDivElement>(".stat-item");
    
    items?.forEach((item) => {
      const bar = item.querySelector<HTMLSpanElement>(".stat-bar");
      
      const handleMouseEnter = () => { if (bar) bar.style.width = "60%"; };
      const handleMouseLeave = () => { if (bar) bar.style.width = "0%"; };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden font-sans">
      {/* Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")` }}
      />

      <TopNav />

      {/* Hero */}
      <section className="relative z-[2] flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 min-h-[70vh]">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-red-600/10 blur-[100px] pointer-events-none" />

        <h1 className="animate-fade-up [animation-delay:200ms] font-serif text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight max-w-[800px] mb-6 px-2">
          Make your movies for <em className="italic text-[#e85046] not-italic">millions</em> of streamers
        </h1>

        <p className="animate-fade-up [animation-delay:350ms] text-base md:text-lg text-white/45 max-w-[420px] leading-relaxed font-light mb-10">
          Decreator is here to help you with all you need to launch your movies
        </p>

        <div className="animate-fade-up [animation-delay:500ms] flex flex-wrap justify-center gap-3">
          <Link href={PATH.dashboard} className="group bg-[#e85046] hover:bg-[#d43f35] text-white px-8 py-4 rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-red-600/20">
            Get Started <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="hidden lg:block">
          <FilmStrip />
        </div>
      </section>

      {/* Stats */}
      <div ref={statsRef} className="animate-fade-up [animation-delay:700ms] relative z-[2] grid grid-cols-1 md:grid-cols-3 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        {STATS.map(({ value, label }) => (
          <div key={label} className="stat-item relative overflow-hidden flex flex-col items-center py-12 md:py-16 px-6 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors cursor-default group">
            <span className="font-serif text-4xl md:text-5xl font-bold tracking-tighter mb-3">{value}</span>
            <span className="text-[10px] md:text-xs text-white/40 tracking-[0.2em] text-center font-bold uppercase">{label}</span>
            <span className="stat-bar absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#e85046] transition-all duration-500 ease-out sm:group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};


export default DecreatorHero;