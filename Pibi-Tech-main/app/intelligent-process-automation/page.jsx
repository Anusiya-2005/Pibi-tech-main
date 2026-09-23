import { CTASection } from "@/components/prod/CTASection";
import { ExploreSection } from "@/components/prod/ExploreSection";
import { FinanceBankingSection } from "@/components/prod/FinanceSection";
import { HealthcareSection } from "@/components/prod/HealthCareSection";
import { HeroSection } from "@/components/prod/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <HeroSection />
      <ExploreSection />
      <FinanceBankingSection />
      <HealthcareSection />
      <CTASection />
    </div>
  );
}
