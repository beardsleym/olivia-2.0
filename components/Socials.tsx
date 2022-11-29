import { Flex, Divider, IconButton, useColorModeValue } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { AudibleIcon } from "../assets/Audible";
import { TwitterIcon } from "../assets/Twitter";
import { InstagramIcon } from "../assets/Instagram";
import { MailIcon } from "../assets/Mail";
import { InfoIcon } from "../assets/Info";
import { IMDBIcon } from "../assets/IMDB";

interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = ({}) => {
  const orientation = useBreakpointValue<any>({
    base: "horizontal",
    md: "vertical",
  });
  const socialIcons = [
    <AudibleIcon
      color={useColorModeValue("black", "white")}
      h={6}
      w={6}
      m={6}
      key="audible"
    />,
    <TwitterIcon
      color={useColorModeValue("black", "white")}
      h={6}
      w={6}
      m={6}
      key="twitter"
    />,
    <InstagramIcon
      color={useColorModeValue("black", "white")}
      h={6}
      w={6}
      m={6}
      key="instagram"
    />,
    <InfoIcon
      color={useColorModeValue("black", "white")}
      h={6}
      w={6}
      m={6}
      key="info"
    />,
    <IMDBIcon
      color={useColorModeValue("black", "white")}
      h={6}
      w={6}
      m={6}
      key="imdb"
    />,
    <MailIcon
      color={useColorModeValue("black", "white")}
      h={6}
      w={6}
      m={6}
      key="mail"
    />,
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
      {socialIcons.map((icon) => (
        <IconButton
          variant="text"
          aria-label="social"
          icon={icon}
          key={icon.key}
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
