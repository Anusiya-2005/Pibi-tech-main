"use client";

import { ArrowRight, Binoculars, Cog, Telescope, UserStar } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Who we are",
    description: (
      <>
        <span className="font-semibold text-white">PI-BI Technologies</span> is
        a leading provider of AI transformation solutions that craft unique
        competitive advantages through agentic orchestration.
      </>
    ),
    bg: "#4FC6E0",
    Icon: UserStar,
  },
  {
    title: "What we do",
    description: (
      <>
        We re-engineer your business to become
        <span className="font-semibold text-white"> future-ready </span>
        with
        <span className="font-semibold text-white"> 5× growth</span>.
      </>
    ),
    bg: "#0066A4",
    Icon: Cog,
  },
  {
    title: "Our Mission",
    description:
      "To drive AI-led transformation by delivering innovative, enterprise-grade solutions that empower businesses to operate smarter, faster, and at scale.",
    bg: "#02B2E3",
    Icon: Telescope,
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted global technology partner, shaping the future of industries through practical, agentic AI systems that deliver measurable growth.",
    bg: "#484393",
    Icon: Binoculars,
  },
];

const Card = ({ title, description, bg, Icon }) => (
  <div
    className="p-4 rounded-2xl relative h-full"
    style={{ backgroundColor: bg }}
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
      <Icon className="w-10 h-10" />
    </div>

    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>

    <p className="text-white/80 text-xl leading-relaxed">{description}</p>
  </div>
);

export default function IntroSection() {
  return (
    <section
      className="section-padding flex flex-col justify-center items-center bg-blue-50"
      id="WhoWeAre"
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="block md:hidden">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {cards.map((card, index) => (
              <SwiperSlide className="py-10 h-full" key={index}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
