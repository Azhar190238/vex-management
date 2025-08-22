"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const FleetSection = () => {
  return (
    <section className="w-full py-40 font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Image */}
          <div className="relative h-96 md:h-[500px] w-full">
            <Image
              src="/DSC00726.JPG"
              alt="T&S Traffic Control work site"
              fill
              className="object-cover rounded-xl shadow-lg"
              quality={100}
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-anton uppercase">
              An array of traffic management equipment
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#FF6F3C]">
              Fleet
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              T&S enhances site and road safety with a fully equipped fleet of certified traffic control vehicles, signage, and equipment. Our tools are tailored to meet the unique demands of every project, from roadwork and civil construction to emergency events.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our fleet includes traffic control utes, message boards, lights, signage and more — all maintained to the highest industry standard. From setup to pack-down, T&S ensures your site runs safely, smoothly and on schedule.
            </p>
            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Request a Quote
                <FaArrowRight className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;