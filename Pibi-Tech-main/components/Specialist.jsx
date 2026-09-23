"use client";

import { HeartPulse, Factory, Rocket, Globe2 } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Specialist() {
  const specialties = [
    {
      title: "Healthcare",
      description:
        "Streamlined clinical workflows and intelligent patient management processes designed for accuracy, compliance, and care continuity.",
      icon: HeartPulse,
      color: "bg-[#4FC6E0]",
    },
    {
      title: "Manufacturing",
      description:
        "Optimized facilities and AI-driven production workflows that increase efficiency, reduce downtime, and improve operational visibility.",
      icon: Factory,
      color: "bg-[#0066A4]",
    },
    {
      title: "SaaS Startups",
      description:
        "Scalable system architecture and AI acceleration enabling 5× faster agile execution and speed to market.",
      icon: Rocket,
      color: "bg-[#02B2E3]",
    },
    {
      title: "GCC",
      description:
        "Localized intelligence systems designed to navigate regional regulations, supply chains, and market dynamics with confidence.",
      icon: Globe2,
      color: "bg-[#484393]",
    },
  ];

  const Card = ({ item }) => {
    const Icon = item.icon;

    return (
      <div
        className={`border border-slate-200 relative rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 ${item.color} hover:brightness-110 text-white`}
      >
        <div className="flex items-center justify-center border w-max p-4 border-white rounded-full mb-5">
          <Icon className="w-12 h-12" />
        </div>

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

        <h3 className="text-xl font-bold mb-3">{item.title}</h3>

        <p className="leading-relaxed text-md text-white/80">
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <section className="section-padding bg-white" id="Services">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              We are specialists at
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            Tailored vertical AI agents built for high-stakes industries where
            precision, compliance, and performance matter most.
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {specialties.map((item, index) => (
              <SwiperSlide className="py-10 h-full" key={index}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
