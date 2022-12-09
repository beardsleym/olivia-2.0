import {
  Box,
  Heading,
  Center,
  Container,
  useColorModeValue,
  Image,
  AspectRatio,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Footer } from "../components/Footer";
import { Socials } from "../components/Socials";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="7xl" padding={0} bg={bg}>
      <Box
        backgroundColor={useColorModeValue("gray.100", "gray.800")}
        pb={10}
        px={5}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          mb={5}
        >
          <NextLink href="/">
            <Heading
              variant="h2"
              fontWeight="semibold"
              size="lg"
              color={useColorModeValue("blackAlpha.800", "white")}
              mb={3}
              mt={2}
            >
              <ChevronLeftIcon h={10} w={10} /> Olivia Beardsley
            </Heading>
          </NextLink>
          <Box>
            <Socials iconsRight horizontalOnly />
          </Box>
        </Flex>
        <AspectRatio ratio={2 / 1} maxW="2xl" margin="auto">
          <Image src="avif/4.avif" alt="olivia" rounded="md" />
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
        <Center>
          <Text
            maxW="md"
            color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
          >
            Lorem ipsum dolor sit amet consectetur. Nullam feugiat quam
            malesuada ultrices magna ornare malesuada ullamcorper. Orci nec
            ipsum sit amet sit.
          </Text>
        </Center>
      </Box>
      <Box
        backgroundColor={useColorModeValue("gray.50", "gray.900")}
        py={10}
        px={5}
      >
        <Center>
          <ContactForm />
        </Center>
      </Box>
      <Box px={5} backgroundColor={useColorModeValue("gray.100", "gray.800")}>
        <Footer />
      </Box>
    </Container>
  );
}
