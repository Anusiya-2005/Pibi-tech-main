"use client";

import { Eye, BarChart4, Percent, ShieldCheck } from "lucide-react";

const SecondSection = () => {
  const capabilities = [
    {
      title: "Compliance Intelligence & Automation",
      description:
        "Purpose-built monitoring and verification to safeguard filing workflows.",
      icon: Eye,
    },
    {
      title: "Deadline & Filing Oversight",
      description:
        "Continuous GST and tax tracking prevents missed obligations.",
      icon: BarChart4,
    },
    {
      title: "Risk-Aware Filing Architecture",
      description:
        "Structured validation reduces audit and correction exposure.",
      icon: Percent,
    },
    {
      title: "Explainable Decision Framework",
      description:
        "Every flag or recommendation is transparent and human-readable.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Intelligent Compliance Systems for High-Stakes Financial Workflows
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Compliance Bot is engineered for environments where precision,
            regulatory alignment, and accountability are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
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
  );
};

export default SecondSection;
