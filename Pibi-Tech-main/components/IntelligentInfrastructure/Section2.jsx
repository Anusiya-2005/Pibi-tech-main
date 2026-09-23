"use client";

const benefits = [
  "Batch cycles reduced from hours to minutes",
  "Higher freshness for analytics and AI workloads",
  "Fully managed, low-maintenance pipelines",
];

const Section1 = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Core Infrastructure Solutions
              </span>
            </h2>

            <p className="text-slate-900 text-xl font-bold leading-relaxed mb-6">
              Data Engineering Foundation
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Robust, incremental pipelines ingest operational databases,
              streaming data, and files — without fragile manual orchestration.
            </p>
          </div>

          <div className="relative">
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                Business outcomes
              </h3>

              <div className="space-y-6">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#248BB3]/10">
                      <div className="w-2.5 h-2.5 bg-[#248BB3] rounded-full" />
                    </div>

                    <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#248BB3]/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
