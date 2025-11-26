"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import commentData from "@/datas/commentsData.json";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

type CommentCarouselProps = {
  direction: "left" | "right" | "up" | "down";
};

export default function TestimonialCarousel({
  direction,
}: CommentCarouselProps) {
  return (
    <div>
      <Marquee
        direction={direction}
        speed={50}
        className="mask-r-from-80% mask-l-from-80%"
        pauseOnHover={true}
        gradientWidth={200}
        autoFill
      >
        {commentData.map((item) => (
          <div key={item.id}>
            <TestimonialCard
              name={item.name}
              comment={item.comment}
              avatar={item.avatar}
              tags={item.tags}
              link={item.link}
              rate={item.rate}
              index={item.id}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
