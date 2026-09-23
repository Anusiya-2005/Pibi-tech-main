"use client";

import { CheckCircle2, Brain } from "lucide-react";

const OurAdvantageSection = () => {
  const advantages = [
    "Data-backed pricing confidence",
    "Higher conversions without margin erosion",
    "Immediate competitive awareness",
    "Transparent recommendations",
    "Continuous market learning",
    "Scalable pricing intelligence",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Advantage
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10">
                <Brain className="w-7 h-7 text-[#248BB3]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Intelligence-First Pricing Architecture
              </h3>
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              PriceSense unifies competitor intelligence, demand modeling, and
              win-rate optimization into one intelligent pricing engine.
            </p>

            <p className="text-slate-600 text-md leading-relaxed">
              Instead of trading margin for competitiveness, businesses achieve
              both — driving smarter decisions that balance growth and
              profitability in real time.
            </p>
          </div>

          <div className="bg-blue-50 border border-slate-200 rounded-2xl p-10">
            <h4 className="text-xl font-bold text-slate-900 mb-6">
              What This Enables
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-slate-700 text-md leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#248BB3] mt-1" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantageSection;
