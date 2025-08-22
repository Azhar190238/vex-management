"use client";
import Link from 'next/link';
import { FaHardHat, FaUsers, FaShieldAlt, FaClock, FaTruck } from 'react-icons/fa';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FaHardHat className="text-3xl text-[#FF8356]" />,
      title: 'Extensive Experience',
      description: 'With two decades in traffic control, we bring a wealth of experience to the table, having successfully managed diverse projects. This expertise means that we understand the intricacies of traffic control like no other.',
    },
    {
      icon: <FaUsers className="text-3xl text-[#FF8356]" />,
      title: 'Client-Centric Focus',
      description: 'Our unwavering commitment to client satisfaction is the cornerstone of our services. We put your needs and preferences first to ensure your project’s success and your peace of mind.',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#FF8356]" />,
      title: 'Safety Above All',
      description: 'Safety is paramount to us. Our dedicated team of a highly trained team of accredited professionals prioritises the safety of every worker, contractor and road user on site.',
    },
    {
      icon: <FaClock className="text-3xl text-[#FF8356]" />,
      title: 'Round-the-Clock Availability',
      description: 'We operate 24/7, providing you with the assurance that we’re here whenever you need us. This commitment to flexibility ensures your project is always on track.',
    },
    {
      icon: <FaTruck className="text-3xl text-[#FF8356]" />,
      title: 'Tailored Solutions & Cutting-Edge Fleet',
      description: 'We offer custom traffic solutions backed by a fleet of modern, fully-equipped vehicles fitted with the latest safety tech, ensuring efficiency and compliance with Australian Standards.',
    },
  ];

  return (
    <section className="w-full py-16 font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-anton uppercase">
          Why Choose T&S Traffic Control
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed mb-12">
          When it comes to selecting a dependable traffic control company in Australia, T&S is the trusted name in the industry. Here’s what sets us apart compared to other Australia traffic management providers:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-[#FF6F3C]/20 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Text and CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            By choosing T&S, you’re opting for a level of professionalism, safety and responsiveness that sets the benchmark in the traffic control industry. Trust us to keep your Australia project moving — safely and without delays.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Get a Personalised Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;