import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article" | "header" | "footer";
  size?: "default" | "narrow" | "wide";
};

const sizeMap = {
  default: "max-w-[88rem]",
  narrow: "max-w-[68rem]",
  wide: "max-w-[102rem]",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-16",
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
