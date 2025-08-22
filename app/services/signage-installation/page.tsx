"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const SignageInstallation = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00723.JPG"
            alt="Signage Installation for Traffic Control"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S <span className="text-[#FF8356]">SIGNAGE</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Professional signage installation ensuring safe and efficient traffic control systems
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-[#FF8356] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#FF8356] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              TRAFFIC CONTROL <span className="text-[#FF6F3C]">SIGNAGE INSTALLATION</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Control, we provide complete signage installation services that ensure traffic safety and compliance with regulations. From temporary construction sites to permanent installations, our signage guarantees clarity, durability, and proper visibility for all road users.
            </p>
            <p>
              Our certified professionals handle every aspect of signage installation — planning, placement, mounting, and compliance checks. We ensure each sign is strategically positioned to guide vehicles and pedestrians safely while minimizing disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Signage Planning Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Signage <span className="text-[#FF6F3C]">Planning & Placement</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Before installation, our team conducts a detailed assessment of the site to determine the most effective signage strategy. This includes the placement of speed limit signs, warning signs, directional boards, and barrier signage to ensure maximum visibility and safety.
                </p>
                <p className="leading-relaxed">
                  We comply with Australian Standards and TCAWS guidelines to guarantee every signage installation meets legal and safety requirements.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00811.JPG"
                alt="Signage Planning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Signage Installation Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00849.JPG"
                alt="Signage Installation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Professional <span className="text-[#FF6F3C]">Installation</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p>
                  Our installation team uses state-of-the-art tools and equipment to mount traffic signs securely in any environment. We ensure that every installation is durable, weather-resistant, and aligned with road safety standards.
                </p>
                <p>
                  From temporary worksites to permanent fixtures, we provide end-to-end signage solutions that guarantee smooth traffic flow and public safety.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">GET A QUOTE</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Get in Touch for <span className="text-[#FF6F3C]">Signage Solutions</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p>
                  Need professional signage installation for your next project? Contact us today to ensure compliance, safety, and smooth traffic control.
                </p>
                <p>
                  Our team is ready to provide tailored solutions for any size project — from construction zones to permanent installations.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">CONTACT US</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00949.JPG"
                alt="Signage Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default SignageInstallation;
