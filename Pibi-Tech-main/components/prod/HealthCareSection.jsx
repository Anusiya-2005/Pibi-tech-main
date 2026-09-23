import { Settings } from "lucide-react";
import { AgentCard } from "../AgentCard";

export function HealthcareSection() {
  const agents = [
    {
      icon: <Settings />,
      title: "Patient Intake Workflow Agent",
      description:
        "Automates patient registration, captures necessary details, and routes information to the right departments, reducing wait times and improving first-visit experience.",
    },
    {
      icon: <Settings />,
      title: "Patient Informed Consent Agent",
      description:
        "Guides patients through consent forms, ensures accurate completion, and securely stores records, reducing errors and meeting compliance requirements.",
    },
    {
      icon: <Settings />,
      title: "Health Assessment Agent",
      description:
        "Collects patient health data, evaluates key indicators, and generates preliminary assessments to support doctors in delivering faster, more accurate care.",
    },
    {
      icon: <Settings />,
      title: "Medical Coding Accuracy Agent",
      description:
        "Checks and corrects medical codes in records, reducing billing errors and ensuring claims meet healthcare industry coding standards.",
    },
    {
      icon: <Settings />,
      title: "Claims Adjudication Agent",
      description:
        "Reviews insurance claims, verifies information, and applies policy rules to speed up approvals and payments with fewer manual steps.",
    },
    {
      icon: <Settings />,
      title: "Clinical Trials AI Agent",
      description:
        "Tracks trial participants, monitors data accuracy, and automates reporting to streamline research and regulatory submissions.",
    },
    {
      icon: <Settings />,
      title: "Patient Refund Request Agent",
      description:
        "Manages and verifies refund requests, ensuring quick approvals and accurate financial records for healthcare providers.",
    },
    {
      icon: <Settings />,
      title: "Prior Authorization Processor Agent",
      description:
        "Handles insurance prior authorization requests, gathers required documents, and communicates approvals or denials to patients and providers.",
    },
    {
      icon: <Settings />,
      title: "EHR Data Extraction Agent",
      description:
        "Extracts, organizes, and updates patient records from electronic health systems, making medical data easier to use for clinical and admin teams.",
    },
    {
      icon: <Settings />,
      title: "Insurance Eligibility Checker Agent",
      description:
        "Verifies patients' coverage before treatment, avoiding delays and billing issues by ensuring insurance details are correct and up-to-date.",
    },
    {
      icon: <Settings />,
      title: "HIPAA Compliance Guardrail Agent",
      description:
        "Monitors data handling processes, flags risks, and ensures patient information is stored and shared in compliance with HIPAA rules.",
    },
    {
      icon: <Settings />,
      title: "Patient Discharge Coordination Agent",
      description:
        "Coordinates discharge instructions, follow-up appointments, and prescriptions to ensure smooth patient transitions from hospital to home.",
    },
    {
      icon: <Settings />,
      title: "Revenue Cycle Automation Agent",
      description:
        "Automates billing, payment posting, and account reconciliation to improve cash flow and reduce administrative overhead in healthcare organizations.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-[#F1F0FF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A0BE6] mb-8 md:mb-12">
          AI Agents in Healthcare
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
