"use client";

import { useState } from "react";
import {
  ClipboardList,
  FileText,
  DollarSign,
  Search,
  FileCheck,
  Users,
  Rocket,
  Layout,
  Workflow,
  Puzzle,
  CheckCircle,
  Code2,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

// Process 1: Get a Quote
// Meet & Greet
//  Discuss goals, challenges, and expectations to ensure alignment.

// Scoping
//  Define the high-level project scope through structured discussions.

// Rough Estimates
//  Share initial cost estimates and a preliminary project plan.

// Detailed Scoping
//  Conduct a paid discovery phase, if required, to finalize requirements.

// Final Proposal
//  Deliver a detailed proposal covering scope, timelines, and costs.

// Onboarding
//  Complete contracts, legal formalities, and onboarding.

// Project Kickoff
//  Introduce your dedicated project team and begin execution.

// Process 2: Strategy & Scoping
// Initial Questionnaire
//  Collect detailed business and technical requirements.

// Sitemap & URL Strategy
//  Define sitemap structure, redirections, and SEO considerations.

// Review Current Workflow
//  Analyze existing publishing processes and team roles.

// Design New Workflow
//  Propose improved workflows supported by wireframes.

// Template Discussion
//  Define reusable page templates and editing flexibility.

// Custom Integrations
//  Identify integrations, plugins, and custom functionality.

// Final Scope of Work
//  Share a comprehensive Scope of Work document.
//  (Sample SoW available)

// Process 3: Implementation
// Project Kickoff
//  Align on timelines, tools, and communication processes.

// Development Phase
//  Active development with regular progress updates.

// Quality Checks
//  Internal QA and solution architect reviews at milestones.

// Client Reviews
//  Interactive demos to review progress and gather feedback.

// Launch Preparation
//  Final QA, content freeze, deployment, and server setup.

// Post-Launch Handover
//  Deliver documentation, user guides, and QA reports.

// Ongoing Support
//  Continuous maintenance, enhancements, and support.

const processes = [
  {
    id: 1,
    title: "Get a Quote",
    steps: [
      {
        title: "Meet & Greet",
        icon: Users,
        content:
          "Discuss goals, challenges, and expectations to ensure alignment.",
      },
      {
        title: "Scoping",
        icon: ClipboardList,
        content:
          "Define the high-level project scope through structured discussions.",
      },
      {
        title: "Rough Estimates",
        icon: DollarSign,
        content: "Share initial cost estimates and a preliminary project plan.",
      },
      {
        title: "Detailed Scoping",
        icon: Search,
        content:
          "Conduct a paid discovery phase, if required, to finalize requirements.",
      },
      {
        title: "Final Proposal",
        icon: FileText,
        content:
          "Deliver a detailed proposal covering scope, timelines, and costs.",
      },
      {
        title: "Onboarding",
        icon: FileCheck,
        content: "Complete contracts, legal formalities, and onboarding.",
      },
      {
        title: "Project Kickoff",
        icon: Rocket,
        content: "Introduce your dedicated project team and begin execution.",
      },
    ],
  },
  {
    id: 2,
    title: "Strategy & Scoping",
    steps: [
      {
        title: "Initial Questionnaire",
        icon: ClipboardList,
        content: "Collect detailed business and technical requirements.",
      },
      {
        title: "Sitemap & URL Strategy",
        icon: Layout,
        content:
          "Define sitemap structure, redirections, and SEO considerations.",
      },
      {
        title: "Review Current Workflow",
        icon: Workflow,
        content: "Analyze existing publishing processes and team roles.",
      },
      {
        title: "Design New Workflow",
        icon: Puzzle,
        content: "Propose improved workflows supported by wireframes.",
      },
      {
        title: "Template Discussion",
        icon: FileText,
        content: "Define reusable page templates and editing flexibility.",
      },
      {
        title: "Custom Integrations",
        icon: Code2,
        content: "Identify integrations, plugins, and custom functionality.",
      },
      {
        title: "Final Scope of Work",
        icon: CheckCircle,
        content:
          "Share a comprehensive Scope of Work document. (Sample SoW available)",
      },
    ],
  },
  {
    id: 3,
    title: "Implementation",
    steps: [
      {
        title: "Project Kickoff",
        icon: Rocket,
        content: "Align on timelines, tools, and communication processes.",
      },
      {
        title: "Development Phase",
        icon: Code2,
        content: "Active development with regular progress updates.",
      },
      {
        title: "Quality Checks",
        icon: ShieldCheck,
        content: "Internal QA and solution architect reviews at milestones.",
      },
      {
        title: "Client Reviews",
        icon: Users,
        content: "Interactive demos to review progress and gather feedback.",
      },
      {
        title: "Launch Preparation",
        icon: FileCheck,
        content: "Final QA, content freeze, deployment, and server setup.",
      },
      {
        title: "Post-Launch Handover",
        icon: FileText,
        content: "Deliver documentation, user guides, and QA reports.",
      },
      {
        title: "Ongoing Support",
        icon: LifeBuoy,
        content: "Continuous maintenance, enhancements, and support.",
      },
    ],
  },
];

export default function OurProcess() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-slate-700">
            A structured, transparent, and enterprise-ready approach from
            discovery to long-term support.
          </p>
        </div>

        <div className="block lg:hidden space-y-6">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className="rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-lg"
              >
                {`Process ${process.id}: ${process.title}`}
                <span>{openAccordion === index ? "−" : "+"}</span>
              </button>

              {openAccordion === index && (
                <div className="px-6 pb-6 grid grid-cols-1 gap-4">
                  {process.steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center gap-4 ">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f6fb2]/10">
                            <Icon className="h-5 w-5 text-[#1f6fb2]" />
                          </div>
                          <span className="text-slate-800 font-medium">
                            {step.title}
                          </span>
                        </div>
                        <p className="text-slate-600">{step.content}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-10">
          <div className="col-span-4 space-y-4">
            {processes.map((process, index) => (
              <button
                key={process.id}
                onClick={() => setActiveProcess(index)}
                className={`w-full rounded-xl px-6 py-4 text-left font-semibold transition ${
                  activeProcess === index
                    ? "bg-[#1f6fb2] text-white shadow-lg"
                    : "bg-white border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {`Process ${process.id}: ${process.title}`}
              </button>
            ))}
          </div>

          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-6">
              {processes[activeProcess].steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-5 ">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f6fb2]/10">
                        <Icon className="h-6 w-6 text-[#1f6fb2]" />
                      </div>

                      <span className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
