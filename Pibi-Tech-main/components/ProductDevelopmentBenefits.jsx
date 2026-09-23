"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Target,
  GitBranch,
  Rocket,
  BriefcaseBusiness,
  Clock,
  Cpu,
} from "lucide-react";

const benefits = [
  {
    title: "Tailored Product Solutions",
    description:
      "Products built specifically around your business goals, users, and long‑term vision   never one‑size‑fits‑all.",
    icon: Target,
  },
  {
    title: "Agile & Transparent Process",
    description:
      "Full visibility into progress, priorities, and outcomes through an agile, collaborative delivery model.",
    icon: GitBranch,
  },
  {
    title: "Reduced Cost & Time to Market",
    description:
      "Optimized development cycles that accelerate launches while maintaining quality and scalability.",
    icon: Rocket,
  },
  {
    title: "Extensive Industry Experience",
    description:
      "Deep domain expertise shaped by real‑world business challenges across multiple industries.",
    icon: BriefcaseBusiness,
  },
  {
    title: "On-Time Project Delivery",
    description:
      "Predictable timelines and reliable execution you can confidently plan around.",
    icon: Clock,
  },
  {
    title: "Product Engineering in Our DNA",
    description:
      "Engineering excellence embedded into every decision, system, and line of code we deliver.",
    icon: Cpu,
  },
];

export default function ProductDevelopmentBenefits() {
  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Reap the Benefits of Custom Product Development
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            We combine strategic thinking, engineering rigor, and domain
            expertise to build products that deliver measurable business value.
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <SwiperSlide className="py-10 h-full" key={index}>
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

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
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
