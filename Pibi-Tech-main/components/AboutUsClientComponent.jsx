"use client";

import GlobalLocations from "@/components/GlobalLocations";
import RecentEngagements from "@/components/RecentEngagements";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  CalendarSync,
  FolderLock,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { LocationMap } from "@/components/LocationMap";

const offerings = [
  {
    id: 1,
    title: "Enterprise Website Development",
    description:
      "An AI-powered growth driven website that works as a 24/7 sales and qualification system that attracts, qualifies, and converts visitors into revenue opportunities  not just a digital brochure.",
    link: "enterprise-website-development",
    icon: Brain,
    color: "bg-[#4FC6E0]",
  },
  {
    id: 2,
    title: "Product Development & Engineering",
    description:
      "A full-stack product engineering partnership to take your idea from concept to design, build, and scale products that are reliable, adaptable, and market fit.",
    link: "product-development",
    icon: FolderLock,
    color: "bg-[#0066A4]",
  },
  {
    id: 3,
    title: "AI & Agentic Process Automation",
    description:
      "Autonomous AI agents that replace repetitive work, accelerate decisions, and reduce operational costs  and drive measurable efficiency gains.",
    link: "agentic-process-automation",
    icon: BriefcaseBusiness,
    color: "bg-[#02B2E3]",
  },
  {
    id: 4,
    title: "Application Development",
    description:
      "Robust digital applications engineered for performance, security, and continuous business growth.",
    link: "application-development",
    icon: CalendarSync,
    color: "bg-[#484393]",
  },
  {
    id: 5,
    title: "Enterprise Infrastructure & Cloud Ops",
    description:
      "A resilient, secure cloud foundation that supports business continuity, scale, and operational efficiency.",
    link: "cloud-ops",
    icon: Brain,
    color: "bg-[#4FC6E0]",
  },
  {
    id: 6,
    title: "MarTech & Growth Hacking",
    description:
      "A technology-driven growth system that consistently generates qualified leads and converts them into predictable revenue.",
    link: "growth-marketing",
    icon: FolderLock,
    color: "bg-[#0066A4]",
  },
];

