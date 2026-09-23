"use client";

import { useState } from "react";
import Image from "next/image";

//  CRM:    Salesforce • Zoho • HubSpot
//  Helpdesk:      Zendesk • Intercom • Freshdesk
//  CMS:           WordPress • Shopify • Drupal
//  Collaboration:   Slack • Microsoft Teams • Google Workspace
//  Formats:   PDF • PPT • DOC • Text files

const techStack = [
  {
    category: "CRM Platforms",
    items: ["salesforce", "zoho", "hubspot"],
  },
  {
    category: "Helpdesk Systems",
    items: ["zendesk", "intercom", "freshdesk"],
  },
  {
    category: "Content Management Systems",
    items: ["wordpress", "shopify", "drupal"],
  },
  {
    category: "Collaboration Tools",
    items: ["slack", "microsoft-teams", "google-workspace"],
  },
  {
    category: "Document Formats",
    items: ["pdf", "ppt", "doc", "text-files"],
  },
];

export default function AITechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Integrations with Tools You Use:
            </span>
          </h2>
          {/* <p className="text-xl text-slate-700 leading-relaxed">
            We choose technologies based on performance, scalability, and
            long-term product vision not trends.
          </p> */}
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
