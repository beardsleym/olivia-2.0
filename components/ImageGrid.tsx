import { GridItem, Grid, Image } from "@chakra-ui/react";

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
      h="920px"
      templateRows="repeat(14, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={3}
    >
      {images.map(({ image, row, col }) => (
        <GridItem rowSpan={row} colSpan={col} overflow="hidden" key={image}>
          <Image src={`headshots/${image}.jpg`} fit="contain" alt="Olivia" />
        </GridItem>
      ))}
    </Grid>
  );
};