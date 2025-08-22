"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaRoad } from "react-icons/fa";

const About = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative h-[650px] w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service/3.JPG"
            alt="About T&S Traffic Control"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S TRAFFIC CONTROL <br />
              <span className="text-[#FF6F3C]">OUR STORY</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Learn about our dedication to safety, innovation, and excellence
              in traffic management solutions.
            </p>
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

      {/* Our Story Section (White Background) */}
      <section id="our-story" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Company
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              T&S TRAFFIC CONTROL <br />
              <span className="text-[#FF6F3C]">Trusted, Skilled, Secure</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              T&S Traffic Control has built a strong reputation as a leading
              provider of professional traffic management services. With years
              of industry experience, we've developed specialized expertise in
              creating comprehensive traffic solutions that meet strict safety
              standards while keeping projects moving efficiently.
            </p>
            <p>
              As a TfNSW certified company, we've successfully managed traffic
              for major infrastructure projects across New South Wales,
              including complex urban developments and critical transport
              network upgrades. Our team understands the unique challenges of
              maintaining safe traffic flow while minimizing disruption to the
              community.
            </p>
            <p>
              What sets us apart is our hands-on approach and commitment to
              building lasting relationships with our clients. We don't just
              implement traffic plans - we become trusted partners in our
              clients' projects. Our leadership team brings decades of combined
              experience to every job, ensuring we deliver practical solutions
              tailored to each project's specific requirements.
            </p>
            <p>
              When you choose T&S Traffic Control, you're choosing a partner
              dedicated to safety, reliability, and exceptional service. Our
              team takes pride in going beyond basic compliance to deliver
              innovative traffic solutions that add real value to your project.
              Contact us today to discuss how we can support your next
              development.
            </p>
          </div>
        </div>
      </section>

      {/* The T&S Difference Section */}
      <section id="our-team" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Our <span className="text-[#FF6F3C]">Team</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 text-lg">
                <p className="leading-relaxed">
                  Our team at T&S Traffic Control is composed of highly skilled
                  professionals with extensive experience in traffic management.
                  Each member is trained to handle complex scenarios, ensuring
                  safety and efficiency on every project.
                </p>
                <p className="leading-relaxed">
                  From certified traffic controllers to experienced project
                  managers, our team is dedicated to delivering exceptional
                  service. We pride ourselves on our collaborative approach,
                  working closely with clients to meet their specific needs.
                </p>
                <p className="leading-relaxed">
                  Our team members undergo continuous training to stay updated
                  with the latest industry standards and technologies, ensuring
                  we remain leaders in the field of traffic management.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
              >
                <span className="relative z-10">MEET OUR TEAM</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00838.JPG"
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Savanah Armstrong",
                role: "Client Relations Manager / HSEQ Officer",
                image: "/team/white-Photoroom (4).png",
              },
              {
                name: "Taj Rahman",
                role: "Managing Director",
                image: "/team/white-Photoroom (2).png",
              },
              {
                name: "Saadat Ahmed",
                role: "Co Director",
                image: "/team/white-Photoroom (3).png",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[300px] w-full mb-4 border-4 border-[#FF6F3C] shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
                </div>
                <h4 className="text-xl font-semibold text-[#FF6F3C]">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet Section (Black Background) */}
      <section id="our-fleet" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00849.JPG"
                alt="Our Fleet"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Our <span className="text-[#FF6F3C]">Fleet</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 text-lg">
                <p className="leading-relaxed">
                  We maintain a modern fleet of specialized traffic management
                  vehicles and equipment to handle projects of any scale. From
                  advanced attenuator trucks to portable traffic control
                  systems, our resources are meticulously maintained to ensure
                  reliability when you need it most.
                </p>
                <p className="leading-relaxed">
                  Our investment in technology extends beyond physical
                  equipment. We utilize the latest traffic management software
                  and planning tools to develop data-driven solutions that
                  optimize traffic flow while maintaining rigorous safety
                  standards.
                </p>
                <p className="leading-relaxed">
                  Our fleet is operated by skilled professionals who undergo
                  rigorous training to ensure they're equipped to handle the
                  evolving challenges of modern traffic management.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
              >
                <span className="relative z-10">VIEW OUR FLEET</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community Section */}
      <section id="our-community" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Community
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              WE <span className="text-[#FF6F3C]">GIVE BACK</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed space-y-6 text-center">
            <p>
              At T&amp;S, we believe that real success is built on the
              foundations of strong community ties. We’re proud to support local
              sporting clubs, helping young athletes chase their goals and stay
              connected through teamwork. We also stand alongside the Aboriginal
              community, recognising the deep cultural heritage and traditions
              that shape our country.
            </p>
            <p>
              Whether it’s sponsoring grassroots events or lending a hand to
              local initiatives, we’re committed to giving back and being part
              of something bigger than business.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations Section (White Background) */}
      <section id="accreditations" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              WE ARE{" "}
              <span className="text-[#FF6F3C]">ISO AND LGA CERTIFIED</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "ISO Certification",
                image: "/certified1.jpeg",
              },
              {
                name: "ISO Certification",
                image: "/certified2.jpeg",
              },
              {
                name: "ISO Certification",
                image: "/certified3.jpeg",
              },
              {
                name: "LGA Certification",
                image: "/footer1.png",
              },
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[150px] md:max-w-[250px] mx-auto w-full mb-4 border-4 border-[#FF6F3C]">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="h-[150px] md:max-w-[250px]"
                    priority
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#FF6F3C]">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
          <div>
            <p className="mt-8 text-gray-700 mx-auto text-lg leading-relaxed">
              T&S is proud to be ISO certified, a mark of our commitment to
              meeting the highest international standards for quality, safety,
              and operational excellence. ISO certification means our systems,
              processes, and services have been independently assessed and
              verified to comply with globally recognised benchmarks. For our
              clients, this provides confidence that every project we deliver is
              managed with precision, accountability, and consistency, ensuring
              safe, efficient, and reliable outcomes every time.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              OUR <span className="text-[#FF6F3C]">CAPABILITIES</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Truck Mounted Attenuators" },
              { name: "Cone Deployment Vehicles" },
              { name: "Mobile Traffic Control Units" },
              { name: "Advanced Warning Systems" },
              { name: "Portable Traffic Control Devices" },
              { name: "Temporary Lighting Solutions" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 text-center border border-gray-200 hover:border-[#FF6F3C] transition-all duration-500 hover:shadow-lg hover:shadow-[#FF6F3C]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF6F3C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-[#FF6F3C] rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    <FaRoad className="text-3xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-[#FF6F3C] transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
