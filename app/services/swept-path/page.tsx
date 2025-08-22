"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const TrafficControlManagement = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00723.jpg"
            alt="Traffic Control Management and Planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S SERVICES<br />
              <span className="text-[#FF8356]">Swept Path Analysis</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Comprehensive traffic control management and planning tailored to
              your project’s needs
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

      {/* Traffic Guidance Schemes & Management Plans (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              TRAFFIC GUIDANCE SCHEMES &{" "}
              <span className="text-[#FF6F3C]">MANAGEMENT PLANS</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              To ensure safe and efficient traffic flow at your worksite, look
              no further than T&S Traffic Control. Our team of expert project
              managers are accredited traffic control management and planning
              specialists and are highly experienced in designing comprehensive
              traffic guidance schemes and traffic management plans tailored to
              your unique scope of work. These certified traffic management
              plans detail the precise locations of all necessary signage,
              devices, markings, barriers, and speed limit variables, ensuring
              seamless coordination and effective traffic management.
            </p>
            <p>
              Don’t compromise the safety or success of your upcoming project.
              Give yourself peace of mind with a detailed and professional
              construction traffic management plan. Learn more about the traffic
              management planning services available through T&S Traffic Control
              today.
            </p>
          </div>
        </div>
      </section>

      {/* Traffic Guidance Scheme (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Traffic Guidance{" "}
                <span className="text-[#FF6F3C]">Scheme (TGS)</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  At T&S Traffic Control, we understand that effective traffic
                  planning and guidance schemes are crucial to ensure worksite
                  safety and minimise disruptions to the general public. Our
                  team of experienced professionals specialises in designing and
                  implementing comprehensive traffic management planning
                  strategies tailored to your specific requirements.
                </p>
                <p className="leading-relaxed">
                  Our process begins with an in-depth consultation to help us
                  understand the scope of your project and any relevant safety
                  concerns. We then use our expertise to design a certified plan
                  that details the location of all necessary signage, devices,
                  markings, traffic cones and speed limit variables. Our traffic
                  control management and planning services ensure all road
                  users, including workers and pedestrians, are directed and
                  managed safely through, past or around the work area. With T&S
                  Traffic Control, there are no questions or second-guessing —
                  just clear, straightforward and expertly drafted traffic
                  management planning.
                </p>
                <p className="leading-relaxed">
                  Our team of accredited project managers work closely in line
                  with all relevant regulations, including the Traffic Control
                  at Worksites (TCAWS) Manual and Australian Standards, giving
                  you added assurance that your traffic management planning
                  strategy is compliant.
                </p>
                <p className="leading-relaxed">
                  We take pride in providing high-quality traffic planning and
                  guidance schemes which are effective, efficient and tailored
                  to your needs. With T&S Traffic Control, you can have peace of
                  mind knowing your project will be completed safely and
                  smoothly, with minimal disruptions to the public and your
                  site.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00811.JPG"
                alt="Traffic Guidance Scheme"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00849.JPG"
                alt="Traffic Management Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Traffic Management{" "}
                <span className="text-[#FF6F3C]">Plan (TMP)</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  At T&S Traffic Control, we understand that every work site and
                  project has its unique requirements and demands and,
                  therefore, requires specific and personalised traffic control
                  management and traffic planning. Our team of experienced and
                  certified project managers can develop a comprehensive Traffic
                  Management Plan (TMP) tailored to your specific scope of work.
                  Our team works collaboratively with you to identify the
                  specific traffic control management and planning needs of your
                  project and design a plan that complies with all relevant
                  Australian Standards, Codes of Practice and legislative
                  requirements.
                </p>
                <p className="leading-relaxed">
                  Attention to detail is one of our strong suits when it comes
                  to traffic management planning. Our TMPs include a detailed
                  analysis of potential traffic hazards, the development of
                  traffic control strategies and the design of specific measures
                  to mitigate those hazards. Our project managers consider all
                  relevant factors, including traffic volume, speed limits, site
                  constraints and pedestrian access, when designing a TMP.
                </p>
                <p className="leading-relaxed">
                  We use state-of-the-art technology, including RapidPlan and
                  Nearmap software to produce detailed traffic management
                  planning documents that are clear and easy to follow. We also
                  work closely with local councils, regulatory authorities and
                  stakeholders to ensure your TMP complies with all necessary
                  requirements and can be implemented and approved seamlessly.
                </p>
                <p className="leading-relaxed">
                  Our commitment to safety means that we prioritise the safety
                  of all workers, road users and pedestrians during the
                  implementation of our TMPs. We ensure that all our traffic
                  control management and traffic planning measures are clearly
                  marked and visible. Our experienced traffic controllers work
                  diligently to ensure that traffic flows smoothly and safety is
                  maintained at all times.
                </p>
                <Link
                  href="/traffic-management-plan"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">READ MORE</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Construction Traffic Management{" "}
                <span className="text-[#FF6F3C]">Plan (CTMP)</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Given their nature, construction traffic management planning
                  requires a professional and keen eye. At T&S Traffic Control,
                  we understand the importance of proper traffic control
                  management and traffic planning on construction sites to
                  ensure the safety of workers and the public. That’s why we
                  offer construction traffic management plans tailored to your
                  specific project requirements.
                </p>
                <p className="leading-relaxed">
                  Our team of experienced traffic control management and traffic
                  planning professionals will work with you to design a
                  comprehensive construction traffic management plan that
                  considers all aspects of your construction site. This includes
                  identifying potential hazards, assessing traffic volumes and
                  patterns and determining the appropriate traffic control
                  measures needed to ensure the safe and efficient traffic flow.
                </p>
                <p className="leading-relaxed">
                  We use the latest technology and equipment to provide accurate
                  and detailed construction traffic management planning
                  strategies, including the location of all signage, devices,
                  markings, barriers and speed limit variables. Our plans are
                  also fully compliant with the TCAWS Manual and Australian
                  Standards, ensuring you can rely on us for a safe and
                  efficient traffic management solution.
                </p>
                <p className="leading-relaxed">
                  At T&S Traffic Control, we are committed to providing our
                  clients with the highest level of service in traffic control
                  management and traffic planning. Our team will work closely
                  with you throughout the project to ensure that your
                  construction traffic management planning is implemented
                  effectively and efficiently. We will provide a solution that
                  ensures the safety of your workers and the public.
                </p>
                {/* <Link
                  href="/construction-traffic-management-plan"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">READ MORE</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link> */}
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00845.JPG"
                alt="Construction Traffic Management Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Swept Path Analysis (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00717.JPG"
                alt="Swept Path Analysis"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Swept Path{" "}
                <span className="text-[#FF6F3C]">Analysis (SPA)</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Control provides professional swept path analysis
                  services across Australia to ensure your project’s vehicle
                  movements are safe and compliant. Swept path analysis is
                  essential for assessing how vehicles—especially large or
                  articulated ones—navigate through constrained sites,
                  intersections, or construction zones.
                </p>
                <p className="leading-relaxed">
                  Using advanced software, our experienced team simulates and
                  analyses the turning paths of various vehicles based on their
                  dimensions and your site layout. This process helps identify
                  potential conflicts, clearance issues, and optimises site
                  access for construction, delivery, or emergency vehicles.
                </p>
                <p className="leading-relaxed">
                  Our swept path analysis service includes detailed diagrams and
                  recommendations to ensure compliance with Australian Standards
                  and local authority requirements. We help you minimise risk,
                  avoid costly design changes, and ensure the safety of all road
                  users and workers.
                </p>
                <p className="leading-relaxed">
                  Contact T&S Traffic Control today to discuss your swept path
                  analysis requirements and ensure your project in Australia is
                  delivered safely and efficiently.
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

      {/* Vehicle Movement Plan (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Vehicle Movement{" "}
                <span className="text-[#FF6F3C]">Plan (VMP)</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  If you’re working with a series of vehicles for your upcoming
                  project, staying organised with a vehicle management plan is
                  non-negotiable. T&S Traffic Control can provide expertly
                  designed and customised vehicle management plans to meet your
                  specific project requirements, ensuring that traffic
                  management planning is fully integrated. Our team has
                  extensive knowledge and experience in designing and
                  implementing effective vehicle management plans to ensure
                  smooth and safe movement for all vehicles on construction
                  sites and events.
                </p>
                <p className="leading-relaxed">
                  Our accredited project managers will work closely with you to
                  assess your project needs and design a comprehensive vehicle
                  management plan that includes the necessary signage, markings
                  and other necessary devices to guide vehicles through your
                  work site. We understand the importance of a proper vehicle
                  management plan in minimising the risk of accidents, delays
                  and disruptions. We are dedicated to providing practical and
                  efficient traffic management planning solutions that meet
                  Australian Standards and TCAWS guidelines.
                </p>
                <p className="leading-relaxed">
                  At T&S Traffic Control, we take a proactive approach to
                  vehicle management planning. We conduct thorough site
                  inspections to identify potential hazards and assess the
                  suitability of proposed vehicle routes. This allows us to
                  develop a comprehensive vehicle management plan that
                  effectively addresses all potential risks and ensures a safe
                  and smooth traffic flow. Our experienced and qualified traffic
                  controllers will also be on hand to provide on-site
                  management, ensuring that your vehicle management plan is
                  executed seamlessly.
                </p>
                <p className="leading-relaxed">
                  Choose T&S Traffic Control for all your vehicle management
                  planning and traffic management planning needs, and rest
                  assured that your project will be completed safely and
                  efficiently.
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
                src="/DSC00852.JPG"
                alt="Vehicle Movement Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00949.JPG"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Get in Touch for{" "}
                <span className="text-[#FF6F3C]">
                  Tailored Traffic Solutions
                </span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to ensure your project’s success with optimal safety and
                  efficiency? Contact T&S Traffic Control to learn more about
                  how our traffic management plans can serve your specific
                  needs.
                </p>
                <p className="leading-relaxed">
                  Have questions or concerns? Feel free to contact us.
                </p>
              </div>
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
      </section>
         <ContactForm/>
    </main>
  );
};

export default TrafficControlManagement;
