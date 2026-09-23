"use client";

import { Users, TrendingUp, Boxes, Zap, Layers } from "lucide-react";

const WhoPriceSenseIsFor = () => {
  const audiences = [
    {
      title: "Revenue Leaders",
      description: "Optimizing margins",
      icon: TrendingUp,
    },
    {
      title: "Sales Teams",
      description: "Seeking pricing consistency",
      icon: Users,
    },
    {
      title: "Product-Driven Businesses",
      description: "with SKU complexity",
      icon: Boxes,
    },
    {
      title: "Competitive Markets",
      description: "Requiring fast decisions",
      icon: Zap,
    },
    {
      title: "Organizations",
      description: "scaling pricing operations",
      icon: Layers,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Who PriceSense Is For
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Built for teams where pricing precision directly impacts revenue,
            competitiveness, and operational scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 shrink-0">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title} {item.description}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoPriceSenseIsFor;
