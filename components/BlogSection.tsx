import Link from "next/link";
import GlassCard from "./GlassCard";
import Image from "next/image";
import items2 from "@/datas/mustread.json";

export default function MustReadSection() {
  return (
    <div className="mt-10 mb-32 space-y-5">
      <h2 className="text-center">قبل از استفاده حتما باید مطالعه کنید</h2>
      <div className="flex justify-between mt-3">
        {items2.map((item) => (
          <Link href={item.link} key={item.id}>
            <GlassCard className="w-[475px] h-full  space-y-2.5">
              <Image
                src={item.image}
                width={443}
                height={300}
                alt={item.id.toString()}
                className="rounded-xl"
              />
              <p>{item.description}</p>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
