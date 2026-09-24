"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const AgentsDetails = ({ title, id }) => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "AI/ML",
      description: "Empower your business with predictive models, deep learning, and intelligent automation to unlock new opportunities.",
      image: "/final_ai.jpg",
      link: "/contact-us"
    },
    {
      id: 2,
      title: "Data",
      description: "Transform raw data into actionable insights with robust data pipelines, modern data warehousing, and advanced analytics.",
      image: "/final_data.jpg",
      link: "/contact-us"
    },
    {
      id: 3,
      title: "Cloud & Infrastructure",
      description: "Build scalable, secure, and resilient cloud architectures that drive agility and modernize your IT foundation.",
      image: "/final_cloud.jpg",
      link: "/contact-us"
    },
    {
      id: 4,
      title: "Product Engineering",
      description: "Accelerate your product lifecycle with end-to-end engineering, from ideation and prototyping to deployment and scale.",
      image: "/final_product.jpg",
      link: "/contact-us"
    },
    {
      id: 5,
      title: "Digital Engineering",
      description: "Create seamless, user-centric digital experiences by modernizing legacy systems and adopting cutting-edge tech stacks.",
      image: "/final_digital.jpg",
      link: "/contact-us"
    },
    {
      id: 6,
      title: "Security & GRC",
      description: "Safeguard your enterprise with comprehensive cybersecurity strategies, compliance frameworks, and proactive risk management.",
      image: "/final_security.jpg",
      link: "/contact-us"
    },
  ];

  const Card = ({ card }) => (
    <div
      onClick={() => router.push(card.link)}
      className="group flex flex-col overflow-hidden rounded-xl cursor-pointer bg-[#0b101a] border border-[#1f2937] hover:border-blue-500/50 transition-colors duration-300 h-full"
    >
      {/* Top Half: Image */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle gradient to blend into the card background */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b101a] to-transparent"></div>
      </div>

      {/* Bottom Half: Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
        
        <p className="text-slate-300 text-[15px] leading-relaxed mb-8">
          {card.description}
        </p>
        
        {/* Arrow Icon */}
        <div className="mt-auto w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0b101a] transition-colors">
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 overflow-hidden bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)]" id={id || "Solutions"}>
      {/* Side Vignette (Dark edges) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

      {/* Network Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url('/network.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title ? title : "Diverse Tech Innovated Digital Solutions."}
          </h2>

          <p className="max-w-3xl text-base md:text-lg text-slate-300 leading-relaxed">
            Explore our varied range of latest technology expertise that enables us to quickly transform your business into "smart" business and keeps you ahead in the marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsDetails;
