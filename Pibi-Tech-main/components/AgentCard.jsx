import { cn } from "@/lib/utils";

export function AgentCard({ icon, title, description, className }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-base md:text-xl font-medium text-gray-900 mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-md md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
