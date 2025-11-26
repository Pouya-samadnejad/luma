import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

export const Rating = ({
  rating,
  max = 5,
  size = 24,
  className = "",
}: RatingProps) => {
  const percentage = Math.min(100, Math.max(0, (rating / max) * 100));

  return (
    <div dir="ltr" className={`flex items-center gap-2 font-sans ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <Star
          size={size}
          className="absolute top-0 left-0 text-gray-500"
          strokeWidth={2}
        />

        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          <Star
            size={size}
            className="text-yellow-600 fill-yellow-600"
            strokeWidth={2}
          />
        </div>
      </div>

      <span
        className="font-bold text-gray-300"
        style={{ fontSize: size * 0.75 }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
