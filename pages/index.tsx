import { Box, Heading, Button } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { ImageGrid } from "../components/ImageGrid";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export default function Home() {
  const slides = Array.from(Array(10).keys()).map((slide) => {
    return `headshots/${slide + 1}.jpg`;
  });

  return (
    <Box>
      <Carousel slides={slides} />
      <Box p={5}>
        <Body />
        <Heading
          variant="h3"
          fontWeight="semibold"
          size="lg"
          color="blackAlpha.800"
          mt={10}
          mb={3}
        >
          Portfolio
        </Heading>
        {/* IMAGE GRID */}
        <ImageGrid />
        <Footer />
      </Box>
    </Box>
  );
}
