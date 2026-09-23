"use client";

import MissionVisionOfferings from "@/components/MissionVisionOfferings";
import OurProducts from "@/components/OurProducts";
import Specialist from "@/components/Specialist";
import PerformanceGuarantee from "@/components/PerformanceGuarantee";
import Roadmap from "@/components/RoadMap";
import { MainPage } from "@/components/MainPage";
import AgentsDetails from "@/components/AgentsDetails";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <MainPage />
      {/* <HeroCarousel /> */}
      {/* <IntroSection /> */}
      <section className="relative py-8 px-4 bg-blue-50">
        <div className="relative max-w-7xl rounded-xl bg-white py-8 mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-start items-start gap-8 pb-8 ">
            <h2 className="text-2xl flex-[35%] sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-1.8px] text-[#000052]">
              Next-Gen AI & <br />
              Product Engineering
            </h2>

            <p className="max-w-full flex-[65%] text-lg md:text-xl font-medium text-slate-700">
              <span className="text-[#1f6fb2] font-bold">
                Pi Bi Technologies
              </span>{" "}
              is a global AI and digital technology company specializing in{" "}
              <span className="text-[#1f6fb2] font-bold">
                AI Solutions, Agentic process automation, product development,
                and enterprise digital transformation.
              </span>{" "}
              We help businesses automate workflows, enhance operational
              efficiency, and build intelligent systems that support sustainable
              growth.
            </p>
          </div>
          <button
            className={`flex items-center mx-auto justify-center gap-3 rounded-full bg-linear-to-r from-[#3b82f6] to-[#10b981]  text-white border-2 border-white/20 px-8 py-3.5 font-bold shadow-2xl transform-gpu hover:scale-110 transition-all`}
            onClick={() => router.push("/about-us")}
          >
            Read Our Story
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <MissionVisionOfferings />
      {/* <WhyChooseUs /> */}
      <OurProducts />
      <AgentsDetails />
      {/* <TechInovation /> */}
      <Specialist />
      <PerformanceGuarantee />
      <Roadmap />
      <CTASection
        title="Planning your next product build?"
        content="Align strategy, design, and engineering under one expert team."
        ctaText1="Talk to Product Experts"
      />
      {/* <RecentEngagements /> */}
    </div>
  );
}
