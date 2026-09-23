"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Cpu,
  GitBranch,
  Brain,
  Cloud,
  Database,
  ShieldCheck,
} from "lucide-react";

const transformations = [
  {
    title: "Internet of Things (IoT)",
    description:
      "Connect devices, capture real-time data, and enable intelligent automation.",
    icon: Cpu,
  },
  {
    title: "DevOps",
    description:
      "Faster releases, improved stability, and continuous delivery pipelines.",
    icon: GitBranch,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Smarter products with prediction, personalization, and automation at scale.",
    icon: Brain,
  },
  {
    title: "Cloud Computing",
    description:
      "Highly available, scalable, and cost-optimized cloud-native solutions.",
    icon: Cloud,
  },
  {
    title: "Big Data",
    description:
      "Turn massive data volumes into actionable insights and business intelligence.",
    icon: Database,
  },
  {
    title: "Blockchain",
    description:
      "Secure, transparent, and tamper-proof systems for trust-driven applications.",
    icon: ShieldCheck,
  },
];

export default function DigitalTransformation() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Essential Technologies for Enterprise-Grade Software Development
            </span>
          </h2>

          <p className="text-xl text-slate-700 leading-relaxed">
            We integrate the right technologies to future‑proof your digital
            products.
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {transformations.map((item, index) => {
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
          {transformations.map((item, index) => {
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
