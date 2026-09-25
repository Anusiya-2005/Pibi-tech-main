"use client";

import { ArrowRight } from "lucide-react";

export default function Specialist() {
  const specialties = [
    {
      title: "Healthcare & Life Science",
      description: "Improving health outcomes with digital technologies and advanced analytics.",
      image: "/healthcare_bg_1790309388960.jpg",
    },
    {
      title: "BFSI",
      description: "Driving financial innovation, security, and next-gen customer experiences.",
      image: "/bfsi_bg_1790309405403.jpg",
    },
    {
      title: "Manufacturing & Automotive Industry",
      description: "Next-gen PLM, MOM, and SLM Technologies enabling Industry 4.0.",
      image: "/manufacturing_bg_1790309418400.jpg",
    },
    {
      title: "Retails & CMG",
      description: "Transforming retail experiences and consumer goods supply chains.",
      image: "/retail_bg_1790309435243.jpg",
    },
    {
      title: "Governance & NSGO'S",
      description: "Empowering public sectors and NGOs with scalable digital solutions.",
      image: "/governance_bg_1790309448970.jpg",
    },
    {
      title: "Agriculture",
      description: "Advancing precision farming and sustainable agricultural technologies.",
      image: "/agriculture_bg_1790309461763.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white" id="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industry Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-[300px] md:h-[340px] group cursor-pointer bg-slate-900 rounded-md"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between w-full md:w-4/5">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
