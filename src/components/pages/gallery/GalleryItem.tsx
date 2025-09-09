import Image from "next/image";

import { Box } from "@/components/atoms/Box";

import styles from "./GalleryItem.module.css";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export const GalleryItem = ({ src, alt, priority }: Props) => {
  return (
    <Box className={styles.wrapper}>
      <Image src={src} alt={alt} fill objectFit="cover" priority={priority} />
    </Box>
  );
};
