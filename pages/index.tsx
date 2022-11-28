import { Box, Heading } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";

export default function Home() {
  const slides = [
    "headshots/Olivia-Beardsley-9058.jpg",
    "headshots/Olivia-Beardsley-8798.jpg",
  ];

  return (
    <Box>
      <Carousel slides={slides} />
      <Heading variant="h1">Olivia Beardsley</Heading>
      <Heading variant="h1">Actor / Voice Artist / Singer</Heading>
    </Box>
  );
}
