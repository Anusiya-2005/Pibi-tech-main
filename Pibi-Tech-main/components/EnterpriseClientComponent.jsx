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
import ModernTechStack from "@/components/ModernTechStack";
import Image from "next/image";
import LegacyPainPoints from "@/components/LegacyPainPoints";
import NextJsAdvantage from "@/components/NextJsAdvantage";
import OurProcess from "@/components/OurProcess";
import CTASection from "@/components/CTASection";

const EnterpriseClientComponent = () => {
  const texts = ["AEM", "Sitecore", "Drupal", "Any CMS"];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const metrics = [
    {
      value: "3-5x",
      unit: "Faster",
      title: "Load Times",
      description:
        "Deliver significantly faster page speeds that enhance user experience and directly improve conversion rates.",
      icon: TrendingUp,
    },
    {
      value: "90+",
      unit: "",
      title: "Lighthouse Scores",
      description:
        "Achieve consistently high scores across Performance, Accessibility, Best Practices, and SEO.",
      icon: Target,
    },
    {
      value: "50%",
      unit: "Lower",
      title: "Bounce Rate",
      description:
        "Keep users engaged longer with fast, responsive, and intuitive user experiences.",
      icon: Undo2,
    },
  ];

  const specialties = [
    {
      title: "Multi-Lingual Website Development",
      description:
        "Global-ready websites with seamless language and localization support.",
      icon: PanelBottomClose,
      color: "bg-[#4FC6E0]",
    },
    {
      title: "Sanity & Headless CMS Implementations",
      description:
        "Flexible content management without sacrificing performance.",
      icon: Database,
      color: "bg-[#0066A4]",
    },
    {
      title: "AI Automation & Workflow Enablement",
      description:
        "Intelligent automation to streamline publishing and operations.",
      icon: CalendarSync,
      color: "bg-[#02B2E3]",
    },
    {
      title: "CRM & ERP Integrations",
      description:
        "Seamless integration with enterprise systems for unified data flow.",
      icon: Cable,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-3 md:px-6 py-18 text-center">
          <h1 className="text-4xl md:text-7xl text-[#1f6fb2] font-bold md:font-extrabold tracking-tight">
            <span className="flex flex-col gap-0 md:gap-1 justify-center items-center">
              Create & Migrate {"  "}
              <br />
              <span className="relative inline-block ml-2 md:ml-2 align-middle">
                <span key={index} className="animate-slide-fade">
                  {texts[index]} <br className="block md:hidden" />
                </span>
                <span className="bg-clip-text mt-2 md:mt-0 text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                  {" "}
                  to <br className="block md:hidden" /> Next.js
                </span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/70">
            Transform your legacy website into a lightning-fast,
            developer-friendly Next.js application.
          </p>

          <div className="mt-10 flex justify-center items-center gap-6 flex-col md:flex-row">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
            >
              Get a Migration Quote
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
            <button
              onClick={() => router.push("/schedule-meeting")}
              className="group inline-flex items-center gap-3 cursor-pointer rounded-lg text-[#1f6fb2] border border-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
            >
              Talk to an Expert
              <span className="flex h-9 w-9 items-center justify-center rounded-md text-white bg-[#1f6fb2] transition group-hover:text-[#1f6fb2] group-hover:bg-white group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/50">
            Built for modern businesses that demand performance, scalability,
            and a future-proof digital architecture.
          </p>
        </div>
      </section>
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Measurable Business Impact
              </span>
            </h2>
            <p className="text-slate-700 text-xl leading-relaxed">
              Enterprises that migrate from traditional CMS platforms to Next.js
              consistently see measurable improvements across the metrics that
              matter most to business growth.
            </p>
          </div>

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

                  <div className="mb-2">
                    <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                      {item.value}
                    </span>
                    <span className="ml-2 text-2xl font-semibold text-[#248BB3]">
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
      <ModernTechStack />
      <LegacyPainPoints />
      <NextJsAdvantage />
      <OurProcess />
      <CTASection
        title="Ready to Leave Traditional Websites Behind?"
        content="Transform your website into a modern, high-performance Next.js application that delivers real business results."
        ctaText1="Start Your Migration"
        ctaText2="Talk to an Expert"
        ctaLink2="schedule-meeting"
      />
    </div>
  );
};

export default EnterpriseClientComponent;
