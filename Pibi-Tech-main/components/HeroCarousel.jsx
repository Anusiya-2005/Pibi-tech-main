"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const slides = [
  {
    slogan: "Agentic Website Development",
    title: "Your Content Ranks Everywhere.",
    cta: "Your Brand Voice Stays True.",
    content:
      "Built for founders  who want  strong digital presence and lasting brand authority..",
    button1: "Explore Agentic Websites",
    button2: "Get started",
  },
  {
    slogan: "",
    title: "Human-Centered Agentic AI for Real Business Impact",
    cta: "Design intelligent systems that act, adapt, and scale with purpose.",
    content: "",
    button1: "Innovate Today",
    button2: "Get started",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full py-8 bg-white overflow-hidden bg-linear-to-b from-white/90 to-white/90 bg-cover bg-[url('/border.png')] bg-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-[#0C1B33] text-xl md:text-2xl mb-4">
          {slides[current].slogan}
        </p>

        <h1
          className={`${
            current == 1 ? "text-3xl md:text-5xl" : "text-3xl md:text-6xl"
          } max-w-4xl mx-auto font-normal leading-[1.2] text-[#0C1B33]`}
        >
          {slides[current].title}
        </h1>

        <h2 className="text-3xl md:text-6xl max-w-5xl mx-auto font-normal mt-4 text-[#0046B8]">
          {slides[current].cta}
        </h2>

        <p className="max-w-3xl text-[#0C1B33]/70 mt-6 text-lg md:text-xl">
          {slides[current].content}
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
          <button
            onClick={() => router.push("/contact-us")}
            className="bg-[#0046B8] hover:bg-[#003A96] text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            {slides[current].button1}
          </button>

          <button
            onClick={() => router.push("/contact-us")}
            className="bg-[#ffffff] border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full font-semibold shadow-md"
          >
            {slides[current].button2}
          </button>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-black p-3 rounded-full bg-white shadow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-black p-3 rounded-full bg-white shadow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
