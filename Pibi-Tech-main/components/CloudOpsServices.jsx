import { Bot, ShieldCheck, CheckCircle2, Cloud, Settings } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const services = [
  {
    title: "Cloud Operations",
    description: "Future-ready cloud foundations built for scale.",
    icon: Cloud,
    points: [
      "Cloud Strategy & Readiness",
      "Architecture & Deployment",
      "Migration & Integration",
      "Managed Cloud Operations",
      "Cloud Cost Optimization",
      "Cloud Security & Monitoring",
    ],
  },
  {
    title: "DevOps & SRE",
    description: "Automation-driven delivery with built-in reliability.",
    icon: Settings,
    points: [
      "DevOps Assessment & Roadmap",
      "CI/CD Pipeline Engineering",
      "Containerization & Orchestration",
      "Configuration & Infrastructure as Code",
      "Site Reliability Engineering",
      "Performance Observability",
    ],
  },
  {
    title: "Cybersecurity Services",
    description: "Proactive defense for modern infrastructure.",
    icon: ShieldCheck,
    points: [
      "Security Posture Assessment",
      "Vulnerability & Penetration Testing",
      "Threat Detection & Response",
      "Compliance & Governance Frameworks",
      "Security Automation",
      "CISO as a Service",
    ],
  },
  {
    title: "IT Infrastructure Services",
    description: "Operational backbone engineered for resilience.",
    icon: Bot,
    points: [
      "Cloud & Hybrid Infrastructure Management",
      "Data Center Operations",
      "IT Security & Compliance",
      "Managed IT Services",
      "Infrastructure Modernization",
      "Business Continuity & Recovery",
    ],
  },
];

export default function CloudOpsServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Intelligent Infrastructure Services
            </span>
          </h2>
        </div>

        <Swiper
          className="w-full relative px-5"
          spaceBetween={20}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SwiperSlide key={index} className="py-10">
                <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="bg-brand-gradient p-8 text-white relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-5">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="p-8 h-full bg-white">
                    <ul className="space-y-4">
                      {service.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
