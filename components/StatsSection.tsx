"use client";
import { useEffect, useRef, useState } from "react";
import { FaAward, FaProjectDiagram, FaUserTie } from "react-icons/fa";

const useCounter = (end: number, duration: number = 2000, trigger: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return; // only run when visible

    let start = 0;
    const increment = Math.ceil(end / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration, trigger]);

  return count;
};

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // reset when leaving section
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experience = useCounter(10, 2000, visible);
  const employees = useCounter(60, 2000, visible);
  const projects = useCounter(12600, 2000, visible);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6f0fa]/20 via-[#e6f0fa]/80 via-50% to-[#e6f0fa]/20 opacity-100"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Years Experience */}
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 hover:border-[#FF6F3C]/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#FF8356] to-[#FF6F3C] text-white rounded-full shadow-md">
                  <FaAward className="text-2.4xl" />
                </div>
              </div>
              <h3 className="text-6xl font-bold text-[#FF6F3C] mb-3">
                {experience}+
              </h3>
              <p className="text-xl font-semibold text-gray-800">Years Experience</p>
            </div>
          </div>

          {/* Employees */}
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 hover:border-[#FF6F3C]/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#FF8356] to-[#FF6F3C] text-white rounded-full shadow-md">
                  <FaUserTie className="text-2.4xl" />
                </div>
              </div>
              <h3 className="text-6xl font-bold text-[#FF6F3C] mb-3">{employees}</h3>
              <p className="text-xl font-semibold text-gray-800">Employee's</p>
            </div>
          </div>

          {/* Projects */}
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 hover:border-[#FF6F3C]/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#FF8356] to-[#FF6F3C] text-white rounded-full shadow-md">
                  <FaProjectDiagram className="text-2.4xl" />
                </div>
              </div>
              <h3 className="text-6xl font-bold text-[#FF6F3C] mb-3">
                +{projects.toLocaleString()}
              </h3>
              <p className="text-xl font-semibold text-gray-800">Projects Completed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
