import { Text, Flex, Input } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface NavLiveProps {
    children: ReactNode;
    id: string
}

export function ItemSearch({ children, id, ...rest }: NavLiveProps): JSX.Element {
  return (
    <Flex direction="column" {...rest}>
      <Text as="label" htmlFor={id} fontSize="lg" fontWeight="medium">{children}</Text>
      <Input
        bg="gray.400"
        size="sm"
        id={id}
        borderRadius="8px"
        focusBorderColor="red.400"
      />
    </Flex>
  );
}
