import Image from "next/image";
import Link from "next/link";

export default function SolutionCard({
  title,
  description,
  icon,
  image,
  reverse = false,
}) {
  return (
    <section className="w-full blue-50 py-5">
      <div className="container mx-auto max-w-330 px-6">
        <div
          className={`flex items-center flex-col md:flex-row gap-6 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/2">
            {icon}
            <h2 className="mt-3 text-[25px] font-bold leading-[1.2] text-[#248BB3] mb-4">
              {title}
            </h2>
            <p className="text-[20px] font-normal text-gray-400 mb-8">
              {description}
            </p>
            <Link
              href="contact-us"
              className="inline-block px-5 py-3 bg-[#248BB3] text-white text-base font-medium rounded hover:opacity-90 transition-opacity"
            >
              Explore
            </Link>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl relative w-full aspect-video overflow-hidden">
              <Image
                fill
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
