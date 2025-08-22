"use client";

import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PermitApplication = () => {
  const [activeTab, setActiveTab] = useState("tf-nsw");

  return (
    <>
      <Head>
        <title>Permit Application Services | T&S Traffic Solutions</title>
        <meta
          name="description"
          content="Professional permit application services for TfNSW, council permits, STA bus approvals, and emergency approvals."
        />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
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
              Permit Application Services
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Streamlined permit applications for all your traffic management
              needs.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:flex lg:items-start lg:gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("tf-nsw")}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "tf-nsw"
                      ? "bg-blue-50 text-[#FF6F3C]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  TfNSW TMC ROL Approval
                </button>
                <button
                  onClick={() => setActiveTab("council-permits")}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "council-permits"
                      ? "bg-blue-50 text-[#FF6F3C]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Council Permits
                </button>
                <button
                  onClick={() => setActiveTab("sta-bus")}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "sta-bus"
                      ? "bg-blue-50 text-[#FF6F3C]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  STA Bus Approvals
                </button>
                <button
                  onClick={() => setActiveTab("emergency-approvals")}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "emergency-approvals"
                      ? "bg-blue-50 text-[#FF6F3C]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Emergency Approvals
                </button>
              </nav>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-[#FF6F3C] mb-4">
                  Contact Information
                </h3>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href="tel:+611300008782"
                      className="text-[#FF6F3C] hover:underline"
                    >
                      +61 1300 008 782
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">Careers Email:</span>{" "}
                    <a
                      href="mailto:HR@Tstc.com.au"
                      className="text-[#FF6F3C] hover:underline"
                    >
                      HR@Tstc.com.au
                    </a>{" "}
                    <span className="text-xs text-gray-500">
                      (Careers page only)
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#FF6F3C] hover:bg-[#FF6F3C]"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* TfNSW TMC ROL Approval */}
              {activeTab === "tf-nsw" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    TfNSW TMC ROL Approval
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      Transport for NSW (TfNSW) Traffic Management Committee
                      (TMC) Road Occupancy License (ROL) approvals are essential
                      for any work that impacts state roads.
                    </p>

                    <div className="mt-8 grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Our Services Include:
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Complete ROL application preparation</li>
                          <li>Traffic Management Plan development</li>
                          <li>Liaison with TfNSW representatives</li>
                          <li>Risk assessment and mitigation strategies</li>
                          <li>Approval tracking and follow-up</li>
                        </ul>
                      </div>
                      <div>
                        <Image
                          src="/DSC00845.JPG"
                          alt="TfNSW Permit Process"
                          width={500}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Why Choose Us for Your TfNSW Approvals?
                      </h3>
                      <p>
                        With years of experience working directly with TfNSW, we
                        understand the specific requirements and expectations of
                        the TMC. Our team maintains excellent relationships with
                        key contacts, helping to streamline the approval
                        process.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Council Permits */}
              {activeTab === "council-permits" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Council Permits
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      Local council permits are required for any work that
                      impacts local roads, footpaths, or public spaces. Each
                      council has its own requirements and processes.
                    </p>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Our Council Permit Services:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            Comprehensive Coverage:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Road occupancy permits</li>
                            <li>Footpath closures</li>
                            <li>Hoarding permits</li>
                            <li>Works zone applications</li>
                            <li>Parking bay suspensions</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            Benefits:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Knowledge of all Australian council requirements
                            </li>
                            <li>Fast turnaround times</li>
                            <li>Direct council relationships</li>
                            <li>Problem-solving for complex applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-[#FF6F3C] mb-4">
                        Council Approval Timeline
                      </h3>
                      <p>
                        Standard council permits typically require 10-15
                        business days for approval. We recommend submitting
                        applications at least 3 weeks before your planned works
                        to account for any requests for additional information.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STA Bus Approvals */}
              {activeTab === "sta-bus" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    STA Bus Approvals
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      Work near bus stops, lanes, or routes requires special
                      approval from State Transit Authority (STA) to minimize
                      disruption to public transport services.
                    </p>

                    <div className="mt-8 grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          STA Approval Process:
                        </h3>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Initial assessment of bus impact</li>
                          <li>Development of bus management plan</li>
                          <li>Coordination with STA operations team</li>
                          <li>Submission of required documentation</li>
                          <li>Implementation of approved measures</li>
                        </ol>
                      </div>
                      <div>
                        <Image
                          src="/DSC00862.JPG"
                          alt="STA Bus Approval Process"
                          width={500}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Considerations:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Peak Hours
                          </h4>
                          <p>
                            Work affecting bus operations during peak hours
                            (6-9am and 3-7pm) requires additional mitigation
                            measures.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Stop Relocations
                          </h4>
                          <p>
                            Temporary bus stop relocations must provide
                            equivalent accessibility and safety features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Emergency Approvals */}
              {activeTab === "emergency-approvals" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Emergency Approvals
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      When unexpected situations require immediate traffic
                      management solutions, we provide rapid response permit
                      applications for emergency works.
                    </p>

                    <div className="mt-8">
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <Link href="tel:+611300008782">
                          <h3 className="text-lg font-medium text-red-800">
                            Emergency Hotline: +61 1300 008 782
                          </h3>
                        </Link>
                        <p className="text-red-700">
                          Available 24/7 for urgent permit requirements.
                        </p>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Emergency Approval Scenarios:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            Infrastructure Failures
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Water main breaks</li>
                            <li>Gas leaks</li>
                            <li>Electrical outages</li>
                            <li>Bridge damage</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            Natural Events
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Flood damage repairs</li>
                            <li>Storm response</li>
                            <li>Bushfire access</li>
                            <li>Landslip remediation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Our Emergency Response Process:
                      </h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Immediate assessment of the situation</li>
                        <li>Development of emergency traffic plan</li>
                        <li>Direct contact with approval authorities</li>
                        <li>Same-day permit acquisition</li>
                        <li>Implementation of traffic control measures</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#FF6F3C]">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Ready to streamline your permit process?
              </span>
              <span className="block text-blue-200">
                Contact our permit specialists today.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#FF6F3C] bg-white hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>


        <ContactForm />
      </div>
    </>
  );
};

export default PermitApplication;
