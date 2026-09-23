"use client";

import { Search, Settings, RefreshCcw } from "lucide-react";

const SixthSection = () => {
  const phases = [
    {
      title: "Phase 1 - Compliance Discovery",
      subtitle: "Understand how compliance impacts your operations.",
      icon: Search,
      points: [
        "Business and obligation assessment",
        "Workflow and risk review",
        "Automation requirements mapping",
        "Implementation roadmap creation",
      ],
    },
    {
      title: "Phase 2 - Platform Configuration",
      subtitle: "Securely set up and customize Compliance Bot.",
      icon: Settings,
      points: [
        "Secure setup and permissions",
        "Data and document integration",
        "Validation engine configuration",
        "Deadline alert activation",
        "Pilot testing and verification",
      ],
    },
    {
      title: "Phase 3 - Continuous Monitoring",
      subtitle: "Ongoing oversight and compliance assurance.",
      icon: RefreshCcw,
      points: [
        "Automated deadline tracking",
        "Pre-filing verification cycles",
        "Risk alerts and anomaly reporting",
        "Secure digital filing",
        "Compliance dashboards and updates",
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Structured, Transparent, Compliance-Driven
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            A disciplined rollout ensures accurate onboarding and long-term
            protection.
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
        <div className="mt-8  border-slate-200 pt-6">
          <p className="text-lg font-semibold text-[#1f6fb2]">
            This phased structure ensures adoption without disruption while
            strengthening compliance posture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
