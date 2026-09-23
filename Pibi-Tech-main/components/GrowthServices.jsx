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

// 1️⃣ Marketing Tech & Automation
// Build a future-ready marketing ecosystem tailored to your business goals.
// MarTech-Focused Product Development

// MarTech Implementation & Integration

// Customer Data Platform (CDP) Expertise

// UI/UX & Design Engineering

// Strategic Planning & Campaign Execution

// 2️⃣ Revenue Operations (RevOps)
// Align marketing, sales, and operations for predictable revenue growth.
// Data Analytics & Performance Reporting

// Data Integration & Management

// Forecasting & Strategic Planning

// Tech Stack Optimization

// Generative AI & Intelligent Automation

// 3️⃣ Sales Prospecting & Growth Enablement
// Accelerate your go-to-market strategy with data-driven sales systems.
// Go-To-Market (GTM) Strategy

// Customer Experience (CX) Strategy & Journey Mapping

// Pipeline Generation & Sales Engineering

// New Business Acquisition Systems

// Sales Account Management Enablement

const services = [
  {
    title: "MarTech Strategy & Product Development",
    description:
      "Build a future-ready marketing ecosystem tailored to your business goals.",
    icon: Brain,
    points: [
      "MarTech-Focused Product Development",
      "MarTech Implementation & Integration",
      "Customer Data Platform (CDP) Expertise",
      "UI/UX & Design Engineering",
      "Strategic Planning & Campaign Execution",
    ],
  },
  {
    title: "Revenue Operations (RevOps) Optimization",
    description:
      "Align marketing, sales, and operations for predictable revenue growth.",
    icon: Bot,
    points: [
      "Data Analytics & Performance Reporting",
      "Data Integration & Management",
      "Forecasting & Strategic Planning",
      "Tech Stack Optimization",
      "Generative AI & Intelligent Automation",
    ],
  },
  {
    title: "Sales Prospecting & Growth Enablement",
    description:
      "Accelerate your go-to-market strategy with data-driven sales systems.",
    icon: Workflow,
    points: [
      "Go-To-Market (GTM) Strategy",
      "Customer Experience (CX) Strategy & Journey Mapping",
      "Pipeline Generation & Sales Engineering",
      "New Business Acquisition Systems",
      "Sales Account Management Enablement",
    ],
  },
];

export default function GrowthServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Services
            </span>
          </h2>
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
