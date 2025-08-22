"use client";
import Image from "next/image";

const TestimonialsSection = () => {
  // Placeholder client logos (replace with actual paths in your project)
  const clientLogos = [
    {
      name: "adco",
      src: "https://placehold.co/100x100/transparent/000000?text=ADCO",
    },
    {
      name: "sydney-water",
      src: "https://placehold.co/100x100/transparent/000000?text=Sydney+Water",
    },
    {
      name: "ugl",
      src: "https://placehold.co/100x100/transparent/000000?text=UGL",
    },
    {
      name: "transport-nsw",
      src: "https://placehold.co/100x100/transparent/000000?text=Transport+NSW",
    },
    {
      name: "transport-sydney",
      src: "https://placehold.co/100x100/transparent/000000?text=Transport+Sydney",
    },
    {
      name: "john-holland",
      src: "https://placehold.co/100x100/transparent/000000?text=John+Holland",
    },
    {
      name: "veolia",
      src: "https://placehold.co/100x100/transparent/000000?text=Veolia",
    },
    {
      name: "buildcorp",
      src: "https://placehold.co/100x100/transparent/000000?text=Buildcorp",
    },
    {
      name: "laing-orourke",
      src: "https://placehold.co/100x100/transparent/000000?text=Laing+O'Rourke",
    },
  ];

  const testimonials = [
    {
      logo: "/client logos/D&M Logo.png",
      quote: `T&S Traffic Control provided excellent service to our project. Their planning, punctuality, and professionalism were impressive. The team was well-prepared, courteous, and ensured clear communication throughout.
`,
      author: "Bob M",
      company: "D&M",
    },
    {
      logo: "/client logos/EMO Civil Logo.avif",
      quote: `T&S Traffic Control have provided great service to us at EMO Civil over the years. We have always found them to be willing to help with advice and solutions. We have no hesitation in recommending them.
`,
      author: "Michael K",
      company: "EMO Civil",
    },
    {
      logo: "/client logos/QMC Logo.jpeg",
      quote: `T&S have been our go to Traffic Management team for years, and we'll never look further. Highly recommend them`,
      author: "Gerard W",
      company: "QMC",
    },
  ];

  return (
    <section className="w-full py-16 bg-white font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Introductory Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-anton uppercase">
            Providing Services to Industrial Sectors and Government Divisions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a leading Australia traffic control company, we've had the
            privilege of partnering with clients across various industries, many
            of which are a household name. Check out some of the reviews from
            businesses we've worked with since we first opened our doors.
          </p>
        </div>

        {/* Testimonials Heading */}
        <h3 className="text-2xl md:text-3xl font-semibold text-[#FF6F3C] text-center mb-10">
          Client Testimonials
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-center text-base leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              {/* <p className="text-[#FF6F3C] font-semibold">
                {testimonial.author}
              </p> */}
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
