"use client";
import { Home } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/schedule-meeting");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-500">
      <section
        className="relative w-full bg-cover bg-center flex items-center justify-start px-6 sm:px-12 lg:px-24"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/e95b0e31ef607e1083d5c51b2ddb370239e430e0?width=2850')",
          minHeight: "363px",
        }}
      >
        <div className="max-w-7xl mx-auto w-full py-20 lg:py-24">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[36px] font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Pibi Tech AI-Powered Month-End Close Assistant
          </h1>
          <button className="bg-white bg-linear-to-r from-[#2563eb] to-[#059669] text-white font-semibold px-4 py-3 h-auto text-[15px] tracking-wide">
            Book a Demo
          </button>
        </div>
      </section>

      <section className="bg-blue-50 py-12 sm:py-16 lg:py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[#248BB3] text-4xl sm:text-5xl lg:text-[36px] font-semibold leading-tight tracking-tight">
                Accelerate Your Financial Close <br />
                with Precision and Insight
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Pibi Tech is an AI-powered assistant designed to streamline and
                automate your book closing process delivering faster, more
                accurate financial results with deep ERP intelligence.
              </p>
            </div>
            <div className="w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d06d72835a9c583727d0af903285e4292eb9015e?width=1152"
                alt="Pibi Tech Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#248BB3] text-4xl sm:text-5xl lg:text-[36px] font-semibold text-center mb-8">
            Challenges
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12 text-base leading-relaxed">
            Finance teams spend countless hours every month validating journals,
            reconciling subledgers, checking anomalies, and ensuring data
            integrity across ERP systems. Manual close activities often lead to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {[
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/a18a240ae3f408b31fbac4dd67109234f793fa5f?width=200",
                title: "Delays in period-end closure",
                description: "due to unposted journals and missing entries.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/47a7919dbe9efe6ef29e96d6f69232ad016ca7c1?width=200",
                title: "Reconciliation gaps",
                description: "between subledgers and general ledger.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/05973151b88fea53fe8a675b277ec67db54ea268?width=200",
                title: "Data quality issues",
                description:
                  "like duplicate invoices or incorrect currency usage.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/96c8f67f3479dbc2906b85073a2cafb20beb3dcf?width=200",
                title: "Limited visibility",
                description:
                  "into overall close progress and unresolved anomalies.",
              },
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-6"
              >
                <img
                  src={challenge.icon}
                  alt={challenge.title}
                  className="w-24 h-24"
                />
                <div className="space-y-2">
                  <h3 className="text-gray-800 font-semibold text-base leading-relaxed">
                    {challenge.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="font-normal">
                      {challenge.title.split(" ").slice(-1)}
                    </span>
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-center text-base leading-relaxed">
            These inefficiencies increase risk and make financial reporting
            cumbersome and error-prone.
          </p>
        </div>
      </section>

      <section className="bg-blue-900 py-12 sm:py-16 lg:py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[36px] font-semibold mb-6">
            Our Solution
          </h2>
          <div className="space-y-6 mb-12 max-w-4xl">
            <p className="text-white text-base leading-relaxed">
              Pibi Tech is an AI-powered assistant that automates and
              streamlines your month-end closing process.
            </p>
            <p className="text-white text-base leading-relaxed">
              It integrates seamlessly with ERP systems such as Oracle
              E-Business Suite and Oracle Cloud ERP, providing end-to-end
              visibility, real-time validation, and AI-assisted anomaly
              detection.
            </p>
            <p className="text-white text-base leading-relaxed">
              With Pibi Tech, finance teams can:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Home />,
                title: "Real-Time Progress Tracking",
                description:
                  "Track close progress through a real-time dashboard showing completion status.",
              },
              {
                icon: <Home />,
                title: "Automated Journal Validation",
                description:
                  "Detect missing journals and validate expected entries automatically.",
              },
              {
                icon: <Home />,
                title: "AI-Powered Reconciliation",
                description:
                  "Reconcile subledgers to the general ledger with AI-based variance detection.",
              },
              {
                icon: <Home />,
                title: "Smart Anomaly Detection",
                description:
                  "Identify anomalies like duplicate invoices, missing VAT, or currency mismatches.",
              },
              {
                icon: <Home />,
                title: "Conversational Data Insights",
                description:
                  "Query ERP data conversationally using natural-language AI chat.",
              },
              {
                icon: <Home />,
                title: "Continuous AI Learning",
                description:
                  "Continuously improve accuracy by training the AI to recognize recurring exceptions.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="border text-white border-[#248BB3] p-4 relative"
              >
                {feature.icon}
                <div className="pt-5">
                  <h3 className="text-white text-2xl font-semibold mb-4 leading-snug tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 text-base leading-relaxed">
                    {feature.description.includes("Identify anomalies") && (
                      <>
                        <span className="font-bold">Identify anomalies</span>
                        {feature.description.replace("Identify anomalies", "")}
                      </>
                    )}
                    {feature.description.includes(
                      "Detect missing journals",
                    ) && (
                      <>
                        <span className="font-bold">
                          Detect missing journals
                        </span>
                        {feature.description.replace(
                          "Detect missing journals",
                          "",
                        )}
                      </>
                    )}
                    {feature.description.includes(
                      "Reconcile subledgers to the general ledger",
                    ) && (
                      <>
                        <span className="font-bold">
                          Reconcile subledgers to the general ledger
                        </span>
                        {feature.description.replace(
                          "Reconcile subledgers to the general ledger",
                          "",
                        )}
                      </>
                    )}
                    {feature.description.includes("Track close progress") && (
                      <>
                        <span className="font-bold">Track close progress</span>
                        {feature.description.replace(
                          "Track close progress",
                          "",
                        )}
                      </>
                    )}
                    {feature.description.includes(
                      "Query ERP data conversationally",
                    ) && (
                      <>
                        <span className="font-bold">
                          Query ERP data conversationally
                        </span>
                        {feature.description.replace(
                          "Query ERP data conversationally",
                          "",
                        )}
                      </>
                    )}
                    {feature.description.includes(
                      "Continuously improve accuracy",
                    ) && (
                      <>
                        <span className="font-bold">
                          Continuously improve accuracy
                        </span>
                        {feature.description.replace(
                          "Continuously improve accuracy",
                          "",
                        )}
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white text-base leading-relaxed">
            Pibi Tech learns from each cycle helping teams close faster, with
            fewer errors and higher confidence.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#248BB3] text-4xl sm:text-5xl lg:text-[36px] font-semibold mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/c36e556a2e19ac24117d24b06795b45c7a351659?width=120",
                title: "Connect to ERP",
                description:
                  "Pibi Tech securely integrates with your ERP system (e.g., Oracle), fetching relevant financial and transactional data in real time.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/520cd9ad0187898674359931a66f5d65fbb85270?width=120",
                title: "AI Close Dashboard",
                description:
                  "Displays the current close progress (e.g., 97% complete), expected vs. posted journals, pending invoices, and key variances  all at a glance.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/1c06e71ab39f14a02ea62c313437f7cb75278634?width=120",
                title: "Financial Insights & Drill-Down",
                description:
                  "Provides direct navigation to Balance Sheet, P&L, and Trial Balance, allowing quick variance checks and data validation.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/4d98e0a8e3fc559adb792d057d690fcc3efec6ee?width=120",
                title: "Exception Identification",
                description:
                  "The AI flags missing journals, duplicate invoices, and subledger variances. Users can mark one-time entries as exceptions so Pibi Tech learns over time.",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/a923be2ad09ed773da5d410cebb8a51edcb7e29b?width=120",
                title: "Conversational Querying",
                description:
                  'Use natural-language prompts like "Show unposted journals for August" or "List invoices without VAT"  and Pibi Tech instantly retrieves results.',
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/26746ae557c1d0aa329127b241f48b49967e65e7?width=120",
                title: "Anomaly Review & Continuous Learning",
                description:
                  "Anomalies such as missing exchange rates or unusual posting patterns are explained in natural language. Users can resolve, ignore, or teach the AI to recognize acceptable exceptions  making Pibi Tech smarter with every close.",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-blue-50 p-6 space-y-6">
                <div className="flex items-center gap-4 border-l-4 border-Pibi Tech-blueAccent pl-5">
                  <div className="bg-white rounded-full w-15 h-15 flex items-center justify-center shrink-0">
                    <img src={step.icon} alt="" className="w-15 h-15" />
                  </div>
                  <h3 className="text-[#248BB3] text-2xl font-semibold leading-snug tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed pl-5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-12 sm:py-16 lg:py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-[#248BB3] text-4xl sm:text-5xl lg:text-[36px] font-semibold leading-tight tracking-tight">
                See Pibi Tech in Action <br />
                Book a Demo
              </h2>
              <div className="w-full max-w-md">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ecc1102a0afbc08739ae1137a007a0cd86c8deab?width=903"
                  alt="Financial Analytics"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-sm shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-gray-700 text-base"
                    >
                      Full Name <span className="underline">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-base"
                    >
                      Last Name <span className="underline">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="workEmail"
                      className="block text-gray-700 text-base"
                    >
                      Work Email <span className="underline">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="companyName"
                      className="block text-gray-700 text-base"
                    >
                      Company Name <span className="underline">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="jobTitle"
                      className="block text-gray-700 text-base"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-700 text-base"
                    >
                      Phone Number <span className="underline">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-base"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-[#248BB3] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#248BB3] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-400 text-white hover:bg-[#248BB3] font-medium px-4 py-3 h-auto text-[15px] tracking-wide"
                >
                  Talk to an Expert
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
