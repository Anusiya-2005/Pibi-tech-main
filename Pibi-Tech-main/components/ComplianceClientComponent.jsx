"use client";

import FirstSection from "@/components/ComplianceBot/FirstSection";
import FivthSection from "@/components/ComplianceBot/FivthSection";
import FourthSection from "@/components/ComplianceBot/FourthSection";
import SecondSection from "@/components/ComplianceBot/SecondSection";
import SeventhSection from "@/components/ComplianceBot/SeventhSection";
import SixthSection from "@/components/ComplianceBot/SixthSection";
import ThirdSection from "@/components/ComplianceBot/ThirdSection";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";
import React from "react";

const ComplianceClientComponent = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
        <div className="md:col-span-3">
          <p className="mb-4 text-[#1f6fb2] text-2xl font-medium tracking-wide">
            Compliance Bot
          </p>

          <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
            Verification-First Compliance Intelligence, Validate Before You File
          </h1>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            Filing tools submit data. Compliance Bot protects it.
          </p>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            Before any tax or GST return is filed, Compliance Bot verifies
            accuracy, detects risks, and highlights compliance gaps — ensuring
            every submission is review-ready and penalty-safe.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-[#1f6fb2] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#1f6fb2]/90"
            >
              Speak With a Compliance Specialist
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivthSection />
      <SixthSection />
      <SeventhSection />
      <CTASection
        title="Ready to Move Beyond Reactive Filing?"
        content="Stop chasing deadlines. Stop correcting preventable errors."
        content2="Build a verification-driven compliance workflow that protects your filings before submission - not after."
        ctaText1="Build Your Compliance Workflow"
        ctaText2="Book a Compliance Consultation"
      />
    </div>
  );
};

export default ComplianceClientComponent;
