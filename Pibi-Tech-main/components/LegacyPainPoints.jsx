"use client";

import { XCircle, AlertTriangle, Gauge, Wrench, Layers } from "lucide-react";

const painPoints = [
  {
    text: "Slow page load times impacting conversions",
    icon: Gauge,
  },
  {
    text: "Plugin dependency and frequent compatibility issues",
    icon: Wrench,
  },
  {
    text: "Poor Core Web Vitals scores",
    icon: AlertTriangle,
  },
  {
    text: "Limited customization and developer productivity",
    icon: Layers,
  },
  {
    text: "Scalability challenges with traffic and content growth",
    icon: XCircle,
  },
];

export default function LegacyPainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-red-500 to-orange-500">
                Traditional Websites Are Holding You Back
              </span>
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Most legacy websites are built on outdated technology stacks that
              create friction as your business grows.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Slow performance, plugin dependencies, security risks, and limited
              flexibility prevent your website from evolving at the pace your
              business demands. While competitors move faster with modern
              frameworks, legacy platforms struggle to keep up.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-red-400/30 to-orange-400/30 blur-xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Common Legacy Website Pain Points
              </h3>

              <ul className="space-y-4">
                {painPoints.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-4 rounded-xl bg-white p-4 border border-slate-200"
                    >
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                        <Icon className="h-4 w-4 text-red-500" />
                      </div>

                      <span className="text-slate-700 text-lg leading-relaxed">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
