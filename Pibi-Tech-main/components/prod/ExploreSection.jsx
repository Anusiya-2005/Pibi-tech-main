import { ArrowRight } from "lucide-react";

export function ExploreSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-base md:text-xl text-gray-900 leading-relaxed">
                Businesses today don't simply need generic AI, they need AI
                agents that are tailor made for a specific purpose and can do
                actual work, solve real world problems, and provide a measurable
                ROI from day one.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-xl text-gray-900 leading-relaxed">
                Accelirate's 101 AI Agents is your go to resource for seeing
                exactly how agentic AI can be applied in different function
                areas across industries. AI Agents work autonomously to
                automate, adapt, and improve workflows end-to-end. Each AI Agent
                listed here is an actionable idea designed to show what's
                possible when you combine intelligent automation with deep,
                industry-specific expertise. This can turn repetitive tasks into
                smart, self-improving processes with minimal human intervention.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[450px]"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/6dc0e5340fe347133dd100756e70f26bf7140b05?width=1080')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px] md:min-h-[450px]">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Explore. Choose. Launch.
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed max-w-lg">
                  Browse our list of 101 AI Agents, pick the ones that fit your
                  business best, and team up with Accelirate to build, launch,
                  and grow your smart AI workforce in just 5 weeks.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Want to see how it works?
                </h3>
                <button className="group flex items-center gap-4 bg-white text-[#473BF0] font-medium px-4 pr-0 rounded transition-all hover:shadow-lg">
                  <span className="py-4">Request a Demo</span>
                  <div className="bg-[#261ACF] p-4 rounded-r flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
