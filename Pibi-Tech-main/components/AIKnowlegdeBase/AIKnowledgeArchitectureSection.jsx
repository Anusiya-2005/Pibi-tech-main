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
    title: "Knowledge Governance Core",
    description:
      "Content lifecycle control, automated tagging, validation workflows, and structured governance for enterprise-grade knowledge integrity.",
    icon: ShieldCheck,
  },
  {
    title: "Conversational AI Layer",
    description:
      "Natural language interfaces powered by retrieval-grounded responses to ensure contextual accuracy and explainability.",
    icon: MessageSquare,
  },
  {
    title: "Semantic Search Engine",
    description:
      "Intent-aware discovery using embeddings, vector indexing, and contextual ranking for precision retrieval.",
    icon: Search,
  },
  {
    title: "Workflow Integration Layer",
    description:
      "API-driven embedding inside enterprise systems — seamlessly connecting CRM, helpdesk, portals, and internal tools.",
    icon: Network,
  },
  {
    title: "Document Intelligence Pipeline",
    description:
      "Automated parsing, chunking, structuring, and indexing for high-volume documents and rich knowledge assets.",
    icon: FileCog,
  },
];

const AIKnowledgeArchitectureSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Modular AI Knowledge Architecture
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            A layered intelligence framework designed for scalability,
            governance, and seamless enterprise integration.
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

export default AIKnowledgeArchitectureSection;
