"use client";

import Link from "next/link";
import { FaBuilding, FaPhoneAlt, FaCogs } from "react-icons/fa";
import {
  MdSecurity,
  MdOutlineDesignServices,
  MdEngineering,
} from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="font-opensans relative min-h-screen w-full overflow-hidden flex items-center justify-center py-26">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-anton font-bold">
            SMART & RELIABLE <br />
            <span className="text-[#FF8356]">BUILDING MANAGEMENT</span>{" "}
            SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
            At{" "}
            <span className="text-[#FF8356] font-semibold">
              Hitech Management
            </span>
            , we provide innovative and high-quality building management
            solutions. Our goal is to deliver flexible, fast, and customised
            frameworks that make every client’s project unique and future-ready.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-[#005F73] hover:bg-[#EAD8C0] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaPhoneAlt className="text-xl" />
              Get in Touch
            </Link>
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Feature
              icon={<FaBuilding className="text-3xl text-[#FF6F3C]" />}
              title="Building Management"
            />
            <Feature
              icon={<MdSecurity className="text-3xl text-[#FF8356]" />}
              title="Smart Security Systems"
            />
            <Feature
              icon={
                <MdOutlineDesignServices className="text-3xl text-[#FF8356]" />
              }
              title="Flexible Design Frameworks"
            />
            <Feature
              icon={<MdEngineering className="text-3xl text-[#FF8356]" />}
              title="Technical Expertise"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => {
            document.getElementById("footer").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="animate-bounce flex flex-col items-center cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-12 border-2 border-[#FF8356] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#FF8356] rounded-full mt-2 animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
    <div className="bg-[#FF6F3C]/20 p-4 rounded-full">{icon}</div>
    <span className="font-medium text-lg">{title}</span>
  </div>
);

export default HeroSection;
