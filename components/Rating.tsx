"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  size?: number;
  className?: string;
  showNumber?: boolean;
}

export default function Rating({
  rating,
  size = 32,
  className,
  showNumber = true,
}: RatingProps) {
  const fillPercentage = Math.min(Math.max((rating / 5) * 100, 0), 100);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        <Star
          size={size}
          className="text-muted-foreground/20"
          strokeWidth={2}
        />

        <div
          className="absolute top-0 left-0 h-full overflow-hidden flex items-center"
          style={{ width: `${fillPercentage}%` }}
          dir="ltr"
        >
          <Star
            size={size}
            className="text-yellow-500 fill-yellow-500"
            strokeWidth={2}
          />
        </div>
      </div>

      {showNumber && (
        <span className="text-xl font-bold text-foreground tabular-nums">
          {rating}
        </span>
      )}
    </div>
  );
}
