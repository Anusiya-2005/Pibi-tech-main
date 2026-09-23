"use client";

import { Brain, TrendingUp, Bot, Sparkles, BarChart3 } from "lucide-react";

const aiCapabilities = [
  {
    title: "Predictive Insights & Smart Automation",
    description:
      "Forecasting models, anomaly detection, and intelligent workflow automation.",
    icon: TrendingUp,
  },
  {
    title: "Conversational Interfaces & NLP",
    description:
      "Intelligent in-app assistants, chatbots, and semantic search experiences.",
    icon: Bot,
  },
  {
    title: "Personalized Experiences at Scale",
    description:
      "Recommendation systems, adaptive UI, and dynamic user journeys.",
    icon: Sparkles,
  },
  {
    title: "Data-Driven Intelligence Built In",
    description:
      "Analytics dashboards that convert raw data into actionable direction.",
    icon: BarChart3,
  },
];

const AIPoweredDevelopmentSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              AI-Powered Development
            </span>
          </h2>

          <p className="bg-clip-text text-transparent bg-brand-gradient text-xl leading-relaxed mb-4">
            Smarter. Faster. Better.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            We integrate AI where it delivers measurable business value — not
            novelty. Intelligence is embedded into the architecture to increase
            engagement, conversion, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiCapabilities.map((item, index) => {
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

        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed">
            AI isn’t an add-on here — it's a core part of how modern
            applications evolve, learn, and continuously improve performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredDevelopmentSection;
