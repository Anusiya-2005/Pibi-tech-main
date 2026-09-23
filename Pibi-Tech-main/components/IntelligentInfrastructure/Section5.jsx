"use client";

const capabilities = [
  {
    capability: "BI & Dashboards",
    value: "Live, trusted analytics with near real-time data",
  },
  {
    capability: "Data Science & ML",
    value: "Faster model iteration and deployment cycles",
  },
  {
    capability: "AI / LLM / Agentic Systems",
    value: "Context-aware intelligence built on unified datasets",
  },
  {
    capability: "Real-Time Analytics",
    value: "Insights available at decision speed",
  },
];

const Section5 = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Business Capabilities Enabled
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            When infrastructure performs, business systems accelerate.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 bg-[#248BB3]/10 px-10 py-6 text-center">
            <div className="text-sm font-semibold text-[#248BB3] uppercase tracking-wide">
              Business Capability
            </div>
            <div className="text-sm font-semibold text-[#248BB3] uppercase tracking-wide">
              Value Delivered
            </div>
          </div>

          <div>
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="grid text-center md:text-start grid-cols-2 px-4 md:px-10 py-3 md:py-8 border-t border-slate-200 hover:bg-white transition-all duration-300"
              >
                <div className="mb-2 md:mb-0">
                  <p className="text-slate-900 font-semibold">
                    {item.capability}
                  </p>
                </div>

                <div>
                  <p className="text-slate-700 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
