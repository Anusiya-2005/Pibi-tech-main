"use client";

import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Grounded AI Accuracy and Governance",
  },
  {
    title: "Unified Enterprise Knowledge Fabric",
  },
  {
    title: "Seamless Integration Ecosystem",
  },
  {
    title: "Rapid Adoption with Minimal Disruption",
  },
  {
    title: "Secure, Scalable Deployment Model",
  },
  {
    title: "Designed for Long-Term Evolution",
  },
];

const AIWhyChooseSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Why Organizations Choose This Architecture
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Built for enterprises that require accuracy, governance,
            scalability, and long-term intelligence evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 mt-1 shrink-0" color="#10B981" />
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWhyChooseSection;
