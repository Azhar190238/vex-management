"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const EventManagementPlansPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00862.JPG"
            alt="Event Management Plans"
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
              <span className="text-[#FF6F3C]">EVENT MANAGEMENT PLANS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Professional event traffic management plans for safe, seamless,
              and successful events across Australia.
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
            <div className="w-8 h-12 border-2 border-[#FF6F3C] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#FF6F3C] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Event TMPs Matter */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              WHY EVENT TRAFFIC MANAGEMENT PLANS{" "}
              <span className="text-[#FF6F3C]">MATTER</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Large and small events require careful planning to ensure the
              safety of attendees, staff, and the general public. Our Event
              Traffic Management Plans (TMPs) are tailored to your event’s
              unique requirements, ensuring smooth access, efficient parking,
              and safe pedestrian and vehicle movement.
            </p>
            <p>
              T&S Traffic Control’s experienced team works with you and local
              authorities to develop compliant, effective plans for festivals,
              concerts, sporting events, parades, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Our Event TMP Process */}
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
                    <strong>Consultation:</strong> We assess your event’s scale,
                    location, and unique needs.
                  </li>
                  <li>
                    <strong>Custom Plan Design:</strong> Our team creates
                    detailed, compliant plans for traffic flow, parking,
                    signage, and crowd management.
                  </li>
                  <li>
                    <strong>Stakeholder Coordination:</strong> We liaise with
                    councils, police, and emergency services to ensure seamless
                    approvals and operations.
                  </li>
                  <li>
                    <strong>On-the-Day Support:</strong> Our accredited
                    controllers and supervisors manage traffic and respond to
                    real-time challenges.
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/service/process.webp"
                alt="Event Management Process"
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
                alt="Event TMP Benefits"
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
                  <li>Enhance safety for attendees, staff, and the public</li>
                  <li>Streamline vehicle and pedestrian movement</li>
                  <li>Minimise congestion and delays</li>
                  <li>
                    Meet council and police requirements for event approval
                  </li>
                  <li>Reduce risk and ensure a positive event experience</li>
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
                PLAN YOUR{" "}
                <span className="text-[#FF6F3C]">SUCCESSFUL EVENT</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p>
                  Trust T&S Traffic Control for event management plans that keep
                  your event safe, compliant, and running smoothly. Our team is
                  ready to support you from planning to pack-down.
                </p>
                <p>
                  Contact us today to discuss your event or request a quote.
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
      <ContactForm />
    </main>
  );
};

export default EventManagementPlansPage;
