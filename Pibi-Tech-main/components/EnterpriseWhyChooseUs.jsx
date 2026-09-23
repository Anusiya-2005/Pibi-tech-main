"use client";

import { LayoutGrid, Smartphone, Layers, Zap, Plug, Brain } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const EnterpriseWhyChooseUs = () => {
  const items = [
    {
      title: "Custom Web Development",
      description:
        "Dynamic, scalable web applications engineered to handle real-world business complexity and long-term growth.",
      icon: LayoutGrid,
      color: "bg-[#1f6fb2]",
    },
    {
      title: "Custom Mobile App Development",
      description:
        "High-performance mobile applications for Android, iOS, and emerging platforms with seamless UX.",
      icon: Smartphone,
      color: "bg-[#248BB3]",
    },
    {
      title: "Cross-Platform Development",
      description:
        "Build once, deploy everywhere without compromising performance, security, or user experience.",
      icon: Layers,
      color: "bg-[#0066A4]",
    },
    {
      title: "Low-Code / No-Code Development",
      description:
        "Accelerate delivery timelines while maintaining flexibility, governance, and enterprise control.",
      icon: Zap,
      color: "bg-[#02B2E3]",
    },
    {
      title: "API Development & Integration",
      description:
        "Secure, scalable APIs that enable seamless data flow across systems, platforms, and partners.",
      icon: Plug,
      color: "bg-[#484393]",
    },
    {
      title: "AI & Machine Learning Integration",
      description:
        "Embed intelligence into your products with predictive analytics, automation, and smarter decisions.",
      icon: Brain,
      color: "bg-[#4FC6E0]",
    },
  ];

  const Card = ({ item }) => {
    const Icon = item.icon;

    return (
      <div
        className={`relative border border-slate-200 rounded-2xl p-6 h-full text-white transition-all duration-300 hover:shadow-xl hover:brightness-110 ${item.color}`}
      >
        <div className="flex items-center justify-center w-max p-4 border border-white rounded-full mb-5">
          <Icon className="w-10 h-10" />
        </div>

        <h3 className="text-xl font-bold mb-3">{item.title}</h3>

        <p className="text-md leading-relaxed text-white/80">
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Why Clients Choose Pi Bi Tech
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
            Custom Software Product Development built for scale, speed, and
            predictable outcomes.
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="py-10">
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseWhyChooseUs;
