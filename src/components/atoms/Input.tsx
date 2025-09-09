"use client";

import * as React from "react";

import { clsx } from "clsx";

import styles from "./Input.module.css";

type Props = React.ComponentProps<"input">;

function Input({ className, type = "text", ...props }: Props) {
  return (
    <input type={type} data-slot="input" className={clsx(styles.input, className)} {...props} />
  );
}

export { Input };
