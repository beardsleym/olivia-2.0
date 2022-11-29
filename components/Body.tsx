import { Flex, Heading, Button, useColorModeValue } from "@chakra-ui/react";

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({}) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      px={{ base: 5, md: 7, lg: 16 }}
    >
      <Heading
        variant="h1"
        size="2xl"
        color={useColorModeValue("blackAlpha.800", "white")}
      >
        Olivia
      </Heading>
      <Heading
        variant="h1"
        size="2xl"
        color={useColorModeValue("blackAlpha.800", "white")}
      >
        Beardsley
      </Heading>
      <Heading
        variant="h2"
        fontWeight="semibold"
        size="lg"
        color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
        mt={2}
      >
        Actor / Voice Artist / Singer
      </Heading>
      <Button
        colorScheme={useColorModeValue("blackAlpha", "whiteAlpa")}
        variant="outline"
        w={"32"}
        mt={{ base: 7, md: 10 }}
      >
        Contact
      </Button>
    </Flex>
  );
};
