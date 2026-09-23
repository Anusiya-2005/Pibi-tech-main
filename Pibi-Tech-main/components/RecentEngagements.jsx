import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function RecentEngagements() {
  const engagements = [
    {
      id: 1,
      title: "Enterprise Digital Transformation Technologies",
      subtitle: "Foundation technologies that modernize operations and systems",
      image: "/vision-ai.png",
      link: "/contact-us",
    },
    {
      id: 2,
      title: "Deep Tech & Emerging Technologies",
      subtitle: "Advanced technologies that create competitive differentiation",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400",
      link: "/contact-us",
    },
    {
      id: 3,
      title: "User Experience, AI & Automation",
      subtitle:
        "Technologies that directly impact users, processes, and outcomes",
      image: "/generative-ai.png",
      link: "/contact-us",
    },
  ];

  return (
    <section className="relative section-padding overflow-hidden bg-[url('/network.jpg')] bg-cover bg-center">
      <div className="relative container-max">
        <div className="flex flex-col md:flex-row max-w-[90%] gap-5">
          <h2 className="text-2xl flex-1 md:text-4xl font-bold text-white mb-14">
            Pi (π) Nary Labs <br /> - Where Industry Innovation Becomes Reality
          </h2>

          <p className="text-white/70 flex-1 text-md">
            Pi Nary Labs is Pi BI Tech’s innovation hub, helping businesses
            solve complex industry challenges using emerging technologies. From
            IoT and Computer Vision to GenAI, AR/VR, and Edge Computing, we
            enable Industry 5.0 transformation through collaborative R&D,
            scalable engineering, and cloud-native solutions that drive
            sustainable business growth.
          </p>
        </div>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {engagements.map((engagement, index) => (
            <div
              key={engagement.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  fill
                  src={`/image${index}.png`}
                  alt={engagement.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 bg-black/60">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {engagement.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  {engagement.subtitle}
                </p>

                <a
                  href={engagement.link}
                  className="inline-flex items-center text-white gap-2 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn more
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
