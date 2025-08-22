"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt } from 'react-icons/fa';

const PermitApplication = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
            alt="Permit Application Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AAA <span className="text-[#FF8356]">SERVICES</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Streamlined permit application services for your project’s success
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-3 bg-[#FF6F3C] hover:bg-[#FF6F3C] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
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

      {/* Council and Traffic Control Permit Application (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              COUNCIL AND TRAFFIC CONTROL <span className="text-[#FF6F3C]">PERMIT APPLICATION</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              Manage your upcoming project with confidence with AAA Traffic. At AAA Traffic Control, we understand that obtaining the necessary council permits can be a complex and time-consuming process. That’s why we offer a council permit application service designed to help our clients obtain the required permits and approvals quickly and efficiently. Our team of experts has extensive knowledge and experience in obtaining council permits for a variety of projects, including roadworks, events, and construction sites.
            </p>
            <p>
              We will work closely with you to understand your specific needs and requirements and provide you with a tailored solution that meets your project’s needs. Our team will assist you by preparing all the necessary documentation and liaising with the relevant authorities to ensure that your council permit is approved as quickly as possible.
            </p>
            <p>
              At AAA Traffic Control, we pride ourselves on our relationships with the local Councils, TMC, and other relevant road stakeholders. We ensure that all necessary council permits and approvals are in place before we begin any work. With our council and traffic control permit application service, you can be confident that your project will comply with all relevant regulations and requirements. Contact us today to find out how we can help you obtain the necessary council permits for your project.
            </p>
          </div>
        </div>
      </section>

      {/* TfNSW TMC ROL Approval (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                TfNSW TMC <span className="text-[#FF6F3C]">ROL Approval</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10">
                <p className="leading-relaxed">
                  If your project requires a Traffic Management Centre (TMC) Road Occupancy License (ROL) permit, our team at AAA Traffic Control can assist you with the traffic control permit application process. We have extensive experience in preparing, submitting, and obtaining ROL permits, and we work with you to ensure all necessary documentation and approvals are obtained in a timely and efficient manner. We understand the critical importance of maintaining compliance and safety during road work projects for businesses. However, that doesn’t mean obtaining traffic control permits should be difficult.
                </p>
                <p className="leading-relaxed">
                  Our aim is to take the hassle out of the traffic control permit application process, allowing you to focus on your project. Contact us today to find out how we can help with your permit application needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="TfNSW TMC ROL Approval"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Permits (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="Council Permits"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Council <span className="text-[#FF6F3C]">Permits</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10">
                <p className="leading-relaxed">
                  When it comes to matters of public safety, staying within the bounds of compliance is non-negotiable. If your project requires a council permit for traffic control, the planning team at AAA Traffic Control can assist you with the entire process. We have a thorough understanding of the requirements of Local Councils, and we work closely with them to obtain the necessary council permits for your project. While many types of permits can leave you guessing which permit is the right one for your site, at AAA we navigate this minefield for you and obtain the proper permit for your project.
                </p>
                <p className="leading-relaxed">
                  Here is a list of some of the different types of permits your site may need and that we have obtained for our clients:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Local approval (section 68)</li>
                  <li>Section 138 Roads Act approval</li>
                  <li>Application to use a public place for construction activities under Section 45, Public Unleased Land Act 2013</li>
                  <li>Roads act application</li>
                  <li>Parking permit</li>
                  <li>Works on Council property</li>
                  <li>Work zone permit</li>
                  <li>Road occupancy and standing plant permit</li>
                  <li>Road opening permit</li>
                  <li>Road occupation permit</li>
                  <li>Road lane and footpath closure permit</li>
                  <li>Road closure permit</li>
                  <li>Work activities on council sites</li>
                  <li>Temporary road closures</li>
                  <li>Long-term road closures</li>
                  <li>Major works permit</li>
                  <li>Minor works permit</li>
                  <li>Full road closures</li>
                  <li>Temporary full road closures</li>
                  <li>Temporary roadside (short-term) closure or works zone</li>
                  <li>Stand / operate plant permit</li>
                  <li>Access through or occupy public space permit</li>
                  <li>Public domain work permit</li>
                  <li>Occupation of footpath/roadway permit</li>
                  <li>Hoarding, scaffolding and other temporary structures permit</li>
                  <li>Installations of temporary hoardings, safety fences and articles in a public place</li>
                  <li>Carry out building work outside standard permitted hours</li>
                  <li>Permit to stand plant</li>
                  <li>Footpath occupation permit</li>
                  <li>Road occupation permit</li>
                  <li>Temporary works permit</li>
                  <li>Speed zone authorisation</li>
                  <li>Mobile hoisting permit</li>
                  <li>Mobile hoisting devices operating from a road/footway application</li>
                  <li>Placing a mobile crane/plant in a public place permit</li>
                  <li>Night works approval</li>
                  <li>Out-of-hours work application</li>
                  <li>Road, footpath or car park occupancy permit</li>
                  <li>Temporary access over community land permit</li>
                  <li>Hoist or pump materials across footway or stand plant on public roadway permit</li>
                  <li>Road management approval</li>
                  <li>Open and occupy or underbore a roadway or footpath</li>
                </ul>
                <p className="leading-relaxed">
                  Depending on the type of permit or the council, the time it takes to obtain the relevant permit can range from 1 day to 3 months. If you would like an accurate answer, please contact our office and we will let you know.
                </p>
                <p className="leading-relaxed">
                  Our team will handle all aspects of the council permit application process, including preparing and submitting the application, liaising with Council officials, notifying the local community of the upcoming works and obtaining the necessary approvals in a timely manner. With AAA Traffic Control on your side, you can have peace of mind knowing that your project will comply with all the necessary regulations and requirements. Contact us today to learn more about how we can help you obtain the council permits needed for your traffic control needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STA Bus Approvals (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                STA Bus <span className="text-[#FF6F3C]">Approvals</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10">
                <p className="leading-relaxed">
                  When applying for a Traffic Management Centre (TMC) Road Occupancy License (ROL) permit, sometimes State Transit Authority (STA) approvals are required. This is typically for works that may affect State roads or public transport routes. Traditionally, business owners have needed to check whether their project intersects with these areas to ensure all necessary approvals are secured in advance. However, the experienced team at AAA Traffic Control does all the heavy lifting.
                </p>
                <p className="leading-relaxed">
                  At AAA Traffic Control, we have extensive experience in obtaining STA approvals and we work closely with them to resolve any issues they may have about the proposed works.
                </p>
                <p className="leading-relaxed">
                  Our team of expert consultants will review your individual traffic management plan and identify any potential issues that may require STA approval. We will then liaise with the STA to obtain the necessary approvals and ensure that your project can proceed as smoothly as possible. Our aim is to take the hassle out of the permit traffic control permit application process and allow you to focus on your project.
                </p>
                <p className="leading-relaxed">
                  If you have any questions or concerns regarding obtaining STA approvals or any other council permit relevant to your project, please don’t hesitate to contact us at +61 1300 008 782. We are here to help you navigate the council permit application process and ensure your project is a success.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="STA Bus Approvals"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Approvals (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="Emergency Service Approvals"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Emergency Service <span className="text-[#FF6F3C]">Approvals</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10">
                <p className="leading-relaxed">
                  When it comes to obtaining council permits for traffic control, sometimes Police permits from the local area of command (LAC) are required. Failing to do so could result in significant fines and disruptions to your project, as police oversight is crucial for maintaining public safety and order during such operations. At AAA Traffic Control, we have experience in handling this process and we are here to help you obtain the necessary approvals.
                </p>
                <p className="leading-relaxed">
                  Our team will submit an application to the LAC on your behalf and work with them to resolve any issues they may have with the proposed works. Our aim is to make the traffic control permit application process as smooth and stress-free as possible, allowing you to focus on your project. Contact us today to find out more about our services and how we can help with your council permit application needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Get in Touch for <span className="text-[#FF6F3C]">Permit Application Support</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10">
                <p className="leading-relaxed">
                  Ready to streamline your permit application process? Contact AAA Traffic Control to learn more about how our services can ensure your project complies with all necessary regulations and approvals.
                </p>
                <p className="leading-relaxed">
                  Have questions or concerns? Feel free to contact us at +61 1300 008 782 to discuss your permit needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PermitApplication;