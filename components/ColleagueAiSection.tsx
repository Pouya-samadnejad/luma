import Image from "next/image";
import GlassCard from "./GlassCard";

export default function ColleagueAiSection() {
  return (
    <div className="my-40 ">
      <h2 className="text-center">همکار دیجیتال خود را خلق کنید</h2>
      <div className="flex gap-10 items-center justify-between mt-10">
        <GlassCard className="p-0 h-fit">
          <Image
            src="/colleage1.png"
            width={369}
            height={434}
            alt="Colleague AI"
          />
        </GlassCard>
        <GlassCard className="p-0 h-fit">
          <Image
            src="/colleague2.png"
            width={437}
            height={514}
            alt="Colleague AI"
          />
        </GlassCard>
        <GlassCard className="p-0 h-fit">
          <Image
            src="/colleague3.png"
            width={369}
            height={434}
            alt="Colleague AI"
          />
        </GlassCard>
      </div>
    </div>
  );
}
