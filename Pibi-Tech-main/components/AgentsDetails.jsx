"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/controller";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const AgentsDetails = () => {
  const router = useRouter();

  const cards = [
    {
      id: 4,
      number: "01",
      title: "Business Intelligence",
      description:
        "We design modern BI systems that turn raw data into clear insights, enabling faster decisions, performance tracking, and revenue visibility across the organization.",
      tags: [
        "Data Modeling",
        "Analytics Dashboards",
        "KPI Frameworks",
        "Self-Service BI",
      ],
      onClick: () => router.push("/bussiness-intelligent"),
      variant: "light",
    },
    {
      id: 5,
      number: "02",
      title: "AI Knowledge Base",
      description:
        "We build intelligent, searchable knowledge systems that centralize enterprise information and power accurate answers, automation, and decision support.",
      tags: [
        "Knowledge Graphs",
        "Semantic Search",
        "Vector Databases",
        "Enterprise RAG",
      ],
      onClick: () => router.push("/ai-knowledge-base"),
      variant: "blue",
    },
    // {
    //   id: 6,
    //   number: "03",
    //   title: "Data Engineering",
    //   description:
    //     "We architect scalable data pipelines and platforms that ensure reliable, high-quality data flows for analytics, AI, and business applications.",
    //   tags: [
    //     "Data Pipelines",
    //     "ETL / ELT",
    //     "Streaming Data",
    //     "Data Warehousing",
    //   ],
    //   onClick: () => router.push("/contact-us"),
    //   variant: "light",
    // },
    {
      id: 1,
      number: "03",
      title: "Agentic AI",
      description:
        "We help you build and modernize your AI Stack so AI agents can plug in seamlessly and deliver real business impact.",
      tags: [
        "RAG",
        "MCP",
        "Skills",
        "A2A",
        "Agentic RAG",
        "Context Engineering",
        "LLMOps",
      ],
      onClick: () => router.push("/agentic-ai"),
      variant: "light",
    },
    {
      id: 2,
      number: "04",
      title: "Intelligent Infrastructure",
      description:
        "We build infrastructure that thinks, combining agentic AI and cloud ops into systems that adapt, learn, and scale.",
      tags: ["Infrastructure as a code", "Monitoring", "Observability", "SLO"],
      onClick: () => router.push("/intelligent-infrastructure"),
      variant: "blue",
    },
  ];

  const Card = ({ card }) => (
    <div
      onClick={card.onClick}
      className={`border-2 border-[#000052] min-h-150 p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow cursor-pointer ${card.variant === "blue" ? "bg-linear-to-r from-[#2563eb] to-[#059669] text-white transition-all" : "bg-white"}`}
    >
      <div>
        <div className="flex items-start justify-between mb-8">
          <div className={`relative w-12 h-12`}>
            <Image
              src="/pi.png"
              alt="PI-BI Technologies"
              fill
              className={`object-contain ${card.variant === "blue" ? "" : "invert"}`}
            />
          </div>

          <span
            className={`text-[55px] font-bold leading-[1.1]
              ${card.variant === "blue" ? "text-white" : "text-slate-400"}
            `}
          >
            {card.number}
          </span>
        </div>

        <h3
          className={`text-[35px] font-bold leading-[1.1] mb-4
            ${card.variant === "blue" ? "text-white" : "text-[#000052]"}
          `}
        >
          {card.title}
        </h3>

        <p
          className={`text-lg font-medium leading-[1.1] mb-6
            ${card.variant === "blue" ? "text-white" : "text-slate-700"}
          `}
        >
          {card.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {card.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border
                ${
                  card.variant === "blue"
                    ? "border-white/20 bg-[#248BB3] text-white"
                    : "border-slate-300 bg-slate-100 text-slate-700"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`pt-6 border-t
          ${card.variant === "blue" ? "border-white" : "border-slate-300"}
        `}
      >
        <button
          className={`flex items-center gap-2 text-sm font-bold uppercase tracking-[1.4px]
            ${
              card.variant === "blue"
                ? "hover:opacity-80"
                : "text-slate-600 hover:text-[#000052]"
            }
          `}
        >
          Learn more
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative py-8 overflow-hidden" id="Solutions">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20 pb-8 border-b border-slate-300">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold leading-tight md:leading-[0.8] tracking-[-1.8px] text-[#000052]">
            <div>Industry Standard</div>
            <div>solutions that scale</div>
            <div>with you</div>
          </h2>

          <p className="max-w-full md:max-w-[384px] text-base md:text-lg font-medium text-slate-700 leading-relaxed md:leading-[1.1]">
            We engineer the digital backbone of modern enterprises with
            precision and foresight.
          </p>
        </div>

        <div className="block px-3 h-full">
          <Swiper
            modules={[Pagination, Autoplay, Controller]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="h-max"
          >
            {cards.map((card) => (
              <SwiperSlide className="py-10 h-full" key={card.id}>
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AgentsDetails;
