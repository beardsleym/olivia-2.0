import { Box, Heading, Button } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { ImageGrid } from "../components/ImageGrid";
import { Footer } from "../components/Footer";

export default function Home() {
  const slides = Array.from(Array(10).keys()).map((slide) => {
    return `headshots/${slide + 1}.jpg`;
  });

  return (
    <Box>
      <Carousel slides={slides} />
      <Box p={5}>
        <Heading variant="h1" size="2xl" color="blackAlpha.800">
          Olivia
        </Heading>
        <Heading variant="h1" size="2xl" color="blackAlpha.800">
          Beardsley
        </Heading>
        <Heading
          variant="h2"
          fontWeight="semibold"
          size="lg"
          color="blackAlpha.600"
          mt={2}
        >
          Actor / Voice Artist / Singer
        </Heading>
        <Button colorScheme="blackAlpha" variant="outline" mt={7}>
          Contact
        </Button>
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
