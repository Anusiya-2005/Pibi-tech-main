"use client";

const steps = [
  {
    title: "Knowledge Discovery & Classification",
    description:
      "Audit repositories, map structured and unstructured data sources, and define governance rules for enterprise alignment.",
  },
  {
    title: "Data Structuring & Enrichment",
    description:
      "Normalize content, segment documents into meaningful units, and attach semantic metadata for contextual retrieval.",
  },
  {
    title: "Embedding & Vectorization",
    description:
      "Transform enterprise knowledge into searchable vector representations for semantic indexing and similarity matching.",
  },
  {
    title: "Retrieval Grounding",
    description:
      "Constrain AI-generated responses to verified enterprise sources to ensure accuracy, explainability, and compliance.",
  },
  {
    title: "Workflow Integration",
    description:
      "Embed contextual intelligence directly into CRM platforms, portals, collaboration systems, and service tools.",
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Continuously refine retrieval precision, improve ranking performance, and expand knowledge coverage over time.",
  },
];

export default function AIImplementationSequenceSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Engineering Approach
            </span>
          </h2>
          <p className="text-slate-700 text-xl">
            Structured Execution. Continuous Evolution.
          </p>
        </div>

        <div className="max-w-7xl mx-auto p-3">
          <div className="border-l-0 border-b-0 border-2 p-5 pb-20 border-slate-200 rounded-r-xl relative">
            <div className="bg-[#1f6fb2] w-4 h-4 absolute hidden lg:block rounded-full top-0 left-0 transform -translate-1/2"></div>
            <div className="grid lg:grid-cols-3 gap-y-24 gap-x-10 relative">
              {steps.slice(0, 3).map((step, index) => {
                return (
                  <div key={index} className={`relative`}>
                    <div className="absolute -top-19 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <span className="text-[#1f6fb2] font-semibold text-lg mb-4">
                        Step-{index + 1}
                      </span>

                      <div className="relative z-10 w-6 h-6 rounded-full bg-[#1f6fb2] shadow-md">
                        <div className="absolute inset-0 rounded-full bg-[#1f6fb2]/20 scale-150"></div>
                      </div>

                      <div className="w-0.5 h-12 border-l-2 border-dashed border-[#1f6fb2] my-2"></div>
                    </div>
                    <div className="bg-slate-50 mt-14 border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
                      <h3 className="font-bold text-lg mb-3 text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-r-0 rounded-tr-[-10px] border-2 p-5 pb-20 border-slate-200 rounded-l-xl relative">
            <div className="grid lg:grid-cols-3 gap-y-24 gap-x-10 relative">
              {steps.slice(3, 6).map((step, index) => {
                return (
                  <div key={index} className={`relative`}>
                    <div className="absolute -top-19 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <span className="text-[#1f6fb2] font-semibold text-lg mb-4">
                        Step-{index + 4}
                      </span>

                      <div className="relative z-10 w-6 h-6 rounded-full bg-[#1f6fb2] shadow-md">
                        <div className="absolute inset-0 rounded-full bg-[#1f6fb2]/20 scale-150"></div>
                      </div>

                      <div className="w-0.5 h-12 border-l-2 border-dashed border-[#1f6fb2] my-2"></div>
                    </div>
                    <div className="bg-slate-50 mt-14 border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
                      <h3 className="font-bold text-lg mb-3 text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#1f6fb2] w-4 h-4 absolute hidden lg:block rounded-full top-0 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
