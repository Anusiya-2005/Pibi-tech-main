"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CaseStudies() {
  const swiperRef = useRef(null);

  const cases = [
    {
      id: 1,
      titleStart: "Transforming a global fintech's",
      titleHighlight: "sales operations with enterprise lead qualification",
      tags: ["FINTECH", "SALES", "LEAD QUALIFICATION"],
      metric: "47.6%",
      metricDesc: "conversion rate growth",
      buttonText: "Read the case study",
      image: "/fintech_case_1790310555897.jpg",
    },
    {
      id: 2,
      titleStart: "Collecting in-field driving data",
      titleHighlight: "to train a leading insurance provider's rewards application",
      tags: ["INSURANCE", "TELEMATICS", "DATA AI"],
      metric: "2,360",
      metricDesc: "test drives completed",
      buttonText: "Read the case study",
      image: "/driving_data_case_1790310638313.jpg",
    },
    {
      id: 3,
      titleStart: "Enhancing customer satisfaction",
      titleHighlight: "and brand perception for a global payment provider",
      tags: ["PAYMENTS", "CX", "BRAND PERCEPTION"],
      metric: "+86pp",
      metricDesc: "increase in brand Net Promoter Score",
      buttonText: "Read the case study",
      image: "/payment_cs_case_1790310651009.jpg",
    },
  ];

  return (
    <section className="bg-[#1f1f1f] py-20 px-4 md:px-8 relative">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {cases.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row bg-[#2d2d2d] min-h-[500px]">
                {/* Left Content */}
                <div className="flex-1 p-8 md:p-14 flex flex-col justify-center relative z-10">
                  <h3 className="text-2xl md:text-4xl font-semibold mb-8 leading-tight text-white">
                    {item.titleStart}{" "}
                    <span 
                      style={{ 
                        backgroundImage: 'linear-gradient(135deg, #1f6fb2, #2ec4b6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {item.titleHighlight}
                    </span>
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <hr className="border-white/20 mb-10" />

                  <div className="flex items-center gap-4 mb-10">
                    <span 
                      className="text-5xl md:text-6xl font-bold tracking-tight"
                      style={{ 
                        backgroundImage: 'linear-gradient(135deg, #1f6fb2, #2ec4b6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {item.metric}
                    </span>
                    <span className="text-slate-300 text-sm md:text-base max-w-[200px] leading-snug">
                      {item.metricDesc}
                    </span>
                  </div>

                  <div>
                    <button 
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white text-sm transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-[#1f6fb2]/30"
                      style={{
                        background: 'linear-gradient(135deg, rgba(31,111,178,0) 0%, rgba(46,196,182,0) 100%)', // Default transparent
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #1f6fb2, #2ec4b6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {item.buttonText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex-[1.2] relative min-h-[300px] md:min-h-full">
                  <div 
                    className="absolute inset-0 w-full h-full" 
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
      </div>
    </section>
  );
}
