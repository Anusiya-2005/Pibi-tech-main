"use client";

import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "Decisions are backed by evidence",
  "Operations become measurable and optimized",
  "Customer behavior becomes visible",
  "Forecasting improves",
  "Financial insights become immediate",
  "Growth opportunities surface faster",
];

const BusinessBenefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Benefits of BI & Data Engineering
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            When analytics becomes part of everyday operations:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#248BB3]/10 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#248BB3]" />
              </div>

              <p className="text-slate-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
