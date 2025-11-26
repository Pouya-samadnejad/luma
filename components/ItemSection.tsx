import Image from "next/image";
import GlassCard from "./GlassCard";
import items from "@/datas/data1.json";
import { Button } from "./ui/button";

export default function ItemSection() {
  return (
    <GlassCard className="lg:flex justify-between items-center mt-10 space-y-3 lg:space-y-0 ">
      {items.map((item) => (
        <div
          className="p-px dark:bg-linear-to-r from-[#343A40]  to-[#080808] rounded-xl  "
          key={item.id}
        >
          <div className="bg-background rounded-2xl">
            <GlassCard
              glowColor={item.color}
              className="flex flex-col items-center text-center p-8 w-full lg:max-w-[470px] h-[431px] gap-4 background-red backdrop-blur-3xl  "
            >
              <Image
                src={item.image}
                width={324}
                height={216}
                alt={item.title}
                className="object-contain h-48 w-auto drop-shadow-2xl"
              />

              <h5 className="text-xl font-bold text-foreground">
                {item.title}
              </h5>

              <p className="text-[21px] text-[#6C757D] min-h-10">
                {item.description}
              </p>

              <Button
                variant="outline"
                className="mt-4 w-full sm:w-auto border-zinc-500 hover:bg-zinc-800 hover:text-white dark:text-white bg-transparent"
              >
                دریافت اطلاعات
              </Button>
            </GlassCard>
          </div>
        </div>
      ))}
    </GlassCard>
  );
}
