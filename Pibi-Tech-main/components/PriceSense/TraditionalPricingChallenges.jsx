"use client";

import { XCircle } from "lucide-react";

const TraditionalPricingChallenges = () => {
  const challenges = [
    "Spreadsheet-driven pricing",
    "Over-discounting to close deals",
    "No visibility into optimal pricing bands",
    "Fragmented competitor tracking",
    "Inconsistent sales pricing",
    "No link to win-rate performance",
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Why Traditional Pricing Falls Short
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Reactive pricing methods struggle in competitive markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>

              <p className="text-slate-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-slate-200 pt-6">
          <p className="text-lg font-semibold text-[#1f6fb2]">
            These gaps directly impact revenue predictability and margin health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TraditionalPricingChallenges;
