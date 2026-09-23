import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    "Innovate. Transform. Succeed.",
    "Your Success is Our Mission - Excellence Delivered.",
    "Empowering Your Digital Journey.",
    "Walk the Talk – Your Partner for the New Era.",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="hidden lg:block">
            <div className="bg-linear-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=600"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2 leading-tight">
              <span className="text-primary">S</span>
              <span className="text-slate-900">TRATEGIC</span>
              <span className="text-slate-900"> | </span>
              <span className="text-primary">H</span>
              <span className="text-slate-900">UMAN-CENTRIC</span>
              <span className="text-slate-900"> | </span>
              <span className="text-primary">A</span>
              <span className="text-slate-900">GILE</span>
              <span className="text-slate-900"> | </span>
              <span className="text-primary">R</span>
              <span className="text-slate-900">ELIABLE</span>
              <span className="text-slate-900"> | </span>
              <span className="text-primary">P</span>
              <span className="text-slate-900">ROFESSIONAL</span>
            </h2>

            <p className="text-slate-700 leading-relaxed mt-6 mb-8">
              At SHARPWIZ Technologies, we're dedicated to excellence and
              innovation. Our commitment to understanding your unique needs,
              combined with our agile approach and professional expertise,
              ensures that we deliver solutions that not only meet expectations
              but exceed them. We walk the talk and stand by our promise to be
              your trusted partner in the new era of technology.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
