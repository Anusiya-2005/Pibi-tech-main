"use client";

import AIKnowledgeArchitectureSection from "@/components/AIKnowlegdeBase/AIKnowledgeArchitectureSection";
import AIKnowledgeBaseCapabilitiesSection from "@/components/AIKnowlegdeBase/AIKnowledgeBaseCapabilitiesSection";
import AIKnowledgeBaseOperationsSection from "@/components/AIKnowlegdeBase/AIKnowledgeBaseOperationsSection";
import AIKnowledgeEcosystemSection from "@/components/AIKnowlegdeBase/AIKnowledgeEcosystemSection";
import AIKnowledgeUseCasesSection from "@/components/AIKnowlegdeBase/AIKnowledgeUseCasesSection";
import AITechnologyStackSection from "@/components/AIKnowlegdeBase/AITechnologyStackSection";
import AITechStack from "@/components/AIKnowlegdeBase/AITechStack";
import AIImplementationSequenceSection from "@/components/AIKnowlegdeBase/AIImplementationSequenceSection";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AIBusinessOutcomesSection from "@/components/AIKnowlegdeBase/AIBusinessOutcomesSection";
import AIWhyChooseSection from "@/components/AIKnowlegdeBase/AIWhyChooseSection";
import CTASection from "@/components/CTASection";

const AIKnowledgeBase = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
        <div className="md:col-span-3">
          <p className="mb-4 text-[#1f6fb2] text-2xl font-medium uppercase tracking-wide">
            AI Knowledge Base
          </p>

          <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
            Empower teams. Delight customers. Automate answers — 24/7.
          </h1>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            Turn your fragmented knowledge into a unified intelligence layer
            that understands natural language, interprets context, and delivers
            accurate answers instantly across every channel and touchpoint.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-6">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 rounded-lg bg-linear-to-r from-[#3b82f6] to-[#10b981] px-6 py-3 text-md md:text-xl font-semibold text-white"
            >
              Build Your AI Knowledge Base
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>

            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 rounded-lg border border-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold text-[#1f6fb2] bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
            >
              Speak With a Specialist
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1f6fb2] text-white transition group-hover:bg-white group-hover:text-[#1f6fb2] group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <section className="relative py-8 px-4 bg-blue-50">
        <div className="relative max-w-7xl rounded-xl bg-white py-8 mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-start items-start gap-8 pb-8 ">
            <h2 className="text-2xl flex-[35%] sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-1.8px] text-[#000052]">
              The Modern Knowledge Gap
            </h2>

            <p className="max-w-full flex-[65%] text-lg md:text-xl font-medium text-slate-700">
              Most organizations don’t suffer from missing information and
              suffer from slow access to the right knowledge. Critical insights
              are buried across SOPs, helpdesk tickets, CRM notes, and internal
              documents. This creates repeated work, inconsistent answers, and
              operational delays. An AI knowledge base creates a unified
              intelligence layer that connects fragmented information and makes
              it instantly accessible through natural language interaction.
            </p>
          </div>
          <button
            className={`flex mt-4 px-4 py-2 rounded-lg mx-auto items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] text-white bg-linear-to-r from-[#3b82f6] to-[#10b981] hover:opacity-80 cursor-pointer`}
            onClick={() => router.push("/about-us")}
          >
            Read Our Story
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <AIKnowledgeBaseCapabilitiesSection />
      <AIKnowledgeBaseOperationsSection />
      <AIKnowledgeEcosystemSection />
      <AIKnowledgeUseCasesSection />
      <AIKnowledgeArchitectureSection />
      <AITechnologyStackSection />
      <AITechStack />
      <AIImplementationSequenceSection />
      <AIBusinessOutcomesSection />
      <AIWhyChooseSection />
      <CTASection
        title="Reliable answers shouldn’t depend on who you ask or where you look."
        content="An AI knowledge base ensures verified intelligence flows directly into everyday workflows, enabling faster decisions and smoother operations."
        ctaText1="Build Your AI Knowledge Base"
        ctaText2="Book a Solution Consultation"
      />
    </div>
  );
};

export default AIKnowledgeBase;
