"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BuiltForIndustry() {
  const [activeTab, setActiveTab] = useState("quality");

  const industries = [
    {
      title: "Manufacturing",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8bfb7f5f268c4e0b079cd6ef52bd284a5b113336?width=1272",
      description:
        "Ensure flawless production with AI automated defect detection, Asset Identification, and enhanced workplace safety",
    },
    {
      title: "Automotive",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f1bd09689c3264f37fbfb414521939f8083a5d42?width=1272",
      description:
        "Maintain quality standards with advanced visual inspections, AI number & text recognition, and enhance worker safety",
    },
  ];

  const router = useRouter();

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-330 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-3">
            <h2 className="font-sen text-[35px] font-bold leading-[52.5px] text-[#248BB3] mb-6">
              Built for Every Industry
            </h2>
            <p className="font-inter text-[20px] font-normal leading-7.5 text-black">
              Pibi Tech empowers teams across sectors to work smarter, trace
              faster, and deliver with confidence
            </p>
          </div>

          <div className="self-end md:col-span-2 w-full">
            <div className="flex justify-end items-end w-full gap-8">
              <button
                onClick={() => setActiveTab("quality")}
                className={`pb-2 text-[20px] font-normal relative ${
                  activeTab === "quality" ? "text-[#248BB3]" : "text-black"
                }`}
              >
                Quality Control
                {activeTab === "quality" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-50 rounded-t-[10px]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("asset")}
                className={`pb-2 text-[20px] font-normal relative ${
                  activeTab === "asset" ? "text-[#248BB3]" : "text-black"
                }`}
              >
                Asset Identification
                {activeTab === "asset" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-50 rounded-t-[10px]" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="blue-50 rounded-[10px] shadow-[0_0_10px_rgba(43,132,234,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative rounded-md overflow-hidden shadow-lg group"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-[487px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                  <h3 className="font-inter text-[29px] font-medium leading-[45px] text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="font-inter text-[20px] font-bold leading-[30px] text-white mb-4">
                    {industry.description}
                  </p>
                  <button
                    onClick={() => router.push("/contact-us")}
                    className="absolute bottom-6 right-6 w-[50px] h-[50px] bg-blue-50 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <svg width="21" height="10" viewBox="0 0 21 10" fill="none">
                      <path
                        d="M15.75 0.333008L19.9167 4.49967L15.75 8.66634"
                        stroke="white"
                        strokeWidth="2.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.084 4.5H19.9173"
                        stroke="white"
                        strokeWidth="2.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
