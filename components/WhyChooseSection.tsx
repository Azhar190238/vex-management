"use client";

import Link from "next/link";
import { FaHardHat, FaUsers, FaShieldAlt, FaClock, FaTruck } from "react-icons/fa";
import CommonHeading from "./shared/common";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FaHardHat className="text-3xl text-[#FF8356]" />,
      title: "Extensive Experience",
      description:
        "With two decades in building and construction management, we bring unparalleled expertise to your projects, ensuring precision, efficiency, and reliability.",
    },
    {
      icon: <FaUsers className="text-3xl text-[#FF8356]" />,
      title: "Client-Centric Focus",
      description:
        "We prioritize your needs and project goals, tailoring our services to ensure a smooth, stress-free experience from start to finish.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#FF8356]" />,
      title: "Safety & Compliance",
      description:
        "Our team ensures every building project adheres to strict safety standards, delivering secure, compliant, and sustainable results.",
    },
    {
      icon: <FaClock className="text-3xl text-[#FF8356]" />,
      title: "24/7 Project Support",
      description:
        "From planning to maintenance, our team is available around the clock to handle urgent requests, changes, or oversight needs.",
    },
    {
      icon: <FaTruck className="text-3xl text-[#FF8356]" />,
      title: "Tailored Solutions & Modern Equipment",
      description:
        "We provide customized solutions with advanced equipment and technology to optimize building management efficiency and effectiveness.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Common Heading */}
        <CommonHeading
          icon={<FaHardHat className="text-3xl text-[#FF8356]" />}
          heading="Why Choose Our Building Management"
          description="We combine expertise, client focus, and state-of-the-art solutions to ensure every building project is executed safely, efficiently, and successfully."
          containerClassName="mb-16 text-center"
          headingClassName="text-3xl md:text-4xl font-bold"
          descriptionClassName="text-gray-600 text-lg md:text-xl mt-4"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              <div className="bg-gradient-to-r from-[#FF6F3C]/30 to-[#FF8356]/30 p-5 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Choosing us means working with a professional, safety-first, and highly responsive building management team. 
            Let us make your next project seamless and successful.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#FF6F3C] hover:bg-[#FF8356] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Get Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
