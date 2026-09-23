"use client";

import AIPoweredDevelopmentSection from "@/components/AIPoweredDevelopmentSection";
import ApplicationDevelopmentStagesSection from "@/components/ApplicationDevelopmentStagesSection";
import CTASection from "@/components/CTASection";
import DevelopmentSection from "@/components/DevelopmentSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhyTeamsChooseUsSection from "@/components/WhyTeamsChooseUsSection";
import { ArrowRight, Target, TrendingUp, Undo2 } from "lucide-react";
import {
  Smartphone,
  Code2,
  Building2,
  ShoppingCart,
  Truck,
  Watch,
  Globe,
  LayoutDashboard,
  Workflow,
  Database,
  Cloud,
  Server,
  Layers,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ApplicationClientComponent = () => {
  const developmentServicesData = [
    {
      icon1: Smartphone,
      icon2: Code2,

      title: "Mobile Application Development",
      subtitle: "Apps built for real-world usage, speed, and engagement.",
      description:
        "We design high-performance iOS and Android applications that integrate seamlessly with backend systems, scale with growing user bases, and deliver intuitive digital experiences.",

      section1Title: "Types of Mobile Apps We Build",

      appTypes: [
        { title: "Enterprise & Workforce Apps", icon: Building2 },
        { title: "E-commerce & Marketplace Apps", icon: ShoppingCart },
        { title: "On-Demand Service Platforms", icon: Truck },
        { title: "IoT & Wearable Device Apps", icon: Watch },
      ],

      techStack: [
        { category: "Native", value: "Swift (iOS), Kotlin (Android)" },
        { category: "Cross-Platform", value: "Flutter, React Native" },
        { category: "Backend", value: "Node.js, Python, Java, .NET" },
        { category: "APIs", value: "REST / GraphQL" },
        {
          category: "Deployment",
          value: "CI/CD automation, App Store & Play Store pipelines",
        },
      ],
    },
    {
      icon1: Globe,
      icon2: Layers,

      title: "Web & Custom Application Development",
      subtitle: "Secure, scalable systems tailored to how your business works.",
      description:
        "We build web applications and custom platforms designed around workflows, integrations, and operational needs — not generic templates.",

      section1Title: "Types of Web & Custom Applications",

      appTypes: [
        { title: "Business Portals & Dashboards", icon: LayoutDashboard },
        { title: "Workflow Automation Systems", icon: Workflow },
        { title: "CRM / ERP Platforms", icon: Database },
        { title: "E-commerce Systems", icon: ShoppingCart },
        { title: "Internal Enterprise Tools", icon: Server },
        { title: "Legacy Modernization Platforms", icon: Layers },
      ],

      techStack: [
        {
          category: "Frontend",
          value: "React • Next.js • Angular • Vue",
        },
        {
          category: "Backend",
          value: "Node.js • Python • Java • .NET",
        },
        {
          category: "Databases",
          value: "PostgreSQL • MongoDB • Redis",
        },
        {
          category: "Infrastructure",
          value: "Docker • Kubernetes",
        },
        {
          category: "Hosting",
          value: "AWS • Azure • GCP",
        },
      ],
    },
    {
      icon1: Cloud,
      icon2: Server,

      title: "Cloud-Based (SaaS) Application Development",
      subtitle: "Multi-tenant, scalable platforms designed for growth.",
      description:
        "We engineer SaaS and cloud-native applications that support onboarding, subscription management, analytics, and global expansion.",

      section1Title: "Types of Cloud Applications",

      appTypes: [
        { title: "SaaS Product Platforms", icon: Cloud },
        { title: "Subscription & Billing Systems", icon: Database },
        { title: "Collaboration & Workflow Tools", icon: Workflow },
        { title: "Data Analytics Platforms", icon: LayoutDashboard },
        { title: "Customer Management Systems", icon: Server },
      ],

      techStack: [
        {
          category: "Cloud",
          value: "AWS • Azure • Google Cloud",
        },
        {
          category: "Architecture",
          value: "Microservices • API-first design",
        },
        {
          category: "Backend",
          value: "Node.js • Python • Java",
        },
        {
          category: "Containers",
          value: "Docker • Kubernetes",
        },
        {
          category: "Data",
          value: "SQL / NoSQL databases",
        },
        {
          category: "DevOps",
          value: "Automated CI/CD pipelines",
        },
      ],
    },
  ];

  const metrics = [
    {
      value: "230B+",
      unit: "",
      title: "Users engaging through mobile apps",
      description: "",
      icon: TrendingUp,
    },
    {
      value: "85%",
      unit: "",
      title: "Organizations running on custom software",
      description: "",
      icon: Target,
    },
    {
      value: "3x",
      unit: "",
      title: "Faster growth with optimized applications",
      description: "",
      icon: Undo2,
    },
  ];
  const router = useRouter();

  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-3 md:px-6 py-18">
          <p className="mb-4 text-[#1f6fb2] text-2xl font-medium tracking-wide">
            Application Development Services
          </p>
          <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
            Build Future-Ready Applications That Scale With Your Business
          </h1>
          <p className="mt-6 max-w-xl text-xl text-black/70">
            From web platforms to mobile experiences and cloud-based SaaS
            systems. We engineer applications built for performance, usability,
            and long-term growth.
          </p>

          <div className="mt-10 flex gap-6 flex-col md:flex-row">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
            >
              Get Your App Development Plan
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 cursor-pointer rounded-lg text-[#1f6fb2] border border-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
            >
              Talk to an Application Expert
              <span className="flex h-9 w-9 items-center justify-center rounded-md text-white bg-[#1f6fb2] transition group-hover:text-[#1f6fb2] group-hover:bg-white group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Why Application Development Matters
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                    <Icon className="w-7 h-7 text-[#248BB3]" />
                  </div>

                  <div className="mb-2">
                    <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                      {item.value}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* <p className="text-slate-600 text-md leading-relaxed">
                    {item.description}
                  </p> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {developmentServicesData.map((service, index) => (
        <DevelopmentSection key={index} data={service} />
      ))}
      <AIPoweredDevelopmentSection />
      <HowWeWorkSection />
      <ApplicationDevelopmentStagesSection />
      <WhyTeamsChooseUsSection />
      <CTASection
        title="Build Your Next Application With Confidence"
        content="Whether launching a new product or modernizing an existing system, we deliver dependable engineering that supports real growth."
        ctaText1="Start Your Build"
        ctaText2="Get a Technical Consultation"
      />
    </div>
  );
};

export default ApplicationClientComponent;
