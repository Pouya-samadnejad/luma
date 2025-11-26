import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { AccordionButton } from "./AccordionButton";

export function HamburgeMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-white! text-xl"></SheetTitle>
          <SheetDescription className="mt-4">
            <Button className="bg-background  w-full text-white" asChild>
              <Link href="/">راهکار ها</Link>
            </Button>
            <AccordionButton title="سرویس ها">ساب منو</AccordionButton>
            <AccordionButton title=" منابع">ساب منو</AccordionButton>

            <Button className="bg-background w-full text-white" asChild>
              <Link href="/">تعرفه</Link>
            </Button>
            <Button className="bg-background w-full text-white" asChild>
              <Link href="/">وبلاگ</Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button className="text-white text-center" asChild>
            <Link href="/">ورود به حساب</Link>
          </Button>
          <SheetClose asChild>
            <Button variant="outline">بستن</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
