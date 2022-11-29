import { GridItem, Grid } from "@chakra-ui/react";
import NextImage from "next/image";

interface ImageGridProps {}

export const ImageGrid: React.FC<ImageGridProps> = ({}) => {
  const images = [
    { image: "2-BW", row: 3, col: 6 },
    { image: "10", row: 3, col: 6 },
    { image: "5", row: 4, col: 8 },
    { image: "4-BW", row: 2, col: 4 },
    { image: "8-BW", row: 2, col: 4 },
    { image: "7-BW", row: 2, col: 4 },
    { image: "6", row: 4, col: 8 },
    { image: "3-BW", row: 2, col: 4 },
    { image: "9", row: 3, col: 6 },
    { image: "1-BW", row: 3, col: 6 },
  ];
  return (
    <Grid
      h={{
        base: "920px",
        sm: "1240px",
        md: "1500px",
        lg: "2160px",
        xl: "3000px",
      }}
      templateRows="repeat(14, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={3}
    >
      {images.map(({ image, row, col }) => (
        <GridItem rowSpan={row} colSpan={col} overflow="hidden" key={image}>
          <NextImage
            src={`/headshots/${image}.jpg`}
            objectFit="contain"
            alt="Olivia"
            width={680}
            height={850}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
