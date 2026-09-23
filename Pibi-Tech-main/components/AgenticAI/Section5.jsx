"use client";

import { BadgeDollarSign, ShoppingBag } from "lucide-react";

const architectureLayers = [
  {
    title: "Autonomous Order Management",
    description: "Critcal actions are verified before execution",
    icon: ShoppingBag,
  },
  {
    title: "Context-Aware Bias Control",
    description:
      "Agents evaluate decisions against fairness and contextual integrity.",
    icon: BadgeDollarSign,
  },
  {
    title: "Explainable Decision Trails",
    description: "Every action is traceable and auditable.",
    icon: BadgeDollarSign,
  },
  {
    title: "Adaptive Human Oversight",
    description:
      "Human intervention remains available for sensitive workflows.",
    icon: BadgeDollarSign,
  },
  {
    title: "Secure Knowledge & Memory Management",
    description:
      "Data integrity and privacy are built into agent memory systems.",
    icon: BadgeDollarSign,
  },
  {
    title: "Continuous Behavioral Monitoring",
    description:
      "Ongoing evaluation ensures alignment with operational standards.",
    icon: BadgeDollarSign,
  },
];

const Section5 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              How we ensure responsible agentic AI
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Autonomy without safeguards is risk. Our systems embed ethical
            controls at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectureLayers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

export default Section5;
