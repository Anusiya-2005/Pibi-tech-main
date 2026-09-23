"use client";

import { useState } from "react";
import Image from "next/image";

export default function DataEngineeringArchitecture() {
  const [active, setActive] = useState("aws");

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Data Engineering Architecture
            </span>
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-2 rounded-2xl flex gap-2 shadow-inner">
            <button
              onClick={() => setActive("aws")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === "aws"
                  ? "bg-brand-gradient text-white shadow-md"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              AWS Simplified Data Pipeline Architecture
            </button>

            <button
              onClick={() => setActive("azure")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === "azure"
                  ? "bg-brand-gradient text-white shadow-md"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              Azure Simplified Data Pipeline Architecture
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-[90%] max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={active === "aws" ? "/amazon.jpeg" : "/azure.jpeg"}
              alt="Data Architecture Diagram"
              fill
              className="object-contain bg-white"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
