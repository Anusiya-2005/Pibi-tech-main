"use client";

import { Database, Search, Bot, RefreshCcw } from "lucide-react";

const capabilities = [
  {
    title: "Unified Knowledge Fabric",
    description:
      "Aggregates structured and unstructured content into a governed, intelligent repository that centralizes organizational knowledge.",
    icon: Database,
  },
  {
    title: "Semantic Retrieval",
    description:
      "Leverages vector search and contextual reasoning to deliver meaning-based answers — not keyword matches.",
    icon: Search,
  },
  {
    title: "Self-Service Automation",
    description:
      "Resolves repetitive queries automatically, reducing manual workload and accelerating response times.",
    icon: Bot,
  },
  {
    title: "Continuous Learning Loop",
    description:
      "Improves retrieval precision over time using interaction signals, feedback mechanisms, and adaptive tuning.",
    icon: RefreshCcw,
  },
];

const AIKnowledgeBaseCapabilitiesSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              What This AI Knowledge Base Actually Enables
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Beyond storage — a governed intelligence layer that transforms how
            teams access, apply, and scale knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => {
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

export default AIKnowledgeBaseCapabilitiesSection;
