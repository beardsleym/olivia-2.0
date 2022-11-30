import { Flex, Divider, IconButton, useColorModeValue } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  AudibleIcon,
  IMDBIcon,
  InstagramIcon,
  MailIcon,
  SpotlightIcon,
  TwitterIcon,
} from "../assets/Icons";

interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = ({}) => {
  const orientation = useBreakpointValue<any>({
    base: "horizontal",
    md: "vertical",
  });
  const socialIcons = [
    {
      icon: (
        <AudibleIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={6}
          key="audible"
        />
      ),
      href: "https://www.amazon.co.uk/s?k=Olivia+Beardsley&i=audible&ref=adbl_dp_pd_narr",
    },
    {
      icon: (
        <TwitterIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={6}
          key="twitter"
        />
      ),
      href: "https://twitter.com/olliebeardsley",
    },
    {
      icon: (
        <InstagramIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={6}
          key="instagram"
        />
      ),
      href: "https://www.instagram.com/missollie/",
    },
    {
      icon: (
        <SpotlightIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={6}
          key="spotlight"
        />
      ),
      href: "http://www.spotlight.com/interactive/cv/9177-8972-2432",
    },
    {
      icon: (
        <IMDBIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={6}
          key="imdb"
        />
      ),
      href: "https://www.imdb.com/name/nm6371549",
    },
    {
      icon: (
        <MailIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={6}
          key="mail"
        />
      ),
      href: "https://docs.google.com/forms/d/e/1FAIpQLSep5mHDqbUovGMIdyj2KvBUPPIMD170bpD7WH58ADaYHWvDjA/viewform?usp=sf_link",
    },
  ];
  return (
    <Flex
      mt={8}
      justifyContent="space-between"
      alignItems="center"
      gap={{ base: 1, sm: 4 }}
      mb={{ base: 4, md: 8 }}
      flexDirection={{ base: "row", md: "column" }}
    >
      <Divider
        color={useColorModeValue("blackAlpha.500", "white")}
        borderWidth="1px"
        orientation={orientation}
      />
      {socialIcons.map(({ icon, href }) => (
        <IconButton
          as={NextLink}
          variant="text"
          aria-label="social"
          icon={icon}
          key={icon.key}
          href={href}
        />
      ))}

      <Divider
        color={useColorModeValue("blackAlpha.500", "white")}
        borderWidth="1px"
        orientation={orientation}
      />
    </Flex>
  );
};
