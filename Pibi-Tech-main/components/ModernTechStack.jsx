"use client";

import {
  Layers,
  Code2,
  Paintbrush,
  Server,
  Globe,
  Blocks,
  Database,
  FileText,
} from "lucide-react";

const coreTechnologies = [
  {
    title: "Next.js 14 (App Router)",
    description:
      "Optimal performance, advanced routing, and modern rendering capabilities.",
    icon: Layers,
  },
  {
    title: "TypeScript",
    description:
      "Type-safe, maintainable, and scalable code for long-term stability.",
    icon: Code2,
  },
  {
    title: "Tailwind CSS",
    description:
      "Consistent, efficient UI development with minimal CSS overhead.",
    icon: Paintbrush,
  },
  {
    title: "React Server Components",
    description:
      "Faster rendering, reduced JavaScript, and improved user experience.",
    icon: Server,
  },
];

const cmsOptions = [
  {
    title: "Headless WordPress",
    description:
      "Retain existing content, editors, and workflows with modern frontend performance.",
    icon: Globe,
  },
  {
    title: "Sanity CMS",
    description:
      "Flexible, real-time, developer-first CMS built for structured content.",
    icon: Blocks,
  },
  {
    title: "Contentful",
    description:
      "Enterprise-grade content platform with strong governance and scalability.",
    icon: Database,
  },
  {
    title: "MDX / Markdown",
    description:
      "Lightweight, version-controlled content for documentation and static pages.",
    icon: FileText,
  },
];

export default function ModernTechStack() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Modern Tech Stack You Can Trust
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Your Next.js website is built using proven, enterprise-grade
            technologies designed for long-term scalability, security, and
            maintainability.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Core Technologies
            </h3>

            <div className="space-y-5">
              {coreTechnologies.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#248BB3]/10">
                      <Icon className="h-6 w-6 text-[#248BB3]" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Content Management Options
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cmsOptions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f6fb2]/10">
                      <Icon className="h-6 w-6 text-[#1f6fb2]" />
                    </div>

                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
