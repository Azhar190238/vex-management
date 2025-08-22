"use client";

const FAQsSection = () => {
  return (
    <section className="w-full py-16 font-opensans bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-anton">
          FAQ&apos;s
        </h2>
        <a
          href="/faqs"
          className="inline-block px-8 py-4 bg-[#FF6F3C] text-white rounded-lg shadow-lg font-semibold text-lg hover:bg-[#FF6F3C] transition-colors"
        >
          See the Frequently Asked Questions
        </a>
      </div>
    </section>
  );
};

export default FAQsSection;
