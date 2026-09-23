"use client";

import Section1 from "@/components/IntelligentInfrastructure/Section1";
import Section2 from "@/components/IntelligentInfrastructure/Section2";
import Section3 from "@/components/IntelligentInfrastructure/Section3";
import Section4 from "@/components/IntelligentInfrastructure/Section4";
import Section5 from "@/components/IntelligentInfrastructure/Section5";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  CalendarCheck,
  Scale,
  Target,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Section6 from "@/components/IntelligentInfrastructure/Section6";
import Section7 from "@/components/IntelligentInfrastructure/Section7";
import Section8 from "@/components/IntelligentInfrastructure/Section8";

const IntelligentInfrastructure = () => {
  const metrics = [
    {
      value: "2x-30x",
      unit: "",
      title: "Faster Analytics & ETL",
      icon: Scale,
    },
    {
      value: "20%-80%",
      unit: "",
      title: "Cloud Cost Optimization",
      icon: TrendingUp,
    },
    {
      value: "100%",
      unit: "",
      title: "Near Real-Time business Intelligence delivery",
      icon: CalendarCheck,
    },
    {
      value: "24/4",
      unit: "",
      title: "Scalable Infrastructure for AI & Agentic Workloads",
      icon: Target,
    },
  ];
  const router = useRouter();

  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
          <div className="md:col-span-3">
            <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
              Intelligent infrastructure that turns data into business advantage
            </h1>
            <p className="mt-6 max-w-xl text-xl text-black/70">
              Build a resilient data backbone engineered to accelerate
              analytics, AI/ML, and agentic systems - delivering measurable
              performance gains and meaningful cost reduction.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-6">
              <button
                onClick={() => router.push("/contact-us")}
                className="group inline-flex items-center gap-3 rounded-lg bg-linear-to-r from-[#3b82f6] to-[#10b981] px-6 py-3 text-md md:text-xl font-semibold text-white"
              >
                Contact Sales
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                className="group inline-flex items-center gap-3 rounded-lg border border-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold text-[#1f6fb2] bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
              >
                Request a Demo
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1f6fb2] text-white transition group-hover:bg-white group-hover:text-[#1f6fb2] group-hover:translate-x-1">
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
                Built for measurable impact
              </span>
            </h2>
            {/* <p className="text-slate-700 text-xl leading-relaxed">
              A structured path from assessment to scale — built to reduce
              friction and maximize reliability.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <CTASection
        title="Ready to modernize your enterprise infrastructure?"
        content="Let’s align architecture with business velocity."
        ctaText1="Contact Sales"
        ctaText2="Request a Demo"
      />
    </div>
  );
};

export default IntelligentInfrastructure;
