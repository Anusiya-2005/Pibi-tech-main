"use client";

import { useState } from "react";

export default function DeploymentFlexibility() {
  const [activeTab, setActiveTab] = useState("deployment");

  const deploymentModels = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/60e58e720bffb80e3626d15d4e117ce54e74b230?width=100",
      title: "Edge",
      description:
        "On-site, real-time AI processing with no internet dependency. Perfect for sensitive data and instant response requirements.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5fced78f700adbf3b81963105e9057fae3f3678d?width=100",
      title: "Cloud",
      description:
        "Scalable AI solutions with global access and automatic updates. Leverage the power of distributed computing.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/be9315b88d6e351eab218e9dbaf5fdb475f72efb?width=100",
      title: "Offline",
      description:
        "Operates in low-connectivity environmentssyncs data later. Ensures continuous operation regardless of network status.",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="mb-12">
          <h2 className="text-[35px] font-bold leading-[52.5px] text-[#248BB3] mb-2">
            Deployment Flexibility
          </h2>
          <h3 className="text-[35px] font-bold leading-[52.5px] text-[#248BB3]">
            & Compatibility
          </h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center flex-col md:flex-row gap-8 mb-12">
          <button
            onClick={() => setActiveTab("deployment")}
            className={`pb-2 text-[20px] font-normal relative ${
              activeTab === "deployment" ? "text-[#248BB3]" : "text-black"
            }`}
          >
            Deployment Models
            {activeTab === "deployment" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-50 rounded-t-[10px]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("compatibility")}
            className={`pb-2 text-[20px] font-normal relative ${
              activeTab === "compatibility" ? "text-[#248BB3]" : "text-black"
            }`}
          >
            Compatability
            {activeTab === "compatibility" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-50 rounded-t-[10px]" />
            )}
          </button>
        </div>

        {/* Deployment Models Content */}
        {activeTab === "deployment" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentModels.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-b-[10px] border-t-[5px] border-blue-50 p-8"
              >
                <img
                  src={model.icon}
                  alt={model.title}
                  className="w-[50px] h-[50px] mb-6"
                />
                <h4 className="text-[#248BB3] text-[20px] font-medium leading-6 mb-4">
                  {model.title}
                </h4>
                <p className="text-gray-400 text-base font-normal leading-6">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "compatibility" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentModels.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-b-[10px] border-t-[5px] border-blue-50 p-8"
              >
                <img
                  src={model.icon}
                  alt={model.title}
                  className="w-[50px] h-[50px] mb-6"
                />
                <h4 className="text-[#248BB3] text-[20px] font-medium leading-6 mb-4">
                  {model.title}
                </h4>
                <p className="text-gray-400 text-base font-normal leading-6">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
