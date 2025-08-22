export default function IsoCertfied() {
  return (
    <section className="w-full  flex flex-col items-center justify-center bg-white py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 font-anton uppercase text-center text-[#FF6F3C] tracking-wide">
        We are ISO certified
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-6">
        <img
          src="/certified1.jpeg"
          alt="ISO Certified 1"
          className="w-full h-auto rounded-lg bg-white shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/certified2.jpeg"
          alt="ISO Certified 2"
          className="w-full h-auto rounded-lg bg-white shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/certified3.jpeg"
          alt="ISO Certified 3"
          className="w-full h-auto rounded-lg bg-white shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
