import Image from "next/image";

const globalOffices = [
  {
    country: "USA",
    icon: "/usa.png",
    address: ["Pflugerville, Travis, Texas 78660"],
  },
  {
    country: "Canada",
    icon: "/canada.png",
    address: ["Whitby, Durham Region, Ontario L1N 4W2"],
  },
  {
    country: "Germany",
    icon: "/germany.png",
    address: ["Erkelenz, Königsbergerstr. 19, 41812"],
  },
  {
    country: "United Arab Emirates",
    icon: "/uae.png",
    address: ["Abu Dhabi, Khalifa City, St. 00971"],
  },
];

const indiaOffices = [
  {
    city: "Chennai",
    icon: "/chennai.png",
    address: ["Tharamani, Chennai - 600 113"],
  },
  {
    city: "Coimbatore",
    icon: "/coimbatore.png",
    address: ["Peelamedu, Coimbatore - 641004"],
  },
  {
    city: "Madurai",
    icon: "/madurai.png",
    address: ["Bi Bi Kulam, Madurai - 625002"],
  },
];

export default function GlobalLocations() {
  return (
    <section className="bg-linear-to-br from-[#1e293b] to-[#2563eb] py-12">
      <div className="mx-auto max-w-7xl px-6 space-y-14">
        <div>
          <h2 className="mb-8 text-3xl font-bold text-white text-center">
            Global Offices
          </h2>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {globalOffices.map((loc, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="relative w-16 aspect-square invert brightness-0">
                  <Image
                    src={loc.icon}
                    alt={loc.country}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {loc.country}
                </h3>

                {loc.address.map((line, idx) => (
                  <p key={idx} className="text-sm text-white/90">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-bold text-white text-center">
            India Offices
          </h2>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
            {indiaOffices.map((loc, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="relative w-16 aspect-square invert brightness-0">
                  <Image
                    src={loc.icon}
                    alt={loc.city}
                    fill
                    className={`object-contain ${loc.city === "Chennai" ? "brightness-0" : ""}`}
                  />
                </div>

                <h3 className="text-lg font-semibold text-white">{loc.city}</h3>

                {loc.address.map((line, idx) => (
                  <p key={idx} className="text-sm text-white/90">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
