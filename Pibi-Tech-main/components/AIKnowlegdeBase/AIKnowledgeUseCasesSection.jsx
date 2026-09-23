"use client";

import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Hotel,
} from "lucide-react";

const useCases = [
  {
    title: "Finance Operations",
    description:
      "Policy interpretation and compliance retrieval reduce decision friction, accelerate approvals, and improve governance accuracy.",
    icon: Landmark,
  },
  {
    title: "Healthcare Administration",
    description:
      "Time-sensitive procedural access enhances operational precision and reduces administrative delays in critical environments.",
    icon: HeartPulse,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Product intelligence and logistics visibility enable faster service delivery and consistent customer experiences.",
    icon: ShoppingCart,
  },
  {
    title: "Education & Workforce Training",
    description:
      "Contextual knowledge delivery improves onboarding efficiency and accelerates skill development across teams.",
    icon: GraduationCap,
  },
  {
    title: "Hospitality Operations",
    description:
      "Standardized operational knowledge empowers frontline teams to deliver elevated and consistent guest experiences.",
    icon: Hotel,
  },
];

const AIKnowledgeUseCasesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Insight-Driven Use Cases
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Practical intelligence applied across industries — improving
            decision velocity, operational accuracy, and workforce performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
      </div>
    </section>
  );
};

export default AIKnowledgeUseCasesSection;
