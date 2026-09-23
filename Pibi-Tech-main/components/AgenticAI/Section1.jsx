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
    title: "Autonomy & Self-Decision Making",
    description:
      "Agents independently evaluate options and choose optimal actions aligned with business objectives.",
    icon: ShieldCheck,
  },
  {
    title: "Goal-Oriented Behavior",
    description:
      "Every agent operates against measurable targets, ensuring actions consistently serve strategic outcomes.",
    icon: MessageSquare,
  },
  {
    title: "Context Awareness",
    description:
      "Persistent memory and situational awareness allow agents to operate across complex, multi-step workflows.",
    icon: Search,
  },
  {
    title: "Continuous Learning & Adaptation",
    description:
      "Agents improve performance over time using feedback loops and evolving data.",
    icon: Network,
  },
  {
    title: "Multi-Agent Collaboration",
    description:
      "Distributed agents coordinate tasks, share information, and execute workflows as intelligent teams.",
    icon: FileCog,
  },
  {
    title: "Human-in-the-Loop Integration",
    description:
      "Critical decisions remain observable and adjustable — blending autonomy with human oversight.",
    icon: FileCog,
  },
];

const Section1 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Core capabilities of our agentic AI solutions
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            We engineer agents that behave like adaptive digital operators -
            capable of reasoning, collaboration, and learning.
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

export default Section1;
