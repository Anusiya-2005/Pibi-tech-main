"use client";

import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function OurProducts() {
  const products = [
    {
      title: "Profit Engine",
      tag: "Enterprise AI Platform",
      description:
        "A unified AI-powered platform that connects growth, management, and operations into one intelligent system. Profit Engine helps businesses scale faster, close better deals, and stay consistently profitable  without operational complexity.",
      link: "profit-engine",
    },
    {
      title: "Astro Kids",
      tag: "AI + Vedic Intelligence",
      description:
        "Every child is born with a unique cosmic blueprint. By blending 5,000-year-old Vedic wisdom with modern AI, Astro Kids empowers parents to nurture their child’s mental, emotional, and physical well-being  holistically, confidently, and joyfully.",
      link: "https://www.astrokids.ai/",
    },
    {
      title: "Compliance Guard",
      tag: "GST Compliance Verification",
      description:
        "Verify GST. Avoid Penalties. Automatically verify GST filings and detect mismatches in real time.Reduce compliance risk and avoid penalties with minimal manual effort.",
      link: "compliance-bot",
    },
    // {
    //   title: "Brand Trust+",
    //   tag: "Intelligent Brand Authority",
    //   description:
    //     "Know How Your Brand Is Seen. Monitor how your brand is represented across digital channels.Identify trust gaps early and protect long-term brand credibility.",
    //   link: "contact-us",
    // },
    // {
    //   title: "DealFlow",
    //   tag: "Quote & CPQ",
    //   description:
    //     "Create Accurate Quotes, Faster.Create accurate quotes using intelligent pricing and product rules.Shorten deal cycles and reduce errors across sales teams.",
    //   link: "contact-us",
    // },
    {
      title: "PriceSense",
      tag: "AI Pricing Intelligence",
      description:
        "Price with Confidence.Analyze demand, competition, and performance signals. Optimize pricing decisions to improve margins and win rates.",
      link: "price-sense",
    },
    // {
    //   title: "SharpTarget",
    //   tag: "ICP Intelligence",
    //   description:
    //     "Focus on the Right Customers.Identify customers that best match your ideal profile. Focus sales and marketing efforts where conversion is highest.",
    //   link: "contact-us",
    // },
    // {
    //   title: "Smart Engage",
    //   tag: "Intelligent Auto-Mail & Triggers",
    //   description:
    //     "Automate Timely Communication.Automate emails and actions based on real-time customer events. Ensure timely follow-ups without manual coordination.",
    //   link: "contact-us",
    // },
  ];

  const Card = ({ product }) => (
    <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <span className="inline-block text-md font-semibold text-primary bg-primary/10 py-1 px-3 rounded-full mb-4">
          {product.tag}
        </span>

        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
          {product.title}
        </h3>

        <p className="text-slate-700 leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      <a
        href={product.link}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-6"
      >
        Explore product
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );

  return (
    <section className="py-12 bg-blue-50" id="Products">
      <div className="container-max">
        <div className="mb-16 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Products
            </span>
          </h2>
          <p className="text-slate-700 text-xl text-center leading-relaxed">
            Purpose-built AI products designed to drive measurable business
            outcomes and meaningful human impact.
          </p>
        </div>

        <div className="block">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide className="py-10 h-full" key={index}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
