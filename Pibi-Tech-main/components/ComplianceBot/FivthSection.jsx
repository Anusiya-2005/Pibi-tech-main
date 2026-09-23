"use client";

import { Eye, BarChart4, Percent, ShieldCheck } from "lucide-react";

const FivthSection = () => {
  const capabilities = [
    {
      title: "Accuracy built into every filing",
      description:
        "Structured AI verification minimizes rejections and corrections.",
      icon: Eye,
    },
    {
      title: "Proactive penalty prevention",
      description:
        "Automated reminders and deadline tracking protect timelines.",
      icon: BarChart4,
    },
    {
      title: "Clear risk visibility",
      description:
        "Pre-filing exposure scoring enables corrective action early.",
      icon: Percent,
    },
    {
      title: "Transparent compliance decisions",
      description: "Users understand flags, logic, and next steps.",
      icon: ShieldCheck,
    },
    {
      title: "Continuous monitoring",
      description: "Ongoing oversight beyond one-time submissions.",
      icon: Eye,
    },
    {
      title: "Scalable architecture",
      description:
        "Supports individuals, SMEs, and enterprise compliance teams.",
      icon: BarChart4,
    },
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              A Verification-First Architecture
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Compliance Bot prevents problems instead of reacting to them. Every
            filing passes through layered validation, deadline awareness, and
            risk intelligence, ensuring compliance confidence before submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-md leading-relaxed">
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

export default FivthSection;
