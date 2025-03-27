import { CircleDashed, Expand, Paintbrush } from "lucide-react";

const features = [
  {
    icon: <Expand className="h-6 w-6 text-primary" />,
    title: "Lightweight & Scalable",
    description:
      "Icons are lightweight, highly optimized scalable vector graphics (SVG).",
  },
  {
    icon: <CircleDashed className="h-6 w-6 text-primary" />,
    title: "Clean & consistent",
    description:
      "Designed with a strict set of design rules for consistency in style and readability.",
  },
  {
    icon: <Paintbrush className="h-6 w-6 text-primary" />,
    title: "Customizable",
    description: "Customize the color, size, stroke width, and more.",
  },
];

const FeatureCard = () => {
  return (
    <>
      <div className="mt-0 flex min-h-32 items-center justify-center p-6">
        <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-lg border border-[#222] bg-background p-6 text-foreground shadow-md"
            >
              <div className="flex items-center">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
