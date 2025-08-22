"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
type Category = "Telecom" | "Crane" | "Construction" | "Civil";

const categories: Record<Category, string[]> = {
  Telecom: [
    "/jobs/1.webp",
    "/jobs/2.webp",
    "/jobs/3.webp",
    "/jobs/4.webp",
    "/jobs/5.webp",
    "/jobs/6.webp",
    "/jobs/7.webp",
    "/jobs/8.webp",
    "/jobs/9.webp",
    "/jobs/10.webp",
    "/jobs/11.webp",
    "/jobs/12.webp",
    "/jobs/13.webp",
    "/jobs/14.webp",
    "/jobs/15.webp",
  ],
  Crane: [
    "/jobs/16.webp",
    "/jobs/17.webp",
    "/jobs/18.webp",
    "/jobs/19.webp",
    "/jobs/20.webp",
    "/jobs/21.webp",
    "/jobs/22.webp",
    "/jobs/23.webp",
    "/jobs/24.webp",
    "/jobs/25.webp",
    "/jobs/26.webp",
    "/jobs/27.webp",
  ],
  Construction: [
    "/jobs/28.png",
    "/jobs/29.png",
    "/jobs/30.jpg",
    "/jobs/31.jpg",
    "/jobs/32.jpg",
    "/jobs/33.jpg",
    "/jobs/34.jpg",
  ],
  Civil: [
    "/jobs/7.webp",
    "/jobs/8.webp",
    "/jobs/9.webp",
    "/jobs/10.webp",
    "/jobs/11.webp",
    "/jobs/12.webp",
    "/jobs/13.webp",
    "/jobs/14.webp",
    "/jobs/15.webp",
  ],
};

const PhotoGallery = () => {
  const [activeTab, setActiveTab] = useState<Category>("Telecom");

  return (
    <section className="py-10 px-5 mx-auto">
      <Head>
        <title>Gallery | Photos</title>
        <meta
          name="description"
          content="Professional permit application services for TfNSW, council permits, STA bus approvals, and emergency approvals."
        />
      </Head>
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/DSC00732.JPG"
            alt="Permit Application Services"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Gallery | Photos
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Streamlined permit applications for all your traffic management
            needs.
          </p>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex max-w-7xl mx-auto justify-start gap-4 my-8 flex-wrap">
        {(Object.keys(categories) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              activeTab === cat
                ? "bg-[#FF6F3C] text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories[activeTab].map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-48 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`${activeTab} image ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
