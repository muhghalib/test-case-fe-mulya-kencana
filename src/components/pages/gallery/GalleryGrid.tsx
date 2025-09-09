import { ReactNode } from "react";

import { Box } from "@/components/atoms/Box";

import styles from "./GalleryGrid.module.css";

type Props = {
  children: ReactNode;
};

export const GalleryGrid = ({ children }: Props) => {
  return <Box className={styles.container}>{children}</Box>;
};
