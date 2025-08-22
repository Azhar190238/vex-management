"use client";

import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt } from 'react-icons/fa';

const TrafficControllers = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service/3.JPG"
            alt="Accredited Traffic Controllers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S <span className="text-[#FF8356]">SERVICES</span> <br />
              <span className="text-[#FF8356]">ACCREDITED TRAFFIC CONTROLLERS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Expert, TfNSW-accredited traffic controllers ensuring safety and efficiency for your project
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

      {/* TfNSW Accredited Staff Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              TfNSW ACCREDITED <span className="text-[#FF6F3C]">STAFF</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-600 mb-6 font-opensans">
              Highly Skilled Professionals for Safe Traffic Management
            </h3>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Solutions, we take pride in our team of TfNSW-accredited professionals, including Traffic Controllers, Team Leaders, TMA drivers, and spotters. Each member is rigorously trained to deliver safe and efficient traffic management across diverse project types.
            </p>
            <p>
              Our staff undergo continuous training to stay updated with the latest industry standards and best practices, ensuring top-tier service. Whether it’s a major construction project or a small roadwork site, you can rely on T&S Traffic Solutions for professional, compliant traffic management.
            </p>
          </div>
        </div>
      </section>

      {/* Accredited Traffic Controllers Section (Black Background, Right Side Image) */}
      <section id="traffic-controllers" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                ACCREDITED TRAFFIC <span className="text-[#FF6F3C]">CONTROLLERS</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Our TfNSW-accredited traffic controllers are highly trained professionals dedicated to ensuring safe and efficient traffic flow. Equipped with the latest tools and qualifications, they handle a wide range of scenarios, from minor roadworks to large-scale construction projects.
                </p>
                <p className="leading-relaxed">
                  With a focus on minimizing disruptions and maintaining safety, our controllers continuously update their skills to meet industry advancements. Trust T&S Traffic Solutions for reliable, expert traffic management tailored to your project’s needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/controllers.webp"
                alt="Accredited Traffic Controllers"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Team Leaders Section (White Background, Left Side Image) */}
      <section id="team-leaders" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/team.webp"
                alt="Experienced Team Leaders"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                EXPERIENCED TEAM <span className="text-[#FF6F3C]">LEADERS</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Our team leaders are highly skilled, TfNSW-accredited professionals with extensive experience in managing traffic for projects of all sizes. They oversee operations, ensuring safety, efficiency, and compliance with industry standards.
                </p>
                <p className="leading-relaxed">
                  Working closely with clients, our leaders tailor traffic management plans to meet specific project needs, ensuring all equipment and signage are in place. Their expertise and ongoing support guarantee your project runs smoothly and safely.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Mounted Attenuator Operators Section (Black Background, Right Side Image) */}
      <section id="tma-operators" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                TRUCK MOUNTED ATTENUATOR <span className="text-[#FF6F3C]">OPERATORS</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Solutions employs highly experienced Truck Mounted Attenuator (TMA) operators with a minimum of two years’ experience and TfNSW accreditation. Holding Heavy Rigid licenses, our operators are equipped to handle complex traffic control scenarios with precision.
                </p>
                <p className="leading-relaxed">
                  Our TMA operators ensure your work site remains safe and compliant, providing peace of mind for even the most challenging projects. Contact us at +61 1300 008 782 to discuss your TMA operator needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00943.JPG"
                alt="Truck Mounted Attenuator Operators"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              EXPLORE OUR <span className="text-[#FF6F3C]">OTHER SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Traffic Management Plans",
                icon: <FaHardHat className="text-3xl" />,
                description: "Customized plans designed to ensure safety and efficiency, tailored to your project’s unique requirements.",
              },
              {
                name: "Permit Applications",
                icon: <FaTrafficLight className="text-3xl" />,
                description: "Streamlined permit application services for hassle-free project compliance with councils and authorities.",
              },
              {
                name: "Equipment Hire",
                icon: <FaRoad className="text-3xl" />,
                description: "Access a wide range of high-quality traffic management equipment, including signs, barriers, and more.",
              },
              {
                name: "Emergency Response",
                icon: <FaPhoneAlt className="text-3xl" />,
                description: "Our 24/7 emergency response service addresses unexpected traffic issues with rapid deployment and expertise.",
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
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-[#FF6F3C] transition-colors duration-300 font-opensans">
                  {service.name}
                </h3>
                <p className="text-gray-300 mt-4 relative z-10 font-opensans">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00850.JPG"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                CONTACT US FOR <span className="text-[#FF6F3C]">TRAFFIC MANAGEMENT SOLUTIONS</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to enhance your project’s safety with our accredited traffic controllers? Contact T&S Traffic Solutions to discuss how our expert team can meet your traffic management needs.
                </p>
                <p className="leading-relaxed">
                  Have questions? Reach out at 1300 008 782 to explore our services.
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

      {/* FAQ Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              FREQUENTLY ASKED <span className="text-[#FF6F3C]">QUESTIONS</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              For more details on our traffic control services or other offerings, visit our FAQ page or contact us directly to discuss your project’s requirements.
            </p>
            <div className='flex justify-center'>
              <Link
              href="/faqs"
              className="inline-block px-10 py-4  bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
            >
              <span className="relative z-10">VIEW FAQs</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
            </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default TrafficControllers;