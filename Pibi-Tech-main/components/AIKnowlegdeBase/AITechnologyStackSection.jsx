"use client";

import { Brain, Database, FileCog, Network, Cloud } from "lucide-react";

const techStack = [
  {
    title: "AI & Language Intelligence",
    description:
      "Contextual reasoning pipelines leveraging advanced foundation models for retrieval-grounded and explainable response generation.",
    icon: Brain,
  },
  {
    title: "Vector Search & Retrieval",
    description:
      "Semantic indexing and similarity search powered by enterprise-grade vector databases and distributed search platforms.",
    icon: Database,
  },
  {
    title: "Knowledge Processing Layer",
    description:
      "NLP pipelines for document parsing, structuring, embeddings generation, and metadata enrichment at scale.",
    icon: FileCog,
  },
  {
    title: "Integration Framework",
    description:
      "API-driven embedding across operational systems including CRM, helpdesk, collaboration, and workflow platforms.",
    icon: Network,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Secure, scalable deployment across enterprise cloud environments with compliance-ready architecture.",
    icon: Cloud,
  },
];

const AITechnologyStackSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Enterprise Technology Stack
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Built on modern AI retrieval architecture and enterprise-grade
            infrastructure to ensure scalability, governance, and long-term
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((item, index) => {
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

        <div className="mt-16 max-w-3xl">
          <p className="text-slate-700 text-lg leading-relaxed">
            Supports enterprise knowledge formats including PDFs, office
            documents, structured databases, and rich media assets — ensuring
            comprehensive coverage across your information ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AITechnologyStackSection;
