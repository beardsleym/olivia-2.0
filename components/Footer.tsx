import { Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => (
  <Flex
    height={16}
    pt={5}
    mb={{ base: 0, md: 5 }}
    justifyContent={{ base: "space-between", lg: "space-around" }}
    alignItems="center"
  >
    <Text fontSize="xs" color={useColorModeValue("blackAlpha.800", "white")}>
      © Olivia Beardsley
    </Text>
    <Link
      as={NextLink}
      href="https://showcasebase.com"
      fontSize="xs"
      color={useColorModeValue("blackAlpha.800", "white")}
    >
      Check out showcasebase.com
    </Link>
  </Flex>
);
