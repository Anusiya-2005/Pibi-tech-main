"use client";

import {
  Headphones,
  FileText,
  MessageSquare,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const operations = [
  {
    title: "Intelligent Support Automation",
    description:
      "Grounded AI responses reduce repetitive tickets, minimize escalations, and improve first-contact resolution across support channels.",
    icon: Headphones,
  },
  {
    title: "Internal Knowledge Operations",
    description:
      "Teams instantly access SOPs, policies, and procedural documentation — improving decision velocity and operational clarity.",
    icon: FileText,
  },
  {
    title: "Customer Experience Enablement",
    description:
      "Delivers consistent, context-aware answers across chat, portals, and service workflows to enhance customer trust and satisfaction.",
    icon: MessageSquare,
  },
  {
    title: "Compliance & Governance Access",
    description:
      "Provides verified policy interpretation and regulated knowledge delivery with contextual accuracy and auditability.",
    icon: ShieldCheck,
  },
  {
    title: "Training & Onboarding Intelligence",
    description:
      "Context-aware learning assistance accelerates onboarding, reduces ramp-up time, and strengthens workforce readiness.",
    icon: GraduationCap,
  },
];

const AIKnowledgeBaseOperationsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Where It Fits Into Real Operations
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Practical integration across enterprise workflows — turning
            knowledge into measurable operational performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operations.map((item, index) => {
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

export default AIKnowledgeBaseOperationsSection;
