"use client";

import AgenticAIServices from "@/components/AgenticAIServices";
import AgenticAISteps from "@/components/AgenticAISteps";
import AgenticAITypes from "@/components/AgenticAITypes";
import CTASection from "@/components/CTASection";
import IndustriesAgenticAI from "@/components/IndustriesAgenticAI";
import TechnologyStack1 from "@/components/TechnologyStack1";
import WhyAgenticAi from "@/components/WhyAgenticAi";
import { ArrowRight, Target, TrendingUp, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AgenticClientComponent = () => {
  const texts = ["Build", "Connect", "Automate", "Optimize"];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const metrics = [
    {
      value: "",
      unit: "",
      title: "Act with Autonomy",
      description:
        "AI agents operate independently, make informed decisions, and execute tasks without constant human supervision.",
      icon: TrendingUp,
    },
    {
      value: "",
      unit: "",
      title: "Handles Complex Workflows",
      description:
        "From multi-step processes to cross-system coordination, agents manage complexity with precision.",
      icon: Target,
    },
    {
      value: "",
      unit: "",
      title: "Learns & Improves Continuously",
      description:
        "Built-in learning loops help agents adapt to new data, behaviors, and business conditions.",
      icon: Undo2,
    },
    {
      value: "",
      unit: "",
      title: "Scales Across Teams & Tools",
      description:
        "Deploy once. Scale across departments, platforms, and enterprise systems seamlessly.",
      icon: ArrowRight,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-6 pt-18 text-center">
          <h1 className="text-5xl md:text-7xl text-[#1f6fb2] font-extrabold tracking-tight">
            <span className="flex flex-col gap-0 md:gap-1 md:flex-row justify-center items-center">
              We{"  "}
              <span className="relative inline-block ml-2 md:ml-2 align-middle">
                <span key={index} className="animate-slide-fade">
                  {texts[index]} <br className="block md:hidden" />
                </span>
                <span className="bg-clip-text mt-2 md:mt-0 text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                  {"AGENTIC AI"}
                </span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/70">
            Self-operating systems that connect your tools, automate decisions,
            and keep your business moving without constant manual work.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
            >
              Adopt AI and Automation Now
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          <div className="mt-20">
            <p className="mb-8 text-xl text-black/70">
              Trusted by Global Enterprises and Business Leaders
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                How Agentic AI Makes Businesses Powerful
              </span>
            </h2>
            <p className="text-slate-700 text-xl leading-relaxed">
              Agentic AI goes beyond traditional automation. It doesn't just
              respond — it plans, decides, acts, and improves on its own.
            </p>
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

                  {/* <div className="mb-2">
                    <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                      {item.value}
                    </span>
                    <span className="ml-2 text-2xl font-semibold text-[#248BB3]">
                      {item.unit}
                    </span>
                  </div> */}

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
      <AgenticAIServices />
      <TechnologyStack1 />
      <AgenticAISteps />
      <IndustriesAgenticAI />
      <AgenticAITypes />
      <WhyAgenticAi />

      <CTASection
        title="How Autonomous AI Agents Can Drive Real Results in Your Industry"
        content="Reduce operational friction, Accelerate execution, Make smarter decisions continuously."
        ctaText1="Book Your Free Agentic AI Strategy Session"
        ctaText2="Talk to an Agentic AI Expert"
      />
    </div>
  );
};

export default AgenticClientComponent;
