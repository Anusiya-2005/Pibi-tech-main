"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Keyboard,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";

export function MainPage() {
  const router = useRouter();
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const slides = [
    {
      key: "health-hero",
      eyebrow: "AI in Healthcare",
      title: (
        <>
          Engineering the Next <br className="hidden md:block"/>
          Generation of <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1f6fb2] to-[#2ec4b6]">Digital Health Systems</span>
        </>
      ),
      subtitle:
        "Pibi Tech engineers secure, scalable digital health platforms by combining strong architecture, data engineering, and Agentic AI capabilities. Move from legacy systems to reliable, AI-driven solutions that improve patient outcomes.",
      cta: "Consult Our Strategy Team",
      link: "/contact-us",
      hashtag: "",
      videoUrl: "/healthlfinal.mp4",
    },
    {
      key: "enterprise-website-development",
      eyebrow: "Enterprise Website Development",
      title: (
        <>
          Web Experiences Powered by <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1f6fb2] to-[#2ec4b6]">Intelligent Agents</span>
        </>
      ),
      subtitle:
        "Build Agent-driven websites that understand intent, adapt in real time, automate interactions, and continuously optimize engagement and conversions.",
      cta: "Build Smarter Websites",
      link: "/enterprise-website-development",
      hashtag: "#EnterpriseWeb",
      videoUrl: "/reatilfinal.mp4",
    },
    {
      key: "bi",
      eyebrow: "Business Intelligence",
      title: (
        <>
          Turning Business Data into <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1f6fb2] to-[#2ec4b6]">Decisive Intelligence</span>
        </>
      ),
      subtitle:
        "Design modern BI systems that transform raw data into clear insights, enabling faster decisions, measurable performance, and revenue visibility.",
      cta: "Explore BI Solutions",
      link: "/bussiness-intelligent",
      hashtag: "#InsightToImpact",
      videoUrl: "/g (1).mp4",
    },
    {
      key: "knowledge",
      eyebrow: "AI Knowledge Base",
      title: (
        <>
          Enterprise Knowledge, Made <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1f6fb2] to-[#2ec4b6]">Instantly Accessible</span>
        </>
      ),
      subtitle:
        "Centralize information with AI-powered knowledge systems that deliver accurate answers, automate workflows, and support confident decisions.",
      cta: "Build AI Knowledge Base",
      link: "/ai-knowledge-base",
      hashtag: "#KnowledgeWithAI",
      videoUrl: "/g (2).mp4",
    },
  ];

  // Helper to handle video playback only on the active slide
  const handleVideoPlayback = (swiper) => {
    if (!swiper || !swiper.slides) return;
    const allSlides = Array.from(swiper.slides);
    allSlides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (video) {
        if (index === swiper.activeIndex) {
          video.currentTime = 0;
          video.play().catch(e => console.log("Auto-play prevented", e));
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          // Play the first video once swiper initializes
          setTimeout(() => handleVideoPlayback(swiper), 100);
        }}
        onSlideChange={(swiper) => {
          handleVideoPlayback(swiper);
        }}
        modules={[A11y, Keyboard, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        // disable autoplay since we are using video onEnded to slide next
        autoplay={{ delay: 100000, disableOnInteraction: false }}
        a11y={{ enabled: true }}
        keyboard={{ enabled: true }}
        enabled={true}
        loop={true}
        className="relative bg-slate-950 h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key} data-swiper-autoplay="100000">
            <div className="relative w-full h-full flex items-center bg-slate-950">
              {slide.videoUrl && (
                <video
                  muted
                  playsInline
                  onEnded={() => swiperInstance?.slideNext()}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                </video>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/70 via-[#030712]/20 to-transparent z-0"></div>
              
              <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 text-left">
                <div className="max-w-3xl">
                  {slide.eyebrow && (
                    <p className="mb-4 text-teal-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] animate-on-active">
                      {slide.eyebrow}
                    </p>
                  )}

                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-on-active delay-100">
                    {slide.title}
                  </h1>
                  
                  <p className="mt-6 max-w-2xl text-lg md:text-xl text-sky-100 drop-shadow-[0_2px_4px_rgba(31,111,178,0.5)] mb-10 leading-relaxed animate-on-active delay-200 font-medium">
                    {slide.subtitle}
                  </p>

                  <div className="animate-on-active delay-300">
                    <button
                      onClick={() => router.push(slide.link)}
                      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-[#1f6fb2] to-[#2ec4b6] px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(31,111,178,0.3)] hover:shadow-[0_0_30px_rgba(46,196,182,0.4)]"
                    >
                      {slide.cta}
                      <ArrowRight size={20} className="transition group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 24px;
          border-radius: 5px;
          transition: width 0.3s ease;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </section>
  );
}
