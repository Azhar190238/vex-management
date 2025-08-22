"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import CommonHeading from "./shared/common";

const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: "/client logos/D&M Logo.png",
      quote: `T&S Traffic Control provided excellent service to our project. Their planning, punctuality, and professionalism were impressive. The team was well-prepared, courteous, and ensured clear communication throughout.`,
      author: "Bob M",
      company: "D&M",
    },
    {
      logo: "/client logos/EMO Civil Logo.avif",
      quote: `T&S Traffic Control have provided great service to us at EMO Civil over the years. We have always found them to be willing to help with advice and solutions. We have no hesitation in recommending them.`,
      author: "Michael K",
      company: "EMO Civil",
    },
    {
      logo: "/client logos/QMC Logo.jpeg",
      quote: `T&S have been our go-to Traffic Management team for years, and we'll never look further. Highly recommend them.`,
      author: "Gerard W",
      company: "QMC",
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50 font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Common Heading */}
        <CommonHeading
          icon={<FaStar className="text-[#FF6F3C] text-3xl" />}
          heading="Client Testimonials"
          subheading="Trusted by Industry Leaders"
          description="We are proud to have partnered with clients across various industries and government divisions. See what they say about our reliable and innovative services."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#FF6F3C]"
            >
              <div className="relative w-28 h-28 mb-6">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  fill
                  className="object-contain z-20 relative"
                />
              </div>

              <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              <p className="text-gray-900 font-semibold text-center">{testimonial.author}</p>
              <p className="text-gray-500 text-sm mt-1">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
