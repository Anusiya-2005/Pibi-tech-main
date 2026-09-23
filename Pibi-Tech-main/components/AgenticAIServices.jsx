import {
  Brain,
  Bot,
  Workflow,
  Network,
  Database,
  RefreshCcw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Custom AI Strategy & Consultation",
    description: "We design the foundation before building intelligence.",
    icon: Brain,
    points: [
      "Workflow Analysis & Automation Readiness",
      "AI Architecture & System Design",
      "Model & Algorithm Selection",
      "Integration Planning (Enterprise Systems)",
      "Scalability & Performance Assessment",
      "Secure Data Pipeline Strategy",
    ],
  },
  {
    title: "AI Agent Development",
    description:
      "We build intelligent agents designed to think, adapt, and act.",
    icon: Bot,
    points: [
      "Reinforcement Learning-Driven Agents",
      "Multi-Tasking & Goal-Oriented Agents",
      "Context-Aware Perception Systems",
      "Natural Language Understanding & Actions",
      "Adaptive Decision Logic",
      "Modular & Scalable Agent Design",
    ],
  },
  {
    title: "Autonomous Workflow Automation",
    description: "Replace static workflows with self-driven execution.",
    icon: Workflow,
    points: [
      "Conditional & Context-Based Automation",
      "API & Enterprise System Integration",
      "Event-Driven Triggers",
      "RPA Enhanced with AI Agents",
      "Intelligent Exception Handling",
      "End-to-End Process Automation",
    ],
  },
  {
    title: "Multi-Agent Collaboration Systems",
    description: "Multiple agents working together — like digital teams.",
    icon: Network,
    points: [
      "Inter-Agent Communication Protocols",
      "Smart Task Allocation Algorithms",
      "Collaborative Decision-Making Models",
      "Shared Knowledge & Memory Systems",
      "Continuous Information Monitoring",
      "Cloud-Native Scalability",
    ],
  },
  {
    title: "LLM & RAG Integrations",
    description: "Turn enterprise data into actionable intelligence.",
    icon: Database,
    points: [
      "CRM, ERP & Cloud Platform Integrations",
      "Generative AI & LLM Enablement",
      "API & Middleware-Based Connectivity",
      "Real-Time Data Synchronization",
      "Secure Knowledge Retrieval (RAG)",
    ],
  },
  {
    title: "Continuous Learning & Optimization",
    description: "AI that improves long after deployment.",
    icon: RefreshCcw,
    points: [
      "AI Performance Tracking & Analytics",
      "Proactive Model Updates",
      "Drift Detection & Error Prevention",
      "Continuous Decision Refinement",
      "Long-Term ROI Optimization",
    ],
  },
  {
    title: "Security, AI Governance & Guardrails",
    description: "Enterprise-grade AI you can trust.",
    icon: ShieldCheck,
    points: [
      "Role-Based Access Controls",
      "Ethical AI & Compliance Frameworks",
      "Secure Data Handling",
      "AI Safety Guardrails",
      "Monitoring & Auditability",
    ],
  },
];

export default function AgenticAIServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Agentic AI Development Services
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            We build AI systems that think, decide, and act autonomously —
            engineered for enterprise-grade performance and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="bg-brand-gradient p-8 text-white relative">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-5">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="p-8 h-full bg-white">
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
