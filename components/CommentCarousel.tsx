"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CommentSection from "./CommentSection";
import commentData from "@/datas/commentsData.json";
import AutoScroll from "embla-carousel-auto-scroll";

type CommentCarouselProps = {
  speed?: number;
};

export default function CommentCarousel({ speed = 1 }: CommentCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
        dragFree: true,
      }}
      plugins={[
        AutoScroll({
          speed: speed,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {commentData.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-0 md:basis-1/3 lg:basis-1/3"
          >
            <CommentSection
              name={item.name}
              comment={item.comment}
              avatar={item.avatar}
              tags={item.tags}
              link={item.link}
              rate={item.rate}
              index={item.id}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
