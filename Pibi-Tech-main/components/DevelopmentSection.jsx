"use client";

import { Smartphone, Code2 } from "lucide-react";

// const appTypes = [
//     {
//       title: "Enterprise & Workforce Apps",
//       icon: Building2,
//     },
//     {
//       title: "E-commerce & Marketplace Apps",
//       icon: ShoppingCart,
//     },
//     {
//       title: "On-Demand Service Platforms",
//       icon: Truck,
//     },
//     {
//       title: "IoT & Wearable Device Apps",
//       icon: Watch,
//     },
//   ];

//   const techStack = [
//     {
//       category: "Native",
//       value: "Swift (iOS), Kotlin (Android)",
//     },
//     {
//       category: "Cross-Platform",
//       value: "Flutter, React Native",
//     },
//     {
//       category: "Backend",
//       value: "Node.js, Python, Java, .NET",
//     },
//     {
//       category: "APIs",
//       value: "REST / GraphQL",
//     },
//     {
//       category: "Deployment",
//       value: "CI/CD + App Store pipelines",
//     },
//   ];

const DevelopmentSection = ({ data }) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#248BB3]/10">
              <data.icon1 className="w-8 h-8 text-[#248BB3]" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              {data.title}
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed mb-4">
            {data.subtitle}
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              {data.section1Title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.appTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                      <Icon className="w-7 h-7 text-[#248BB3]" />
                    </div>

                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-blue-50 border flex justify-center flex-col items-center border-slate-200 rounded-2xl p-10">
            <div className="flex items-center w-full gap-4 mb-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10">
                <data.icon2 className="w-7 h-7 text-[#248BB3]" />
              </div>
              <h3 className="text-2xl font-bold  text-slate-900">
                Technology Stack
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.techStack.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold text-[#1f6fb2] uppercase tracking-wide mb-2">
                    {item.category}
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
