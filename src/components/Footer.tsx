import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#09090f] border-t border-white/[0.06] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">PV</span>
              </div>
              <span className="font-heading font-bold text-lg">Perfect Ventures</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your Revenue Responsibility Partner. We help SaaS founders build structured
              sales and hiring motions for sustainable growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sales" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sales Execution
                </Link>
              </li>
              <li>
                <Link href="/hiring" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Talent Acquisition
                </Link>
              </li>
              <li>
                <Link href="/sales#models" className="text-gray-400 hover:text-white text-sm transition-colors">
                  GTM Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#story" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                sales@perfect.ventures
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                +91-9643769692
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                Global — MENA, APAC, US, ANZ
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center text-white/25 text-sm">
          &copy; {new Date().getFullYear()} Perfect Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