const OfferingCard = ({ offering, size = true }) =>
  offering && (
    <div
      className={`${offering?.color} rounded-xl ${size ? "md:min-h-100" : "md:min-h-80"} relative p-6 border border-slate-200 h-full flex flex-col justify-between`}
    >
      <div className="absolute -top-5 -right-5 rotate-12 opacity-20">
        <div className="w-32 aspect-square relative">
          <Image
            src="/pi.png"
            alt="PI-BI Technologies"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
        <offering.icon className="w-10 h-10" />
      </div>

      <div>
        <h4 className="text-xl font-bold text-white mb-3">{offering.title}</h4>
        <p className="text-white/80 leading-relaxed mb-6">
          {offering.description}
        </p>
      </div>

      {offering.link && (
        <Link
          href={offering.link}
          className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
        >
          Know more
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );

const AboutUsClientComponent = () => {
  const teams = [
    {
      name: "Siranjeevi Ramdoss                                                                                                                                                                 ",
      role: "Founder & CEO",
      linkedinUrl: "https://www.linkedin.com/in/siranjeevi-automation/",
      description:
        "Complete production deployment in 6–8 weeks  compared to the 3–4 month industry average.",
    },
    {
      name: "Palani Kumar Murugesan",
      role: "CT0",
      linkedinUrl:
        "https://www.linkedin.com/in/palani-kumar-murugesan-5b2824b9/",
      description:
        "Significant reduction in administrative workload for our leading enterprise and healthcare providers.",
    },
  ];

  const approaches = [
    {
      id: 1,
      title: "Product Concept in 3 Days",
      description:
        "We collaborate with key stakeholders to define the problem, scope, objectives, and success criteriaensuring shared understanding and clear direction from the start.",
      icon: Brain,
      color: "bg-[#4FC6E0]",
    },
    {
      id: 2,
      title: "Prototype & Validation in 3 Weeks",
      description:
        "We design and develop a working prototype to validate usability, technical feasibility, and business viabilityminimizing risk before full-scale development.",
      icon: FolderLock,
      color: "bg-[#0066A4]",
    },
    {
      id: 3,
      title: "MVP in Production in 3 Months",
      description:
        "We deliver a production-ready MVP built for performance, security, and scalabilityallowing teams to launch quickly and gather real-world insights.",
      icon: BriefcaseBusiness,
      color: "bg-[#02B2E3]",
    },
    {
      id: 4,
      title: "DevOps",
      description:
        "Automated CI/CD pipelines that enable faster AI deployments, continuous monitoring, and reliable performance at scale.",
      icon: CalendarSync,
      color: "bg-[#484393]",
    },
    {
      id: 5,
      title: "ITIL",
      description:
        "Structured service management that ensures reliability, governance, and enterprise-grade operational excellence.",
      icon: Brain,
      color: "bg-[#4FC6E0]",
    },
    {
      id: 6,
      title: "Agile",
      description:
        "Iterative development that enables rapid learning, continuous improvement, and faster value delivery.",
      icon: FolderLock,
      color: "bg-[#0066A4]",
    },
  ];

  return (
    <div>
      <section className="relative flex flex-col items-center py-20 justify-center w-full overflow-hidden">
        <Image
          alt="Team Celebration"
          fill
          priority
          src="/about-us.jpeg"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="text-white col-span-2">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight">
                About Us
              </h1>

              <p className="mt-6 max-w-4xl text-xl text-white font-semibold">
                Pi Bi Tech is a global AI and digital technology company
                specializing in AI Solutions, Agentic process automation,
                product development, and enterprise digital transformation. We
                help businesses automate workflows, enhance operational
                efficiency, and build intelligent systems that support
                sustainable growth.
              </p>

              <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#2563eb] to-[#059669] px-8 py-3 text-white text-base font-medium hover:bg-blue-700 transition">
                Reach Us!
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="w-32 aspect-square relative">
                <Image
                  src="/logo.png"
                  alt="PI-BI Technologies"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="flex flex-col md:flex-row justify-center max-w-7xl mx-auto px-4 sm:px-6 items-center gap-8 pt-6 pb-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000052]">
              How we Do
            </h2>

            <p className="max-w-full mt-6 text-lg md:text-xl font-medium text-slate-700">
              <span className="font-semibold text-[#1f6fb2]">
                PI-BI Technologies
              </span>{" "}
              is a leading provider of{" "}
              <span className="font-semibold text-[#1f6fb2]">
                AI transformation solutions
              </span>{" "}
              that craft unique competitive advantages through agentic
              orchestration.
            </p>
            <p className="max-w-full mt-6 text-lg md:text-xl font-medium text-slate-700">
              We re-engineer your business to become
              <span className="font-semibold text-[#1f6fb2]">
                {" "}
                future-ready{" "}
              </span>
              with
              <span className="font-semibold text-[#1f6fb2]"> 5x growth</span>.
            </p>
          </div>
          <div className="flex-1 w-full overflow-hidden relative">
            <Swiper
              className="w-full relative"
              spaceBetween={20}
              modules={[Autoplay, A11y]}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
            >
              {offerings.map((offering) => (
                <SwiperSlide className="py-10 h-full" key={offering.id}>
                  <OfferingCard offering={offering} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden" id="Solutions">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20 pb-8 border-b border-slate-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-[0.8] text-[#000052]">
              Our Approach
            </h2>

            <p className="max-w-full md:max-w-2xl text-base md:text-lg font-medium text-slate-700 leading-relaxed md:leading-[1.1]">
              We engineer the digital backbone of modern enterprises with
              precision and foresight.
            </p>
          </div>

          <div className="block px-3 h-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="h-max"
            >
              {approaches.map((item) => (
                <SwiperSlide className="py-10 h-full" key={item.id}>
                  <OfferingCard offering={item} size={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* <section className="relative py-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20 pb-8 border-b border-slate-300">
            <h2 className="text-2xl flex-[35%] sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-1.8px] text-[#000052]">
              Next-Gen AI & <br />
              Product Engineering
            </h2>

            <p className="max-w-full flex-[65%] text-base md:text-lg font-medium text-slate-700 leading-relaxed md:leading-[1.1]">
              Pi Bi Tech is a global AI and digital technology company
              specializing in AI Solutions, Agentic process automation, product
              development, and enterprise digital transformation. We help
              businesses automate workflows, enhance operational efficiency, and
              build intelligent systems that support sustainable growth.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Approach
            </span>
          </h2>
          <div className="block sm:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              spaceBetween={40}
              className="h-full"
              slidesPerView={1}
            >
              {approachs.map((item, index) => (
                <SwiperSlide className="py-10 h-full" key={index}>
                  <ApproachCard approach={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-10">
            {approachs.map((item, index) => (
              <ApproachCard key={index} approach={item} />
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-12 md:py-16 px-5 bg-blue-50">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl text-center w-full font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Meet Our Leadership Team
              </span>
            </h2>
            <p className="text-slate-700 text-xl leading-relaxed">
              Our leadership team brings proven experience in technology and
              strategy. With a strong focus on personalized services and GenAI
              solutions, they help clients drive scalable and reliable digital
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative mx-auto mb-4 h-28 w-28">
                    <Image
                      src={`/team${index + 1}.jpeg`}
                      alt={item?.name}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-primary">
                    {item.role}
                  </p>

                  <Link
                    href={item.linkedinUrl}
                    className="mt-3 inline-flex items-center justify-center gap-2 text-slate-500 hover:text-[#0A66C2] transition"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </Link>

                  {/* <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:px-8 flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl text-center md:text-4xl font-bold text-[#000052]">
            Where are we?
          </h2>
          <LocationMap />
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8">
            <div className="flex-1 ">
              <p className="text-base md:text-lg font-medium text-slate-700 leading-relaxed md:leading-[1.1]">
                We have successfully delivered enterprise-grade AI solutions
                across the USA, Asia, the Middle East & GCC, Europe, and
                Australia, serving diverse industries with measurable business
                impact.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-[#000052] text-white rounded-md hover:bg-[#000040] transition"
                onClick={() => router.push("/contact-us")}
              >
                Contact Us
              </button>
            </div>
            <p className="flex-1 pl-2 md:border-l-2 border-slate-400 text-base md:text-lg font-normal text-slate-500">
              We deliver AI, Agentic AI, and digital strategy technologies
              across Manufacturing, Healthcare, Retail, and Global Capability
              Centers (GCCs), helping organizations transform operations with
              data-driven and autonomous capabilities.
            </p>
          </div>
        </div>
      </section>
      <RecentEngagements />
    </div>
  );
};

export default AboutUsClientComponent;
