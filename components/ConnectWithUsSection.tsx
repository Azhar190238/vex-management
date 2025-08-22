"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaPhoneAlt } from "react-icons/fa";

const ConnectWithUsSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 min-h-screen flex items-center font-opensans">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/building-bg.jpg" // Replace with your building management image
          alt="Building management background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Card: Contact Us */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 flex flex-col justify-between h-full border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anton uppercase text-gradient bg-gradient-to-r from-[#FF6F3C] to-[#FF8356] bg-clip-text text-transparent">
                Contact Our Experts
              </h2>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                Discuss your building management requirements with our experienced team. We provide fast, reliable, and efficient solutions tailored to your project needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6F3C] to-[#FF8356] hover:from-[#FF8356] hover:to-[#FF6F3C] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FF6F3C]"
            >
              <FaPhoneAlt className="text-lg animate-bounce" />
              Request a Consultation
            </Link>
          </div>

          {/* Right Card: Learn More */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 flex flex-col justify-between h-full border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anton uppercase text-gradient bg-gradient-to-r from-[#FF6F3C] to-[#FF8356] bg-clip-text text-transparent">
                Professional Building Management
              </h2>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                We provide comprehensive building management services, including facility oversight, maintenance planning, safety compliance, and operational efficiency solutions. 
                Download our capability statement to see how we can streamline your building operations.
              </p>
            </div>
            <Link
              href="/Building_Capability_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/90 hover:bg-white text-gray-900 px-8 py-4 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 text-base md:text-lg"
            >
              <FaFileDownload className="text-lg" />
              View Capability Statement
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsSection;

