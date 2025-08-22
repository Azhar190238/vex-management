"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
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
    <section id="contact-form" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
            <img
              src="/contact.webp"
              alt="Contact Us"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
              CONTACT <span className="text-[#FF6F3C]">US</span>
            </h3>
            <div className="space-y-5 text-gray-600 mb-10 font-opensans">
              <p className="leading-relaxed">
                Got any questions or comments? Don’t hesitate to call us at +61 1300 008 782 or fill out the form below, and we’ll get back to you
                promptly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
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
                    htmlFor="service"
                    className="block text-sm font-medium"
                  >
                    Select Service
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Traffic Management Plans">
                      Traffic Management Plans
                    </option>
                    <option value="Permit Applications">
                      Permit Applications
                    </option>
                    <option value="Accredited Traffic Controllers">
                      Accredited Traffic Controllers
                    </option>
                    <option value="Equipment Hire">Equipment Hire</option>
                    <option value="Emergency Response">
                      Emergency Response
                    </option>
                  </select>
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
                    required
                  />
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
                    {isLoading ? "Submitting..." : "SUBMIT"}
                  </span>
                  {!isLoading && (
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                  )}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-600">Form submitted successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600">
                    Error submitting form. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
