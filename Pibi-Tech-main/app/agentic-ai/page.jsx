"use client";

import Section1 from "@/components/AgenticAI/Section1";
import Section2 from "@/components/AgenticAI/Section2";
import Section3 from "@/components/AgenticAI/Section3";
import Section4 from "@/components/AgenticAI/Section4";
import Section5 from "@/components/AgenticAI/Section5";
import Section6 from "@/components/AgenticAI/Section6";
import Section7 from "@/components/AgenticAI/Section7";
import Section8 from "@/components/AgenticAI/Section8";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  CalendarCheck,
  Scale,
  Target,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";

const CloudOps = () => {
  const metrics = [
    {
      value: "60",
      unit: "%",
      title: "Faster Decisions",
      description: "Autonomous agents reduce delays and accelerate execution.",
      icon: Scale,
    },
    {
      value: "3x",
      unit: "",
      title: "Workflow Efficiency",
      description: "Multi-agent coordination streamlines complex operations.",
      icon: TrendingUp,
    },
    {
      value: "24/7",
      unit: "",
      title: "Intelligent Operations",
      description: "Agents work continuously without fatigue or bottlenecks.",
      icon: CalendarCheck,
    },
    {
      value: "100",
      unit: "%",
      title: "Enterprise-Ready Governance",
      description: "Secure, monitored, and scalable agent deployment.",
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
              Ship Agentic AI That Actually Generates Value
            </h1>
            <p className="mt-6 max-w-xl text-xl text-black/70">
              Design, build, and operate production-grade agentic systems that
              go beyond demos — delivering autonomous intelligence that drives
              measurable business outcomes.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() => router.push("/contact-us")}
                className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
              >
                {" "}
                Build Your Agentic AI System
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            <p className="mt-6 max-w-xl text-xl text-black/70">
              Engineered to scale operations, accelerate delivery, and support
              continuous business growth for modern enterprises and
              high-velocity startups.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Businesses Agentic System Experiences
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
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <CTASection
        title="End-to-end agentic AI engineering"
        content="Our proven framework ensures your autonomous systems are secure, scalable, and outcome-driven."
        ctaText1="Start Your Agentic AI Journey"
      />
    </div>
  );
};

export default CloudOps;
