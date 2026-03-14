"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Users } from "lucide-react";

const AUTO_PLAY_MS = 4500;

const cards = [
  {
    id: 0,
    tag: "Core Motion",
    icon: TrendingUp,
    title: "Sales Pipeline Ownership",
    subtitle: "End-to-end management from discovery to revenue.",
    link: "/sales",
    linkText: "Explore Sales",
    visual: "pipeline",
  },
  {
    id: 1,
    tag: "Global",
    icon: Globe,
    title: "Market Expansion",
    subtitle: "Establishing presence in new territories at speed.",
    link: "/sales#models",
    linkText: "See Engagement Models",
    visual: "markets",
  },
  {
    id: 2,
    tag: "Talent",
    icon: Users,
    title: "Hiring Motion",
    subtitle: "Building localised, high-performance teams.",
    link: "/hiring",
    linkText: "Explore Hiring",
    visual: "hiring",
  },
];

/* ─── Card visuals ──────────────────────────────── */

function PipelineVisual() {
  return (
    <div className="space-y-4">
      {/* Segmented pipeline bar */}
      <div>
        <div className="flex h-3 w-full rounded-full overflow-hidden gap-px">
          <div className="bg-[#7C3AED] h-full" style={{ width: "35%" }} />
          <div className="bg-[#7C3AED]/65 h-full" style={{ width: "25%" }} />
          <div className="bg-[#7C3AED]/40 h-full" style={{ width: "20%" }} />
          <div className="bg-emerald-500 h-full flex-1" />
        </div>
        <div className="grid grid-cols-4 mt-2 text-[10px] font-semibold text-white/35 uppercase tracking-wider">
          <span>Discovery</span>
          <span>Proposal</span>
          <span>Neg.</span>
          <span className="text-emerald-400 text-right">Closed</span>
        </div>
      </div>
      {/* Growing bar chart */}
      <div className="flex items-end gap-1.5 h-16">
        {[28, 46, 36, 68, 82, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background:
                i === 5
                  ? "linear-gradient(180deg,#A78BFA 0%,#7C3AED 100%)"
                  : `rgba(124,58,237,${0.12 + i * 0.1})`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-white/25 uppercase tracking-wider">
        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q5</span>
        <span className="text-[#A78BFA]">Now</span>
      </div>
    </div>
  );
}

function MarketsVisual() {
  const pills = [
    { label: "US",     cls: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { label: "MENA",  cls: "bg-[#7C3AED]/20 text-[#A78BFA]  border-[#7C3AED]/30" },
    { label: "Africa",cls: "bg-amber-500/20  text-amber-400  border-amber-500/30" },
    { label: "APAC",  cls: "bg-[#7C3AED]/20 text-[#A78BFA]  border-[#7C3AED]/30" },
    { label: "SEA",   cls: "bg-sky-500/20    text-sky-400    border-sky-500/30" },
    { label: "ANZ",   cls: "bg-[#7C3AED]/20 text-[#A78BFA]  border-[#7C3AED]/30" },
  ];

  // Equirectangular → ellipse projection (cx=100, cy=55, rx=88, ry=50)
  // x = (lon / 180) * 88 + 100
  // y = 55 − (lat / 90) * 50
  const markers = [
    { cx: 54,  cy: 34, color: "#10b981", label: "US",     d: 0.0 },
    { cx: 120, cy: 41, color: "#A78BFA", label: "MENA",   d: 0.5 },
    { cx: 110, cy: 55, color: "#f59e0b", label: "Africa", d: 1.0 },
    { cx: 156, cy: 36, color: "#A78BFA", label: "APAC",   d: 1.5 },
    { cx: 151, cy: 52, color: "#38bdf8", label: "SEA",    d: 0.8 },
    { cx: 165, cy: 69, color: "#A78BFA", label: "ANZ",    d: 1.3 },
  ];

  return (
    <div className="space-y-3">
      {/* Region pills */}
      <div className="flex flex-wrap gap-1.5">
        {pills.map((r) => (
          <span key={r.label} className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold border ${r.cls}`}>
            {r.label}
          </span>
        ))}
      </div>

      {/* SVG Globe */}
      <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <clipPath id="pv-globe-clip">
            <ellipse cx="100" cy="55" rx="88" ry="50" />
          </clipPath>
          <radialGradient id="pv-globe-bg" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#1e0845" />
            <stop offset="55%"  stopColor="#0c0325" />
            <stop offset="100%" stopColor="#030111" />
          </radialGradient>
        </defs>

        {/* Globe fill */}
        <ellipse cx="100" cy="55" rx="88" ry="50" fill="url(#pv-globe-bg)" />

        {/* Lat / lon grid */}
        <g clipPath="url(#pv-globe-clip)" fill="none">
          {[21.7, 38.3, 55, 71.7, 88.3].map((y) => (
            <line key={y} x1="12" y1={y} x2="188" y2={y}
              stroke={y === 55 ? "rgba(124,58,237,0.30)" : "rgba(124,58,237,0.13)"}
              strokeWidth={y === 55 ? 0.9 : 0.5}
            />
          ))}
          {[10, 55, 100, 145, 190].map((x) => (
            <line key={x} x1={x} y1="5" x2={x} y2="105"
              stroke={x === 100 ? "rgba(124,58,237,0.24)" : "rgba(124,58,237,0.11)"}
              strokeWidth={x === 100 ? 0.9 : 0.5}
            />
          ))}
        </g>

        {/* Network connection dashes */}
        <g stroke="rgba(124,58,237,0.14)" strokeWidth="0.6" strokeDasharray="2 2.5" fill="none" clipPath="url(#pv-globe-clip)">
          <line x1="54"  y1="34" x2="120" y2="41" />
          <line x1="120" y1="41" x2="110" y2="55" />
          <line x1="120" y1="41" x2="156" y2="36" />
          <line x1="156" y1="36" x2="151" y2="52" />
          <line x1="151" y1="52" x2="165" y2="69" />
        </g>

        {/* Pulsing region markers */}
        {markers.map((m) => (
          <g key={m.label}>
            {/* Outer ring */}
            <circle cx={m.cx} cy={m.cy} r="2.5" fill="none" stroke={m.color} strokeWidth="0.7">
              <animate attributeName="r"       values="2.5;12;2.5" dur="3s" repeatCount="indefinite" begin={`${m.d}s`} />
              <animate attributeName="opacity" values="0.75;0;0.75" dur="3s" repeatCount="indefinite" begin={`${m.d}s`} />
            </circle>
            {/* Inner ring (staggered) */}
            <circle cx={m.cx} cy={m.cy} r="2.5" fill="none" stroke={m.color} strokeWidth="0.5">
              <animate attributeName="r"       values="2.5;7;2.5"  dur="3s" repeatCount="indefinite" begin={`${m.d + 0.65}s`} />
              <animate attributeName="opacity" values="0.55;0;0.55" dur="3s" repeatCount="indefinite" begin={`${m.d + 0.65}s`} />
            </circle>
            {/* Filled dot */}
            <circle cx={m.cx} cy={m.cy} r="2.5" fill={m.color} opacity="0.88" />
            {/* Specular highlight */}
            <circle cx={m.cx} cy={m.cy} r="1"   fill="white"   opacity="0.7"  />
          </g>
        ))}

        {/* Globe rim */}
        <ellipse cx="100" cy="55" rx="88" ry="50" fill="none" stroke="rgba(124,58,237,0.42)" strokeWidth="1.5" />
        {/* Atmosphere glow */}
        <ellipse cx="100" cy="55" rx="88" ry="50" fill="none" stroke="rgba(124,58,237,0.09)" strokeWidth="8" />
        {/* Specular shine top-left */}
        <ellipse cx="64" cy="27" rx="25" ry="11" fill="rgba(167,139,250,0.07)" transform="rotate(-18,64,27)" />
      </svg>

      <p className="text-[10px] text-white/35 uppercase tracking-widest text-center">
        Active across 6 regions · 6+ countries
      </p>
    </div>
  );
}

function HiringVisual() {
  const rows = [
    { label: "Sr. Account Executive", role: "Sales",     pct: 94, color: "bg-[#7C3AED]" },
    { label: "VP of Engineering",     role: "Technical", pct: 88, color: "bg-emerald-500" },
    { label: "SDR — MEA Market",      role: "GTM",       pct: 97, color: "bg-[#7C3AED]" },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <div key={i}
          className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-3 py-2.5 border border-white/[0.05]"
        >
          <div className={`w-7 h-7 rounded-full ${r.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
            {r.label[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">{r.label}</p>
            <p className="text-[9px] text-white/35">{r.role}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs font-bold text-[#A78BFA]">{r.pct}%</p>
            <p className="text-[9px] text-white/30">match</p>
          </div>
        </div>
      ))}
      <p className="text-[10px] text-white/35 uppercase tracking-widest text-center pt-0.5">
        1,500+ pre-vetted specialists
      </p>
    </div>
  );
}

/* ─── Main Component ────────────────────────────── */

export default function HeroCarousel() {
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardPx, setCardPx]     = useState(0);
  const outerRef  = useRef<HTMLDivElement>(null);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const measure = useCallback(() => {
    if (outerRef.current) {
      setCardPx(outerRef.current.offsetWidth * 0.82 + 16);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    const step = 100 / (AUTO_PLAY_MS / 50);
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) {
          setActive((a) => (a + 1) % cards.length);
          return 0;
        }
        return p + step;
      });
    }, 50);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered, active]);

  const goTo = (i: number) => { setActive(i); setProgress(0); };

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Progress-pill indicators */}
      <div className="flex items-center gap-2.5 mb-5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show card ${i + 1}`}
            className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-500 ${
              i === active ? "w-10 bg-white/10" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          >
            {i === active && (
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-[#7C3AED]"
                style={{ width: `${progress}%`, transition: "width 50ms linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Sliding track — overflow-hidden prevents bleed into left column */}
      <div ref={outerRef} className="overflow-hidden">
        <div
          className="flex gap-4"
          style={{
            transform: cardPx ? `translateX(-${active * cardPx}px)` : "translateX(0)",
            transition: "transform 700ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {cards.map((card, i) => {
            const isActive = i === active;
            return (
              <div
                key={card.id}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 rounded-2xl border cursor-pointer relative overflow-hidden transition-all duration-500 ${
                  isActive
                    ? "border-[#7C3AED]/40 shadow-[0_0_50px_rgba(124,58,237,0.18)]"
                    : "border-white/[0.06] opacity-55 hover:opacity-80"
                }`}
                style={{
                  width: "82%",
                  background: isActive
                    ? "linear-gradient(135deg,rgba(124,58,237,0.14) 0%,rgba(17,17,24,0.97) 65%)"
                    : "rgba(17,17,24,0.8)",
                }}
              >
                {/* Ambient glow blob */}
                {isActive && (
                  <div className="absolute -top-8 -right-8 w-44 h-44 rounded-full bg-[#7C3AED]/15 blur-3xl pointer-events-none" />
                )}

                <div className="p-6 flex flex-col gap-5 relative z-10">
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[17px] font-bold text-white leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white/45 mt-0.5">{card.subtitle}</p>
                    </div>
                    <span className="text-[9px] font-black text-[#A78BFA] bg-[#7C3AED]/15 border border-[#7C3AED]/25 px-2.5 py-1 rounded-full uppercase tracking-widest whitespace-nowrap flex-shrink-0">
                      {card.tag}
                    </span>
                  </div>

                  {/* Visual area */}
                  <div className="bg-white/[0.025] rounded-xl p-4 border border-white/[0.05]">
                    {card.visual === "pipeline" && <PipelineVisual />}
                    {card.visual === "markets"  && <MarketsVisual />}
                    {card.visual === "hiring"   && <HiringVisual />}
                  </div>

                  {/* Link */}
                  <Link
                    href={card.link}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-[#A78BFA] text-sm font-semibold hover:text-white transition-colors group/lnk"
                  >
                    {card.linkText}
                    <ArrowRight size={14} className="transition-transform group-hover/lnk:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating execution speed badge */}
      <div
        className="absolute -bottom-5 right-3 z-20 bg-[#7C3AED] text-white rounded-2xl px-5 py-4 shadow-2xl shadow-[#7C3AED]/50"
        style={{ transform: "rotate(3deg)" }}
      >
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/55 mb-0.5">
          Execution Speed
        </p>
        <p className="text-3xl font-black leading-none">2.4x</p>
        <p className="text-[10px] font-medium text-white/65 mt-1 max-w-[100px] leading-snug">
          Faster to first revenue in new markets
        </p>
      </div>
    </div>
  );
}
