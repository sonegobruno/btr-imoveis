import { Heading, Flex } from '@chakra-ui/react';
import { Filter } from '../Filter';

export function FilterContainer(): JSX.Element {
  return (
    <Flex maxWidth="880px" mx="auto" py={['4', '6']} px={['2', '4']} w="100%" direction="column" bg="gray.200">
      <Heading fontSize={['2xl', '3xl']} textAlign="center">BTR Imóveis</Heading>
      <Filter mt={['3', '5']} />
    </Flex>
  );
}
