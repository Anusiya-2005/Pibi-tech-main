"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      tabTitle: "AI TRAINING DATA",
      tag: "DATA PIPELINES",
      title: "High-Quality Data for Better Models",
      description: "We build robust data ingestion, cleaning, and annotation pipelines to provide your AI models with the high-quality, domain-specific training data they need to excel.",
      buttonText: "View Data Services",
      image: "/data_card.jpg",
      video: "/ai (1).mp4",
    },
    {
      id: 1,
      tabTitle: "AI INFRASTRUCTURE",
      tag: "CLOUD & COMPUTE",
      title: "Scalable Compute for AI Workloads",
      description: "Architect and deploy scalable, high-performance infrastructure specifically designed for the massive compute requirements of AI training and inference.",
      buttonText: "Discover Infrastructure",
      image: "/cloud_card.jpg",
      video: "/iN.mp4",
    },
    {
      id: 2,
      tabTitle: "PRIVATE LLM",
      tag: "ENTERPRISE AI",
      title: "Secure, Custom Large Language Models",
      description: "Deploy proprietary foundational models trained on your enterprise data within your own secure perimeter, ensuring complete data privacy and maximum business relevance.",
      buttonText: "Explore Solutions",
      image: "/ai_ml_card.jpg",
      video: "/Video Project 2.mp4",
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="Products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-light text-center mb-16 text-[#000052]">
          Applied AI with <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)]">real-world impact</span>
        </h2>

        <div className="bg-[#2A84AB] border border-white/20 rounded-xl overflow-hidden shadow-2xl">
          {/* Tabs Header */}
          <div className="flex flex-col sm:flex-row border-b border-white/20">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-5 px-4 text-xs md:text-sm font-semibold uppercase tracking-widest transition-all relative ${activeTab === index ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
              >
                {tab.tabTitle}
                {/* Active Tab Indicator */}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Content */}
              <div className="flex-1 lg:max-w-md">
                <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
                  {tabs[activeTab].tag}
                </p>
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-white/90 text-lg mb-10 leading-relaxed hidden md:block">
                  {tabs[activeTab].description}
                </p>

                {/* Button with gradient hover */}
                <button className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-[#2A84AB] hover:text-white transition-all duration-300 rounded-full bg-white hover:shadow-lg overflow-hidden">
                  
                  {/* Hover Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" 
                    style={{ backgroundImage: 'linear-gradient(135deg, #1f6fb2, #2ec4b6)' }}
                  ></div>

                  <span className="relative z-10 flex items-center gap-2">
                    {tabs[activeTab].buttonText}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Right Media */}
              <div className="flex-[1.5] w-full">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg bg-black">
                  <video
                    key={tabs[activeTab].video}
                    src={tabs[activeTab].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
