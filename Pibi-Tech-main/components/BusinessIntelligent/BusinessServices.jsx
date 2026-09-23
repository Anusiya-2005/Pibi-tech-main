import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { BarChart2, CheckCircle2, Database, TrendingUp } from "lucide-react";

const services = [
  {
    title: "BI Consulting & Implementation",
    description:
      "We help organizations plan, design, and deploy BI ecosystems aligned with business goals.",
    icon: BarChart2,
    points: [
      "Interactive reports & dashboard visualization",
      "Automated reporting workflows",
      "BI system setup & optimization",
      "KPI architecture & performance tracking",
    ],
  },
  {
    title: "Data Architecture & Engineering",
    description: "Reliable analytics begins with strong data foundations.",
    icon: Database,
    points: [
      "Cloud data architecture design",
      "Data lake & warehouse engineering",
      "Real-time data ingestion pipelines",
      "ETL integration & transformation",
      "Structured data governance",
    ],
  },
  {
    title: "Advanced Analytics & Machine Learning",
    description:
      "Beyond reporting — intelligent prediction and pattern discovery.",
    icon: TrendingUp,
    points: [
      "Predictive analytics models",
      "Machine learning integration",
      "Big data processing",
      "Behavioral & trend analysis",
    ],
  },
];

export default function BusinessServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Business Intelligence & Data Engineering Capabilities
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
