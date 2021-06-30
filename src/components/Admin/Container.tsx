import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends FlexProps {
    children: ReactNode;
}

export function Container({ children, ...rest }: Props): JSX.Element {
  return (
    <Flex
      w="100%"
      my="6"
      maxWidth={1480}
      mx="auto"
      pl={['1', '0']}
      pr={['1', '1', '1', '6']}
      {...rest}
    >
      {children}
    </Flex>
  );
}
