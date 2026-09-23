"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroBanner() {
  const [activeTab, setActiveTab] = useState("asset");
  const router = useRouter();

  return (
    <section className="relative w-full h-300 max-h-[80vh] overflow-hidden rounded-xl py-10 mt-10">
      <div className="absolute max-w-[90vw] bg-brand-gradient h-full mx-auto inset-0 overflow-hidden rounded-xl"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="flex items-center flex-col md:flex-row gap-5 mb-12">
          <button
            onClick={() => setActiveTab("visual")}
            className={`flex items-center gap-3 px-9 py-3 rounded-full border-2 transition-all ${
              activeTab === "visual"
                ? "border-white bg-transparent"
                : "border-white/40 bg-transparent opacity-50"
            }`}
          >
            <span className="text-white text-[19px]"></span>
            <span className="text-white text-[13px] font-semibold uppercase tracking-[5px]">
              Visual Inspection
            </span>
          </button>
          <button
            onClick={() => setActiveTab("asset")}
            className={`flex items-center gap-3 px-9 py-3 rounded-full border-2 transition-all ${
              activeTab === "asset"
                ? "border-white bg-transparent"
                : "border-white/40 bg-transparent opacity-50"
            }`}
          >
            <span className="text-white text-[19px]"></span>
            <span className="text-white text-[10px] md:text-[13px] font-semibold uppercase tracking-[5px]">
              Asset Identification
            </span>
          </button>
        </div>

        <div className="text-center max-w-204.75 mb-8">
          <h1 className="text-white mb-4">
            <div className="text-[32px] md:text-[65px] font-normal leading-[1.2]">
              Visual Inspection
            </div>
            <div className="text-[32px] md:text-[65px] font-bold leading-[1.2]">
              Automated.
            </div>
          </h1>
          <p className="text-[#292e35] text-[25px] font-normal leading-[37.5px]">
            Ensure product meets standards during every stage of manufacturing
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/contact-us")}
            className="px-5 py-3 bg-[#248BB3] text-white text-base font-medium rounded hover:opacity-90 transition-opacity"
          >
            Explore
          </button>
          <button
            onClick={() => router.push("/contact-us")}
            className="px-6 py-3 border-2 border-white text-white text-base font-medium rounded hover:bg-white/10 transition-all"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
