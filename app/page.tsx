import ClientsSection from "@/components/ClientsSection";
import ConnectWithUsSection from "@/components/ConnectWithUsSection";
import FAQsSection from "@/components/FAQSection";
import FleetSection from "@/components/FleetSection";
import HeroSection from "@/components/HeroSection";
// import IndustriesSection from "@/components/IndustriessSection";
import IsoCertfied from "@/components/IsoCertfied";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      {/* <IndustriesSection /> */}
      <StatsSection />
      {/* <FleetSection /> */}
      <TestimonialsSection />
      <WhyChooseSection />
      <FAQsSection />
      <ConnectWithUsSection />
      <IsoCertfied />
    </main>
  );
}
