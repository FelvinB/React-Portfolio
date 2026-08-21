import { Button } from "@/components/design/button";

type CardProps = {
  image?: string; // New (optional)
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({
  image,
  title,
  description,
  buttonLabel,
  buttonVariant = "primary",
}: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-400 hover:bg-gray-50 transition-colors">

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h1 className="text-xl font-bold mb-2">{title}</h1>

      <p className="text-gray-600 mb-4">{description}</p>

      <Button variant={buttonVariant}>{buttonLabel}</Button>
    </div>
  );
}