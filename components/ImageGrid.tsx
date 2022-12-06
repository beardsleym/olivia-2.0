import { GridItem, Grid, Image } from "@chakra-ui/react";

interface ImageGridProps {}

export const ImageGrid: React.FC<ImageGridProps> = ({}) => {
  const images = [
    { image: "2", row: 3, col: 6, gray: true },
    { image: "10", row: 3, col: 6, gray: false },
    { image: "5", row: 4, col: 8, gray: false },
    { image: "4", row: 2, col: 4, gray: true },
    { image: "8", row: 2, col: 4, gray: true },
    { image: "7", row: 2, col: 4, gray: true },
    { image: "6", row: 4, col: 8, gray: false },
    { image: "3", row: 2, col: 4, gray: true },
    { image: "9", row: 3, col: 6, gray: false },
    { image: "1", row: 3, col: 6, gray: true },
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
      {images.map(({ image, row, col, gray }) => (
        <GridItem rowSpan={row} colSpan={col} overflow="hidden" key={image}>
          {/* <NextImage
            src={`/headshots/${image}.jpg`}
            style={{
              objectFit: "contain",
            }}
            alt="Olivia"
            width={680}
            height={850}
            priority
          /> */}
          <Image
            src={`/avif/${image}.avif`}
            style={{
              objectFit: "contain",
            }}
            alt="Olivia"
            objectFit="contain"
            filter={gray ? "grayscale(100%)" : "grayscale(0%)"}
            _hover={{
              filter: gray ? "grayscale(0%)" : "grayscale(100%)",
            }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
