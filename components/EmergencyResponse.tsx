"use client";

import Link from "next/link";
import { FaAmbulance, FaBuilding } from "react-icons/fa";

export default function EmergencyResponse() {
return (
    <div className="mt-24 text-center bg-gradient-to-r from-gray-900 to-gray-800 p-16 rounded-3xl shadow-2xl">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-anton uppercase">
          SMART & RELIABLE BUILDING MANAGEMENT SUPPORT
        </h3>

        {/* Subheading / Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          We provide <span className="text-[#FF6F3C] font-semibold">comprehensive building management solutions</span> 
          for every project — from <span className="font-semibold">planning</span> and <span className="font-semibold">construction oversight</span> 
          to <span className="font-semibold">maintenance</span> and <span className="font-semibold">safety compliance</span>. 
          Our team ensures your buildings are managed efficiently, safely, and sustainably.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Get Consultation */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#FF6F3C] text-white px-8 py-4 font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaBuilding className="mr-3 text-xl" />
            Request a Consultation
          </Link>

          {/* Learn More */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
