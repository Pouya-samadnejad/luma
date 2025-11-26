"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const AUTOPLAY_DELAY = 5000;

const slides = [
  {
    id: 1,

    image: "/hero1.png",
  },
  {
    id: 2,

    image: "/hero2.jpg",
  },
  {
    id: 3,

    image: "/hero3.jpg",
  },
  {
    id: 4,

    image: "/hero4.jpg",
  },
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full lg:max-w-[744px]  mt-8" dir="rtl">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
          direction: "rtl",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="p-1">
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="relative aspect-video  overflow-hidden rounded-3xl p-0">
                    {/* پس‌زمینه */}
                    <div className="absolute inset-0 ">
                      <Image src={slide.image} alt={slide.id.toString()} fill />

                      <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/30 blur-[100px] rounded-full" />
                      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-10"
        dir="rtl"
      >
        <div className="flex w-full max-w-2xl gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20 cursor-pointer"
              onClick={() => api?.scrollTo(index)}
            >
              {index < current && <div className="absolute inset-0 bg-white" />}

              {index === current && (
                <motion.div
                  className="absolute inset-y-0 right-0 bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: AUTOPLAY_DELAY / 1000,
                    ease: "linear",
                  }}
                  key={current}
                />
              )}

              <div className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
