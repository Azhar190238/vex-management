"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaBuilding,
  FaFileAlt,
  FaUserShield,
  FaTools,
  FaCogs,
} from "react-icons/fa";
// import nHeading from "../common/CommonHeading";
import EmergencyResponse from "./EmergencyResponse";
import CommonHeading from "./shared/common";
import { GrServices } from "react-icons/gr";
import { Meteors } from "./magicui/meteors";

const ServicesSection = () => {
  const services = [
    {
      title: "Building Management",
      icon: <FaBuilding className="text-3xl" />,
      link: "/service/1.webp",
    },
    {
      title: "Permit & Compliance",
      icon: <FaFileAlt className="text-3xl" />,
      link: "/service/2.JPG",
    },
    {
      title: "Smart Security Systems",
      icon: <FaUserShield className="text-3xl" />,
      link: "/service/3.JPG",
    },
    {
      title: "Equipment & Tools",
      icon: <FaTools className="text-3xl" />,
      link: "/service/4.jpg",
    },
    {
      title: "Technical Expertise",
      icon: <FaCogs className="text-3xl" />,
      link: "/service/5.jpg",
    },
    {
      title: "Custom Solutions",
      icon: <FaBuilding className="text-3xl" />,
      link: "/service/6.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Common Heading */}
        <CommonHeading
          icon={<GrServices className="text-[#FF6F3C] text-3xl" />}
          heading="OUR SERVICES"
          subheading=" Building Management Solutions"
          description="We provide innovative, reliable, and high-quality building management solutions tailored for each client’s unique needs. From planning and compliance to smart systems and technical expertise, we have you covered."
        />

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={service.title}
              className="group relative h-[420px] overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:border-[#FF6F3C] transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
               
                <Image
                  src={service.link}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                  quality={60}
                />
                <Meteors number={70} className="absolute inset-0 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-white text-center">
                <div className="mb-6 p-5 bg-[#FF6F3C] rounded-full flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <span className="flex items-center gap-2 text-white hover:text-[#FF8356] font-medium transition-colors group/link cursor-pointer">
                  <span className="border-b border-transparent group-hover/link:border-white pb-1 transition-all">
                    Learn More
                  </span>
                  <FaChevronRight className="text-xs transition-transform group-hover/link:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <EmergencyResponse />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
