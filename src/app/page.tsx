import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Handshake,
  Zap,
  Shield,
  BarChart3,
  Rocket,
  TrendingUp,
  Users,
  Network,
  Building2,
  Target,
  CheckCircle2,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import ContactForm from "@/components/ContactForm";

/* ─── Shared section heading ─────────────────────────────── */
function SectionHeading({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      {label && (
        <span className="inline-block text-[11px] font-black text-[#A78BFA] uppercase tracking-[0.2em] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 rounded-full mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-white/50 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
        {/* Ambient glow blobs */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/8 blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-8">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 w-fit text-xs font-bold text-[#A78BFA] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                Revenue Partners for SaaS Founders
              </span>

              {/* Headline */}
              <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight text-white">
                Your Revenue<br />
                <span className="text-[#A78BFA]">Responsibility</span>{" "}
                Partner
              </h1>

              {/* Sub */}
              <p className="text-white/55 text-lg lg:text-xl leading-relaxed max-w-[520px]">
                Perfect Ventures partners with SaaS founders to build structured
                sales and hiring motions. We don&apos;t sell tools, headcount, or
                generic advice — we take ownership of outcomes.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-bold px-7 py-4 rounded-xl shadow-2xl shadow-[#7C3AED]/40 transition-all hover:shadow-[#7C3AED]/60 group"
                >
                  Talk to Us
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#7C3AED] uppercase tracking-widest">
                    Global Execution
                  </span>
                  <span className="text-[11px] text-white/40 font-medium">
                    MENA · Africa · APAC · US · ANZ
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6">
                {[
                  { val: "$350K+", label: "ARR Closed" },
                  { val: "$2.5M+", label: "Pipeline Built" },
                  { val: "12+",    label: "Active Partners" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-2xl sm:text-3xl font-black text-white">{s.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column — horizontal carousel ── */}
            <div className="lg:pl-4">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          OUR STORY
      ====================================================== */}
      <section id="story" className="py-24 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Story"
            title="Operators, Not Advisors"
            subtitle="Founded in 2024, we help early- and growth-stage startups enter new geographies with clarity, speed, and accountability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-white/55 leading-relaxed mb-5">
                Most sales organisations are designed to farm — to nurture demand
                once it already exists. That model works well in mature markets.
                Early expansion, however, requires a different skill set.
              </p>
              <p className="text-white font-semibold text-xl mb-5">It requires hunters.</p>
              <ul className="space-y-3">
                {[
                  "Who can open doors without brand recall",
                  "Who can create early trust in unfamiliar markets",
                  "Who can build momentum before scale exists",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/55">
                    <CheckCircle2 size={17} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/15 rounded-2xl p-8">
              <p className="text-white/70 leading-relaxed text-lg">
                We focus on the hardest phase of growth — breaking into new markets,
                establishing early pipelines, and validating demand before significant
                internal investment.
              </p>
              <p className="mt-5 font-heading font-bold text-[#A78BFA] text-xl">
                At our core, we are operators with a founder-level mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          OUR SERVICES
      ====================================================== */}
      <section id="services" className="py-24 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            subtitle="Two core pillars that drive sustainable revenue growth for SaaS founders."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sales */}
            <div className="card-hover bg-[#111118]/95 rounded-2xl p-8 border border-white/[0.08] hover:border-[#7C3AED]/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.15)] transition-colors group">
              <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7C3AED]/25 transition-colors">
                <TrendingUp className="text-[#A78BFA]" size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Sales Execution</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                We design and execute sales motions that create early market access and
                repeatable pipeline. Opening doors, validating demand, building momentum.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  { icon: Network,   bold: "Network-led sales",          rest: " through integrators, founders, and industry relationships" },
                  { icon: Target,    bold: "Outbound SDR/BDR execution", rest: " with clear ICP definition and sequencing" },
                  { icon: Handshake, bold: "Partner ecosystem creation", rest: " including identification, outreach, and enablement" },
                ].map(({ icon: Icon, bold, rest }) => (
                  <li key={bold} className="flex items-start gap-2.5 text-sm text-white/45">
                    <Icon size={15} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white/80">{bold}</strong>{rest}</span>
                  </li>
                ))}
              </ul>
              <Link href="/sales" className="inline-flex items-center gap-1.5 text-[#A78BFA] text-sm font-semibold hover:text-white transition-colors group/lnk">
                Explore Sales <ArrowRight size={14} className="transition-transform group-hover/lnk:translate-x-1" />
              </Link>
            </div>

            {/* Hiring */}
            <div className="card-hover bg-[#111118]/95 rounded-2xl p-8 border border-white/[0.08] hover:border-[#7C3AED]/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.15)] transition-colors group">
              <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7C3AED]/25 transition-colors">
                <Users className="text-[#A78BFA]" size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Hiring</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                End-to-end talent acquisition across both technical and business roles,
                helping founders build teams that can execute from day one.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  { icon: Building2, bold: "Hiring from CTOs, VPs",         rest: " to SDEs and SDRs" },
                  { icon: Shield,    bold: "Role definition and org design", rest: " aligned to geography & growth objectives" },
                  { icon: Zap,       bold: "Candidate sourcing & screening", rest: " for fast-paced startup environments" },
                ].map(({ icon: Icon, bold, rest }) => (
                  <li key={bold} className="flex items-start gap-2.5 text-sm text-white/45">
                    <Icon size={15} className="text-[#7C3AED] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white/80">{bold}</strong>{rest}</span>
                  </li>
                ))}
              </ul>
              <Link href="/hiring" className="inline-flex items-center gap-1.5 text-[#A78BFA] text-sm font-semibold hover:text-white transition-colors group/lnk">
                Explore Hiring <ArrowRight size={14} className="transition-transform group-hover/lnk:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="py-24 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why Us" title="Why Choose Perfect Ventures?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield,   title: "Your GTM Function, Not an Agency",    desc: "We embed as your extended go-to-market team — owning execution, pipeline, and CRM." },
              { icon: Handshake,title: "Founder-Level Ownership",             desc: "We bring founder empathy to execution, paired with measurable sales outcomes." },
              { icon: Zap,      title: "Strategy + Fast Execution",           desc: "Market-level strategy with rapid iteration — testing, learning, adjusting in real time." },
              { icon: Globe,    title: "Proven Global Execution",             desc: "Hands-on experience across MENA, Africa, APAC, the US, and ANZ." },
              { icon: BarChart3,title: "$350K+ ARR & $2.5M+ Pipeline",       desc: "Demonstrated revenue impact closed within 8 months across multiple geographies." },
              { icon: Rocket,   title: "2x Acceleration & 12+ Partners",     desc: "Partner-led deals closing faster with 2x lead generation through curated networks." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover bg-[#09090f]/95 rounded-xl p-6 border border-white/[0.08] hover:border-[#7C3AED]/40 group">
                  <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/20 transition-colors">
                    <Icon size={19} className="text-[#A78BFA]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          STARTUPS WE WORK WITH
      ====================================================== */}
      <section className="py-16 bg-[#09090f]/92 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-center text-xs font-black text-white/30 uppercase tracking-[0.25em] mb-10">
            Trusted by founders from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { src: "/images/logos/nurixai.jpg",  alt: "Nurix.ai" },
              { src: "/images/logos/getkarta.jpg", alt: "Karta.ai" },
              { src: "/images/logos/fynd.jpg",     alt: "Fynd" },
              { src: "/images/logos/provakil.jpg", alt: "Provakil" },
              { src: "/images/logos/sherlock.png", alt: "Sherlocks.ai" },
            ].map((logo) => (
              <div key={logo.alt} className="w-20 h-20 relative opacity-30 hover:opacity-70 grayscale invert transition-all duration-300">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FOUNDING TEAM
      ====================================================== */}
      <section id="team" className="py-24 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Team"
            title="Founding Team"
            subtitle="Operator-founders who have scaled businesses across four continents."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {[
              {
                img: "/images/team/pankaj.jpeg",
                name: "Pankaj Bajaj",
                title: "CEO",
                bio: "Global business leader with 15+ years driving B2B and enterprise growth across four continents. Built and scaled businesses across SaaS, enterprise sales, and new market expansion.",
              },
              {
                img: "/images/team/yash.png",
                name: "Yash Gupta",
                title: "CBO",
                bio: "9+ years in international sales, GTM design, and strategic partnerships. Drives end-to-end revenue ownership across MEA, Southeast Asia, and the US.",
              },
              {
                img: "/images/team/antara.jpeg",
                name: "Antara Singh Arya",
                title: "Chief Hiring & Recruitment Officer",
                bio: "Talent acquisition leader with 11+ years across tech and non-tech recruitment. Specialises in startup hiring, leadership roles, and building founding teams.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="card-hover bg-[#09090f]/95 rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#7C3AED]/40 group"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090f]/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-lg">{member.name}</h3>
                  <p className="text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3 mt-0.5">{member.title}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTACT FORM
      ====================================================== */}
      <section id="contact" className="py-24 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left */}
            <div>
              <span className="inline-block text-[11px] font-black text-[#A78BFA] uppercase tracking-[0.2em] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 rounded-full mb-4">
                Get in Touch
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Partner with Perfect Ventures
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Tell us about your goals and the markets you want to explore. We&apos;ll
                get back to you within 24 hours with a clear path forward.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  { icon: Globe,  text: "Active across MENA, APAC, US, and ANZ" },
                  { icon: Zap,    text: "Response within 24 hours" },
                  { icon: Shield, text: "No strings attached — just a conversation" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#7C3AED]/15">
                      <Icon size={17} className="text-[#A78BFA]" />
                    </div>
                    <span className="text-sm text-white/55">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="bg-[#111118] rounded-2xl p-8 border border-white/[0.07]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
