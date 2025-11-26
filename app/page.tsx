import HeroSection from "@/components/HeroSection";
import ItemSection from "@/components/ItemSection";
import AivideoSection from "@/components/AivideoSection";
import ColleagueAiSection from "@/components/ColleagueAiSection";
import items from "@/datas/mustread.json";
import blogItems from "@/datas/blogs.json";
import ArticleSection from "@/components/ArticleSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestimonialSection from "@/components/TestimonialSection";

export default function page() {
  return (
    <div>
      <div className="lg:px-50 mt-30 px-5 ">
        <HeroSection />
        <ItemSection />
        <ArticleSection
          title="قبل از استفاده حتما باید مطالعه کنید"
          data={items}
        />
        <AivideoSection />
        <ColleagueAiSection />
      </div>
      <TestimonialSection />
      <div className="lg:px-50 px-5 my-30 ">
        <ArticleSection
          title="وبلاگ"
          data={blogItems}
          action={
            <Button className="bg-secondary text-white" asChild>
              <Link href="/"> مشاهده تمامی وبلاگ هاn </Link>
            </Button>
          }
        />
      </div>
    </div>
  );
}
