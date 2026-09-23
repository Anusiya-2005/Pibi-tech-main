"use client";

import { useState } from "react";
import Image from "next/image";

// Data Warehousing
//  Snowflake • Amazon Redshift • BigQuery • Azure Synapse
// Self-Service BI & Visualization
//  Power BI • Tableau • Looker
// Cloud & Infrastructure
//  AWS • Azure • Google Cloud
// OLAP & Analytics Engines
//  Modern OLAP platforms for fast multi-dimensional analysis
// ETL & Integrations
//  Apache Airflow • Talend • Fivetran • API pipelines
// Data Processing & Engineering
//  Spark • Python pipelines • real-time streaming frameworks

const techStack = [
  {
    category: "Data Warehousing",
    items: ["snowflake", "redshift", "bigquery", "synapse"],
  },
  {
    category: "Self-Service BI & Visualization",
    items: ["powerbi", "tableau", "looker"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["aws", "azure", "gcp"],
  },
  {
    category: "OLAP & Analytics Engines",
    items: ["olap", "analytics-engines"],
  },
  {
    category: "ETL & Integrations",
    items: ["airflow", "talend", "fivetran", "api-pipelines"],
  },
  {
    category: "Data Processing & Engineering",
    items: ["spark", "python-pipelines", "streaming-frameworks"],
  },
];

export default function BusinessTechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Next-Gen BI Stack for Smarter Analytics
            </span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            We build analytics ecosystems using scalable, modern technologies.
          </p>
        </div>

        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {techStack.map((stack, index) => (
              <button
                key={stack.category}
                onClick={() => setActiveTab(index)}
                className={`w-max rounded-xl px-2 xl:px-5 py-2 xl:py-4 text-center xl:text-left font-semibold transition ${
                  activeTab === index
                    ? "bg-[#1f6fb2] text-white shadow-lg"
                    : "bg-slate-50 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {stack.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack[activeTab].items.map((tech, idx) => (
              <div
                key={idx}
                className="h-12 w-full hover:drop-shadow-lg relative transition"
              >
                <Image
                  src={`/tech/${tech}.png`}
                  alt={tech}
                  fill
                  className="object-contain w-full h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
