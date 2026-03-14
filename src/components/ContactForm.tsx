"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:border-[#7C3AED]/70 focus:ring-2 focus:ring-[#7C3AED]/20 outline-none transition";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#7C3AED]/40">
          <Send className="text-white" size={22} />
        </div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-white/50 text-sm">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Name
          </label>
          <input type="text" id="name" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Work Email
          </label>
          <input type="email" id="email" required className={inputCls} placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Company
          </label>
          <input type="text" id="company" className={inputCls} placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="markets" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Markets Exploring
          </label>
          <input type="text" id="markets" className={inputCls} placeholder="e.g. MENA, US, APAC" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="Tell us about your goals..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#7C3AED]/30 transition-all hover:shadow-[#7C3AED]/50"
      >
        <Send size={16} />
        Submit
      </button>
    </form>
  );
}
