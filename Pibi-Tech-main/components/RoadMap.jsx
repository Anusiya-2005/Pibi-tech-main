import { SearchCheck, Rocket, Layers } from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      step: "01",
      title: "AI Readiness Audit",
      description:
        "Deep assessment of your current systems to identify high-ROI automation and AI transformation opportunities.",
      icon: SearchCheck,
    },
    {
      step: "02",
      title: "Pilot Deployment (6-8 Weeks)",
      description:
        "Launch a risk-free MVP using DevOps, Agile, and ITIL best practices to validate value and accelerate adoption.",
      icon: Rocket,
    },
    {
      step: "03",
      title: "Expansion & Scale",
      description:
        "Seamless scalability from a single solution to multiple fully integrated AI modules across the enterprise.",
      icon: Layers,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Implementation Roadmap
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            A 100% customer-success-centric delivery model powered by DevOps,
            Agile, and ITIL methodologies.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-14 left-0 right-0 h-0.5 bg-slate-500" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white border-2 border-slate-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 translate-y-[-50%] left-8 bg-white px-3">
                  <span className="text-lg font-bold text-[#248BB3]">
                    STEP {item.step}
                  </span>
                </div>

                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
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
