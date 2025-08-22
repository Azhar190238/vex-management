"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";

interface FormData {
  firstName: string;
  familyName: string;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  suburb: string;
  message: string;
  canDriveManual: string;
  hasOwnVehicle: string;
  qualifications: string[];
}

const JobOpportunities = () => {
  const initialFormData: FormData = {
    firstName: "",
    familyName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    suburb: "",
    message: "",
    canDriveManual: "",
    hasOwnVehicle: "",
    qualifications: [],
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      qualifications: checked
        ? [...prev.qualifications, value]
        : prev.qualifications.filter((q) => q !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    const submitData = new FormData();
    submitData.append("firstName", formData.firstName);
    submitData.append("familyName", formData.familyName);
    submitData.append("phoneNumber", formData.phoneNumber);
    submitData.append("email", formData.email);
    submitData.append("streetAddress", formData.streetAddress);
    submitData.append("suburb", formData.suburb);
    submitData.append("message", formData.message);
    submitData.append("canDriveManual", formData.canDriveManual);
    submitData.append("hasOwnVehicle", formData.hasOwnVehicle);
    formData.qualifications.forEach((q) => submitData.append("qualifications[]", q));

    if (fileRef.current && fileRef.current.files) {
      for (let file of fileRef.current.files) {
        submitData.append("files", file);
      }
    }

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(initialFormData);
        if (fileRef.current) {
          fileRef.current.value = "";
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/carrer.webp"
            alt="Job Opportunities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S <span className="text-[#FF8356]">CAREERS</span> <br />
              <span className="text-[#FF8356]">TRAFFIC CONTROL JOBS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Join our dynamic team to ensure road safety and efficient traffic
              management
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-[#FF8356] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#FF8356] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Working with T&S Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Culture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              WORKING WITH <span className="text-[#FF6F3C]">T&S</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-600 mb-6 font-opensans">
              Join a Team Committed to Safety and Excellence
            </h3>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Solutions, you’ll join a vibrant team dedicated to
              ensuring road safety and smooth traffic flow. From major roadworks
              to small construction sites, our diverse projects offer
              opportunities for growth and skill development.
            </p>
            <p>
              We foster a supportive and collaborative environment that values
              innovation and job satisfaction. Our team, including traffic
              controllers, team leaders, TMA drivers, and spotters, shares a
              passion for excellence in traffic management.
            </p>
            <p>
              If you’re driven to make a difference in road safety, explore our
              job opportunities and apply today to become part of T&S Traffic
              Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Employment Opportunities Section (Black Background, Right Side Image) */}
      <section
        id="employment-opportunities"
        className="py-24 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                EMPLOYMENT <span className="text-[#FF6F3C]">OPPORTUNITIES</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  We’re looking for passionate individuals to join our team. To
                  succeed, you’ll need:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Current and valid driver’s license (C Class)</li>
                  <li>Construction Induction Course (White Card)</li>
                  <li>RIISS00054 - Traffic Controller Skill Set</li>
                  <li>RIISS00055 - Traffic Management Implementer Skill Set</li>
                  <li>
                    RIISS00056 - Traffic Management Designer Skill Set
                    (Optional, Red Card and Supervisor experience highly
                    desirable)
                  </li>
                  <li>
                    TMA Drivers: Minimum 24 months traffic management
                    experience, 6 months TMA driving experience (highly
                    desirable but not mandatory)
                  </li>
                  <li>
                    Basic reading and writing skills to interpret road traffic
                    diagrams and regulations
                  </li>
                  <li>
                    Clear communication skills in English, including via radio
                  </li>
                  <li>Ability to work effectively in a team environment</li>
                </ul>
                <p className="leading-relaxed">
                  Contact our office between 9am-5pm at +61 1300 008 782 or apply
                  through Indeed.
                </p>
                <a
                  href="tel:+611300008782"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">Call now</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </a>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/emplyee.webp"
                alt="Employment Opportunities"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Application Form Section (White Background, Left Side Image) */}
      <section id="application-form" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                EMPLOYMENT <span className="text-[#FF6F3C]">APPLICATION</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="familyName"
                        className="block text-sm font-medium"
                      >
                        Family Name
                      </label>
                      <input
                        type="text"
                        name="familyName"
                        id="familyName"
                        value={formData.familyName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="streetAddress"
                      className="block text-sm font-medium"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="suburb"
                      className="block text-sm font-medium"
                    >
                      Suburb
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      id="suburb"
                      value={formData.suburb}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Upload Cover Letter, Resume, Drivers License, Traffic
                      Control Tickets
                    </label>
                    <input
                      type="file"
                      multiple
                      ref={fileRef}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Can you competently drive a manual vehicle?
                    </label>
                    <div className="mt-2 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canDriveManual"
                          value="Yes"
                          checked={formData.canDriveManual === "Yes"}
                          onChange={handleInputChange}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canDriveManual"
                          value="No"
                          checked={formData.canDriveManual === "No"}
                          onChange={handleInputChange}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Do you have your own vehicle to get to and from site or
                      our depot?
                    </label>
                    <div className="mt-2 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="hasOwnVehicle"
                          value="Yes"
                          checked={formData.hasOwnVehicle === "Yes"}
                          onChange={handleInputChange}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="hasOwnVehicle"
                          value="No"
                          checked={formData.hasOwnVehicle === "No"}
                          onChange={handleInputChange}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Please select below which qualifications you have
                    </label>
                    <div className="mt-2 space-y-2">
                      {[
                        "Automatic Drivers Licence",
                        "Manual Drivers Licence",
                        "Operate TMA Card and HR Licence",
                        "OHS Induction (White Card)",
                        "Traffic Controller (Blue Card)",
                        "Implementer (Yellow Card)",
                        "PWZTMP (Red Card)",
                      ].map((qual) => (
                        <label key={qual} className="block">
                          <input
                            type="checkbox"
                            value={qual}
                            checked={formData.qualifications.includes(qual)}
                            onChange={handleCheckboxChange}
                            className="form-checkbox"
                          />
                          <span className="ml-2">{qual}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white hover:text-[#FF6F3C]"
                    }`}
                  >
                    <span className="relative z-10">
                      {isLoading ? "Submitting..." : "SUBMIT APPLICATION"}
                    </span>
                    {!isLoading && (
                      <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-600">Application submitted successfully!</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600">
                      Error submitting application. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="/DSC00850.JPG"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                CONTACT US FOR{" "}
                <span className="text-[#FF6F3C]">CAREER OPPORTUNITIES</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to start your career with T&S Traffic Solutions? Contact
                  us to learn more about our exciting opportunities in traffic
                  management.
                </p>
                <p className="leading-relaxed">
                  Have questions? Reach out at +61 1300 008 782, Monday to Friday,
                  9am-5pm.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">GET IN TOUCH</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobOpportunities;