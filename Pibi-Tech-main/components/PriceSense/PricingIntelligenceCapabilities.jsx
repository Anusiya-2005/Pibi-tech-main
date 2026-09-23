"use client";

import { Eye, BarChart4, Percent, ShieldCheck } from "lucide-react";

const PricingIntelligenceCapabilities = () => {
  const capabilities = [
    {
      title: "Market-Aware Pricing",
      description:
        "Continuous competitor price visibility to stay competitive without sacrificing margins.",
      icon: Eye,
    },
    {
      title: "Demand & Elasticity Modeling",
      description:
        "Understand price sensitivity and demand behavior before adjusting pricing strategy.",
      icon: BarChart4,
    },
    {
      title: "Discount Optimization",
      description:
        "Control discount behavior intelligently to prevent revenue leakage and margin erosion.",
      icon: Percent,
    },
    {
      title: "Explainable AI",
      description:
        "Clear reasoning behind every recommendation to ensure trust, transparency, and adoption.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Pricing Intelligence for High-Stakes Decisions
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Built for businesses where pricing directly impacts competitiveness
            and profitability.
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

export default PricingIntelligenceCapabilities;
