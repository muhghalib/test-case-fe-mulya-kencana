import { GalleryGrid } from "./GalleryGrid";
import { GalleryItem } from "./GalleryItem";

import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1025/600/400",
];

export const GalleryPage = () => {
  return (
    <>
      <Typography weight="600" as="h1" size="3xl">
        Gallery
      </Typography>
      <GalleryGrid>
        {images.map((src, index) => (
          <GalleryItem
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            priority={index === 0}
          />
        ))}
      </GalleryGrid>
    </>
  );
};
