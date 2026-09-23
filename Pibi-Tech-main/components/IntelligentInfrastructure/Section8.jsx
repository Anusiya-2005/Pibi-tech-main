"use client";

const transformations = [
  {
    before: "Fragmented data silos",
    after: "Unified, live analytics foundation",
  },
  {
    before: "Slow ML development cycles",
    after: "Rapid experimentation & deployment",
  },
  {
    before: "Escalating cloud costs",
    after: "Optimized, predictable infrastructure spend",
  },
  {
    before: "Vendor lock-in",
    after: "Open, flexible architecture",
  },
];

const Section8 = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Business Transformation Outcomes
            </span>
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2">
            <div className="bg-slate-100 px-4 md:px-10 py-3 md:py-8 border-b md:border-b-0 md:border-r border-slate-200">
              <h3 className="text-lg font-semibold text-center text-slate-900">
                Before Modern Infrastructure
              </h3>
            </div>

            <div className="bg-[#248BB3]/10 px-4 md:px-10 py-3 md:py-8">
              <h3 className="text-lg font-semibold text-center text-[#248BB3]">
                After Intelligent Infrastructure
              </h3>
            </div>
          </div>

          {transformations.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-slate-200"
            >
              <div className="px-4 md:px-10 py-3 md:py-8 text-center border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50">
                <p className="text-slate-600 leading-relaxed">{item.before}</p>
              </div>

              <div className="px-4 md:px-10 py-3 md:py-8 text-center bg-white">
                <p className="text-slate-900 font-medium leading-relaxed">
                  {item.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;
