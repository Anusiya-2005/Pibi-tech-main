import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Plane,
} from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const industries = [
  {
    title: "Faster, Cost-Efficient Marketing Operations",
    description:
      "Automate repetitive workflows, reduce manual effort, and accelerate campaign execution — saving time and operational costs.",
    icon: HeartPulse,
  },
  {
    title: "Scalability & Flexibility for a Dynamic Market",
    description:
      "Adapt quickly to market changes, launch campaigns faster, and scale effortlessly as your business grows.",
    icon: Landmark,
  },
  {
    title: "Efficient Data Processing for Valuable Insights",
    description:
      "Turn scattered data into actionable intelligence with integrated platforms and real-time analytics.",
    icon: ShoppingCart,
  },
  {
    title: "Omnichannel Engagement That Converts",
    description:
      "Deliver consistent, personalized communication across email, web, social, CRM, and paid channels.",
    icon: Factory,
  },
  {
    title: "Smoother Operations & Elevated Customer Experience",
    description:
      "Streamline processes and create seamless user journeys that improve engagement and brand loyalty.",
    icon: Plane,
  },
];

export default function WhyMarGrowth() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Why You Need MarTech for Your Conventional Marketing Needs
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
