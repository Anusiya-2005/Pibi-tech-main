"use client";

import BusinessBenefits from "@/components/BusinessIntelligent/BusinessBenefits";
import BusinessServices from "@/components/BusinessIntelligent/BusinessServices";
import BusinessSolutions from "@/components/BusinessIntelligent/BusinessSolutions";
import BusinessSteps from "@/components/BusinessIntelligent/BusinessSteps";
import BusinessTechStack from "@/components/BusinessIntelligent/BusinessTechStack";
import DataEngineeringArchitecture from "@/components/BusinessIntelligent/DataEngineeringArchitecture";
import CTASection from "@/components/CTASection";
import { ArrowRight, Target, TrendingUp, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BusinessIntelligent = () => {
  const metrics = [
    {
      value: "5x",
      unit: "",
      title: "Faster Decision Cycles",
      description:
        "Organizations using BI dashboards reduce reporting and analysis time dramatically.",
      icon: TrendingUp,
    },
    {
      value: "20–30%",
      unit: "",
      title: "Operational Efficiency Gains",
      description:
        "Data-driven visibility eliminates bottlenecks and improves workflow performance.",
      icon: Target,
    },
    {
      value: "Up to 15%",
      unit: "",
      title: "Revenue Lift",
      description:
        "Companies leveraging actionable insights consistently outperform intuition-led decisions.",
      icon: Undo2,
    },
  ];
  const router = useRouter();

  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
          <div className="md:col-span-3">
            <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
              Business Intelligence & Data Engineering Services
            </h1>
            <p className="mt-6 max-w-xl text-xl text-black/70">
              We design and implement industry-focused business intelligence
              dashboards that turn complex data into actionable insight. From
              finance and healthcare to retail and logistics.
            </p>

            <div className="mt-10 md:w-max flex gap-6 flex-col md:flex-row">
              <button
                onClick={() => router.push("/contact-us")}
                className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
              >
                Build Your BI Dashboard
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>
              <button
                onClick={() => router.push("/contact-us")}
                className="group inline-flex w-max items-center gap-3 cursor-pointer rounded-lg text-[#1f6fb2] border border-[#1f6fb2] px-6 py-3 text-md md:text-xl mx-auto font-semibold bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
              >
                Talk to a BI Specialist
                <span className="flex h-9 w-9 items-center justify-center rounded-md text-white bg-[#1f6fb2] transition group-hover:text-[#1f6fb2] group-hover:bg-white group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Why Businesses Invest in BI & Data Engineering
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                    <Icon className="w-7 h-7 text-[#248BB3]" />
                  </div>

                  <div className="mb-2">
                    <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                      {item.value}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <DataEngineeringArchitecture />
      <BusinessServices />
      <BusinessTechStack />
      <BusinessBenefits />
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Still relying on guesswork for big decisions?
          </h2>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            Replace intuition with measurable insight — and build strategies
            grounded in real data.
          </p>

          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center w-max mx-auto gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 text-center hover:bg-slate-200 hover:scale-105"
            >
              Start Your BI Transformation
            </Link>
          </div>
        </div>
      </section>
      <BusinessSolutions />
      <BusinessSteps />
      <CTASection
        title="Spot Opportunities Before Your Competitors Do"
        content="Build an analytics ecosystem that empowers faster, smarter business decisions."
        ctaText1="Gain Your Data Advantage"
        ctaText2="Schedule a BI Consultation"
      />
    </div>
  );
};

export default BusinessIntelligent;
