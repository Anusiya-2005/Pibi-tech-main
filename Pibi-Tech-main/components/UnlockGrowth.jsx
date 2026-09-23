import { Brain, ShieldCheck, Target, Scale, TrendingUp } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Unlock Marketing Potential
// Pi Bi Tech’s Technology & Automation Solutions
// We build end-to-end marketing systems that drive measurable outcomes.
// Lead Generation & Nurturing
// Attract, qualify, and nurture leads automatically with behavior-driven campaigns and intelligent workflows.
// Customer Re-Engagement
// Reconnect inactive customers with personalized messaging powered by data insights.
// Upselling & Cross-Selling
// Increase customer lifetime value through automated recommendations and targeted campaigns.
// Advanced Personalization
// Deliver the right message, at the right time, on the right channel — powered by AI and unified customer data.

const reasons = [
  {
    title: "Pibi Tech’s Technology & Automation Solutions",
    description:
      "We build end-to-end marketing systems that drive measurable outcomes.",
    icon: Brain,
  },
  {
    title: "Lead Generation & Nurturing",
    description:
      "Attract, qualify, and nurture leads automatically with behavior-driven campaigns and intelligent workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Re-Engagement",
    description:
      "Reconnect inactive customers with personalized messaging powered by data insights.",
    icon: Target,
  },
  {
    title: "Upselling & Cross-Selling",
    description:
      "Increase customer lifetime value through automated recommendations and targeted campaigns.",
    icon: Scale,
  },
  {
    title: "Advanced Personalization",
    description:
      "Deliver the right message, at the right time, on the right channel — powered by AI and unified customer data.",
    icon: TrendingUp,
  },
];

export default function UnlockGrowth() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Unlock Marketing Potential
            </span>
          </h2>
        </div>

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
