"use client";

import { AlertTriangle } from "lucide-react";

const painPoints = [
  "Manual deadline tracking",
  "Errors discovered post-submission",
  "Late filings and penalties",
  "No audit risk awareness",
  "Black-box calculations",
  "Fragmented tools and records",
];

const FourthSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Why Traditional Filing Systems Fall Short
              </span>
            </h2>

            <p className="text-slate-700 text-xl leading-relaxed mb-6">
              Most legacy tax tools focus on submission not protection. They
              lack continuous verification, proactive deadline intelligence, and
              meaningful risk visibility.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              As compliance complexity increases, manual tracking and reactive
              error handling expose businesses to penalties, audit stress, and
              operational uncertainty.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Common Pain Points
            </h3>

            <div className="space-y-4">
              {painPoints.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
