import Link from "next/link";
import { Button } from "./ui/button";
import { HeroCarousel } from "./HeroCarousel";

export default function HeroSection() {
  return (
    <main className="h-full flex items-center justify-between">
      <div className="space-y-5 w-1/2">
        <h1> هوش مصنوعی، سفارشی برای شما!</h1>
        <p className="text-[21px] leading-9">
          با این سرویس، شما می‌توانید یک دستیار هوش مصنوعی اختصاصی بسازید که با
          استفاده از اطلاعات برند، محتوای سایت، یا داده‌های شخصی‌سازی‌شده شما
          شکل می‌گیرد، پاسخ‌های دقیق و هوشمند به سؤالات مشتریان ارائه دهد،
          پشتیبانی مداوم به‌صورت ۲۴ ساعته فراهم کند، و به‌راحتی با پلتفرم‌ها و
          وب‌سایت‌های مختلف ادغام شود تا تجربه کاربری منحصربه‌فردی برای شما و
          مخاطبانتان ایجاد کند.
        </p>
        <Button className="bg-secondary text-white" asChild>
          <Link href="/">شروع به چت</Link>
        </Button>
      </div>
      <HeroCarousel />
    </main>
  );
}
