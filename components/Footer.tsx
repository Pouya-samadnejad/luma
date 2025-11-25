import Image from "next/image";
import Link from "next/link";
import { Instagram, Send, X } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="relative pt-px bg-linear-to-r from-[#DA8FFF]  via-[#FF6482] to-[#FFB340] h-full">
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 h-[90px] w-1/2 rounded-full  blur-[100px] opacity-20 pointer-events-none bg-[#FF6482]" />
      <div className="w-full bg-[#050505] text-white py-10 px-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-100">لینک‌های مهم</h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-300 font-medium">
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  راهکار ها
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  سرویس ها
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  منابع
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  قیمت
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info (Middle) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-right">
            <h3 className="text-2xl font-bold text-gray-100">اطلاعات تماس</h3>
            <div className="space-y-6 text-sm md:text-base text-gray-300 leading-7 font-medium">
              <p>
                آدرس دفتر مرکزی : تهران ، خیابان سهروردی شمالی، خیابان کوشش،
                پلاک 35، واحد 7
              </p>
              <p className="text-lg font-sans" dir="ltr">
                02188511051 : شماره تماس دفتر تهران
              </p>
              <p>
                آدرس دفتر نرم افزاری : بابلسر ، بلوار پاسداران ، پاسداران 24 ،
                ساختمان ترنم طبقه -1
              </p>
              <p className="text-lg font-sans" dir="ltr">
                35279771 : شماره تماس دفتر بابلسر
              </p>
              <p className="uppercase font-sans" dir="ltr">
                SUPPORT@LUMAI.IR : ایمیل پشتیبانی
              </p>

              {/* Social Text Label */}
              <p className="pt-2 text-gray-400 font-bold">:شبکه‌های اجتماعی</p>
            </div>
          </div>

          {/* Column 3: Licenses (Left side) */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end">
            {/* Note: items-end keeps the title aligned with the grid, but in RTL 'end' is left */}
            <h3 className="text-2xl font-bold text-gray-100 w-full text-right lg:text-left">
              مجوز های رسمی
            </h3>

            <div className="flex gap-4 flex-wrap justify-end">
              {/* Placeholder for Zarinpal */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                {/* Replace with actual Zarinpal Image */}
                <img
                  src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
                  alt="Zarinpal"
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Placeholder for Enamad */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                {/* Replace with actual Enamad Image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1q8kMjbPgvN5oK_JDGg0QoT4Cq254McsIvg&s"
                  alt="Enamad"
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Dark Placeholder (as seen in design) */}
              <div className="w-24 h-24 bg-[#2a2a2e] rounded-lg border border-white/10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Social Icons & Copyright */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-8 text-white">
            <Link
              href="#"
              className="hover:text-purple-400 transition-transform hover:scale-110"
            >
              <Send className="w-8 h-8 -rotate-12" /> {/* Telegram style */}
            </Link>
            <Link
              href="#"
              className="hover:text-purple-400 transition-transform hover:scale-110"
            >
              <X className="w-8 h-8" /> {/* Twitter/X */}
            </Link>
            <Link
              href="#"
              className="hover:text-purple-400 transition-transform hover:scale-110"
            >
              <Instagram className="w-8 h-8" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            تمامی حقوق این سایت متعلق به نبیولا است.
          </p>
        </div>
      </div>
    </footer>
  );
}
