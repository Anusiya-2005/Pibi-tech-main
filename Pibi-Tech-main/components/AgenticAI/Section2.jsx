"use client";

import {
  ShieldCheck,
  MessageSquare,
  Search,
  Network,
  FileCog,
} from "lucide-react";

const architectureLayers = [
  {
    title: "Agentic AI Strategy & Consulting",
    description:
      "Define where autonomy creates the greatest business impact and design a roadmap for implementation.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Agent Orchestration",
    description:
      "Coordinated systems where agents collaborate across workflows, ensuring seamless execution and optimal performance.",
    icon: Network,
  },
  {
    title: "Modular & Scalable Architectures",
    description:
      "Flexible infrastructure that evolves with your organization's needs and scales with increasing complexity.",
    icon: FileCog,
  },
  {
    title: "Seamless Systems Integration",
    description:
      "Agents embed into existing platforms, APIs, and enterprise tools to enhance functionality without disruption.",
    icon: Search,
  },
  {
    title: "Security & Ethical Compliance",
    description:
      "Built-in safeguards ensure responsible autonomy and adherence to regulatory standards.",
    icon: ShieldCheck,
  },
  {
    title: "Autonomous Workflow Implementation",
    description:
      "Transform manual processes into intelligent, adaptive systems that operate without human intervention.",
    icon: MessageSquare,
  },
  {
    title: "Maintenance, Training & Support",
    description:
      "Continuous improvement keeps agents aligned with business change and evolving requirements.",
    icon: FileCog,
  },
];

const Section2 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Domain-Specific Agentic AI Solutions
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            We design, engineer, and deploy agentic AI systems tailored to
            enterprise environments - focusing on scalability, safety, and
            measurable ROI.
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

export default Section2;
