import Image from "next/image";
import Link from "next/link";
import {
  FaBuilding,
  FaBolt,
  FaCalendarAlt,
  FaLandmark,
  FaAmbulance,
  FaTrain,
} from "react-icons/fa";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Civil and Construction",
      icon: <FaBuilding className="text-3xl" />,
    },
    {
      name: "Utilities",
      icon: <FaBolt className="text-3xl" />,
    },
    {
      name: "Special Events",
      icon: <FaCalendarAlt className="text-3xl" />,
    },
    {
      name: "Local and Federal Government",
      icon: <FaLandmark className="text-3xl" />,
    },
    {
      name: "Emergency Services",
      icon: <FaAmbulance className="text-3xl" />,
    },
    {
      name: "Rail and Road Projects",
      icon: <FaTrain className="text-3xl" />,
    },
  ];

  return (
    <section className="py-24 bg-black text-white font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Industries Header */}
        <div className="text-center mb-20">
          <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
            Industries We Service
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We provide traffic control solutions across a wide range of industries and sectors throughout New South Wales.
          </p>
          <div className="w-24 h-1  bg-[#FF6F3C] hover:bg-[#FF6F3C] mx-auto"></div>
        </div>

        {/* Industries Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-black p-8 text-center border border-gray-800 hover:border-[#FF6F3C] transition-all duration-500 hover:shadow-lg hover:shadow-[#FF6F3C]/20"
            >
              <div className="flex justify-center mb-6">
                <div className="p-5  bg-[#FF6F3C] hover:bg-[#FF6F3C] rounded-full">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-[#FF6F3C] transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1  bg-[#FF6F3C] hover:bg-[#FF6F3C]"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
              <span className=" text-[#FF6F3C]">Our Mission</span>: Safe, Compliant and Ready When You Are
            </h3>
            <h4 className="text-base font-semibold leading-relaxed text-gray-300 mb-6">
              We help contractors, councils and companies meet their traffic management obligations with precision and zero delays.
            </h4>
            <div className="space-y-5 text-gray-300 mb-10">
              <p className="leading-relaxed">
                We provide fully accredited traffic management solutions that prioritise safety, reliability and compliance. Our services are tailored to meet the demands of high-volume civil works, utility projects, road closures, events and emergency deployments.
              </p>
              <p className="leading-relaxed">
                Led by experienced operators, our team handles everything from traffic control planning and permit applications to on-site crews and equipment setup. We make it easy for contractors and project managers to stay compliant without delays or surprises.
              </p>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Click below to learn how we can provide assurance of safety and compliance for your traffic management needs.
            </p>
            <Link
              href="/about"
              className="inline-block px-10 py-4  bg-[#FF6F3C]  text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
            >
              <span className="relative z-10">Learn How We Work</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl lg:block hidden">
            <Image
              src="/DSC00807.JPG"
              alt="Traffic Control Team in Action"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;