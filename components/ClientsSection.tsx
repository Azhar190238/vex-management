"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CommonHeading from "./shared/common";
import { FaBuilding } from "react-icons/fa";

const ClientsSection = () => {
  const logos = [
    { src: "/client logos/1.jpeg", alt: "D&M Logo" },
    { src: "/client logos/2.webp", alt: "QMC Logo" },
    { src: "/client logos/3.jpeg", alt: "EMO Civil Logo" },
    { src: "/client logos/4.png", alt: "Stateline LOGO" },
    { src: "/client logos/5.webp", alt: "Impact Cranes Logo" },
    { src: "/client logos/6.jpg", alt: "TQM Logo" },
    { src: "/client logos/7.avif", alt: "D&M Logo" },
    { src: "/client logos/8.jpeg", alt: "QMC Logo" },
    { src: "/client logos/9.jpeg", alt: "EMO Civil Logo" },
    { src: "/client logos/10.jpeg", alt: "Stateline LOGO" },
    { src: "/client logos/11.jpg", alt: "Impact Cranes Logo" },
    { src: "/client logos/12.png", alt: "TQM Logo" },
    { src: "/client logos/13.jpg", alt: "D&M Logo" },
    { src: "/client logos/14.png", alt: "QMC Logo" },
    { src: "/client logos/15.webp", alt: "EMO Civil Logo" },
    { src: "/client logos/16.jpeg", alt: "Stateline LOGO" },
    { src: "/client logos/17.png", alt: "Impact Cranes Logo" },
  ];
  const duplicatedLogos = [...logos, ...logos];
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let position = 0;
    const speed = 1;

    const animate = () => {
      if (!paused) {
        position -= speed;
        if (position <= -container.scrollWidth / 2) {
          position = 0;
        }
        container.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [paused]);

  return (
    <section className="pt-16">
      <div className="mx-auto px-6 lg:px-8">
         <CommonHeading
          icon={<FaBuilding className="text-[#FF6F3C] text-3xl" />}
          heading="OUR CLIENTS"
          description="“We proudly partner with top construction and engineering clients, delivering innovative, reliable, and high-quality building management solutions.”"
        />
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={containerRef} className="flex items-center py-4">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 mx-0 lg:mx-4 hover:grayscale-0 transition-all duration-300"
                style={{
                  width: "180px",
                  height: "100px",
                  position: "relative",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
