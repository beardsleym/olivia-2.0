import {
  Box,
  Heading,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { ImageGrid } from "../components/ImageGrid";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";
import { Socials } from "../components/Socials";

export default function Home() {
  const bg = useColorModeValue("white", "gray.800");
  const slides = Array.from(Array(10).keys()).map((slide) => {
    return `/images/${slide + 1}.jpg`;
  });

  return (
    <Container maxW="7xl" padding={0} bg={bg}>
      <Flex
        direction={{ base: "column", md: "row" }}
        px={{ base: 0, sm: 16, md: 7, lg: 16, xl: 32 }}
      >
        <Box flexGrow={4}>
          <Carousel slides={slides} />
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          order={{ base: 0, md: -1 }}
        >
          <Socials />
          <Body />
        </Flex>
      </Flex>
      <Box px={{ base: 5, md: 32 }}>
        <Heading
          variant="h3"
          fontWeight="semibold"
          size="lg"
          color={useColorModeValue("blackAlpha.800", "white")}
          mt={10}
          mb={3}
        >
          Portfolio
        </Heading>
        {/* IMAGE GRID */}
        <ImageGrid />
        <Footer />
      </Box>
    </Container>
  );
}
