import { Text } from '@chakra-ui/react';

export function Logo(): JSX.Element {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      BTR
      <Text as="span" color="red.500" ml="1">.</Text>
    </Text>
  );
}
