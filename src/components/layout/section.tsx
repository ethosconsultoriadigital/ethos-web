import { createElement } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return createElement(
    "section",
    { id, className: cn("px-6 py-20 md:py-28", className) },
    createElement(
      "div",
      { className: cn("mx-auto max-w-6xl", containerClassName) },
      children
    )
  );
}
