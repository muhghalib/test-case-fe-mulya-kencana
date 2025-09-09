"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

interface TypographyProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  ref?: React.ForwardedRef<HTMLHeadingElement>;
  italic?: boolean;
  truncate?: false;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "400" | "500" | "600" | "700";
  align?: "left" | "right" | "center" | "justify";
  children: React.ReactNode;
}

const Typography = ({
  ref,
  weight,
  align,
  as,
  size,
  italic = false,
  className,
  children,
  truncate = false,
  asChild = false,
  style,
  ...props
}: TypographyProps) => {
  const Comp = asChild ? Slot : as || "span";

  return (
    <Comp
      ref={ref}
      className={clsx({ truncate, italic }, className)}
      style={{
        fontWeight: weight,
        fontSize: `var(--font-size-${size || "md"})`,
        textAlign: align,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  );
};

export { Typography };
