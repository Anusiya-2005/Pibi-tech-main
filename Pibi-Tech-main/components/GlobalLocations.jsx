import Image from "next/image";

const globalOffices = [
  {
    country: "USA",
    address: ["Pflugerville, Travis, Texas 78660"],
    image: "/usa_office_1790311222079.jpg",
  },
  {
    country: "Germany",
    address: ["Erkelenz, Königsbergerstr. 19, 41812"],
    image: "/germany_office_1790311235459.jpg",
  },
  {
    country: "United Arab Emirates",
    address: ["Abu Dhabi, Khalifa City, St. 00971"],
    image: "/uae_office_1790311483273.jpg",
  },
];

const indiaOffices = [
  {
    country: "Chennai (India)",
    address: ["Tharamani, Chennai - 600 113"],
    image: "/chennai1.jpeg",
  },
  {
    country: "Madurai (India)",
    address: ["Thiruppalai, Madurai - 625014"],
    image: "/madurai.jpeg",
  },
];

// Helper Component for a single location card to avoid duplication
const LocationCard = ({ loc }) => (
  <div className="group relative h-[400px] w-full cursor-pointer [perspective:1500px]">
    {/* Card Container for 3D flip - Restricted to desktop hover */}
    <div className="w-full h-full transition-all duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl hover:shadow-[#1f6fb2]/40 rounded-3xl">
      
      {/* Front Side */}
      <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden bg-black">
        <Image
          src={loc.image}
          alt={loc.country}
          fill
          className="object-cover contrast-[1.15] saturate-[1.2]"
        />
        {/* Darker Gradient Overlay at the bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        {/* Title and Mobile Address on Front */}
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-3xl font-bold text-white drop-shadow-md mb-2">
            {loc.country}
          </h3>
          {/* Address visible directly on mobile, hidden on desktop (desktop uses flip) */}
          <div className="md:hidden flex flex-col gap-1">
            {loc.address.map((line, idx) => (
              <p key={idx} className="text-white/90 text-[15px] font-medium leading-snug drop-shadow-sm">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Back Side (Desktop hover only) */}
      <div 
        className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden p-8 flex flex-col justify-center"
        style={{ backgroundImage: 'linear-gradient(135deg, #1f6fb2, #2ec4b6)' }}
      >
        {/* Optional Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
        
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-white/30 pb-4 inline-block">
            {loc.country}
          </h3>
          <div className="flex flex-col gap-3">
            {loc.address.map((line, idx) => (
              <p key={idx} className="text-white text-lg font-medium leading-relaxed drop-shadow-sm">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  </div>
);

export default function GlobalLocations() {
  return (
    <section className="bg-[#2164a6] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Global Presence
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Delivering excellence across borders from our strategically located offices around the world.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Global Offices</h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {globalOffices.map((loc, i) => (
              <LocationCard key={`global-${i}`} loc={loc} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-10">India Offices</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
            {indiaOffices.map((loc, i) => (
              <LocationCard key={`india-${i}`} loc={loc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
