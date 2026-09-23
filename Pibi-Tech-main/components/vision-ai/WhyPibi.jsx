export default function WhyPibi() {
  const outcomes = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7bf1e33400b6c11f1a32b22b17a536cb170f4ac8?width=86",
      percentage: "80%",
      title: "Error Reduction",
      description:
        "AI-driven scanning and validation drastically minimize manual mistakes across quality checks and asset tracking.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3d8e39f49b6a459bdff9bf9616a284789c20b7a3?width=86",
      percentage: "70%",
      title: "Productivity Gain",
      description:
        "Automated inspections and asset capture boost operational throughput and free up your team for higher-value tasks.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d5b430a669bcd6a6c5e0d613ccd7d9a60e8f7d8?width=86",
      percentage: "50%",
      title: "Faster Operations",
      description:
        "Instant recognition and real-time defect detection cut cycle times and keep workflows moving seamlessly.",
    },
  ];

  return (
    <section className="w-full bg-linear-to-r from-blue-900 to-blue-800 py-16">
      <div className="container mx-auto max-w-[1320px] px-6">
        <h3 className="text-[34px] font-bold leading-[42px] text-white mb-3">
          Why Pibi Tech ?
        </h3>
        <h2 className="text-[34px] font-bold leading-[42px] text-white mb-12">
          Business Outcomes That Drive Transformation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-[10px] p-5 backdrop-blur-sm"
            >
              <div className="flex gap-4">
                <img
                  src={outcome.icon}
                  alt={outcome.title}
                  className="w-11 h-11 flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="text-yellow-400 text-[35px] font-medium leading-[48px] mb-2">
                    {outcome.percentage}
                  </div>
                  <h4 className="text-white text-[20px] font-medium leading-6 mb-4">
                    {outcome.title}
                  </h4>
                  <p className="text-white text-base font-normal leading-6">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
