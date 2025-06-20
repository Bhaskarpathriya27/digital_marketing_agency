// import HeroSection from "@/components/HeroSection";
// import BottomSection from "@/components/HeroSection";
import BottomSection from "@/components/Home/BottomSection";
import ConsultingSection from "@/components/Home/ConsultingSection";
import CTASection from "@/components/Home/CTASection";
import FAQSection from "@/components/Home/FAQSection";
import HeroSection from "@/components/Home/HeroSection";
import SegmentsSection from "@/components/Home/ServicesSection";
import TrustSection from "@/components/Home/TrustSection";

export default function Home() {
  return (
    <div className="m-0">
      {/* <HeroSection /> */}
      <HeroSection />
      <CTASection />
      <TrustSection />
      {/* <BottomSection /> */}
      <SegmentsSection />
      <ConsultingSection />
      <FAQSection />
    </div>
  );
}
