import Link from "next/link";
import { Button } from "./ui/button";
import VideoComponent from "./VideoComponent";

export default function AivideoSection() {
  return (
    <div>
      <h3 className="text-center">
        با دستیار هوش مصنوعی سفارشی لوما، پشتیبانی و راهنمایی اختصاصی لحظه‌ای
        برای شما!
      </h3>
      <VideoComponent src="/Comp 1.mp4" type="video/mp4" />
      <div className="flex items-center justify-center gap-3 my-4">
        <Button className="bg-secondary text-white" asChild>
          <Link href="/">درخواست دموی رایگان</Link>
        </Button>
        <Button className="bg-secondary text-white" asChild>
          <Link href="/">راهکار ها</Link>
        </Button>
      </div>
    </div>
  );
}
