'use client';

import Navbar from '@/components/Navbar';
import { firmInfo } from '@/data/firmData';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-[#050911] text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-white/10 bg-[#070d18] text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
            Legal & Policy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Terms & <span className="text-[#FFD700]">Conditions</span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-gray-400">
            Last Updated: October 2026
          </p>
        </div>
      </div>

      {/* Simple Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-8 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
          {/* 1. Introduction */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">1.</span> Introduction
            </h2>
            <p>
              Welcome to <strong>{firmInfo.name}</strong> (&ldquo;ALVYNE&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website or utilizing our professional taxation, accounting, GST, compliance, and financial advisory services, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          {/* 2. Professional Services */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">2.</span> Scope of Services
            </h2>
            <p>
              ALVYNE provides financial consulting, tax preparation, Income Tax Return (ITR) filing, GST services, accounting, company compliance, and financial advisory. All advisory services are based on the documents and information provided by the client and the statutory regulations in force at the time of filing.
            </p>
          </div>

          {/* 3. Client Responsibilities */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">3.</span> Client Responsibilities
            </h2>
            <p className="mb-2">
              To ensure accurate and timely service, clients are required to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400 text-xs sm:text-sm">
              <li>Provide complete, accurate, and truthful financial records, bank statements, and tax documents.</li>
              <li>Submit required information and verify draft returns well before statutory deadlines.</li>
              <li>Notify us promptly of any changes to your financial or business status.</li>
            </ul>
          </div>

          {/* 4. Confidentiality */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">4.</span> Confidentiality & Privacy
            </h2>
            <p>
              We treat all client financial records, identity documents (PAN, Aadhaar, GSTIN), and business data with the strictest professional confidentiality. We do not sell or disclose your personal or financial information to third parties, except as required by law or to regulatory authorities (such as the Income Tax Department or GST Portal) to complete your filings.
            </p>
          </div>

          {/* 5. Fees & Payments */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">5.</span> Fees & Statutory Charges
            </h2>
            <p>
              Our professional fees are communicated and agreed upon before initiating any engagement. Please note that statutory dues, challans, government portal fees, and taxes are the client&apos;s direct obligation and are separate from our professional consultation charges.
            </p>
          </div>

          {/* 6. Limitation of Liability */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">6.</span> Limitation of Liability
            </h2>
            <p>
              While we take every precaution to ensure accuracy and timely delivery, ALVYNE shall not be held liable for delays, penalties, or notices resulting from inaccurate records provided by the client, sovereign portal downtime (e.g., Income Tax or GST portal outages), or changes in government laws.
            </p>
          </div>

          {/* 7. Governing Law */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD700]">7.</span> Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the courts in Kochi, Kerala.
            </p>
          </div>

          {/* 8. Contact Information */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#090f1c] border border-white/10 mt-10">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              8. Contact Us
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mb-4">
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-gray-400">
              <p><strong className="text-white">Firm:</strong> {firmInfo.name}</p>
              <p><strong className="text-white">Email:</strong> <a href={`mailto:${firmInfo.contact.email}`} className="text-[#FFD700] hover:underline">{firmInfo.contact.email}</a></p>
              <p><strong className="text-white">Phone:</strong> {firmInfo.contact.phonesDisplay}</p>
              <p><strong className="text-white">Location:</strong> {firmInfo.contact.city}, {firmInfo.contact.state}, {firmInfo.contact.country}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD700] hover:underline"
              >
                <span>Go to Contact Page →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
