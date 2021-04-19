import { Image } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Image
      src="/assets/banner.png"
      alt="banner"
      w="100%"
      h={['160px', '272px']}
      maxWidth="720px"
    />
  );
}
