"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt } from 'react-icons/fa';

const TfNSWAccreditedStaff = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
            alt="TfNSW Accredited Staff"
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
              Expert TfNSW accredited staff for safe and professional traffic management
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

      {/* TfNSW Accredited Staff (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              TFNSW ACCREDITED <span className="text-[#FF6F3C]">STAFF</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6F3C] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              At AAA Traffic Control, we take pride in our team of highly skilled and accredited professionals. Our Traffic Controllers, Team Leaders, TMA drivers, and spotters are all accredited by TfNSW, ensuring they have the knowledge and expertise to safely manage traffic in a range of situations.
            </p>
            <p>
              Our team members undergo regular training and updates to ensure they are up-to-date with the latest industry standards and best practices. We understand the importance of having a competent and reliable team when it comes to traffic management, and that’s why we only hire the best in the business.
            </p>
            <p>
              Whether you require traffic management services for a large construction project or a small roadwork site, you can trust our team to provide the highest level of service and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Accredited Traffic Controllers (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Accredited Traffic <span className="text-[#FF6F3C]">Controllers</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10">
                <p className="leading-relaxed">
                  Our team of accredited traffic controllers are highly trained professionals who are committed to providing safe and efficient traffic management solutions. We ensure that all of our traffic controllers have completed the necessary training and hold current qualifications from TfNSW, allowing them to carry out their duties in accordance with industry standards and regulations.
                </p>
                <p className="leading-relaxed">
                  Our traffic controllers have a wealth of experience in a wide range of traffic management scenarios, from small-scale roadworks to major construction projects. They are equipped with the latest traffic control equipment and are constantly updating their skills and knowledge to stay ahead of industry advancements.
                </p>
                <p className="leading-relaxed">
                  At AAA Traffic Control, we understand the importance of having skilled and reliable traffic controllers on site. That’s why we take great care in selecting and training our team to ensure that they have the expertise and confidence to manage traffic safely and efficiently, while minimising disruption to road users.
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
                alt="Accredited Traffic Controllers"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Team Leaders (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#FF6F3C] shadow-xl">
              <Image
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="Experienced Team Leaders"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Experienced Team <span className="text-[#FF6F3C]">Leaders</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10">
                <p className="leading-relaxed">
                  We would like to highlight that our team includes highly experienced and skilled leaders who have extensive knowledge in traffic management. They are responsible for overseeing and managing the traffic control requirements for our clients' projects, ensuring that they are completed safely, efficiently, and to the highest standard.
                </p>
                <p className="leading-relaxed">
                  Our experienced team leaders are well-versed in traffic management and have successfully managed traffic in diverse settings, ranging from large-scale roadworks to smaller construction sites. They have undergone rigorous training and are fully accredited by TfNSW, which ensures they have the knowledge and skills required to manage traffic safely and effectively.
                </p>
                <p className="leading-relaxed">
                  Our team leaders work closely with our clients to develop a greater understanding of the site's specific requirements for each project. They ensure that our traffic controllers are fully briefed and all necessary equipment and signage is in place before work commences. Throughout the project, our team leaders provide ongoing support and guidance to our traffic controllers to ensure the project is completed to the highest standard.
                </p>
                <p className="leading-relaxed">
                  We take great pride in the expertise of our team leaders and are confident their experience and knowledge will ensure your project is completed safely, on time, and efficiently.
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

      {/* Truck Mounted Attenuator Operators (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Truck Mounted Attenuator <span className="text-[#FF6F3C]">Operators</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10">
                <p className="leading-relaxed">
                  At AAA Traffic Control, we only employ highly skilled and experienced truck mounted attenuator (TMA) operators who possess a minimum of 2 years of experience in performing traffic control on work sites. In addition, our operators are required to have a Heavy Rigid license and TMA accreditation from TfNSW. This ensures that our team is equipped with the necessary knowledge and expertise to handle even the most complex traffic control situations.
                </p>
                <p className="leading-relaxed">
                  With our experienced and accredited TMA operators, you can trust that your work site will be safe and compliant with all relevant regulations.
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
                alt="Truck Mounted Attenuator Operators"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
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
                src="https://aaatrafficcontrol.com.au/wp-content/uploads/2023/06/Pod-Truck-Lane-Closure-Night-scaled.jpg"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#FF6F3C]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#FF6F3C]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Get in Touch for <span className="text-[#FF6F3C]">Accredited Traffic Solutions</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10">
                <p className="leading-relaxed">
                  Ready to ensure your project’s success with our TfNSW accredited staff? Contact AAA Traffic Control to learn more about how our professional team can deliver safe and efficient traffic management solutions.
                </p>
                <p className="leading-relaxed">
                  Have questions or concerns? Feel free to contact us to discuss your traffic management needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#FF6F3C] text-white font-bold hover:bg-white hover:text-[#FF6F3C] transition-all duration-300 border border-[#FF6F3C] group relative overflow-hidden"
                >
                  <span className="relative z-10">GET A QUOTE</span>
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

export default TfNSWAccreditedStaff;