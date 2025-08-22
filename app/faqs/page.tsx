"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is a TGS & When do you need it?",
    answer:
      "A TGS (Traffic Guidance Scheme) is a detailed plan that outlines how traffic will be managed around a worksite or event. You need a TGS whenever your project impacts normal traffic flow, such as during roadworks, construction, or events that require lane closures or detours.",
  },
  {
    question: "When is a CTMP required?",
    answer:
      "A CTMP (Construction Traffic Management Plan) is required when construction activities impact public roads, footpaths, or traffic flow. Councils or road authorities typically require a CTMP for major developments, crane lifts, or any works that may disrupt normal traffic or pedestrian movement.",
  },
  {
    question: "What is a ROL?",
    answer:
      "A ROL (Road Occupancy Licence) is a permit issued by the relevant road authority that allows you to occupy part of a road or lane for construction, maintenance, or events. You need a ROL whenever your activities require the use of public road space.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:min-h-[400px] w-full flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="FAQs Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-anton uppercase mb-4 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-opensans drop-shadow">
            Find answers to common questions about traffic management, permits,
            and our services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 font-opensans bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-anton">
            FAQ&apos;s
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left text-gray-900 font-semibold text-lg hover:bg-blue-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#FF6F3C]" />
                  ) : (
                    <FaChevronDown className="text-[#FF6F3C]" />
                  )}
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-content-${index}`}
                    className="p-6 pt-0 text-gray-700 leading-relaxed border-t border-blue-100 bg-blue-50"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
