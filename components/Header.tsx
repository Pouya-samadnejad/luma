import Image from "next/image";
import Link from "next/link";
import WebsiteLogo from "@/public/NebulaAILogo.png";
import { MenuItems } from "./MenuItems";
import { Button } from "./ui/button";
import SwitchToggle from "./SwitchToggle";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full bg-background/40 backdrop-blur-md px-50 ">
      <div className="  flex h-20 items-center justify-between  ">
        <Link href="/">
          <Image
            src={WebsiteLogo}
            alt="logo of website"
            className="w-auto h-10 object-contain"
          />
        </Link>

        <div className="hidden md:block">
          <MenuItems />
        </div>

        <div className="flex items-center gap-4 ">
          <SwitchToggle />
          <Button className="text-white" asChild>
            <Link href="/">ورود به حساب</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
