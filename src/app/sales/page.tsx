import Link from "next/link";
import {
  ArrowRight,
  DollarSign,
  Target,
  Users,
  CheckCircle2,
  XCircle,
  Globe,
  Repeat,
  ArrowUpRight,
  Star,
  Brain,
  Mail,
  Linkedin,
  Phone,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Execution | Perfect Ventures",
  description:
    "Your embedded GTM & outbound execution partner for international expansion. We don't consult — we execute.",
};

export default function SalesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-transparent relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-[#7C3AED]/20 text-[#A78BFA] text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-[#7C3AED]/30">
            Sales Execution &amp; GTM
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Your next enterprise deal in{" "}
            <span className="text-[#A78BFA]">MEA, APAC, or US</span>
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
            Without a 6-month SDR hiring cycle. Your embedded GTM &amp; outbound
            execution partner for international expansion. We don&apos;t consult — we execute.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#7C3AED]/30 transition-all inline-flex items-center gap-2"
            >
              Request GTM Audit <ArrowRight size={18} />
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/[0.08] pt-10">
            {[
              { value: "$500K+", label: "Deals Closed" },
              { value: "$3.5M+", label: "Pipeline Built" },
              { value: "30+", label: "Meetings in 90 Days" },
              { value: "3-4x", label: "SDR Productivity" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE CHALLENGE ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">The Challenge</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Why International Expansion <span className="text-[#A78BFA]">Fails</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">
              Series A/B funding secured. Board wants 3 new markets in 12-18 months.
              No local network. No time to hire. And your global playbook won&apos;t translate.
            </p>
          </div>

          {/* Interactive hover cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { value: "82%", label: "of tech founders say sales is the #1 scaling barrier" },
              { value: "67%", label: "of sales teams struggle with lead qualification" },
              { value: "23%", label: "increase in enterprise sales cycles since 2021" },
              { value: "57%", label: "of buyers decide before talking to sales" },
              { value: "80%", label: "expect personalized, localized experiences" },
              { value: "15%", label: "of sales time actually spent selling" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="group relative bg-[#09090f]/90 rounded-xl p-5 text-center border border-white/[0.07] cursor-default
                           transition-all duration-300
                           hover:scale-[1.05] hover:-translate-y-2
                           hover:border-[#7C3AED]/60
                           hover:shadow-xl hover:shadow-[#7C3AED]/20
                           hover:bg-[#0d0818]/90"
              >
                {/* Inner glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#7C3AED]/0 to-[#7C3AED]/0 group-hover:from-[#7C3AED]/8 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                <div className="relative">
                  <p className="font-heading text-2xl font-bold text-[#A78BFA] group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform origin-center inline-block">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs mt-2 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE REAL COST ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">The Alternative</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              The Real <span className="text-[#A78BFA]">Cost</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">
              What if your business could grow without hiring any SDRs? Most growing
              teams quietly overspend 2-3x on hiring and retraining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, value: "38%", title: "Cost Savings", desc: "Cut up to 38% of team-related costs by replacing internal SDR spend" },
              { icon: Repeat, value: "No Loop", title: "End the Cycle", desc: "Permanently end the costly hiring, onboarding, and retraining loop" },
              { icon: Star, value: "AI-first", title: "Performance", desc: "AI-augmented teams that perform at 3-4x without daily supervision" },
              { icon: ArrowUpRight, value: "Scale", title: "Grow Smart", desc: "Enter new markets and scale pipeline without adding permanent headcount" },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="card-hover group relative bg-[#111118]/95 rounded-2xl p-7 border border-white/[0.09]
                             hover:border-[#7C3AED]/50 overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED]/0 to-transparent group-hover:via-[#7C3AED]/60 transition-all duration-500" />
                  <div className="w-11 h-11 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#7C3AED]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} className="text-[#A78BFA]" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-[#A78BFA] group-hover:text-white transition-colors duration-300">{card.value}</p>
                  <h3 className="font-heading font-semibold text-white mt-1 mb-2">{card.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-6 text-center">
            <p className="font-heading font-semibold text-white">
              Our Philosophy: We are playbook creators, not playbook followers. Most salespeople are farmers.{" "}
              <span className="text-[#A78BFA]">We are exceptional hunters.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============ COMPARISON TABLE ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Why PV</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              The Smarter Way to <span className="text-[#A78BFA]">Go Global</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Old Way */}
            <div className="card-hover bg-[#0f0d14]/90 rounded-2xl p-8 border border-red-500/10 hover:border-red-500/25">
              <h3 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
                <XCircle size={20} className="text-red-400" />
                The Old Way — Build In-House
              </h3>
              <ul className="space-y-3">
                {[
                  "Regional Sales Director required",
                  "2-3 local SDRs to hire & train",
                  "Hiring timeline: 3-9 months",
                  "High upfront + ongoing overhead",
                  "Unproven local execution",
                  "Constant hiring-training loop",
                  "2-3x overspend on ramp-up",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/45">
                    <XCircle size={16} className="text-red-400/60 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PV Way */}
            <div className="card-hover bg-[#7C3AED]/12 rounded-2xl p-8 border-2 border-[#7C3AED]/40 hover:border-[#7C3AED]/70 hover:shadow-[0_0_60px_rgba(124,58,237,0.15)]">
              <h3 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#A78BFA]" />
                The PV Way — Embedded Execution
              </h3>
              <ul className="space-y-3">
                {[
                  "Complete team, proven track record",
                  "Trained SDRs + senior leadership",
                  "Deploy in 2-4 weeks",
                  "60-70% cost savings",
                  "Proven network & execution",
                  "AI-first: 3-4x productivity",
                  "Scale without adding headcount",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-white/30">
            25+ member team &nbsp;|&nbsp; 10+ active customers &nbsp;|&nbsp; 6+ countries &nbsp;|&nbsp; Founded by IIT Bombay alum
          </div>
        </div>
      </section>

      {/* ============ ENGAGEMENT MODELS ============ */}
      <section id="models" className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">How We Work</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Engagement <span className="text-[#A78BFA]">Models</span>
            </h2>
            <p className="mt-3 text-white/50">Choose what fits your stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "PV Managed SDR",
                subtitle: "We Execute For You",
                desc: "Best for founders who need pipeline in 60-90 days and want zero SDR management overhead.",
                features: [
                  "Dedicated SDR team + CRA",
                  "3-4x SDR productivity",
                  "40+ meetings in 150 days",
                  "Weekly pipeline reporting",
                  "AI-first outbound ownership",
                ],
              },
              {
                num: "02",
                title: "Partner-Powered Outbound",
                subtitle: "Warm Introductions at Scale",
                desc: "Best for companies entering markets where warm introductions outperform cold outreach.",
                features: [
                  "Everything in Model 1",
                  "Network sales & warm intros",
                  "Partner program activation",
                  "Contract CRO leadership",
                  "60-70% cost savings vs. in-house",
                ],
              },
              {
                num: "03",
                title: "System Build",
                subtitle: "We Build, You Run",
                desc: "Best for teams that want to own their outbound permanently with a proven, scalable OS.",
                features: [
                  "Full outbound playbooks & SOPs",
                  "Tech stack setup & workflow",
                  "Live training & call coaching",
                  "Ongoing audits & optimization",
                  "AI-powered dashboards",
                ],
              },
            ].map((model) => (
              <div
                key={model.num}
                className="card-hover bg-[#111118]/95 rounded-2xl p-8 border border-white/[0.08] hover:border-[#7C3AED]/45"
              >
                <span className="text-[#A78BFA] font-heading font-bold text-sm">{model.num}</span>
                <h3 className="font-heading text-xl font-bold text-white mt-2">{model.title}</h3>
                <p className="text-[#A78BFA] text-sm font-medium mt-1">{model.subtitle}</p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">{model.desc}</p>
                <ul className="mt-5 space-y-2">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/55">
                      <CheckCircle2 size={14} className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PV MANAGED SDR PHASES — JOURNEY FLOW ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Timeline</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Phased <span className="text-[#A78BFA]">Delivery</span>
            </h2>
            <p className="mt-3 text-white/45 max-w-xl mx-auto text-sm">
              A structured journey from foundation to a self-sustaining growth engine.
            </p>
          </div>

          {/* Journey timeline */}
          <div className="relative">
            {/* Gradient connecting line — desktop only */}
            <div
              className="hidden lg:block absolute left-[calc(12.5%-0px)] right-[calc(12.5%-0px)] h-[2px] pointer-events-none"
              style={{
                top: "19px",
                background:
                  "linear-gradient(to right, rgba(76,29,149,0.5) 0%, rgba(109,40,217,0.8) 33%, rgba(124,58,237,1) 66%, rgba(139,92,246,1) 100%)",
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "1",
                  title: "Foundation",
                  time: "0–30 Days",
                  color: "#4C1D95",
                  glow: "rgba(76,29,149,0.35)",
                  items: ["ICP finalized", "Playbook built", "Tech stack setup"],
                },
                {
                  phase: "2",
                  title: "Build Pipeline",
                  time: "Day 31–90",
                  color: "#6D28D9",
                  glow: "rgba(109,40,217,0.35)",
                  items: ["A/B testing", "Outreach live", "20+ meetings"],
                },
                {
                  phase: "3",
                  title: "Scale",
                  time: "Day 91–150",
                  color: "#7C3AED",
                  glow: "rgba(124,58,237,0.40)",
                  items: ["40+ meetings", "6-8 SQLs", "Pipeline reporting"],
                },
                {
                  phase: "4",
                  title: "Optimize",
                  time: "Post Day 180",
                  color: "#8B5CF6",
                  glow: "rgba(139,92,246,0.45)",
                  items: ["8-10 mtgs/mo", "1-2 SQLs/mo", "Consistent growth"],
                },
              ].map((phase) => (
                <div key={phase.phase} className="group relative flex flex-col">
                  {/* Phase node */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white mb-5 transition-all duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: phase.color,
                      boxShadow: `0 0 0 4px rgba(9,9,15,1), 0 0 20px ${phase.glow}`,
                    }}
                  >
                    {phase.phase}
                  </div>

                  {/* Card */}
                  <div
                    className="card-hover flex-1 rounded-2xl p-5 border border-[#7C3AED]/20 bg-[#09090f]/92
                               hover:border-[#7C3AED]/60 hover:shadow-[0_16px_40px_rgba(124,58,237,0.22)]"
                  >
                    <h3 className="font-heading font-bold text-white mb-1">{phase.title}</h3>
                    <p className="text-[#A78BFA] text-sm font-semibold mb-3">
                      {phase.time}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="text-white/50 text-sm flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: phase.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team structure */}
          <div className="mt-14 bg-[#09090f]/90 rounded-2xl p-8 border border-white/[0.06]">
            <h3 className="font-heading font-bold text-white text-lg mb-6 text-center">Team Structure</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Head of Project", desc: "Strategy, governance, reporting" },
                { icon: Target, title: "SDRs", desc: "Email, LinkedIn, call outreach" },
                { icon: Brain, title: "Research Analyst", desc: "Account research & enrichment" },
                { icon: Globe, title: "Strategic Advisor", desc: "Advisory & process oversight" },
              ].map((role) => {
                const Icon = role.icon;
                return (
                  <div key={role.title} className="text-center">
                    <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={22} className="text-[#A78BFA]" />
                    </div>
                    <h4 className="font-heading font-semibold text-white text-sm">{role.title}</h4>
                    <p className="text-white/40 text-xs mt-1">{role.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE SYSTEM ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">The Engine</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              AI-Powered <span className="text-[#A78BFA]">Outbound Engine</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">
              100+ buying signals unified into one automated pipeline. Human-led discovery, machine-powered everything else.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { num: "1", title: "Capture", desc: "100+ buying signals" },
              { num: "2", title: "Enrich", desc: "Waterfall enrichment" },
              { num: "3", title: "Personalize", desc: "AI messaging" },
              { num: "4", title: "Execute", desc: "7-channel outreach" },
              { num: "5", title: "Convert", desc: "Human-led close" },
            ].map((step) => (
              <div key={step.num} className="text-center group">
                <div className="w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-sm text-white shadow-lg shadow-[#7C3AED]/30 group-hover:scale-110 transition-transform duration-200">
                  {step.num}
                </div>
                <h4 className="font-heading font-semibold text-white text-sm">{step.title}</h4>
                <p className="text-white/40 text-xs mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Multi-channel outreach */}
          <div className="bg-[#111118]/95 border border-white/[0.07] rounded-2xl p-8">
            <h3 className="font-heading font-bold text-white text-center mb-6">7-Channel Coordinated Outreach</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Mail, name: "Email", desc: "Lemlist, Instantly, Smartlead" },
                { icon: Linkedin, name: "LinkedIn", desc: "Connections & InMails" },
                { icon: Phone, name: "Phone", desc: "Direct dials & scheduled calls" },
                { icon: MessageSquare, name: "WhatsApp & SMS", desc: "Direct messaging at scale" },
              ].map((ch) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.name} className="card-hover bg-[#09090f]/90 border border-white/[0.06] hover:border-[#7C3AED]/40 rounded-xl p-4 text-center">
                    <Icon size={20} className="text-[#A78BFA] mx-auto mb-2" />
                    <h4 className="font-semibold text-white text-sm">{ch.name}</h4>
                    <p className="text-white/40 text-xs mt-1">{ch.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE IMPACT ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Impact</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Measurable <span className="text-[#A78BFA]">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Outbound SDR + GTM Engine",
                stats: [
                  { value: "65%", desc: "Faster lead qualification" },
                  { value: "$200K+", desc: "Pipeline built in first 90 days" },
                ],
              },
              {
                title: "Partner Network Building",
                stats: [
                  { value: "3X", desc: "Faster market penetration via partner intros" },
                  { value: "53%", desc: "More likely to close with partner-sourced leads" },
                ],
              },
              {
                title: "Exclusive Network Sales",
                stats: [
                  { value: "30+", desc: "Warm meetings secured in 90 days" },
                  { value: "80%+", desc: "Meeting show rate vs. 1% industry average" },
                ],
              },
              {
                title: "GTM Engine & System Build",
                stats: [
                  { value: "2X", desc: "Pipeline growth in 90 days post-deployment" },
                  { value: "80%", desc: "Time savings on GTM infrastructure build" },
                ],
              },
            ].map((block) => (
              <div key={block.title} className="card-hover bg-[#09090f]/90 rounded-xl p-6 border border-white/[0.08] hover:border-[#7C3AED]/35">
                <h3 className="font-heading font-semibold text-white mb-4">{block.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {block.stats.map((stat) => (
                    <div key={stat.value}>
                      <p className="font-heading text-2xl font-bold text-[#A78BFA]">{stat.value}</p>
                      <p className="text-white/50 text-sm mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRACK RECORD ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Proof</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Track <span className="text-[#A78BFA]">Record</span>
            </h2>
          </div>

          {/* Top stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {[
              { value: "$500K+", label: "Deal Value Closed" },
              { value: "$3.5M+", label: "Pipeline Established" },
              { value: "12+", label: "Active Partners" },
              { value: "300+", label: "Enterprise Meetings" },
            ].map((stat) => (
              <div key={stat.label} className="card-hover text-center bg-[#111118]/95 rounded-xl p-6 border border-white/[0.08] hover:border-[#7C3AED]/40">
                <p className="font-heading text-2xl font-bold text-[#A78BFA]">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Case studies */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Agentic AI Platform",
                region: "US & MEA",
                highlights: [
                  "65% faster lead qualification",
                  "$200K+ pipeline in 90 days",
                  "Multi-region US & MEA execution",
                ],
              },
              {
                title: "Retail Computer Vision",
                region: "US, MEA, ANZ",
                highlights: [
                  "3X market penetration via partners",
                  "12+ active channel partners",
                  "$2M+ indirect pipeline",
                ],
              },
              {
                title: "SaaS — SEA Market Entry",
                region: "Singapore",
                highlights: [
                  "9 discovery calls in first month",
                  "Zero-to-one outbound in 4 weeks",
                  "SEA ICP validated from scratch",
                ],
              },
            ].map((study) => (
              <div key={study.title} className="card-hover bg-[#111118]/95 rounded-xl p-6 border border-white/[0.08] hover:border-[#7C3AED]/40">
                <span className="text-[#A78BFA] text-xs font-semibold">{study.region}</span>
                <h3 className="font-heading font-bold text-white mt-1">{study.title}</h3>
                <ul className="mt-4 space-y-2">
                  {study.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/50">
                      <CheckCircle2 size={14} className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Ready to Scale Globally?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Request your free GTM audit and discover how we can accelerate your
            international expansion in 90 days.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#7C3AED]/30 transition-all inline-flex items-center gap-2"
            >
              Request GTM Audit <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/30 text-sm">
            <span>sales@perfect.ventures</span>
            <span>+91-9643769692</span>
          </div>
        </div>
      </section>
    </>
  );
}
