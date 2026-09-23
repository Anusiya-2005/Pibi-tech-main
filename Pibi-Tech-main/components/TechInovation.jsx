import { ArrowRight } from "lucide-react";

export default function TechInovation() {
  const engagements = [
    {
      id: 1,
      title: "Autonomous Lead Gen & SDR Agent",
      subtitle: "Industry 5.0 for Enterprises",
      image: "/vision-ai.png",
      link: "/contact-us",
    },
    {
      id: 2,
      title: "Financial Data Extraction Agent",
      subtitle: "Industry 5.0 for Enterprises",
      image: "/vision-ai.png",
      link: "/contact-us",
    },
    {
      id: 3,
      title: "GSTR Returns Notification Agent",
      subtitle: "Industry 5.0 for Enterprises",
      image: "/vision-ai.png",
      link: "/contact-us",
    },
    {
      id: 4,
      title: "Web research & Media Agent",
      subtitle: "EMS at Largest Asian Airport",
      image: "/vision-ai.png",
      link: "/contact-us",
    },
    {
      id: 5,
      title: "Corporate Registry Agent",
      subtitle: "Personalised Shopping Assistant",
      image: "/generative-ai.png",
      link: "/contact-us",
    },
    {
      id: 5,
      title: "Corporate Registry Agent",
      subtitle: "Personalised Shopping Assistant",
      image: "/generative-ai.png",
      link: "/contact-us",
    },
  ];

  return (
    <section
      id="Agents"
      className="relative section-padding overflow-hidden bg-[url('/network.jpg')] bg-cover bg-center"
    >
      <div className="relative container-max">
        <div className="flex flex-col justify-center items-center mb-8 gap-5">
          <h2 className="text-2xl flex-1 md:text-4xl font-bold text-white">
            AI Agents for Every Enterprise Function
          </h2>

          <p className="text-white/70 flex-1 text-xl">
            Accelerate Operational Efficiency with AI Agents Built to Automate
            Complex Workflows
          </p>
        </div>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {engagements.map((engagement) => (
            <div
              key={engagement.id}
              className="group relative bg-black rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engagement.image}
                  alt={engagement.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent text-center">
                <h3 className="text-2xl px-2 font-semibold text-white mb-2">
                  {engagement.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  {engagement.subtitle}
                </p>

                <a
                  href={engagement.link}
                  className="inline-flex items-center text-white gap-2 font-semibold group-hover:gap-3 transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
