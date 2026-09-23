"use client";

import { Radar, BarChart3, Cpu, Percent, ShieldCheck } from "lucide-react";

const ProfitPrecisionFramework = () => {
  const modules = [
    {
      title: "Intelligent Market Monitoring",
      icon: Radar,
      points: [
        "Real-time competitor tracking",
        "Automated pricing alerts",
        "Positioning insights",
      ],
    },
    {
      title: "Demand & Win-Rate Analytics",
      icon: BarChart3,
      points: [
        "Historical deal performance modeling",
        "Sensitivity analysis",
        "Demand forecasting",
      ],
    },
    {
      title: "Optimal Price Engine",
      icon: Cpu,
      points: [
        "AI-generated price recommendations",
        "Margin + win-rate balancing",
        "Scenario simulations",
      ],
    },
    {
      title: "Discount Intelligence",
      icon: Percent,
      points: [
        "Discount guardrails",
        "Over-discount alerts",
        "Performance correlation tracking",
      ],
    },
    {
      title: "Margin Protection",
      icon: ShieldCheck,
      points: [
        "Real-time profitability visibility",
        "Minimum viable pricing safeguards",
        "Revenue leakage detection",
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Built for Profit. Designed for Precision.
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            A structured pricing intelligence framework built to optimize
            competitiveness, protect margins, and drive sustainable revenue
            growth.
          </p>
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

export default ProfitPrecisionFramework;
