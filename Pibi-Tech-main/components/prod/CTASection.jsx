import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="rounded-xl bg-[#473BF0] p-8 md:p-12 lg:p-16 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white leading-snug max-w-2xl mx-auto">
            Not finding the perfect AI agent for your tasks or enterprise needs?
            No problem! Let us create your custom AI agent.
          </h2>
          <button className="group inline-flex items-center gap-4 bg-white text-[#473BF0] font-medium px-4 pr-0 rounded transition-all hover:shadow-lg">
            <span className="py-4">Connect with an Expert</span>
            <div className="bg-[#261ACF] p-4 rounded-r flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
