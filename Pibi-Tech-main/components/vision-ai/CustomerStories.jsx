"use client";

import { useState } from "react";

export default function CustomerStories() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "quality", label: "Quality Control" },
    { id: "asset", label: "Asset Identification" },
    { id: "safety", label: "Industrial Safety" },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-[1320px] px-6">
        <h2 className="text-[35px] font-bold leading-[52.5px] text-Pibi Tech-navy mb-6">
          Customer Success Stories
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-[20px] font-normal border transition-all ${
                activeFilter === filter.id
                  ? "bg-Pibi Tech-blue text-white border-Pibi Tech-blue"
                  : "bg-transparent text-Pibi Tech-navy border-Pibi Tech-gray-border hover:border-Pibi Tech-blue"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Placeholder for stories - can be populated with actual content */}
        <div className="text-center py-12 text-Pibi Tech-gray">
          <p className="text-xl">
            Customer success stories will be displayed here.
          </p>
        </div>
      </div>
    </section>
  );
}
