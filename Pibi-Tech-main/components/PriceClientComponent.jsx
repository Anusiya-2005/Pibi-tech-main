"use client";

import CTASection from "@/components/CTASection";
import ImplementationProcessSection from "@/components/PriceSense/ImplementationProcessSection";
import OurAdvantageSection from "@/components/PriceSense/OurAdvantageSection";
import PriceSenseIntroSection from "@/components/PriceSense/PriceSenseIntroSection";
import PriceSenseRevenueImpact from "@/components/PriceSense/PriceSenseRevenueImpact";
import PricingIntelligenceCapabilities from "@/components/PriceSense/PricingIntelligenceCapabilities";
import ProfitPrecisionFramework from "@/components/PriceSense/ProfitPrecisionFramework";
import TraditionalPricingChallenges from "@/components/PriceSense/TraditionalPricingChallenges";
import WhoPriceSenseIsFor from "@/components/PriceSense/WhoPriceSenseIsFor";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const PriceClientCompoent = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
        <div className="md:col-span-3">
          <p className="mb-4 text-[#1f6fb2] text-2xl font-medium tracking-wide">
            PriceSense
          </p>

          <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
            Smarter Pricing. Higher Win Rates. Stronger Margins.
          </h1>
          <div className="mt-10 flex items-center gap-6">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#3b82f6] to-[#10b981] px-6 py-3 text-lg font-semibold text-white"
            >
              Talk to a Pricing Expert
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            AI-powered pricing intelligence that recommends the optimal price
            balancing competitiveness and profitability in real time.
          </p>
        </div>
      </div>
      <PriceSenseIntroSection />
      <PriceSenseRevenueImpact />
      <PricingIntelligenceCapabilities />
      <ProfitPrecisionFramework />
      <TraditionalPricingChallenges />
      <OurAdvantageSection />
      <ImplementationProcessSection />
      <WhoPriceSenseIsFor />
      <CTASection
        title="Turn Pricing Into a Competitive Advantage"
        content="PriceSense transforms pricing from a reactive task into a structured revenue engine helping organizations close deals faster while protecting profitability."
        content2="Every price becomes intentional. Every decision becomes measurable."
        ctaText1="Request a Demo"
        ctaText2="Talk to a Pricing Specialist"
      />
    </div>
  );
};

export default PriceClientCompoent;
