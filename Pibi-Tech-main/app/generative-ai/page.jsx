"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Index() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const router = useRouter();

  const faqs = [
    "What is Pibi Tech?",
    "How is it different from other AI tools?",
    "Who is Pibi Tech built for?",
    "Can I customize the AI agents?",
    "Do you offer managed services?",
    "How fast can we deploy?",
    "Is it secure and compliant?",
    "What cloud and LLMs do you support?",
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white relative overflow-hidden">
        <div className="px-6 lg:px-16 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[27px] md:text-[42px] lg:text-[42px] font-bold leading-[1.2] md:leading-[57.5px] text-text-primary mb-6">
              Your AI transformation partner build, automate, and accelerate
              with production ready AI agents
            </h1>
            <p className="text-[17px] leading-[28.75px] text-[#272C30] mb-8 max-w-2xl mx-auto">
              Pibi Tech unifies AI agent design, deployment, and
              governanceempowering enterprises to build, orchestrate, or scale
              intelligent automation with a trusted AI transformation partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push("/contact-us")}
                className="bg-[#248BB3] text-white px-5 py-2.5 rounded font-bold text-[15px] hover:bg-blue-700 transition-colors"
              >
                Book a demo
              </button>
              <button
                onClick={() => router.push("/contact-us")}
                className="border border-[#248BB3] text-[#248BB3] px-5 py-2.5 rounded font-bold text-[15px] hover:bg-blue-50 transition-colors"
              >
                Contact us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl mx-auto items-center mt-12">
            <div className="bg-white p-4 h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded bg-[#F6F3FF] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      opacity="0.4"
                      d="M7.56165 18.5275C7.53669 18.5276 7.50351 18.5444 7.47854 18.5446C5.85924 17.7555 4.53632 16.4404 3.71925 14.8309C3.7191 14.806 3.73554 14.7725 3.73538 14.7476C4.75246 15.0409 5.80238 15.2593 6.84367 15.4276C7.03316 16.4751 7.25588 17.514 7.56165 18.5275Z"
                      fill="#794AEE"
                    />
                    <path
                      opacity="0.4"
                      d="M18.5983 14.748C17.7845 16.4091 16.4197 17.7572 14.7519 18.5746C15.0616 17.5159 15.3214 16.4491 15.4896 15.3745C16.5371 15.1933 17.5676 14.9623 18.5811 14.6565C18.5729 14.6899 18.5981 14.723 18.5983 14.748Z"
                      fill="#794AEE"
                    />
                    <path
                      d="M14.0125 6.57044C12.0805 6.36587 10.1332 6.37777 8.20388 6.60593C8.40496 5.46457 8.66429 4.32287 9.03206 3.22211C9.0483 3.15543 9.03967 3.10556 9.04759 3.03893C9.70404 2.8768 10.3775 2.77282 11.0848 2.7685C11.7838 2.76422 12.4668 2.85992 13.117 3.01407C13.1257 3.0806 13.1259 3.13052 13.143 3.19699C13.5243 4.30151 13.7975 5.43163 14.0125 6.57044Z"
                      fill="#794AEE"
                    />
                    <path
                      d="M14.2868 14.2032C12.2069 14.4785 10.1062 14.4913 8.02322 14.2414C7.7479 12.1617 7.73507 10.0609 7.98496 7.9779C10.0647 7.70259 12.1655 7.68976 14.2484 7.93964C14.5237 10.0194 14.5366 12.1202 14.2868 14.2032Z"
                      fill="#794AEE"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[15px] font-semibold text-text-primary">
                Web Researcher
              </div>
            </div>

            <div className="bg-white rounded shadow-[0_0_80px_0_rgba(0,0,0,0.06)] border border-[#DADBDD] p-4 h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded bg-[#F4F6FF] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16.6139 10.7127C16.1397 10.5871 15.5823 10.5196 14.9165 10.5186C13.9927 10.5171 13.6512 10.7413 13.1763 11.0984C13.1513 11.115 13.1263 11.1399 13.1013 11.1649L12.3094 12.0042C11.6509 12.7105 10.4442 12.7086 9.77953 12.0001L8.99025 11.1667C8.96533 11.1334 8.94041 11.1084 8.91547 11.0917C8.43336 10.7331 8.09252 10.5079 7.1771 10.5065C6.51136 10.5054 5.9537 10.5628 5.47914 10.6952C3.49768 11.2247 3.49521 12.7975 3.49305 14.179L3.49183 14.9529C3.48855 17.0417 3.48484 19.4051 7.93706 19.4121L14.1285 19.4218C17.0829 19.4265 18.5832 17.9309 18.5878 14.9766L18.589 14.2027C18.5912 12.8212 18.5937 11.2484 16.6139 10.7127Z"
                      fill="#2754F5"
                    />
                    <path
                      opacity="0.4"
                      d="M13.3811 2.77761L8.73748 2.77032C5.05921 2.76454 5.05613 4.72019 5.05343 6.44282L5.04586 11.2612C5.04556 11.4443 5.12852 11.6108 5.26982 11.7192C5.41113 11.8277 5.60247 11.8696 5.77731 11.8199C6.15195 11.7207 6.61806 11.6715 7.17563 11.6723C7.73319 11.6732 7.84959 11.7399 8.18208 11.9901L8.93812 12.7903C9.47812 13.3736 10.2515 13.7077 11.0504 13.709C11.8494 13.7102 12.6155 13.3786 13.1656 12.7969L13.9242 11.9992C14.2574 11.75 14.3741 11.6836 14.9316 11.6845C15.4893 11.6853 15.9551 11.736 16.3295 11.8365C16.5042 11.8868 16.6873 11.8454 16.8373 11.7374C16.9789 11.6295 17.0624 11.4548 17.0627 11.2801L17.0703 6.46169C17.0563 4.73904 17.0594 2.78339 13.3811 2.77761Z"
                      fill="#2754F5"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[15px] font-semibold text-text-primary">
                Reconciliation
              </div>
            </div>

            <div className="bg-white rounded shadow-[0_0_80px_0_rgba(0,0,0,0.06)] border border-[#DADBDD] p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded bg-[#F5FAFF] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      opacity="0.4"
                      d="M14.5455 2.77889L7.57172 2.76793C4.54254 2.76317 2.73385 4.56619 2.7291 7.59536L2.71816 14.5608C2.71339 17.5983 4.5164 19.407 7.54558 19.4117L14.511 19.4227C17.5402 19.4274 19.3489 17.6244 19.3536 14.5953L19.3646 7.6215C19.3777 4.59234 17.5746 2.78365 14.5455 2.77889Z"
                      fill="#198EFF"
                    />
                    <path
                      d="M14.1691 9.22813L7.92766 9.21833C7.58647 9.21779 7.30396 8.9344 7.3045 8.5932C7.30504 8.25201 7.58843 7.9695 7.92963 7.97004L14.171 7.97984C14.5123 7.98038 14.7947 8.26377 14.7942 8.60497C14.7937 8.94616 14.5103 9.22867 14.1691 9.22813Z"
                      fill="#198EFF"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[15px] font-semibold text-text-primary">
                Document extraction
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg py-24">
        <div className="px-6 lg:px-16">
          <h2 className="text-[42px] font-bold text-text-primary text-center mb-16">
            AI solutions tailored for your industry
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] border border-blue-400 p-2 overflow-hidden rounded">
              <div className="relative pt-4 bg-white h-max flex items-center justify-center">
                <div className="absolute w-full h-full bg-[rgba(150,189,255,0.36)] blur-[46px]"></div>
                <div className="relative flex flex-col items-center">
                  <span className="inline-block bg-linear-to-r from-[rgba(21,99,228,0.80)] to-[rgba(22,99,229,0.70)] text-white text-[9px] font-bold px-2 py-1 rounded-sm mb-6">
                    Healthcare
                  </span>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d079ed7c261af5c92289006936716f0fc67b2247?width=650"
                    alt="Healthcare"
                    className="w-full max-w-[325px] h-[203px] rounded shadow-[0_7px_29px_0_rgba(100,100,111,0.20)]"
                  />
                </div>
              </div>
              <div className="p-6 bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)]">
                <h3 className="text-[25px] font-semibold text-text-primary mb-3">
                  Healthcare automation
                </h3>
                <p className="text-[17px] text-text-secondary leading-[22.4px] mb-4">
                  Revolutionize patient workflows and administrative efficiency.
                  Deploy pre-built AI agents for patient verification, insurance
                  validation, and data management fully HIPAA-compliant and
                  ready to integrate with hospital systems.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] overflow-hidden border border-[#C7FCFF] p-2 rounded flex flex-col justify-between">
              <div className="relative pt-4 bg-white h-64 flex items-center justify-center">
                <div className="absolute w-full h-full bg-[#C7FCFF]/30 blur-[46px]"></div>
                <div className="relative flex flex-col items-center">
                  <span className="inline-block bg-linear-to-r from-[rgba(24,210,219,0.80)] to-[rgba(55,234,242,0.70)] text-white text-[9px] font-bold px-2 py-1 rounded-sm mb-6">
                    Financial
                  </span>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/179f1dbd475652c090b362c0060fe2f88e7e1330?width=650"
                    alt="Financial"
                    className="w-full rounded shadow-[0_7px_29px_0_rgba(100,100,111,0.20)]"
                  />
                </div>
              </div>
              <div className="p-6 bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)]">
                <h3 className="text-[25px] font-semibold text-text-primary mb-3">
                  Financial compliance
                </h3>
                <p className="text-[17px] text-text-secondary leading-[22.4px] mb-4">
                  Streamline KYC, AML, and risk management through AI process
                  automation. Pibi Tech provides end-to-end regulatory
                  compliance solutions, real-time analysis, and AI-powered
                  accuracy for high-stakes finance operations.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] overflow-hidden rounded border border-[rgba(212,198,255,0.60)] p-2 flex flex-col justify-between">
              <div className="relative pt-4 bg-white h-64 flex items-center justify-center">
                <div className="absolute w-[364px] h-[364px] rounded-full bg-[rgba(212,198,255,0.60)] blur-[46px]"></div>
                <div className="relative flex flex-col items-center">
                  <span className="inline-block bg-gradient-to-r from-[rgba(69,46,145,0.80)] to-[rgba(69,46,145,0.70)] text-white text-[9px] font-bold px-2 py-1 rounded-sm mb-6">
                    Logistics
                  </span>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/179f1dbd475652c090b362c0060fe2f88e7e1330?width=650"
                    alt="Logistics"
                    className="w-full max-w-[325px] h-[203px] rounded shadow-[0_7px_29px_0_rgba(100,100,111,0.20)]"
                  />
                </div>
              </div>
              <div className="p-6 bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)]">
                <h3 className="text-[25px] font-semibold text-text-primary mb-3">
                  Logistics optimization
                </h3>
                <p className="text-[17px] text-text-secondary leading-[22.4px] mb-4">
                  Deliver speed and precision with AI orchestration. Optimize
                  shipment tracking, supplier coordination, and predictive
                  maintenance using AI automation agents built for multi-vendor
                  supply chains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#000636] shadow-lg py-24 relative overflow-hidden">
        <div className="max-w-[1425px] mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="text-[26px] md:text-[35px] font-bold text-[#E4EAFF] text-center mb-16">
            Delivering real value with intelligent automation
          </h2>

          <div className="grid md:grid-cols-3 gap-20">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-0.5 h-8 bg-[#248BB3]"></div>
                <h3 className="text-[25px] font-semibold text-white">
                  AI acceleration
                </h3>
              </div>
              <p className="text-[17px] text-[#969BCA] leading-[22.4px]">
                Accelerate your AI integration from idea to production in days
                not months. Pibi Tech's unified platform simplifies AI agent
                lifecycle management, allowing enterprises to deploy with 5x
                faster delivery and zero infrastructure friction.
              </p>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-0.5 h-8 bg-[#248BB3]"></div>
                <h3 className="text-[25px] font-semibold text-white">
                  Compliance & accuracy
                </h3>
              </div>
              <p className="text-[17px] text-[#969BCA] leading-[22.4px]">
                Ensure enterprise-grade accuracy, transparency, and
                regulation-readiness across all workflows. With Responsible AI
                guardrails, multi-cloud governance, and audit-ready frameworks,
                Pibi Tech helps enterprises stay compliant across industries.
              </p>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-0.5 h-8 bg-[#248BB3]"></div>
                <h3 className="text-[25px] font-semibold text-white">
                  Cost reduction
                </h3>
              </div>
              <p className="text-[17px] text-[#969BCA] leading-[22.4px]">
                Cut operational costs with intelligent automation. Whether you
                build in-house using our platform or leverage our managed AI
                service, Pibi Tech ensures predictable savings through efficient
                model orchestration and intelligent resource allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#000636] shadow-lg py-24">
        <div className="max-w-[1425px] mx-auto px-6 lg:px-16">
          <h2 className="text-[35px] font-bold text-[#E4EAFF] text-center mb-16">
            Tracking AI-driven customer satisfaction
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                stat: "95%",
                icon: "🎯",
                title: "Agent success rate",
                desc: "AI-driven extraction, validation & routing across complex workflows.",
              },
              {
                stat: "90%",
                icon: "⚡",
                title: "Optimised processing",
                desc: "End-to-end workflows reduced from hours or days → minutes.",
              },
              {
                stat: "65% +",
                icon: "💰",
                title: "Cost reduction",
                desc: "Automation eliminates manual effort and operational overhead.",
              },
              {
                stat: "5X",
                icon: "📈",
                title: "Scale increase",
                desc: "Do more with the same team using intelligent orchestration and autonomous agents.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#070F4C] rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{item.icon}</span>
                  <div className="text-[42px] font-bold text-white">
                    {item.stat}
                  </div>
                </div>
                <h4 className="text-[21px] font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-[17px] text-[#969BCA] leading-[19.2px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#000636] py-20">
        <div className="max-w-[1425px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-[38px] font-bold text-white mb-12 tracking-tight">
            Compliance & certifications
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-bg-white shadow-lg py-24">
        <div className="max-w-[1425px] mx-auto px-6 lg:px-16">
          <h2 className="text-[42px] font-bold text-text-primary text-center mb-16">
            Platform & solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F1F5FF] shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] rounded overflow-hidden">
              <div className="relative p-10">
                <div className="absolute top-10 left-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#134FC7] rounded-lg flex items-center justify-center">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                      <path
                        opacity="0.4"
                        d="M22.2397 26.2L31.773 21.963C32.1927 21.7831 32.6723 21.7831 33.0721 21.963L42.6253 26.2C43.4647 26.5797 44.2442 25.5604 43.6646 24.8409L33.6716 12.6296C32.9921 11.7901 31.8729 11.7901 31.1934 12.6296L21.2004 24.8409C20.6208 25.5604 21.4003 26.5797 22.2397 26.2Z"
                        fill="white"
                      />
                      <path
                        d="M31.9934 26.9789L23.7392 31.096C22.9997 31.4558 22.9997 32.515 23.7392 32.8748L31.9934 36.9919C32.2732 37.1318 32.6129 37.1318 32.8927 36.9919L41.1469 32.8748C41.8864 32.515 41.8864 31.4558 41.1469 31.096L32.8927 26.9789C32.5929 26.839 32.2732 26.839 31.9934 26.9789Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="text-[48px] font-black italic uppercase tracking-[5.76px] bg-gradient-to-r from-[rgba(19,79,199,0.80)] to-[rgba(19,79,199,0.10)] bg-clip-text text-transparent opacity-70">
                    Platform
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] p-8">
                <h3 className="text-[21px] font-semibold text-text-primary mb-4">
                  For technology teams who want control and flexibility
                </h3>
                <ul className="space-y-3 mb-10">
                  {[
                    "Design and deploy customized AI agents",
                    "Integrate with any LLM or API across AWS, Azure, or GCP",
                    "Full visibility through monitoring and governance tools",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-1 flex-shrink-0"
                      >
                        <path
                          d="M7.06228 2.53428C7.38446 1.66371 8.61578 1.66371 8.93796 2.53428L10.0014 5.408C10.1027 5.68169 10.3185 5.89749 10.5922 5.99878L13.4659 7.06228C14.3365 7.38446 14.3365 8.61578 13.4659 8.93796L10.5922 10.0014C10.3185 10.1027 10.1027 10.3185 10.0014 10.5922L8.93796 13.4659C8.61578 14.3365 7.38446 14.3365 7.06228 13.4659L5.99878 10.5922C5.89749 10.3185 5.68169 10.1027 5.408 10.0014L2.53428 8.93796C1.66371 8.61578 1.66371 7.38446 2.53428 7.06228L5.408 5.99878C5.68169 5.89749 5.89749 5.68169 5.99878 5.408L7.06228 2.53428Z"
                          fill="#2754F5"
                        />
                      </svg>
                      <span className="text-[17px] text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="w-full border border-[#248BB3] text-[#248BB3] py-2.5 rounded font-bold text-[15px] hover:bg-blue-50 transition-colors"
                >
                  View details
                </button>
              </div>
            </div>

            <div className="bg-[#F1F5FF] shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] rounded overflow-hidden">
              <div className="relative p-10">
                <div className="absolute top-10 left-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#134FC7] rounded-lg flex items-center justify-center">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                      <path
                        opacity="0.4"
                        d="M25.9356 27.8196L9.62731 34.6912C7.93314 35.4037 6.46064 33.2979 7.71147 31.9521L20.0773 18.5254L26.4898 25.0487C27.3448 25.9037 27.0598 27.3604 25.9356 27.8196Z"
                        fill="white"
                      />
                      <path
                        d="M30.3525 5.96934L20.0766 18.5252L13.6641 12.0335C12.8091 11.1627 13.0941 9.70601 14.2183 9.24684L28.3733 3.30934C30.02 2.61267 31.4925 4.59184 30.3525 5.96934Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="text-[48px] font-black italic uppercase tracking-[5.76px] bg-gradient-to-r from-[rgba(19,79,199,0.80)] to-[rgba(19,79,199,0.10)] bg-clip-text text-transparent opacity-70">
                    Solutions
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] p-8">
                <h3 className="text-[21px] font-semibold text-text-primary mb-4">
                  For enterprises who want results without the build complexity
                </h3>
                <ul className="space-y-3 mb-10">
                  {[
                    "Pre-built AI agents for specialized workflows",
                    "24/7 managed service and continuous optimization",
                    "Proven outcomes with compliance and security built in",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-1 flex-shrink-0"
                      >
                        <path
                          d="M7.06228 2.53428C7.38446 1.66371 8.61578 1.66371 8.93796 2.53428L10.0014 5.408C10.1027 5.68169 10.3185 5.89749 10.5922 5.99878L13.4659 7.06228C14.3365 7.38446 14.3365 8.61578 13.4659 8.93796L10.5922 10.0014C10.3185 10.1027 10.1027 10.3185 10.0014 10.5922L8.93796 13.4659C8.61578 14.3365 7.38446 14.3365 7.06228 13.4659L5.99878 10.5922C5.89749 10.3185 5.68169 10.1027 5.408 10.0014L2.53428 8.93796C1.66371 8.61578 1.66371 7.38446 2.53428 7.06228L5.408 5.99878C5.68169 5.89749 5.89749 5.68169 5.99878 5.408L7.06228 2.53428Z"
                          fill="#2754F5"
                        />
                      </svg>
                      <span className="text-[17px] text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="w-full border border-[#248BB3] text-[#248BB3] py-2.5 rounded font-bold text-[15px] hover:bg-blue-50 transition-colors"
                >
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-bg-white py-24">
        <div className="max-w-[1425px] mx-auto px-6 lg:px-16">
          <h2 className="text-[28px] capitalize md:text-[42px] font-bold text-text-primary text-center mb-16">
            Centralized integration hub for AI driven workflows
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "OpenAI",
              "LLaMA",
              "Claude",
              "Mistral AI",
              "Gemini",
              "Pinecone",
              "IBM",
              "Oracle",
              "Salesforce",
              "Snowflake",
              "databricks",
              "ServiceNow",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] p-4 h-[68px] flex items-center justify-center"
              >
                <span className="text-md font-semibold text-gray-800">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-blue py-24">
        <div className="max-w-[1135px] mx-auto px-6">
          <h2 className="text-[28px] capitalize md:text-[42px] font-bold text-text-primary text-center mb-16">
            Frequently asked questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_8px_24px_0_rgba(149,157,165,0.20)] border border-[#E7E7EF]"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[19px] font-medium text-black">
                    {faq}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M12 6v12M6 12h12"
                      stroke="#21272A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#000636] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-[110px] top-[69px] w-[337px] h-[337px] opacity-80">
            <div className="absolute w-full h-full rounded-full bg-white/0 blur-[32px]"></div>
          </div>
        </div>

        <div className="max-w-[1425px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-2xl ml-auto">
            <h2 className="text-[28px] capitalize md:text-[42px] font-bold text-[#E4EAFF] mb-6">
              Start automating smarter
            </h2>
            <p className="text-[19px] text-[#E4EAFF] leading-[25.2px] mb-10">
              whether you want to build or buy AI capabilities, we'll help you
              transform workflows with precision, compliance, and speed.
            </p>
            <button
              onClick={() => router.push("/contact-us")}
              className="border border-white text-white px-5 py-2.5 rounded font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Book a consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
