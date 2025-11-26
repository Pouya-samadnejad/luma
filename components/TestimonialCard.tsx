"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { Rating } from "./Rating";

interface CommentSectionProps {
  name: string;
  avatar: string;
  rate: number;
  comment: string;
  link: string;
  tags: string[];
  index: number;
}
export default function TestimonialCard({
  name,
  avatar,
  rate,
  comment,
  link,
  tags,
}: CommentSectionProps) {
  return (
    <div
      dir="rtl"
      className="p-px bg-linear-to-r from-[#DA8FFF] w-[538px] via-[#FF6482] to-[#FFB340] h-full"
    >
      <blockquote>
        <Card className="rounded-none h-full ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2.5">
              <Avatar className="w-14 h-14">
                <AvatarImage src={avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-[18px]">{name}</p>
            </CardTitle>
            <CardAction>
              <Rating rating={rate} />
            </CardAction>
          </CardHeader>
          <CardContent className="h-45">
            <p className="mb-10">{comment}</p>
            <div className="space-x-2.5">
              <span className="mt-10 font-extrabold">تگ ها:</span>
              <div className="flex gap-2">
                {tags?.map((t, i) => (
                  <Badge key={i} className="bg-[#F0DCF5]">
                    <p className=" bg-linear-to-b from-[#291433]  to-[#8944AB] text-transparent bg-clip-text">
                      {t}
                    </p>
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="mt-10 bg-white" />
          </CardContent>

          <CardFooter className="flex justify-center h-full">
            <Link
              className="flex gap-2.5 text-[#007AFF] py- text-2xl items-center justify-center"
              href={link}
            >
              لینک به X
              <Link2 width={40} height={40} />
            </Link>
          </CardFooter>
        </Card>
      </blockquote>
    </div>
  );
}
