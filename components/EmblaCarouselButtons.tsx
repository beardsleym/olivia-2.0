import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton, useBreakpointValue } from "@chakra-ui/react";

export const DotButton = ({ selected, onClick }: any) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }: any) => {
  const bottom = useBreakpointValue<any>({
    base: "3%",
    md: "50%",
  });
  return (
    <IconButton
      position="absolute"
      left="3%"
      bottom={bottom}
      onClick={onClick}
      disabled={!enabled}
      variant="ghost"
      rounded="full"
      aria-label="prev"
      _hover={{ backgroundColor: "whiteAlpha.600" }}
      icon={<ChevronLeftIcon color="white" h={6} w={6} />}
    />
  );
};

export const NextButton = ({ enabled, onClick }: any) => {
  const bottom = useBreakpointValue<any>({
    base: "3%",
    md: "50%",
  });
  return (
    <IconButton
      position="absolute"
      right="3%"
      bottom={bottom}
      onClick={onClick}
      disabled={!enabled}
      variant="ghost"
      rounded="full"
      aria-label="next"
      _hover={{ backgroundColor: "whiteAlpha.600" }}
      icon={<ChevronRightIcon color="white" h={6} w={6} />}
    />
  );
};
