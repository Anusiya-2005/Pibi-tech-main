"use client";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";

export function MainPage() {
  const texts = ["Build", "Connect", "Automate", "Optimize"];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const slides = [
    {
      key: "hero",
      eyebrow: "Agentic AI",
      title: "",
      subtitle: "",
      cta: "",
      link: "",
      hashtag: "",
    },
    {
      key: "enterprise-website-development",
      eyebrow: "Enterprise Website Development",
      title: "Web Experiences Powered by Intelligent Agents",
      subtitle:
        "Build Agent-driven websites that understand intent, adapt in real time, automate interactions, and continuously optimize engagement and conversions.",
      cta: "Build Smarter Websites",
      link: "/enterprise-website-development",
      hashtag: "#EnterpriseWeb",
    },
    {
      key: "bi",
      eyebrow: "Business Intelligence",
      title: "Turning Business Data into Decisive Intelligence",
      subtitle:
        "Design modern BI systems that transform raw data into clear insights, enabling faster decisions, measurable performance, and revenue visibility.",
      cta: "Explore BI Solutions",
      link: "/bussiness-intelligent",
      hashtag: "#InsightToImpact",
    },
    {
      key: "knowledge",
      eyebrow: "AI Knowledge Base",
      title: "Enterprise Knowledge, Made Instantly Accessible",
      subtitle:
        "Centralize information with AI-powered knowledge systems that deliver accurate answers, automate workflows, and support confident decisions.",
      cta: "Build AI Knowledge Base",
      link: "/ai-knowledge-base",
      hashtag: "#KnowledgeWithAI",
    },
    // {
    //   key: "data",
    //   eyebrow: "Data Engineering",
    //   title: "Engineering Data Foundations for AI and Growth",
    //   subtitle:
    //     "Architect scalable, reliable data pipelines that power analytics, AI initiatives, and mission-critical business applications.",
    //   cta: "Modernize Data Platforms",
    //   link: "/contact-us",
    //   hashtag: "#DataBuiltRight",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="swiper-button-prev"
        style={{
          position: "absolute",
          top: "5%",
          left: "16px",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: "50px",
          height: "50px",
          cursor: "pointer",
        }}
      >
        <ChevronLeft size={25} color="black" />
      </div>

      <div
        className="swiper-button-next"
        style={{
          position: "absolute",
          top: "5%",
          right: "16px",
          transform: "translateY(-50%)",
          zIndex: 20,
          width: "50px",
          height: "50px",
          cursor: "pointer",
        }}
      >
        <ChevronRight size={25} color="black" />
      </div>
      <Swiper
        modules={[A11y, Keyboard, Navigation, Pagination]}
        pagination={{ clickable: true, type: "progressbar" }}
        a11y={{ enabled: true }}
        keyboard={{ enabled: true }}
        enabled={true}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="relative bg-white"
      >
        <SwiperSlide key={slides[1].key}>
          <div className="mx-auto max-w-7xl text-center md:text-start px-6 pt-24">
            <div className="md:col-span-3">
              {slides[1].eyebrow && (
                <p className="mb-4 bg-linear-to-br from-[#2563eb] to-[#059669] bg-clip-text text-transparent text-2xl font-medium uppercase tracking-wide">
                  {slides[1].eyebrow}
                </p>
              )}

              <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
                {slides[1].title}
              </h1>
              <div className="mt-10 flex items-center gap-6">
                <button
                  onClick={() => router.push(slides[1].link)}
                  className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
                >
                  {slides[1].cta}
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </div>

              <p className="mt-6 max-w-xl text-xl text-black/70">
                {slides[1].subtitle}
              </p>

              <p className="mt-10 text-[#1f6fb2] w-full text-center md:text-end text-2xl">
                {slides[1].hashtag}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="1" className="bg-white">
          <div className="relative mx-auto max-w-7xl px-6 pt-18 text-center">
            <h1 className="text-5xl md:text-7xl text-[#1f6fb2] font-extrabold tracking-tight">
              <span className="flex flex-col gap-0 md:gap-1 md:flex-row justify-center items-center">
                We{"  "}
                <span className="relative inline-block ml-2 md:ml-2 align-middle">
                  <span key={index} className="animate-slide-fade">
                    {texts[index]} <br className="block md:hidden" />
                  </span>
                  <span className="bg-clip-text mt-2 md:mt-0 text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                    {"AGENTIC AI"}
                  </span>
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-black/70">
              Self-operating systems that connect your tools, automate
              decisions, and keep your business moving without constant manual
              work.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => router.push("/agentic-process-automation")}
                className="group inline-flex items-center gap-3 cursor-pointer rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-md md:text-xl font-semibold text-white transition"
              >
                Adopt AI and Automation Now
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            <div className="mt-20">
              <p className="mb-8 text-xl text-black/70">
                Trusted by Global Enterprises and Business Leaders
              </p>
            </div>
          </div>
        </SwiperSlide>
        {slides.slice(2).map((slide) => (
          <SwiperSlide key={slide.key}>
            <div className="mx-auto max-w-7xl text-center md:text-start px-6 pt-24">
              <div className="md:col-span-3">
                {slide.eyebrow && (
                  <p className="mb-4 bg-clip-text text-transparent bg-linear-to-br from-[#2563eb] to-[#059669] text-2xl font-medium uppercase tracking-wide">
                    {slide.eyebrow}
                  </p>
                )}

                <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
                  {slide.title}
                </h1>
                <div className="mt-10 flex items-center gap-6">
                  <button
                    onClick={() => router.push(slide.link)}
                    className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
                  >
                    {slide.cta}
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                      <ArrowRight size={18} />
                    </span>
                  </button>
                </div>

                <p className="mt-6 max-w-xl text-xl text-black/70">
                  {slide.subtitle}
                </p>

                <p className="mt-10 text-[#1f6fb2] w-full text-center md:text-end text-2xl">
                  {slide.hashtag}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Slider />
    </section>
  );
}
