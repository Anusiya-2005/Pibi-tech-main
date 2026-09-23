import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Plane,
  Zap,
} from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const industries = [
  {
    title: "Healthcare & Life Sciences",
    description:
      "Automated clinical workflows, intelligent data analysis, and operational efficiency at scale.",
    icon: HeartPulse,
  },
  {
    title: "Finance & Banking",
    description:
      "Risk monitoring, compliance automation, and decision intelligence for secure financial ecosystems.",
    icon: Landmark,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Personalized customer experiences, demand forecasting, and supply chain optimization.",
    icon: ShoppingCart,
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "Predictive operations, workflow orchestration, and real-time monitoring systems.",
    icon: Factory,
  },
  {
    title: "Travel & Hospitality",
    description:
      "Dynamic pricing engines, customer experience automation, and operational intelligence.",
    icon: Plane,
  },
  {
    title: "Energy & Utilities",
    description:
      "Asset monitoring, predictive maintenance, and performance optimization.",
    icon: Zap,
  },
];

export default function IndustriesAgenticAI() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Industries We Transform with Agentic AI
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            From highly regulated sectors to operationally intensive industries,
            we build intelligent agent systems that drive measurable business
            impact.
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {industries.map((item, index) => {
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
          {industries.map((item, index) => {
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
