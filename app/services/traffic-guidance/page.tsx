"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";

const TrafficGuidance = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opens]
      "
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00726.JPG"
            alt="Traffic Guidance Scheme"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton">
              T&S SERVICES <br />
              <span className="text-[#FF8356]">TRAFFIC GUIDANCE SCHEME</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Customized traffic management solutions designed to ensure safety
              and streamline operations at your worksite.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Reach Out Today
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

      {/* Traffic Control Importance Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Strategy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              CUSTOMIZED{" "}
              <span className="text-[#FF6F3C]">TRAFFIC MANAGEMENT</span>{" "}
              SOLUTIONS
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              Effective traffic management is critical in urban environments to
              prevent congestion and facilitate seamless commerce. Each worksite
              presents unique challenges, requiring a tailored traffic guidance
              scheme that meets its specific demands.
            </p>
            <p>
              T&S Traffic Control prioritizes the creation of bespoke traffic
              guidance plans to enhance safety for workers and minimize
              disruptions for the public. Our experienced team excels in
              developing and executing comprehensive traffic management
              strategies that deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Trust T&S Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton">
                Rely on T&S{" "}
                <span className="text-[#FF6F3C]">Traffic Control’s</span>{" "}
                Tailored Traffic Guidance
              </h3>
              <div className="space-y-5 text-gray-300 mb-10">
                <p className="leading-relaxed">
                  As a leading traffic management provider in Australia, T&S
                  Traffic Control is committed to delivering efficient solutions
                  that prioritize safety while reducing disruptions.
                </p>
                <p className="leading-relaxed">
                  We comply fully with the Traffic Control at Worksites (TCAWS)
                  Manual and Australian Standards, holding TfNSW G10
                  certification. Our team has contributed to major projects
                  across NSW, such as the Western Australia Recycled Water Pipeline
                  for Australia Water and the Australia Central Station and Viaduct
                  Restoration for Australia Trains. Our process ensures outstanding
                  outcomes:
                </p>
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    <strong>Consultation</strong> — We start with a thorough
                    consultation to grasp your project’s scope and safety
                    requirements.
                  </li>
                  <li>
                    <strong>Detailed Planning</strong> — Our experts craft
                    certified plans that outline the placement of signage,
                    devices, markings, cones, and speed limits.
                  </li>
                  <li>
                    <strong>Execution</strong> — During implementation, we
                    address any issues promptly and keep you informed, ensuring
                    safe navigation for all road users, workers, and pedestrians
                    around the worksite.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  With T&S Traffic Control, you receive clear, expertly designed
                  traffic guidance schemes without ambiguity or delays.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00836.JPG"
                alt="T&S Traffic Control Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00845.JPG"
                alt="Request a Quote"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Request a <span className="text-[#FF6F3C]">Quote Today!</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10">
                <p className="leading-relaxed">
                  Partner with T&S Traffic Control for dependable, expertly
                  crafted traffic guidance schemes that emphasize safety and
                  efficiency. Request a quote today to discover how we can
                  support your project with minimal disruption and full
                  regulatory compliance.
                </p>
                <p className="leading-relaxed">
                  Have questions? We’re here to provide answers—contact us to
                  discuss your needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              EXPLORE OUR <span className="text-[#FF6F3C]">OTHER SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Permit Applications",
                icon: <FaHardHat className="text-3xl" />,
                description:
                  "We manage the intricate process of obtaining traffic management permits from relevant authorities, ensuring your project complies with all regulations.",
              },
              {
                name: "Accredited Traffic Controllers",
                icon: <FaTrafficLight className="text-3xl" />,
                description:
                  "Our certified traffic controllers expertly manage vehicle and pedestrian flow around your site, maintaining stringent safety standards in all conditions.",
              },
              {
                name: "Equipment Hire",
                icon: <FaRoad className="text-3xl" />,
                description:
                  "We provide a diverse range of high-quality traffic management equipment for rent, including signs, barriers, and advanced tools to meet your project’s needs.",
              },
              {
                name: "Emergency Response Traffic Management",
                icon: <FaPhoneAlt className="text-3xl" />,
                description:
                  "Our 24/7 emergency response service quickly addresses unexpected traffic issues, deploying resources and expertise to manage disruptions effectively.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-black p-8 text-center border border-gray-800 hover:border-[#FF6F3C] transition-all duration-500 hover:shadow-lg hover:shadow-[#FF6F3C]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF6F3C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-[#FF6F3C] rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-[#FF6F3C] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mt-4 relative z-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrafficGuidance;
