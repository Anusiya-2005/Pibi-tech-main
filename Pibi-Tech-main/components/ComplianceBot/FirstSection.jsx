"use client";

import { Target, Zap, TrendingDown } from "lucide-react";

const FirstSection = () => {
  const outcomes = [
    {
      value: "70%",
      title: "Fewer Filing Errors",
      description:
        "AI validation flags inconsistencies, omissions, and high-risk entries before submission, avoiding rework and notices.",
      icon: Target,
    },
    {
      value: "2-4x",
      title: "Faster Filing Completion",
      description:
        "Guided workflows and automated document intelligence reduce manual effort and decision friction.",
      icon: TrendingDown,
    },
    {
      value: "40%",
      title: "Lower Penalty Exposure",
      description:
        "Deadline intelligence and proactive monitoring prevent late submissions and compliance blind spots.",
      icon: Zap,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Measurable Impact That Matters
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Modern compliance is measured in reduced risk, faster execution, and
            confidence in every filing decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <div className="mb-3">
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
  );
};

export default FirstSection;
