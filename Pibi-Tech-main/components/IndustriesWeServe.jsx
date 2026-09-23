"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { HeartPulse, Car, Landmark, ShoppingBag } from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    description:
      "Digital health platforms, patient engagement solutions, and compliance‑ready systems built for scale and security.",
    icon: HeartPulse,
  },
  {
    title: "Automotive",
    description:
      "Connected platforms, real‑time analytics, and operational systems powering next‑generation mobility.",
    icon: Car,
  },
  {
    title: "Fintech",
    description:
      "Secure, scalable, and regulation‑ready financial solutions engineered for trust and performance.",
    icon: Landmark,
  },
  {
    title: "Retail",
    description:
      "Omnichannel commerce platforms, personalization engines, and demand intelligence for modern retail.",
    icon: ShoppingBag,
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Industries We Serve
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            Driving measurable growth across key industries with modern,
            scalable, and performance focused digital solutions.
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
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                      <Icon className="w-7 h-7 text-[#248BB3]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-md leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-md leading-relaxed">
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
