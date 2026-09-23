import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  Atom,
  CheckCircle2,
  Factory,
  HeartPlus,
  Shield,
  ShoppingBag,
  Van,
} from "lucide-react";
import { PiMoney } from "react-icons/pi";

//
// Healthcare
// Smarter analytics for patient outcomes, operational planning, and predictive care management.
// • Reduced readmission risks
//  • Resource optimization
//  • Improved patient decision support

// Finance
// Real-time dashboards, compliance visibility, and fraud analytics.
// • Faster anomaly detection
//  • Regulatory reporting clarity
//  • Risk forecasting

// Insurance
// Predictive claims analysis and customer intelligence dashboards.
// • Improved risk modeling
//  • Faster claims workflows
//  • Fraud visibility

// Retail & Commerce
// Customer analytics, inventory intelligence, and demand forecasting.
// • Increased conversion visibility
//  • Stock optimization
//  • Retention insights

// Transportation & Logistics
// Operational analytics for routing, fleet monitoring, and delivery intelligence.
// • Route efficiency insights
//  • Reduced delays
//  • Supply chain transparency

// Manufacturing
// Production analytics and predictive maintenance intelligence.
// • Reduced downtime
//  • Quality monitoring
//  • Operational efficiency

// Energy
// Consumption analytics and infrastructure performance monitoring.
// • Resource optimization
//  • Predictive maintenance
//  • Sustainability insights

const services = [
  {
    title: "Healthcare",
    description:
      "Smarter analytics for patient outcomes, operational planning, and predictive care management.",
    icon: HeartPlus,
    points: [
      "Reduced readmission risks",
      "Resource optimization",
      "Improved patient decision support",
    ],
  },
  {
    title: "Finance",
    description:
      "Real-time dashboards, compliance visibility, and fraud analytics.",
    icon: PiMoney,
    points: [
      "Faster anomaly detection",
      "Regulatory reporting clarity",
      "Risk forecasting",
    ],
  },
  {
    title: "Insurance",
    description:
      "Predictive claims analysis and customer intelligence dashboards.",
    icon: Shield,
    points: [
      "Improved risk modeling",
      "Faster claims workflows",
      "Fraud visibility",
    ],
  },
  {
    title: "Retail & Commerce",
    description:
      "Customer analytics, inventory intelligence, and demand forecasting.",
    icon: ShoppingBag,
    points: [
      "Increased conversion visibility",
      "Stock optimization",
      "Retention insights",
    ],
  },
  {
    title: "Transportation & Logistics",
    description:
      "Operational analytics for routing, fleet monitoring, and delivery intelligence.",
    icon: Van,
    points: [
      "Route efficiency insights",
      "Reduced delays",
      "Supply chain transparency",
    ],
  },
  {
    title: "Manufacturing",
    description:
      "Production analytics and predictive maintenance intelligence.",
    icon: Factory,
    points: [
      "Reduced downtime",
      "Quality monitoring",
      "Operational efficiency",
    ],
  },
  {
    title: "Energy",
    description:
      "Consumption analytics and infrastructure performance monitoring.",
    icon: Atom,
    points: [
      "Resource optimization",
      "Predictive maintenance",
      "Sustainability insights",
    ],
  },
];

export default function BusinessSolutions() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Industry BI Solutions
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
