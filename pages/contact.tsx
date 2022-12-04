import {
  Box,
  Heading,
  Flex,
  Container,
  useColorModeValue,
  Image,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import { ImageGrid } from "../components/ImageGrid";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";
import { Socials } from "../components/Socials";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  const bg = useColorModeValue("white", "gray.800");
  const slides = Array.from(Array(10).keys()).map((slide) => {
    return `/avif/${slide + 1}.avif`;
  });

  return (
    <Container maxW="7xl" padding={0} bg={bg}>
      <Box
        backgroundColor={useColorModeValue("gray.200", "gray.800")}
        pb={10}
        px={5}
      >
        <Heading
          variant="h2"
          fontWeight="semibold"
          size="lg"
          color={useColorModeValue("blackAlpha.800", "white")}
          mb={3}
          mt={2}
        >
          Olivia Beardsley
        </Heading>
        <Socials iconsRight horizontalOnly />
        <AspectRatio ratio={2 / 1}>
          <Image src="avif/4.avif" alt="olivia" />
        </AspectRatio>
        <Heading
          variant="h2"
          fontWeight="semibold"
          size="lg"
          color={useColorModeValue("blackAlpha.800", "white")}
          mt={10}
          mb={3}
          textAlign="center"
        >
          Contact
        </Heading>
        <Text color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}>
          Lorem ipsum dolor sit amet consectetur. Nullam feugiat quam malesuada
          ultrices magna ornare malesuada ullamcorper. Orci nec ipsum sit amet
          sit.
        </Text>
      </Box>
      <Box
        backgroundColor={useColorModeValue("white", "gray.900")}
        py={10}
        px={5}
      >
        <ContactForm />
      </Box>
      <Box px={5}>
        <Footer />
      </Box>
    </Container>
  );
}
