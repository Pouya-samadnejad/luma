import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface AccordionButtonProps {
  title: string;
  children: ReactNode;
}
export function AccordionButton({ title, children }: AccordionButtonProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full  py-0 rounded-2xl "
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="justify-center py-2 hover:bg-primary/90 hover:no-underline text-white!">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-center text-balance">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
