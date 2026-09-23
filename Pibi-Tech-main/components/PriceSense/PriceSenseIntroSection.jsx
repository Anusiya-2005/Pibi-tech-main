"use client";

import { TrendingUp, Target, BarChart3 } from "lucide-react";

const PriceSenseIntroSection = () => {
  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Pricing Should Drive Revenue Not Guesswork
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Most pricing decisions rely on static rules, spreadsheets, or
            reactive discounting.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mt-4">
            <span className="font-semibold text-[#1f6fb2]">
              PriceSense replaces intuition with structured intelligence
            </span>{" "}
            combining market signals, demand behavior, and win-rate data to
            guide every pricing decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Faster Deal Closure",
              description:
                "Optimize pricing in real time to reduce friction and accelerate sales cycles.",
              icon: TrendingUp,
            },
            {
              title: "Healthier Margins",
              description:
                "Balance competitiveness and profitability with data-driven pricing precision.",
              icon: BarChart3,
            },
            {
              title: "Pricing Confidence at Scale",
              description:
                "Empower teams with structured insights that eliminate guesswork and reactive discounting.",
              icon: Target,
            },
          ].map((item, index) => {
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

export default PriceSenseIntroSection;
