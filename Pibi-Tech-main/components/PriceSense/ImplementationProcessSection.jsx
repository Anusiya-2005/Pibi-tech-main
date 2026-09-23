"use client";

import { Search, Settings, RefreshCcw } from "lucide-react";

const ImplementationProcessSection = () => {
  const phases = [
    {
      title: "Phase 1 — Pricing Discovery",
      subtitle: "Understand how pricing impacts revenue today.",
      icon: Search,
      points: [
        "Product and margin review",
        "Historical pricing analysis",
        "Competitor benchmarking",
        "Demand modeling",
        "Risk assessment",
        "Optimization roadmap",
      ],
    },
    {
      title: "Phase 2 — Platform Integration",
      subtitle: "Operationalize pricing intelligence.",
      icon: Settings,
      points: [
        "ERP/CRM data integration",
        "Model calibration",
        "Margin guardrails",
        "Simulation testing",
        "Go-live activation",
      ],
    },
    {
      title: "Phase 3 — Continuous Optimization",
      subtitle: "Pricing becomes an evolving system.",
      icon: RefreshCcw,
      points: [
        "Real-time monitoring",
        "Win-rate refinement",
        "Margin reporting",
        "Alert-driven adjustments",
        "Strategic reviews",
        "Adaptive learning",
      ],
    },
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Implementation Process
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            From Discovery to Continuous Optimization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10">
                    <Icon className="w-7 h-7 text-[#248BB3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-md leading-relaxed mb-6">
                  {phase.subtitle}
                </p>

                <ul className="space-y-3">
                  {phase.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 text-md leading-relaxed"
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

export default ImplementationProcessSection;
