"use client";

import {
  Layers,
  MessageSquare,
  Workflow,
  Search,
  FileStack,
} from "lucide-react";

const AIKnowledgeEcosystemSection = () => {
  const ecosystem = [
    {
      title: "Content Management Engine",
      description:
        "Centralized governance, intelligent auto-tagging, and lifecycle management for structured and unstructured knowledge assets.",
      icon: Layers,
    },
    {
      title: "Conversational Assistants & Chatbots",
      description:
        "Self-service interfaces delivering context-aware responses across web, mobile, and support channels.",
      icon: MessageSquare,
    },
    {
      title: "CRM & Workflow Integration",
      description:
        "Embedded knowledge directly inside systems your teams already use — from CRM platforms to helpdesk workflows.",
      icon: Workflow,
    },
    {
      title: "Intelligent Search & Recommendations",
      description:
        "Semantic discovery that understands user intent and proactively recommends relevant knowledge.",
      icon: Search,
    },
    {
      title: "Document Knowledge Systems",
      description:
        "Indexed and structured access to policies, SOPs, FAQs, compliance documents, and rich media content.",
      icon: FileStack,
    },
  ];
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              AI Knowledge Solution Ecosystem
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            A modular intelligence stack designed for flexibility — deploy what
            you need today and expand seamlessly as your knowledge maturity
            evolves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystem.map((item, index) => {
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

        <div className="mt-16 max-w-3xl">
          <p className="text-slate-700 text-lg leading-relaxed">
            This modular ecosystem allows you to start with a focused capability
            and progressively expand into a fully integrated AI knowledge
            infrastructure — without disrupting existing systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIKnowledgeEcosystemSection;
