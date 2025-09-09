"use client";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

const Box = ({
  ref,
  children,
  className,
  asChild,
  as = "div",
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
  as?: "header" | "section" | "div" | "main" | "footer" | "aside" | "nav" | "article";
}) => {
  const Comp = asChild ? Slot : as;

  return (
    <Comp ref={ref} className={clsx(className)} {...props}>
      {children}
    </Comp>
  );
};

export { Box };
