import Link from "next/link";
import "@/app/app.css";

export default function CTASection({
  title,
  content,
  content2,
  ctaText1,
  ctaText2,
  ctaLink1 = "contact-us",
  ctaLink2 = "contact-us",
}) {
  return (
    <div className="max-w-4xl mx-auto px-3 pb-12">
      <section className="bg-linear-to-br from-accent to-secondary rounded-3xl p-4 text-center shadow-2xl relative overflow-hidden0 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            {content}
          </p>

          {content2 && (
            <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
              {content2}
            </p>
          )}

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href={`/${ctaLink1}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#3b82f6] to-[#10b981] text-white border-2 border-white/20 px-8 py-3.5 font-bold shadow-2xl transform-gpu hover:scale-105 transition-all"
            >
              {ctaText1}
            </Link>
            {ctaText2 && (
              <Link
                href={`/${ctaLink2}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 text-center hover:bg-slate-200 hover:scale-105"
              >
                {ctaText2}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
