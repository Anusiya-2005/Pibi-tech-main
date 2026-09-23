"use client";

import {
  AppWindowMac,
  ArrowRight,
  BotMessageSquare,
  Cloud,
  PanelsTopLeft,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const offerings = [
  {
    id: 1,
    title: "Enterprise Website Development",
    description:
      "An AI-powered growth driven website that works as a 24/7 sales and qualification system that attracts, qualifies, and converts visitors into revenue opportunities  not just a digital brochure.",
    link: "enterprise-website-development",
    icon: PanelsTopLeft,
    color: "bg-[#4FC6E0]",
  },
  {
    id: 2,
    title: "Product Development & Engineering",
    description:
      "A full-stack product engineering partnership to take your idea from concept to design, build, and scale products that are reliable, adaptable, and market fit.",
    link: "product-development",
    icon: Rocket,
    color: "bg-[#0066A4]",
  },
  {
    id: 3,
    title: "AI & Agentic Process Automation",
    description:
      "Autonomous AI agents that replace repetitive work, accelerate decisions, and reduce operational costs  and drive measurable efficiency gains.",
    link: "agentic-process-automation",
    icon: BotMessageSquare,
    color: "bg-[#02B2E3]",
  },
  {
    id: 4,
    title: "Application Development",
    description:
      "Robust digital applications engineered for performance, security, and continuous business growth.",
    link: "application-development",
    icon: AppWindowMac,
    color: "bg-[#484393]",
  },
  {
    id: 5,
    title: "Enterprise Infrastructure & Cloud Ops",
    description:
      "A resilient, secure cloud foundation that supports business continuity, scale, and operational efficiency.",
    link: "cloud-ops",
    icon: Cloud,
    color: "bg-[#4FC6E0]",
  },
  {
    id: 6,
    title: "MarTech & Growth Hacking",
    description:
      "A technology-driven growth system that consistently generates qualified leads and converts them into predictable revenue.",
    link: "growth-marketing",
    icon: TrendingUp,
    color: "bg-[#0066A4]",
  },
];

const OfferingCard = ({ offering }) => (
  <div
    className={`${offering.color} rounded-xl md:min-h-100 relative p-6 border border-slate-200 h-full flex flex-col justify-between`}
  >
    <div className="absolute -top-5 -right-5 rotate-12 opacity-20">
      <div className="w-32 aspect-square relative">
        <Image
          src="/pi.png"
          alt="PI-BI Technologies"
          fill
          className="object-contain"
        />
      </div>
    </div>

    <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
      <offering.icon className="w-10 h-10" />
    </div>

    <div>
      <h4 className="text-xl font-bold text-white mb-3">{offering.title}</h4>
      <p className="text-white/80 leading-relaxed mb-6">
        {offering.description}
      </p>
    </div>

    <Link
      href={offering.link}
      className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
    >
      Know more
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

export default function MissionVisionOfferings() {
  return (
    <section className="section-padding bg-white" id="Services">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          <span className="bg-clip-text text-transparent bg-brand-gradient">
            Our Offerings
          </span>
        </h2>

        <div>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {offerings.map((offering) => (
              <SwiperSlide className="py-10 h-full" key={offering.id}>
                <OfferingCard offering={offering} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
