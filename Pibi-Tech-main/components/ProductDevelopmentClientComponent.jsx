"use client";

import {
  ArrowRight,
  Cable,
  CalendarSync,
  Database,
  PanelBottomClose,
  Target,
  TrendingUp,
  Undo2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import TechnologyStack from "@/components/TechnologyStack";
import DigitalTransformation from "@/components/DigitalTransformation";
import ProvenMethodologyRoadmap from "@/components/ProvenMethodologyRoadmap";
import EnterpriseWhyChooseUs from "@/components/EnterpriseWhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ProductDevelopmentBenefits from "@/components/ProductDevelopmentBenefits";
import CTASection from "@/components/CTASection";

const ProductDevelopmentClientComponent = () => {
  const texts = ["Design", "Build", "Launch"];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const metrics = [
    {
      value: "200+",
      unit: "",
      title: "Innovation Patents",
      description:
        "A strong foundation of original thinking and engineering excellence.",
      icon: TrendingUp,
    },
    {
      value: "4X",
      unit: "",
      title: "Faster Market Entry",
      description:
        "Optimized discovery, agile execution, and parallel development cycles.",
      icon: Target,
    },
    {
      value: "95%",
      unit: "",
      title: "On-Time Delivery",
      description:
        "Predictable timelines with transparent planning and execution.",
      icon: Cable,
    },
  ];

  const specialties = [
    {
      title: "Product Design & Engineering",
      description:
        "User-centric design combined with solid engineering to build intuitive, scalable products.",
      icon: PanelBottomClose,
      color: "bg-[#4FC6E0]",
    },
    {
      title: "POC & MVP Development",
      description:
        "Validate ideas quickly, reduce risk, and test market fit before full-scale investment.",
      icon: Database,
      color: "bg-[#0066A4]",
    },
    {
      title: "AI Product & Engineering",
      description:
        "Embed intelligence into your products using machine learning, predictive analytics, and automation.",
      icon: CalendarSync,
      color: "bg-[#02B2E3]",
    },
    {
      title: "Enterprise Product Development",
      description:
        "Robust, secure, and scalable enterprise-grade products built for complex business environments.",
      icon: Cable,
      color: "bg-[#484393]",
    },
    {
      title: "SaaS Product Development",
      description:
        "End-to-end SaaS platforms from architecture and UX to billing, security, and scalability.",
      icon: Target,
      color: "bg-[#248BB3]",
    },
    {
      title: "Product Migration & Modernization",
      description:
        "Upgrade legacy systems to modern architectures without disrupting business continuity.",
      icon: Undo2,
      color: "bg-[#1f6fb2]",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="mb-4 text-[#1f6fb2] text-2xl font-medium uppercase tracking-wide">
            Full-Cycle Product Development Company
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black">
            <span className="flex flex-col gap-1 justify-center items-center">
              We
              <span className="relative inline-block ml-2 text-[#1f6fb2] align-middle">
                <span className="animate-slide-fade">
                  {texts[index]} <br className="block md:hidden" />
                </span>
                <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 mt-2 md:mt-0">
                  Products
                </span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/70">
            We helps startups and enterprises design, engineer, and launch
            scalable digital products without unnecessary complexity.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 rounded-lg bg-linear-to-r from-[#3b82f6] to-[#10b981] px-6 py-3 text-md md:text-xl font-semibold text-white"
            >
              Build My Product
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>

            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 rounded-lg border border-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold text-[#1f6fb2] bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
            >
              Get a Project Estimate
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1f6fb2] text-white transition group-hover:bg-white group-hover:text-[#1f6fb2] group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="container-max">
          {/* <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Key KPI Section
              </span>
            </h2>
            <p className="text-black text-2xl leading-relaxed">
              Why Pi Bi Tech for Digital Product Development?
            </p>
            <p className="text-slate-700 text-xl leading-relaxed">
              Proven outcomes. Measurable impact. Reliable delivery.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                    <Icon className="w-7 h-7 text-[#248BB3]" />
                  </div>

                  <div className="mb-2 flex gap-2 justify-center items-baseline">
                    {item.value && (
                      <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                        {item.value}
                      </span>
                    )}
                    <span className="text-2xl font-semibold text-[#248BB3]">
                      {item.unit}
                    </span>
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
      <section className="section-padding bg-white" id="Services">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Full-Cycle Product Development for Modern Businesses
              </span>
            </h2>
            <p className="text-slate-700 text-xl leading-relaxed">
              We support your product at every stage whether you’re validating
              an idea or scaling a mature platform.
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

          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      <TechnologyStack />
      <DigitalTransformation />
      <ProvenMethodologyRoadmap />
      <EnterpriseWhyChooseUs />
      <IndustriesWeServe />
      <ProductDevelopmentBenefits />
      <CTASection
        title="From Idea to Launch We Build Digital Products"
        content="That Power Your Business Growth. Navigating product development doesn't have to be complex. Our expert product teams help you design, build, and scale digital solutions that meet market needs and exceed user expectations."
        ctaText1="Get a Project Estimate"
      />
    </div>
  );
};

export default ProductDevelopmentClientComponent;
