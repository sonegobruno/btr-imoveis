import { Image, Flex } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      bgImage="url(/assets/banner.svg)"
      bgSize="cover"
      gRepeat="no-repeat"
      alt="banner"
      w="100%"
      h={["160px", "273px"]}
      maxWidth="880px"
      mx="auto"
      mt={["0", "0", "4"]}
      borderRadius={["0", "0", "8px 8px 0 0"]}
    />
  );
}
