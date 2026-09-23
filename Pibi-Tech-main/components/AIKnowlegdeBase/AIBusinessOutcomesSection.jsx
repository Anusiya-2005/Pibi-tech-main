"use client";

import { CheckCircle } from "lucide-react";

const outcomes = [
  {
    title: "Faster Resolution Cycles",
  },
  {
    title: "Reduced Repetitive Support Workload",
  },
  {
    title: "Consistent, Trusted Knowledge Delivery",
  },
  {
    title: "Higher Workforce Productivity",
  },
  {
    title: "Improved Customer Confidence",
  },
  {
    title: "Scalable Self-Service Capability",
  },
];

const AIBusinessOutcomesSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Business Outcomes Leaders Experience
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Measurable operational impact delivered through governed,
            retrieval-grounded enterprise intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {outcomes.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative flex items-start justify-start gap-2 bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle color="#10B981" />
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIBusinessOutcomesSection;
