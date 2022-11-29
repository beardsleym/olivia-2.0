import { Flex, Divider, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { AudibleIcon } from "../assets/Audible";
import { TwitterIcon } from "../assets/Twitter";
import { InstagramIcon } from "../assets/Instagram";
import { MailIcon } from "../assets/Mail";
import { InfoIcon } from "../assets/Info";
import { IMDBIcon } from "../assets/IMDB";

interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <Flex mt={4} justifyContent="space-between" alignItems="center" gap={1}>
      <Divider color="blackAlpha.500" borderWidth="1px" />
      <IconButton
        variant="text"
        aria-label="social"
        icon={<AudibleIcon color="black" h={6} w={6} />}
      />
      <IconButton
        variant="text"
        aria-label="social"
        icon={<TwitterIcon color="black" h={6} w={6} />}
      />
      <IconButton
        variant="text"
        aria-label="social"
        icon={<InstagramIcon color="black" h={6} w={6} />}
      />
      <IconButton
        variant="text"
        aria-label="social"
        icon={<InfoIcon color="black" h={6} w={6} />}
      />
      <IconButton
        variant="text"
        aria-label="social"
        icon={<IMDBIcon color="black" h={6} w={6} />}
      />
      <IconButton
        variant="text"
        aria-label="social"
        icon={<MailIcon color="black" h={6} w={6} />}
      />
      <Divider color="blackAlpha.500" borderWidth="1px" />
    </Flex>
  );
};
