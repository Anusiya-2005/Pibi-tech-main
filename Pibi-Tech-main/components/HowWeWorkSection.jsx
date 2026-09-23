"use client";

import { Workflow, GitBranch, Users, CheckCircle2, Cpu } from "lucide-react";

const workPrinciples = [
  {
    title: "Agile Development",
    description:
      "Incremental and transparent — we deliver working software in short cycles so you see progress early and often.",
    icon: Workflow,
  },
  {
    title: "DevOps-Driven Delivery",
    description:
      "Automated integration, testing, and deployment — enabling faster releases with fewer risks.",
    icon: GitBranch,
  },
  {
    title: "People First",
    description:
      "Cross-functional teams with domain expertise and deep technical skills focused on business outcomes.",
    icon: Users,
  },
  {
    title: "Process Excellence",
    description:
      "Clear milestones, structured checkpoints, and collaborative planning ensure alignment and momentum.",
    icon: CheckCircle2,
  },
  {
    title: "Technology Leadership",
    description:
      "Modern stacks, cloud-first design, containerization, API-first logic, and scalable architecture.",
    icon: Cpu,
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              How We Work
            </span>
          </h2>

          <p className="bg-clip-text text-transparent bg-brand-gradient text-xl leading-relaxed mb-4">
            Precision. Speed. Value.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Our process balances engineering discipline with practical delivery
            — ensuring every project moves efficiently from concept to impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workPrinciples.map((item, index) => {
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

export default HowWeWorkSection;
