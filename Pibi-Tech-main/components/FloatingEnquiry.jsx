import Link from "next/link";

export default function FloatingEnquiry() {
  return (
    <Link
      href="#contact"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40
        bg-primary text-white px-4 py-6 rounded-l-lg
        hover:pr-5 transition-all duration-300
        flex items-center justify-center shadow-lg"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "translateY(-50%) scaleY(-1)",
      }}
    >
      <span className="font-bold text-xs tracking-widest">ENQUIRY</span>
    </Link>
  );
}
