import Link from "next/link";
import GlassCard from "./GlassCard";
import Image from "next/image";
import { ReactNode } from "react";

export default function ArticleSection({
  title,
  data,
  action,
}: {
  title: string;
  data: any[];
  action?: ReactNode;
}) {
  return (
    <div className="mt-10 mb-32 space-y-5">
      <h2 className="text-center">{title}</h2>
      <div className="flex justify-between mt-3">
        {data.map((item) => (
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
      {action ? <div className="flex justify-center">{action}</div> : null}
    </div>
  );
}
