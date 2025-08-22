import Link from "next/link";
import { FaAmbulance } from "react-icons/fa";

export default function EmergencyResponse() {
  return (
    <div className="mt-24 text-center bg-gray-900 p-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-6 font-anton uppercase">
          24/7 Emergency Traffic Management Response, Ready Within Hours
        </h3>
        <p className="text-lg text-gray-300 mb-8">
          We deploy certified traffic controllers and vehicles to your site with minimal notice. Ideal for breakdowns, incidents, storm damage or urgent road closures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+611300008782"
            className="inline-flex items-center justify-center bg-[#FF6F3C] text-white px-8 py-4 font-medium hover:bg-[#FF6F3C] transition-colors duration-300"
          >
            <FaAmbulance className="mr-3" />
            Call Emergency Dispatch Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 font-medium border border-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Learn About Our Response
          </Link>
        </div>
      </div>
    </div>
  );
}