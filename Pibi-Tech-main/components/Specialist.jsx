"use client";

import { ArrowRight } from "lucide-react";

export default function Specialist() {
  const specialties = [
    {
      title: "Healthcare & Life Science",
      description: "Improving health outcomes with digital technologies and advanced analytics.",
      image: "/h.jpeg",
    },
    {
      title: "BFSI",
      description: "Driving financial innovation, security, and next-gen customer experiences.",
      image: "/bf.png",
    },
    {
      title: "Manufacturing & Automotive Industry",
      description: "Next-gen PLM, MOM, and SLM Technologies enabling Industry 4.0.",
      image: "/man.png",
    },
    {
      title: "Retails & CMG",
      description: "Transforming retail experiences and consumer goods supply chains.",
      image: "/re.png",
    },
    {
      title: "Governance & NSGO'S",
      description: "Empowering public sectors and NGOs with scalable digital solutions.",
      image: "/ngo.jpeg",
    },
    {
      title: "Agriculture",
      description: "Advancing precision farming and sustainable agricultural technologies.",
      image: "/agi.png",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-[280px] md:h-[320px] group cursor-pointer bg-[#050505] border border-white/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Bare minimum gradient only for text readability, image is totally clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Content on the left */}
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between w-full md:w-[65%]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="text-white font-medium drop-shadow-md text-sm md:text-base leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="relative w-8 h-8 rounded-full border border-white group-hover:border-transparent flex items-center justify-center text-white transition-all overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ backgroundImage: 'linear-gradient(135deg, #1f6fb2, #2ec4b6)' }}
                  ></div>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
