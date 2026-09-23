"use client";

import {
  Zap,
  Search,
  Code2,
  Blocks,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    title: "Lightning Performance",
    description:
      "Achieve sub-second load times with automatic code splitting, image optimization, and edge caching.",
    icon: Zap,
  },
  {
    title: "Perfect SEO Scores",
    description:
      "Built-in SEO optimization and excellent Core Web Vitals help you rank higher and drive organic traffic.",
    icon: Search,
  },
  {
    title: "Developer-Friendly Architecture",
    description:
      "Modern React patterns, TypeScript support, and clean codebases that your engineering teams love.",
    icon: Code2,
  },
  {
    title: "Headless CMS Ready",
    description:
      "Seamless integration with Sanity, Contentful, and headless WordPress for maximum flexibility.",
    icon: Blocks,
  },
  {
    title: "Infinite Scalability",
    description:
      "Designed to handle traffic spikes and scale effortlessly as your business grows.",
    icon: TrendingUp,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Reduced attack surface, no plugin vulnerabilities, and security best practices by default.",
    icon: ShieldCheck,
  },
];

export default function NextJsAdvantage() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              The Next.js Advantage
            </span>
          </h2>

          <p className="text-xl text-slate-700 leading-relaxed">
            Next.js represents the future of enterprise web development. Built
            by Vercel and trusted by industry leaders, it delivers unmatched
            performance, developer experience, and business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f6fb2]/10">
                  <Icon className="h-7 w-7 text-[#1f6fb2]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
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
}
