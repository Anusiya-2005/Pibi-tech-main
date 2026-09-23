export default function DeliveryProcess() {
  const steps = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/55f9bc07158fd5f6702e094f64f9c843cf00bf25?width=200",
      title: "Installation",
      description:
        "Begin With A Testable Framework That Seamlessly Integrates Into Your Existing Workflow. This Initial Setup Allows You To Evaluate How Pibi Tech Meets Your Specific Requirements Before Moving On To Customization",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d6acd4ec0ba95f5e4703a81b6414384cf75011ea?width=200",
      title: "Consultation",
      description:
        "Collaborate with our experts to understand your unique operational challenges and VISUAL INSPECTION needs. We assess your existing systems to identify areas for improvement",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9e554a17debcd0e23def53a45611fd86117440ef?width=200",
      title: "Customization",
      description:
        "Tailor the solution to fit your specific use cases. Our team configures Pibi Tech to align with your operational requirements, ensuring the solution is both relevant and effective",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/108851b1fc552666c01532ae35b03826c8f9f150?width=200",
      title: "Implementation",
      description:
        "Begin with a testable framework that seamlessly integrates into your existing workflow. This initial setup allows you to evaluate how Pibi Tech meets your specific requirements before moving on to customization",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e65f096f8ad6482d69719c1d72a22a390ca02c1c?width=200",
      title: "Support",
      description:
        "Deploy the customized solution into your production environment. We work closely with your team to ensure a smooth transition, minimizing disruptions to ongoing operations",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-[1320px] px-6">
        <h2 className="text-[34px] font-semibold leading-[42px] text-[#1E3A5F] mb-12">
          Delivery Process
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#248BB3] hidden lg:block" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 lg:pl-16">
                {/* Dot */}
                <div className="absolute left-[22px] top-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-50-darker to-blue-50-light border-3 border-[#F4F7FB] hidden lg:block" />

                {/* Card */}
                <div className="bg-white rounded-[10px] p-6 flex-1">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-[100px] h-[100px] mb-4"
                  />
                  <h3 className="text-[#248BB3]/80 text-[36px] font-medium leading-[46px] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base font-normal leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
