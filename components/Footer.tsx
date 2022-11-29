import { Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex
      height={16}
      pt={5}
      pb={{ base: 0, md: 16 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="xs" color="blackAlpha.800">
        © Olivia Beardsley
      </Text>
      <Link
        as={NextLink}
        href="https://showcasebase.com"
        fontSize="xs"
        color="blackAlpha.800"
      >
        Check out Showcase 2020
      </Link>
    </Flex>
  );
};
