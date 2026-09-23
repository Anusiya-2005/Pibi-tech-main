"use client";

import { useState } from "react";
import { Zap, Bot, Brain, Users, Radar, Network, Target } from "lucide-react";

const agentTypes = [
  {
    title: "Reactive Agents",
    icon: Zap,
    description:
      "Designed for fast, rule-based responses to predefined events. Ideal for alerts, monitoring systems, and simple decision automation.",
  },
  {
    title: "Autonomous Agents",
    icon: Bot,
    description:
      "Operate independently to plan, decide, and execute tasks end-to-end. Used for operations automation, workflow execution, and system orchestration.",
  },
  {
    title: "Self-Learning Agents",
    icon: Brain,
    description:
      "Continuously learn from outcomes, feedback, and new data. Best suited for dynamic environments where conditions evolve rapidly.",
  },
  {
    title: "Human–AI Collaborative Agents",
    icon: Users,
    description:
      "Work alongside humans by assisting, recommending, and co-deciding. Perfect for decision support, expert augmentation, and analysis.",
  },
  {
    title: "Context-Aware Agents",
    icon: Radar,
    description:
      "Understand user intent, system state, historical data, and real-time signals to deliver personalized and intelligent responses.",
  },
  {
    title: "Multi-Agent Systems",
    icon: Network,
    description:
      "Multiple agents collaborate, communicate, and divide tasks dynamically. Ideal for complex enterprise workflows and distributed operations.",
  },
  {
    title: "Goal-Oriented Agents",
    icon: Target,
    description:
      "Driven by defined objectives and KPIs. Continuously optimize decisions and actions to achieve measurable business outcomes.",
  },
];

export default function AgenticAITypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = agentTypes[activeIndex].icon;

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Agentic AI Types & Real-World Use Cases
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            Different types of AI agents power different levels of intelligence,
            autonomy, and enterprise transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 max-h-64 overflow-y-scroll custom-scroll">
            {agentTypes.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-md"
                      : "bg-white border-slate-200 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      isActive ? "bg-white/20" : "bg-slate-100"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-slate-700"
                      }`}
                    />
                  </div>

                  <span className="font-semibold text-md">{item.title}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md bg-white">
            <div className="bg-brand-gradient p-8 text-white relative">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-5">
                <ActiveIcon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold">
                {agentTypes[activeIndex].title}
              </h3>
            </div>

            <div className="p-8 bg-white">
              <p className="text-slate-700 leading-relaxed text-md">
                {agentTypes[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
