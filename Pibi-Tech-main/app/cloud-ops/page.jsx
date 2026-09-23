"use client";

import CloudOpsServices from "@/components/CloudOpsServices";
import CloudOpsSteps from "@/components/CloudOpsSteps";
import CloudOpsTechStacks from "@/components/CloudOpsTechStacks";
import CTASection from "@/components/CTASection";
import { ArrowRight, Target, TrendingUp, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CloudOps = () => {
  const metrics = [
    {
      value: "01",
      unit: "",
      title: "Assess & Architect",
      description:
        "Deep infrastructure audit and architecture blueprint aligned to your growth roadmap.",
      icon: TrendingUp,
    },
    {
      value: "02",
      unit: "",
      title: "Automate & Secure",
      description:
        "Cloud, DevOps, and cybersecurity frameworks engineered for speed and resilience.",
      icon: Target,
    },
    {
      value: "03",
      unit: "",
      title: "Optimize & Scale",
      description:
        "Continuous performance tuning and cost optimization as your systems evolve.",
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
              Build Intelligent Infrastructure That Powers Automated Growth
            </h1>
            <p className="mt-6 max-w-xl text-xl text-black/70">
              Cloud, DevOps, SRE, and DevSecOps unified into a resilient, secure
              infrastructure foundation
            </p>
            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() => router.push("/contact-us")}
                className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-[#1f6fb2] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#1f6fb2]/90"
              >
                Start Building Smarter Infrastructure
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
                How We Accelerate Your Infrastructure Evolution
              </span>
            </h2>
            <p className="text-slate-700 text-xl leading-relaxed">
              A structured path from assessment to scale — built to reduce
              friction and maximize reliability.
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
      <CloudOpsServices />
      <CloudOpsTechStacks />
      <CloudOpsSteps />
      <CTASection
        title="Infrastructure That Grows With Your Business"
        content="We engineer cloud and infrastructure ecosystems that stay secure, automated, and resilient — so your teams focus on innovation, not firefighting."
        ctaText1="Start Your Infrastructure Journey"
      />
    </div>
  );
};

export default CloudOps;
