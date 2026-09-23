"use client";

import { ShieldCheck, MessageSquare, Search, Network } from "lucide-react";

const architectureLayers = [
  {
    title: "Deep Expertise in Agentic Architectures",
    description:
      "We specialize in goal-driven AI system design - not generic automation.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Cycle AI Engineering",
    description:
      "From strategy to deployment and optimization, we manage the entire lifecycle.",
    icon: MessageSquare,
  },
  {
    title: "Cross-Industry Innovation",
    description:
      "Experience across sectors enables adaptable, scalable solutions.",
    icon: Search,
  },
  {
    title: "Proven Delivery Track Record",
    description:
      "Production-grade systems designed for reliability, safety, and measurable outcomes.",
    icon: Network,
  },
];

const Section3 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Why we lead in agentic AI engineering
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {architectureLayers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 border-slate-200 pt-6">
          <p className="text-lg font-semibold text-[#1f6fb2]">
            We don’t experiment with autonomy — we engineer it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
