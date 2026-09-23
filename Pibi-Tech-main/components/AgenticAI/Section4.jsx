"use client";

import { BadgeDollarSign, ShoppingBag } from "lucide-react";

const architectureLayers = [
  {
    title: "E-commerce Automation Assistant",
    description:
      "Track orders, notify vendors, update customers, and resolve exceptions autonomously — improving operational flow and customer experience.",
    icon: ShoppingBag,
  },
  {
    title: "Always-on AI Sales Assistant",
    description:
      "Monitor CRM activity, generate follow-ups, schedule meetings, and maintain engagement pipelines.",
    icon: BadgeDollarSign,
  },
  {
    title: "24/7 AI IT Support Agent",
    description:
      "Triage tickets, troubleshoot common issues, reset credentials, and escalate complex problems.",
    icon: BadgeDollarSign,
  },
  {
    title: "HR Onboarding Automation",
    description:
      "Manage onboarding documentation, scheduling, and progress tracking — reducing administrative load.",
    icon: BadgeDollarSign,
  },
  {
    title: "Executive Scheduling Assistant",
    description:
      "Prioritize meetings, negotiate availability, and coordinate resources autonomously.",
    icon: BadgeDollarSign,
  },
  {
    title: "Finance Automation Agent",
    description:
      "Extract invoice data, validate accuracy, detect anomalies, and generate reports.",
    icon: BadgeDollarSign,
  },
];

const Section4 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Explore real-world agentic AI applications
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Agentic AI unlocks intelligent workflows that scale without scaling
            headcount.
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

        <div className="mt-8 border-slate-200 pt-6">
          <p className="text-lg font-semibold text-[#1f6fb2]">
            Result: intelligent workflows that operate continuously with minimal
            friction
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
