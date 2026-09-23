import { Brain, ShieldCheck, Target, Scale, TrendingUp } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const reasons = [
  {
    title: "Proven Agentic AI Expertise",
    description:
      "Hands-on experience designing, deploying, and scaling real-world agentic systems across industries.",
    icon: Brain,
  },
  {
    title: "Enterprise-Grade Architecture",
    description:
      "Built for reliability, scalability, security, and performance — not experiments.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic AI Partner",
    description:
      "We align AI initiatives with business objectives, not just technology adoption.",
    icon: Target,
  },
  {
    title: "Responsible AI Approach",
    description:
      "Governance, transparency, security, and ethical guardrails built in from day one.",
    icon: Scale,
  },
  {
    title: "Long-Term Value Creation",
    description:
      "AI systems designed to improve continuously and deliver sustained ROI.",
    icon: TrendingUp,
  },
];

export default function WhyAgenticAi() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Why Enterprises Choose Pi Bi Technologies
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            We combine deep technical expertise with strategic execution to
            build enterprise-ready Agentic AI systems that create measurable,
            long-term impact.
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={index} className="py-10 h-full">
                  <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f6fb2]/10">
                      <Icon className="h-7 w-7 text-[#1f6fb2]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f6fb2]/10">
                  <Icon className="h-7 w-7 text-[#1f6fb2]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
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
