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
      <div className="lg:flex justify-between mt-3">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <GlassCard className="lg:w-[475px] w-full h-[425px] my-3">
              <div className="relative w-full h-4/5 ">
                <Image
                  src={item.image}
                  fill
                  alt={item.id.toString()}
                  className="rounded-xl"
                />
              </div>
              <p className="pt-4">{item.description}</p>
            </GlassCard>
          </Link>
        ))}
      </div>
      {action ? <div className="flex justify-center">{action}</div> : null}
    </div>
  );
}
