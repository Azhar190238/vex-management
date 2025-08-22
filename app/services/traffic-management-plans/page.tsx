"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const TrafficManagementPlansPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service/1.webp"
            alt="Traffic Management Plans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S SERVICES <br />
              <span className="text-[#FF8356]">TRAFFIC MANAGEMENT PLANS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Customised, compliant traffic management plans for safe and
              efficient project delivery across Australia.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Get a Quote
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

      {/* Why TMPs Matter */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              WHY TRAFFIC MANAGEMENT PLANS{" "}
              <span className="text-border-[#FF6F3C]">MATTER</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Every project site is unique and requires a tailored approach to
              traffic management. Our Traffic Management Plans (TMPs) are
              designed to ensure the safety of workers, road users, and the
              public, while maintaining compliance with all relevant Australian
              Standards and local regulations.
            </p>
            <p>
              T&S Traffic Control’s certified professionals work closely with
              you to assess your site, identify risks, and develop a
              comprehensive TMP that covers every phase of your project—from
              initial setup to completion.
            </p>
          </div>
        </div>
      </section>

      {/* Our TMP Process */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                OUR <span className="text-[#FF6F3C]">PROCESS</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    <strong>Consultation:</strong> We begin with a thorough
                    assessment of your project’s scope, site layout, and safety
                    requirements.
                  </li>
                  <li>
                    <strong>Custom Plan Design:</strong> Our experts use
                    advanced tools like RapidPlan and Nearmap to create clear,
                    compliant TMPs, including signage, barriers, and traffic
                    flow strategies.
                  </li>
                  <li>
                    <strong>Implementation & Monitoring:</strong> We oversee the
                    setup and ongoing management, making real-time adjustments
                    as needed to keep your site safe and efficient.
                  </li>
                  <li>
                    <strong>Compliance:</strong> All plans are developed in
                    accordance with the Traffic Control at Worksites (TCAWS)
                    Manual and Australian Standards.
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/service/process.webp"
                alt="Traffic Management Plan Process"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00847.JPG"
                alt="TMP Benefits"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                THE <span className="text-[#FF6F3C]">BENEFITS</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <ul className="list-disc list-inside space-y-3">
                  <li>Minimise risk and enhance safety for all site users</li>
                  <li>Ensure compliance with all regulatory requirements</li>
                  <li>Reduce project delays and costly disruptions</li>
                  <li>
                    Clear communication and coordination for all stakeholders
                  </li>
                  <li>Support for permit applications and council approvals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                READY FOR A <span className="text-[#FF6F3C]">SAFE PROJECT?</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p>
                  Partner with T&S Traffic Control for expertly crafted Traffic
                  Management Plans that keep your project safe, compliant, and
                  on schedule. Our team is ready to support you from planning
                  through to completion.
                </p>
                <p>
                  Contact us today to discuss your requirements or request a
                  quote.
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
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00811.JPG"
                alt="Contact T&S Traffic Control"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Download Sample TMP Button (Bottom of Page) */}
      <section className="py-12 bg-white text-center">
        <a
          href="/TSTGS%202562%20-%20Stage%201%20-%20Bore%20Holing%20-%20Lynch%20St,%20Young.pdf"
          download
          className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans rounded-lg text-lg shadow-md"
        >
          Download a Sample TMP
          <span className="absolute inset-0 bg-[#FF6F3C]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
        </a>
      </section>
      <ContactForm />
    </main>
  );
};

export default TrafficManagementPlansPage;
