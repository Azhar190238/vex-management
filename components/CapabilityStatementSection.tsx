"use client";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const CapabilityStatementSection = () => (
  <section className="w-full py-16 bg-gray-50 font-opensans">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-anton uppercase">
        Capability Statement
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Please see the attached Capability Statement for a comprehensive
        overview of our experience, services, and commitment to safety and
        compliance.
      </p>
      <Link
        href="/T&S%20Capability%20Statement%20%202025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        <FaFilePdf className="text-2xl" />
        View Capability Statement
      </Link>
    </div>
  </section>
);

export default CapabilityStatementSection;
