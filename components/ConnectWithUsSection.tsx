"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaPhoneAlt } from "react-icons/fa";

const ConnectWithUsSection = () => {
  return (
    <section className="relative w-full py-20 md:py-24 min-h-screen flex items-center font-opensans">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSC00810.JPG"
          alt="Traffic control background"
          fill
          className="object-cover opacity-50"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: Connect With Us Today */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anton uppercase">
                Connect With Us Today
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
                Get in touch to discuss your traffic control needs with our
                experienced team. We're ready to help you find fast, compliant,
                and cost-effective solutions to keep your site safe and your
                project running on time.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FF8356]"
            >
              <FaPhoneAlt className="text-lg" />
              Request a Call Back
            </Link>
          </div>

          {/* Right Card: Let T&S Manage Your Next Project */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anton uppercase">
                Let T&S Manage Your Next Project
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
                Need reliable traffic management for your next project? T&S
                offers end-to-end traffic control services. Our experienced team
                handles custom Traffic Control Plans, council permits, and
                certified on-site controllers. Download our capability statement
                to learn more about how we can manage your project.
              </p>
            </div>
            <Link
              href="/T&S Capability Statement  2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300
              text-xs md:text-base
              "
            >
              <FaFileDownload className="text-lg" />
              See the Attached Capability Statement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsSection;
