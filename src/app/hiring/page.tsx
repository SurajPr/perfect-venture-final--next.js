import Link from "next/link";
import {
  ArrowRight,
  Users,
  Clock,
  AlertTriangle,
  UserX,
  Shuffle,
  Search,
  FileText,
  Target,
  Shield,
  Brain,
  Code,
  Video,
  Flag,
  BookOpen,
  Zap,
  BarChart3,
  CheckCircle2,
  Gauge,
  Scale,
  Star,
  Briefcase,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Acquisition | Perfect Ventures",
  description:
    "Building high-performing teams with AI-powered talent acquisition. From CTOs to SDRs — build teams that execute from day one.",
};

export default function HiringPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-transparent relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-[#7C3AED]/20 text-[#A78BFA] text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-[#7C3AED]/30">
            Talent Acquisition
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Building <span className="text-[#A78BFA]">High-Performing</span> Teams
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
            AI-powered talent acquisition that streamlines recruitment and onboards
            top-tier talent to drive long-term growth for AI and SaaS startups.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#7C3AED]/30 transition-all inline-flex items-center gap-2"
            >
              Start Hiring <ArrowRight size={18} />
            </Link>
          </div>
          {/* Hero stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/[0.08] pt-10">
            {[
              { value: "1,500+", label: "Pre-vetted Candidates" },
              { value: "15 days", label: "Avg. Time to Hire" },
              { value: "89%", label: "Role-Fit Accuracy" },
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
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">The Problem</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              The <span className="text-[#A78BFA]">Challenge</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                icon: Users,
                title: "Talent Gap",
                stat: "87%",
                desc: "of tech leaders struggle to find skilled candidates, especially in AI, Cybersecurity, and Cloud Computing",
              },
              {
                icon: Clock,
                title: "Time to Hire",
                stat: "62 days",
                desc: "on average for tech hires, with senior roles averaging 70.5 days, delaying critical projects",
              },
              {
                icon: AlertTriangle,
                title: "Cumbersome Screening",
                stat: "30+ hrs",
                desc: "spent by hiring managers on screening and interviews due to low quality candidates",
              },
              {
                icon: UserX,
                title: "No Show",
                stat: "20-30%",
                desc: "of tech candidates miss interviews; 24% of accepted offers result in no-shows",
              },
              {
                icon: Shuffle,
                title: "Hiring Flexibility",
                stat: "65%",
                desc: "of tech leaders use contract hires for urgent skill gaps, balancing with full-time roles",
              },
            ].map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="card-hover group bg-[#09090f]/90 rounded-xl p-6 text-center border border-white/[0.07] hover:border-[#7C3AED]/50"
                >
                  <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7C3AED]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-[#A78BFA]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm">{challenge.title}</h3>
                  <p className="font-heading text-2xl font-bold text-[#A78BFA] mt-2 group-hover:text-white transition-colors duration-300">{challenge.stat}</p>
                  <p className="text-white/40 text-xs mt-2 leading-relaxed group-hover:text-white/60 transition-colors duration-300">{challenge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OUR SOLUTION ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">The PV Advantage</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Our <span className="text-[#A78BFA]">Solution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { num: "1", icon: Target, title: "Precision Talent Matching" },
              { num: "2", icon: Users, title: "Comprehensive Talent Pool" },
              { num: "3", icon: Brain, title: "AI Assessment" },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="card-hover bg-[#111118]/95 rounded-xl p-6 text-center border border-white/[0.08] hover:border-[#7C3AED]/45">
                  <div className="w-10 h-10 bg-[#7C3AED] text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-sm shadow-lg shadow-[#7C3AED]/30">
                    {step.num}
                  </div>
                  <Icon size={28} className="text-[#A78BFA] mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-white">{step.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PRECISION TALENT MATCHING ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Step 1</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Precision <span className="text-[#A78BFA]">Talent Matching</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Job Analysis",
                desc: "Customized job requirement analysis with hiring managers to understand exact technical needs",
              },
              {
                icon: FileText,
                title: "Description Refinement",
                desc: "Fine-tuned job descriptions that attract the right candidates and filter out the wrong ones",
              },
              {
                icon: Target,
                title: "Targeted Sourcing",
                desc: "Targeted sourcing aligned with actual technical needs, not just keyword matching",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-hover group bg-[#09090f]/90 rounded-xl p-6 border border-white/[0.07] hover:border-[#7C3AED]/45">
                  <div className="w-10 h-10 bg-[#7C3AED]/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/30 transition-colors duration-300">
                    <Icon size={20} className="text-[#A78BFA]" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ COMPREHENSIVE TALENT POOL ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Step 2</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Comprehensive <span className="text-[#A78BFA]">Talent Pool</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { icon: Shield, title: "Pre-vetted Specialist", stat: "1,500+", desc: "specialists vetted across major tech stacks" },
              { icon: Brain, title: "Emerging Technologies", stat: "AI, ML", desc: "Cybersecurity, Data and DevOps Engineers" },
              { icon: BarChart3, title: "Hiring Levels", stat: "All levels", desc: "Supports leadership to junior hiring" },
              { icon: Briefcase, title: "Hiring Types", stat: "Tech & Non-tech", desc: "Offers technical and non-technical roles" },
              { icon: Shuffle, title: "Flexible Options", stat: "On demand", desc: "Full-time and contract resources" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-hover group bg-[#111118]/95 rounded-xl p-5 text-center border border-white/[0.08] hover:border-[#7C3AED]/45">
                  <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#7C3AED]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} className="text-[#A78BFA]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm">{item.title}</h3>
                  <p className="font-heading text-lg font-bold text-[#A78BFA] mt-1 group-hover:text-white transition-colors duration-300">{item.stat}</p>
                  <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ AI ASSESSMENT PLATFORM ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Step 3</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Our AI <span className="text-[#A78BFA]">Assessment</span> Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Code, title: "Technical Screening", desc: "Multi-dimensional skills validation with AI proctoring" },
              { icon: FileText, title: "Coding Challenge", desc: "Real-world scenarios relevant to your environment" },
              { icon: Video, title: "Video Interview", desc: "Sentiment and communication analysis" },
              { icon: Flag, title: "Role Alignment", desc: "Role fit prediction with 89% accuracy" },
              { icon: BookOpen, title: "Continuous Learning", desc: "Assessment models that improve with each hire" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-hover bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-5 text-center hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/15">
                  <div className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#7C3AED]/30">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-white/50 text-xs mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OUR PROCESS ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">How It Works</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Our <span className="text-[#A78BFA]">Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { num: "1", title: "Discovery", desc: "In-depth consultation with hiring managers to understand exact needs" },
              { num: "2", title: "Refinement", desc: "Job description optimization to attract the right talent" },
              { num: "3", title: "AI Screening", desc: "Multi-stage technical and cultural assessment using our AI platform" },
              { num: "4", title: "Presentation", desc: "Only top-tier candidates reach your desk — no noise, no filler" },
              { num: "5", title: "Integration", desc: "Onboarding support and performance follow-up for successful placement" },
            ].map((step, i) => (
              <div key={step.num} className="flex items-start gap-5 mb-4 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-[#7C3AED]/30">
                    {step.num}
                  </div>
                  {i < 4 && <div className="w-0.5 h-6 bg-[#7C3AED]/20 mt-1" />}
                </div>
                <div className="pt-1.5 flex-1">
                  <div className="card-hover bg-[#111118]/95 border border-white/[0.07] hover:border-[#7C3AED]/40 rounded-xl px-5 py-4">
                    <h3 className="font-heading font-bold text-white">{step.title}</h3>
                    <p className="text-white/50 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW WE ARE DIFFERENT ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Differentiators</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              How We Are <span className="text-[#A78BFA]">Different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Zap, title: "Speed", stat: "62→15 days", desc: "3x reduction in hiring period" },
              { icon: BarChart3, title: "Multi-Level Screening", stat: "50%+", desc: "Selection rate through rigorous vetting" },
              { icon: Star, title: "Quality", stat: "80%", desc: "of placements exceed expectations" },
              { icon: Gauge, title: "Precision", stat: "2.5x", desc: "Reduction in unsuitable candidate interviews" },
              { icon: Scale, title: "Flexibility", stat: "Seamless", desc: "Scaling between full-time and contract" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-hover group bg-[#09090f]/90 rounded-xl p-5 text-center border border-white/[0.07] hover:border-[#7C3AED]/45">
                  <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#7C3AED]/30 transition-colors duration-300">
                    <Icon size={22} className="text-[#A78BFA]" />
                  </div>
                  <p className="font-heading text-xl font-bold text-[#A78BFA] group-hover:text-white transition-colors duration-300">{item.stat}</p>
                  <h3 className="font-heading font-semibold text-white text-sm mt-1">{item.title}</h3>
                  <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SERVICE OPTIONS ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Engagement</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Service <span className="text-[#A78BFA]">Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-hover bg-[#111118]/95 rounded-2xl p-8 border border-white/[0.08] hover:border-[#7C3AED]/40">
              <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mb-5">
                <Users size={24} className="text-[#A78BFA]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Full-Time Placement</h3>
              <ul className="space-y-3">
                {[
                  "Complete recruitment lifecycle management",
                  "90-day replacement guarantee",
                  "Ongoing retention consultation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 size={16} className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-hover bg-[#7C3AED]/10 rounded-2xl p-8 border-2 border-[#7C3AED]/30 hover:border-[#7C3AED]/65 hover:shadow-[0_0_60px_rgba(124,58,237,0.15)]">
              <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-xl flex items-center justify-center mb-5">
                <Calendar size={24} className="text-[#A78BFA]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Staff Augmentation</h3>
              <ul className="space-y-3">
                {[
                  "Flexible contract terms (2 weeks to 12+ months)",
                  "Rapid deployment (as quick as 72 hours)",
                  "Seamless extensions or conversions to full-time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REASONS TO PARTNER ============ */}
      <section className="py-20 bg-[#111118]/92 section-sep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Reasons to <span className="text-[#A78BFA]">Partner</span> With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Save Time", desc: "Focus on your core business while we handle the talent pipeline" },
              { icon: BarChart3, title: "Reduce Costs", desc: "Eliminate wasted interviews and poor hiring decisions" },
              { icon: Shuffle, title: "Gain Flexibility", desc: "Scale your team up or down as needed" },
              { icon: Star, title: "Elevate Quality", desc: "Access top-tier talent that traditional methods miss" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-hover group bg-[#09090f]/90 rounded-xl p-6 text-center border border-white/[0.07] hover:border-[#7C3AED]/45">
                  <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7C3AED]/30 transition-colors duration-300">
                    <Icon size={22} className="text-[#A78BFA]" />
                  </div>
                  <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-2">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-[#09090f]/92 section-sep text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Ready to Build Your Dream Team?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Get your first candidate profiles within 3 business days. Let us handle
            recruitment so you can focus on building your product.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#7C3AED]/30 transition-all inline-flex items-center gap-2"
            >
              Start Hiring <ArrowRight size={18} />
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
