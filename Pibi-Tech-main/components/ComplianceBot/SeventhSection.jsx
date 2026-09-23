"use client";

import { CheckCircle } from "lucide-react";

const SeventhSection = () => {
  const challenges = [
    "Faster, predictable filing cycles",
    "Reduced manual oversight",
    "Early error detection",
    "Penalty avoidance",
    "Transparent compliance workflows",
    "Confidence in audit readiness",
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Built for Real-World Compliance Outcomes
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Organizations using Compliance Bot gain:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50">
                <CheckCircle className="w-5 h-5" color="#00B894" />
              </div>

              <p className="text-slate-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
