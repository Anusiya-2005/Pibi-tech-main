"use client";

import { Radar, BarChart3, Cpu, Percent, ShieldCheck } from "lucide-react";

const ThirdSection = () => {
  const modules = [
    {
      title: "Intelligent Compliance Monitoring",
      icon: Radar,
      points: [
        "Real-time GST status and due-date tracking",
        "Automated WhatsApp reminders",
        "Escalation alerts before penalty windows",
      ],
    },
    {
      title: "Guided Tax Workflow",
      icon: BarChart3,
      points: [
        "Question-based filing flow",
        "Complex structures simplified",
        "Automatic mapping to tax formats",
      ],
    },
    {
      title: "Secure Digital Filing",
      icon: Cpu,
      points: [
        "One-click electronic submission",
        "Filing acknowledgment tracking",
        "Encrypted record storage",
      ],
    },
    {
      title: "AI Verification & Risk Detection",
      icon: Percent,
      points: [
        "Pre-filing validation checks",
        "Compliance risk scoring",
        "Rule-aligned anomaly detection",
      ],
    },
    {
      title: "Document Intelligence",
      icon: ShieldCheck,
      points: [
        "Automated extraction from uploaded records",
        "Cross-validation of entries",
        "Early inconsistency detection",
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Core Capabilities
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-5">
                  {module.title}
                </h3>

                <ul className="space-y-3">
                  {module.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-slate-600 text-md leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#248BB3]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
