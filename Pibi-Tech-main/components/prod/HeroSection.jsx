import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/c2e756fe79a5a3776116393031b1eef8ecacbbd5?width=2850')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40" />
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            101 AI Agents for Every Enterprise Function
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl">
            Accelerate Operational Efficiency with AI Agents Built to Automate
            Complex Workflows
          </p>
          <button className="group mt-4 flex items-center gap-4 bg-white text-[#473BF0] font-medium px-4 pr-0 rounded transition-all hover:shadow-lg">
            <span className="py-4">Get Started Today!</span>
            <div className="bg-[#261ACF] p-4 rounded-r flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
