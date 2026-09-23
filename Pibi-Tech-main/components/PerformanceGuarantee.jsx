import { Clock, TrendingDown, ShieldCheck } from "lucide-react";

export default function PerformanceGuarantee() {
  const metrics = [
    {
      value: "6–8",
      unit: "Weeks",
      title: "Full Deployment",
      description:
        "Complete production deployment in 6–8 weeks  compared to the 3–4 month industry average.",
      icon: Clock,
    },
    {
      value: "50–60%",
      unit: "Reduction",
      title: "Administrative Effort",
      description:
        "Significant reduction in administrative workload for our leading enterprise and healthcare providers.",
      icon: TrendingDown,
    },
    {
      value: "99%",
      unit: "Risk-Free",
      title: "MVP Launches",
      description:
        "Near risk-free MVP launches designed to ensure immediate market entry and early traction.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Performance Guarantee
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            Measurable outcomes we commit to not aspirational promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <div className="mb-2">
                  <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                    {item.value}
                  </span>
                  <span className="ml-2 text-2xl font-semibold text-[#248BB3]">
                    {item.unit}
                  </span>
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
}
