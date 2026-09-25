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

        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs">
          {/* Tabs Header */}
          <div className="flex flex-col sm:flex-row border-b border-slate-200">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-5 px-4 text-xs md:text-sm font-semibold uppercase tracking-widest transition-all relative ${
                  activeTab === index ? "text-[#000052]" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.tabTitle}
                {/* Active Tab Indicator with the requested gradient */}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Content */}
              <div className="flex-1 lg:max-w-md">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-6">
                  {tabs[activeTab].tag}
                </p>
                <h3 className="text-3xl md:text-4xl font-light text-[#000052] mb-6 leading-tight">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed hidden md:block">
                  {tabs[activeTab].description}
                </p>
                
                {/* Button with gradient background */}
                <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-medium text-white transition-all rounded-full bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] hover:opacity-90 hover:shadow-lg">
                  <span className="relative z-10 flex items-center gap-2">
                    {tabs[activeTab].buttonText}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Right Media */}
              <div className="flex-[1.5] w-full">
                <div className="relative w-full aspect-[16/9] bg-slate-100 border border-slate-200 p-2 shadow-inner rounded-xl">
                  <div className="relative w-full h-full overflow-hidden rounded-lg bg-black">
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
      </div>
    </section>
  );
}
