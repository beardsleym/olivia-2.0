import { Box, Heading, Button } from "@chakra-ui/react";

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({}) => {
  return (
    <>
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
    </>
  );
};
