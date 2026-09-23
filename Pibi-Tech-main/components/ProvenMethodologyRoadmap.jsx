"use client";

import {
  Search,
  PenTool,
  Code2,
  CheckCircle,
  Cloud,
  LifeBuoy,
} from "lucide-react";

const roadmap = [
  {
    step: "Step 1",
    title: "Product Discovery & Strategy",
    description: "Align business goals, user needs, and technical feasibility.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Product Design",
    description: "UX/UI design focused on usability, adoption, and conversion.",
    icon: PenTool,
  },
  {
    step: "Step 3",
    title: "Development & Architecture",
    description: "Scalable, secure, and performance-optimized engineering.",
    icon: Code2,
  },
  {
    step: "Step 4",
    title: "Testing & Quality Assurance",
    description: "Automated and manual testing to ensure reliability.",
    icon: CheckCircle,
  },
  {
    step: "Step 5",
    title: "Cloud Deployment",
    description: "Secure, compliant, production-ready deployments.",
    icon: Cloud,
  },
  {
    step: "Step 6",
    title: "Maintenance & Support",
    description: "Monitoring, optimization, and long-term evolution.",
    icon: LifeBuoy,
  },
];

export default function ProvenMethodologyRoadmap() {
  const RoadmapCard = ({ item }) => {
    const Icon = item.icon;

    return (
      <div className="relative max-w-85 rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f6fb2]/10">
            <Icon className="h-5 w-5 text-[#1f6fb2]" />
          </div>
          <span className="text-sm font-semibold text-[#1f6fb2]">
            {item.step}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-1">
          {item.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  };
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Proven Methodology
            </span>
          </h2>
          <p className="text-xl text-slate-700">
            For Enterprise AI & Product Development
          </p>
          <p className="mt-4 text-slate-600">
            A structured approach that reduces uncertainty and ensures
            predictable outcomes.
          </p>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute left-0 right-0 top-[50%] h-px bg-linear-to-r from-[#1f6fb2] to-[#248BB3]" />

          <div className="flex justify-start gap-12 pb-32">
            {roadmap.slice(0, 3).map((item, i) => (
              <div key={i} className="relative">
                <RoadmapCard item={item} />

                <div className="absolute left-1/2 -bottom-20 h-20 w-px -translate-x-1/2 bg-[#1f6fb2]/40" />

                <div className="absolute left-1/2 -bottom-21 h-4 w-4 -translate-x-1/2 rounded-full bg-[#1f6fb2] border-4 border-white shadow-md" />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-12 pt-6">
            {roadmap.slice(3).map((item, i) => (
              <div key={i} className="relative">
                <RoadmapCard item={item} />

                <div className="absolute left-1/2 -top-20 h-20 w-px -translate-x-1/2 bg-[#1f6fb2]/40" />

                <div className="absolute left-1/2 -top-21 h-4 w-4 -translate-x-1/2 rounded-full bg-[#1f6fb2] border-4 border-white shadow-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative block md:hidden">
          <div className="flex flex-col items-center gap-12">
            {roadmap.map((item, i) => (
              <div key={i} className="relative">
                <RoadmapCard item={item} />
                {i < roadmap.length - 1 && (
                  <>
                    <div className="absolute left-1/2 -bottom-20 h-20 w-px -translate-x-1/2 bg-[#1f6fb2]/40" />
                    <div className="absolute left-1/2 -bottom-21 h-4 w-4 -translate-x-1/2 rounded-full bg-[#1f6fb2] border-4 border-white shadow-md" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-8 py-4 text-lg font-semibold text-white">
            Start Your Product Journey →
          </button>
        </div>
      </div>
    </section>
  );
}
