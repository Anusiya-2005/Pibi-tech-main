"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    title: "Healthcare & Life Science",
    description: "Improving health outcomes with digital technologies and advanced analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "BFSI",
    description: "Driving financial innovation, security, and next-gen customer experiences.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Manufacturing & Automotive Industry",
    description: "Next-gen PLM, MOM, and SLM Technologies enabling Industry 4.0.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Retails & CMG",
    description: "Transforming retail experiences and consumer goods supply chains.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Governance & NSGO'S",
    description: "Empowering public sectors and NGOs with scalable digital solutions.",
    image: "https://images.unsplash.com/photo-1541872703874-fa7137452d37?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Agriculture",
    description: "Advancing precision farming and sustainable agricultural technologies.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industry Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-[300px] md:h-[340px] group cursor-pointer bg-slate-900 rounded-md"
            >
              <div className="absolute inset-0 z-0">
                {/* Using a standard img tag for unsplash URLs */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay mimicking the provided design */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
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
