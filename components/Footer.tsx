import Image from "next/image";
import Link from "next/link";
import { Instagram, Send, X } from "lucide-react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative pt-px bg-linear-to-r from-[#DA8FFF]  via-[#FF6482] to-[#FFB340] h-full">
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 h-[90px] w-1/2 rounded-full  blur-[100px] opacity-20 pointer-events-none bg-[#FF6482]" />
      <div className="w-full bg-background dark:text-white py-10 px-50">
        <div className="flex justify-between">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h5 className="text-5xl font-bold dark:text-gray-100">
              لینک‌های مهم
            </h5>
            <ul className="space-y-3 text-sm md:text-base dark:text-gray-300 font-medium">
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

          <div className="lg:col-span-6 flex flex-col gap-6 text-right">
            <h5 className="text-5xl font-bold dark:text-gray-100">
              اطلاعات تماس
            </h5>
            <div className="space-y-6 text-sm md:text-base dark:text-gray-300 leading-7 font-medium">
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

              <p className="pt-2 dark:text-gray-400 font-bold">
                :شبکه‌های اجتماعی
              </p>
              <div className="flex items-center gap-8 text-white">
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-transform hover:scale-110"
                >
                  <Icon icon="basil:telegram-outline" width="32" height="32" />{" "}
                </Link>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-transform hover:scale-110"
                >
                  <Icon icon="ri:twitter-x-line" width="32" height="32" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-transform hover:scale-110"
                >
                  <Instagram className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end">
            <h5 className="text-5xl font-bold dark:text-gray-100 w-full text-right lg:text-left">
              مجوز های رسمی
            </h5>

            <div className="flex gap-4 flex-wrap justify-end ">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden relative">
                <Image src="/zarin.png" alt="Zarinpal" fill />
              </div>

              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  width={125}
                  height={125}
                  src="/enamad.png"
                  alt="Enamad"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <div className="w-24 h-24 bg-[#2a2a2e] rounded-lg border border-white/10"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6"></div>
        <p className="text-gray-500 text-sm text-center mt-5">
          تمامی حقوق این سایت متعلق به نبیولا است.
        </p>
      </div>
    </footer>
  );
}
