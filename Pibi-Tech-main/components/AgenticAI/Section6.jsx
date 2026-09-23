"use client";

const industries = [
  {
    title: "Retail & E-commerce",
    description: "scalable automation and customer experience",
  },
  {
    title: "Finance & Banking",
    description: "intelligent compliance and operational workflows",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "administrative efficiency and data coordination",
  },
  {
    title: "Manufacturing & Logistics",
    description: "process optimization and predictive operations",
  },
];

const Section6 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Industries benefiting from agentic AI
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            Agentic systems adapt to sector-specific workflows and compliance
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-10 
                         hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-2 h-16 bg-[#248BB3] rounded-full group-hover:h-20 transition-all duration-300" />

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
